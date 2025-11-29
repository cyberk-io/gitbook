# Quy trình làm việc tại Cyberk

Phần này mô tả chi tiết về quy trình làm việc chuẩn tại Cyberk, từ các nguyên tắc nền tảng đến các bước thực thi cụ thể trong dự án.

## Hành trình trải nghiệm khách hàng (Customer Journey)

Đây là vòng lặp phát triển sản phẩm của chúng tôi cùng với khách hàng:

1. **Thấu hiểu & Thống nhất:** Khách hàng đặt vấn đề, Cyberk cung cấp giải pháp. Chúng ta cùng nhau thống nhất về cách làm, chi phí, và thời hạn. Sự rõ ràng và minh bạch là nguyên tắc hàng đầu.
2. **Đồng hành & Xây dựng:** Khách hàng tham gia các cuộc họp hàng ngày cùng đội ngũ phát triển, trực tiếp trải nghiệm sản phẩm được hoàn thiện mỗi ngày và cùng nhau ăn mừng những thành công nhỏ (small success).
3. **Vận hành & Cải tiến:** Sản phẩm được ra mắt và có người dùng cuối. Đội ngũ Cyberk cùng khách hàng chăm sóc sản phẩm, thu thập phản hồi và phát hiện các vấn đề mới.
4. **Lặp lại:** Quay về bước 1 để bắt đầu một chu kỳ phát triển mới, liên tục cải tiến và nâng cấp sản phẩm.

## Các nguyên tắc cốt lõi

Đây là những triết lý nền tảng, là kim chỉ nam cho mọi hoạt động phát triển phần mềm tại Cyberk.

- **Luôn sẵn sàng bàn giao:** Đảm bảo môi trường (dev-test-prod) và tài liệu luôn được cài đặt và sẵn sàng từ ngày đầu tiên.
- **Bàn giao liên tục cho khách hàng:** Trình bày và demo sản phẩm hàng ngày với khách hàng để nhận được phản hồi càng sớm càng tốt.
- **Chất lượng đến từ người làm ra:** Tập trung phát hiện lỗi sớm, hướng tới một sản phẩm không cần tester.

## Quy trình 6 bước

Đây là quy trình làm việc chuẩn, giúp mọi thành viên, đặc biệt là nhân viên mới, nhanh chóng nắm bắt và đóng góp hiệu quả vào dự án.

1. **Proposal (Đề xuất):** Team BOD cung cấp báo giá, đề xuất và ước tính cho dự án. Bước này sẽ thống nhất về cách làm, công nghệ sử dụng, phạm vi công việc (Scope of Work) và loại dịch vụ.
2. **Bootstrap (Khởi tạo):** Team bootstrap sẽ tiến hành cài đặt sản phẩm bằng cách lấy ra từ Cyberk framework, tinh chỉnh cho phù hợp, triển khai tất cả các thành phần quan trọng trên các môi trường dev, production, như Indexer, Frontend, Backend, Contract-sample. Họ cũng xây dựng các entity, API và các tài liệu cần thiết như, thiết kế kiến trúc (architecture design), ERC và tài liệu bàn giao (Hangover document), chuẩn bị sẵn sàng để cuối dự án không bị động.
3. **Project Planning Meeting (Họp kế hoạch dự án):** Đội ngũ họp nội bộ để lên kế hoạch chi tiết. Đọc thêm tại file [Các cuộc họp quan trọng](./important-meeting.md).
4. **Kick-off Meeting (Họp khởi động):** Họp với khách hàng để trình bày kế hoạch đã thống nhất ở bước 3.
5. **Project Development (Phát triển dự án):** Team tập trung phát triển các thành phần quan trọng của dự án, họp với khách hàng hằng ngày và tự demo sản phẩm để tìm ra vấn đề.
6. **Launch (Ra mắt sản phẩm):** Quan sát sản phẩm được sử dụng, tìm ra vấn đề và sửa ngay khi phát hiện.

Khi có yêu cầu mới, quy trình sẽ lặp lại từ bước 1.
