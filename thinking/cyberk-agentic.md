---
title: "Chiến lược Agentic AI — Cyberk"
type: dialogue
tags: [agentic-ai, cyberk, strategy, agent-engineering, slm, hybrid-ai, multi-agent]
alias: [cyberk-agentic, agentic-ai-cyberk]
---

# Đối thoại Chiến lược Agentic AI - Cyberk

> "Tự biết mình là khởi đầu của mọi sự khôn ngoan." - Socrates

---

**Socrates:** Chào bạn. Để vẽ nên bức tranh tổng thể cho Agentic AI, ta cần hiểu rõ chất liệu của "tấm toan" mà ta đang vẽ lên. Bạn nói Cyberk là một công ty phần mềm, nhưng đó mới chỉ là lớp vỏ.
Nếu ta tước bỏ đi công việc "viết code" đơn thuần, thì giá trị thực sự (Core Value) mà Cyberk trao cho khách hàng là gì? Đâu là "thanh gươm" (Unfair Advantage) sắc bén nhất của Cyberk?

**Anderson:** Tôi nghĩ rằng đầu tiên ngành phần mềm sẽ dịch chuyển, nếu như trước đây lập trình viên phải viết code để tạo ra phần mềm. Tương lai thì họ sẽ không viết code, mà sử dụng AI để tạo ra các AI agent, các agent này sẽ làm việc với nhau để tạo ra hiệu quả cho khách hàng. Vì vậy dịch vụ sẽ chuyển dịch từ việc làm phần mềm thành làm Agent. *(Đây là bước tiến hoá từ mô hình [[solodev-way|Solo Dev]] — nơi một người điều phối AI — sang tầm tổ chức.)*

**Socrates:** Bạn đã nhìn thấy một sự thay đổi mang tính thời đại. Nếu ví phần mềm cũ là những công cụ tĩnh, thì Agentic AI chính là những nhân công số.
Bạn nói rằng tương lai, nhân viên của Cyberk sẽ dùng AI để tạo ra các AI Agent. Nếu vậy, "code" (mã nguồn) đã trở thành một thứ hàng hóa phổ thông (commodity).
Vậy thì, hỡi người dẫn đường của Cyberk, **cái gì mới thực sự là "vàng ròng" mà nhân viên của bạn phải rèn luyện?**
Để tạo ra một Agent bán hàng xuất sắc, AI cần gì từ con người? Nếu đối thủ của bạn cũng dùng cùng một con AI (ví dụ GPT-4o), tại sao khách hàng lại chọn Agent của Cyberk?

**Anderson:** Tôi nghĩ Cyberk khó lòng đạt được, Chúng ta xuất thân từ ngành dịch vụ phần mềm, hiểu rõ nghiệp vụ sẽ không phải là thế mạnh. thế mạnh của chúng ta sẽ là tạo ra phần mềm -> tạo ra Agent hiệu quả hơn khách hàng.

**Socrates:** Bạn rất trung thực. Nếu Cyberk không bán "kiến thức nghiệp vụ", mà bán "năng lực chế tác", thì chúng ta đang nói về **Agent Engineering**.
Nhưng "hiệu quả" là một từ rất mơ hồ. Để biến nó thành tiền, ta phải chẻ nhỏ nó ra.
**Nếu cùng một mô hình AI (ví dụ GPT-4), tại sao Agent do Cyberk tạo ra lại "khôn" hơn hoặc "nhanh" hơn Agent do khách hàng tự mày mò?** Khách hàng sợ nhất điều gì khi dùng AI Agent mà Cyberk có thể giải quyết được?

**Anderson:** Chatgpt hay các mô hình không có dữ liệu của công ty khách hàng. chúng về cơ bản là "biết mọi việc" nhưng lại không đủ tốt để làm được 1 việc. Điều này mở ra cơ hội để chúng ta xây dựng "agentic" cho họ. nơi mà sẽ giúp các LLM hoặc SLM tương tác được với thế giới thực. *(Đây chính là vấn đề mà [[context-engineering]] giải quyết — cung cấp bối cảnh riêng để AI làm tốt MỘT việc cụ thể.)*

**Socrates:** Bạn đã đưa ra một nhận định đắt giá: *"Biết mọi việc nhưng không làm được một việc"*. Đây chính là khoảng trống thị trường.
Bạn đã chia nhỏ dịch vụ Agentic thành 3 tầng:

1. **Skills development:** phát triển kỹ năng cho AI (quản lý dự án, CSKH...)
2. **Tools development:** phát triển công cụ cho AI (thanh toán, truy cập location, tính toán...)
3. **Agent hook:** connect AI với các kênh giao tiếp (Telegram, Discord...)

Trong 3 tầng dịch vụ trên (Skills, Tools, Hooks), **cái nào Cyberk sẽ đóng gói thành "Sản phẩm dùng chung" (Product) và cái nào phải làm riêng cho từng khách hàng (Custom Service)?**
Làm thế nào để Cyberk **tích lũy** kinh nghiệm sau mỗi dự án? Nếu làm xong một Agent cho khách hàng A, chúng ta giữ lại được gì làm "vốn" cho khách hàng B?

