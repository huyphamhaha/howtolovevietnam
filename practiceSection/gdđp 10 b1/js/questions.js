// creating an array and passing the number, questions, options, and answers
// GDĐP 10
let questions = [
    {
    numb: 1,
    question: "Nhận định nào sau đây không phải là vai trò của ngành công nghiệp ở Thành phố Hồ Chí Minh?",
    answer: "không tạo ra việc làm cho người lao động.",
    options: [
      "Chiếm tỉ trọng cao trong cơ cấu GRDP.",
      "Thúc đẩy sự chuyển dịch cơ cấu kinh tế.",
      "không tạo ra việc làm cho người lao động.",
      "Cung cấp tư liệu cho các ngành kinh tế khác."
    ]
  },
    {
    numb: 2,
    question: "Ý nào sau đây không phải là thuận lợi về vị trí địa lí của Thành phố Hồ Chí Minh trong phát triển công nghiệp?",
    answer: "Có nhiều khu kinh tế cửa khẩu lớn.",
    options: [
      "Nằm ở trung tâm vùng Đông Nam Bộ.",
      "Có nhiều khu kinh tế cửa khẩu lớn.",
      "Trong Vùng kinh tế trọng điểm phía Nam.",
      "Là trung tâm kinh tế, chính trị văn hóa lớn."
    ]
  },
    {
    numb: 3,
    question: "Một trong những điều kiện quan trọng về kinh tế - xã hội để Thành phố Hồ Chí Minh phát triển công nghiệp là",
    answer: "lao động đông, trình độ tay nghề cao.",
    options: [
      "dân cư phân bố không đều.",
      "tiếp giáp với Biển Đông.",
      "có nhiều khu công nghiệp.",
      "lao động đông, trình độ tay nghề cao."
    ]
  },
    {
    numb: 4,
    question: "Thành phố Hồ Chí Minh là nơi có nhiều …………năng động trong phát triển công nghiệp, tập trung nhiều ngành công nghiệp, trong đó có nhiều ngành công nghiệp ………..",
    answer: "chính sách và trọng điểm.",
    options: [
      "chính sách và trọng điểm.",
      "chính sách và hiện đại.",
      "chương trình và trọng điểm.",
      "kế hoạch và hàng hóa."
    ]
  },
    {
    numb: 5,
    question: "Khó khăn về tự nhiên của Thành phố Hồ Chí Minh trong phát triển công nghiệp là",
    answer: "có mùa đông lạnh.",
    options: [
      "có mùa đông lạnh.",
      "nhiều kênh rạch.",
      "diện tích rừng ít.",
      "mùa khô kéo dài."
    ]
  },
    {
    numb: 6,
    question: "Ý nào sau đây không phải là thuận lợi của Thành phố Hồ Chí Minh trong phát triển công nghiệp?",
    answer: "Căng thẳng trong quan hệ thương mại.",
    options: [
      "Nằm ở trung tâm vùng Đông Nam Bộ.",
      "Căng thẳng trong quan hệ thương mại.",
      "Lao động đông và có tay nghề..",
      "Gần nơi có tài nguyên dầu khí, thủy điện."
    ]
  },
  {
    numb: 7,
    question: "Trong tín ngưỡng thờ Thành Hoàng làng, lễ Kỳ Yên có tên gọi là",
    answer: "lễ cầu an.",
    options: [
      "lễ cầu an.",
      "tế lễ.",
      "lễ giỗ Tổ.",
      "lễ hội làng."
    ]
  },
  {
    numb: 8,
    question: "Quận huyện nào có nhiều miếu nhất tại thành phố Hồ Chí Minh?",
    answer: "Bình Chánh.",
    options: [
      "Quận 3.",
      "Cần Giờ.",
      "Hóc Môn.",
      "Bình Chánh."
    ]
  },
  {
    numb: 9,
    question: "Thành phố Hồ Chí Minh hiện có bao nhiêu ngôi đình còn đang hoạt động tín ngưỡng?",
    answer: "299.",
    options: [
      "199.",
      "299.",
      "53.",
      "297."
    ]
  },
  {
    numb: 10,
    question: "Trong lễ Kỳ Yên, phần nghi thức lễ được tiến hành trang trọng, sau phần lễ là",
    answer: "phần hội.",
    options: [
      "phần lộc.",
      "cầu mưa.",
      "phần hội.",
      "nghỉ ngơi."
    ]
  },
  {
    numb: 11,
    question: "Quận huyện nào có ít miếu nhất tại thành phố Hồ Chí Minh?",
    answer: "Quận 3.",
    options: [
      "Quận 3.",
      "Cần Giờ.",
      "Hóc Môn.",
      "Bình Chánh."
    ]
  },
  {
    numb: 12,
    question: "Ngôi đình cổ xưa nhất vùng đất Nam Bộ đang tọa lạc tại TPHCM là",
    answer: "đình Thông Tây Hội.",
    options: [
      "đình Thông Tây Hội.",
      "đình Chí Hòa.",
      "đình Trường Thọ.",
      "đình Phong Phú."
    ]
  },
  {
    numb: 13,
    question: "Lễ Kỳ Yên tại Thành phố Hồ Chí Minh thường diễn ra bao nhiêu ngày?",
    answer: "2 – 3 ngày.",
    options: [
      "2 – 3 ngày.",
      "1 – 3 ngày.",
      "3 – 5 ngày.",
      "2 – 4 ngày."
    ]
  },
  {
    numb: 14,
    question: "Sinh thời, Võ Trường Toản mở trường dạy học ở đâu?",
    answer: "Đình Chí Hòa.",
    options: [
      "Đình Thông Tây Hội.",
      "Đình Chí Hòa.",
      "Đình Trường Thọ.",
      "Đình Phong Phú."
    ]
  },
  {
    numb: 15,
    question: "Ý nào sau đây không phải là chức năng của đình làng xưa?",
    answer: "Chức năng kinh doanh.",
    options: [
      "Chức năng tín ngưỡng.",
      "Chức năng kinh doanh.",
      "Chức năng văn hóa.",
      "Chức năng hành chính."
    ]
  },

];