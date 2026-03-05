---
title: "Onboarding — Metadata Specification"
type: index
tags: [onboarding, cyberk]
alias: [on-boarding-readme]
---

# Onboarding — Metadata Specification

Tài liệu này quy định các giá trị **type**, **tags**, và quy ước **alias** cho tất cả note trong thư mục `on-boarding/`. Mọi file `.md` mới tạo trong thư mục này **phải** tuân thủ front matter chuẩn dưới đây.

---

## Cấu trúc thư mục

```
on-boarding/
├── culture/      ← Văn hoá, tinh thần, cách sống tại Cyberk
└── policy/       ← Chính sách, quy định, chế độ phúc lợi
```

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
| `guide` | Hướng dẫn thực hành | Tài liệu hướng dẫn, quy trình, case study |
| `policy` | Chính sách, quy định | Quy định nội bộ, chế độ phúc lợi, quy tắc ứng xử |
| `index` | Mục lục, tổng hợp | SUMMARY, readme, trang tổng hợp liên kết |

---

## Tags

### Chủ đề (Topic)

| Tag | Ý nghĩa |
|-----|---------|
| `onboarding` | Quy trình đào tạo, hội nhập thành viên mới |
| `member` | Dành cho tất cả thành viên Cyberk |
| `culture` | Văn hoá, giá trị cốt lõi, triết lý |
| `policy` | Chính sách nội bộ, phúc lợi |
| `communication` | Giao tiếp, báo cáo (Horenso) |
| `security` | Bảo mật thông tin |
| `cyberk` | Liên quan trực tiếp đến Cyberk — tổng quan, tầm nhìn |
| `rewrite` | Note cần viết lại |

---

## Alias

### Quy ước đặt alias

- **Format:** `lower-dash-case`, khớp với tên file hoặc tên viết tắt phổ biến
- **Alias chính:** Luôn trùng với tên file (không có `.md`) để wikilink hoạt động
- **Alias phụ:** Tên gọi thay thế mà người khác có thể dùng khi tham chiếu

### Ví dụ

```text
# File: example-note.md
alias: [example-note]

# File: another-note.md
alias: [another-note, short-name]

# File: third-note.md
alias: [third-note, alternate-name]
```

---

## Ví dụ front matter hoàn chỉnh

```text
---
title: "Example Note"
type: guide
tags: [onboarding, member]
alias: [example-note]
---
```

---

## Lưu ý

- **Không tự ý tạo tag mới** mà không bổ sung vào file này trước.
- **Một note có thể có nhiều tags** nhưng chỉ có **đúng một type**.
- Tags nên phản ánh **nội dung thực tế** của note, không gắn tag chỉ vì liên quan gián tiếp.
- Khi thêm tag mới, cần ghi rõ **ý nghĩa** vào bảng tương ứng ở trên.
- Tham khảo thêm cú pháp FOAM tại [[foam]].
