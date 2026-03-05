---
description: "Ghi lại các cuộc thảo luận, phản đề và kết luận về việc triển khai AI-Driven Development vào thực tiễn."
icon: "brain-circuit"
---

# Thảo luận về AI-Driven Development (ADD) trong thực tiễn

### **0. Bối cảnh và Mục tiêu**

**Dành cho ai?** Tài liệu này dành cho tất cả các thành viên Cyberk đang và sẽ tham gia vào các dự án áp dụng phương pháp luận AI-Driven Development.

**Đây là tài liệu gì?**
Đây **không phải** là một bản hướng dẫn chính thức. Thay vào đó, hãy xem nó như một "biên bản" sống, ghi lại những câu hỏi, trăn trở và các cuộc thảo luận của chúng ta trong quá trình biến những lý thuyết đầy tham vọng thành thực tiễn hàng ngày.

Nó được định hình như một cuộc đối thoại giữa **AI** (trong vai trò người đặt câu hỏi và phản đề) và **Anderson** (trong vai trò người đưa ra quan điểm và định hướng). Do đó, các phần "Kết luận thống nhất" thể hiện sự tổng hợp quan điểm từ cuộc đối thoại này tại một thời điểm nhất định, và **luôn mở** cho các thảo luận và phản biện sâu hơn từ cộng đồng.

**Để hiểu tài liệu này, bạn cần biết:**

* **AI-Driven Development (ADD):** Là phương pháp luận mà chúng ta đang tiên phong, nơi lập trình viên chuyển dịch vai trò từ người trực tiếp "lái xe" (viết từng dòng code) sang người "dẫn đường" (thiết lập định hướng, yêu cầu và quy tắc). AI sẽ là người "cầm lái" dưới sự giám sát chặt chẽ. *(Để tìm hiểu sâu hơn, vui lòng đọc tài liệu `ai-driven-development.md`)*.
* **Cyberk AI Process:** Là quy trình cụ thể mà Cyberk xây dựng để triển khai ADD. Quy trình này xác định rõ vai trò (Dev-lead, Navigator) và các bước cần thiết để "huấn luyện" và làm việc hiệu quả với AI. *(Để tìm hiểu sâu hơn, vui lòng đọc tài liệu `cyberk-ai-process.md`)*.

**Mục tiêu của chúng ta ở đây:**
Cùng nhau phân tích những vấn đề "gai góc" nhất, những câu hỏi chưa có lời giải đáp chắc chắn để tìm ra giải pháp và liên tục cải tiến quy trình làm việc.

---

Tài liệu này ghi lại những câu hỏi và thảo luận xoay quanh việc áp dụng phương pháp luận AI-Driven Development (ADD) và quy trình Cyberk AI Process vào thực tế. Mục tiêu là để làm rõ các thách thức, cơ hội và tìm kiếm giải pháp để triển khai thành công.

## 1. Về Vai trò và Kỹ năng của Lập trình viên

### 1.1. Đối với Lập trình viên Junior

* Phương pháp luận này có dành cho họ không?

* Khi một người mới bắt đầu sự nghiệp và cần học những kỹ năng "lái xe" (coding) cơ bản nhất, việc để họ học cách "dẫn đường" (navigate) trước có thể mang lại rủi ro gì?
* Liệu điều này có làm chậm quá trình phát triển các kỹ năng lập trình nền tảng của họ không?

#### Thảo luận và Hướng giải quyết

**Một góc nhìn khác:** Chúng ta có đang nhìn nhận vấn đề quá tiêu cực không? Thay vì là "rủi ro", liệu đây có phải là một **cơ hội vàng** để Junior phát triển các kỹ năng của tương lai (tư duy hệ thống, kỹ năng đặt câu hỏi) ngay từ ngày đầu tiên không? Liệu việc học "dẫn đường" trước khi quá thành thạo "lái xe" có giúp họ tránh được những định kiến và thói quen lập trình cũ mà các thế hệ trước phải rất vất vả để "học lại" không?

**Tổng hợp quan điểm:** Cả hai góc nhìn đều có lý. Rủi ro là có thật, nhưng cơ hội cũng rất lớn. Do đó, vấn đề không phải là "có nên cho Junior tham gia hay không", mà là "làm thế nào để tạo ra một môi trường an toàn để họ vừa học được kỹ năng nền tảng, vừa nắm bắt được cơ hội này".

Để giúp Lập trình viên Junior không chỉ tồn tại mà còn phát triển mạnh mẽ trong mô hình ADD, chúng ta cần trả lời các câu hỏi sau:

