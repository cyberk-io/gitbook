---
description: "Hướng dẫn chi tiết cho developer về cách viết nhật ký phát triển tính năng (Functional Diary) theo tiêu chuẩn Horenso và tích hợp AI"
icon: "diary"
---

# Hướng dẫn viết Nhật ký Phát triển Tính năng (Functional Diary)

{% hint style="info" %}
**Functional Diary** là công cụ quan trọng để theo dõi quá trình phát triển từng tính năng, ghi lại những việc đã làm, vấn đề gặp phải và bài học rút ra.
{% endhint %}

## 🎯 **Tại sao cần viết Nhật ký Phát triển?**

### **Vấn đề thực tế trong phát triển phần mềm**

Khi làm việc trong các dự án phức tạp, developer thường gặp những thách thức:

- **Mất dấu vết:** Không nhớ đã làm gì, gặp vấn đề gì trong quá trình phát triển
- **Khó báo cáo:** Không biết cách báo cáo tiến độ một cách có hệ thống
- **Thiếu context:** Khi quay lại code sau thời gian dài, không hiểu tại sao lại có những quyết định kỹ thuật đó
- **Khó debug:** Khi có bug, không biết từ đâu mà ra, khi nào xuất hiện
- **Thiếu học hỏi:** Không rút ra được bài học từ những lần làm trước

### **Giải pháp: Functional Diary**

Nhật ký phát triển tính năng giúp:

- **📝 Lưu trữ dấu vết:** Ghi lại từng bước phát triển, quyết định kỹ thuật
- **📊 Theo dõi tiến độ:** Đo lường hiệu suất và thời gian làm việc
- **🤖 Tối ưu AI:** AI có thể hiểu context và hỗ trợ tốt hơn
- **🔄 Cải tiến liên tục:** Rút ra bài học và cải thiện quy trình
- **👥 Chia sẻ kiến thức:** Team có thể học hỏi từ kinh nghiệm của nhau

## 🏗️ **Cấu trúc Functional Diary**

### **Ba phần chính của nhật ký:**

Functional Diary được tổ chức theo 3 phần chính, đơn giản và thực tế:

1. **📋 Các việc đã làm:** Ghi lại những gì đã hoàn thành và đang làm
2. **🚨 Các vấn đề gặp phải và thảo luận:** Ghi lại vấn đề và cách giải quyết
3. **📚 Bài học rút ra:** Tổng kết những gì đã học được

### **Ví dụ cấu trúc:**

#### 📋 **Các việc đã làm**
```markdown
#### 📋 **Các việc đã làm**
**Thời gian:** 09:00 - 17:00
**Tiến độ hôm nay:**
- ✅ Hoàn thành: Tạo component LoginForm, implement validation
- 🔄 Đang làm: Tích hợp với API authentication
- ⏳ Còn lại: Unit test, integration test

**Kết quả cụ thể:**
- Tạo 3 files mới: LoginForm.tsx, validation.ts, types.ts
- Thêm 150 lines code
- Fix 2 bugs trong validation logic
```

#### 🚨 **Các vấn đề gặp phải và thảo luận**
```markdown
#### 🚨 **Các vấn đề gặp phải và thảo luận**
**Vấn đề 1: CORS error khi test locally**
- Mô tả: Gặp CORS error khi gọi API từ localhost
- Giải pháp đã thử: Thêm CORS headers, proxy configuration
- Thảo luận với team: Backend team sẽ cập nhật CORS policy
- Giải pháp cuối cùng: Sử dụng proxy trong development

**Vấn đề 2: Form validation performance**
- Mô tả: Form validation chậm khi có nhiều fields
- Giải pháp đã thử: Debounce, lazy validation
- Thảo luận với team: Quyết định dùng React Hook Form
- Giải pháp cuối cùng: Implement React Hook Form với debounce

**Thông tin chia sẻ với team:**
- API endpoint authentication đã thay đổi
- Cần hỗ trợ từ backend team về rate limiting
- Người được thông báo: Backend team, QA team
```

#### 📚 **Bài học rút ra**
```markdown
#### 📚 **Bài học rút ra**
**Bài học từ ngày 2025-01-15:**
- Luôn test CORS policy khi làm việc với API mới
- React Hook Form hiệu quả hơn Formik cho forms đơn giản
- Nên có error boundary cho authentication flows
```

