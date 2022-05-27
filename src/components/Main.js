

import CartBox from "./CartBox/CartBox";
import ButtonBox from "./ButtonBox/ButtonBox";

const Main = (props) => {

    return (
        <div className="container bootstrap snippets bootdeys">
            <CartBox userid={props?.userid} data={props?.data} setData={props?.setData} setIsLoading={props?.setIsLoading} setTextLoading={props?.setTextLoading} />
            <ButtonBox />
        </div >
    )
}

export default Main;