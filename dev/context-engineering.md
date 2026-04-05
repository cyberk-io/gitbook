---
title: "Context-Engineering"
type: dev
tags: [agentic, cyberk-way]
alias: [context-engineering]
---

# Context-Engineering là gì

## Định nghĩa

Context-Engineering là kỹ năng **xây dựng, tổ chức và duy trì bối cảnh** (context) để AI có thể làm việc chính xác và hiệu quả. Bối cảnh ở đây bao gồm mọi thông tin mà AI cần để hiểu vấn đề và tạo ra output đúng: yêu cầu sản phẩm, kiến trúc kỹ thuật, quy tắc code, ràng buộc nghiệp vụ, lịch sử quyết định...

Nói cách khác: nếu AI là một động cơ cực kỳ mạnh mẽ, thì context chính là nhiên liệu. Động cơ mạnh đến đâu cũng vô dụng nếu không có nhiên liệu đúng loại.

## Tại sao Context-Engineering quan trọng

AI không "biết" bất cứ điều gì về dự án của bạn cho đến khi bạn nói cho nó biết. Mỗi khi bạn mở một phiên làm việc với AI, nó bắt đầu từ con số không. Chất lượng output hoàn toàn phụ thuộc vào chất lượng input.

- Tài liệu mơ hồ → AI tạo ra output mơ hồ.
- Tài liệu chính xác → AI tạo ra output chính xác.
- Không có tài liệu → AI đoán — và đoán sai.

Đây là lý do context-engineering không phải "việc giấy tờ" — mà là **hành động quyết định hiệu năng của toàn bộ dự án**. *(Trong mô hình [[solodev-way|Solo Dev]], đây là năng lực nền tảng xuyên suốt.)*

## Nguyên tắc cốt lõi: Không thừa, không thiếu

Context-engineering là nghệ thuật cân bằng:

| Trạng thái | Hệ quả |
|---|---|
| **Thiếu context** | AI phải đoán, output sai lệch so với mong đợi. Mất thời gian sửa đi sửa lại. |
| **Thừa context** | AI bị nhiễu bởi thông tin không liên quan, mất focus. Kết quả dàn trải, không sắc nét. |
| **Đúng context** | AI hiểu chính xác cần làm gì, tại sao, trong phạm vi nào. Output khớp với kỳ vọng ngay từ lần đầu. |

Mục tiêu: cung cấp **đủ** thông tin để AI không phải đoán, nhưng **không nhiều hơn** mức cần thiết cho nhiệm vụ hiện tại.

## Các loại context trong một dự án

### 1. Context sản phẩm (Product Context)

Trả lời câu hỏi: **"Sản phẩm này giải quyết vấn đề gì, cho ai?"**

- **PRD (Product Requirements Document)** — mô tả sản phẩm tổng thể: mục tiêu, người dùng mục tiêu, tính năng chính, ưu tiên.
- **BRD (Business Requirements Document)** — yêu cầu từ góc nhìn kinh doanh: bài toán cần giải, KPI, ràng buộc ngân sách/thời gian.
- **User Stories / Use Cases** — mô tả cách người dùng tương tác với sản phẩm trong từng tình huống cụ thể.

### 2. Context kỹ thuật (Technical Context)

Trả lời câu hỏi: **"Hệ thống được xây dựng như thế nào?"**

- **SRS (Software Requirements Specification)** — đặc tả kỹ thuật chi tiết: API, data model, business logic.
- **Tài liệu kiến trúc (Architecture Document)** — mô tả cấu trúc hệ thống, tech stack, cách các thành phần giao tiếp.
- **ADR (Architecture Decision Records)** — ghi lại các quyết định kiến trúc quan trọng và lý do đằng sau chúng.

### 3. Context quy tắc (Rules Context)

Trả lời câu hỏi: **"AI nên tuân theo quy tắc gì khi làm việc?"**

- **Coding standards** — quy ước đặt tên, cấu trúc thư mục, design pattern được sử dụng.
- **Cursor Rules / AI Rules** — các quy tắc cụ thể cho AI: cách viết commit message, cách tổ chức code, cách xử lý lỗi. *(Trong [[cyberk-agentic|chiến lược Agentic AI]], đây là cách "tiêm ADN Cyberk" vào AI.)*
- **Definition of Done** — tiêu chuẩn để một tính năng được coi là "hoàn thành".

