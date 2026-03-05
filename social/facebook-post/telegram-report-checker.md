Tôi đã xây Vibe-code ra một telegram report checker system như thế nào ? 

Bối Cảnh: 
Tôi là một manager, và hiện tôi cần chịu trách nhiệm về việc giao tiếp cho khoảng 5 dự án. và như các manager xuất thân từ dev, chúng ta đều thích một phong cách quản lý theo kiểu technocrat. có sự kết hợp giữa AI-Automation-Con người. Và tôi cũng muốn thử một cách vibe-code  không bmad, không các phương pháp, không agent phức tạp, chỉ tư duy của mình và AI. 

Đặt vấn đề: 
- Hằng ngày lúc 11  giờ, tôi cần kiểm tra xem các anh em đã gửi report về tiến độ làm dự án hay chưa. 
- Nếu họ chưa gửi báo cáo, Hệ thống cần biến một ngày làm việc tuyệt vời của họ thành một ngày làm việc tồi tệ, như các manager tồi tệ khác. 
- Nếu họ đã gửi, Hệ thống cần kiểm tra chất lượng của báo cáo của họ đã đủ và đúng (về mặt hình thức) hay chưa. nếu không -> lặp lại bước 2. 

Giải pháp: 
- Tôi sử dụng Telegram  API với lib "node-telegram-bot-api". vì hầu hết chúng tôi làm việc trên telegram. 
- LLM: Open-rounter với ChatGPT-5. 
- Tech-stack: Javascript, và prisma + sqllite. 

---

Đầu tiên tôi sẽ thiết kế high-level design. Điều này giúp cho tôi khoanh vùng được các component cần thiết, Khi mà vibe code, tôi sẽ không 100% được source code, vì vậy khi vấn đề xảy ra, tôi cần biết chính xác lỗi đó sẽ ở trong khu vực nào. Việc thiết kế cũng khá đơn giản, bao gồm
- Telegram-helper: chịu trách nhiệm tương tác với telegram API, nếu tôi mở rộng, tôi chỉ cần thêm discord-helper chẳng hạn. Và tất nhiên nó sẽ làm việc với dependency của telegram. tránh trường hợp các module khác dính dáng đến con này. 
- LLM-helper và submodule của nó Open-AI helper: 2 con này sẽ chịu trách nhiệm tương tác với LLM. Khi mở rộng ra deepseek, tôi chỉ cần thêm deepshit-helper, và thêm nó vào llm helper là xong. tôi sẽ gọi nó là deepshit vì reasoning của nó quá tệ 
- Schedule-helper: là con lập lịch, con này sẽ quyết định khi nào bot sẽ quyết định khi nào sẽ cho dev của chúng tôi cảm thấy tồi tệ. Một dạng nhưu cron-job. 
- Report-Analyzer: Con này sẽ chịu trách nhiệm phân tích cái báo cáo có ổn hay không. 
- app.js: là trung tâm kết nối tất cả các module trên. 

--- 

Sau đó tôi sẽ lập ra một kế hoạch:  Tôi Input toàn bộ các hoạt động trên cho CursorAi và yêu cầu chúng đưa ra một tài liệu PRD.md (production Requirement Document) để mô tả ý tưởng sản phẩm, và một file tasks.md để đưa ra các check-list việc cần làm. Sau đó cầu nguyện rằng khứa claude nấu cho tôi một món gì đó nên hồn. 

Việc có task.ms cho phép tôi theo dõi và lập kế hoạch một cách cụ thể AI cần làm gì, và bước tiếp theo nó cần thực hiện gì. tôi cũng không chắc lắm về kế hoạch nhưng có vẻ nó chi tiết hơn 10 lần nếu tôi tự làm. Thi thoảng tôi cũng tự tay thay đổi các item không đúng hoặc xoá các việc không cần thiết. 

Có PRD cho phép tôi linh hoạt trong việc quản lý các yêu cầu, và ở đó AI có thể hiểu rõ 100% context

---

Bắt tay vào code: 

Tôi yêu cầu AI code theo kế hoạch với workflow:  Design Low-level - Thảo Luận - code - Test. Ví dụ "hãy bắt đầu phát triển module Schedule-helper, hãy gợi ý cho tôi low-level design cho module này, các function, sau khi tôi ra quyết định mới bắt đầu code." 

Tôi cũng không rõ Cronjob hoạt động theo logic nào, nhưng vì tôi là một vibe-coder nên tôi sẽ không quá quan tâm đến chi tiết, mà tôi sẽ yêu cầu AI giải thích cho tôi, và đưa cho tôi các lựa chọn. Việc của tôi sẽ là ra quyết định, và đảm bảo AI làm đúng Abtract và business của components mà tôi đặt ra.... Chống chỉ định làm vậy cho các module quan trọng. 

Sau khi khứa AI code xong nó sẽ ra một nồi lẩu thập cẩm giữa try-catch và một mớ code rác, đôi khi là code rất không cần thiết. Việc của tôi là yêu cầu chúng tái cấu trúc. Việc này đòi hỏi ae phải có chút kiến thức về code sạch, nên khi thấy chúng nó vi phạm tiêu chuẩn code sạch nào mà ae biết thì cứ bắt nó sửa lại. Ví dụ Sinle-responsibility-Principle chẳng hạn. Lặp lại cho tới khi mà bạn thấy hài lòng với module của bạn thì thôi. 

Lặp lại cho đến khi hoàn thành dự án thì thôi. Mấu chốt là cần bắt AI tái cấu trúc ngay khi hoàn thành một module. và bạn kiểm soát được 100% low-level design. Đảm bảo rằng bạn có thể đọc được mớ shitty code của bạn prompt ra, và khoanh vùng được bugs khi nó xảy ra. 

---

Document Dự án: 

Trong quá trình làm ra cái module đầu tiên, sẽ có rất nhiều lưu ý mà bạn prompt cho Ai, hãy yêu cầu nó viết lại vào một file là memory.md. ở đấy là các nguyên tắc mà bạn đặt ra. để làm các module tiếp theo k cần yêu cầu nó nhớ lại nữa.  

Ngoài ra tôi cũng yêu cầu AI viết hướng dẫn cài đặt, readme.md, ...etc cho dự án luôn. cũng một prompt đơn giản nhưng x10 tính chuyên nghiệp. 

Deploy: Tôi sử dụng railway để triển khai và kèm CI/CD cho nhanh. 15 phút là xong tất cả. easy. 

Kết luận: Mất 8 giờ để tôi ngồi code với 1 loạt công nghệ mà tôi không rõ, ra được sản phẩm chạy được và tuân thủ tốt kiến trúc và giải pháp. Cũng ổn, nếu cần chất lượng hơn có lẽ tôi sẽ làm thêm các file rule cho việc code sạch, nhưng về cơ bản hoạt động tái cấu trúc được diễn ra liên tục, ít khi có code rác được merge. 

Quản trọng nhất là mình học được trong quá trình brain-storm với AI, Kiểm thử lại giải pháp của bọn AI này, tái cấu trúc, documents...etc, Nên thử! 

