
import "./ButtonBox.css"
import { sendMessage } from "../Line/Liff";

const ButtonBox = (props) => {
    const sendMsgConfirm = () => { sendMessage("เช็คตะกร้า") }
    const sendMsgShowAll = () => { sendMessage("ดูหมวดหมู่") }

    return (
        <div className="row btn-main-box">
            <div className="col-6 cart-btn text-center box-btn-bt rounded">
                <h2 className="text-btn-bt" onClick={sendMsgShowAll}>รายการสินค้า</h2>
            </div>

            <div className="col-6 cart-btn text-center box-btn-bt rounded">
                <h2 className="text-btn-bt" onClick={sendMsgConfirm}>สั่งซื้อ</h2>
            </div>
        </div>
    )
}

export default ButtonBox;