### 4. Context lịch sử (Historical Context)

Trả lời câu hỏi: **"Tại sao hệ thống trông như thế này?"**

- **Changelog / Release notes** — lịch sử thay đổi của sản phẩm.
- **Ghi chú quyết định** — tại sao chọn PostgreSQL thay vì MongoDB, tại sao dùng microservice thay vì monolith.
- **Known issues / Tech debt log** — các vấn đề đã biết và nợ kỹ thuật đang tồn tại.

## Context sống, không phải context chết

Tài liệu đặc tả không phải viết một lần rồi bỏ. Khi sản phẩm phát triển, context phải được cập nhật liên tục:

- **Cập nhật** PRD/SRS sau mỗi thay đổi yêu cầu.
- **Ghi lại** các quyết định kiến trúc ngay khi chúng được đưa ra.
- **Loại bỏ** context đã lỗi thời để tránh gây nhiễu cho AI.

Context lỗi thời còn nguy hiểm hơn không có context — vì nó khiến AI tự tin làm sai.

## Context-Engineering trong thực hành

### Khi bắt đầu dự án mới

1. Viết PRD/BRD — xác định rõ vấn đề, người dùng, tính năng cốt lõi.
2. Viết SRS — đặc tả kỹ thuật cho tính năng đầu tiên.
3. Thiết lập Cursor Rules / AI Rules — quy tắc chung cho AI trong dự án.
4. Tạo Architecture Document — mô tả tech stack và cấu trúc ban đầu.

### Khi phát triển tính năng

1. Cập nhật PRD nếu yêu cầu thay đổi.
2. Viết SRS chi tiết cho tính năng cần xây.
3. Cung cấp context vừa đủ cho AI flow tương ứng — coding flow chỉ cần SRS + kiến trúc, không cần toàn bộ BRD.

### Khi bàn giao dự án

1. Đảm bảo toàn bộ context đã được cập nhật.
2. Người tiếp nhận đọc tài liệu + cung cấp cho AI → có thể tiếp tục ngay mà không cần "ngồi cạnh người cũ hàng tuần". *(Đây là lý do [[solodev-way#8.3. Tri thức được tường minh hoá|bus factor của Solo Dev có thể cao hơn team truyền thống]].)*

## Tóm lại

Context-Engineering không chỉ là kỹ năng viết tài liệu — mà là kỹ năng **tư duy có hệ thống** về thông tin. Người giỏi context-engineering biết:

- Thông tin nào cần thiết cho nhiệm vụ nào.
- Mức độ chi tiết phù hợp cho từng loại tài liệu.
- Khi nào cần cập nhật, khi nào cần loại bỏ.
- Cách tổ chức context để AI truy cập nhanh và chính xác.

Đây là kỹ năng nền tảng của mô hình [[solodev-way|Solo Dev]] — và cũng là kỹ năng phân biệt giữa một Solo Dev hiệu quả và một Solo Dev vật lộn với AI.

---

## Liên kết kiến thức

- [[solodev-way]] — Tài liệu phương pháp Solo Dev — nơi context-engineering được định vị là năng lực cốt lõi (mục 5)
- [[solo-dev]] — Cuộc đối thoại gốc — nơi nguyên tắc "không thừa, không thiếu" được xác lập
- [[cyberk-agentic]] — Chiến lược Agentic AI — nơi context trở thành "ADN" được inject vào Agent

### Context-Engineering kết nối mọi thứ

| Vai trò của Context | Trong ngữ cảnh nào |
|---|---|
| Nhiên liệu cho AI | [[solodev-way#4.4. Quản lý bối cảnh (Context Management)]] |
| Giải quyết blind spot | [[solo-dev]] — Socrates hỏi về vòng lặp bias |
| ADN tổ chức | [[cyberk-agentic]] — Inject chuẩn Cyberk vào Agent |
| Tri thức tường minh hoá | [[solodev-way#8.3. Tri thức được tường minh hoá]] — Bus factor cao hơn |
| Input cho Multi-Agent Flow | [[solodev-way#6. Multi-Agent Flow — Làm việc với nhiều "thực thể AI"]] |
