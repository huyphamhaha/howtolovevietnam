// creating an array and passing the number, questions, options, and answers
// GDĐP 11 hk1
let questions = [
{
  numb: 1,
  question: "Ý nào sau đây không phải là vai trò của ngành thương mại?",
  answer: "Không mở rộng hợp tác với các vùng và các nước khác trên thế giới.",
  options: [
    "Thúc đẩy quá trình phân công lao động xã hội.",
    "Đẩy mạnh chuyên môn hóa và hợp tác sản xuất.",
    "Tăng giá trị xuất, nhập khẩu, thu hút vốn đầu tư nước ngoài.",
    "Không mở rộng hợp tác với các vùng và các nước khác trên thế giới."
    ]
},
{
  numb: 2,
  question: "Nhận định nào sau đây không phải là vai trò của nội thương thành phố Hồ Chí Minh?",
  answer: "Duy trì tập quán tiêu dùng cũ.",
  options: [
    "Góp phần ổn định thị trường trong thành phố.",
    "Thúc đẩy sản xuất nội địa phát triển.",
    "Duy trì tập quán tiêu dùng cũ.",
    "Góp phần hình thành thị trường thống nhất."
  ]
},
{
  numb: 3,
  question: "Ý nào sau đây là vai trò của ngoại thương Thành phố Hồ Chí Minh?",
  answer: "Đáp ứng được nhu cầu xuất – nhập khẩu hàng hóa, nguyên liệu, công nghệ.",
  options: [
    "Đáp ứng được nhu cầu xuất – nhập khẩu hàng hóa, nguyên liệu, công nghệ.",
    "Thúc đẩy sản xuất nội địa phát triển.",
    "Góp phần hình thành thị trường thống nhất.",
    "Góp phần ổn định thị trường trong thành phố."
  ]
},
{
  numb: 4,
  question: "Sinh thời, Chủ tịch Hồ Chí Minh khẳng định: “Thương nghiệp là ….. giữa nông nghiệp và công nghiệp. Thương nghiệp đưa hàng đến nông thôn phục vụ nông dân, thương nghiệp lại đưa nông sản, nguyên liệu cho thành thị tiêu dùng.” Hãy chọn cụm từ đúng nhất điền vào chỗ trống:",
  answer: "cái khâu.",
  options: [
    "bàn đạp.",
    "cầu nối.",
    "cái khâu.",
    "điểm tựa."
  ]
},
{
  numb: 5,
  question: "Một trong những yếu tố quan trọng góp phần làm cho thành phố Hồ Chí Minh trở thành trung tâm thương mại lớn nhất cả nước là do Thành phố Hồ Chí Minh nằm ở",
  answer: "vùng kinh tế trọng điểm phía Nam.",
  options: [
    "vùng kinh tế trọng điểm phía Nam.",
    "vùng kinh tế trọng điểm Tây Nam Bộ.",
    "vùng kinh tế trọng điểm phía Bắc.",
    "vùng kinh tế trọng điểm miền Trung."
  ]
},
{
  numb: 6,
  question: "Thành phố Hồ Chí Minh nằm ở đầu mối trung chuyển hàng hóa và nguyên liệu giữa các tỉnh vùng",
  answer: "Tây Nguyên và Đồng bằng sông Cửu Long.",
  options: [
    "Tây Nguyên và Đồng bằng sông Hồng.",
    "Bắc Trung Bộ và Đồng bằng sông Cửu Long.",
    "Tây Nguyên và Đồng bằng sông Cửu Long.",
    "Tây Nguyên và Bắc Trung Bộ."
  ]
},
{
  numb: 7,
  question: "Cơ chế chính sách: là nhân tố	để phát triển ngành thương mại, tạo môi trường thuận lợi thúc đẩy đầu tư thương mại phát triển, tạo hành lang	quan trọng để thừa nhận các hình thức giao dịch thương mại và bảo vệ người tiêu dùng. Hãy chọn cụm từ đúng nhất điền vào chỗ trống:",
  answer: "quan trọng, pháp lí.",
  options: [
    "quan trọng, pháp luật.",
    "quan trọng, pháp lí.",
    "chủ đạo, pháp lí.",
    "cơ sở và pháp luật."
  ]
},
{
  numb: 8,
  question: "Ở thành phố Hồ Chí Minh mặt hàng nhập khẩu chủ yếu là",
  answer: "máy móc, thiết bị, nguyên nhiên liệu.",
  options: [
    "dệt may, nông sản, thủy hải sản.",
    "máy tính, điện tử và linh kiện.",
    "máy móc, thiết bị, nguyên nhiên liệu.",
    "đồ gỗ, may mặc, xe ô tô."
  ]
},
{
  numb: 9,
  question: "Thành phố Hồ Chí Minh đứng thứ mấy ở nước ta về ứng dựng khoa học công nghệ trong ngành thương mại?",
  answer: "Thứ nhất.",
  options: [
    "Thứ nhất.",
    "Thứ ba.",
    "Thứ tư.",
    "Thứ hai."
  ]
},
{
  numb: 10,
  question: "Mặt hàng xuất khẩu chiếm tỉ trọng lớn ở thành phố Hồ Chí Minh là",
  answer: "máy tính, điện tử và linh kiện.",
  options: [
    "dệt may, nông sản, thủy hải sản.",
    "máy tính, điện tử và linh kiện.",
    "máy móc, thiết bị, nguyên nhiên liệu.",
    "dầu thô, gạo, cà phê."
  ]
},
{
  numb: 11,
  question: "Thành phố Hồ Chí Minh đặt chỉ tiêu cho ngành thương mại điện tử đến năm 2025 phải đạt",
  answer: "25% GRDP.",
  options: [
    "25% GRDP.",
    "15% GRDP.",
    "50% GRDP.",
    "35% GRDP."
  ]
},
{
  numb: 12,
  question: "Năm 2021, ngành nội thương ở thành phố Hồ Chí Minh chiếm bao nhiêu % so với cả nước?",
  answer: "13,2%.",
  options: [
    "12,3%.",
    "13,2%.",
    "23,2%.",
    "1,32%."
  ]
},
{
  numb: 13,
  question: "Chợ nào sau đây không phải là chợ đầu mối nông sản ở thành phố Hồ Chí Minh?",
  answer: "Kim Biên.",
  options: [
    "Thủ Đức.",
    "Kim Biên.",
    "Bình Điền.",
    "Hóc Môn."
  ]
},
{
  numb: 14,
  question: "Hệ thống mạng lưới các cơ sở nội thương	thành phố, cơ cấu đa dạng và có nhiều thay đổi. Hãy chọn cụm từ đúng nhất điền vào chỗ trống:",
  answer: "phủ khắp.",
  options: [
    "phủ kín.",
    "dày đặc.",
    "phủ khắp.",
    "rộng rãi."
  ]
},
{
  numb: 15,
  question: "Quốc gia nào không phải là thị trường xuất khẩu chủ yếu của thành phố Hồ Chí Minh?",
  answer: "Nga.",
  options: [
    "Trung Quốc.",
    "Nga.",
    "Hoa Kì.",
    "Hàn Quốc."
  ]
},


]