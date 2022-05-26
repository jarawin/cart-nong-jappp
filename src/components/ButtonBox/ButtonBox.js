
import "./ButtonBox.css"
import { sendMessage } from "../Line/Liff";

const ButtonBox = (props) => {
    const sendMsgConfirm = () => { sendMessage("ยืนยันออเดอร์") }
    const sendMsgShowAll = () => { sendMessage("ดูหมวดหมู่") }

    return (
        <div className="row btn-main-box">
            <div className="col-6 cart-btn text-center">
                <h2 onClick={sendMsgShowAll}>รายการสินค้า</h2>
            </div>

            <div className="col-6 cart-btn text-center">
                <h2 onClick={sendMsgConfirm}>สั่งซื้อ</h2>
            </div>
        </div>
    )
}

export default ButtonBox;