# Kế hoạch Cải tiến Công ty

## 1. Mục đích Tài liệu

*   **Nơi liệt kê và theo dõi:** Ghi nhận và giám sát tiến độ của các sáng kiến cải tiến. Mỗi hạng mục sẽ được theo dõi với các thông tin cốt lõi như:
    *   Trạng thái (ví dụ: `chưa bắt đầu`, `đang làm`, `hoàn thành`).
    *   Mức độ ưu tiên.
    *   Ngày dự kiến hoàn thành.
*   **"Up-stream" cho các thay đổi:** Là nguồn thông tin và định hướng ban đầu cho các điều chỉnh ở nơi khác. Khi một cải tiến hoàn thành, cần ghi nhận lại "dấu vết" (ví dụ: liên kết đến file, pull request) để dễ dàng rà soát và tham chiếu.
*   **Minh bạch và Dễ dàng chia sẻ:** Cung cấp một cái nhìn tổng quan, giúp bản thân tiện theo dõi và có thể dễ dàng chia sẻ khi cần thiết.

## 2. Mục tiêu Cải tiến

*(Sẽ được thảo luận và cập nhật sau)*

## 3. Check-list Cải tiến

### Hạng mục: Engineering

#### Cải tiến 1 (IP-001): Chuẩn hóa tài liệu PRD cho 100% dự án

*   **Mục tiêu:** Đảm bảo mọi dự án đang chạy và dự án mới đều có Product Requirements Document (PRD) được viết và cập nhật theo mẫu chuẩn của Cyberk.
*   **Lý do (Tại sao):** Việc chuẩn hóa PRD giúp team (dev, tester, PM) có cùng một nguồn thông tin tin cậy, giảm hiểu lầm, và là nền tảng cho việc lên kế hoạch và phát triển sản phẩm một cách nhất quán.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Mẫu PRD chuẩn được ban hành và phổ biến.
    *   *Kết quả 2:* Toàn bộ các dự án hiện tại (`list dự án ở đây`) có PRD được cập nhật theo mẫu chuẩn.
    *   *Kết quả 3:* Quy định bắt buộc áp dụng mẫu PRD cho tất cả dự án mới được thông qua.
*   **Plans (Kế hoạch hành động):**
    1.  Rà soát và hoàn thiện mẫu PRD chuẩn.
    2.  Lên danh sách các dự án cần cập nhật PRD.
    3.  Phân công và đặt deadline cho các PM/lead để cập nhật.
    4.  Tổ chức một buổi hướng dẫn nhanh cho toàn đội.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới file/pull request sau khi thực hiện)*

---

#### Cải tiến 2 (IP-002): Bổ sung tài liệu BRD cho các Key Features

*   **Mục tiêu:** Đảm bảo 100% các `key features` (xem định nghĩa ở Phụ lục) trong tất cả dự án đều có tài liệu Business Requirements Document (BRD) chi tiết.
*   **Lý do (Tại sao):** BRD giúp làm rõ yêu cầu nghiệp vụ phía sau một tính năng, đảm bảo team kỹ thuật hiểu đúng "linh hồn" của yêu cầu, không chỉ là các chức năng bề mặt. Điều này đặc biệt quan trọng cho các tính năng chủ chốt, giúp chúng được phát triển đúng hướng và mang lại giá trị cao nhất.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Mẫu BRD chuẩn được ban hành (hoặc tái xác nhận).
    *   *Kết quả 2:* Tất cả các dự án hiện tại đã xác định được danh sách `key features` của mình.
    *   *Kết quả 3:* 100% các `key features` đã được xác định có BRD tương ứng.
*   **Plans (Kế hoạch hành động):**
    1.  Tổ chức một buổi họp với các PM/lead để thống nhất định nghĩa và cách xác định `key features`.
    2.  Yêu cầu các PM/lead lập danh sách `key features` cho dự án của họ và trình bày để review chéo.
    3.  Phân công và đặt deadline cho việc viết BRD cho các `key features` còn thiếu.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới file/pull request sau khi thực hiện)*