## 🤖 **Cơ chế AI tự động viết Nhật ký**

### **AI sẽ làm gì?**

{% hint style="success" %}
AI sẽ tự động theo dõi và ghi lại tất cả hoạt động phát triển của bạn!
{% endhint %}

#### **1. Tự động tạo Diary file**
Khi bạn bắt đầu làm việc với một FR mới, AI sẽ:
- Tạo file `diary/FR-XXX.md` theo template chuẩn
- Điền thông tin cơ bản từ PRD
- Thiết lập cấu trúc Horenso

#### **2. Theo dõi AI Interactions**
AI sẽ ghi lại:
- **Prompt bạn sử dụng:** "Tạo component LoginForm với validation"
- **Kết quả AI đưa ra:** Code được generate, files được tạo
- **Đánh giá chất lượng:** Bạn rate kết quả AI (1-5 sao)

#### **3. Track Development Activities**
AI tự động thu thập:
- **Thời gian làm việc:** Dựa trên git commits và file changes
- **Code metrics:** Lines added/removed, files changed
- **Technical decisions:** Architecture choices, library selections

### **Ví dụ AI tự động cập nhật:**

```markdown
#### 🤖 **AI Interactions**
**Prompt sử dụng:**
```
Tạo React component cho login form với validation
- Email validation
- Password validation  
- Error handling
- Loading states
```

**Kết quả AI:**
- Generated LoginForm.tsx với 120 lines code
- Created validation.ts với email/password rules
- Added types.ts cho TypeScript interfaces
- Files created: src/components/LoginForm.tsx, src/utils/validation.ts, src/types/auth.ts

**Đánh giá kết quả AI:**
- [x] Hoàn toàn đúng yêu cầu (5/5)
- [ ] Cần điều chỉnh nhỏ (4/5)
- [ ] Cần sửa đổi nhiều (3/5)
- [ ] Không đúng yêu cầu (2/5)
- [ ] Hoàn toàn sai (1/5)
```

## 📋 **Quy trình làm việc hàng ngày**

### **Buổi sáng (9:00 - 9:15)**
1. **Mở diary file** của FR đang làm
2. **Review tiến độ** từ ngày hôm qua
3. **Lập kế hoạch** cho ngày hôm nay
4. **Cập nhật status** nếu cần

### **Trong ngày**
1. **Làm việc bình thường** với AI assistance
2. **AI tự động track** các hoạt động
3. **Ghi chú nhanh** khi gặp vấn đề quan trọng
4. **Thảo luận** với team khi cần

### **Cuối ngày (16:45 - 17:00)**
1. **Cập nhật diary** với tiến độ hôm nay
2. **Đánh giá AI interactions** (rate 1-5 sao)
3. **Ghi lại vấn đề** và rủi ro
4. **Commit diary** lên repository

## 🚀 **Hướng dẫn thực hành**

### **Bước 1: Bắt đầu FR mới**

Khi được assign một FR từ PRD:

```bash
# AI sẽ tự động tạo diary file
# File location: diary/FR-001.md
```

**Bạn cần làm:**
1. Mở file diary được tạo
2. Điền thông tin cơ bản (deadline, priority)
3. Copy requirements từ PRD vào section "Mục tiêu & Yêu cầu"

### **Bước 2: Làm việc hàng ngày**

**Sử dụng AI bình thường:**
```
User: "Tạo component cho user profile với avatar upload"
AI: [Generates code and updates diary automatically]
```

**AI sẽ tự động:**
- Ghi lại prompt của bạn
- Track files được tạo/sửa
- Cập nhật metrics

### **Bước 3: Cập nhật diary cuối ngày**

**Template cập nhật:**
```markdown
### [2025-01-15] - Ngày làm việc

#### 📋 **Các việc đã làm**
**Thời gian:** 09:00 - 17:00
**Tiến độ hôm nay:**
- ✅ Hoàn thành: [Liệt kê những gì đã làm xong]
- 🔄 Đang làm: [Công việc đang thực hiện]
- ⏳ Còn lại: [Công việc chưa làm]

#### 🚨 **Các vấn đề gặp phải và thảo luận**
**Vấn đề 1:**
- [Mô tả vấn đề gặp phải]
- [Các giải pháp đã thử]
- [Kết quả thảo luận với team]
- [Giải pháp cuối cùng được chọn]

**Thông tin chia sẻ với team:**
- [Thông tin quan trọng cần team biết]

#### 🤖 **AI Interactions**
[AI đã tự động điền phần này]

#### 📚 **Bài học rút ra**
- [Bài học 1: Mô tả bài học và cách áp dụng]
- [Bài học 2: Mô tả bài học và cách áp dụng]
```

