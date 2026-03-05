---
title: "Thế nào là Hoàn thành?"
type: reference
tags: [onboarding, developer, process, quality]
alias: [what-is-done, definition-of-done]
---

# Thế nào là "Hoàn thành"? (Definition of Done)

Theo triết lý làm việc của Cyberk, **sự minh bạch (transparency)** là một trong những giá trị cốt lõi. Tuy nhiên, khái niệm "xong" (done) của mỗi người lại rất khác nhau, phụ thuộc vào kinh nghiệm, tư duy và tiêu chuẩn cá nhân.

Sự khác biệt này thường dẫn đến những hiểu lầm tai hại:
- **Developer:** "Code chạy được rồi" nghĩa là xong.
- **Tester:** "Test hết các trường hợp" là xong.
- **Khách hàng:** "Tôi vẫn chưa thấy tính năng đâu cả!" hoặc "Chạm vào đâu cũng thấy lỗi!"

Để giải quyết vấn đề này và đảm bảo mọi người cùng nhìn về một hướng, Cyberk định nghĩa một quy trình làm việc rõ ràng với 7 trạng thái "hoàn thành" cụ thể.

## 7 Trạng thái "Hoàn thành"

### 1. Todo 📋
- **Ý nghĩa:** Công việc chưa được bắt đầu.
- **Chi tiết:**
  - Tính năng đang trong giai đoạn lên kế hoạch hoặc phân tích.
  - Chưa có ai được giao thực hiện.

### 2. Committed 💻
- **Ý nghĩa:** Đã viết code xong ở local.
- **Chi tiết:**
  - Đã hoàn thành việc code cho tính năng.
  - Các luồng người dùng (user-flow) đã được tự kiểm tra (self-test) cẩn thận và hoạt động tốt.
  - Code đã được commit trên nhánh cá nhân nhưng chưa được hợp nhất (merge) vào nhánh phát triển chung (vd: `develop`).

### 3. Merged 🔄
- **Ý nghĩa:** Code đã được hợp nhất vào nhánh chính.
- **Chi tiết:**
  - Code đã được merge vào nhánh phát triển chung (`develop` hoặc `main`).
  - Đã vượt qua quy trình Tích hợp và Triển khai Liên tục (CI/CD) thành công.
  - Sẵn sàng để đội kiểm thử (QA/Tester) tiến hành kiểm tra.

### 4. Tested ✅
- **Ý nghĩa:** Đã được kiểm thử và không còn lỗi nghiêm trọng.
- **Chi tiết:**
  - Đội QA đã kiểm thử thành công trên môi trường Staging/test.
  - Không còn lỗi nghiêm trọng (critical bugs) hoặc lỗi chặn (blocker bugs).
  - Tính năng đã sẵn sàng để demo nội bộ hoặc cho người dùng trải nghiệm thử.

### 5. Demo 🎯
- **Ý nghĩa:** Đã demo thành công trong nội bộ.
- **Chi tiết:**
  - Đã thực hiện buổi demo tính năng cho các thành viên trong team.
  - Tính năng hoạt động ổn định, không có lỗi đáng kể.
  - Không có vấn đề nào ảnh hưởng nghiêm trọng đến trải nghiệm người dùng.

### 6. Delivered 🚀
- **Ý nghĩa:** Đã demo cho khách hàng và được chấp thuận.
- **Chi tiết:**
  - Đã thực hiện demo tính năng cho khách hàng.
  - Khách hàng đã nghiệm thu và xác nhận tính năng hoạt động đúng yêu cầu.
  - Sẵn sàng để triển khai lên môi trường Production (mainnet).

### 7. Mainnet ⭐️
- **Ý nghĩa:** Đã triển khai thành công lên môi trường Production.
- **Chi tiết:**
  - Tính năng đã được triển khai thành công lên môi trường thật.
  - Đã hoàn tất các bước kiểm tra cuối cùng (smoke test) trên Production.
  - Người dùng cuối có thể bắt đầu sử dụng tính năng.

---

> ### Cách chúng ta báo cáo công việc
>
> Thay vì nói một cách chung chung là **"Em xong rồi"**, chúng ta sẽ báo cáo trạng thái một cách cụ thể và rõ ràng.
>
> **Ví dụ:**
> * "Task #123 đã **Committed**."
> * "Tính năng login đã **Tested** xong."
> * "CR #456 đã được **Delivered**."
> * "Báo cáo tháng đã **Mainnet**."
>
> Việc này giúp mọi người hiểu chính xác tiến độ công việc đang ở giai đoạn nào, giảm thiểu hiểu lầm và tăng cường sự minh bạch trong toàn đội.
