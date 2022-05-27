import "./Loader.css";

const Loading = (props) => {
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