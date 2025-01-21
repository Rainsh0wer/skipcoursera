# Auto Skip Video & Auto Skip PeerReview 
<br><br>
<img src="https://github.com/user-attachments/assets/5d84f92e-4cf7-436d-9782-def3827e38dc" height="100" weight="auto"/>
<br><br><br>
Đây là một đoạn mã JavaScript giúp tự động tua video đến đoạn Video được tick xanh ( Dành cho video ko thể tua được trên Coursera ) và 1 đoạn code để tự động tick max điểm trong phần peer reviews

## Giới thiệu 

- **Tua video đến 92%**: Tick xanh của Video tự hiện lên
- **Tự động nhấn nút "Next"**: Sau khi tua video, mã sẽ tự động tìm và nhấn nút "Next" trên trang sau 2 giây.

- **Tự động Tick các ô đánh giá số điểm "pt" cao nhất**

## Cách sử dụng

1. **Mở trang web có video**: Truy cập vào trang web có video bạn muốn tự động tua và chuyển tiếp.
   
2. **Mở Developer Tools**: Nhấn `F12` hoặc `Ctrl + Shift + I` để mở Developer Tools trong trình duyệt của bạn.

3. **Chuyển sang tab Console**: Trong Developer Tools, chọn tab "Console".

4. **Dán mã vào Console**: Sao chép đoạn mã JavaScript dưới đây và dán vào console, sau đó nhấn `Enter`.

```javascript

// Để tự động tua video
fetch('https://raw.githubusercontent.com/Rainsh0wer/skipcoursera/main/Skip-Video-Coursera.js')
.then(res => res.text())
.then(eval);

```
<br>

```javascript
// Để tự động tick đánh giá điểm
fetch('https://raw.githubusercontent.com/Rainsh0wer/skipcoursera/main/Skip-Peer-Review.js')
.then(res => res.text())
.then(eval);

