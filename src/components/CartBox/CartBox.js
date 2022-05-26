import { useEffect, useState } from "react";
import "./CartBox.css"
import { getDataById, changeCart } from "../data/Cart";

const CartBox = (props) => {
    const [data, setData] = useState([]);
    //props?.profile?.userId ?? 
    const userid = "LUb1fbe48dd94071be47fdd24d361b1271-U809ebc60c8b4a9fd8518ec029ab35ef5"

    const inc = (e) => {
        console.log("e.target['ชื่อสินค้า'] == ", e['ชื่อสินค้า']);
        console.log("userid == ", userid);
        changeCart(1, e['ชื่อสินค้า'], userid)
    }

    const dec = (e) => {
        changeCart(-1, e['ชื่อสินค้า'], userid)
    }

    useEffect(async () => {
        const res = await getDataById(userid);
        setData(res);
    }, []);




    return (
        <div className="cart-main-box">
            {
                data.map((item, index) => {
                    return (
                        <div className="admin-main-box clearfix rounded " key={index}>
                            <div className="admin-box" >
                                <div className="admin-img-box">
                                    <img src="/TNKlogo.jpg" alt="" className="img-fluid rounded " />
                                </div>
                                <div className="admin-name-box ">
                                    <h1 className="admin-font">{item['ชื่อสินค้า']}</h1>
                                    <div className="admin-status ">x {" " + item['ปริมาณ']}</div>
                                    <div className="">ราคา {item['ราคา']}  บาท</div>
                                    <div className="">น้ำหนัก {item['น้ำหนัก']} </div>

                                    <div className="btn-group " role="group" aria-label="Basic example">
                                        <button onClick={e => { dec(item) }} type="button" className="btn btn-primary">-</button>
                                        <button onClick={e => { inc(item) }} type="button" className="btn btn-primary">+</button>
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