---

#### Cải tiến 3 (IP-003): Tự động hóa việc tạo và tích hợp Meeting Minutes (MM)

*   **Mục tiêu:** 100% các cuộc họp với khách hàng được AI tự động tóm tắt và các thông tin quan trọng được tích hợp vào tài liệu dự án một cách có hệ thống.
*   **Lý do (Tại sao):** Không chỉ tiết kiệm thời gian ghi chép, mà còn biến meeting minutes từ tài liệu tĩnh thành nguồn dữ liệu sống, tự động cập nhật vào "single source of truth" của dự án, đảm bảo thông tin luôn nhất quán.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* 100% cuộc họp với khách hàng được đặt lịch qua một cổng trung tâm (anderson) để AI có thể tự động tham gia và tóm tắt.
    *   *Kết quả 2:* Hoàn thiện công cụ (tool) có khả năng tự động đồng bộ meeting minutes từ AI về đúng thư mục dự án trong Git workspace.
    *   *Kết quả 3:* Hoàn thiện bộ quy tắc (ruleset) để trích xuất thông tin (action items, requirements) từ meeting minutes và đề xuất cập nhật cho các tài liệu liên quan.
*   **Plans (Kế hoạch hành động):**
    1.  **Quy trình hóa:** Thiết lập và ban hành quy trình bắt buộc về việc đặt lịch họp qua "anderson" để AI có thể tham gia.
    2.  **Phát triển Tool đồng bộ:**
        *   Thiết kế luồng hoạt động của tool: AI -> Tool -> Git workspace.
        *   Viết mã nguồn và triển khai tool.
    3.  **Xây dựng Bộ quy tắc trích xuất:**
        *   Phân tích định dạng của MM do AI tạo ra.
        *   Xây dựng logic để nhận diện và trích xuất các thông tin quan trọng (ví dụ: action items, decisions, new requirements).
    4.  **Tích hợp và Đào tạo:**
        *   Tích hợp bộ quy tắc vào tool đồng bộ.
        *   Tổ chức đào tạo cho team về quy trình mới và cách sử dụng kết quả do AI tạo ra.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới tool, bộ quy tắc, tài liệu hướng dẫn)*

---

#### Cải tiến 4 (IP-004): Nâng cao chất lượng và độ bao phủ của Unit Test

*   **Mục tiêu:** Thiết lập một tiêu chuẩn cao về chất lượng code bằng cách áp dụng chính sách unit test một cách hiệu quả. Cụ thể:
    *   **Đối với code mới/sửa đổi:** Yêu cầu độ bao phủ (branch coverage) tối thiểu **90%** cho các logic nghiệp vụ quan trọng.
    *   **Đối với code cũ (legacy):** Lập kế hoạch và tăng dần độ bao phủ cho các module quan trọng theo từng giai đoạn.
*   **Lý do (Tại sao):** Thay vì theo đuổi 100% một cách máy móc, chúng ta tập trung vào việc đảm bảo các phần code quan trọng, phức tạp và dễ phát sinh lỗi nhất được kiểm thử kỹ lưỡng. Cách tiếp cận này tối ưu hóa nguồn lực và mang lại sự tự tin cao nhất khi thay đổi code.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Ban hành định nghĩa chính thức về "logic nghiệp vụ quan trọng" cần được ưu tiên test.
    *   *Kết quả 2:* Tích hợp thành công công cụ đo lường coverage vào quy trình CI/CD, tự động chặn các Pull Request không đạt ngưỡng 90% coverage cho code mới.
    *   *Kết quả 3:* Xác định được 3-5 module legacy quan trọng nhất cần được tăng coverage trong quý tới.
