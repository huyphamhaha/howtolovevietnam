// creating an array and passing the number, questions, options, and answers
// GDĐP 11 hk1
let questions = [

{
  numb: 61,
  question: "Mặt hàng nào sau đây chiếm tỉ trọng lớn nhất trong cơ cấu hàng xuất khẩu Thành phố Hồ Chí Minh?",
  answer: "Máy tính, điện tử và linh kiện.",
  options: [
    "Công nghiệp nhẹ, tiểu thủ công nghiệp.",
    "Nông - lâm - thủy sản.",
    "Công nghiệp nặng và khoáng sản.",
    "Máy tính, điện tử và linh kiện."
  ]
},
{
  numb: 62,
  question: "Từ khi Việt Nam gia nhập WTO, vai trò của thành phần kinh tế nào sau đây ở Thành phố Hồ Chí Minh phát triển nhanh nhất?",
  answer: "Kinh tế có vốn đầu tư nước ngoài.",
  options: [
    "Kinh tế cá thể.",
    "Kinh tế tập thể.",
    "Kinh tế tư nhân.",
    "Kinh tế có vốn đầu tư nước ngoài."
  ]
},
{
  numb: 63,
  question: "Giai đoạn 2010 – 2021, xuất khẩu của Thành phố Hồ Chí Minh ",
  answer: "Tăng liên tục, có giá trị thấp hơn so với nhập khẩu.",
  options: [
    "Liên tục có giá trị thấp hơn so với nhập khẩu.",
    "Có mặt hàng chủ lực là các sản phẩm nông sản.",
    "Đã có năm đạt giá trị cao hơn so với nhập khẩu.",
    "Tăng liên tục, có giá trị thấp hơn so với nhập khẩu."
  ]
},
{
  numb: 64,
  question: "Kim ngạch xuất, nhập khẩu của của Thành phố Hồ Chí Minh liên tục tăng chủ yếu do",
  answer: "sự phát triển của nền kinh tế thành phố cùng những đổi mới trong cơ chế quản lí.",
  options: [
    "thị trường thế giới ngày càng mở rộng.",
    "đa dạng hóa các đối tượng tham gia hoạt động xuất, nhập khẩu.",
    "tăng cường nhập khẩu dây chuyền máy móc, thiết bị toàn bộ và hàng tiêu dùng.",
    "sự phát triển của nền kinh tế thành phố cùng những đổi mới trong cơ chế quản lí."
  ]
},
{
  numb: 65,
  question: "Khu vực chiếm tỉ trọng lớn nhất trong cơ cấu tổng mức bán lẻ hàng hoá theo giá hiện hành và phân theo thành phần kinh tế của Thành phố Hồ Chí Minh là",
  answer: "khu vực ngoài Nhà nước.",
  options: [
    "khu vực Nhà nước.",
    "khu vực ngoài Nhà nước.",
    "khu vực có vốn đầu tư nước ngoài.",
    "khu vực tư nhân, tập thể."
  ]
},
{
  numb: 66,
  question: "Ý nào sau đây nói về vai trò của cơ chế chính sách đối với sự phát triển của ngành thương mại ở Thành phố Hồ Chí Minh?",
  answer: "Tạo hành lang pháp lí quan trọng trong giao dịch thương mại và bảo vệ người tiêu dùng.",
  options: [
    "Tạo hành lang pháp lí quan trọng trong giao dịch thương mại và bảo vệ người tiêu dùng.",
    "Các ngành sản xuất vật chất thúc đẩy giao lưu trao đổi hàng hóa.",
    "Tạo sức mua lớn, mở rộng quy mô ngành thương mại.",
    "Tạo mối liên kết tốt hơn giữa thương mại - các ngành sản xuất – dịch vụ tiêu dùng."
  ]
},
{
  numb: 67,
  question: "Ý nào sau đây không phải là vai trò của ngành thương mại ở Thành phố Hồ Chí Minh?",
  answer: "Tạo ra nguồn hàng xuất khẩu.",
  options: [
    "Thúc đẩy quá trình phân công lao động xã hội và chuyên môn hóa.",
    "Thúc đẩy các ngành kinh tế khác phát triển.",
    "Thu hút vốn đầu tư, mở rộng hợp tác.",
    "Tạo ra nguồn hàng xuất khẩu."
  ]
},
{
  numb: 68,
  question: "Hiện nay, Thành phố Hồ Chí Minh đang tập trung chuyển dịch cơ cấu hàng hóa xuất khẩu theo hướng nào sau đây?",
  answer: "Khuyến khích sản xuất và xuất khẩu sản phẩm công nghệ cao.",
  options: [
    "Khuyến khích sản xuất và xuất khẩu sản phẩm công nghệ cao.",
    "Trung Quốc là thị trường xuất khẩu chủ lực.",
    "Nông sản là mặt hàng xuất khẩu chính của thành phố.",
    "Đẩy mạnh xuất khẩu dệt may, da giày."
  ]
},
{
  numb: 69,
  question: "Hiện nay, Thành phố Hồ Chí Minh có bao nhiêu chợ đầu mối?",
  answer: "3.",
  options: [
    "2.",
    "3.",
    "4.",
    "5."
  ]
},
{
  numb: 70,
  question: "Nhận xét nào sau đây đúng với nguồn vốn đầu tư ở Thành phố Hồ Chí Minh?",
  answer: "Nguồn vốn đầu tư ở khu vực ngoài nhà nước chiếm tỉ trọng cao nhất.",
  options: [
    "Nguồn vốn đầu tư ở khu vực nhà nước chiếm tỉ trọng thấp nhất.",
    "Khu vực đầu tư trực tiếp của nước ngoài chiếm tỉ trọng cao nhất.",
    "Nguồn vốn đầu tư ở khu vực ngoài nhà nước chiếm tỉ trọng cao nhất.",
    "Nguồn vốn đầu tư ở khu vực nhà nước tăng liên tục."
  ]
},
{
  numb: 71,
  question: "Tính đến năm 2021, thành phần kinh tế có giá trị xuất khẩu hàng hóa nhiều nhất Thành phố Hồ Chí Minh là",
  answer: "đầu tư nước ngoài.",
  options: [
    "nhà nước.",
    "tập thể.",
    "ngoài nhà nước.",
    "đầu tư nước ngoài."
  ]
},
{
  numb: 72,
  question: "Ý nào sau đây không đúng khi nói về vai trò của thu hút đầu tư nước ngoài tại Thành phố Hồ Chí Minh?",
  answer: "Hướng dẫn tiêu dùng, tạo ra tập quán tiêu dùng mới.",
  options: [
    "Bổ sung nguồn vốn để phát triển kinh tế.",
    "Thúc đẩy quá trình chuyển dịch cơ cấu kinh tế.",
    "Hướng dẫn tiêu dùng, tạo ra tập quán tiêu dùng mới.",
    "Nâng cao trình độ công nghệ."
  ]
},
{
  numb: 73,
  question: "Ngành nghề/ lĩnh vực kinh tế nào ở Thành phố Hồ Chí Minh có số vốn đầu tư nước ngoài tăng về tỉ trọng?",
  answer: "Công nghiệp chế biến, khoa học công nghệ.",
  options: [
    "Hoạt động kinh doanh bất động sản.",
    "Công nghiệp chế biến, khoa học công nghệ.",
    "Khai thác khoáng sản.",
    "Công nghiệp năng lượng."
  ]
},
{
  numb: 74,
  question: "Tính đến 2023, Thành phố Hồ Chí Minh đứng thứ mấy cả nước về thu hút vốn đầu tư nước ngoài?",
  answer: "1.",
  options: [
    "1.",
    "2.",
    "3.",
    "4."
  ]
},
{
  numb: 75,
  question: "Luật đầu tư được ban hành lần đầu tiên ở Việt Nam vào năm",
  answer: "1987.",
  options: [
    "1986.",
    "1987.",
    "1996.",
    "1997."
  ]
},
{
  numb: 76,
  question: "Đâu không phải là hạn chế của Thành phố Hồ Chí Minh trong việc cản trở thu hút đầu tư nước ngoài?",
  answer: "Thiếu lao động có tay nghề.",
  options: [
    "Kết nối hạ tầng chưa hoàn thiện.",
    "Quĩ đất thu hẹp.",
    "Thủ tục, qui trình đầu tư còn nhiều vướng mắc.",
    "Thiếu lao động có tay nghề."
  ]
},
{
  numb: 77,
  question: "Ngành nào sau đây không thuộc nhóm ngành công nghiệp trọng điểm ở  Thành phố Hồ Chí Minh?",
  answer: "Điện năng.",
  options: [
    "Cơ khí.",
    "Điện năng.",
    "Điện tử - công nghệ thông tin.",
    "Chế biến lương thực – thực phẩm."
  ]
},
{
  numb: 78,
  question: "Địa phương nào sau đây có lượng phát thải khí nhà kính lớn nhất nước ta?",
  answer: "Thành phố Hồ Chí Minh.",
  options: [
    "Hà Nội.",
    "Đà Nẵng.",
    "Thành phố Hồ Chí Minh.",
    "Hải Phòng."
  ]
},
{
  numb: 79,
  question: "Ngành nào sau đây chiếm tỉ trọng cao nhất trong cơ cấu GRDP của Thành phố Hồ Chí Minh?",
  answer: "Dịch vụ.",
  options: [
    "Công nghiệp – xây dựng.",
    "Dịch vụ.",
    "Nông nghiệp.",
    "thuế sản phẩm trừ trợ cấp sản phẩm."
  ]
},
{
  numb: 80,
  question: "Những biện pháp bảo vệ và cải tạo môi trường là gì? 1. Hạn chế sự tăng nhanh dân số. 2. Sử dụng có hiệu quả các nguồn tài nguyên. 3. Tăng cường trồng rừng ở khắp mọi nơi. 4. Bảo vệ các loài sinh vật. 5. Kiểm soát và giảm thiểu các nguồn chất thải gây ô nhiễm. 6. Tăng cường xây dựng các công trình thuỷ điện. Phương án đúng là:",
  answer: "1, 2, 4, 5.",
  options: [
    "1, 2, 4, 6.",
    "1, 2, 4, 5.",
    "2, 3, 4, 6.",
    "1, 3, 4, 6."
  ]
},
{
  numb: 81,
  question: "Việc phát triển hoạt động du lịch thiếu kiểm soát có thể ........ làm xói mòn đất, làm biến động các nơi cư trú, đe dọa các loại động thực vật hoang dã. Tìm từ thích hợp điền vào chỗ trống:",
  answer: "tác động.",
  options: [
    "ảnh hưởng.",
    "gây hậu quả.",
    "tác động.",
    "dẫn tới."
  ]
},
{
  numb: 82,
  question: "Hiện nay, nguồn nước ngọt ở Thành phố Hồ Chí Minh bị ô nhiễm nghiêm trọng, nguyên nhân chủ yếu là do",
  answer: "chất thải công nghiệp chưa qua xử lí.",
  options: [
    "chất thải công nghiệp chưa qua xử lí.",
    "chất thải trong sản xuất nông nghiệp.",
    "chất thải từ hoạt động tiểu thủ công nghiệp.",
    "chất thải y tế."
  ]
},
{
  numb: 83,
  question: "Ngành xây dựng chủ yếu gây ra ô nhiễm",
  answer: "không khí.",
  options: [
    "ánh sáng.",
    "tiếng ồn.",
    "không khí.",
    "nguồn nước."
  ]
},
{
  numb: 84,
  question: "Nội dung nào sau đây không phản ánh đúng giải pháp bảo vệ môi trường không khí?",
  answer: "Xả khí thải, chất độc hại chưa qua xử lí kĩ thuật ra môi trường.",
  options: [
    "Cảnh báo kịp thời tình trạng ô nhiễm môi trường không khí.",
    "Nâng cao ý thức trách nhiệm bảo vệ môi trường của dân cư.",
    "Xả khí thải, chất độc hại chưa qua xử lí kĩ thuật ra môi trường.",
    "Thực hiện giám sát, công bố chất lượng môi trường không khí."
  ]
},
{
  numb: 85,
  question: "Giải pháp để hạn chế tác động của ngành công nghiệp nặng đến môi trường là",
  answer: "Sử dụng tiết kiệm và hiệu quả nguồn năng lượng hóa thạch.",
  options: [
    "Sử dụng tiết kiệm và hiệu quả nguồn năng lượng hóa thạch.",
    "Nâng cao ý thức trách nhiệm bảo vệ môi trường của dân cư.",
    "Khuyến khích sử dụng các phương tiện giao thông công cộng.",
    "Xây dựng đô thị sinh thái."
  ]
},
{
  numb: 86,
  question: "Ở Thành phố Hồ Chí Minh, các hoạt động kinh tế đã gây ra ô nhiễm môi trường đáng chú ý nhất là",
  answer: "ô nhiễm nguồn nước và không khí.",
  options: [
    "ô nhiễm nguồn nước và tiếng ồn.",
    "ô nhiễm nguồn nước và không khí.",
    "ô nhiễm ánh sáng và không khí.",
    "ô nhiễm đất và nước."
  ]
},
{
  numb: 87,
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
  numb: 88,
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
  numb: 89,
  question: "Ý nào sau đây không phải là nguyên nhân gây ô nhiễm môi trường do hoạt động du lịch ở Thành phố Hồ Chí Minh?",
  answer: "sử dụng phân bón, thuốc bảo vệ thực vật.",
  options: [
    "sử dụng phân bón, thuốc bảo vệ thực vật.",
    "xả khí thải của động cơ ô tô, xe máy.",
    "rác thải từ sự thiếu ý thức của du khách.",
    "nước thải từ khu du lịch chưa xử lí."
  ]
},
{
  numb: 90,
  question: "Ở Thành phố Hồ Chí Minh, ngành bưu chính viễn thông gây ô nghiễm môi trường là do",
  answer: "góp phần vào việc sản xuất các thiết bị điện tử, máy tính.",
  options: [
    "hàng hóa di chuyển nhiều.",
    "nhiều trạm trung chuyển hàng hóa ra đời.",
    "góp phần vào việc sản xuất các thiết bị điện tử, máy tính.",
    "sử dụng nhiều diện tích mặt bằng."
  ]
},

]