1. **Vai trò của người Quản lý/Senior:**
    * Người quản lý và senior dev cần tạo ra môi trường và quy trình như thế nào để Junior có thể tham gia một cách hiệu quả và an toàn? (Ví dụ: Giao các tác vụ có độ phức tạp thấp? Hay tổ chức các buổi pair-programming/mob-programming thường xuyên?)
    * Senior dev nên kèm cặp (mentor) Junior như thế nào trong bối cảnh mới? Họ nên tập trung dạy "tư duy định hướng" (navigation thinking) hay vẫn cần đảm bảo Junior có kỹ năng "lái xe" (coding) vững chắc?
2. **Tài liệu và Môi trường:**
    * Dự án cần có thêm những loại tài liệu, hướng dẫn, hoặc "sân chơi" (sandbox) nào để Junior có thể thực hành vai trò Navigator mà không ảnh hưởng đến sản phẩm chính?
3. **Định hướng dài hạn:**
    * Nhìn xa hơn, để chuẩn bị cho một thế hệ lập trình viên sẵn sàng với ADD, các chương trình đào tạo (tại trường đại học, trung tâm bootcamp) cần thay đổi phương pháp giảng dạy như thế nào? Trọng tâm nên là thuật toán và cấu trúc dữ liệu, hay là tư duy hệ thống và kỹ năng đặt câu hỏi (prompt engineering)?

### 1.2. Đối với Lập trình viên Senior

* Giá trị và sự tự hào của nhiều senior dev đến từ việc viết code một cách hiệu quả và thanh lịch. Khi chuyển sang vai trò "Navigator", cảm giác về giá trị và sự hài lòng trong công việc của họ có thể bị ảnh hưởng như thế nào?

* Điều gì sẽ xảy ra khi "trực giác" của một senior trong lúc code mâu thuẫn với kế hoạch đã được AI đề xuất và phê duyệt trước đó?

#### Thảo luận và Hướng giải quyết

**Một góc nhìn khác:** Có phải chúng ta đang nhìn nhận "giá trị" của Senior một cách quá hạn hẹp, chỉ bó buộc vào việc "viết code" không? Và có phải nỗi lo về "code rác" từ AI chỉ là một phiên bản mới của một vấn đề cũ mà chúng ta đã luôn đối mặt? Thay vì là một mối đe dọa, liệu đây có phải là cơ hội để định nghĩa lại vai trò của Senior ở một tầm cao hơn: người kiến tạo hệ thống và người bảo chứng chất lượng cuối cùng không?

**Tổng hợp quan điểm:** Chúng ta đồng ý rằng giá trị của một lập trình viên Senior vượt xa việc viết code. Sự thay đổi này thực chất là một cơ hội để họ phát huy những năng lực chiến lược hơn. Tuy nhiên, cần thẳng thắn nhìn nhận rằng lượng "code rác" do AI tạo ra có thể lớn và tinh vi hơn, đòi hỏi một cấp độ giám sát mới. Do đó, vai trò của Senior không mất đi mà được nâng tầm: họ trở thành **người bảo chứng chất lượng cuối cùng** và là **kiến trúc sư trưởng** của hệ thống, người không chỉ xây dựng mà còn thiết lập các cơ chế để đảm bảo chất lượng ở quy mô lớn.

Điều này dẫn đến các câu hỏi đào sâu hơn:

1. **Làm thế nào để tạo động lực cho vai trò mới này?**
    * Thay đổi thước đo về "Sự công nhận": Ghi nhận những quyết định kiến trúc giúp tiết kiệm hàng trăm giờ làm việc, thay vì chỉ ghi nhận những dòng code hoàn hảo.
    * Khơi gợi "Sự sáng tạo": Biến việc "đấu trí" với AI để tạo ra giải pháp tối ưu thành một thử thách trí tuệ mới.
    * Nhấn mạnh "Tầm ảnh hưởng": Giúp họ thấy rằng bằng cách thiết lập `rule` tốt, họ có thể nâng cao chất lượng của cả đội ngũ.

2. **Làm thế nào để quản lý chất lượng code do AI sinh ra một cách hiệu quả?**
    * Thay vì bị động review, Senior cần chủ động ngăn chặn code kém chất lượng bằng cách nâng cao kỹ năng "định hướng" (prompt, TDD, thiết kế) để AI tạo ra kết quả tốt hơn ngay từ đầu.

