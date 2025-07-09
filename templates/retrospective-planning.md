---
description: >-
  Mẫu kế hoạch chi tiết để tổ chức buổi họp retrospective hiệu quả, bao gồm
  hướng dẫn và giải thích chi tiết cho từng mục.
icon: wagon-covered
---

# Mẫu Kế Hoạch Họp Retrospective

## 1. Mục Đích Cuộc Họp

**Mục đích:** Thu thập toàn diện thông tin chuyên sâu (insight) về các khía cạnh cốt lõi của dự án bao gồm:

* Sản Phẩm
* Quy Trình
* Giao Tiếp
* Source Code

Đồng thời, buổi họp tập trung vào việc ghi nhận và thảo luận các ý kiến đóng góp xây dựng, nhằm đưa ra những cải tiến thiết thực cho sprint hoặc giai đoạn làm việc tiếp theo.

**Kết quả mong đợi:**

* Đảm bảo cả 100% team điền được vào restropective reports (tham chiếu các mục 4.1 đến 4.4 của tài liệu hướng dẫn này để lấy thông tin đầu vào cho các bảng ở mục 5).
* Team đưa ra tổng kết: Các vấn đề và Giải pháp cần phát triển (ghi nhận trong bảng "Điều Cần Cải Thiện" ở mục 5.2). Các hành động cụ thể (action items) nên được xác định rõ ràng (SMART: Specific, Measurable, Achievable, Relevant, Time-bound), có người phụ trách và deadline để theo dõi trong sprint tiếp theo.

## 3. Chuẩn Bị Trước Buổi Họp

**Mục tiêu:** Đảm bảo buổi họp diễn ra suôn sẻ và hiệu quả bằng cách chuẩn bị kỹ lưỡng từ cả người điều phối và các thành viên.

### 3.1. Người Điều Phối Cần Chuẩn Bị

**Hướng dẫn:** Người điều phối cần hoàn thành các công việc sau để buổi họp đạt kết quả tốt nhất.

{% hint style="warning" %}
* [ ] **Tổng hợp số liệu, metrics (nếu có):** Thu thập dữ liệu về sprint/giai đoạn vừa qua (ví dụ: burndown chart, velocity, số lượng bugs, feedback khách hàng). _Điều này giúp cung cấp cái nhìn khách quan về hiệu suất._
* [ ] **Chuẩn bị công cụ:** Sẵn sàng các công cụ hỗ trợ như bảng trắng, bút, sticky notes (cho họp offline) hoặc Miro, Trello, Google Docs (cho họp online). _Công cụ phù hợp giúp tương tác và ghi nhận thông tin dễ dàng hơn._
* [ ] **Gửi lịch họp và agenda:** Thông báo trước cho team về thời gian, địa điểm và nội dung chương trình. _Giúp mọi người chủ động sắp xếp thời gian và chuẩn bị._
* [ ] **Chuẩn bị template ghi chép (nếu cần):** Có sẵn mẫu biên bản họp để ghi lại các thảo luận và quyết định quan trọng.
{% endhint %}

### 3.2. Team Members Cần Chuẩn Bị

**Hướng dẫn:** Mỗi thành viên nên dành thời gian suy ngẫm và chuẩn bị trước các ý kiến của mình.

{% hint style="info" %}
* [ ] **Review công việc cá nhân và của team:** Nhìn lại những gì đã làm, những khó khăn gặp phải và những thành công đạt được trong sprint liên quan đến Sản Phẩm, Quy Trình, Giao Tiếp, Source Code.
* [ ] **Ghi chú điểm tốt và cần cải thiện:** Liệt kê cụ thể những điều team đã làm tốt và những khía cạnh có thể làm tốt hơn cho từng mục.
* [ ] **Chuẩn bị ví dụ cụ thể:** Đưa ra các tình huống, dẫn chứng thực tế để minh họa cho ý kiến của mình.
* [ ] **Suy nghĩ về đề xuất cải thiện:** Đề xuất các giải pháp khả thi cho những vấn đề đã xác định.
{% endhint %}

## 4. Hướng Dẫn Review Chi Tiết

**Mục tiêu:** Thực hiện review từng khía cạnh để thu thập thông tin đầy đủ và đa chiều.

### 4.1. Review Sản Phẩm (10-15 phút)

**Mục đích:** Đánh giá chất lượng và hiệu quả của sản phẩm/tính năng đã được phát triển.**Kết quả mong đợi:** Xác định những điểm mạnh và điểm yếu của sản phẩm từ góc độ kỹ thuật và người dùng.

{% hint style="success" %}
**Các khía cạnh cần review (Gợi ý câu hỏi):**

* **Chất lượng sản phẩm đã bàn giao:**
  * _Sản phẩm có đáp ứng đúng yêu cầu và mong đợi của người dùng/khách hàng không?_
  * _Có bug nào nghiêm trọng còn tồn tại hoặc mới phát sinh không?_
