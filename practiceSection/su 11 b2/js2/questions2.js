// lịch sử 11 bài 2
let questions = [
    {
       numb: 1,
       question: "Quốc gia nào sau đây khởi đầu cuộc Cách mạng công nghiệp ở thế kỉ XVIII?",
       answer: "Anh",
       options: [
         "Pháp.",
         "Đức.",
         "I-ta-li-a",
         "Anh"
         ]
     },
     {
        numb: 2,
        question: "Từ đầu thế kỉ XIX, để đáp ứng nhu cầu ngày càng cao về nguyên liệu và nhân công các nước tư bản phương Tây đã tăng cường",
        answer: "xâm lược và mở rộng thuộc địa.",
        options: [
          "hợp tác và mở rộng đầu tư",
          "thu hút vốn đầu tư bên ngoài.",
          "xâm lược và mở rộng thuộc địa.",
          "đổi mới hình thức kinh doanh"
          ]
      },
      {
        numb: 3,
        question: "Cuối thế kỉ XVIII, chủ nghĩa tư bản",
        answer: "mở rộng ra ngoài phạm vi châu Âu.",
        options: [
          "được xác lập ở Hà Lan và Anh",
          "mở rộng ra ngoài phạm vi châu Âu.",
          "được xác lập ở I-ta-li-a và Đức.",
          "trở thành một hệ thống thế giới."
          ]
      },
      {
        numb: 4,
        question: "Cho đến cuối thế kỉ XIX, các nước đế quốc chủ nghĩa đã thiết lập hệ thống thuộc địa rộng khắp ở",
        answer: "châu Á, châu Phi và khu vực Mỹ La-tinh.",
        options: [
          "châu Âu, châu Mỹ và khu vực Tây Âu.",
          "châu Âu, châu Úc và khu vực Bắc Mỹ.",
          "châu Á, châu Phi và khu vực Mỹ La-tinh.",
          "châu Mỹ, Tây Âu và khu vực Đông Âu."
          ]
      },
      {
        numb: 5,
        question: "Đầu thế kỉ XX, quốc gia nào sau đây có hệ thống thuộc địa rộng lớn nhất?",
        answer: "Anh.",
        options: [
          "Đức.",
          "I-ta-li-a.",
          "Nhật",
          "Anh."
          ]
      },
      {
        numb: 6,
        question: "Đến thế kỉ XVIII, nhiều quốc gia ở khu vực Mỹ La-tinh đã trở thành thuộc địa của thực dân",
        answer: "Tây Ban Nha và Bồ Đào Nha",
        options: [
          "Tây Ban Nha và Bồ Đào Nha",
          "Anh và Pháp",
          "Mỹ và Đức",
          "I-ta-li-a và Nhật"
          ]
      },
      {
      numb: 7,
      question: "Cuối thế kỉ XIX - đầu thế kỉ XX, ở nhiều nước tư bản, sự tập trung sản xuất và tập trung nguồn vốn lớn đã dẫn đến sự xuất hiện của các",
      answer: "tổ chức độc quyền.",
      options: [
        "thương hội.",
        "phường hội.",
        "công trường thủ công",
        "tổ chức độc quyền."
        ]
       },
       {
        numb: 8,
        question: "Cuối thế kỉ XIX - đầu thế kỉ XX, các nước tư bản chuyển sang giai đoạn",
        answer: "đế quốc chủ nghĩa",
        options: [
          "tự do cạnh tranh.",
          "đế quốc chủ nghĩa",
          "chủ nghĩa tư bản hiện đại.",
          "chủ nghĩa dân tộc cực đoan"
          ]
       },
       {
        numb: 9,
        question: "Nội dung nào sau đây phản ánh đúng đặc trưng của chủ nghĩa đế quốc",
        answer: "Xuất hiện những tổ chức độc quyền có vai trò quyết định trong sinh hoạt kinh tế.",
        options: [
          "Chủ nghĩa tư bản độc quyền nhà nước và cao hơn là độc quyền xuyên quốc gia",
          "Xuất hiện những tổ chức độc quyền có vai trò quyết định trong sinh hoạt kinh tế.",
          "Lực lượng lao động có những chuyển biến về cơ cấu, trình độ chuyên môn, nghiệp vụ",
          "Có sức sản xuất phát triển cao trên cơ sở thành tựu của cách mạng khoa học - công nghệ"
          ]
       },
       {
        numb: 10,
        question: "Sự phát triển của chủ nghĩa tư bản diễn ra theo trình tự nào sau đây?",
        answer: "CNTB tự do cạnh tranh => CNTB độc quyền => CNTB hiện đại",
        options: [
          "CNTB tự do cạnh tranh => CNTB độc quyền => CNTB hiện đại",
          "CNTB độc quyền => CNTB hiện đại => CNTB tự do cạnh tranh",
          "CNTB tự do cạnh tranh => CNTB hiện đại => CNTB độc quyền.",
          "CNTB hiện đại => CNTB độc quyền => CNTB tự do cạnh tranh."
          ]
       },
       {
        numb: 11,
        question: "Các tổ chức độc quyền ra đời ở các nước tư bản (từ cuối thế kỉ XIX đầu thế kỉ XX) là sự liên minh giữa",
        answer: "các nhà tư bản lớn",
        options: [
          "vô sản và tư sản.",
          "chủ nô và tư sản",
          "các nhà tư bản lớn",
          "địa chủ và quý tộc"
          ]
       },
       {
        numb: 12,
        question: "Nội dung nào sau đây tạo cơ sở cho bước chuyển biến của chủ nghĩa tư bản từ tự do cạnh tranh sang giai đoạn độc quyền?",
        answer: "Sự phát triển của các tổ chức độc quyền.",
        options: [
          "Quá trình hợp tác ở các nước tư bản.",
          "Sự phát triển của các tổ chức độc quyền.",
          "Nhiều trung tâm kinh tế - tài chính ra đời.",
          "Sự ra đời nhiều tổ chức liên kết khu vực"
          ]
       },
       {
        numb: 13,
        question: "Hình thức tiêu biểu của các tổ chức độc quyền ở Đức và Pháp vào cuối thế kỉ XIX - đầu thế kỉ XX, là",
        answer: "Các-ten, Xanh-đi-ca",
        options: [
          "Tơ-rớt, Dai-bát-xư",
          "Các-ten, Xanh-đi-ca",
          "Con-sen, Tơ-rớt.",
          "Dai-bát-xư, Con-sen."
          ]
       },
       {
        numb: 14,
        question: "Các hình thức của tổ chức độc quyền ở Mỹ (ra đời từ cuối thế kỉ XIX đầu thế kỉ XX) có tên gọi là",
        answer: "Tơ-rớt.",
        options: [
          "Các-ten",
          "Tơ-rớt.",
          "Đai-bát-xưi",
          "Xanh-đi-ca."
          ]
       },
       {
        numb: 15,
        question: "Vào cuối thế kỉ XIX - đầu thế kỉ XX, đế quốc nào dưới đây được mệnh danh là “đế quốc mà Mặt Trời không bao giờ lặn”?",
        answer: "Anh.",
        options: [
          "Pháp.",
          "Đức",
          "Anh.",
          "Mĩ."
          ]
       },
   ]