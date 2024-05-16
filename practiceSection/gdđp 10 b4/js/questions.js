// creating an array and passing the number, questions, options, and answers
// GDĐP 10
let questions = [
  {
    numb: 61,
    question: "Khu vực ngoại thành Thành phố Hồ Chí Minh có bao nhiêu ngành nghề tiểu thủ công nghiệp?",
    answer: "24.",
    options: [
      "10.",
      "24.",
      "65.",
      "31."
    ]
  },
  {
    numb: 62,
    question: "Khu vực nội thành Thành phố Hồ Chí Minh có bao nhiêu ngành nghề tiểu thủ công nghiệp?",
    answer: "31.",
    options: [
      "10.",
      "24.",
      "65.",
      "31."
    ]
  },
  {
    numb: 63,
    question: "Ở Thành phố Hồ Chí Minh, địa danh nào sau đây nằm ở Quận 1?",
    answer: "Dinh Độc Lập.",
    options: [
      "Địa đạo Củ Chi.",
      "Công viên văn hóa Đầm Sen.",
      "Dinh Độc Lập.",
      "Khu du lịch văn hóa Suối Tiên."
    ]
  },
  {
    numb: 64,
    question: "Nhận định nào sau đây không đúng về tiềm năng phát triển du lịch ở Thành phố Hồ Chí Minh?",
    answer: "Có khí hậu mát mẻ.",
    options: [
      "Có nhiều tài nguyên văn hóa vật thể.",
      "Có nhiều điểm tham quan hấp dẫn.",
      "Là trung tâm trung chuyển, đầu mối giao thông quan trọng.",
      "Có khí hậu mát mẻ."
    ]
  },
  {
    numb: 65,
    question: "Địa điểm nào sau đây không phải là khu du lịch sinh thái ở Thành phố Hồ Chí Minh?",
    answer: "Khu du lịch Suối Tiên.",
    options: [
      "Khu du lịch Suối Tiên.",
      "Khu du lịch Vàm Sát.",
      "Khu du lịch Văn Thánh.",
      "Khu du lịch Bình Quới."
    ]
  },
  {
    numb: 66,
    question: "“Đại sứ du lịch” là danh hiệu danh dự do cơ quan nào bổ nhiệm?",
    answer: "Bộ Văn hóa, Thể thao và Du lịch.",
    options: [
      "Sở Văn hóa, Thể thao và Du lịch.",
      "Cơ quan Truyền thông, Báo Chí.",
      "Ủy ban Nhân dân Thành phố.",
      "Bộ Văn hóa, Thể thao và Du lịch."
    ]
  },
  {
    numb: 67,
    question: "Để trở thành một đại sứ du lịch toàn diện thì mỗi cá nhân phải hội tụ các yếu tố nào sau đâu?",
    answer: "Hiếu khách – thân thiện – văn minh.",
    options: [
      "Hiếu khách – thân thiện – văn hóa.",
      "Hiếu khách – thân thiện – văn minh.",
      "Hòa đồng – thân thiện – văn minh.",
      "Hiếu khách – nhân văn – thân thiện."
    ]
  },
  {
    numb: 68,
    question: "Ở Thành phố Hồ Chí Minh, lễ hội nào thường diễn ra vào tháng 3 hàng năm nhằm tôn vinh trang phục truyền thống Việt Nam?",
    answer: "Lễ hội Áo dài.",
    options: [
      "Lệ hội trái cây.",
      "Liên hoan ẩm thực Phương Nam.",
      "Lễ hội Áo dài.",
      "Lễ hội Nghinh Ông."
    ]
  },
  {
    numb: 69,
    question: "Sản phẩm du lịch đặc sắc của mỗi địa phương chính là …. văn hóa, sự thân thiện của người dân. Tìm từ thích hợp điền vào chỗ trống:",
    answer: "chiều sâu.",
    options: [
      "chiều sâu.",
      "thước đo.",
      "chiều dài.",
      "đa dạng."
    ]
  },
  {
    numb: 70,
    question: "Ý thức của người dân là yếu tố quan trọng, để giúp đất nước ngày càng phát triển, văn minh hiện đại, chiếm được …… của du khách. Tìm từ thích hợp điền vào chỗ trống:",
    answer: "thiện cảm.",
    options: [
      "lòng tin.",
      "tình yêu.",
      "thiện cảm.",
      "cảm phục."
    ]
  },
  {
    numb: 71,
    question: "Địa điểm du lịch nào ở ngoại thành Thành phố Hồ Chí Minh?",
    answer: "Địa đạo Củ Chi.",
    options: [
      "Dinh Độc Lập.",
      "Địa đạo Củ Chi.",
      "Nhà thờ Đức Bà.",
      "Khu du lịch Đầm Sen."
    ]
  },
  {
    numb: 72,
    question: "Thành phố Hồ Chí Minh được xem là ………với những hoạt động vui chơi giải trí cả ngày lẫn đêm. Tìm từ thích hợp điền vào chỗ trống:",
    answer: "“thành phố không ngủ”",
    options: [
      "“kinh đô ánh sáng”",
      "“thành phố không ngủ”",
      "“thành phố phồn hoa”",
      "“thành phố văn hóa”"
    ]
  },
  {
    numb: 73,
    question: "Du lịch đường thủy phát triển là do Thành phố Hồ Chí Minh có",
    answer: "sông Sài Gòn.",
    options: [
      "khí hậu cận xích đạo.",
      "sông Sài Gòn.",
      "văn hóa đa dạng.",
      "giáp biển Đông."
    ]
  },
  {
    numb: 74,
    question: "Chợ Bình Tây – một trong những địa điểm mua sắm nổi tiếng ở Thành phố Hồ Chí Minh thuộc",
    answer: "quận 6.",
    options: [
      "quận 1.",
      "quận 5.",
      "quận 3.",
      "quận 6."
    ]
  },
  {
    numb: 75,
    question: "Chợ An Đông – một trong những địa điểm mua sắm nổi tiếng ở Thành phố Hồ Chí Minh thuộc",
    answer: "quận 5.",
    options: [
      "quận 1.",
      "quận 5.",
      "quận 3.",
      "quận 6."
    ]
  },
  {
    numb: 76,
    question: "Ở Thành phố Hồ Chí Minh, hai loại ô nhiễm môi trường đáng chú ý nhất là",
    answer: "ô nhiễm nguồn nước và không khí.",
    options: [
      "ô nhiễm nguồn nước và tiếng ồn.",
      "ô nhiễm nguồn nước và không khí.",
      "ô nhiễm ánh sáng và không khí.",
      "ô nhiễm đất và nước."
    ]
  },
  {
    numb: 77,
    question: "Phần lớn bề mặt cắt các kênh rạch ở Thành phố Hồ Chí Minh đều bị thu hẹp đến",
    answer: "50%.",
    options: [
      "60%.",
      "50%.",
      "70%.",
      "20%."
    ]
  },
  {
    numb: 78,
    question: "Ở Thành phố Hồ Chí Minh, nguồn thải có hệ thống xử lí nước thải chỉ chiếm",
    answer: "60%.",
    options: [
      "60%.",
      "50%.",
      "70%.",
      "20%."
    ]
  },
  {
    numb: 79,
    question: "Ý nào sau đây không phải là nguyên nhân làm ô nhiễm nguồn nước ở Thành phố Hồ Chí Minh?",
    answer: "Trồng cây ven kênh rạch.",
    options: [
      "Chất thải công nghiệp và sinh hoạt chưa qua xử lí.",
      "Hoạt động giao thông đường thủy.",
      "Công tác quản lí còn lỏng lẻo.",
      "Trồng cây ven kênh rạch."
    ]
  },
  {
    numb: 80,
    question: "Ô nhiễm môi trường không khí ở Thành phố Hồ Chí Minh phần lớn là do",
    answer: "hoạt động giao thông.",
    options: [
      "Đốt rơm rạ.",
      "xây dựng, sửa chữa cơ sở hạ tầng.",
      "hoạt động giao thông.",
      "khí thải công nghiệp."
    ]
  },
  {
    numb: 81,
    question: "Trong 10 năm trở lại đây, bụi mịn ở Thành phố Hồ Chí Minh cao hơn mấy lần so với khuyến cáo của WHO?",
    answer: "2,0 lần.",
    options: [
      "0,2 lần.",
      "2,0 lần.",
      "3,0 lần.",
      "bằng với khuyến cáo."
    ]
  },
  {
    numb: 82,
    question: "Ở Thành phố Hồ Chí Minh, sự bắt nguồn của ô nhiễm môi trường là do",
    answer: "công nghiệp hóa.",
    options: [
      "công nghiệp hóa.",
      "đô thị hóa.",
      "mở rộng diện tích.",
      "mùa khô kéo dài."
    ]
  },
  {
    numb: 83,
    question: "Ở Thành phố Hồ Chí Minh, ô nhiễm tiếng ồn chủ yếu là do",
    answer: "giao thông đông đúc.",
    options: [
      "loa di động.",
      "nhiều cửa hàng.",
      "giao thông đông đúc.",
      "nhiều lễ hội."
    ]
  },
  {
    numb: 84,
    question: "Ô nhiễm môi trường không khí trên địa bàn Thành phố Hồ Chí Minh, chủ yếu do hoạt động giao thông, chiếm",
    answer: "70 – 80%.",
    options: [
      "80 – 90%.",
      "70 – 80%.",
      "20 – 30%.",
      "50%."
    ]
  },
  {
    numb: 85,
    question: "Theo IQAir, năm 2020 nồng độ PM2.5 ở Thành phố Hồ Chí Minh là",
    answer: "22 µg/m3.",
    options: [
      "22,4 µg/m3.",
      "9,4 µg/m3.",
      "19,4 µg/m3.",
      "22 µg/m3."
    ]
  },
  {
    numb: 86,
    question: "Theo IQAir, năm 2021 nồng độ PM2.5 ở Thành phố Hồ Chí Minh là",
    answer: "19,4 µg/m3.",
    options: [
      "22,4 µg/m3.",
      "9,4 µg/m3.",
      "19,4 µg/m3.",
      "22 µg/m3."
    ]
  },
  {
    numb: 87,
    question: "Hậu quả của ô nhiễm môi trường đất do khai thác đất, cát trái phép là",
    answer: "gây sạt lở đất.",
    options: [
      "xâm nhập mặn.",
      "ô nhiễm nước ngầm.",
      "gây sạt lở đất.",
      "tăng tiếng ồn."
    ]
  },
  {
    numb: 88,
    question: "Hậu quả của ô nhiễm môi trường đất do khai thác nước ngầm thiếu quy hoạch là",
    answer: "xâm nhập mặn.",
    options: [
      "xâm nhập mặn.",
      "thay đổi dòng chảy.",
      "gây sạt lở đất.",
      "tăng tiếng ồn."
    ]
  },
  {
    numb: 89,
    question: "Đâu không phải là nguyên nhân gây ô nhiễm nhiệt ở Thành phố Hồ Chí Minh?",
    answer: "Trồng thêm nhiều cây xanh.",
    options: [
      "Nhiều con đường bê tông.",
      "Nhiều khu chung cư được xây mới.	",
      "Trồng thêm nhiều cây xanh.",
      "Nhiều nhà cao tầng mọc lên."
    ]
  },
  {
    numb: 90,
    question: "Nồng độ PM2.5 theo khuyến nghị của Tổ chức Y tế Thế giới (WHO) là",
    answer: "5 µg/m3.",
    options: [
      "4 µg/m3.",
      "0,5 µg/m3.",
      "15 µg/m3.",
      "5 µg/m3."
    ]
  },
];