3. **Chúng ta đo lường "hiệu suất" của một "người bảo chứng chất lượng" như thế nào?**
    * Hiệu suất không còn là tốc độ code, mà là các chỉ số về sức khỏe của dự án: số lượng bug giảm, tốc độ tích hợp nhanh hơn, và hệ thống ổn định hơn.

### 1.3. Về vai trò của Dev-lead

* Trong `Cyberk AI Process`, vai trò của Dev-lead là cực kỳ quan trọng: thiết lập toàn bộ workspace, định ra các quy tắc, xây dựng ví dụ. Điều này có tạo ra một "nút cổ chai" (bottleneck) hay một điểm rủi ro duy nhất (single point of failure) không?

* Quy trình nào để các thành viên khác có thể thách thức hoặc cải tiến các quy tắc ban đầu do Dev-lead đặt ra?

#### Thảo luận và Hướng giải quyết

**Một góc nhìn khác:** Liệu việc tập trung quyền lực thiết lập ban đầu vào tay Dev-lead có phải là một điều xấu không? Hay đó chính là một **"tính năng", không phải là một "lỗi"**? Trong giai đoạn đầu, việc có một tầm nhìn kiến trúc nhất quán có thể là yếu tố quyết định thành công, tránh sự hỗn loạn.

**Tổng hợp quan điểm:** Việc tập trung này là một "tính năng" cần thiết. Vai trò của Dev-lead được nâng tầm thành một **"Principal Developer"**, người chịu trách nhiệm "thiết lập góc bắn" ban đầu cho cả dự án. Như hình ảnh "mũi tên lệch một độ", sai sót ở giai đoạn này có thể dẫn đến sai lệch lớn về sau. Do đó, sự nhất quán và kinh nghiệm của người thiết lập ban đầu là quan trọng nhất.

Vấn đề không nằm ở việc tập trung quyền lực, mà là làm thế nào để quản lý nó một cách hiệu quả. Điều này dẫn đến các câu hỏi đào sâu hơn:

1. **Về Năng lực của "Principal Developer":** Ngoài kinh nghiệm kỹ thuật, để "thiết lập góc phóng" cho AI một cách chính xác, người này cần thêm những kỹ năng đặc biệt nào?
    * *Khả năng trừu tượng hóa:* Để biến yêu cầu nghiệp vụ thành `rule` cho AI?
    * *Khả năng tiên lượng:* Để dự đoán các vấn đề tiềm ẩn từ các `rule` được đặt ra?
    * *Kỹ năng "sư phạm":* Để "dạy" và "huấn luyện" AI một cách hiệu quả thông qua các `rule` và `example`?

2. **Về Quy trình Tinh chỉnh:** Một quy trình cụ thể để team có thể tinh chỉnh các `rule` một cách nhất quán trông như thế nào?
    * Liệu chúng ta có nên áp dụng cơ chế "Pull Request" cho chính các file `rules` của dự án không?
    * Ai sẽ là người có quyền "approve" những thay đổi quan trọng này? Có cần một "hội đồng kiến trúc" nhỏ không?

3. **Về việc Giảm thiểu Rủi ro:** Làm thế nào để chuyển giao vai trò "người giữ góc bắn" này nếu họ rời dự án?
    * Liệu việc "viết tài liệu hoá về các rules" có thực sự đủ?
    * Làm thế nào để người kế nhiệm hiểu được **"tại sao" (the 'why')** đằng sau mỗi quyết định, chứ không chỉ là **"cái gì" (the 'what')**? Có cần ghi lại các "biên bản quyết định kiến trúc" (Architecture Decision Records - ADRs) cho các `rule` quan trọng không?

## 2. Về Quy trình và Hiệu suất

* Đối với một tính năng đơn giản, liệu quy trình tỉ mỉ này có thực sự chậm hơn việc một lập trình viên kinh nghiệm tự mình thực hiện không?
* Chúng ta làm thế nào để xác định được đâu là ngưỡng phức tạp để một tác vụ cần đi theo toàn bộ quy trình này?
* Làm thế nào để quy trình này tạo ra một vòng lặp phản hồi hiệu quả từ "người lái xe" (AI) ngược trở lại "người dẫn đường" (Developer)?

#### Thảo luận và Hướng giải quyết

**Một góc nhìn khác:** Phải chăng việc so sánh tốc độ hoàn thành một tác vụ **đơn lẻ** là một cách đo lường sai lầm? Liệu mục tiêu thực sự của quy trình ADD không phải là tối ưu hóa cho từng task riêng lẻ, mà là tối ưu hóa cho **sức khỏe và tốc độ dài hạn** của toàn bộ dự án? Một tính năng làm nhanh nhưng tạo ra "nợ kỹ thuật" thì không thể coi là hiệu quả.

