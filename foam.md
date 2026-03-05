# FOAM Syntax Reference

## 1. Wikilinks (Liên kết nội bộ)

```markdown
[[note-name]]                      <!-- Link tới note khác -->
[[note-name|Display Text]]         <!-- Link với alias hiển thị -->
[[note-name#Section Title]]        <!-- Link tới section cụ thể -->
[[#Section Title]]                 <!-- Link tới section cùng file -->
```

Quy tắc đặt tên file: `lower-dash-case.md` — wikilink phải khớp chính xác tên file, không cần phần `.md`.

Placeholder: Khi wikilink trỏ tới file chưa tồn tại, FOAM hiển thị kiểu khác biệt. `Ctrl+Click` (hoặc `Cmd+Click` trên Mac) để tạo file mới từ placeholder.

---

## 2. Embeds (Nhúng nội dung)

```markdown
![[note-name]]                     <!-- Nhúng toàn bộ nội dung note -->
![[note-name#Section Title]]       <!-- Nhúng một section cụ thể -->
![[image.png]]                     <!-- Nhúng hình ảnh -->
```

Embed hiển thị nội dung inline trong preview, giúp tái sử dụng nội dung mà không cần copy.

---

## 3. Tags (Thẻ phân loại)

### Inline tags

```markdown
#machine-learning #data-science #algorithms
```

### Hierarchical tags (phân cấp)

```markdown
#programming/languages/python
#programming/frameworks/react
#work/projects/website-redesign
#personal/health/exercise
```

### Front matter tags

```text
---
tags: [machine-learning, data-science, algorithms]
---
```

Gõ `#` để xem autocomplete tag đã dùng. Trong front matter, dùng `Ctrl+Space`.

---

## 4. Front Matter (Metadata YAML)

Đặt ở **đầu file**, trước mọi nội dung khác:

```text
---
title: "Tên hiển thị trên graph"
type: "daily-note"
tags: [tag1, tag2, tag3]
alias: [bí-danh-1, bí-danh-2]
custom-property: value
---
```

### Special Properties

| Property | Mô tả |
| -------- | ----- |
| `title` | Tên note trên graph (ưu tiên cao nhất) |
| `type` | Loại note, style khác nhau trên graph (mặc định: `note`) |
| `tags` | Danh sách tags |
| `alias` | Bí danh, hiện trong autocomplete khi gõ `[[` |

### Thứ tự ưu tiên tên note

1. `title` property trong front matter
2. `# heading 1` đầu tiên trong file
3. Tên file

> YAML dùng dấu phẩy và khoảng trắng làm separator. Giá trị nhiều từ cần nối bằng `-` hoặc `_` (ví dụ: `hello-world` thay vì `hello world`).

---

## 5. Link Reference Definitions (Tự động sinh)

FOAM tự động thêm ở cuối file để wikilink tương thích với Markdown chuẩn:

```markdown
Xem thêm [[other-note]] và [[another-note]].

<!-- Cuối file — FOAM tự sinh -->
[other-note]: other-note.md "Other Note"
[another-note]: another-note.md "Another Note"
```

Cấu hình trong settings: `foam.edit.linkReferenceDefinitions` với giá trị `withExtensions`, `withoutExtensions`, hoặc `off`.

---

[[2026-04-05]] 6. Templates

Đặt trong thư mục `.foam/templates/`.

### Tạo template

Command Palette → `Foam: Create New Template`

### Dùng template

Command Palette → `Foam: Create New Note From Template`

### Biến template có sẵn

| Biến | Giá trị |
| ---- | ------- |
| `$FOAM_TITLE` | Tên note |
| `$FOAM_SELECTED_TEXT` | Text đang chọn |
| `$FOAM_DATE_YEAR` | Năm (YYYY) |
| `$FOAM_DATE_MONTH` | Tháng (MM) |
| `$FOAM_DATE_DATE` | Ngày (DD) |
| `$FOAM_DATE_YEAR_SHORT` | Năm (YY) |
| `$FOAM_DATE_MONTH_NAME` | Tên tháng (January...) |
| `$FOAM_DATE_MONTH_NAME_SHORT` | Tên tháng ngắn (Jan...) |
| `$FOAM_DATE_DAY_NAME` | Tên thứ (Monday...) |
| `$FOAM_DATE_DAY_NAME_SHORT` | Tên thứ ngắn (Mon...) |

### Ví dụ template daily note

```text
---
type: daily-note
tags: [daily]
---

# $FOAM_TITLE

## Tasks

- [ ] 

## Notes

```

---

## 7. Keyboard Shortcuts

| Phím tắt | Hành động |
| -------- | --------- |
| `Ctrl+Click` / `Cmd+Click` | Mở note từ wikilink |
| `F12` | Mở note từ wikilink (Go to Definition) |
| `[[` + gõ tên | Autocomplete wikilink |
| `#` + gõ tên | Autocomplete tag |
| `Ctrl+Space` | Gợi ý tag trong front matter |

---

## 8. So sánh nhanh: Wikilink vs Markdown Link

| | Wikilink | Markdown Link |
| - | -------- | ------------- |
| Cú pháp | `[[note-name]]` | `[text](note-name.md)` |
| Embed | `![[note-name]]` | Không hỗ trợ |
| Section link | `[[note#Section]]` | `[text](note.md#section)` |
| Autocomplete | Có | Không |
| Backlinks | Có | Có |
| Tương thích MD chuẩn | Cần Link Reference Definitions | Có sẵn |

---

## 9. Graph Visualization

- Command Palette → `Foam: Show Graph`
- Hover node để highlight connections
- Click để chọn node, `Shift+Click` chọn nhiều
- `Ctrl+Click` / `Cmd+Click` trên node để mở file
- Filter by type để lọc theo `type` trong front matter
- Tùy chỉnh style qua `foam.graph.style` trong settings

---

## 10. Backlinks

Panel Backlinks tự động hiển thị tất cả note đang trỏ tới note hiện tại. Truy cập qua panel **Connections** trong sidebar.
