# Polygram - System Architecture Design

## 1. Guiding Principles & System Requirements

### 1.1. Guiding Principles
- **Modularity & Separation of Concerns:** Hệ thống được thiết kế thành các lớp (layers) và thành phần (components) độc lập, giúp dễ dàng phát triển, bảo trì, và nâng cấp từng phần mà không ảnh hưởng đến toàn bộ hệ thống.
- **Scalability:** Kiến trúc phải có khả năng mở rộng theo chiều ngang (horizontally scalable) để đáp ứng sự tăng trưởng dữ liệu từ blockchain Aptos và lượng truy cập từ người dùng.
- **Real-time:** Tối ưu hóa độ trễ để đảm bảo dữ liệu được cung cấp cho người dùng cuối gần như ngay lập tức sau khi sự kiện xảy ra on-chain.

### 1.2. Non-Functional Requirements (NFRs)
- **Real-time Latency:** Độ trễ từ khi giao dịch được xác nhận on-chain đến khi dữ liệu được trả về qua API GraphQL phải dưới 5 giây ở phân vị thứ 95 (p95 latency < 5s).
- **High Availability & Disaster Recovery:**
    - **Recovery Time Objective (RTO):** Thời gian để hệ thống phục hồi sau sự cố gián đoạn dịch vụ phải dưới 1 giờ.
    - **Recovery Point Objective (RPO):** Lượng dữ liệu tối đa có thể bị mất trong trường hợp sự cố nghiêm trọng là 5 phút.
- **Data Integrity:** Đảm bảo 100% dữ liệu off-chain phải nhất quán và chính xác so với dữ liệu on-chain.
- **Security:** Triển khai các biện pháp bảo mật mạnh mẽ, đặc biệt là cơ chế cô lập dữ liệu (data isolation) giữa các dự án của người dùng (multi-tenancy).

---

## 2. High-Level Architecture Overview

Kiến trúc tổng thể của Polygram bao gồm 3 lớp chính, hoạt động phối hợp để biến dữ liệu on-chain thô thành những insight có giá trị và dễ dàng truy cập.

- **Layer 1: Data Ingestion (Thu thập dữ liệu):** Lớp này chịu trách nhiệm kết nối với blockchain Aptos, trích xuất dữ liệu giao dịch và sự kiện một cách liên tục, và lưu trữ chúng ở dạng thô.
- **Layer 2: Data Processing (Xử lý dữ liệu):** Lớp này lấy dữ liệu thô, giải mã (decode), làm giàu (enrich) bằng cách kết hợp với các nguồn dữ liệu khác, áp dụng logic nghiệp vụ, và cấu trúc hóa chúng để sẵn sàng cho việc truy vấn.
- **Layer 3: Data Delivery (Phân phối dữ liệu):** Lớp này cung cấp các giao diện (API, UI) cho người dùng cuối. Nó cho phép người dùng truy vấn dữ liệu đã được xử lý (API công cộng) và cung cấp công cụ để họ tự tạo các luồng xử lý dữ liệu của riêng mình (Custom Indexer Platform).

---

## 3. Component Breakdown & Tech Stack

### Layer 1: Data Ingestion
Lớp này là đầu vào của toàn bộ hệ thống, đảm bảo dữ liệu on-chain được thu thập đầy đủ và đáng tin cậy.

- **Component: Aptos Node Data Extractor (ETL Server)**
    - **Mô tả:** Một dịch vụ chạy nền (worker) kết nối liên tục tới Aptos Full Node qua gRPC/API để stream các giao dịch và sự kiện mới nhất. Nó chịu trách nhiệm cho việc thu thập dữ liệu real-time và cả việc backfill (đồng bộ) dữ liệu lịch sử.
    - **Tech Stack:** **Rust / Go** trên **Kubernetes (EKS)**.
    - **Lý do:** Rust và Go cung cấp hiệu năng vượt trội và an toàn bộ nhớ, rất quan trọng khi xử lý một luồng dữ liệu lớn và liên tục từ blockchain. Kubernetes giúp điều phối, tự động scale và đảm bảo tính sẵn sàng cao cho các worker này.

- **Component: Raw Data Warehouse**
    - **Mô tả:** Nơi lưu trữ toàn bộ dữ liệu on-chain ở dạng thô. Đây là "single source of truth", cho phép hệ thống có thể xử lý lại (re-process) dữ liệu khi cần thay đổi logic mà không cần phải quét lại blockchain từ đầu.
    - **Tech Stack:** **Amazon S3** kết hợp với **ClickHouse / TimescaleDB**.
    - **Lý do:** S3 là giải pháp lưu trữ object storage cực kỳ rẻ và bền bỉ cho dữ liệu lạnh (cold data). ClickHouse hoặc TimescaleDB được tối ưu cho việc lưu trữ và truy vấn dữ liệu chuỗi thời gian (time-series) hiệu năng cao, rất phù hợp cho dữ liệu nóng (hot data) cần truy cập nhanh.

### Layer 2: Data Processing
Đây là bộ não của hệ thống, nơi dữ liệu thô được biến thành thông tin có giá trị.