* **Feedback từ khách hàng:**
  * _Khách hàng nói gì về sản phẩm/tính năng mới? Có điểm nào họ đặc biệt thích hoặc không thích không?_
* **Các vấn đề kỹ thuật phát sinh:**
  * _Trong quá trình phát triển và vận hành, có vấn đề kỹ thuật nào đáng chú ý không?_
* **Hiệu suất của sản phẩm:**
  * _Sản phẩm có hoạt động ổn định và nhanh chóng không?_
{% endhint %}

### 4.2. Review Quy Trình Làm Việc (10-15 phút)

**Mục đích:** Nhìn lại và đánh giá hiệu quả của các quy trình mà team đã áp dụng.**Kết quả mong đợi:** Xác định những quy trình hoạt động tốt và những quy trình cần được cải thiện.

{% hint style="success" %}
**Các điểm cần thảo luận (Gợi ý câu hỏi):**

* **Sprint planning có hiệu quả không?**
  * _Việc ước lượng task có chính xác không? Mục tiêu Sprint có rõ ràng không?_
* **Daily standup có đạt mục tiêu?**
  * _Buổi daily có giúp team nắm bắt tiến độ và các trở ngại kịp thời không?_
* **Quy trình review code, testing, deployment:**
  * _Các quy trình này có được thực hiện kỹ lưỡng và mang lại giá trị không? Có điểm nào cần tối ưu không?_
{% endhint %}

### 4.3. Review Giao Tiếp Với Khách Hàng (10 phút)

**Mục đích:** Đánh giá mức độ hiệu quả của việc giao tiếp và tương tác với khách hàng (hoặc Product Owner/Stakeholders).**Kết quả mong đợi:** Cải thiện sự hiểu biết và mối quan hệ với khách hàng.

{% hint style="success" %}
**Các vấn đề cần đánh giá (Gợi ý câu hỏi):**

* **Tần suất và chất lượng các buổi họp với khách hàng:**
  * _Các buổi họp có hiệu quả không? Thông tin có được truyền đạt rõ ràng không?_
* **Hiệu quả của các kênh giao tiếp:**
  * _Các kênh giao tiếp (email, chat, call) có được sử dụng hợp lý không?_
* **Thời gian phản hồi yêu cầu/thắc mắc:**
  * _Team có phản hồi các yêu cầu hoặc câu hỏi từ khách hàng kịp thời không?_
* **Mức độ hài lòng của khách hàng:**
  * _Khách hàng có hài lòng với sự hợp tác và sản phẩm nhận được không?_
{% endhint %}

### 4.4. Review Source Code (10 phút)

**Mục đích:** Đánh giá chất lượng mã nguồn, các thực hành kỹ thuật.**Kết quả mong đợi:** Xác định các cơ hội để cải thiện chất lượng code, giảm technical debt.

{% hint style="success" %}
**Các điểm cần review (Gợi ý câu hỏi):**

* **Chất lượng code (clean code, best practices):**
  * _Code có dễ đọc, dễ hiểu và dễ bảo trì không?_
  * _Các nguyên tắc clean code và best practices có được tuân thủ không?_
* **Code coverage của unit tests:**
  * _Tỷ lệ bao phủ của unit test có đạt yêu cầu không?_
* **Technical debt:**
  * _Có những khoản nợ kỹ thuật nào đang tồn tại không? Chúng ảnh hưởng như thế nào?_
* **Performance issues, Security concerns:**
  * _Có đoạn code nào gây ảnh hưởng đến hiệu suất hoặc có lỗ hổng bảo mật không?_
{% endhint %}

### 4.5. Review Tài Liệu Dự Án (10 phút)

**Mục đích:** Đánh giá tình trạng và chất lượng của tài liệu dự án (PRD, BRD, v.v.).
**Kết quả mong đợi:** Đảm bảo tài liệu luôn đầy đủ, chính xác và hỗ trợ hiệu quả cho team.

{% hint style="success" %}
**Các điểm cần review (Gợi ý câu hỏi):**

*   **Chất lượng và sự đầy đủ của tài liệu:**
    *   _Các PRD có phản ánh đúng requirement của dự án không? Có bị lỗi thời, thừa hoặc thiếu không?_
    *   _Đã có đủ tài liệu mô tả requirement chưa? Nếu thiếu thì đó là tài liệu nào?_
    *   _Mỗi tính năng chính đã có đủ BRD (Business Requirement Document) chưa? Có nên bổ sung ngay không?_
*   **Các vấn đề khác:**
    *   _Có vấn đề gì với các tài liệu hiện tại không? (ví dụ: khó hiểu, mâu thuẫn)._
{% endhint %}

### 4.6. Review Hạ Tầng (10 phút)

**Mục đích:** Đánh giá tình trạng, chi phí và các vấn đề của hạ tầng dự án (AWS, Cloud, v.v.).
**Kết quả mong đợi:** Nắm rõ chi phí hạ tầng, xác định các rủi ro và cơ hội tối ưu.