### **Bước 4: Commit hàng ngày**

```bash
# Cuối mỗi ngày làm việc
git add diary/FR-001.md
git commit -m "docs: update FR-001 diary - completed user profile component

- Added avatar upload functionality
- Implemented form validation
- Fixed 3 bugs in profile update flow
- AI interactions: 8 prompts, avg rating 4.5/5

-Agent Generated Commit Message"
git push
```

## 📊 **Metrics và Đánh giá**

### **Metrics quan trọng cần theo dõi:**

- **Thời gian làm việc:** Tổng thời gian trên FR
- **Code productivity:** Lines of code per day
- **AI effectiveness:** Số lượng AI interactions và rating trung bình
- **Bug rate:** Số bugs phát hiện và fix
- **Completion rate:** % hoàn thành theo timeline

### **Đánh giá hiệu quả:**

**Tốt:**
- Diary được cập nhật đều đặn hàng ngày
- AI interactions có rating cao (4-5/5)
- Tiến độ đúng timeline
- Ít bugs, ít rework

**Cần cải thiện:**
- Diary thiếu thông tin hoặc không cập nhật
- AI interactions có rating thấp
- Tiến độ chậm, nhiều delays
- Nhiều bugs, phải rework nhiều

## 🎯 **Lợi ích dài hạn**

### **Cho Developer:**
- **Portfolio building:** Có documentation chi tiết về công việc đã làm
- **Skill tracking:** Theo dõi sự tiến bộ kỹ thuật
- **Knowledge retention:** Không quên những gì đã học
- **Career growth:** Có bằng chứng cụ thể về năng lực

### **Cho Team:**
- **Knowledge sharing:** Team có thể học hỏi từ nhau
- **Onboarding:** New member có thể đọc diary để hiểu project
- **Code review:** Reviewer có context đầy đủ
- **Project management:** PM có visibility về tiến độ thực tế

### **Cho Organization:**
- **Process improvement:** Cải thiện quy trình phát triển
- **Quality assurance:** Giảm bugs và technical debt
- **Resource planning:** Ước tính thời gian chính xác hơn
- **AI optimization:** Tối ưu hóa việc sử dụng AI tools

## 🔧 **Troubleshooting**

### **Vấn đề thường gặp và cách giải quyết:**

#### **1. AI không tự động tạo diary?**
- **Kiểm tra workspace của bạn đã có diary rule hay chưa**
- **Nếu chưa có hãy checkout phiên bản mới nhất của workspace**
- Đảm bảo AI agent đã được cấu hình đúng

#### **2. Diary file quá dài và khó quản lý?**
- **Không sao cả, hãy không cần quan tâm tới nó**
- **Nó chỉ là nơi để lưu trữ thông tin**
- **Bạn không cần lo lắng về nó**

#### **3. Không có thời gian cập nhật diary?**
- **AI sẽ làm cho bạn**
- **Việc của bạn chỉ là commit file diary mỗi khi tiến hành cập nhật vào một function nào đó**

#### **4. Diary không có giá trị thực tế?**
- **Nó có giá trị khi ta tiến hành reflection và review quá trình làm dự án để tìm kiếm vấn đề**
- Giúp tìm kiếm vấn đề và cải thiện quy trình
- Là nguồn tài liệu quý giá cho việc học hỏi và phát triển

## 📚 **Tài liệu tham khảo**

- [AI-Driven Development](ai-driven-development.md)
- [Template Functional Diary](../../document/templates/functional-diary-template.md)
- [Functional Diary Agent Rules](../../.cursor/rules/tool-rules/functional-diary-agent.mdc)

---

{% hint style="warning" %}
**Lưu ý:** Functional Diary không phải là thêm việc, mà là cách làm việc thông minh hơn. Ghi lại những gì đã làm, vấn đề gặp phải và bài học rút ra sẽ giúp bạn tiến bộ nhanh hơn!
{% endhint %} 