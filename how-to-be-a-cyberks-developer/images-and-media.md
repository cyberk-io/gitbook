---
icon: image-landscape
---

# Quy trình Phát triển Phần mềm theo triết lý AI-Driven tại Cyberk

Tài liệu này mô tả quy trình chuẩn cho việc phát triển phần mềm tại Cyberk, với sự hỗ trợ đắc lực từ trí tuệ nhân tạo (AI). Mục tiêu của chúng ta là tối ưu hóa hiệu suất, đảm bảo chất lượng và duy trì tính nhất quán trong toàn bộ vòng đời dự án.

## Giai đoạn 1: Khởi tạo và Chuẩn bị (Initiation & Preparation)

Nền tảng của một dự án thành công được xây dựng từ sự chuẩn bị kỹ lưỡng. Trong giai đoạn này, Dev-lead có trách nhiệm tạo ra một môi trường làm việc (Workspace) rõ ràng và hiệu quả cho toàn đội ngũ.

### 1.1. Xây dựng Nền tảng Tài liệu

Dev-lead chịu trách nhiệm biên soạn và hoàn thiện bộ tài liệu khung của dự án, bao gồm:
*   **Tài liệu nghiệp vụ:** PRD (Product Requirement Document) và BRD (Business Requirement Document).
*   **Tài liệu kỹ thuật:** Mô tả Tech Stack, Kiến trúc hệ thống, và Giải pháp kỹ thuật chi tiết.

*Mục đích: Đảm bảo mọi thành viên đều có chung một sự hiểu biết về mục tiêu và phương hướng của dự án.*

### 1.2. Định hình Code Practices và Bộ ví dụ

Để đảm bảo tính nhất quán, Dev-lead sẽ:
*   **Xây dựng Code Practice:** Mô tả chi tiết các quy tắc và phương pháp lập trình sẽ được áp dụng trong dự án.
*   **Cung cấp Code mẫu:** Đưa ra các đoạn code mẫu, có thể từ các dự án đã thành công hoặc các nguồn uy tín, để minh họa cho practice.

*Mục đích: Tạo ra một "ngôn ngữ chung" về code, giúp sản phẩm cuối cùng đồng nhất và dễ bảo trì.*

### 1.3. Thiết lập và Tinh chỉnh Rules cho AI

Trọng tâm của quy trình AI-Driven là việc thiết lập các "luật chơi" cho AI. Dev-lead sẽ:
*   **Xây dựng bộ Rules:** Soạn thảo các quy tắc (rules) cho CursorAI dựa trên code practice đã định nghĩa. Kỹ thuật có thể là "reverse engineering" từ các codebase mẫu hoặcปรับ dụng từ các dự án tương tự.
*   **Thử nghiệm và Tinh chỉnh:** Dev-lead chủ động code thử các tính năng đầu tiên để kiểm tra hiệu quả của bộ Rules, từ đó tinh chỉnh lại để đảm bảo AI hoạt động trơn tru và hữu ích cho cả đội.
*   **Tài liệu hóa Rules:** Viết lại các rules dưới dạng tài liệu dễ hiểu, giải thích rõ "tại sao" và "như thế nào".

*Mục đích: Biến AI thành một trợ lý lập trình đắc lực, tuân thủ nghiêm ngặt các tiêu chuẩn của dự án.*

## Giai đoạn 2: Phổ biến và Đồng bộ (Onboarding & Alignment)

Sau khi nền tảng đã sẵn sàng, cả đội sẽ cùng nhau đồng bộ hóa kiến thức và kỹ năng.
*   **Nắm bắt Toàn cảnh Dự án:** Toàn đội cùng nhau đọc, thảo luận và làm rõ các tài liệu đã được chuẩn bị ở Giai đoạn 1. Mục tiêu là đảm bảo 100% thành viên hiểu rõ về sản phẩm, kiến trúc và giải pháp.
*   **Huấn luyện về Rules:** Dev-lead tổ chức một buổi chia sẻ để giải thích sâu về bộ Rules cho AI, bao gồm lý do hình thành, lợi ích và cách áp dụng hiệu quả.

## Giai đoạn 3: Vòng lặp Phát triển (Development Cycle)

Đây là giai đoạn các developer biến ý tưởng thành sản phẩm thực tế, với sự đồng hành của AI.

### 3.1. Phát triển Tính năng (AI-Assisted Feature Development)

Developer sử dụng CursorAI và bộ Rules đã được thiết lập để tiến hành code các tính năng theo yêu cầu.

### 3.2. Tự kiểm thử (Developer Self-Test)