{% hint style="success" %}
**Các điểm cần review (Gợi ý câu hỏi):**

*   **Kiểm tra tài khoản và chi phí:**
    *   _Kiểm tra tài khoản AWS, hoặc cloud._
    *   _Tổng kết chi phí dự kiến của tháng này._
*   **Các vấn đề cần cải thiện:**
    *   _Có vấn đề nào về hiệu suất, sự ổn định hoặc khả năng mở rộng của hạ tầng không?_
    *   _Có cơ hội nào để tối ưu chi phí hoặc cải thiện hạ tầng không?_
{% endhint %}

### 4.7. Review Bảo Mật (10 phút)

**Mục đích:** Đảm bảo dự án tuân thủ các chính sách bảo mật và xác định các rủi ro tiềm ẩn.
**Kết quả mong đợi:** Xác định các điểm yếu về bảo mật và đảm bảo tuân thủ Chính sách Bảo mật Thông tin (ISP).

{% hint style="success" %}
**Các điểm cần review (Gợi ý câu hỏi):**

*   **Tuân thủ quy trình bảo mật:**
    *   _Review các practice về bảo mật đã được đảm bảo chưa? (ví dụ: quản lý secrets, phân quyền)_
    *   _Dự án đã tuân thủ 100% các điều khoản trong [Chính sách Bảo mật Thông tin (ISP)](../../employee/cyberk-isp.md) chưa?_
    *   _Nếu chưa, điều khoản nào chưa được tuân thủ, tại sao, và kế hoạch khắc phục là gì?_
*   **Rủi ro và lỗ hổng:**
    *   _Có phát hiện lỗ hổng bảo mật nào trong sprint vừa qua không?_
{% endhint %}

## 5. Tổng Hợp & Kế Hoạch Hành Động (15-20 phút)

**Mục đích:** Tổng hợp các ý kiến và xác định các hành động cải tiến cụ thể.
**Kết quả mong đợi:** Toàn đội thống nhất về những gì cần làm, ai chịu trách nhiệm và khi nào hoàn thành.

**Hướng dẫn:** Dựa trên các phần review chi tiết, cả team cùng nhau điền vào bảng tổng hợp dưới đây. Tập trung vào việc chuyển các thảo luận thành các hành động cụ thể có thể theo dõi được (action items).

| Lĩnh Vực     | Điều Đã Làm Tốt (What Went Well) | Điều Cần Cải Thiện (Needs Improvement) | Hành Động Cụ Thể (Action Item) | Người Phụ Trách (Owner) | Deadline |
| :----------- | :------------------------------- | :------------------------------------ | :----------------------------- | :--------------------- | :------- |
| Sản phẩm     | \[Điền vào]                      | \[Điền vào]                           | \[Điền vào]                    | \[Tên thành viên]      | \[Ngày]  |
| Quy trình    | \[Điền vào]                      | \[Điền vào]                           | \[Điền vào]                    | \[Tên thành viên]      | \[Ngày]  |
| Giao tiếp    | \[Điền vào]                      | \[Điền vào]                           | \[Điền vào]                    | \[Tên thành viên]      | \[Ngày]  |
| Source Code  | \[Điền vào]                      | \[Điền vào]                           | \[Điền vào]                    | \[Tên thành viên]      | \[Ngày]  |
| Tài liệu     | \[Điền vào]                      | \[Điền vào]                           | \[Điền vào]                    | \[Tên thành viên]      | \[Ngày]  |
| Hạ tầng      | \[Điền vào]                      | \[Điền vào]                           | \[Điền vào]                    | \[Tên thành viên]      | \[Ngày]  |
| Bảo mật      | \[Điền vào]                      | \[Điền vào]                           | \[Điền vào]                    | \[Tên thành viên]      | \[Ngày]  |

## 6. Lưu Ý Quan Trọng Khi Tiến Hành Retrospective

{% hint style="danger" %}
**Lưu ý quan trọng khi tiến hành Retrospective:**

1. **Tập trung vào giải pháp, không đổ lỗi:** Mục tiêu là cải thiện, không phải tìm người chịu trách nhiệm cho sai sót. Tạo môi trường an toàn để mọi người dám nói lên sự thật.
2. **Khuyến khích mọi người tham gia đóng góp ý kiến:** Mọi ý kiến đều có giá trị. Người điều phối cần đảm bảo tất cả thành viên đều có cơ hội chia sẻ.
3. **Đảm bảo các action items SMART:** Các hành động phải Cụ thể (Specific), Đo lường được (Measurable), Khả thi (Achievable), Liên quan (Relevant), và có Thời hạn (Time-bound).
4. **Follow-up các action items:** Việc theo dõi và đánh giá tiến độ thực hiện action items là cực kỳ quan trọng để đảm bảo retrospective mang lại giá trị thực tế.
{% endhint %}
