

import CartBox from "./CartBox/CartBox";
import ButtonBox from "./ButtonBox/ButtonBox";

const Main = (props) => {

    return (
        <div className="container bootstrap snippets bootdeys">
            <CartBox profile={props.profile} />
            <ButtonBox />
        </div >
    )
}

export default Main;