**Tổng hợp quan điểm:** Cách đo lường hiệu suất phải tập trung vào **năng lực tổng thể và sự bền vững của dự án**, thay vì tốc độ của từng task. Sức mạnh cốt lõi của ADD là khả năng tự động hóa các quy trình giám sát lặp đi lặp lại.

Theo đó, vai trò của Navigator được làm rõ hơn: **Định nghĩa và Giám sát.** Nhiệm vụ của họ không chỉ là định hướng cho AI viết code, mà còn là định hướng cho AI thực thi các quy trình giám sát tự động, ví dụ:

* **Tự động Audit chất lượng source code:** Kiểm tra sự tuân thủ coding conventions, phát hiện các anti-pattern.
* **Tự động Giám sát kiến trúc:** Đảm bảo code mới không vi phạm các quy tắc kiến trúc đã đề ra.
* **Tự động Validate chất lượng test-case:** Kiểm tra độ bao phủ (coverage), phát hiện các bài test vô nghĩa hoặc trùng lặp.

AI sẽ trở thành một "hệ thống miễn dịch" tự động, liên tục cung cấp phản hồi nhanh cho Navigator, giúp họ đưa ra quyết định chính xác hơn và nâng cao năng lực tổng thể của cả đội.

Điều này dẫn đến các câu hỏi đào sâu hơn về việc xây dựng "hệ thống miễn dịch" này:

1. **Ai là người xây dựng "hệ thống miễn dịch"?** Việc thiết kế và xây dựng các quy trình audit tự động này có phải là một phần trách nhiệm của Principal Developer, hay nó đòi hỏi một vai trò chuyên biệt hơn?

    **Một góc nhìn khác:** Nếu chúng ta giao cả việc "thiết lập góc bắn" ban đầu và việc "xây dựng hệ thống miễn dịch" cho cùng một người (Principal Developer), liệu chúng ta có đang tạo ra một "vị thần" trong dự án không? Một người có quá nhiều quyền lực và trách nhiệm sẽ làm tăng rủi ro "nút cổ chai".

    **Tổng hợp quan điểm:** Cần một người lãnh đạo có kinh nghiệm (Principal Developer) để đảm bảo sự **nhất quán về nguyên tắc và ý tưởng**. Các nguyên tắc này phải đủ vững chắc để định hướng cho team ngay cả khi người đó rời dự án. Tuy nhiên, để tránh tình trạng "độc tài", quy trình xây dựng các `rule` cần có sự tham gia của cả đội.

    Mô hình phù hợp là **"Lãnh đạo Tập trung, Đóng góp Phân tán"**:
    * **Cơ chế Đề xuất - Phê duyệt:** Mọi thành viên trong team đều có quyền đề xuất các `rule` mới hoặc các cải tiến cho `rule` hiện có (ví dụ, thông qua Pull Request). Principal Developer sẽ là người xem xét và phê duyệt cuối cùng để đảm bảo sự nhất quán.
    * **Cơ chế Phổ biến và Đồng bộ:** Tổ chức các buổi seminar hoặc workshop định kỳ để Principal Developer diễn giải về các `rule` mới, giải thích "tại sao" đằng sau chúng. Điều này giúp cả team hiểu rõ, đồng thuận và xem các `rule` là một phần không thể thiếu của quy trình làm việc.

2. **Chi phí và Lợi ích:** Việc xây dựng các hệ thống giám sát này đòi hỏi sự đầu tư ban đầu không nhỏ. Làm thế nào để một đội nhóm có thể đo lường và chứng minh được lợi ích dài hạn (giảm bug, giảm nợ kỹ thuật) so với chi phí bỏ ra ban đầu?

## 3. Về Giới hạn của AI và Đảm bảo Chất lượng

* Quy trình dựa vào việc AI có khả năng tạo ra "kế hoạch thực thi chi tiết" và "các test case". Với trình độ của AI hiện tại, nó có thể tạo ra những kế hoạch trông có vẻ hợp lý nhưng lại có những lỗ hổng tinh vi về logic hoặc bảo mật. Người "Navigator" cần có trình độ chuyên môn sâu đến mức nào để có thể thẩm định hiệu quả kế hoạch của AI?
* Liệu vai trò Navigator có khi nào đòi hỏi kỹ năng còn cao hơn cả một senior developer truyền thống không?
* TDD được xem là "lan can bảo vệ", nhưng ai sẽ là người viết ra những bài test mang tính định hướng đó? Nếu AI đề xuất, làm sao chúng ta đảm bảo AI không đề xuất những bài test chỉ để "vừa vặn" với đoạn code có thể có lỗi của chính nó?