Trước khi đưa code đi review, developer có trách nhiệm tự kiểm tra sản phẩm của mình, đảm bảo:
*   **Tính đúng đắn:** Code chạy đúng logic và đáp ứng yêu cầu của feature.
*   **Tính đầy đủ:** Viết đủ unit test cho các luồng xử lý, không thừa, không thiếu.

### 3.3. Duy trì Tài liệu Up-to-Date (Living Documentation)

Nếu trong quá trình phát triển có bất kỳ thay đổi nào về yêu cầu hoặc giải pháp, developer phải chủ động cập nhật lại các tài liệu liên quan đã được tạo ở Giai đoạn 1. Tài liệu phải luôn phản ánh đúng thực trạng của sản phẩm.

### 3.4. Commit & Merge

Sau khi hoàn thành và tự kiểm thử, developer tiến hành commit code và tạo merge request.

## Giai đoạn 4: Đảm bảo Chất lượng (Quality Assurance)

Chất lượng là trách nhiệm của cả đội, không phải của riêng ai. Giai đoạn này là cổng kiểm soát cuối cùng trước khi một tính năng được tích hợp.

### 4.1. Code Review

Dev-lead và AI cùng thực hiện review code trong merge request dựa trên các tiêu chí sau:
*   **Tính nhất quán:** Code tuân thủ coding style, convention và practice của dự án.
*   **Kiến trúc:** Code phù hợp với kiến trúc hệ thống đã đề ra. Nếu phát hiện sai lệch, Dev-lead cần cập nhật tài liệu và trao đổi lại với developer.
*   **Bảo mật:** Các lỗ hổng bảo mật tiềm ẩn đã được xử lý.

### 4.2. Kiểm thử Tự động (CI/CD)

Hệ thống CI/CD sẽ tự động chạy các bộ test (unit test, integration test,...) để xác thực chất lượng và độ ổn định của code mới.

## Giai đoạn 5: Bàn giao và Tiếp nhận Phản hồi (Delivery & Feedback)

*   **Kiểm thử Nội bộ (Dogfooding):** Cả team cùng nhau sử dụng và trải nghiệm tính năng mới vừa được tích hợp. Mọi vấn đề phát sinh sẽ được ghi nhận lại.
*   **Ưu tiên Xử lý Bugs:** Các bugs được phát hiện ở bước trên phải được ưu tiên giải quyết trước buổi họp daily kế tiếp.
*   **Trình bày cho Khách hàng:** Sau khi đã vượt qua các vòng kiểm duyệt nội bộ, sản phẩm sẽ được trình bày cho khách hàng.

## Cải tiến Liên tục (Continuous Improvement)

Quy trình này không phải là bất biến. Để giữ cho "bộ máy" luôn hoạt động hiệu quả, Dev-lead có trách nhiệm:
*   **Quan sát và Ghi nhận:** Liên tục quan sát quá trình làm việc của đội, thu thập các vấn đề còn tồn đọng (ví dụ: rules/practice còn thiếu, AI đưa ra kết quả chưa tối ưu).
*   **Hiệu chỉnh Quy trình:** Dựa trên các ghi nhận, Dev-lead sẽ chủ động cập nhật, thêm/bớt các rules và practice để cải thiện hiệu suất chung.

---
## Gợi ý để Cải thiện

Thưa ngài, bản thân quy trình của Cyberk đã khá toàn diện. Sau khi sắp xếp lại, tôi có một vài gợi ý nhỏ để tính logic của nó càng thêm chặt chẽ:

1.  **Biến "Hiệu chỉnh" thành một hoạt động liên tục:** Thay vì coi "Hiệu chỉnh Rules" (Bước 3 cũ) là một bước riêng lẻ, tôi đã đề xuất biến nó thành một quy trình **Cải tiến Liên tục**. Điều này phản ánh đúng hơn bản chất của việc phát triển phần mềm - chúng ta luôn quan sát và cải thiện không ngừng, thay vì chỉ làm một lần.

2.  **Tách bạch "Phát triển" và "Đảm bảo Chất lượng":** Tôi đã tách "Code Review" và "Kiểm thử tự động" (nằm chung trong Bước 4 cũ) thành một giai đoạn riêng là **"Đảm bảo Chất lượng"**. Việc này giúp nhấn mạnh tầm quan trọng của chất lượng và làm rõ vai trò của cổng kiểm soát này trước khi code được merge.

3.  **Nhấn mạnh "Tài liệu sống":** Tôi đã đặt tên cho mục "cập nhật tài liệu" là **"Duy trì Tài liệu sống" (Living Documentation)**. Cái tên này mang một triết lý quan trọng: tài liệu không phải là thứ viết ra một lần rồi bỏ đó, mà nó phải "sống" và phát triển cùng với sản phẩm.

Liệu những thay đổi và gợi ý này có phù hợp với tầm nhìn của ngài cho quy trình này không?

