# Metadata Rule - Quy ước phân loại tài liệu

Bộ quy ước metadata dùng text front matter để phân loại toàn bộ file `.md` trong project.

## Cú pháp áp dụng

```text
---
type: on-boarding
tags: [solo-dev, native-ai]
notes: improve
---
```

---

## 1. `type` — Phân loại nội dung

Mỗi file chỉ có **một** type duy nhất. type mang tính mục đích sử dụng.

| Giá trị | Mô tả |
| ------- | ----- |
| `on-boarding` | Tài liệu dành cho onboarding nhân sự mới |
| `dev` | Tài liệu dành cho developer |
| `po` | Tài liệu dành cho product owner |
| `thinking` | Suy nghĩ, reasoning của Anderson về một vấn đề |
| `design` | Tài liệu dành cho designer |
| `qa` | Tài liệu dành cho bộ phận quality control |
| `manager` | Tài liệu dành cho bộ phận quản lý |
| `cyberk` | Hiểu biết chung về CyberK, CyberK Way |

---

## 2. `notes` — Trạng thái ghi chú

Đánh dấu hành động cần thực hiện với file. Bỏ trống nếu file đã ổn.

| Giá trị | Mô tả |
| ------- | ----- |
| `rewrite` | Cần viết lại hoàn toàn |
| `improve` | Cần cải thiện, bổ sung |

---

## 3. `tags` — Thẻ chủ đề

Một file có thể có **nhiều** tags. Dùng mảng text: `tags: [tag1, tag2]`  tags mang tính phân loại domain

| Giá trị | Mô tả |
| ------- | ----- |
| `solo-dev` | Nội dung về mô hình solo-dev |
| `native-ai` | Chuyển đổi, sử dụng AI triệt để vào công việc |
| `cyberk-way` | Phương pháp CyberK, bí quyết, văn hóa |
| `agentic` | Agentic development và các hiểu biết liên quan |
| `policy` | Chính sách của Cyberk |

---

## Ví dụ

### File onboarding về văn hóa

```text
---
type: on-boarding
tags: [cyberk-way]
---
```

### File thinking cần viết lại

```text
---
type: thinking
tags: [agentic, native-ai]
notes: rewrite
---
```

### File dành cho developer về solo-dev

```text
---
type: dev
tags: [solo-dev, native-ai]
---
```

---

## Quy tắc áp dụng

- Mọi file `.md` (trừ README, SUMMARY, table-content) **phải** có front matter với ít nhất `type` và `tags`
- `notes` là optional
- Giá trị phải nằm trong danh sách đã định nghĩa ở trên
- Khi thêm giá trị mới, cập nhật file này trước