*   **Plans (Kế hoạch hành động):**
    1.  **Thiết lập tiêu chuẩn:**
        *   Tổ chức buổi thảo luận với team kỹ thuật để thống nhất định nghĩa "logic nghiệp vụ quan trọng".
        *   Lựa chọn và cấu hình công cụ đo lường coverage (ví dụ: JaCoCo, Istanbul/nyc).
    2.  **Tích hợp CI/CD:** Cấu hình pipeline để chạy kiểm tra coverage và thực thi quy tắc trên mỗi Pull Request.
    3.  **Xử lý Legacy Code:** Phân tích code base, xác định các module ưu tiên và đưa vào backlog để cải thiện dần.
    4.  **Đào tạo:** Tổ chức workshop về các kỹ thuật viết unit test hiệu quả (ví dụ: mocking, dependency injection) để team có thể đạt được coverage một cách ý nghĩa, không chỉ là chạy theo con số.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới tài liệu tiêu chuẩn, cấu hình CI/CD)*

---

#### Cải tiến 5 (IP-005): Đào tạo về triết lý AI-Driven Development (ADD)

*   **Mục tiêu:** 100% thành viên (đặc biệt là đội ngũ phát triển) được đào tạo và nắm vững phương pháp luận AI-Driven Development (ADD) của công ty.
*   **Lý do (Tại sao):** Việc thống nhất một phương pháp luận làm việc với AI giúp tối ưu hóa sức mạnh của công cụ, nâng cao năng suất, đảm bảo chất lượng sản phẩm và nâng tầm vai trò của lập trình viên từ người viết code thành kiến trúc sư giải pháp.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Hoàn thiện giáo án chi tiết cho khóa học ADD (4 buổi), dựa trên tài liệu gốc `@ai-driven-development.md`.
    *   *Kết quả 2:* Tổ chức thành công ít nhất một khóa học cho toàn bộ thành viên, do Anderson và Huy phụ trách.
    *   *Kết quả 3:* Xây dựng và triển khai thành công script chấm điểm tự động cho bài tập cuối khóa (viết PRD/BRD).
    *   *Kết quả 4:* Tỷ lệ thành viên hoàn thành khóa học và đạt yêu cầu bài tập đạt trên 95%.
*   **Plans (Kế hoạch hành động):**
    1.  **Chuẩn bị khóa học:**
        *   Anderson và Huy soạn thảo giáo án chi tiết cho 4 buổi học hàng tuần.
        *   Chuẩn bị tài liệu, ví dụ và bài tập thực hành.
    2.  **Tổ chức:**
        *   Lên lịch và thông báo về khóa học.
        *   Tiến hành giảng dạy.
    3.  **Xây dựng Tool chấm điểm:**
        *   Định nghĩa các tiêu chí chấm điểm cho PRD/BRD.
        *   Viết script tự động phân tích và cho điểm dựa trên các tiêu chí đó.
    4.  **Đánh giá và Tốt nghiệp:**
        *   Giao bài tập cuối khóa.
        *   Sử dụng script để chấm điểm và cấp chứng nhận hoàn thành.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới giáo án, script chấm điểm, danh sách học viên)*

---

#### Cải tiến 6 (IP-006): Xây dựng nhật ký dự án (Functional Diary)

*   **Mục tiêu:** 100% nhân sự có functional diary cho từng tính năng được phát triển, và được cập nhật mỗi khi tính năng đó được phát triển.
*   **Lý do (Tại sao):** Việc lưu vết quá trình phát triển là công cụ quan trọng để phân tích hiệu suất, phát hiện vấn đề sớm và báo cáo khi cần thiết. Mỗi Functional Requirement (FR) trong PRD sẽ có một file nhật ký riêng biệt để theo dõi tiến độ và quá trình phát triển.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Có được diary template và rules chuẩn cho việc ghi chép nhật ký phát triển tính năng.
    *   *Kết quả 2:* Phổ biến thành công cho anh em và mọi người sẵn lòng đón nhận, áp dụng tần suất hằng ngày.
    *   *Kết quả 3:* Tích hợp thành công vào AI rules để tự động nhắc nhở và hỗ trợ việc ghi chép.
    *   *Kết quả 4:* Thiết lập cơ chế kiểm tra và điều tra nguyên nhân khi thiếu functional diary.
