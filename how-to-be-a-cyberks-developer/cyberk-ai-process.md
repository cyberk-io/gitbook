---
icon: image-landscape
---

# Cyberk AI Driven

## Quy trình và cách thực thi

### Bước 1: Xây dựng Workspace

**Mục đích**: Tạo nền tảng vững chắc cho dự án bằng cách chuẩn bị tài liệu và ví dụ cần thiết, đảm bảo rằng tất cả các thành viên trong nhóm có cùng hiểu biết về dự án. Và xây dựng tính sẵn có của dữ liệu cho AI đảm bảo rằng AI có đủ thông tin để hỗ trợ developer trong quá trình làm việc

- **Dev-lead thực hiện việc hoàn thành tài liệu theo quy chuẩn của Cyberk**:
  - **Tài liệu mô tả business PRD & BRD**: Mô tả chi tiết yêu cầu và quy trình kinh doanh để đảm bảo rằng tất cả các bên liên quan đều có cùng một hiểu biết về mục tiêu của dự án.
  - **Tài liệu Techstack**: Xác định các công nghệ sẽ được sử dụng trong dự án để đảm bảo tính nhất quán và hiệu quả.
  - **Tài liệu mô tả kiến trúc hệ thống**: Cung cấp cái nhìn tổng quan về cấu trúc hệ thống để đảm bảo rằng tất cả các thành viên trong nhóm hiểu rõ cách các thành phần của hệ thống tương tác với nhau.
  - **Tài liệu giải pháp**: Đưa ra các giải pháp kỹ thuật cho các vấn đề đã xác định, giúp định hướng phát triển dự án.

- **Dev-lead tiến hành xây dựng bộ ví dụ**:
  - **Xây dựng các code practice cụ thể cho từng module**: Cung cấp các ví dụ mã nguồn để hướng dẫn các thành viên trong nhóm về cách thực hiện các module cụ thể.
  - **Đưa ra mô tả về practice sẽ sử dụng trong dự án**: Giải thích cách các thực hành mã nguồn sẽ được áp dụng trong dự án để đảm bảo tính nhất quán và chất lượng.

- **Thiết lập Rules**:
  - **Dev-lead tiến hành đưa ra các rule cho CursorAI**: Sử dụng kỹ thuật reverse Engineering hoặc sao chép các rule từ dự án khác để thiết lập các quy tắc cho AI.
  - **Dev-lead tiến hành code thử các tính năng**: Thử nghiệm các tính năng dựa trên các quy tắc đã thiết lập để đảm bảo rằng các thành viên khác không gặp phải các vấn đề đáng kể.
  - **Dev-lead tiến viết các tài liệu hoá về các rules**: Tạo tài liệu dễ hiểu về các quy tắc để các thành viên trong nhóm có thể dễ dàng nắm bắt.

### Bước 2: Phổ cập

**Mục đích**: Đảm bảo rằng tất cả các thành viên trong nhóm đều hiểu rõ về dự án và các quy tắc đã thiết lập.

- **Team tiến hành việc thực hành đọc hiểu tài liệu**: Đảm bảo rằng mỗi thành viên trong nhóm đều nắm rõ toàn bộ ý tưởng của dự án.
- **Dev-lead tiến hành giải thích các rules của dự án**: Giải thích lý do và lợi ích của các quy tắc để các thành viên trong nhóm hiểu rõ và tuân thủ.

### Bước 3: Hiệu chỉnh

**Mục đích**: Cải thiện và tối ưu hóa các quy tắc và thực hành dự án dựa trên phản hồi và quan sát thực tế.

- **Dev-lead quan sát member hoàn thành các feature**: Theo dõi quá trình thực hiện của các thành viên để xác định các vấn đề tồn đọng.
  - **Các rules / practice còn thiếu**: Xác định các quy tắc hoặc thực hành còn thiếu để bổ sung kịp thời.
  - **Các lỗ hổng của Rules dẫn tới kết quả tạo ra không đạt yêu cầu**: Phát hiện và khắc phục các lỗ hổng trong quy tắc để đảm bảo chất lượng sản phẩm.

### Bước 4: Implementation

**Mục đích**: Thực hiện phát triển dự án theo triết lý AI-driven-development, đảm bảo chất lượng và tính nhất quán của mã nguồn.

- **Developer tiến hành phát triển dự án cùng với AI**: Sử dụng AI để hỗ trợ phát triển dự án một cách hiệu quả.
- **Nếu trong quá trình này tìm thấy các vấn đề, hoặc thay đổi yêu cầu**: Cập nhật lại các tài liệu tương ứng để đảm bảo tính chính xác và đầy đủ.
- **Developer self-test**:
  - **Tiến hành chạy các kiểm thử quy trình**: Đảm bảo chất lượng mã nguồn và yêu cầu đặc tả.
  - **Tính đúng đắn của code**: Đảm bảo mã nguồn hoạt động chính xác.
  - **Tính đầy đủ**: Đảm bảo mã nguồn và kiểm thử đơn vị đã đầy đủ, không thiếu, không thừa.
- **Commit & Merge code**: Hoàn thành và tích hợp mã nguồn vào dự án.

### Bước 5: Code reviews

**Mục đích**: Đảm bảo chất lượng mã nguồn thông qua đánh giá và kiểm tra kỹ lưỡng.

- **Dev-lead và AI tiến hành đánh giá code merge**: Đánh giá mã nguồn dựa trên các tiêu chí cụ thể.
  - **Tính nhất quán**: Đảm bảo phong cách mã nguồn, quy ước và thực hành được duy trì nhất quán.
  - **Kiến trúc**: Đảm bảo mã nguồn tuân thủ kiến trúc dự án.
  - **Tính Bảo mật**: Đảm bảo các vấn đề bảo mật được xử lý trong mã nguồn.
  - **Chạy các công cụ test tự động**: Kiểm tra các kiểm thử tự động để đảm bảo rằng tất cả các quy trình cần thiết đã được triển khai đầy đủ.

### Bước 6: Deliver

**Mục đích**: Đảm bảo rằng sản phẩm cuối cùng đáp ứng yêu cầu và sẵn sàng để trình bày cho khách hàng.

- **Cả team sẽ cùng ngồi và dùng thử các tính năng mới được tích hợp**: Kiểm tra và xác định các vấn đề còn tồn đọng.
- **Các bugs cần được giải quyết trước buổi họp daily tiếp theo**: Đảm bảo rằng tất cả các lỗi được khắc phục kịp thời.
- **Trình bày sản phẩm cho khách hàng**: Đảm bảo rằng sản phẩm đáp ứng yêu cầu và mong đợi của khách hàng.

