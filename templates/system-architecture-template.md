---
description: "Template thiết kế kiến trúc hệ thống cho các dự án"
icon: "architecture"
---

# [Tên Dự Án] - System Architecture Design

> **Instructions cho tiêu đề:**
> - Tên dự án: 2-4 từ, súc tích
> - Subtitle (optional): < 10 từ
> - Ví dụ: "PaymentGateway - Blockchain-based Payment Processing System"

## 1. Guiding Principles & System Requirements

### 1.1. Guiding Principles

> **Instructions:**
> - Liệt kê 3-5 nguyên tắc cốt lõi
> - Mỗi nguyên tắc: tên ngắn gọn + giải thích 2-3 câu + lý do quan trọng
> - Sắp xếp theo thứ tự ưu tiên

- **Modularity & Separation of Concerns:** [Mô tả 2-3 câu về cách module hóa hệ thống]
- **Scalability:** [Mô tả chiến lược scaling và lý do]
- **[Nguyên tắc 3]:** [Mô tả và giải thích]

### 1.2. Non-Functional Requirements (NFRs)

> **Instructions:**
> - Mỗi NFR cần: định nghĩa, metrics, thresholds
> - Tối thiểu phải có: Performance, Availability, Security, Data integrity
> - Sử dụng số liệu cụ thể

- **Performance:**
    - [Định nghĩa 2-3 metrics chính: response time, throughput, etc.]
    - [Xác định ngưỡng cho mỗi metric, ví dụ: p95 < 200ms]
- **Availability & Disaster Recovery:**
    - **RTO:** [Số giờ/phút cụ thể + lý do]
    - **RPO:** [Số giờ/phút cụ thể + lý do]
- **Data Integrity:** [2-3 yêu cầu cụ thể]
- **Security:** [3-4 yêu cầu quan trọng nhất]

## 2. High-Level Architecture Overview

> **Instructions:**
> - Mở đầu: 1-2 đoạn (50-100 từ) giới thiệu tổng quan
> - Mỗi layer: tên mô tả + 2-3 chức năng chính + mối quan hệ với layer khác
> - Nên có diagram minh họa

[Đoạn mô tả tổng quan 50-100 từ về kiến trúc hệ thống]

- **Layer 1: [Tên Layer]**
  - [2-3 chức năng chính]
  - [Vai trò trong hệ thống]
  - [Tương tác với các layer khác]

[Tiếp tục với các layer khác...]

## 3. Component Breakdown & Tech Stack

> **Instructions:**
> - Mỗi layer: mô tả tổng quan (30-50 từ) + 2-4 components
> - Mỗi component cần:
>   - Tên thể hiện chức năng
>   - Mô tả chi tiết (50-70 từ)
>   - Tech stack cụ thể (tên + version)
>   - 2-3 lý do chọn tech stack
>   - Alternatives đã cân nhắc (optional)

### Layer 1: [Tên Layer]
[Mô tả tổng quan 30-50 từ về layer này]

- **Component: [Tên Component 1]**
    - **Mô tả:** [50-70 từ về chức năng và nhiệm vụ]
    - **Tech Stack:** [Liệt kê công nghệ + version]
    - **Lý do:** [2-3 lý do chính]
    - **Alternatives:** [Các lựa chọn khác đã cân nhắc]

[Tiếp tục với các component khác...]

## 4. Implementation Considerations

> **Instructions:**
> - 3-5 điểm quan trọng nhất
> - Mỗi điểm: vấn đề + giải pháp + risks

- **[Consideration 1]:**
    - Vấn đề: [Mô tả]
    - Giải pháp: [Đề xuất]
    - Risks: [Liệt kê]

[Tiếp tục với các considerations khác...]

## 5. Hướng dẫn sử dụng template

1. **Chuẩn bị thông tin:**
   - Thu thập requirements
   - Xác định tech stack
   - Tham khảo các stakeholders

2. **Điền template:**
   - Tuân thủ format gợi ý
   - Đảm bảo độ chi tiết phù hợp
   - Giữ tính nhất quán

3. **Review & Finalize:**
   - Kiểm tra tính đầy đủ
   - Xác nhận với team
   - Cập nhật diagrams

4. **Lưu ý quan trọng:**
   - Thay thế tất cả placeholders [...]
   - Tuân thủ độ dài gợi ý cho mỗi section
   - Đảm bảo lý do technical thuyết phục
   - Kiểm tra tính practical của giải pháp