---
icon: image-landscape
---

# Cyberk AI Driven

Quy trình và cách thực thi: 

Bước 1: Xây dựng Workspace 
- Dev-lead thực hiện việc hoàn thành tài liệu theo quy chuẩn của Cyberk bao gồm các tài liệu: 
    + Tài liệu mô tả business PRD & BRD 
    + Tài liệu Techstack 
    + Tài liệu mô tả kiến trúc hệ thống
    + tài liệu giải pháp. 
- Dev-lead tiến hành xây dựng bộ ví dụ: 
    + Xây dựng các code practice cụ thể cho từng module bằng cách:  Đưa ra code mẫu (dự án đã làm hoặc github)
    + Đưa ra mô tả về practice sẽ sử dụng trong dự án
- Thiết lập Rules 
    + Dev-lead tiến hành đưa ra các rule cho CursorAI cho từng practice cụ thể nêu trên bằng kỹ thuật reverse Engineering hoặc đơn giản là sao chép lại các rule của dự án khác. 
    + Dev-lead tiến hành code thử các tính năng dựa trên các rule đã xây dựng, và tiến hành tinh chỉnh rule để đảm bảo toàn bộ member khác không gặp các trục trặc đáng kể, 
    + Dev-lead tiến viết các tài liệu hoá về các rules dưới định dạng mà người đọc có thể hiểu đuọc. 


Bước 2: Phổ cập: 
- Team tiến hành việc mô tả tài liệu và thực hành đọc hiểu tài liệu cho toàn bộ team-member. Điều này nhằm đảm bảo mỗi người đều nắm rõ toàn bộ ý tưởng của dự án. 
- Dev-lead tiến hành giải thích các rules của dự án. và lý do tại sao, lợi ích thu được. 

Bước 3: hiệu chỉnh: 
- Dev-lead quan sát member hoàn thành các feature và liệt kê các vấn đề tồn đọng: 
    + các rules / practice còn thiếu. 
    + Các lỗ hổng của Rules dẫn tới kết quả tạo ra không đạt yêu cầu. 
- Hiệu chỉnh các rules bằng cách thêm/ bớt.

Bước 4: Implementation: 
- Developer tiến hành phát triển dự án cùng với AI theo triết lý AI-driven-development của Cyberk 
- Nếu trong quá trình này tìm thấy các vấn đề, hoặc thay đổi yêu cầu, thì developer cần cập nhật lại các tài liệu tương ứng ở bước 1. 
- Developer self-test: 
    + tiến hành chạy các kiểm thử quy trình để đảm bảo chất lượng code và yêu cầu đặc tả đảm bảo: 
    + Tính đúng đắn của code 
    + Tính đầy đủ: Đảm bảo code và uni-test đã có đủ, không thiếu, k thừa. 
- Commit  & Merge code 


Bước 4: Code reviews: Dev-lead và AI  tiến hành đánh giá code merge dựa trên các tiêu chí: 
- Tính nhất quán: đảm code style, convension, practice được đảm bảo nhất quán. 
- Kiến trúc: đảm bảo code đúng kiến trúc dự án. Nếu phát hiện vấn đề kiến trúc, Dev-lead cần cập nhật tài liệu tương ứng và thông báo cho developer ngay. 
- Tính Bảo mật: Đảm bảo các vấn đề bảo mật được cover trong source code. 
- Chạy các công cụ test tự động: Kiểm tra các test tự động được cài đặt CI/CD để đảm bảo Unit-test và các quy trình cần thiết đã được triển khai đầy đủ. 
    
Bước 5: Deliver: 
- Cả team sẽ  cùng ngồi và dùng thử các tính năng mới được tích hợp, Nếu phát hiện ra vấn đề thì liệt kê 
- Các bugs cần được giải quyết trước buổi họp daily tiếp theo. 
- Trình bày sản phẩm cho khách hàng. 

