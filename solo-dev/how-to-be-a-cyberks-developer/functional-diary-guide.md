---
title: "Hướng dẫn viết Nhật ký Phát triển"
type: guide
tags: [onboarding, developer, ai-driven, process]
alias: [functional-diary-guide]
---

# Hướng dẫn viết Nhật ký Phát triển Tính năng (Functional Diary)

> **Functional Diary** là nhật ký mô tả lại quá trình phát triển tính năng, ở đó lưu trữ tất cả thông tin ví dụ như lịch sử, thảo luận, requirement change, Các vấn đề gặp phải.

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

## 🤖 **AI SẼ TỰ ĐỘNG LÀM TẤT CẢ**

> **Bạn KHÔNG cần viết báo cáo! AI sẽ tự động làm điều đó cho bạn.**

### **AI tự động làm gì:**

#### **1. Tự động tạo Diary file**
Khi bạn bắt đầu làm việc với một FR mới, AI sẽ:
- Tạo file `diary/FR-XXX.md` theo template chuẩn
- Điền thông tin cơ bản từ PRD
- Thiết lập cấu trúc 3 phần chính

#### **2. Tự động theo dõi mọi hoạt động**
AI sẽ ghi lại:
- **Prompt bạn sử dụng:** "Tạo component LoginForm với validation"
- **Kết quả AI đưa ra:** Code được generate, files được tạo
- **Thời gian làm việc:** Dựa trên git commits và file changes
- **Code metrics:** Lines added/removed, files changed
- **Technical decisions:** Architecture choices, library selections

#### **3. Tự động cập nhật diary**
AI sẽ tự động:
- Ghi lại tất cả AI interactions
- Track development activities
- Cập nhật metrics và tiến độ
- Điền đầy đủ thông tin vào diary

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

**Đánh giá kết quả AI:** 5/5 - Hoàn toàn đúng yêu cầu
```



## 🚀 **Bạn chỉ cần làm 2 việc**

> **Đơn giản hóa tối đa:** Bạn chỉ cần đảm bảo AI tự động viết diary và commit file.

### **1. Đảm bảo AI tự động viết diary**

**Khi bắt đầu FR mới:**
- AI sẽ tự động tạo file `diary/FR-XXX.md`
- Bạn không cần làm gì thêm

**Khi làm việc hàng ngày:**
- Sử dụng AI bình thường như mọi khi
- AI sẽ tự động ghi lại tất cả hoạt động
- Bạn không cần viết báo cáo thủ công

### **2. Commit diary file**

**Cuối mỗi ngày hoặc khi có thay đổi quan trọng:**
```bash
git add diary/FR-XXX.md
git commit -m "docs: update FR-XXX diary"
git push
```

**Đó là tất cả!** Không cần ghi chép thủ công, không cần báo cáo phức tạp.



## 🎯 **Lợi ích dài hạn**

### **Cho Developer:**
- **Không thêm việc:** AI tự động làm tất cả, bạn chỉ cần commit
- **Portfolio building:** Có documentation chi tiết về công việc đã làm
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

> **Lưu ý:** Functional Diary KHÔNG phải là thêm việc! AI tự động làm tất cả, bạn chỉ cần commit file. Đây là cách làm việc thông minh hơn mà không tốn thêm thời gian.