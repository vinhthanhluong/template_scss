-----------------------------------------------
		(Vietnamese only)
-----------------------------------------------

** Lưu ý: KHÔNG GIAO HÀNG KÈM THEO FILE NÀY


############## HOW TO SETUP SCSS/SASS ##############

- Cài đặt Node.js (phiên bản Recommended - https://nodejs.org/en/)
- Cài đặt Git SCM (https://git-scm.com/downloads)
- Cài dặt SASS (https://sass-lang.com/install) - câu lệnh (dùng Git Bash): 
npm install -g sass
- Git Bash tại root (folder gốc chứa source) và chạy câu lệnh:
sass --watch scss/styles.scss:css/styles.css scss/responsive.scss:css/responsive.css scss/under.scss:css/under.css scss/under_responsive.scss:css/under_responsive.css



################# BASIC USAGE #################

** Tạo favicon (tốt nhất nên dùng hình vuông) 
	- Truy cập page https://favicon.io/favicon-converter/ để tạo file favicon cần thiết.
	- Hãy lưu trữ các file favicon này trong folder favicon/, riêng file favicon.ico thì lưu ở root.
	(bắt buộc phải tạo khi làm code HTML dù có chỉ thị hay không)

** Các file thư viện (Slick, Aos, Wow, ...) có thể chứa ở folder /css/libs/ hoặc /js/libs/ và nhúng vào file HTML bằng tag <link> hoặc <script>
** Khai báo các CSS cần thiết trong /scss/
(đọc thêm Tài Liệu của SASS để hiểu rõ cách sử dụng SASS/SCSS: https://sass-lang.com/documentation/)
	- 4 files mặc định (styles / responsive / under / under_responsive) đã được chia ra thành nhiều file nhỏ để tối ưu hóa việc kiểm soát:
		+ Các phần setting mặc định sẽ khai báo trong file /scss/global/_setting.scss
		+ CSS cho các thành phần có tính Tái Sử Dụng (như Button, Title, ...) sẽ khai báo trong file /scss/global/_utilities.scss
		+ CSS dùng cho phần <header> sẽ khai báo trong file /scss/global/_header.scss
		+ CSS dùng cho phần <footer> sẽ khai báo trong file /scss/global/_footer.scss
		+ CSS dùng cho phần Main Visual sẽ khai báo trong file /scss/global/_visual.scss
		+ CSS dùng cho các phần còn lại (layout của từng block/section) sẽ khai báo trong file /scss/global/_content.scss
		+ CSS chỉ dùng riêng cho màn hình PC (screen width từ 751px trở lên) sẽ khai báo trong file /scss/global/_pc_only.scss
		+ CSS dùng để responsive cho các thiết bị SP (Smart Phone - screen width từ 750px trở xuống đến 320px) sẽ khai báo trong file /scss/global/_responsive.scss
		+ CSS dùng để áp dụng riêng cho Browser được chỉ định (Firefox, Safari, ...) sẽ khai báo trong file /scss/global/_browser.scss
	
	- Tương tự với các file CSS dùng riêng cho page con (under pages)
		+ CSS cho các thẻ Heading Title từ <h2> đến <h6> (và cả các thành phần liên quan) sẽ khai báo trong file /scss/global/_utilities.scss
		+ Ngoài ra các thành phần khác tương tự nội dung đã nhắc đến phía trên.
	
** Đối với code Javascript/Jquery:
	- Các script sử dụng chung cho toàn bộ website thì khai báo ở file js/common.js
	- Các script chỉ áp dụng cho page TOP/HOME PAGE thì khai báo ở file js/top.js

	- Cố gắng tổng hợp các function được khai báo bên trong 2 events chính (clean code):
		$(document).ready(function() {});
		$(window).bind('load', function() {});
	trường hợp cần khai báo thêm thì vẫn có thể khai báo theo nhu cầu.

	- Khi muốn khởi chạy phương thức (function) của 1 thành phần (element) nhất định, phải kiểm tra Sự Tồn Tại của element đó: dùng hàm $('.element-name').length, ví dụ:
		if( $('#visual').length > 0 ) {
			$('#visual').slick({
				dots: false,
				infinite: true,
				speed: 1000,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 5000,
				arrows: false,
				centerMode: false,
				centerPadding: 0,
				pauseOnHover: false,
				fade: false,
				variableWidth: false,
			});
		}
	
	- Khi tạo xong page, phải kiểm tra ở Dev Tool -> mục Console và giải quyết tất cả các Error nếu có phát sinh. Các error được xác định là do tài nguyên của bên thứ 3 (google, youtube, ...) thì bỏ qua.
	


################# CHANGE LOG #################

*** 2023/02/28 ***
- Tạo files và cấu trúc lại bộ source theo phương pháp SASS/SCSS
- Đặt ra các quy tắt khi triển khai code CSS và JS