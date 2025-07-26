---
description: "Hướng dẫn về hai trụ cột quan trọng để làm việc hiệu quả tại Cyberk: Hiểu Business và Hiểu Kiến trúc."
icon: "foundation"
---

# Hiểu Business, Hiểu Kiến Trúc

Để trở nên được việc tại Cyberk, hay cụ thể ở một dự án của Cyberk, ta bắt đầu với hai trụ cột. Đây là hai trụ cột tối thiểu mà bạn cần nắm vững để có thể đạt được năng suất làm việc (productivity) tốt.

## Trụ cột 1: Hiểu Business

Đây là việc bạn phải có **trách nhiệm** hiểu business của ứng dụng mà team phát triển và của tính năng bạn đang làm.

Tôi muốn nhấn mạnh rằng đó không chỉ là một việc "nice-to-have". Nó là một việc bạn **bắt buộc** phải làm, và phải làm tốt!

> Hãy tưởng tượng bạn dành một tuần tập trung làm thêm giờ để hoàn thành một tính năng quan trọng. Khi demo cho khách hàng, bạn mới phát hiện ra mình đã làm sai yêu cầu và phải làm lại từ đầu. Tệ hơn nữa là team của bạn đã hết thời gian cho tính năng đó...

Đúng vậy, khách hàng có trách nhiệm "làm rõ yêu cầu". Nhưng như chúng ta đã biết, họ có thể là nhà khởi nghiệp, người chơi crypto, nhà khoa học, hoặc chuyên gia tài chính. Họ vốn không có nghiệp vụ trong việc viết tài liệu yêu cầu sản phẩm (PRD) hay tài liệu yêu cầu kinh doanh (BRD) một cách dễ hiểu cho bạn.

Trách nhiệm của họ cũng là "làm rõ" chứ không phải là chủ động cung cấp mọi thứ bạn cần. Đặc biệt khi làm việc từ xa, việc kỳ vọng khách hàng hiểu và đáp ứng ngay lập tức mọi nhu cầu của lập trình viên là rất khó.

Vì vậy, với tư cách là một lập trình viên (developer), khi gặp vấn đề trong việc hiểu yêu cầu (requirement), bạn cần:
1.  **Yêu cầu làm rõ:** Hãy yêu cầu khách hàng làm rõ điều đó ngay trên nhóm chat chung để mọi người cùng biết rằng bạn đang bị vướng mắc (stuck). Điều này giúp khách hàng nhận thức được vấn đề của bạn.
2.  **Tìm sự giúp đỡ từ Dev-lead:** Nếu khách hàng hoặc không ai có thể giải đáp, hãy hỏi Dev-lead của bạn. Một vài yêu cầu phi chức năng (non-functional requirements) hoặc yêu cầu kỹ thuật (technical requirements) chỉ có thể được cung cấp từ phía đội ngũ phát triển.
3.  **Yêu cầu tài liệu:** Đề nghị leader viết một tài liệu BRD ngắn gọn cho tính năng bạn làm. Điều đó sẽ giúp công việc của cả bạn và anh ấy trở nên chuyên nghiệp hơn rất nhiều.

## Trụ cột 2: Hiểu Kiến trúc

Đây là vấn đề mà các Junior và cả Middle developer thường gặp phải. Việc làm việc trong một repository mà không biết nó được thiết kế như thế nào, tuân theo những nguyên tắc (principles) nào là rất phổ biến. Và điều đó làm cho hầu hết các lập trình viên nhiều năm kinh nghiệm dừng lại mãi ở cấp độ Junior.

Vậy, làm thế nào để hiểu kiến trúc?

-   **Nếu bạn là Leader:** Hãy viết ngay tài liệu thiết kế kiến trúc (Architecture Design) cho dự án của bạn và trình bày nó cho team.

-   **Nếu bạn là Member:**
    -   Hãy đặt câu hỏi cho leader của bạn. Nếu chưa có tài liệu này, hãy yêu cầu một tài liệu. Hoặc hãy nhắn cho Anderson, anh ta chịu trách nhiệm cho mọi vấn đề ở công ty này.
    -   Nếu bạn đọc tài liệu mà không hiểu thuật ngữ nào đó, hãy sử dụng AI để nó giải thích cho bạn.
    -   Nếu bạn phát hiện một đoạn code nào đó triển khai sai với kiến trúc, hãy nêu vấn đề (raise issue) lên cho cả team cùng biết. 