#### Thảo luận và Hướng giải quyết

**Một góc nhìn khác:** Chúng ta có đang rơi vào vòng lặp triết học "ai canh gác người canh gác" không? Nếu AI viết cả code và test, làm sao đảm bảo chất lượng?

**Tổng hợp quan điểm:** Đây không phải là một vòng lặp luẩn quẩn, vì **trách nhiệm cuối cùng luôn thuộc về Navigator.** Vai trò của Navigator trong việc đảm bảo chất lượng thông qua test được thực hiện theo quy trình "Định nghĩa - Giám sát" rõ ràng:

1. **Navigator (Định nghĩa):** Đưa ra các **nguyên tắc** hoặc kịch bản kiểm thử ở dạng có ý nghĩa nghiệp vụ (ví dụ: "Không cho phép login nếu sai mật khẩu"). Đây là nguồn chân lý (source of truth).
2. **AI (Thực thi):** Dựa trên các nguyên tắc đó, AI sẽ sinh ra mã nguồn chi tiết cho các bài test tự động (unit test, integration test).
3. **Navigator (Giám sát):** Review và chịu trách nhiệm cho chất lượng cuối cùng của bộ test do AI tạo ra, đảm bảo nó đúng và đủ so với ý định ban đầu.

TDD trong mô hình này không chỉ là "lan can bảo vệ" mà còn là công cụ giúp hạn chế "code rác", vì Navigator sẽ phải đầu tư công sức giám sát tương ứng với lượng code được tạo ra. Cách tiếp cận "phòng thủ nhiều lớp" (review cặp, test tích hợp, hệ thống audit tự động) sẽ là những lớp bảo vệ bổ sung, nhưng trách nhiệm cốt lõi vẫn không thay đổi.

Điều này dẫn đến các câu hỏi đào sâu hơn về kỹ năng và công cụ của Navigator:

1. **Ngôn ngữ của "Ý định":** Navigator truyền đạt "nguyên tắc" cho AI bằng cách nào? Bằng ngôn ngữ tự nhiên trong comment? Bằng một định dạng cấu trúc như Gherkin (Given-When-Then)? Làm thế nào để đảm bảo AI hiểu đúng ý định?
2. **Làm sao để đảm bảo Test "Đủ Tốt"?** AI có thể tạo ra một bài test đúng nhưng lại quá đơn giản (ví dụ: chỉ thử một mật khẩu sai). Navigator cần có kỹ năng và quy trình gì để đảm bảo các trường hợp biên (edge cases) được bao phủ mà không cần phải tự mình viết toàn bộ?
3. **Kỹ năng cốt lõi:** Điều này có nghĩa là kỹ năng quan trọng nhất của một Navigator là khả năng tư duy theo kịch bản, theo hành vi của hệ thống (Behavior-Driven thinking). Đây có phải là kỹ năng cần được đào tạo một cách đặc biệt không?

## 4. Về Văn hóa và Sự Đổi mới

* `AI-Driven Development` đặt mục tiêu giảm tải nhận thức (Cognitive Load) cho lập trình viên. Nhưng việc liên tục phải xem xét, đánh giá và định hướng cho AI có tạo ra một loại tải nhận thức mới – "gánh nặng quản lý" không?

#### Thảo luận và Hướng giải quyết

**Một góc nhìn khác:** Liệu "gánh nặng quản lý" này có thực sự là một điều tiêu cực không? Hay nó chỉ là sự **chuyển dịch về bản chất** của gánh nặng mà một lập trình viên giỏi luôn phải gánh?

* **Gánh nặng cũ:** Liên quan đến trí nhớ và sự tỉ mỉ vi mô (nhớ cú pháp, debug lỗi nhỏ).
* **Gánh nặng mới:** Liên quan đến tư duy hệ thống và ra quyết định chiến lược (chọn kiến trúc, đánh giá rủi ro, diễn đạt yêu cầu).

