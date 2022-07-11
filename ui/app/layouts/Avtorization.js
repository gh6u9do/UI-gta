import s from "./../../../styles/Authorization.module.css";


export default function Authorization(props) {
    return <div className="wrapper">
        <div className="authorization_window">{props.children}</div>
    </div>
}