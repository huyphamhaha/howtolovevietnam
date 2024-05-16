// creating an array and passing the number, questions, options, and answers
// GDĐP 10
let questions = [
   
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
  {
    numb: 16,
    question: "Đình nào sau đây là di tích lịch sử cấp quốc gia?",
    answer: "Đình Phong Phú.",
    options: [
      "Đình Nghĩa An.",
      "Đình Phong Phú.",
      "Đình Minh Hương Gia Thạnh.",
      "Đình Quảng Triệu."
    ]
  },
  {
    numb: 17,
    question: "Đình được công nhận di tích nghệ thuật cấp quốc gia là",
    answer: "Đình Minh Hương Gia Thạnh.",
    options: [
      "Đình Phong Phú.",
      "Đình Nghĩa An.",
      "Đình Trường Thọ.",
      "Đình Minh Hương Gia Thạnh."
    ]
  },
  {
    numb: 18,
    question: "Ngôi đình cổ xưa nhất của người Hoa tại Thành phố Hồ Chí Minh là",
    answer: "Đình Minh Hương Gia Thạnh.",
    options: [
      "Đình Phong Phú.",
      "Đình Minh Hương Gia Thạnh.",
      "Quảng Triệu.",
      "Đình Nghĩa An."
    ]
  },
  {
    numb: 19,
    question: "Hiện nay, mộ của ông Võ Trường Toản cùng gia đình được an táng tại",
    answer: "Vĩnh Long.",
    options: [
      "Biên Hoà",
      "Vĩnh Long.",
      "Ba Tri.",
      "TP Hồ Chí Minh."
    ]
  },
  {
    numb: 20,
    question: "Loại hình văn nghệ nào thường được biểu diễn trong lễ Kỳ Yên?",
    answer: "Hát bội.",
    options: [
      "Hát quan họ.",
      "Hát bội.",
      "Hát cải lương.",
      "Đờn ca tài tử."
    ]
  },
  {
    numb: 21,
    question: "Đối tượng nào sau đây không được thờ trong các miếu?",
    answer: "Hưng Đạo Vương.",
    options: [
      "Hà Bá.",
      "Bà Chúa Xứ.",
      "Ngũ Hành Nương Nương.",
      "Hưng Đạo Vương."
    ]
  },
  {
    numb: 22,
    question: "Đối tượng được thờ nhiều nhất trong các ngôi miếu là",
    answer: "Ngũ Hành Nương Nương.",
    options: [
      "Chúa Tiên.",
      "Linh Sơn Thánh Mẫu.",
      "Ngũ Hành Nương Nương.",
      "Chúa Xứ Thánh Mẫu."
    ]
  },
  {
    numb: 23,
    question: "Vì sao các ngôi miếu thường được xây dựng tại các gò cao, bờ sông, đầu làng làng, cuối làng?",
    answer: "Không có sự ồn ào.",
    options: [
      "Không có sự ồn ào.",
      "Gần chợ.",
      "Gần đình.",
      "Nơi náo nhiệt, ồn ào."
    ]
  },
  {
    numb: 24,
    question: "Ở Thành phố Hồ Chí Minh, lễ cúng miếu thời diễn ra trong thời gian",
    answer: "1 ngày.",
    options: [
      "2 ngày.",
      "1 ngày.",
      "2 – 3 ngày.",
      "1 buổi."
    ]
  },
  {
    numb: 25,
    question: "“Đền là công trình kiến trúc được xây dựng để thờ cúng một vị Thánh hoặc những nhân vật lịch sử được ….. như một thần thánh. Hãy chọn cụm từ đúng nhất điền vào chỗ trống:",
    answer: "tôn sùng",
    options: [
      "tôn trọng",
      "tôn sùng",
      "sùng bái",
      "ân sủng"
    ]
  },
  {
    numb: 26,
    question: "Nguồn gốc của tục thờ các anh hùng dân tộc trong các ngôi đền là",
    answer: "uống nước nhớ nguồn.",
    options: [
      "uống nước nhớ nguồn.",
      "tôn sư trọng đạo.",
      "ơn nghĩa sinh thành.",
      "công nuôi nấng."
    ]
  },
  {
    numb: 27,
    question: "Nhận định nào sau đây không phải là ý nghĩa của tục thờ danh nhân, anh hùng dân tộc, dòng họ",
    answer: "Tưởng nhớ người có công khai lập ra làng.",
    options: [
      "Tưởng nhớ công ơn đồng bào chiến sĩ đã hi sinh trong các cuộc đấu tranh.",
      "Tôn vinh và lưu truyền tinh thần đấu tranh bất khuất của các anh hùng liệt sĩ.",
      "Tưởng nhớ những người có công bảo vệ độc lập Tổ quốc.",
      "Tưởng nhớ người có công khai lập ra làng."
    ]
  },
  {
    numb: 28,
    question: "Nguồn gốc của việc thờ cúng tổ tiên là",
    answer: "cho rằng linh hồn người chết còn hiện hữu và ảnh hưởng đến con cháu.",
    options: [
      "tưởng nhớ những người có công bảo vệ độc lập Tổ quốc.",
      "tôn sư trọng đạo, tổ nghề.",
      "cho rằng linh hồn người chết còn hiện hữu và ảnh hưởng đến con cháu.",
      "tưởng nhớ người có công khai lập ra làng."
    ]
  },
  {
    numb: 29,
    question: "Ngày cúng giỗ trong tục thờ cúng tổ tiên là cúng vào",
    answer: "ngày mất.",
    options: [
      "ngày mất.",
      "ngày sinh.",
      "ngày hiện thần.",
      "ngày nhân thần."
    ]
  },
  {
    numb: 30,
    question: "Ai được vua Gia Long truy tặng danh hiệu “Gia Định Thành xử sĩ Sùng Đức Võ tiên sinh”?",
    answer: "Võ Trường Toản.",
    options: [
      "Võ Trường Toản.",
      "Ngô Nhân Tĩnh.",
      "Lê Quang Định.",
      "Trịnh Hoài Đức."
    ]
  },
  {
    numb: 31,
    question: "Nhận định nào sau đây không phải là ý nghĩa của thờ cúng nghề?",
    answer: "Nhớ ơn những người bảo vệ Tổ quốc.",
    options: [
      "Nhớ ơn những người bảo vệ Tổ quốc.",
      "Xin Tổ nghề phù hộ, che chở công việc của họ.",
      "Tránh những điều rủi ro cho bản thân, nghề nghiệp.",
      "Nhớ ơn người khai sáng ra nghề."
    ]
  },
  {
    numb: 32,
    question: "Gia Định trở thành Nam Kỳ lục tỉnh vào thời gian nào?",
    answer: "Từ năm 1832 - 1859",
    options: [
      "Từ năm 1832 - 1859",
      "Từ năm 1823 - 1832",
      "Từ năm 1823 - 1859",
      "Từ năm 1859 - 1975"
    ]
  },
  {
    numb: 33,
    question: "Gia Định phủ được thành lập vào năm",
    answer: "1698",
    options: [
      "1896",
      "1689",
      "1698",
      "1976"
    ]
  },
  {
    numb: 34,
    question: "Sài Gòn được đổi tên thành TP. Hồ Chí Minh vào ngày",
    answer: "02/07/1976.",
    options: [
      "07/02/1976.",
      "02/07/1976.",
      "30/04/1975.",
      "02/07/1986."
    ]
  },
  {
    numb: 35,
    question: "Lễ giỗ anh hùng dân tộc Trần Hưng Đạo diễn ra vào",
    answer: "ngày 20 tháng 08 âm lịch.",
    options: [
      "ngày 20 tháng 10 dương lịch.",
      "ngày 6 đến ngày 8 tháng 2 âm lịch.",
      "ngày 10 tháng 3 âm lịch.",
      "ngày 20 tháng 08 âm lịch."
    ]
  },
  {
    numb: 36,
    question: "Lễ giỗ Tổ nghề kim hoàn diễn ra vào",
    answer: "ngày 6 đến ngày 8 tháng 2 âm lịch.",
    options: [
      "ngày 6 đến ngày 8 tháng 3 âm lịch.",
      "ngày 6 đến ngày 8 tháng 2 âm lịch.",
      "ngày 10 tháng 3 âm lịch.",
      "ngày 20 tháng 10 âm lịch."
    ]
  },
  {
    numb: 37,
    question: "Lễ giỗ Tổ nghề kim hoàn được tổ chức tại",
    answer: "Hội quán Lệ Châu.",
    options: [
      "Hội quán Nghĩa An.",
      "Hội quán Minh Hương.",
      "Hội quán Lệ Châu.",
      "Hội quán Quảng Triệu."
    ]
  },
  {
    numb: 38,
    question: "Ai không nằm trong nhóm được mệnh danh là “Gia Định tam gia”?",
    answer: "Võ Trường Toản.",
    options: [
      "Ngô Nhân Tĩnh.",
      "Trịnh Hoài Đức.",
      "Võ Trường Toản.",
      "Lê Quang Định."
    ]
  },
  {
    numb: 39,
    question: "Công trình nào sau đây là kiến trúc Pháp hiện còn ở thành phố Hồ Chí Minh?",
    answer: "Nhà hát Thành Phố.",
    options: [
      "Nhà hát Thành Phố.",
      "Chợ Hạnh Thông Tây.",
      "Đường hầm Thủ Thiêm.",
      "Tòa nhà Bitexco."
    ]
  },
  {
    numb: 40,
    question: "Pháp làm đường xe lửa Sài Gòn – Nha Trang vào năm",
    answer: "1901.",
    options: [
      "1902.",
      "1910.",
      "1859.",
      "1901."
    ]
  },
//HK2 g=GGĐP 10
  {
    numb: 41,
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
    numb: 42,
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
    numb: 43,
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
    numb: 44,
    question: "Thành phố Hồ Chí Minh là nơi có nhiều …………năng động trong phát triển công nghiệp, tập trung nhiều ngành công nghiệp, trong đó có nhiều ngành công nghiệp ………..” Tìm hai cụm từ thích hợp điền vào chỗ trống. ",
    answer: "chính sách và trọng điểm.",
    options: [
      "chính sách và trọng điểm.",
      "chính sách và hiện đại.",
      "chương trình và trọng điểm.",
      "kế hoạch và hàng hóa."
    ]
  },

 
];