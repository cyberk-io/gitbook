# Technical Project Bootstrap Checklist

Đây là checklist các công việc cần thực hiện khi bắt đầu một dự án kỹ thuật mới tại CyberK. Mục tiêu là đảm bảo mọi dự án đều được thiết lập một cách nhất quán, đầy đủ và sẵn sàng cho việc phát triển.

## 1. Repository

- [ ] **Tạo repository:** Thiết lập các kho chứa mã nguồn cần thiết (ví dụ: Backend, Frontend, Mobile, components dùng chung).
- [ ] **Cấu hình branch:**
    - [ ] Áp dụng `protected branch` cho các nhánh chính (`main`, `develop`).
    - [ ] Thiết lập các quy tắc bắt buộc: yêu cầu review, yêu cầu pass CI pipeline trước khi merge.

## 2. Codebase

- [ ] **Khởi tạo từ template:** Triển khai codebase ban đầu từ template chuẩn của công ty cho từng nền tảng (nếu có).
- [ ] **Tối ưu hóa codebase:**
    - [ ] Rà soát và loại bỏ các module, thư viện không cần thiết từ template.
    - [ ] Cấu hình các file `.env` mẫu (`.env.example`).
- [ ] **Coding Convention & Linter:**
    - [ ] Kiểm tra và đảm bảo linter, code formatter (ví dụ: ESLint, Prettier, Black) đã được cài đặt và cấu hình.
    - [ ] Bổ sung các quy tắc còn thiếu hoặc tuỳ chỉnh cho phù hợp với dự án.

## 3. Environment (Môi trường)

- [ ] **Thiết lập môi trường:**
    - [ ] Cấu hình môi trường `development`.
    - [ ] Cấu hình môi trường `testing`/`staging`.
    - [ ] Cấu hình môi trường `production`.
- [ ] **Quản lý biến môi trường (ENV):** Đảm bảo các biến môi trường cần thiết đã được định nghĩa cho từng môi trường.

## 4. Infrastructure (Hạ tầng)

- [ ] **Hosting:** Lựa chọn và cấu hình nền tảng hosting (ví dụ: Vercel, Netlify cho Frontend).
- [ ] **Server:**
    - [ ] Provision server cho các môi trường (dev, staging, prod).
    - [ ] Cài đặt các phần mềm cần thiết (runtime, web server...).
- [ ] **Database:**
    - [ ] Provision database cho các môi trường.
    - [ ] Cấu hình tài khoản, phân quyền và các thiết lập bảo mật.

## 5. Documents (Tài liệu)

- [ ] **ERD (Entity-Relationship Diagram):** Vẽ và hoàn thiện sơ đồ quan hệ thực thể cho cơ sở dữ liệu.
- [ ] **High-Level Design:** Soạn thảo tài liệu thiết kế ở mức cao, mô tả kiến trúc tổng thể, các components chính và luồng dữ liệu.
- [ ] **Project Checklist:** Hoàn thiện checklist này và lưu lại trong repository của dự án để theo dõi tiến độ.