**Anderson:**

1. **Cập nhật công nghệ:** Trước tiên Cyberk cần cập nhật kiến trúc hệ thống, công cụ, opensource, trending để tạo ra năng suất vượt trội.
2. **Template hóa (Assets):** Xây dựng các "template" agent có sẵn kỹ năng mặc định (đọc hiểu, nghiên cứu, phân tích) để giảm thời gian phát triển và triển khai cho khách hàng sau.
3. **Làm chủ SLM (Small Language Models):** Tập trung vào SLM opensource, hiểu biết vượt trội để tinh chỉnh chúng hoạt động hiệu quả (về chi phí và hiệu năng) thay vì chỉ phụ thuộc vào các model khổng lồ tốn kém.

**Socrates:** Bạn đã chạm đến một điểm chiến lược cực kỳ quan trọng: **Small Language Models (SLM)**. Đây có thể là vũ khí bí mật giúp Cyberk đánh bại các đối thủ chỉ biết dùng API của OpenAI.

Việc làm chủ SLM mở ra hai con đường chiến lược khác nhau. Bạn sẽ chọn con đường nào làm mũi nhọn?

1. **Con đường Chi phí (Cost Efficiency):** "Cyberk giúp bạn chạy Agent với chi phí $10/tháng thay vì $100/tháng nếu dùng GPT-4." (Nhắm vào khách hàng SME, Startups nhạy cảm về giá).
2. **Con đường Riêng tư (Privacy/On-premise):** "Cyberk giúp bạn chạy Agent ngay trên máy chủ nội bộ của công ty, dữ liệu không bao giờ lọt ra ngoài." (Nhắm vào khách hàng Doanh nghiệp lớn, Ngân hàng, Chính phủ).

Và với các **"Template Agent"** (Nghiên cứu, Phân tích...), bạn định bán chúng như thế nào?

**Anderson:** Tôi nghĩ chi phí thấp và bảo mật không mâu thuẫn. Thay vì sử dụng API OpenAI tốn kém, trong bối cảnh hẹp của doanh nghiệp, các SLM dư sức thoả mãn, trong khi thông tin hoàn toàn không cần chảy ra ngoài. Với các tư duy phức tạp cần sử dụng LLM, ta vẫn có thể cân nhắc các API call là xong.

**Socrates:** Một tư duy rất thực tế và linh hoạt (Pragmatic & Flexible). Bạn không chọn cực đoan, mà chọn sự tối ưu: **Hybrid AI Architecture** (Kết hợp SLM nội bộ cho tác vụ thường xuyên/bảo mật + LLM API cho tác vụ phức tạp).

Nhưng để hiện thực hóa tầm nhìn này, chúng ta phải đối mặt với một thách thức lớn hơn cả công nghệ: **Con người**.

Bạn có nghĩ việc dịch chuyển Cyberk sang "Native AI" (nơi mọi nhân sự đều tư duy và làm việc bằng AI) là khó khăn không?

Hãy cùng tư duy về những rào cản vô hình:

1. **Rào cản Kỹ năng:** Lập trình viên hiện tại của bạn quen tư duy *Deterministic* (Input A -> Output B chắc chắn). Nhưng AI là *Probabilistic* (Input A -> Output B có thể thay đổi). Làm sao để biến một người thợ code logic thành một người huấn luyện AI biết chấp nhận sai số?
2. **Rào cản Kinh doanh:** Trong giai đoạn chuyển giao, doanh thu vẫn đến từ các dự án Outsourcing truyền thống. Làm sao bạn phân bổ nguồn lực để vừa "nuôi cơm" hiện tại, vừa "xây nhà" tương lai mà không làm gãy đổ dòng tiền?

**Anderson:**

