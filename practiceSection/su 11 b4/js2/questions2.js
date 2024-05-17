// lịch sử 11 bài 4
let questions = [
     {
        numb: 1,
        question: "Từ 1991, nước Cộng hòa Cu-ba đã phải đối mặt với nhiều khó khăn thách thức, đặc biệt là",
        answer: "lệnh cấm vận kéo dài của Mỹ và phương Tây",
        options: [
          "sự chống phá của các thế lực thù địch trong nước.",
          "chính quyền độc tài thân Mĩ chưa bị lật đổ",
          "con đường xã hội chủ nghĩa chưa có tính ưu việt",
          "lệnh cấm vận kéo dài của Mỹ và phương Tây"
          ]
      },
      {
        numb: 2,
        question: "Từ năm 1978, Trung Quốc bắt đầu tiến hành",
        answer: "công cuộc cải cách - mở cửa.",
        options: [
          "công nghiệp hóa, hiện đại hóa.",
          "công cuộc cải cách - mở cửa.",
          "xây dựng chủ nghĩa xã hội.",
          "đường lối “Ba ngọn cờ hồng“"
          ]
      },
      {
        numb: 3,
        question: "Người đề xướng và lãnh đạo đường lối cải cách – mở cửa của Trung Quốc?",
        answer: "Đặng Tiểu Bình",
        options: [
          "Hoa Quốc Phong",
          "Diệp Kiến Hoa",
          "Đặng Tiểu Bình",
          "Giang Trạch Dân."
          ]
      },
      {
        numb: 4,
        question: "Năm 2010, quốc gia nào sau đây có nền kinh tế đứng thứ hai thế giới?",
        answer: "Trung Quốc. ",
        options: [
          "Liên Xô.",
          "Nhật Bản.",
          "Việt Nam",
          "Trung Quốc. "
          ]
      },
      {
        numb: 5,
        question: "Trọng tâm của công cuộc cải cách – mở cửa ở Trung Quốc (từ tháng 12 - 1978) là",
        answer: "lấy phát triển kinh tế làm trọng tâm",
        options: [
          "lấy phát triển kinh tế làm trọng tâm",
          "lấy cải tổ chính trị làm trọng tâm",
          "chú trọng phát triển văn hóa, giáo dục",
          "tập trung cải cách triệt để về kinh tế."
          ]
      },
      {
        numb: 6,
        question: "Nội dung nào sau đây phản ánh không đúng đường lối mới trong công cuộc cải cách mở cửa ở Trung Quốc từ năm 1978?",
        answer: "Thực hiện đường lối “Ba ngọn cờ hồng”.",
        options: [
          "Lấy phát triển kinh tế làm trung tâm.",
          "Tiến hành cải cách và mở cửa",
          "Xây dựng kinh tế thị trường xã hội chủ nghĩa",
          "Thực hiện đường lối “Ba ngọn cờ hồng”."
          ]
      },
      {
        numb: 7,
        question: "Hiểu như thế nào về “Chủ nghĩa xã hội mang màu sắc Trung Quốc” ?",
        answer: "",
        options: [
          "Là một mô hình chủ nghĩa xã hội hoàn toàn mới, không dựa trên những nguyên lí chung mà chủ nghĩa Mác - Lênin đã đề ra.",
          "Mô hình chủ nghĩa xã hội được xây dựng trên nền tảng thống nhất, đoàn kết giữa các đảng phái chính trị.",
          "Là mô hình chủ nghĩa xã hội được xây dựng trên cơ sở thành lập các công xã nhân dân - đơn vị kinh tế, đồng thời là đơn vị chính trị căn bản.",
          "Là mô hình chủ nghĩa xã hội được xây dựng trên cơ sở những nguyên lí chung của chủ nghĩa Mác - Lênin và những đặc điểm lịch sử cụ thể của Trung Quốc."
          ]
      },
      {
        numb: 8,
        question: "Điểm nổi bật của nền kinh tế Trung Quốc trong thời kì đổi mới (1978 - 2000) là",
        answer: "nền kinh tế thị trường định hướng xã hội chủ nghĩa",
        options: [
          "nền kinh tế kế hoạch hoá tập trung",
          "nền kinh tế thị trường tự do cạnh tranh.",
          "nền kinh tế nông nghiệp- công nghiệp tự cấp tự túc",
          "nền kinh tế thị trường định hướng xã hội chủ nghĩa"
          ]
      },
      {
        numb: 9,
        question: "Ngày 15-10-2003 ở Trung Quốc đã diễn ra sự kiện gì ?",
        answer: "Phóng thành công tàu “Thần Châu” 5.",
        options: [
          "Thử thành công bom nguyên tử.",
          "Phóng thành công vệ tinh nhân tạo.",
          "Phóng thành công tàu “Thần Châu” 5.",
          "Phóng thành công tàu “Thần Châu” 3 với chế độ tự động."
          ]
      },
      {
        numb: 10,
        question: "Hiện nay còn bộ phận lãnh thổ nào của Trung Quốc nhưng vẫn nằm ngoài sự kiểm soát của nước này?",
        answer: "Đài Loan.",
        options: [
          "Hồng Kông.",
          "Tây Tạng.",
          "Đài Loan.",
          "Ma Cao."
          ]
      },
      {
        numb: 11,
        question: "Điểm giống nhau cơ bản giữa cuộc cải cách mở cửa ở Trung Quốc (1978) và công cuộc đổi mới ở Việt Nam (1986) là gì?",
        answer: "Lấy phát triển kinh tế làm trọng tâm.",
        options: [
          "Lấy cải tổ chính trị làm trọng tâm.",
          "Lấy phát triển kinh tế làm trọng tâm.",
          "Chỉ chú trọng phát triển văn hóa, giáo dục.",
          "Tập trung cải cách triệt để về kinh tế."
          ]
      },
      {
        numb: 12,
        question: "Nội dung nào sau đây phản ánh đúng và đầy đủ về công cuộc đổi mới đất nước của Đảng Cộng sản Việt Nam được xác định trong Đại hội đại biểu toàn quốc lần VI (12- 1986)?",
        answer: "Đổi mới là vấn đề cấp bách và phù hợp với xu thế chung của thời đại.",
        options: [
          "Đổi mới để khắc phục sai lầm, đưa đất nước vượt qua khủng hoảng",
          "Đổi mới là cần thiết để đẩy cách mạng xã hội chủ nghĩa tiến lên.",
          "Đổi mới để tiếp tục phát triển, vươn lên theo kịp xu thế của thời đại.",
          "Đổi mới là vấn đề cấp bách và phù hợp với xu thế chung của thời đại."
          ]
      },
      {
        numb: 13,
        question: "Từ sự sụp đổ của chủ nghĩa xã hội ở Liên Xô và các nước Đông Âu, Việt Nam rút ra bài học gì cho công cuộc xây dựng chủ nghĩa xã hội hiện nay?",
        answer: "Duy trì sự lãnh đạo của Đảng Cộng sản, không chấp nhận đa nguyên chính trị",
        options: [
          "Cải tổ, đổi mới về kinh tế - xã hội trước tiên, sau đó mới cải tổ về chính trị",
          "Duy trì sự lãnh đạo của Đảng Cộng sản, không chấp nhận đa nguyên chính trị",
          "Thực hiện chính sách “đóng cửa” nhằm hạn chế ảnh hưởng từ bên ngoài",
          "Xây dựng nền kinh tế thị trường tư bản chủ nghĩa để phát triển kinh tế"
          ]
      },
      {
        numb: 14,
        question: "Từ năm 1986 đến nay, Việt Nam",
        answer: "tiến hành công cuộc đổi mới đất nước.",
        options: [
          "tiến hành công cuộc đổi mới đất nước.",
          "đấu tranh chống lại sự cấm vận của Mĩ.",
          "lâm vào suy thoái, khủng hoảng nghiêm trọng.",
          "bước vào thời kì xây dựng chủ nghĩa cộng sản."
          ]
      },
      {
        numb: 15,
        question: "Nội dung nào sau đây không phải là điểm tương đồng giữa cuộc cải cách -mở cửa ở Trung Quốc (từ 1978) và công cuộc đổi mới đất nước ở Việt Nam (từ 1986)?",
        answer: "",
        options: [
          "Xây dựng nền kinh tế thị trường xã hội chủ nghĩa.",
          "Mở rộng quan hệ hợp tác với các nước trên thế giới.",
          "Củng cố và nâng cao vai trò lãnh đạo của Đảng cộng sản",
          "Lấy cải tổ chính trị làm trọng tâm; thực hiện đa nguyên, đa đảng"
          ]
      },
    ]
    