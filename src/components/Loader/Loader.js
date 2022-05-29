import "./Loader.css";
import { useEffect, useState } from "react";

const Loading = (props) => {
    const [msec, setMsec] = useState(5000);

    useEffect(() => {
        const reset = () => {
            setTimeout(() => {
                props?.setFirstLoad();
                setMsec(msec + 500)
                reset()
            }, msec);
        }
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