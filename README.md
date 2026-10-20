# 20/10 — Những Bông Hoa Của 12A10

Website tĩnh tiếng Việt chúc mừng Ngày Phụ nữ Việt Nam 20/10 dành cho lớp 12A10. Dự án dùng HTML, CSS và JavaScript thuần, không cần máy chủ, API key hay cài đặt thư viện.

## Tính năng

- Màn hình mở quà và giao diện pastel responsive.
- Phong thư tương tác cùng lá thư chúc mừng.
- Trình phát nhạc cho tệp `Chuyện rằng — Thịnh Suy` do người dùng cung cấp.
- Album gồm 7 ảnh lớp đã được tối ưu dung lượng và giữ đúng tỷ lệ.
- 20 lời chúc cá nhân hóa; tìm kiếm, lọc theo chủ đề và đổi lời nhắn.
- Vườn 20 bông hoa tương tác.
- Thẻ bói vui tạo thông điệp ngẫu nhiên (chỉ mang tính giải trí).
- Pháo hoa Canvas có nút bật/tắt, tự dừng và tôn trọng thiết lập giảm chuyển động.
- Khu vực lưu giữ thanh xuân, credits, meta description và Open Graph cơ bản.

## Cấu trúc

```text
20-10-12a10/
├── index.html
├── styles.css
├── script.js
├── README.md
├── .nojekyll
└── assets/
    ├── audio/
    │   └── chuyen-rang.m4a
    ├── icons/
    │   └── flower.svg
    └── images/
        ├── gallery-01.jpg
        ├── gallery-02.jpg
        ├── gallery-03.jpg
        ├── gallery-04.jpg
        ├── gallery-05.jpg
        ├── gallery-06.jpg
        └── gallery-07.jpg
```

## Chạy thử trên máy tính

1. Giải nén ZIP.
2. Mở thư mục `20-10-12a10`.
3. Nhấp đúp `index.html` để mở bằng trình duyệt. Website không dùng `fetch` hay backend nên có thể xem trực tiếp; một số trình duyệt có thể hạn chế phát âm thanh khi mở từ tệp cục bộ. Nếu nhạc không phát, hãy thử qua GitHub Pages.
4. Bấm **Mở món quà 20/10**, sau đó thử từng phần: phong thư, nhạc, ảnh, lời chúc, vườn hoa, thẻ may mắn và pháo hoa.

## Xuất bản miễn phí bằng GitHub Pages

1. Đăng nhập GitHub và tạo repository mới tên `20-10-12a10` (chọn **Public** để đơn giản hóa việc triển khai).
2. Mở repository, chọn **Add file → Upload files** (tên mục có thể thay đổi theo giao diện). Giải nén ZIP trước, sau đó tải **các tệp và thư mục bên trong** dự án lên repository: `index.html`, `styles.css`, `script.js`, `README.md`, `.nojekyll`, và thư mục `assets`.
3. Kiểm tra `index.html` nằm ở thư mục gốc repository, không nằm trong một thư mục con lồng thêm.
4. Mở **Settings → Pages**. Ở phần triển khai từ nhánh (Build and deployment / Deploy from a branch), chọn nhánh `main` và thư mục `/(root)`, rồi lưu.
5. Chờ GitHub hoàn thành deployment. Trang Pages sẽ hiển thị URL dự án, thường có dạng `https://TEN-GITHUB.github.io/20-10-12a10/`. Đây chỉ là mẫu URL; dùng URL mà GitHub hiển thị cho repository thực tế.
6. Mở URL bằng điện thoại và kiểm tra các tính năng trong checklist bên dưới.

> Không chia sẻ mật khẩu, mã xác thực hoặc token GitHub. Chỉ tải lên tài nguyên bạn có quyền chia sẻ công khai. Tệp nhạc đã được người dùng cung cấp; trước khi đăng website công khai, hãy chắc chắn rằng bạn có quyền sử dụng và công khai tệp đó.

## Sau khi cập nhật ảnh hoặc nhạc

- Thay ảnh: giữ tên các tệp `gallery-01.jpg` đến `gallery-07.jpg`, hoặc cập nhật đồng thời đường dẫn trong `index.html` và mảng `galleryItems` trong `script.js`.
- Thay nhạc: đặt tệp mới vào `assets/audio/`, sau đó cập nhật `src` trong thẻ `<source>` ở `index.html`. Dùng định dạng trình duyệt phổ biến như MP3 hoặc M4A/AAC.
- Sửa tên hoặc lời chúc: chỉnh mảng `students` trong `script.js`, sau đó kiểm tra đủ 20 người.
- Sau khi đẩy thay đổi lên nhánh `main`, GitHub Pages sẽ tự triển khai phiên bản mới sau khi tiến trình hoàn tất.

## Checklist kiểm tra

- [ ] Intro mở được và vào phần nội dung chính.
- [ ] Phong thư mở/đóng được bằng thao tác chạm hoặc bàn phím.
- [ ] Nhạc có thể phát/tạm dừng và thanh thời gian cập nhật.
- [ ] Gallery mở ảnh lớn, chuyển ảnh, đóng ảnh và hỗ trợ phím mũi tên/Escape.
- [ ] Hiển thị đúng 20 tên và đủ 20 lời chúc cá nhân hóa.
- [ ] Tìm kiếm và lọc lời chúc hoạt động.
- [ ] Bấm từng hoa hiển thị đúng tên và lời chúc tương ứng.
- [ ] Thẻ fortune tạo thông điệp ngẫu nhiên.
- [ ] Pháo hoa bật/tắt và tự dừng.
- [ ] Thử trên điện thoại, tablet và desktop.
- [ ] Sau triển khai, xác minh ảnh và tệp nhạc tải thành công qua URL công khai.

## Trạng thái bàn giao

- **Đã tạo:** toàn bộ mã nguồn và tài nguyên trong dự án.
- **Đã rà soát tĩnh:** cấu trúc, tên/đường dẫn tài nguyên, danh sách người nhận, số lượng ảnh và liên kết chức năng. Xác nhận đủ 20 tên, 20 lời chúc và 7 ảnh; không có đường dẫn tài nguyên cục bộ bị thiếu.
- **Đã kiểm thử tương tác trong Chromium:** intro ẩn đúng sau khi mở quà; phong thư mở/đóng; tìm kiếm và lọc lời chúc; lightbox chuyển ảnh và đóng bằng Escape; vườn hoa hiển thị lời chúc; fortune và pháo hoa bật/tắt. Không ghi nhận lỗi JavaScript trong lượt kiểm thử đó. Đã kiểm tra không tràn ngang ở các khung nhìn 320, 375, 390, 768, 1024 và 1440 px.
- **Chưa kiểm thử phát nhạc thực tế trong trình duyệt:** lượt test tương tác dùng bản trang tự chứa và đã bỏ nguồn audio để chạy ngoại tuyến. Tệp M4A thật có trong ZIP; hãy thử nút phát sau khi mở website trên trình duyệt và kiểm tra lại sau khi xuất bản.
- **Chưa kiểm thử trên URL GitHub Pages và chưa xuất bản:** cần bạn tải dự án lên tài khoản GitHub và bật Pages theo hướng dẫn. Không có URL trực tuyến nào được khẳng định là đã hoạt động.