- **Component: Event Bus**
    - **Mô tả:** Là trung tâm điều phối sự kiện, giúp các lớp giao tiếp với nhau một cách bất đồng bộ. Data Extractor sẽ đẩy (publish) các sự kiện "block mới" vào đây. Các dịch vụ xử lý khác sẽ lắng nghe (subscribe) các sự kiện này để thực thi nhiệm vụ của mình.
    - **Tech Stack:** **AWS EventBridge** hoặc **Apache Kafka / Redpanda**.
    - **Lý do:** EventBridge là giải pháp serverless, dễ sử dụng và tích hợp tốt với hệ sinh thái AWS. Kafka/Redpanda cung cấp thông lượng cao hơn và nhiều quyền kiểm soát hơn, phù hợp cho giai đoạn mở rộng sau này.

- **Component: Data Pipeline Processor**
    - **Mô tả:** Một tập hợp các hàm serverless hoặc microservice lắng nghe sự kiện từ Event Bus. Mỗi processor thực hiện một nhiệm vụ chuyên biệt: giải mã giao dịch, làm giàu dữ liệu (ví dụ: lấy giá token từ CoinGecko), áp dụng logic của người dùng (từ Custom Indexer), và lưu kết quả vào cơ sở dữ liệu đã qua xử lý.
    - **Tech Stack:** **AWS Lambda**.
    - **Lý do:** Lambda là lựa chọn hoàn hảo cho kiến trúc hướng sự kiện. Nó tự động scale theo số lượng sự kiện, và bạn chỉ trả tiền cho thời gian thực thi, giúp tối ưu chi phí vận hành.

- **Component: Processed Database (IndexerDB)**
    - **Mô tả:** Nơi lưu trữ dữ liệu đã được xử lý, làm giàu và cấu trúc hóa. Đây là nguồn dữ liệu cho Data Delivery Layer. Trong môi trường multi-tenant, mỗi dự án của người dùng sẽ có một schema riêng biệt để đảm bảo cô lập dữ liệu.
    - **Tech Stack:** **NeonDB (Serverless Postgres)**.
    - **Lý do:** Postgres cực kỳ mạnh mẽ và linh hoạt. Mô hình serverless của Neon giúp tự động scale và tối ưu chi phí, đặc biệt hiệu quả khi quản lý hàng trăm schema/database cho các dự án người dùng khác nhau.

- **Component: System Configuration Database**
    - **Mô tả:** Cơ sở dữ liệu quan hệ lưu trữ các thông tin của hệ thống như: tài khoản người dùng, cấu hình dự án, schema của các custom indexer, API keys, v.v.
    - **Tech Stack:** **AWS RDS for PostgreSQL**.
    - **Lý do:** RDS là một dịch vụ được quản lý hoàn toàn, cung cấp tính ổn định, an toàn và các tính năng sao lưu/phục hồi mạnh mẽ, rất phù hợp để lưu trữ dữ liệu hệ thống quan trọng.

### Layer 3: Data Delivery
Lớp này là giao diện người dùng, nơi giá trị của sản phẩm được thể hiện rõ nhất.

- **Component: GraphQL / RESTful API Gateway**
    - **Mô tả:** Cung cấp các endpoint API cho phép người dùng truy cập dữ liệu. Nó chịu trách nhiệm xác thực, phân quyền, giới hạn tần suất truy cập (rate limiting) và chuyển tiếp query tới các dịch vụ bên trong.
    - **Tech Stack:** **Hasura**.
    - **Lý do:** Hasura có khả năng tự động sinh ra một GraphQL API mạnh mẽ từ cơ sở dữ liệu Postgres, giúp tiết kiệm hàng tháng trời phát triển. Nó cũng tích hợp sẵn các tính năng phân quyền và real-time subscriptions qua WebSocket.

- **Component: AI Schema Generator**
    - **Mô tả:** Một microservice chuyên dụng, nhận vào địa chỉ smart contract, sử dụng các mô hình ngôn ngữ lớn (LLM) để phân tích và tự động đề xuất cấu trúc dữ liệu (schema) cho người dùng, hiện thực hóa tính năng low-code/AI-powered.
    - **Tech Stack:** **LangChain / LangGraph** điều phối các LLM (từ **OpenAI, Claude** qua **OpenRouter**).
    - **Lý do:** Đây là bộ công cụ tiêu chuẩn và mạnh mẽ nhất hiện nay để xây dựng các ứng dụng tích hợp AI, giúp quản lý các chuỗi prompt (prompt chaining) và tương tác với LLM một cách hiệu quả.

- **Component: Web Application (Dashboard)**
    - **Mô tả:** Giao diện web cho phép người dùng đăng ký, quản lý dự án, xây dựng custom indexer, theo dõi trạng thái và lấy API key.
    - **Tech Stack:** **Next.js (React)**, **Tailwind CSS**, triển khai trên **Vercel**.
    - **Lý do:** Next.js là một framework phát triển full-stack mạnh mẽ, cho phép xây dựng các ứng dụng web hiện đại, hiệu năng cao và có trải nghiệm người dùng tốt.



