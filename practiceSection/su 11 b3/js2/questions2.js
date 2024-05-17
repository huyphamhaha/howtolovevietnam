// lịch sử 11 bài 3
let questions = [
    {
       numb: 1,
       question: "Thắng lợi nào sau đây dẫn đến sự ra đời của Nhà nước xã hội chủ nghĩa đầu tiên trên thế giới?",
       answer: "Cách mạng tháng Mười Nga (1917).",
       options: [
         "Cách mạng tháng Hai (1917) ở Nga",
         "Cách mạng tháng Mười Nga (1917).",
         "Cách mạng Nga năm 1905 - 1907",
         "Công xã Pa-ri năm 1871 ở Pháp"
         ]
     },
     {
        numb: 2,
        question: "Sau thắng lợi của Cách mạng tháng Mười Nga (1917), nhiệm vụ hàng đầu của Chính quyền Xô viết là",
        answer: "đập tan bộ máy nhà nước cũ, xây dựng nhà nước mới của những người lao động.",
        options: [
          "đập tan bộ máy nhà nước cũ, xây dựng nhà nước mới của những người lao động.",
          "huy động tối đa nhân tài, vật lực để phục vụ cho cuộc chiến đấu bảo vệ Tổ quốc",
          "khôi phục kinh tế, hàn gắn vết thương chiến tranh và bảo vệ Tổ quốc.",
          "ban hành Hiến pháp mới và chiến đấu chống “thù trong giặc ngoài”."
          ]
      },
      {
        numb: 3,
        question: "Trong những năm 1918 - 1921, nhân dân Nga Xô viết đã tiến hành",
        answer: "cuộc chiến đấu chống thù trong, giặc ngoài",
        options: [
          "chính sách kinh tế mới do Lê-nin soạn thảo.",
          "xây dựng cơ sở vật chất của chủ nghĩa xã hội",
          "cuộc chiến đấu chống thù trong, giặc ngoài",
          "tiến hành Chiến tranh Vệ quốc chống lại phát xít Đức."
          ]
      },
      {
        numb: 4,
        question: "Liên Xô là tên gọi tắt của",
        answer: "Liên bang Cộng hòa xã hội chủ nghĩa Xô viết",
        options: [
          "Liên minh các đảng ở nước Nga",
          "Phong trào liên kết toàn Xô viết",
          "Liên hiệp các nước xã hội chủ nghĩa Xô viết",
          "Liên bang Cộng hòa xã hội chủ nghĩa Xô viết"
          ]
      },
      {
        numb: 5,
        question: "Khi mới thành lập, Liên bang Cộng hòa xã hội chủ nghĩa Xô viết gồm 4 nước Cộng hòa là",
        answer: "Nga, U-crai-na, Bê-lô-rút-xi-a và Ngoại Cáp-ca-dơ.",
        options: [
          "Nga, U-crai-na, Bê-lô-rút-xi-a và Ngoại Cáp-ca-dơ.",
          "Nga, Hung-ga-ri, Bê-lô-rút-xi-a và Ngoại Cáp-ca-dơ",
          "Nga, Hung-ga-ri, Bung-ra-ri và Ngoại Cáp-ca-dơ.",
          "Liên Xô, Hung-ga-ri, Bung-ra-ri và Ngoại Cáp-ca-dơ"
          ]
      },
      {
        numb: 6,
        question: "Ngày 30-12-1922, Đại hội lần thứ nhất các Xô viết toàn Liên bang đã thông qua",
        answer: "Tuyên ngôn thành lập Cộng hòa xã hội chủ nghĩa Xô viết",
        options: [
          "Tuyên ngôn thành lập Cộng hòa xã hội chủ nghĩa Xô viết",
          "Hiến pháp đầu tiến của Cộng hòa xã hội chủ nghĩa Xô viết",
          "Cương lĩnh xây dựng đất nước tiến lên chủ nghĩa xã hội.",
          "Báo cáo chính trị và báo cáo sửa đổi điều lệ Đảng Cộng sản"
          ]
      },
      {
        numb: 7,
        question: "Mục tiêu của việc thành lập Nhà nước Liên bang Cộng hòa xã hội chủ nghĩa Xô viết là",
        answer: "hợp tác, giúp đỡ lẫn nhau để cùng phát triển",
        options: [
          "chống lại sự tấn công của 14 nước đế quốc",
          "thực hiện hiệu quả Chính sách Kinh tế mới",
          "hợp tác, giúp đỡ lẫn nhau để cùng phát triển",
          "chống lại cuộc tấn công của phát xít Đức"
          ]
      },
      {
        numb: 8,
        question: "Dòng chữ trên Quốc huy của Liên Xô là",
        answer: "“Giai cấp vô sản thế giới đoàn kết lại”",
        options: [
          "“Tự do - Bình đẳng - Bác ái”",
          "“Độc lập - Tự do - Hạnh phúc”.",
          "“Thống nhất trong đa dạng”",
          "“Giai cấp vô sản thế giới đoàn kết lại”"
          ]
      },
      {
        numb: 9,
        question: "Tháng 1-1924, Liên Xô đã thông qua",
        answer: "bản Hiến pháp đầu tiên",
        options: [
          "bản Hiệp ước Liên bang.",
          "bản Hiến pháp đầu tiên",
          "chính sách “kinh tế mới”.",
          "Sắc lệnh “hòa bình”."
          ]
      },
      {
        numb: 10,
        question: "Đến năm 1940, Liên bang Cộng hòa xã hội chủ nghĩa Xô viết bao gồm bao nhiêu nước Cộng hòa?",
        answer: "15 nước.",
        options: [
          "11 nước.",
          "15 nước.",
          "4 nước",
          "10 nước."
          ]
      },
      {
        numb: 11,
        question: "Một trong những tư tưởng chỉ đạo của Lê-nin trong việc thành lập Liên bang Cộng hòa xã hội chủ nghĩa Xô viết năm 1922 là",
        answer: "sự bình đẳng, quyền tự quyết",
        options: [
          "sự bình đẳng, quyền tự quyết",
          "không phân biệt về tôn giáo.",
          "thống nhất về văn hóa",
          "không phân biệt về chủng tộc"
          ]
      },
      {
        numb: 12,
        question: "Nội dung nào sau đây không phải là tư tưởng chỉ đạo của Lê-nin trong việc thành lập Liên bang Cộng hoà xã hội chủ nghĩa Xô viết?",
        answer: "Xây dựng nền chuyên chính dân chủ tư sản",
        options: [
          "Sự bình đẳng về mọi mặt giữa các dân tộc.",
          "Quyền dân tộc tự quyết của các dân tộc",
          "Xây dựng một cộng đồng anh em giữa các dân tộc.",
          "Xây dựng nền chuyên chính dân chủ tư sản"
          ]
      },
      {
        numb: 13,
        question: "Đối với Liên Xô, sự ra đời của Liên bang Cộng hoà xã hội chủ nghĩa Xô viết không có ý nghĩa nào sau đây?",
        answer: "Tạo tiền đề cho sự ra đời của hệ thống xã hội chủ nghĩa trên thế giới",
        options: [
          "Thể hiện sức mạnh đoàn kết, giúp đỡ nhau giữa các dân tộc Xô viết",
          "Phù hợp với lợi ích chung của các dân tộc trên đất nước Xô viết",
          "Tăng cường vị thế của Nhà nước Liên Xô trên trường quốc tế",
          "Tạo tiền đề cho sự ra đời của hệ thống xã hội chủ nghĩa trên thế giới"
          ]
      },
      {
        numb: 14,
        question: "Đối với quốc tế, sự ra đời của Liên bang Cộng hoà xã hội chủ nghĩa Xô viết không có ý nghĩa nào sau đây?",
        answer: "Đưa Liên Xô trở thành cường quốc công nghiệp đứng thứ hai trên thế giới.",
        options: [
          "Cổ vũ mạnh mẽ phong trào giải phóng dân tộc ở Á, Phi, Mỹ La-tinh.",
          "Tạo tiền đề cho sự ra đời của hệ thống xã hội chủ nghĩa trên thế giới.",
          "Đưa Liên Xô trở thành cường quốc công nghiệp đứng thứ hai trên thế giới.",
          "Trở thành biểu tượng và chỗ dựa cho phong trào cách mạng thế giới."
          ]
      },
      {
        numb: 15,
        question: "Trong giai đoạn xây dựng và bảo vệ đất nước hiện nay, Việt Nam học tập điều gì từ sự ra đời và thành công của Liên bang Cộng hòa xã hội chủ nghĩa Xô viết?",
        answer: "Tinh thần đoàn kết, hợp tác, giúp đỡ nhau giữa các dân tộc.",
        options: [
          "Tinh thần đoàn kết, hợp tác, giúp đỡ nhau giữa các dân tộc.",
          "Mở rộng, giao lưu hợp tác quốc tế để khẳng định vị thế đất nước",
          "Mở cửa, tiếp thu kinh nghiệm quản lý và thu hút nguồn vốn từ bên ngoài",
          "Tham gia các liên minh quân sự để tăng cường sức mạnh phòng thủ."
          ]
      },
   ]
   