*   **Plans (Kế hoạch hành động):**
    1.  **Viết rules và template:**
        *   Thiết kế template nhật ký cho từng FR với format chuẩn (ngày tháng, tiến độ, vấn đề, giải pháp).
        *   Xây dựng rules cho AI để tự động nhắc nhở và hỗ trợ việc ghi chép.
    2.  **Tổ chức phổ biến cho anh em:**
        *   Hướng dẫn team về cách sử dụng functional diary.
        *   Demo cách tích hợp với workflow hiện tại.
    3.  **Tích hợp vào AI workflow:**
        *   Đưa rules vào hệ thống AI để tự động nhắc nhở khi bắt đầu phát triển FR mới.
        *   Tạo cơ chế tự động tạo file diary cho FR mới.
    4.  **Thiết lập cơ chế kiểm tra:**
        *   Xây dựng quy trình review định kỳ functional diary.
        *   Thiết lập alert khi phát hiện thiếu diary hoặc cập nhật không đầy đủ.
*   **Status:** `Đang viết document`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới template, rules, và quy trình kiểm tra)*

---

#### Cải tiến 7 (IP-007): AI-Powered Source Code & Architecture Audit

*   **Mục tiêu:** Xây dựng một workflow tự động, sử dụng AI để kiểm tra và xác thực chất lượng mã nguồn và cấu trúc kiến trúc của dự án.
*   **Lý do (Tại sao):** Đảm bảo "xương sống" của dự án (code và kiến trúc) luôn khỏe mạnh, sạch sẽ và tuân thủ thiết kế. Việc audit tự động giúp ngăn chặn "technical debt" (nợ kỹ thuật) ngay từ khi nó mới hình thành, thay vì phải xử lý những hậu quả tốn kém về sau.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Ban hành bộ quy tắc Linter và Coding Convention chính thức, tích hợp vào môi trường phát triển (IDE) và CI/CD.
    *   *Kết quả 2:* Xây dựng thành công script có khả năng tự động kiểm tra và báo lỗi khi phát hiện việc vô hiệu hóa linter trên toàn bộ file/thư mục.
    *   *Kết quả 3:* Script có khả năng đối chiếu cấu trúc thư mục hiện tại của dự án với một "bản đồ kiến trúc" (`architecture.map.yml`) được định nghĩa trước, và cảnh báo khi có sai lệch.
*   **Plans (Kế hoạch hành động):**
    1.  **Định nghĩa "Tiêu chuẩn Vàng":**
        *   Tổ chức workshop để thống nhất và chốt hạ bộ quy tắc Linter & Coding Convention.
        *   Thiết kế cấu trúc file `architecture.map.yml` để mô tả kiến trúc thư mục mong muốn.
    2.  **Phát triển Tool Audit:**
        *   Viết script lõi để thực thi việc kiểm tra.
        *   Tích hợp các công cụ linter phổ biến (như ESLint, Prettier) vào script.
        *   Xây dựng logic để đọc `architecture.map.yml` và so sánh với cấu trúc thư mục thực tế.
    3.  **Tích hợp và Vận hành:**
        *   Tích hợp script vào CI/CD để kiểm tra trên mỗi Pull Request.
        *   Cấu hình cảnh báo tự động tới người thực hiện PR nếu vi phạm.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới repository của tool, tài liệu quy tắc)*

---

#### Cải tiến 8 (IP-008): Automated Business Document Audit

