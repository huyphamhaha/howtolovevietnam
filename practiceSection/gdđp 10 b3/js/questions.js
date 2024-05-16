// creating an array and passing the number, questions, options, and answers
// GDĐP 10
let questions = [
  {
    numb: 45,
    question: "Khó khăn về tự nhiên của Thành phố Hồ Chí Minh trong phát triển công nghiệp là",
    answer: "mùa khô kéo dài.",
    options: [
      "có mùa đông lạnh.",
      "nhiều kênh rạch.",
      "diện tích rừng ít.",
      "mùa khô kéo dài."
    ]
  },
  {
    numb: 46,
    question: "Ý nào sau đây không phải là thuận lợi của Thành phố Hồ Chí Minh trong phát triển công nghiệp?",
    answer: "Căng thẳng trong quan hệ thương mại.",
    options: [
      "Nằm ở trung tâm vùng Đông Nam Bộ.",
      "Căng thẳng trong quan hệ thương mại.",
      "Lao động đông và có tay nghề.",
      "Gần nơi có tài nguyên dầu khí, thủy điện."
    ]
  },
  {
    numb: 47,
    question: "Nhóm ngành nào chiếm tỉ trọng cao nhất trong cơ cấu ngành công nghiệp ở Thành phố Hồ Chí Minh?",
    answer: "Công nghiệp chế biến.",
    options: [
      "Công nghiệp chế biến.",
      "Công nghiệp khai thác.",
      "Công nghiệp hóa dầu.",
      "Hoạt động phân phối điện, khí đốt, nước."
    ]
  },
  {
    numb: 48,
    question: "Ngành công nghiệp chế biến ở Thành phố Hồ Chí Minh có xu hướng",
    answer: "tăng về tỉ trọng.",
    options: [
      "giảm về tỉ trọng.",
      "tăng về tỉ trọng.",
      "không thay đổi tỉ trọng.",
      "chậm phát triển."
    ]
  },
  {
    numb: 49,
    question: "Ngành công nghiệp khai thác ở Thành phố Hồ Chí Minh có xu hướng",
    answer: "giảm về tỉ trọng.",
    options: [
      "giảm về tỉ trọng.",
      "tăng về tỉ trọng.",
      "không thay đổi tỉ trọng.",
      "chậm phát triển."
    ]
  },
  {
    numb: 50,
    question: "Nhận định nào sau đây đúng về xu hướng chuyển dịch cơ cấu theo thành phần kinh tế trong hoạt động sản xuất công nghiệp ở Thành phố Hồ Chí Minh?",
    answer: "Giảm tỉ trọng khu vực nhà nước, tăng tỉ trọng khu vực ngoài nhà nước.",
    options: [
      "Giảm tỉ trọng khu vực nhà nước, tăng tỉ trọng khu vực ngoài nhà nước.",
      "Tăng tỉ trọng khu vực nhà nước, giảm tỉ trọng khu vực ngoài nhà nước.",
      "Giảm tỉ trọng khu vực nhà nước, khu vực ngoài nhà nước không thay đổi.",
      "Tăng cả tỉ trọng khu vực nhà nước và khu vực ngoài nhà nước."
    ]
  },
  {
    numb: 51,
    question: "Hiện nay, phần lớn các cơ sở sản xuất công nghiệp ở Thành phố Hồ Chí Minh phân bố chủ yếu ở",
    answer: "ngoại thành.",
    options: [
      "ngoại thành.",
      "ven biển.",
      "nội thành.",
      "gần sân bay."
    ]
  },
  {
    numb: 52,
    question: "Khu công nghiệp Vĩnh Lộc thuộc ",
    answer: "huyện Bình Chánh.",
    options: [
      "huyện Củ Chi.",
      "huyện Bình Chánh.",
      "huyện Nhà Bè.",
      "quận Bình Tân."
    ]
  },
  {
    numb: 53,
    question: "Khu công nghiệp Tân Phú Trung thuộc ",
    answer: "huyện Củ Chi.",
    options: [
      "huyện Củ Chi.",
      "huyện Bình Chánh.",
      "huyện Nhà Bè.",
      "quận Bình Tân."
    ]
  },
  {
    numb: 54,
    question: "Khu công nghiệp Hiệp Phước thuộc ",
    answer: "huyện Nhà Bè.",
    options: [
      "huyện Củ Chi.",
      "huyện Bình Chánh.",
      "huyện Nhà Bè.",
      "quận Tân Bình."
    ]
  },
  {
    numb: 55,
    question: "Khu công nghiệp Tân Tạo thuộc ",
    answer: "quận Bình Tân.",
    options: [
      "huyện Củ Chi.",
      "huyện Bình Chánh.",
      "huyện Nhà Bè.",
      "quận Bình Tân."
    ]
  },
  {
    numb: 56,
    question: "Khu công nghiệp Lê Minh Xuân thuộc ",
    answer: "huyện Bình Chánh.",
    options: [
      "huyện Củ Chi.",
      "huyện Bình Chánh.",
      "huyện Nhà Bè.",
      "quận Bình Tân."
    ]
  },
  {
    numb: 57,
    question: "Làng nghề nào sau đây không có ở Thành phố Hồ Chí Minh?",
    answer: "Gốm sứ.",
    options: [
      "Làm muối.",
      "Bánh tráng.",
      "Mây tre đan.",
      "Gốm sứ."
    ]
  },
  {
    numb: 58,
    question: "Ở Thành phố Hồ Chí Minh, làng nghề làm muối có ở",
    answer: "huyện Cần Giờ.",
    options: [
      "huyện Củ Chi.",
      "huyện Cần Giờ.",
      "huyện Nhà Bè.",
      "quận Bình Tân."
    ]
  },
  {
    numb: 59,
    question: "Ở Thành phố Hồ Chí Minh, làng nghề làm bánh tráng có ở",
    answer: "huyện Củ Chi.",
    options: [
      "huyện Củ Chi.",
      "huyện Cần Giờ.",
      "huyện Nhà Bè.",
      "quận Bình Tân."
    ]
  },
  {
    numb: 60,
    question: "Thành phố Hồ Chí Minh có bao nhiêu ngành nghề tiểu thủ công nghiệp?",
    answer: "65.",
    options: [
      "31.",
      "24.",
      "65.",
      "56."
    ]
  },
  
];