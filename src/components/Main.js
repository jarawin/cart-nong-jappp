
import { useState, useEffect } from "react";

import CartBox from "./CartBox/CartBox";
import ButtonBox from "./ButtonBox/ButtonBox";
import { getData } from "./data/Cart";


const Main = (props) => {

    const getdata = async () => {
        // getData("LUb1fbe48dd94071be47fdd24d361b1271-U809ebc60c8b4a9fd8518ec029ab35ef5");
        console.log("getdata");
        const { data } = await getData("LUb1fbe48dd94071be47fdd24d361b1271-U809ebc60c8b4a9fd8518ec029ab35ef5");
        console.log(JSON.stringify(data));
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