*   **Mục tiêu:** Xây dựng một workflow tự động để kiểm tra sự đầy đủ và tính tuân thủ của các tài liệu nghiệp vụ (BRD, PRD) trong tất cả các dự án.
*   **Lý do (Tại sao):** Tài liệu nghiệp vụ là "la bàn" của dự án. Nếu la bàn sai hoặc thiếu, con tàu sẽ đi lạc hướng. Việc audit tự động đảm bảo rằng mọi `key feature` đều có đầy đủ tài liệu nền tảng, giúp team kỹ thuật hiểu đúng yêu cầu và giảm thiểu rủi ro làm lại.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Ban hành một quy định rõ ràng về việc: "Mỗi `key feature` phải có một tài liệu BRD và PRD tương ứng".
    *   *Kết quả 2:* Xây dựng thành công script có khả năng đọc file cấu hình của dự án (ví dụ: `audit.config.yml`) để lấy danh sách các `key feature`.
    *   *Kết quả 3:* Script tự động kiểm tra sự tồn tại của các file BRD và PRD được liên kết với từng `key feature` và báo cáo những trường hợp còn thiếu.
*   **Plans (Kế hoạch hành động):**
    1.  **Chuẩn hóa:**
        *   Thiết kế cấu trúc cho file `audit.config.yml`, cho phép khai báo danh sách `key features` và đường dẫn tới tài liệu BRD/PRD của chúng.
        *   Ban hành quy chuẩn về việc đặt tên và lưu trữ file tài liệu.
    2.  **Phát triển Tool Audit:**
        *   Viết logic cho script để đọc và phân tích file `audit.config.yml`.
        *   Xây dựng logic để kiểm tra sự tồn tại của các đường dẫn file đã khai báo.
    3.  **Tích hợp và Vận hành:**
        *   Tích hợp script vào CI/CD để chạy định kỳ (ví dụ: hàng đêm) và báo cáo kết quả.
        *   Tạo một "dashboard" đơn giản để hiển thị trạng thái đầy đủ tài liệu của tất cả dự án.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới tool, tài liệu quy chuẩn)*

---

#### Cải tiến 9 (IP-009): Automated Technical Compliance Audit

*   **Mục tiêu:** Thiết lập một quy trình audit tự động để đảm bảo các dự án tuân thủ hai yêu cầu kỹ thuật quan trọng: độ bao phủ của Unit Test và sự hiện diện của các quy tắc (rules) tối thiểu cho CursorAI.
*   **Lý do (Tại sao):** Unit test là "lưới an toàn" cho lập trình viên, còn CursorAI rules là "bộ não" phụ giúp tăng năng suất. Việc đảm bảo tuân thủ hai yếu tố này giúp nâng cao chất lượng code một cách bền vững và tối ưu hóa quy trình làm việc với AI.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Script có khả năng tự động đọc và phân tích báo cáo coverage do các công cụ (như JaCoCo, Istanbul/nyc) tạo ra, sau đó so sánh với ngưỡng tối thiểu là **80%**.
    *   *Kết quả 2:* Ban hành một "bộ quy tắc CursorAI tối thiểu" (`minimum-ruleset.json`) làm tiêu chuẩn cho mọi dự án.
    *   *Kết quả 3:* Script có khả năng kiểm tra sự tồn tại của các file rule trong `minimum-ruleset.json` tại đúng vị trí trong workspace của dự án.
*   **Plans (Kế hoạch hành động):**
    1.  **Chuẩn hóa:**
        *   Thống nhất công cụ và định dạng báo cáo coverage cho toàn công ty.
        *   Tổ chức workshop để thảo luận và chốt hạ "bộ quy tắc CursorAI tối thiểu".
    2.  **Phát triển Tool Audit:**
        *   Viết logic để đọc và phân tích các định dạng báo cáo coverage phổ biến.
        *   Viết logic để đọc `minimum-ruleset.json` và kiểm tra sự tồn tại của các file rule tương ứng.
    3.  **Tích hợp và Vận hành:**
        *   Tích hợp script vào CI/CD để chạy trên mỗi Pull Request.
        *   Cấu hình để pipeline báo lỗi (fail) nếu coverage dưới ngưỡng hoặc thiếu rule bắt buộc.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới tool, bộ rule tối thiểu)*

