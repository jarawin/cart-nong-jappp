import "./Loader.css";
import { useEffect } from "react";

const Loading = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props?.setFirstLoad();
        }, 5000);
    }, [])

    return (
        <div>
            <div className="lds-ripple">
                <div ></div>
                <div></div>
            </div>
            <h2 className="text-load">{props?.text ?? "Loading..."}</h2>
        </div>
    )
}

export default Loading