import { useEffect, useState } from "react";
import "./CartBox.css"
import { getDataById, changeCart } from "../data/Cart";
import { logout } from "../Line/Liff"

const CartBox = (props) => {
    const [isIncDisabled, setIsIncDisabled] = useState(false);
    const [isDecDisabled, setIsDecDisabled] = useState(false);

    const inc = async (i, index, e) => {
        setIsIncDisabled(true);
        e.target.blur();

        const res = await changeCart(1, i['ชื่อสินค้า'], props?.userid)
        if (!res) {
            alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง")
        } else {
            setIsIncDisabled(false);

            props?.setData(props?.data?.map((item, i) => {
                if (i === index) {
                    item['ปริมาณ'] = parseInt(item['ปริมาณ']) + 1
                }
                return item
            }))
        }
    }



    const dec = async (i, index, e) => {
        setIsDecDisabled(true)
        e.target.blur();

        const res = await changeCart(-1, i['ชื่อสินค้า'], props?.userid)
        if (res === "deleted") {
            setIsDecDisabled(false)
        }
        if (!res) {
            alert("โปรดลองอีกครั้ง")
        } else {
            setIsDecDisabled(false)

            props?.setData(props?.data?.map((item, i) => {
                if (i === index) {
                    item['ปริมาณ'] = parseInt(item['ปริมาณ']) - 1
                }
                return item
            }))
        }

    }

    const handleDisabledBtn = (name) => {
        if (name === "inc") {
            if (isIncDisabled) {
                return "disabled"
            }
        } else {
            if (isDecDisabled) {
                return "disabled"
            }
        }
        return ""
    }


    return (
        <div className="cart-main-box">
            {
                props?.data?.map((item, index) => {
                    return (
                        <div className="admin-main-box clearfix rounded " key={index}>
                            <div className="admin-box" >
                                <div className="admin-img-box">
                                    <img src="/TNKlogo.jpg" alt="" className="img-fluid rounded " />
                                </div>
                                <div className="admin-name-box ">
                                    <h1 className="admin-font">{item['ชื่อสินค้า']}</h1>
                                    <div className="admin-status ">x {" " + props?.data[index]['ปริมาณ']}</div>
                                    <div className="">ราคา {item['ราคา']}  บาท</div>
                                    <div className="">น้ำหนัก {item['น้ำหนัก']} กก. </div>

                                    <div className="btn-group " role="group" aria-label="Basic example">
                                        <button disabled={isDecDisabled} id="dec" onClick={e => { dec(item, index, e); }} type="button" className={"btn btn-primary " + handleDisabledBtn("dec")}>-</button>
                                        <button disabled={isIncDisabled} id="inc" onClick={e => { inc(item, index, e); }} type="button" className={"btn btn-primary " + handleDisabledBtn("inc")}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )


}

export default CartBox;