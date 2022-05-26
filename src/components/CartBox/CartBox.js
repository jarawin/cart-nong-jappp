import { useEffect, useState } from "react";
import "./CartBox.css"

const CartBox = (props) => {
    // default data
    const [displayName, setDisplayName] = useState("ชื่อของฉัน");
    const [pictureUrl, setPictureUrl] = useState("https://bootdey.com/img/Content/avatar/avatar1.png");
    const [amout, setAmount] = useState(5);

    // set data
    const setData = async (data) => {
        setDisplayName(data?.displayName)
        setPictureUrl(data?.pictureUrl)
    }

    useEffect(() => {
        setData(props.profile);
    }, []);

    const data = [
        {
            name: "สบู่ ตรานกแก้ว",
            price: "100",
            amount: 1,
            image: "https://bootdey.com/img/Content/avatar/avatar3.png"
        },
        {
            name: "ครีมนวดผม",
            price: "400",
            amount: 2,
            image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            name: "น้ำหอม",
            price: "200",
            amount: 5,
            image: "https://bootdey.com/img/Content/avatar/avatar4.png"
        },
        {
            name: "นมตรามะลิ",
            price: "50",
            amount: 3,
            image: "https://bootdey.com/img/Content/avatar/avatar5.png"
        },
        {
            name: "สบู่ ตรานกแก้ว",
            price: "100",
            amount: 1,
            image: "https://bootdey.com/img/Content/avatar/avatar3.png"
        },
        {
            name: "ครีมนวดผม",
            price: "400",
            amount: 2,
            image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            name: "น้ำหอม",
            price: "200",
            amount: 5,
            image: "https://bootdey.com/img/Content/avatar/avatar4.png"
        },
        {
            name: "นมตรามะลิ",
            price: "50",
            amount: 3,
            image: "https://bootdey.com/img/Content/avatar/avatar5.png"
        },
    ]


    return (
        <div className="cart-main-box">
            {
                data.map((item, index) => {
                    return (
                        <div className="admin-main-box clearfix rounded " key={index}>
                            <div className="admin-box" >
                                <div className="admin-img-box">
                                    <img src={item.image} alt="" className="img-fluid rounded " />
                                </div>
                                <div className="admin-name-box ">
                                    <h1 className="admin-font">{item.name}</h1>
                                    <div className="admin-status ">{item.price} x {" " + item.amount}</div>
                                    <div className="">รวม {item.price * item.amount} บาท</div>

                                    <div className="btn-group " role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary">-</button>
                                        <button type="button" className="btn btn-primary">+</button>
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