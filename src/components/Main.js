
import { useState, useEffect } from "react";

import CartBox from "./CartBox/CartBox";
import ButtonBox from "./ButtonBox/ButtonBox";
import { getData } from "./data/Cart";


const Main = (props) => {

    const getdata = async () => {
        console.log("getdata");
        getData();
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div className="container bootstrap snippets bootdeys">
            <CartBox profile={props.profile} />
            <ButtonBox />
        </div >
    )
}

export default Main;