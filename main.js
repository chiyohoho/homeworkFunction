const callElement = (object) => {
    return document.querySelector(object)
}
//------DOM SHOW CONTENT
const showContent = callElement("#content")
//------Change BG Button-----------------------------------------
const changeBgButton = document.querySelectorAll(".menu_option")
let saveStatusChangeBG = {};
changeBgButton.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        } else {
            changeBgButton.forEach(function (s) {
                s.classList.remove("active");
            });
            button.classList.add("active");
        }
    })
})
//-----------------------------------------------------------

//------ Function Call Element
//--------- BÀI TẬP 1 ---------//
const showBaiTap1 = () => {
    const str = `
    <div class="title" style="margin-bottom: 5px;">
                <span><i class="fa-solid fa-school" style="margin-right: 15px; margin-bottom: 10px"></i>Quản lý tuyển sinh</span>
                <br>
                <select name="luuy_khuvuc" id="" style="padding: 5px; outline: none; font-size: 16px; width: 30%; border-radius: 5px">
                        <option selected disabled hidden value="0">Lưu ý về khu vực</option>
                        <option disabled value="1">Khu Vực 1 = +0.5 điểm</option>
                        <option disabled value="2">Khu Vực 2 = +1.0 điểm</option>
                        <option disabled value="3">Khu Vực 3 = +1.5 điểm</option>
                        <option disabled value="4">Khu Vực 4 = Không cộng điểm </option>
                </select>
                <select name="luuy_doituong" id="" style="padding: 5px; outline: none; font-size: 16px; width: 30%; border-radius: 5px">
                        <option selected disabled hidden value="0">Lưu ý về đối tượng</option>
                        <option disabled value="1">Đối tượng 1 = +0.25 điểm</option>
                        <option disabled value="2">Đối tượng 2 = +0.5 điểm</option>
                        <option disabled value="3">Đối tượng 3 = +1.0 điểm</option>
                        <option disabled value="4">Đối tượng 4 = Không cộng điểm </option>
                </select>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập điểm chuẩn" id="bai1_input_1" class="bai1_input">
                <select name="khuvuc" id="select_khuvuc" style="padding: 5px; outline: none; font-size: 16px; width: 30%; border-radius: 5px">
                        <option selected disabled hidden value="0">Chọn khu vực</option>
                        <option value="1">Khu Vực 1: Tỉnh lẻ</option>
                        <option value="2">Khu Vực 2: Trên núi</option>
                        <option value="3">Khu Vực 3: Vùng sâu, vùng xa </option>
                        <option value="4">Khu Vực 4: Big City Boy</option>
                    </select>
                <select name="doituong" id="select_doituong" style="padding: 5px; outline: none; font-size: 16px;width: 30%;border-radius: 5px">
                        <option selected disabled hidden value="0">Chọn đối tượng</option>
                        <option value="1">Đối tượng 1: Hoàn cảnh khó khăn</option>
                        <option value="2">Đối tượng 2: Con thương binh, liệt sĩ & có công với các mạng</option>
                        <option value="3">Đối tượng 3: Wibu</option>
                        <option value="4">Đối tượng 4: !Wibu</option>
                    </select>
                <input type="number" placeholder="Điểm môn A" id="bai1_input_2" class="bai1_input">
                <input type="number" placeholder="Điểm môn B" id="bai1_input_3" class="bai1_input">
                <input type="number" placeholder="Điểm môn C" id="bai1_input_4" class="bai1_input">
                <div class="show_buttons">
                    <span id="btn_body_content_hightolow" class="btn_sort" onclick="setDiem()">Hiển thị kết quả</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-regular fa-hand-peace" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
            </div>
    `
    showContent.innerHTML = str
}
const setDiem = () => {
    const diemChuan = Number(callElement("#bai1_input_1").value)
    const khuVucValue = (callElement("#select_khuvuc").value)
    const doiTuongValue = (callElement("#select_doituong").value)
    const diemMonA = Number(callElement("#bai1_input_2").value)
    const diemMonB = Number(callElement("#bai1_input_3").value)
    const diemMonC = Number(callElement("#bai1_input_4").value)
    let khuVuc = Number(callElement("#select_khuvuc").value)
    let doiTuong = Number(callElement("#select_doituong").value)

    const tong3Mon = diemMonA + diemMonB + diemMonC
    let bonusKhuVuc = 0
    let bonusDoiTuong = 0
    let afterBonus
    const showResult = callElement("#bai1_result")
    const showIconSort = callElement("#icon_sort")
    const showResultSort = callElement("#show_body_result")

    if (diemChuan && diemMonA && diemMonB && diemMonC && khuVucValue && doiTuongValue) {
        if (khuVucValue == 0 || doiTuongValue == 0) {
            alert("Vui lòng bổ sung đối tượng và khu vực")
        } else {
            switch (khuVuc) {
                case 1:
                    bonusKhuVuc += 0.5
                    break
                case 2:
                    bonusKhuVuc += 1.0
                    break
                case 3:
                    bonusKhuVuc += 1.5
                    break
                case 4:
                    bonusKhuVuc = 0
                    break
            }
            switch (doiTuong) {
                case 1:
                    bonusDoiTuong += 0.25
                    break
                case 2:
                    bonusDoiTuong += 0.5
                    break
                case 3:
                    bonusDoiTuong += 1.0
                    break
                case 4:
                    bonusDoiTuong += 0
                    break
            }
            afterBonus = tong3Mon + bonusKhuVuc + bonusDoiTuong
            if (afterBonus >= diemChuan) {
                showResult.textContent = `Chúc mừng bạn đã đậu với tổng điểm là ${afterBonus} `
                showIconSort.className = "fa-regular fa-thumbs-up"
            } else {
                showResult.textContent = `Với số điểm ${afterBonus}, bạn đã trượt `
                showIconSort.className = "fa-regular fa-thumbs-down"
            }
            showResult.style.visibility = "visible"
            showIconSort.style.visibility = "visible"
            showResultSort.style.visibility = "visible"
        }
    } else {
        alert("Vui lòng điền đẩy đủ thông tin")
    }
}
//-----------------------------//

