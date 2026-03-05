# Thinking — Metadata Specification

Tài liệu này quy định các giá trị **type**, **tags**, và quy ước **alias** cho tất cả note trong thư mục `thinking/`. Mọi file `.md` mới tạo trong thư mục này **phải** tuân thủ front matter chuẩn dưới đây.

---

## Front Matter Template

```text
---
title: "Tên hiển thị"
type: <type>
tags: [<tag-1>, <tag-2>, ...]
alias: [<alias-1>, <alias-2>]
---
```

---

## Types

| Type | Ý nghĩa | Khi nào dùng |
|------|---------|-------------|
| `dialogue` | Đối thoại Socratic giữa Anderson và AI | Các cuộc hỏi — đáp khai mở tư duy, tuân theo [[thinking-rule]] |
| `discussion` | Thảo luận mở, phân tích đa chiều | Phân tích vấn đề có nhiều góc nhìn, không nhất thiết theo format Socratic |
| `meeting-notes` | Ghi chép từ các buổi họp | Biên bản họp, ghi chú cải tiến, phản hồi từ các buổi làm việc |
| `rule` | Quy tắc, nguyên tắc, protocol | Các quy định về cách thức tư duy, thảo luận, hoặc vận hành |

---

## Tags

### Chủ đề (Topic)

| Tag | Ý nghĩa |
|-----|---------|
| `solo-dev` | Mô hình Solo Developer — một người điều phối AI để tạo sản phẩm |
| `agentic-ai` | Chiến lược và triển khai Agentic AI |
| `context-engineering` | Kỹ năng quản lý bối cảnh cho AI |
| `ai-driven` | Phương pháp AI-Driven Development |

### Tư duy & Chiến lược (Thinking & Strategy)

| Tag | Ý nghĩa |
|-----|---------|
| `product-thinking` | Tư duy sản phẩm — hiểu vấn đề, xác định giải pháp |
| `strategy` | Chiến lược ở tầm tổ chức hoặc dài hạn |
| `coordination-cost` | Chi phí phối hợp giữa con người (Brooks's Law) |
| `improvement` | Cải tiến quy trình, năng lực, tổ chức |

### Kỹ thuật (Technical)

| Tag | Ý nghĩa |
|-----|---------|
| `multi-agent` | Kiến trúc multi-agent — nhiều "thực thể AI" chuyên biệt |
| `agent-engineering` | Kỹ thuật xây dựng và vận hành AI Agent |
| `slm` | Small Language Model — mô hình ngôn ngữ nhỏ, chạy nội bộ |
| `hybrid-ai` | Kiến trúc kết hợp SLM nội bộ + LLM API |

### Tổ chức (Organization)

| Tag | Ý nghĩa |
|-----|---------|
| `cyberk` | Liên quan trực tiếp đến Cyberk — chiến lược, văn hoá, quy trình nội bộ |
| `leadership` | Lãnh đạo, quản lý đội nhóm, phát triển năng lực leader |
| `onboarding` | Đào tạo, hướng dẫn thành viên mới |

---

## Alias

### Quy ước đặt alias

- **Format:** `lower-dash-case`, khớp với tên file hoặc tên viết tắt phổ biến
- **Alias chính:** Luôn trùng với tên file (không có `.md`) để wikilink hoạt động
- **Alias phụ:** Tên gọi thay thế mà người khác có thể dùng khi tham chiếu

### Ví dụ

```text
# File: example-dialogue.md
alias: [example-dialogue]

# File: example-strategy.md
alias: [example-strategy, alt-strategy-name]
```

---

## Ví dụ front matter hoàn chỉnh

```text
---
title: "Example Dialogue"
type: dialogue
tags: [solo-dev, product-thinking]
alias: [example-dialogue]
---
```

---

## Metadata Spec liên quan

| Thư mục | Metadata Spec | Mục đích |
|---------|--------------|----------|
| `thinking/` | [[readme]] (file này) | Đối thoại, thảo luận, tư duy chiến lược |
| `on-boarding/` | [[on-boarding-readme]] | Tài liệu hội nhập nhân sự mới |

---

## Lưu ý

- **Không tự ý tạo tag mới** mà không bổ sung vào file này trước.
- **Một note có thể có nhiều tags** nhưng chỉ có **đúng một type**.
- Tags nên phản ánh **nội dung thực tế** của note, không gắn tag chỉ vì liên quan gián tiếp.
- Khi thêm tag mới, cần ghi rõ **ý nghĩa** và **khi nào dùng** vào bảng tương ứng ở trên.