1. **Về con người:** Đầu tiên phải có bộ phận tiên phong xây dựng các Orchestras (dàn giao hưởng) Agent. Từ đó tích luỹ kinh nghiệm để xây dựng chúng. Sau đó hướng dẫn từng người trong công ty kỹ năng này. *(Ẩn dụ "nhạc trưởng" này cũng xuất hiện trong [[solodev-way#Nhạc trưởng, không phải nhạc công|Solo Dev Way]].)*
2. **Về kinh doanh:** Các dự án đang chạy cứ để chúng chạy. Các dự án mới chuyển dịch ngay sang mô hình Native AI. Học đi đôi với Hành.

**Socrates:** Một chiến lược chuyển đổi rất quyết liệt: **"Cuốn chiếu" (Rolling Strategy)**. Không đập bỏ cái cũ, nhưng cái mới phải làm theo cách mới 100%.

Nhưng hãy quay lại vấn đề cốt lõi về **"ADN Cyberk"**.
Bạn nói nhân viên phải tuân thủ "triết lý và phương pháp của Cyberk" khi dùng AI.
Nếu AI học từ internet thì rất "thập cẩm".

**Vậy làm thế nào để bạn "tiêm" (inject) cái ADN Cyberk (chuẩn mực, quy trình riêng) vào trong các con AI này?**
Để khi một nhân viên mới vào, họ chỉ cần dùng AI của công ty là tự động code đúng chuẩn Cyberk mà không cần training 3 tháng?

Và cái "Workspace" mà bạn nhắc đến, nó là một môi trường như thế nào? (Là một IDE đặc biệt hay một nền tảng quản lý quy trình?).

**Anderson:**

1. **Phương pháp Cyberk:** Tài liệu hoá quy trình, quay video hướng dẫn...
2. **Agent Mentor:** Thay vì đào tạo truyền thống, ta sẽ có 1 Agent hướng dẫn member làm quen với quy trình, giúp member làm chủ kỹ năng mới dựa trên thông tin và quy trình đã có sẵn.

**Socrates:** Bạn đã có một ý tưởng tuyệt vời: **Agent Mentor (Người hướng dẫn ảo)**. Thay vì senior kèm junior, Agent sẽ làm việc đó.
Nhưng hãy đi sâu hơn vào việc **thực thi**.
Khi nhân viên (hoặc Agent) bắt tay vào viết code thật sự, làm sao để đảm bảo dòng code sinh ra tuân thủ đúng chuẩn Cyberk mà không cần con người phải review thủ công từng tí một?
(Bạn có định xây dựng một bộ **"Validator Agent"** (Cảnh sát quy trình) để tự động kiểm tra và từ chối các sản phẩm không đạt chuẩn không?)

Và cái **Workspace** mà bạn hình dung, nó có phải là nơi con người và Agent cùng nhìn vào một màn hình, cùng sửa một file (như chúng ta đang làm trên Cursor này) không?

**Anderson:** Tôi nghĩ phải có "cảnh sát quy trình", vậy là ta sẽ cần:

1. **Mentor Agent:** Hướng dẫn, đào tạo.
2. **Process QA Agent:** Kiểm tra, giám sát tuân thủ.
Đội ngũ Cyberk tập trung vào việc **thiết kế các Agent và Process** này để các member khác tuân thủ.

**Socrates:** Bạn đã vẽ ra một mô hình tổ chức rất thú vị: **Cyberk Core Team** (Thiết kế hệ thống) -> **Agents** (Mentor + QA) -> **Members** (Thực thi).
Điều này biến Cyberk thành một "nhà máy phần mềm" với dây chuyền tự động hóa cao.

**Câu hỏi:**

1. Trong mô hình này, vai trò của **Member (Con người)** sẽ thay đổi như thế nào? Họ là người "thợ lắp ráp" (làm theo chỉ dẫn của Agent) hay là người "giám sát" (bấm nút cho Agent chạy và kiểm tra kết quả)?
2. Nếu đội ngũ Core Team tập trung thiết kế Process/Agent, thì làm sao đảm bảo những Process này không bị **lỗi thời** (cứng nhắc) so với thực tế biến đổi liên tục của các dự án? *(Liên quan: [[context-engineering#Context sống, không phải context chết|Context sống, không phải context chết]].)*

---

## Liên kết kiến thức

- [[solodev-way]] — Phương pháp Solo Dev — mô hình ở tầng cá nhân mà Agentic AI mở rộng ra tầm tổ chức
- [[solo-dev]] — Đối thoại gốc — nơi ý tưởng "AI là nhiều thực thể" (multi-agent) lần đầu xuất hiện
- [[context-engineering]] — Kỹ năng cốt lõi — cầu nối giữa "AI biết mọi thứ" và "Agent làm tốt một việc"

### Chuỗi tiến hoá

```
  Lập trình viên viết code
          │
          ▼
  [[solodev-way|Solo Dev]] điều phối AI      ← Tầng cá nhân
          │
          ▼
  [[cyberk-agentic|Agent Engineering]]       ← Tầng tổ chức
  (Mentor Agent + QA Agent + Template)
          │
          ▼
  Hybrid AI Architecture                     ← Tầng hạ tầng
  (SLM nội bộ + LLM API)
```

### Khái niệm giao nhau

| Khái niệm ở đây | Tương ứng trong Solo Dev |
|---|---|
| "Code thành commodity" | [[solodev-way#2. AI đã thay đổi cuộc chơi như thế nào\|Bottleneck không còn là code]] |
| Agent Mentor | [[solodev-way#7. Cơ chế kiểm soát chất lượng\|Hai tầng kiểm soát]] |
| Inject ADN Cyberk | [[context-engineering#3. Context quy tắc (Rules Context)\|Rules Context]] |
| Rolling Strategy | [[solodev-way#9. Giới hạn và phạm vi áp dụng\|Phạm vi áp dụng tại Cyberk]] |