**Tổng hợp quan điểm:** Đây là một sự chuyển dịch tích cực. ADD không loại bỏ gánh nặng, mà nó giúp chúng ta **đổi một gánh nặng có giá trị thấp để lấy một gánh nặng có giá trị cao hơn.**
Khi được giải phóng khỏi các công việc chất lượng thấp, các lập trình viên giỏi sẽ học nhanh hơn và trở nên xuất sắc hơn nữa. Năng suất của một lập trình viên giỏi với AI sẽ gấp nhiều lần (10x, 100x) so với người không thể thích nghi.
Giống như khi máy móc thay thế công việc chân tay, con người có thêm thời gian để theo đuổi những đỉnh cao hơn và tạo ra sản phẩm tốt hơn. Lập trình sẽ ngày càng dành cho một nhóm tinh hoa hơn, những người có phẩm chất phù hợp để làm công việc sáng tạo và ra quyết định bậc cao.

* Câu hỏi cuối cùng trong tài liệu `ai-driven-development.md` rất sâu sắc: "Bạn đã sẵn sàng cho sự thay đổi này chưa?". Theo bạn, đâu là rào cản lớn nhất về mặt **tâm lý** để một đội nhóm có thể thực sự đón nhận phương pháp này một cách trọn vẹn, thay vì chỉ xem AI như một công cụ hỗ trợ code thông thường?

#### Thảo luận và Hướng giải quyết

**Một góc nhìn khác:** Phải chăng rào cản tâm lý lớn nhất không phải là **"nỗi sợ bị thay thế"**, mà là **"nỗi sợ phải từ bỏ bản sắc"**?

**Tổng hợp quan điểm:** Rào cản lớn nhất là **"khủng hoảng bản sắc"**. Giống như một người chạy bộ quen với cảm giác khoan khoái mỗi sáng phải chuyển sang đi ô tô, lập trình viên phải từ bỏ một bản sắc mà họ đã làm rất tốt và rất tự hào. Khi cả thế giới thay đổi, sự dịch chuyển này là tất yếu. Giải pháp không phải là níu kéo cái cũ, mà là xây dựng một bản sắc mới đủ hấp dẫn và ý nghĩa.

**Ba trụ cột cho bản sắc mới của Navigator (Cụ thể hóa):**

1. **Người Kiến tạo Hệ thống (The System Architect):**
    * **Hành động cụ thể:** Thay vì viết 50 dòng code để tối ưu một hàm, họ dành thời gian đó để viết ra 5 dòng `rule` trong file cấu hình. `Rule` này sẽ tự động phân tích và buộc tất cả các hàm tương tự trong tương lai phải được viết một cách tối ưu.
    * **Niềm tự hào mới:** Niềm tự hào không còn nằm ở một Pull Request (PR) có 500 dòng code xanh mướt, mà là một PR chỉ có 3 dòng thay đổi về cấu hình nhưng nó đã giúp hệ thống tự động "tóm" được một lỗi kiến trúc nghiêm trọng. **Họ tự hào khi hệ thống họ xây dựng ngăn chặn được sai lầm cho người khác.**

2. **Người Nhân bản Tri thức (The Knowledge Multiplier):**
    * **Hành động cụ thể:** Khi một Junior gặp khó, thay vì sửa code trực tiếp, họ tạo ra một `code example` (ví dụ điển hình) hoàn chỉnh, ghi lại "tại sao" đằng sau các quyết định thiết kế, và đóng góp nó vào **"kho tri thức" (liên quan đến mô hình SECI)** chung của dự án để cả AI và các thành viên khác cùng học.
    * **Niềm tự hào mới:** Niềm tự hào không phải là "tôi đã sửa xong bug đó", mà là "Junior đó đã tự mình giải quyết được một vấn đề phức tạp nhờ vào bộ `rule` và `example` mà tôi đã tạo ra." **Họ tự hào về sự thành công của người khác, được kích hoạt bởi hệ thống họ xây dựng.**

3. **Nhà Thám hiểm Công nghệ (The Frontier Explorer):**
    * **Hành động cụ thể:** Họ dành thời gian để thử nghiệm các kỹ thuật `prompt` mới, tìm cách "dạy" cho AI giải quyết những bài toán mà trước đây ai cũng nghĩ là "chỉ con người làm được" - ví dụ như tái cấu trúc (refactor) một module phức tạp.
    * **Niềm tự hào mới:** Niềm tự hào không phải là hoàn thành một task, mà là khi họ tìm ra một "công thức" prompt mới giúp giảm thời gian tạo một tính năng từ 2 giờ xuống còn 15 phút, và họ chia sẻ "công thức" đó cho cả team. **Họ tự hào về việc khám phá và nhân rộng tri thức.**