//--------- BÀI TẬP 2 ---------//
const showBaiTap2 = () => {
    const str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-bolt" style="margin-right: 15px;"></i>Tính tiền điện</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập số hợp đồng" id="bai1_input_1" class="bai1_input">
                <input type="number" placeholder="Nhập số điện đã dùng" id="bai1_input_2" class="bai1_input">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="tinhTienDien()">Tính tiền</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-solid fa-money-bill" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
                <br>
                <span id="bai2_result" class="show_bai1_result"></span>
            </div>
    `
    showContent.innerHTML = str
}
const tinhTienDien = () => {
    const soHopDong = Number(callElement("#bai1_input_1").value)
    const soDien = Number(callElement("#bai1_input_2").value)
    let giaDien = 0
    let tongTien = 0
    const showResult = callElement("#bai1_result")
    const showResult1 = callElement("#bai2_result")
    const showIconSort = callElement("#icon_sort")
    const showResultSort = callElement("#show_body_result")

    if (soHopDong && soDien) {
        if (soDien > 200) {
            giaDien = 3400;
        } else if (soDien > 150) {
            giaDien = 3300;
        } else if (soDien > 100) {
            giaDien = 3200;
        } else if (soDien > 50) {
            giaDien = 3100;
        } else {
            giaDien = 3000;
        }
        tongTien = (giaDien * soDien).toLocaleString('vi', { style: 'currency', currency: 'VND' })
        showResult.textContent = `Hợp đồng ${soHopDong} trong tháng này đã dùng ${soDien} số và tổng hóa đơn tháng này là ${tongTien}.`
        showResult1.textContent = `Lưu ý : Giá tiền điện sẽ thay đổi tùy thuộc vào số điện bạn đã dùng, với ${soDien} số điện, giá của 1 đơn vị điện là ${giaDien} đồng`
        showResult.style.visibility = "visible"
        showIconSort.style.visibility = "visible"
        showResultSort.style.visibility = "visible"
    } else {
        alert("Vui lòng không để trống thông tin")
    }
}
//-----------------------------//

//--------- BÀI TẬP 3 ---------//
const showBaiTap3 = () => {
    const str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-money-bill-wave" style="margin-right: 15px;"></i>Tính tiền thuế thu nhập cá nhân</span>
                <br>
                <span><i class="fa-solid fa-exclamation" style="margin-right: 15px;"></i>Lưu ý : đơn vị được tính là 1000, ví dụ : 1K sẽ bằng 1000</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập mã số thuế" id="bai1_input_1" class="bai1_input" style="width: 32%">
                <input type="number" placeholder="Nhập thu nhập 1 tháng" id="bai1_input_2" class="bai1_input" style="width: 32%">
                <select name="luu_y" id="so_nguoi_lethuoc" style="padding: 5px; outline: none; font-size: 16px; width: 28%; border-radius: 5px">
                        <option selected disabled hidden value="0">Số người lệ thuộc</option>
                        <option value="1">1 người</option>
                        <option value="2">2 người</option>
                        <option value="3">3 người</option>
                        <option value="4">4 người</option>
                        <option value="5">Không có</option>
                </select>
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="tinhThue()">Bắt đầu tính</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-solid fa-arrow-down-1-9" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
                <br>
                <span id="bai2_result" class="show_bai1_result"></span>
            </div>
    `
    showContent.innerHTML = str
}
const tinhThue = () => {
    const maSoThue = Number(callElement("#bai1_input_1").value)
    const thuNhap1Thang = Number(callElement("#bai1_input_2").value)
    const soNguoiLeThuoc = Number(callElement("#so_nguoi_lethuoc").value)
    let percentThue = 0.1
    let tienThue

    const showResult = callElement("#bai1_result")
    const showResult1 = callElement("#bai2_result")
    const showIconSort = callElement("#icon_sort")
    const showResultSort = callElement("#show_body_result")

    if (maSoThue && thuNhap1Thang && soNguoiLeThuoc !== 0) {
        if (thuNhap1Thang < 10000) {
            showResult.textContent = `Lương dưới 10 triệu không cần phải đóng thuế thu nhập cá nhân`
            showIconSort.className = "fa-solid fa-exclamation"
            showResult.style.visibility = "visible"
            showIconSort.style.visibility = "visible"
            showResultSort.style.visibility = "visible"
        } else {
            switch (soNguoiLeThuoc) {
                case 1:
                    percentThue = 0.09
                    break
                case 2:
                    percentThue = 0.08
                    break
                case 3:
                    percentThue = 0.07
                    break
                case 4:
                    percentThue = 0.06
                    break
                default:
                    percentThue = 0.1
                    break
            }
            tienThue = (thuNhap1Thang * percentThue).toFixed(1)
            showResult.textContent = `Tiền thuế 1 tháng của bạn là ${tienThue}K VND`
            showIconSort.className = "fa-solid fa-money-bill-wave"
            showResult.style.visibility = "visible"
            showIconSort.style.visibility = "visible"
            showResultSort.style.visibility = "visible"
        }
    } else {
        alert("Vui lòng nhập đầy đủ thông tin")
    }
}
//-----------------------------//

