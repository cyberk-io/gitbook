---
description: Hướng dẫn quy trình tiếp nhận và xử lý Change Request hiệu quả
icon: lightbulb-exclamation-on
---

# Tiếp Nhận CR như thế nào (Change Requests)

{% hint style="info" %}
Change Request là điều tốt và cần thiết để dự án phù hợp với nhu cầu mới phát sinh, nhưng cần được quản lý đúng cách để tránh rủi ro.
{% endhint %}

## Tại sao CR quan trọng?

Trong quá trình làm dự án không tránh khỏi các Change Request (CR), các CR này nhằm mục đích sửa đổi để cho dự án phù hợp với nhu cầu mới phát sinh. Tuy nhiên khi tiếp nhận các CR này ta thường chưa có sự chuẩn bị cần thiết, dẫn đến gặp một số vấn đề phát sinh:

## Các vấn đề thường gặp với CR

{% hint style="warning" %}
CR không được quản lý đúng cách có thể gây ra nhiều vấn đề nghiêm trọng cho dự án
{% endhint %}

### 1. **CR Conflict với Requirements**
* CR thường xung đột với các tính năng đã có sẵn
* Cần kiểm tra và thông báo cho khách hàng khi có conflict
* Phải đánh giá impact trước khi thực hiện

### 2. **CR Gấp (Urgent)**
* Thường nhằm hot-fix lỗi business hoặc đáp ứng nhu cầu cấp thiết
* Cần phản ứng nhanh để xử lý cho khách hàng
* **Rủi ro**: Gây ảnh hưởng đến source code và thiết kế sản phẩm

### 3. **CR Ảnh hưởng Timeline**
* Khách hàng thường không hiểu rõ sự ảnh hưởng của CR
* Giả định CR sẽ hoàn thành nhanh chóng và đơn giản
* **Cần**: Báo cáo và thỏa thuận với khách hàng về các thay đổi

### 4. **CR Thay đổi Thiết kế**
* Khách hàng yêu cầu development team bỏ qua quy trình
* Sản phẩm sẽ khác với bản thiết kế gốc (Figma)
* **Hậu quả**: Thành viên mới hoang mang, không có tham chiếu chuẩn

### 5. **CR Phức tạp**
* Độ khó vượt quá expectation
* Cần more resources và time để complete

## Vấn đề về Memory và Performance

{% hint style="danger" %}
Một điều rất thường gặp: khách hàng sẽ quên các CR này có tồn tại sau một thời gian chúng được hoàn thành.
{% endhint %}

Vì thế họ thường xuyên đánh giá hiệu quả làm việc của development team mà không tính các CR này vào, dẫn tới ta thường nghe nhiều phàn nàn về performance.

## Checklist Quản lý CR hiệu quả

{% hint style="success" %}
Áp dụng checklist này để tránh được các lỗi thường gặp với Change Request
{% endhint %}

### Bước 1: Tiếp nhận CR
* **Yêu cầu khách hàng gửi yêu cầu bằng văn bản** ngay sau khi tiếp nhận CR&#x20;
* Xác nhận đã nhận và hiểu rõ yêu cầu

### Bước 2: Phân tích Impact
* **Đưa ra phản hồi về ảnh hưởng** (side-effect) của CR về:
  * Timeline và deadline
  * Source code và technical debt
  * Thiết kế UI/UX
  * Effort và resources cần thiết
  * Tính khả thi (feasibility)

### Bước 3: Cập nhật Design
* **Cập nhật bản thiết kế chi tiết** (Figma) trước khi bắt tay vào triển khai CR
* Đảm bảo design và implementation sync

### Bước 4: Documentation
* **Lưu trữ vào CR List** của dự án&#x20;
* Ghi chép đầy đủ context và rationale

### Bước 5: Reorganize
* **Tổ chức lại Sprint hoặc timeline** của dự án ngay khi CR đưa vào triển khai&#x20;
* Communicate changes với toàn team


## Tại sao cần yêu cầu bằng văn bản?

{% hint style="info" %}
Có thể một số anh chị em thắc mắc, tại sao lại cần đưa bằng văn bản hoặc email?
{% endhint %}

### Lý do quan trọng:

**1. Khách hàng thường "đãng trí"**
* Có nhiều giả định (Assumptions) không được nói rõ
* Thường mau chóng quên những gì đã thảo luận
* Giả định rằng team đã biết/hiểu những gì họ muốn truyền tải

**2. Miscommunication thường xuyên**
* Không ít lần khách hàng phát biểu sai nhu cầu của họ trong CR
* Verbal communication dễ bị hiểu nhầm
* Thiếu context và details cần thiết

**3. Legal và Accountability**
* Có bằng chứng về scope và requirements
* Tránh disputes về sau
* Clear accountability cho cả hai bên

{% hint style="success" %}
Để đảm bảo ta và khách hàng cùng hiểu đúng 1 vấn đề, hãy chắc chắn rằng có một văn bản hoặc email từ họ.
{% endhint %}
