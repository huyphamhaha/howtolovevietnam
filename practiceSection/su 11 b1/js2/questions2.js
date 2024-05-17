// lịch sử 11 bài 1
let questions = [
    {
       numb: 1,
       question: "Một trong những nhiệm vụ của các cuộc cách mạng tư sản từ giữa thế kỉ XVI đến đầu thế kỉ XX) là",
       answer: "xóa bỏ phong kiến, xác lập nền dân chủ tư sản.",
       options: [
         "xóa bỏ phong kiến, xác lập nền dân chủ tư sản.",
         "đưa giai cấp công nhân lên nắm chính quyền.",
         "xóa bỏ triệt để những mâu thuẫn trong xã hội.",
         "xác lập sự thống trị của chủ nghĩa thực dân."
         ]
     },
     {
        numb: 2,
        question: "Một trong những mục tiêu của các cuộc cách mạng tư sản từ giữa thế kỉ XVI đến đầu thế kỉ XX) là",
        answer: "mở đường cho tư bản chủ nghĩa phát triển.",
        options: [
          "mở đường cho tư bản chủ nghĩa phát triển.",
          "đưa giai cấp công nhân lên nắm chính quyền.",
          "xóa bỏ triệt để những mâu thuẫn trong xã hội.",
          "xác lập sự thống trị của chủ nghĩa thực dân."
          ]
      },
      {
        numb: 3,
        question: "Dù có những nguyên nhân bùng nổ, hình thức, diễn biến và kết quả khác nhau, song các cuộc cách mạng tư sản thời cận đại đều giống nhau về",
        answer: "mục tiêu chung (xóa bỏ những rào cản kìm hãm sự phát triển của chủ nghĩa tư bản).",
        options: [
          "mục tiêu chung (xóa bỏ những rào cản kìm hãm sự phát triển của chủ nghĩa tư bản).",
          "lực lượng lãnh đạo (liên minh giữa giai cấp tư sản với tầng lớp quý tộc tư sản hóa).",
          "nhiệm vụ cách mạng (xóa chế độ nô lệ, mở đường cho chủ nghĩa tư bản phát triển).",
          "động lực chính của cách mạng (giai cấp tư sản và tầng lớp quý tộc tư sản hóa)."
          ]
      },
      {
        numb: 4,
        question: "Cách mạng tư sản Pháp (cuối thế kỉ XVIII) đặt dưới sự lãnh đạo của",
        answer: "giai cấp tư sản.",
        options: [
          "giai cấp tư sản và quý tộc mới.",
          "giai cấp tư sản và chủ nô.",
          "giai cấp tư sản.",
          "giai cấp vô sản"
          ]
      },
      {
        numb: 5,
        question: "Trong các cuộc cách mạng tư sản từ giữa thế kỉ XVI đến đầu thế kỉ XX, động lực quyết định thắng lợi của cách mạng là",
        answer: "quần chúng nhân dân.",
        options: [
          "quý tộc mới.",
          "tư sản.",
          "chủ nô.",
          "quần chúng nhân dân."
          ]
      },
      {
        numb: 6,
        question: "Nội dung nào sau đây là tiền đề về kinh tế dẫn đến sự bùng nổ và thắng lợi của các cuộc cách mạng tư sản từ giữa thế kỉ XVI đến đầu thế kỉ XX?",
        answer: "Những rào cản của chế độ phong kiến kìm hãm kinh tế tư bản chủ nghĩa.",
        options: [
          "Quan hệ sản xuất tư bản chủ nghĩa thay thế hoàn toàn quan hệ phong kiến",
          "Giai cấp tư sản và đồng minh có thế lực rất lớn cả về kinh tế và chính trị",
          "Những rào cản của chế độ phong kiến kìm hãm kinh tế tư bản chủ nghĩa.",
          "Triết học Ánh sáng ra đời, thức tĩnh, dọn đường cho quần chúng đấu tranh."
          ]
      },
      {
        numb: 7,
        question: "Nội dung nào sau đây là tiền đề về chính trị dẫn đến sự bùng nổ và thắng lợi của các cuộc cách mạng tư sản từ giữa thế kỉ XVI đến đầu thế kỉ XX?",
        answer: "Chế độ cai trị của nhà nước phong kiến, gây ra sự bất mãn trong xã hội.",
        options: [
          "Quan hệ sản xuất tư bản chủ nghĩa thay thế hoàn toàn quan hệ phong kiến.",
          "Giai cấp tư sản và đồng minh có thế lực rất lớn cả về kinh tế và chính trị.",
          "Triết học Ánh sáng ra đời, thức tĩnh, dọn đường cho quần chúng đấu tranh.",
          "Chế độ cai trị của nhà nước phong kiến, gây ra sự bất mãn trong xã hội."
          ]
      },
      {
        numb: 8,
        question: "Nội dung nào sau đây là tiền đề về xã hội dẫn đến sự bùng nổ và thắng lợi của các cuộc cách mạng tư sản từ giữa thế kỉ XVI đến đầu thế kỉ XX?",
        answer: "Mâu thuẫn giữa giai cấp tư sản với quý tộc phong kiến ngày càng sâu sắc.",
        options: [
          "Quan hệ sản xuất tư bản chủ nghĩa thay thế hoàn toàn quan hệ phong kiến.",
          "Giai cấp tư sản và đồng minh có thế lực rất lớn cả về kinh tế và chính trị.",
          "Triết học Ánh sáng ra đời, thức tĩnh, dọn đường cho quần chúng đấu tranh.",
          "Mâu thuẫn giữa giai cấp tư sản với quý tộc phong kiến ngày càng sâu sắc."
          ]
      },
      {
        numb: 9,
        question: "Nội dung nào sau đây là tiền đề về tư tưởng dẫn đến sự bùng nổ và thắng lợi của cuộc cách mạng tư sản Pháp ở thế kỉ XVIII?",
        answer: "Triết học Ánh sáng ra đời, thức tĩnh, dọn đường cho quần chúng đấu tranh.",
        options: [
          "Quan hệ sản xuất tư bản chủ nghĩa thay thế hoàn toàn quan hệ phong kiến.",
          "Giai cấp tư sản và đồng minh có thế lực rất lớn cả về kinh tế và chính trị.",
          "Triết học Ánh sáng ra đời, thức tĩnh, dọn đường cho quần chúng đấu tranh.",
          "Mâu thuẫn giữa giai cấp tư sản với quý tộc phong kiến ngày càng sâu sắc."
          ]
      },
      {
        numb: 10,
        question: "Những đại diện tiêu biểu trong trào lưu Triết học Ánh sáng ở Pháp (thế kỉ XVIII) là",
        answer: "S.Mông-te-xki-ơ, Ph.Vôn-te, G.Rút-xô.",
        options: [
          "C.Mác, Ph.Ăng-ghen, V.I.Lê-nin.",
          "S.Mông-te-xki-ơ, Ph.Vôn-te, G.Rút-xô.",
          "C.Phu-ri-ê, C.Xanh-xi-mông, R.Ô-oen.",
          "A.Xmit, C.Xanh-xi-mông, Ph.Vôn-te."
          ]
      },
      {
        numb: 11,
        question: "Nội dung nào dưới đây phản ánh đúng vai trò của trào lưu Triết học Ánh sáng đối với cách mạng tư sản Pháp vào cuối thế kỷ XVIII?",
        answer: "Tấn công hệ tư tưởng chế độ phong kiến, dọn đường cho cách mạng xã hội bùng nổ.",
        options: [
          "Lên án chế độ tư bản chủ nghĩa, đưa ra lí thuyết xây dựng nhà nước xã hội chủ nghĩa.",
          "Lên án chế độ phong kiến, giáo hội Thiên chúa và mặt trái của chủ nghĩa tư bản.",
          "Tấn công hệ tư tưởng chế độ phong kiến, dọn đường cho cách mạng xã hội bùng nổ.",
          "Lên án chế độ tư bản chủ nghĩa, chế độ phong kiến, đề nghị xây dựng chế độ tiến bộ."
          ]
      },
      {
        numb: 12,
        question: "Các cuộc cách mạng tư sản từ giữa thế kỉ XVI đến đầu thế kỉ XX thắng lợi có ý nghĩa quan trọng nào sau đây?",
        answer: "Lật đổ nền quân chủ chuyên chế tồn tại lâu đời.",
        options: [
          "Lật đổ nền quân chủ chuyên chế tồn tại lâu đời.",
          "Giải quyết triệt để mọi yêu cầu của nông dân.",
          "Xóa bỏ được tình trạng áp bức trong xã hội.",
          "Đưa giai cấp công nhân lên nắm chính quyền"
          ]
      },
      {
        numb: 13,
        question: "Đặc điểm nào sau đây không phản ánh đúng khái niệm cách mạng tư sản?",
        answer: "Thiết lập nền chuyên chính vô sản.",
        options: [
          "Lực lượng chủ yếu là quần chúng nhân dân.",
          "Mở đường cho chủ nghĩa tư bản phát triển.",
          "Do giai cấp tư sản lãnh đạo.",
          "Thiết lập nền chuyên chính vô sản."
          ]
      },
      {
        numb: 14,
        question: "Cuộc cách mạng tư sản được đánh giá là triệt để nhất trong thời kì lịch sử thế giới cận đại là",
        answer: "cách mạng tư sản Pháp.",
        options: [
          "cách mạng tư sản Anh.",
          "cách mạng tư sản Pháp.",
          "nội chiến Mỹ.",
          "cuộc đấu tranh thống nhất nước Đức"
          ]
      },
      {
        numb: 15,
        question: "Đoạn tư liệu dưới đây cho em biết điều gì về tình hình nước Pháp cuối thế kỉ XVIII? Tư liệu. “Ở Pháp, vương quyền là đỉnh cao của lâu đài phong kiến và chuyên chế. Nhà vua luôn có quyền hành chuyên chế và vô hạn;… quyết định mọi công việc đối nội và đối ngoại của quốc gia. Triều vua Lu-I XVI là một sự chuyên chế cao độ. Theo những “mật lệnh có ấn vua” nhằm khủng bố nhân dân, hàng trăm người bị bắt, bị tù đày ở các nơi trong nước”. (A. Man-phờ-rét, Đại Cách mạng Pháp 1789, NXB Khoa học, 1965, tr.18-19)",
        answer: "Chính sách cai trị của nhà nước phong kiến chuyên chế gây bất mãn cho nhân dân.",
        options: [
          "Chính sách cai trị của nhà nước phong kiến chuyên chế gây bất mãn cho nhân dân.",
          "Sự tồn tại của nhà nước quân chủ lập hiến gây bất mãn cho tầng lớp quý tộc mới.",
          "Mâu thuẫn giữa đẳng cấp thứ ba với đẳng cấp tăng lữ và quý tộc ngày càng sâu sắc.",
          "Nhà nước phong kiến do vua Lu-I XVI đứng đầu thi hành nhiều chính sách tiến bộ."
          ]
      },
   ]