// //--------- BÀI TẬP 4 ---------//
const showBaiTap4 = () => {
    const str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-money-bill-wave" style="margin-right: 15px;"></i>Mua vé máy bay</span>
                <br>
            </div>

            <div id="show_body_content" class="body_content">
                <select name="luu_y" id="loai_ve" onchange="showOptionSuatAn()"  style="padding: 5px; outline: none; font-size: 16px; border-radius: 5px">
                        <option selected disabled hidden value="0">Chọn hạng vé</option>
                        <option value="1">Phổ thông</option>
                        <option value="2">Thương gia</option>
                </select>
                <input type="number" placeholder="Nhập số lượng vé muốn mua" id="bai1_input_2" class="bai1_input" style="width: 41%">
                <input type="number" placeholder="Mua suất ăn" id="bai1_input_1" class="bai1_input" style="width: 25%; visibility : hidden">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="tinhTienVeMayBay()">Đặt vé</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-solid fa-arrow-down-1-9" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
                <br>
                <span id="bai2_result" class="show_bai1_result"></span>
            </div>
    `
    showContent.innerHTML = str
}

const showOptionSuatAn = () => {
    const checkLoaiVe = callElement("#loai_ve").value
    const showSuatAn = callElement("#bai1_input_1")
    if (checkLoaiVe == 1) {
        showSuatAn.style.visibility = "visible"
    } else {
        showSuatAn.style.visibility = "hidden"
    }
}

const tinhTienVeMayBay = () => {
    const hangVe = Number(callElement("#loai_ve").value)
    const soLuongVe = Number(callElement("#bai1_input_2").value)
    const soLuongSuatAn = Number(callElement("#bai1_input_1").value)
    let giaVe = 0
    let giaSuatAn = 100
    let total = 0
    let totalSuatAn = 0

    const showResult = callElement("#bai1_result")
    const showResult1 = callElement("#bai2_result")
    const showIconSort = callElement("#icon_sort")
    const showResultSort = callElement("#show_body_result")

    if (soLuongVe) {
        if (hangVe === 0) {
            alert("Vui lòng chọn hạng ghế")
        } else if (hangVe === 2) {
            if (soLuongVe <= 5)
                giaVe = 5000
            else {
                giaVe = 4500
                showResult1.textContent = `Lưu ý: vì bạn đã mua trên 5 vé hạng thương gia, nên giá của mỗi vé sẽ là ${giaVe}K`
            }
            total = giaVe * soLuongVe
            showResult.textContent = `Bạn đã đặt ${soLuongVe} vé hạng ghế thương gia, tổng số tiền bạn cần thanh toán là ${total}K VND`
            showIconSort.className = "fa-solid fa-money-bill-wave"
            showResult.style.visibility = "visible"
            showIconSort.style.visibility = "visible"
            showResultSort.style.visibility = "visible"
        } else {
            giaVe = 1000
            if (soLuongVe >= 10) {
                giaSuatAn = 80
                showResult1.textContent = `Lưu ý: vì bạn đã mua trên 10 vé, nên giá của mỗi suất ăn là ${giaSuatAn}K VND`
            }

            if (soLuongSuatAn >= 1) {
                showResult.textContent = `Bạn đã đặt ${soLuongVe} vé hạng ghế phổ thông và có ${soLuongSuatAn} suất ăn, tổng số tiền bạn cần thanh toán là ${total}K VND`
                showIconSort.className = "fa-solid fa-money-bill-wave"
                showResult.style.visibility = "visible"
                showIconSort.style.visibility = "visible"
                showResultSort.style.visibility = "visible"
            }
            totalSuatAn = soLuongSuatAn * giaSuatAn
            total = (giaVe * soLuongVe) + totalSuatAn
            showResult.textContent = `Bạn đã đặt ${soLuongVe} vé hạng ghế phổ thông và có ${soLuongSuatAn} suất ăn, tổng số tiền bạn cần thanh toán là ${total}K VND`
            showIconSort.className = "fa-solid fa-money-bill-wave"
            showResult.style.visibility = "visible"
            showIconSort.style.visibility = "visible"
            showResultSort.style.visibility = "visible"

        }
    } else {
        alert("Vui lòng nhập số lượng vé")
    }
}
// //-----------------------------//


