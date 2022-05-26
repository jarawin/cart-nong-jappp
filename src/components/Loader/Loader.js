import "./Loader.css";

const Loading = (props) => {
    if (props.text) {
        return (
            <div>
                <div className="lds-ripple">
                    <div ></div>
                    <div></div>
                </div>
                <h2 className="text-load">{props.text}</h2>
            </div>
        )
    } else {
        return (
            <div>
                <div className="lds-ripple">
                    <div ></div>
                    <div></div>
                </div>
                <h2 className="text-load">Loading...</h2>
            </div>
        )
    }
}

export default Loading