//sử 10 bài 1 và 2
let questions = [
  // bài 1
    {
      numb: 1,
      question: "Hiện thực lịch sử là gì?",
      answer: "Là tất cả những gì diễn ra trong quá khứ tồn tại một cách khách quan, độc lập",
      options: [
        "Là tất cả những gì diễn ra trong quá khứ tồn tại một cách khách quan, độc lập",
        "Là tất cả những gì diễn ra trong quá khứ của loài người",
        "Là tất cả những gì diễn ra trong quá khứ mà con người nhận thức được. ",
        "Là khoa học tìm hiểu về quá khứ"
        ]
    },
    {
        numb: 2,
        question: "Giáo dục tư tưởng, tình cảm, đạo đức và rút ra bài học kinh nghiệm hiện tại là chức năng nào của sử học?",
        answer: "Chức năng giáo dục.",
        options: [
          "Chức năng xã hội.",
          "Chức năng khoa học.",
          "Chức năng giáo dục.",
          "Chức năng dự báo."
          ]
      },
      {
        numb: 3,
        question: "Nội dung nào sau đây không phải là lí do cần học tập lịch sử suốt đời?",
        answer: "Cần bỏ qua quá khứ để hướng tới tương lai.",
        options: [
          "Cần vận dụng tri thức lịch sử vào cuộc sống.",
          "Cần bỏ qua quá khứ để hướng tới tương lai.",
          "Lịch sử còn nhiều bí ẩn cần khám phá.",
          "Giúp chung ta chung sống với thế giới."
          ]
      },
      {
        numb: 4,
        question: "Ý nào sau đây không phản ánh đúng nguyên tắc cơ bản trong nghiên cứu lịch sử?",
        answer: "Vì người lao động",
        options: [
          "Tiến bộ",
          "Vì người lao động",
          "Trung thực",
          "Khách quan"
          ]
      },
      {
        numb: 5,
        question: "Ý nào sau đây không phải là đối tượng nghiên cứu của Sử học",
        answer: "Những hiện tượng tự nhiên xảy ra trong quá khứ.",
        options: [
          "Quá khứ của toàn thể nhân loại.",
          "Quá khứ của một quốc gia hoặc khu vực trên thế giới.",
          "Quá khứ của một cá nhân hoặc một nhóm, một cộng đồng người.",
          "Những hiện tượng tự nhiên xảy ra trong quá khứ."
          ]
      },
      {
        numb: 6,
        question: "So với hiện thức lịch sử, nhận thức lịch sử có đặc điểm gì?",
        answer: "Nhận thức lịch sử không thể tái hiện đầy đủ hiện thực lịch sử.",
        options: [
          "Nhận thức lịch sử luôn phản ánh đúng hiện thực lịch sử.",
          "Nhận thức lịch sử không thể tái hiện đầy đủ hiện thực lịch sử.",
          "Nhận thức lịch sử thường lạc hậu hơn hiện thực lịch sử.",
          "Nhận thức lịch sử độc lập, khách quan với hiện thực lịch sử."
          ]
      },
      {
        numb: 7,
        question: "Hiểu biết sâu sắc về lịch sử và văn hóa dân tộc Việt Nam, của các nước trong khu vực và thế giới sẽ tạo ra cơ hội nào sau đây?",
        answer: "Hội nhập thành công.",
        options: [
          "Định hướng nghề nghiệp.",
          "Hiểu biết về tương lai.",
          "Hợp tác về kinh tế.",
          "Hội nhập thành công."
          ]
      },
      {
        numb: 8,
        question: "Khái niệm lịch sử gắn liền với hai yếu tố cơ bản là",
        answer: "hiện thực lịch sử và nhận thức lịch sử.",
        options: [
          "Sử học và Toán học.",
          "hiện thực lịch sử và nhận thức lịch sử.",
          "nhận thức lịch sử và đối tượng sử học.",
          "con người và thiên nhiên."
          ]
      },
      {
        numb: 9,
        question: "Ý nào phản ánh đúng khái niệm nhận thức lịch sử?",
        answer: "Có ý kiến cho rằng Mĩ thả bom xuống Hiroshima là cần thiết.",
        options: [
          "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc Lập (2-9-1945).",
          "Ngày 1 – 9 – 1939, phát xít Đức tấn công Ba Lan.",
          "Tìm thấy xương hóa thạch con người ở Lạng Sơn.",
          "Có ý kiến cho rằng Mĩ thả bom xuống Hiroshima là cần thiết."
          ]
      },
      {
        numb: 10,
        question: "Nội dung nào phản ánh không đúng khi nói đến sự cần thiết của việc học tập và khám phá lịch sử hiện nay?",
        answer: "Học tập lịch sử chỉ diễn ra khi còn ngồi trên ghế nhà trường.",
        options: [
          "Học tập lịch sử chỉ diễn ra khi còn ngồi trên ghế nhà trường.",
          "Học tập lịch sử diễn ra mọi lúc, mọi nơi trong cuộc sống.",
          "Học tập lịch sử thông qua tham quan di tích, bảo tàng lịch sử.",
          "Học tập lịch sử thông qua phim ảnh, âm nhạc, truyện kể."
          ]
      },
      //bài 2
      {
        numb: 11,
        question: "Di sản nào sao đây được xem là di sản văn hóa vật thể ?",
        answer: "thành quách, lăng tẩm.",
        options: [
          "Đàn ca tài tử.",
          "Nghệ thuật ca trù.",
          "Hát xướng, hát xoan.",
          "thành quách, lăng tẩm."
          ]
      }, 
      {
        numb: 12,
        question: "Di sản nào sao đây được xem là di sản văn hóa phi vật thể ?",
        answer: "Hát xoan.",
        options: [
          "Cung điện.",
          "Nhà cổ.",
          "Lăng tẩm.",
          "Hát xoan."
          ]
      },
      {
        numb: 13,
        question: "Cơ sở khoa học cho công tác xác định giá trị, bảo tồn và phát huy giá trị đích thực của di sản là kết quả nghiên cứu ",
        answer: "Sử học.",
        options: [
          "Sử học.",
          "Địa lí.",
          "Văn học.",
          "Toán học."
          ]
      },
      {
        numb: 14,
        question: "Trong bảo tồn và phát huy giá trị của di sản, yêu cầu quan trọng nhất đặt ra là gì?",
        answer: "Phải đảm bảo giá trị lịch sử, văn hóa, khoa học vì sự phát triển bền vững.",
        options: [
          "Đáp ứng yêu cầu quảng bá hình ảnh về đất nước, con người Việt Nam.",
          "Phải đảm bảo giá trị lịch sử, văn hóa, khoa học vì sự phát triển bền vững.",
          "Phục vụ nhu cầu phát triển kinh tế-xã hội.",
          "Phải đảm bảo giá trị thẩm mĩ của di sản."
          ]
      },
      {
        numb: 15,
        question: "Tổ chức quốc tế nào sao đây ghi danh, công nhận các danh mục di sản văn hóa thế giới?",
        answer: "UNESCO.",
        options: [
          "ASEAN.",
          "NATO.",
          "UNESCO.",
          "WTO."
          ]
      },
      {
        numb: 16,
        question: "Biện pháp bảo tồn di sản có hiệu quả hiện nay là",
        answer: "sưu tầm, lưu giữ, truyền nghề, trình diễn.",
        options: [
          "sưu tầm, lưu giữ, truyền nghề, trình diễn. ",
          "cổ động, tái tạo, làm mới, nhân bản.",
          "tái tạo, nhân bản, truyền nghề, trình diễn. ",
          "làm mới, nhân bản, cổ động, lưu giữ."
          ]
      },
      {
        numb: 17,
        question: "Di sản văn hóa, di sản thiên nhiên có vai trò như thế nào đối với Sử học?",
        answer: "Là nguồn sử liệu quan trọng của Sử học.",
        options: [
          "Là nguồn sử liệu quan trọng của Sử học. ",
          "Là nguồn sử liệu duy nhất của Sử học.",
          "Tạo điều kiện phát triển kinh tế.",
          "Thúc đẩy du lịch phát triển."
          ]
      },
      {
        numb: 18,
        question: "Ngành du lịch không có vai trò nào sau đây đối với Sử học?",
        answer: "Xác minh độ tin cậy của lịch sử.",
        options: [
          "Xác minh độ tin cậy của lịch sử. ",
          "Mang lại nguồn lực cho nghiên cứu lịch sử.",
          "Cung cấp thông tin cho ngành Sử học.",
          "Góp phần quảng bá lịch sử, văn hóa ra thế giới."
          ]
      },
      {
        numb: 19,
        question: "Lịch sử, văn hóa không có vai trò nào sau đây đối với sự phát triển của ngành du lịch?",
        answer: "Tạo ra sự công bằng, bình đẳng trong xã hội.",
        options: [
          "Góp phần quảng bá ngành du lịch.",
          "Là nguồn tài nguyên quí giá để phát triển du lịch.",
          "Tạo ra sự công bằng, bình đẳng trong xã hội.",
          "Góp phần hình thành ý tưởng phát triển du lịch."
          ]
      },
      {
        numb: 20,
        question: "Ngành Sử học không có vai trò nào đối với việc bảo tồn di sản văn hóa, di sản thiên nhiên?",
        answer: "Tạo ra sự công bằng, bình đẳng trong xã hội.",
        options: [
          "Cung cấp thông tin tin cậy cho việc bảo tồn di sản.",
          "Góp phần hình thành ý tưởng cho việc bảo tồn di sản.",
          "Điều chỉnh di sản văn hóa cho phù hợp với thời đại.",
          "Xác định ý nghĩa của di sản với cộng đồng"
          ]
      },
]