---

#### Cải tiến 10 (IP-010): Xây dựng bộ câu hỏi làm rõ yêu cầu (Clarification Question Framework) cho PRD

*   **Mục tiêu:** Trang bị cho đội ngũ dev lead một công cụ (bộ câu hỏi) chuẩn hóa để phân tích và làm rõ các yêu cầu trong PRD, đảm bảo yêu cầu được hiểu sâu và đầy đủ trước khi bắt đầu thiết kế kỹ thuật.
*   **Lý do (Tại sao):** Hiện tại, việc làm rõ yêu cầu phụ thuộc nhiều vào kinh nghiệm cá nhân của từng dev lead, dẫn đến tình trạng thiếu nhất quán. Một số yêu cầu có thể bị bỏ sót hoặc hiểu sai, gây ra lãng phí khi phải làm lại. Một bộ câu hỏi chuẩn sẽ hệ thống hóa quy trình này, nâng cao chất lượng đầu vào cho đội phát triển và giảm thiểu rủi ro.
*   **Key Results (Kết quả cần đạt):**
    *   *Kết quả 1:* Xây dựng và ban hành thành công "Bộ câu hỏi làm rõ yêu cầu" phiên bản 1.0, bao gồm các hạng mục chính như: functional, non-functional, data, integration, edge cases.
    *   *Kết quả 2:* Tổ chức ít nhất 2 buổi workshop để đào tạo và thu thập phản hồi từ các dev lead về bộ câu hỏi.
    *   *Kết quả 3:* 100% các PRD cho tính năng mới (từ sau ngày ban hành) đều có một file đính kèm (`.clarification.md`) ghi lại câu trả lời cho bộ câu hỏi này.
    *   *Kết quả 4:* Tích hợp bộ câu hỏi vào AI rules để AI có thể gợi ý hoặc tự động hỏi khi review PRD.
*   **Plans (Kế hoạch hành động):**
    1.  **Nghiên cứu và soạn thảo:**
        *   Nghiên cứu các framework câu hỏi phổ biến (5W1H, v.v.) và các hạng mục cần làm rõ cho một yêu cầu phần mềm.
        *   Soạn thảo phiên bản nháp của bộ câu hỏi.
    2.  **Review và Hoàn thiện:**
        *   Tổ chức workshop với các dev lead để review, bổ sung và hoàn thiện bộ câu hỏi.
        *   Tạo template cho file `.clarification.md`.
    3.  **Ban hành và Đào tạo:**
        *   Chính thức ban hành bộ câu hỏi và quy trình áp dụng.
        *   Tổ chức buổi đào tạo thứ hai để hướng dẫn cách sử dụng hiệu quả.
    4.  **Tích hợp AI:**
        *   Xây dựng ruleset cho AI dựa trên bộ câu hỏi.
        *   Tích hợp vào workflow review tài liệu của AI.
*   **Status:** `Chưa bắt đầu`
*   **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới bộ câu hỏi, template, AI rules)*

---

## Phụ lục: Định nghĩa

*   **Key Feature (Tính năng chủ chốt):** Một key-feature là một tính năng đáp ứng ít nhất hai trong các tiêu chí sau:
    1.  **Tạo ra giá trị cốt lõi (Core Value):** Nếu bỏ tính năng này đi, sản phẩm sẽ mất đi phần lớn giá trị.
    2.  **Điểm khác biệt cạnh tranh (Competitive Differentiator):** Là tính năng làm cho sản phẩm nổi bật so với đối thủ.
    3.  **Tần suất sử dụng cao (High Frequency of Use):** Là những tính năng mà phần lớn người dùng sẽ tương tác thường xuyên.
