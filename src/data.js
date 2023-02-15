const data = {
    products: [
        {
            _id: 1,
            name:"Đắc Nhân Tâm (Khổ Lớn)",
            slug:"Dac Nhan Tam",
            author: ["Dale Carnegie"],
            image:"https://vnibooks.com/wp-content/uploads/2022/04/dac-nhan-tam.jpeg",
            price:"9",
            category:["TieuThuyet"],
            countInStock:"20",
            rating: 4.5,
            numberReviews:"13",
            introduce:"Đắc nhân tâm của Dale Carnegie là quyển sách duy nhất về thể loại self-help liên tục đứng đầu danh mục sách bán chạy nhất (best-selling Books) do báo The New York Times bình chọn suốt 10 năm liền. Được xuất bản năm 1936, với số lượng bán ra hơn 15 triệu bản, tính đến nay, sách đã được dịch ra ở hầu hết các ngôn ngữ, trong đó có cả Việt Nam, và đã nhận được sự đón tiếp nhiệt tình của đọc giả ở hầu hết các quốc gia.",
            propose:true,
            booksHot:true,


        },
        {
            _id: 2,
            name:"Thần Số Học Ứng Dụng",
            slug:"than so hoc ung dung",
            author: ["Joy Woodward"],
            image:"https://vnibooks.com/wp-content/uploads/2022/03/than-so-hoc-ung-dung.jpeg",
            price:"19",
            category:["GiaoTrinh", "VanHocXaHoi"],
            countInStock:"10",
            rating: 4.7,
            numberReviews:"23",
            introduce:"Mỗi cái tên, mỗi ngày tháng và mỗi con số đều mang những ý nghĩa riêng và có thể giúp bạn hiểu sâu sắc hơn về bản thân, các mối quan hệ và số phận của mình.",
            propose:true,
            booksHot:false,


        },
        {
            _id: 3,
            name:"Những Bậc Thầy Đầu Tư Theo Đà Tăng Trưởng",
            slug:"nhung bac thay dau tu",
            author: ['Mark Minervini', 'David Ryan',' Dan Zanger', 'Mark Ritchie II'],
            image:"https://vnibooks.com/wp-content/uploads/2021/09/nhung-bac-thay-dau-tu-theo-da-tang-truong.jpg",
            price:"29",
            category:["KinhTe"],
            countInStock:"9",
            rating: 3.5,
            numberReviews:"3",
            introduce:"Bất kể bạn là một nhà giao dịch mới toanh, chân ướt chân ráo bước vào thị trường hay đã là một nhà giao dịch chuyên nghiệp, cuốn sách Bậc Thầy Đầu Tư Theo Đà Tăng Trưởng sẽ mang lại những góc nhìn sâu sắc giúp bạn trở thành nhà đầu tư thành công hơn nữa. Những kiến thức quý giá sẽ biến những phân tích thành tiền bạc.",
            propose:false,
            booksHot:false,


        },
        {
            _id: 4,
            name:"Giao Dịch Như Một Phù Thuỷ Chứng Khoán",
            slug:"gaio dich nhu mot phu thuy chung khoan",
            author: ["Mark Minervini"],
            image:"https://vnibooks.com/wp-content/uploads/2022/04/dac-nhan-tam.jpeg",
            price:"",
            category:["KinhTe", "GiaoTrinh"],
            countInStock:"20",
            rating: 4.5,
            numberReviews:"13",
            introduce:"Cuốn sách giúp bạn tiếp cận cách giao dịch cổ phiếu của Mark Minervini. Phương pháp SEPA xác định chính xác thời điểm mua với rủi ro thấp nhất và có tỷ số lợi nhuận/rủi ro co. Ông chỉ thực hiện giao dịch khi công ty có yếu tố cơ bản tốt, sự xác nhận hành động giá, và sự tích cực khối lượng cũng như thời điểm thuận lợi của thị trường.",
            propose:false,
            booksHot:false,


        },
        {
            _id: 5,
            name:"Bộ Cambridge English IELTS",
            slug:"bo cambridge english ielts",
            author: "Dale Carnegie",
            image:"https://vnibooks.com/wp-content/uploads/2022/07/Cambridge-ielts-1-17-new.png",
            price:"23",
            category:["NgoaiNgu", "TronBo"],
            countInStock:"10",
            rating: 2.8,
            numberReviews:"24",
            introduce:"Bộ sách được thiết kế chuẩn theo cấu trúc bài thi thực tế, sử dụng được cho cả hai hình thức thi là IELTS General và Academic",
            propose:false,
            booksHot:true,


        },
        {
            _id: 6,
            name:"An Lạc Từng Bước Chân",
            slug:"an lac tung buoc chan",
            author: ["Thích Nhất Hạnh"],
            image:"https://vnibooks.com/wp-content/uploads/2022/03/an-lac-tung-buoc-chan-768x768.jpeg.webp",
            price:"13",
            category:["VanHoc","EbookKhac"],
            countInStock:"0",
            rating: 4.7,
            numberReviews:"42",
            introduce:"Cuốn sách nhỏ này có thể được xem như tiếng chuông nhắc nhở ta rằng hạnh phúc đang có mặt. Ta biết rằng chuẩn bị cho tương lai cũng là một phần của sự sống nhưng sự chuẩn bị cũng nằm trong hiện tại.",
            propose:false,
            booksHot:true,


        },
        {
            _id: 7,
            name:"Combo 5 Cuốn: Những Quyển Sách Hay",
            slug:"nhung quyen sach ",
            author:["Thích Nhất Hạnh"],
            image:"https://vnibooks.com/wp-content/uploads/2022/04/combo-5-sach-hay-thich-nhat-hanh.webp",
            price:"69",
            category:["VanHoc", "TronBo", "EbookKhac"],
            countInStock:"23",
            rating: 4.9,
            numberReviews:"23",
            introduce:"Không Diệt, Không Sinh, Không Sợ Hãi",
            propose:true,
            booksHot:false,


        },
        {
            _id: 8,
            name:"Hai Số Phận",
            slug:"hai so phan",
            author: ["Jeffrey Archer"],
            image:"https://vnibooks.com/wp-content/uploads/2022/10/hai-so-phan.jpg",
            price:"9",
            category:["TieuThuyet", "VanHoc"],
            countInStock:"20",
            rating: 5.0,
            numberReviews:"3",
            introduce:"“Hai số phận” (Kane & Abel) là câu chuyện về hai người đàn ông đi tìm vinh quang. William Kane là con một triệu phú nổi tiếng trên đất Mỹ, lớn lên trong nhung lụa của thế giới thượng lưu. Wladek Koskiewicz là đứa trẻ không rõ xuất thân, được gia đình người bẫy thú nhặt về nuôi. Một người được ấn định để trở thành chủ ngân hàng khi lớn lên, người kia nhập cư vào Mỹ cùng đoàn người nghèo khổ.",
            propose:true,
            booksHot:true,


        },
        {
            _id: 9,
            name:"Trọn Bộ 6 Tập: Tru Tiên (Tái Bản)",
            slug:"tron bo tru tien",
            author: ["Tiêu Đỉnh"],
            image:"https://vnibooks.com/wp-content/uploads/2022/05/Tru-Tien-Tron-bo-6T.jpg",
            price:"24",
            category:["TieuThuyet","TronBo"],
            countInStock:"30",
            rating: 4.3,
            numberReviews:"34",
            introduce:"Xuất hiện đầu thế kỷ 21, thoạt tiên Tru Tiên được đánh giá là hậu duệ tiếp nối trào lưu tiên hiệp còn mỏng và đứt gãy từ đầu thế kỷ 20, của những Hoàn Châu Lâu Chủ, Bình Giang Bất Tiếu Sinh. Tru Tiên được xếp vào dạng “tiên hiệp”, còn tác phẩm của Kim Dung, Cổ Long là “võ hiệp” (hay “kiếm hiệp”). Khác biệt giữa hai loại truyện này chủ yếu là về cách thức tu luyện của cao thủ và phạm vi bối cảnh của giang hồ. Truyện tiên hiệp lấy bối cảnh là người tu chân, có pháp bảo, có thể đi mây về gió… còn truyện kiếm hiệp lấy bối cảnh giang hồ bình thường với những con người luyện võ công bình thường.",
            propose:false,
            booksHot:false,


        },
        {
            _id: 10,
            name:"Người mẹ tốt hơn là người thầy tốt",
            slug:"nguoi me tot hon la nguoi thay ",
            author: ["Doãn Kiến Lợi"],
            image:"https://vnibooks.com/wp-content/uploads/2022/05/nguoi-me-tot-hon-768x768.jpeg.webp",
            price:"23",
            category:["VanHoaXaHoi", "SucKhoeCuocSongoeCuocSong"],
            countInStock:"24",
            rating: 3.5,
            numberReviews:"53",
            introduce:"Cuốn sách Người mẹ tốt hơn là người thầy tốt là một cuốn sổ tay về cách nuôi dạy con của nhà giáo, thạc sĩ Doãn Kiến Lợi. Chị đã tổng kết kinh nghiệm gần hai mươi năm nuôi dạy con, đồng thời kết hợp với một nền tảng lí thuyết vững chắc và kinh nghiệm thực tế có được trong quá trình trực tiếp dạy học cũng như tiếp xúc với khá nhiều trẻ em, từ đó đúc rút ra được những bài học quý báu trong cuốn sách này",
            propose:true,
            booksHot:false,


        },
        {
            _id: 11,
            name:"Con Nghĩ Đi, Mẹ Không Biết!",
            slug:"con nghi di me khong ",
            author: ["Thu Hà"],
            image:"https://vnibooks.com/wp-content/uploads/2022/05/Con-nghi-di-me-khong-biet-768x768.jpg.webp",
            price:"49",
            category: ["SucKhoeCuocSong"],
            countInStock:"220",
            rating: 2.5,
            numberReviews:"23",
            introduce:"Con nghĩ đi, mẹ không biết là tập hợp những bài viết được đón nhận nhiệt thành trên Facebook của Thu Hà (Mẹ Xu-Sim), rất nhiều bài viết trong số đó đã từng được đăng trên các báo Tuổi trẻ, Thanh Niên, Vnexpress, Dântrí, V Nhưng khác với những dòng chia sẻ trên mạng xã hội, nội dung các bài được chọn lọc hơn, có chủ đích hơn với giải pháp để con tự lập và mẹ tự do. Những bài viết của Thu Hà sinh động, thiết thực vì đó là những trải nghiệm thật, hoàn toàn là sự thật của một bà mẹ có hai con đang trong tuổi ăn, tuổi học, cuả một ngưuời làm việc với trẻ em liên tục suốt 20 năm, trong đó có 3 năm dạy học và 17 năm làm báo tuổi teen.",
            propose:false,
            booksHot:true,


        },
        {
            _id: 12,
            name:"Từ Điển Tiếng Việt 75.000 Từ",
            slug:"tu dien tieng viet",
            author: "Dale Carnegie",
            image:"https://vnibooks.com/wp-content/uploads/2022/06/Tu-Dien-Tieng-Viet-75.000-Tu.jpg",
            price:"69",
            category:["TuDien", "VanHoc", "GiaoTrinh"],
            countInStock:"30",
            rating: 4.9,
            numberReviews:"3",
            introduce:"Cuốn từ điển tiếng việt 75.000 từ được biên soạn nhằm phục vụ nhu cầu học tập và giảng dạy Tiếng Việt cho đối tượng là học sinh, giáo viên và phụ huynh học sinh.",
            propose:true,
            booksHot:true,


        },
        {
            _id: 13,
            name:"Lá nằm trong lá",
            slug:"la nam trong ",
            author: ["Nguyễn Nhật Ánh"],
            image:"https://vnibooks.com/wp-content/uploads/2022/08/La-nam-trong-la-768x1202.jpg.webp",
            price:"49",
            category:["ThieuNhi", "VanHoc"],
            countInStock:"24",
            rating: 4.8,
            numberReviews:"3",
            introduce:"“Bước vào khoảng trời của tuổi biết buồn, Nguyễn Nhật Ánh đã ghi lại những bâng khuâng rung cảm đầu đời. Trong tâm tưởng của các em, bây giờ không chỉ nghĩ về cái gì mà còn nghĩ về ai, về một người khác giới cụ thể nào, và về cả bản thân, thế giới ấy tràn ngập những câu hỏi xôn xao về cái-gọi-là-tình-yêu. Truyện của Nguyễn Nhật Ánh đã đưa vào những câu hỏi lớn, muôn thuở, quen thuộc – những câu hỏi mà dường như trong đời ai cũng từng đối diện ít nhất một lần. Vì thế, trong khi độc giả thiếu niên phục lăn vì nhà văn đi guốc vào bụng họ, thì độc giả người lớn mỉm cười mơ màng nhớ lại một thời thơ dại…”",
            propose:true,
            booksHot:true,


        },
        {
            _id: 14,
            name:"Để học tốt lịch sử 9",
            slug:"de hoc tot lich su ",
            author: ["Bùi Đức Dũng"],
            image:"https://vnibooks.com/wp-content/uploads/2022/06/L9-De-hoc-tot-lich-su-9-768x768.jpg.webp",
            price:"92",
            category: ["LichSu", 'GiaoTrinh'],
            countInStock:"20",
            rating: 3.8,
            numberReviews:"13",
            introduce:"Để học tốt môn Lịch sử lớp 9, ngoài những kiến thức trong sách giáo khoa và bài giảng của thầy cô giáo trên lớp, các em học sinh cần tham khảo thêm các tài liệu Lịch sử khác.",
            propose:true,
            booksHot:true,

        }
    ]
};

export default data;