# 👻 LensGhost - Xóa Metadata Ảnh AI & Khôi Phục Thông Số Máy Chống Bóp Tương Tác

> **LensGhost** (https://lensghost-tool.web.app) là công cụ chuyên nghiệp, miễn phí giúp xóa sạch metadata ảnh AI, watermark bản quyền ẩn, và giả lập thông số máy ảnh vật lý (EXIF/GPS) để đưa ảnh trở về trạng thái chụp thực tế. Giải pháp tối ưu hóa 100% lượt tiếp cận tự nhiên (organic reach) và chống bóp tương tác trên Facebook, Instagram, TikTok, Zalo.

---

## 🔗 Liên Kết Quan Trọng
* **Trang chủ ứng dụng:** [https://lensghost-tool.web.app](https://lensghost-tool.web.app)
* **Mã nguồn GitHub:** [https://github.com/MinhHK68/LensGhost](https://github.com/MinhHK68/LensGhost)

---

## ❓ Tại sao bạn cần xóa metadata ảnh AI và fake thông số máy?

Hiện nay, các mạng xã hội như Facebook, TikTok sử dụng bộ lọc AI tự động quét siêu dữ liệu (metadata) của ảnh:
1. **Bóp tương tác tự động:** Ảnh được xuất từ Midjourney, Stable Diffusion, DALL-E, Bing Creator... chứa siêu dữ liệu phần mềm AI. Các robot quét thấy nhãn AI này sẽ tự động giảm ưu tiên phân phối bài viết.
2. **Watermark ẩn bảo quyền:** Nhiều công cụ tạo ảnh tự động chèn chữ ký số pixel (invisible watermark) để nhận diện.
3. **Mất thông số máy vật lý:** Ảnh AI hoàn toàn không có thông số EXIF (khẩu độ, tốc độ màn trập, tiêu cự, dòng máy...) như ảnh chụp thông thường, khiến thuật toán MXH dễ dàng nhận biết đó là ảnh nhân tạo.

**LensGhost** chính là giải pháp bẻ gãy bộ lọc kiểm duyệt này bằng cách **xóa metadata ảnh AI** và **fake metadata máy ảnh vật lý**.

---

## 🔥 Các tính năng nổi bật của LensGhost

### 1. Tẩy sạch dấu vết & Xóa metadata ảnh AI
- Tự động xóa sạch siêu dữ liệu XMP, EXIF, IPTC chứa lịch sử chỉnh sửa từ phần mềm vẽ AI.
- Làm sạch tệp tin 100%, bảo vệ quyền riêng tư cá nhân.

### 2. Khôi phục thông số máy ảnh chuyên nghiệp (Fake EXIF)
- Bơm ngược cấu hình thông số kỹ thuật thực tế giống như ảnh được chụp trực tiếp từ các thiết bị cao cấp:
  - **Apple iPhone** (iPhone 14/15 Pro Max)
  - **Sony Alpha** (Sony A7 IV, Sony A7R...)
  - **Canon EOS R5 / Nikon Z7**
- Khôi phục thông số ống kính, ISO, tiêu cự, khẩu độ, tốc độ chụp cực kỳ tự nhiên.

### 3. Bẻ gãy chữ ký số ẩn (Invisible AI Watermarks)
- Tích hợp bộ lọc **Nhiễu hạt film (Film Grain)** và **Làm mềm rìa (Soften Edge)** để bẻ gãy kết cấu pixel thuật toán chữ ký ẩn mà không làm giảm tính thẩm mỹ của tác phẩm nghệ thuật.

### 4. Tự động xóa logo AI & Watermark vật lý
- Quét thông minh và xóa bỏ logo AI ở góc ảnh bằng cọ vẽ (Inpaint brush) màu đỏ nổi bật trực quan, giúp khôi phục các vùng bị che khuất một cách tự nhiên.

### 5. An toàn bảo mật (Offline 100% Client-Side)
- Xử lý trực tiếp trên trình duyệt của bạn bằng JavaScript, cam kết **không tải hình ảnh lên máy chủ** (No upload server).
- Tích hợp Content Security Policy (CSP) nghiêm ngặt với `connect-src 'none'` ngăn chặn tuyệt đối rò rỉ dữ liệu.

---

## 🛠️ Công nghệ phát triển dự án

Dự án được xây dựng hoàn toàn bằng công nghệ Web thuần túy, tối ưu hóa tốc độ tải trang cực nhanh:
* **Frontend:** HTML5, Vanilla CSS3 (Glassmorphism, Custom Typography, Micro-animations).
* **Core Logic:** Pure JavaScript (bảo mật mã nguồn qua `app.min.js`).
* **Thư viện chạy offline:**
  - `exif.js` (Phân tích metadata)
  - `piexif.min.js` (Chỉnh sửa và ghi nhị phân siêu dữ liệu EXIF)
  - `fontawesome.min.js` (Hệ thống icon ngoại tuyến)

---

## 🚀 Hướng dẫn sử dụng chi tiết

1. Truy cập công cụ tại [lensghost-tool.web.app](https://lensghost-tool.web.app).
2. Kéo thả bức ảnh AI cần xử lý vào khung **Submit Frame**.
3. Chọn thiết bị giả lập mong muốn ở bảng điều khiển bên phải (Ví dụ: *Sony A7 IV*).
4. Kéo thanh trượt để chèn thêm độ *Nhiễu hạt film* giúp bẻ gãy chữ ký số ẩn.
5. Dùng *Cọ tô màu đỏ* bôi lên vùng logo/watermark cần xóa.
6. Nhấp **Xử lý & Thanh tẩy ảnh**.
7. Tải ảnh sạch về máy và tự tin chia sẻ lên mạng xã hội để đạt lượng tiếp cận tối đa!

---

*Phát triển bởi **[MinhHK68](https://github.com/MinhHK68)**. Nếu dự án giúp ích cho bạn, hãy tặng chúng tôi 1 Star trên GitHub! ⭐*
