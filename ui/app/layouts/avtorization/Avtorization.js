import s from "./../../../styles/Avtorization.module.css";


export default function Avtorization(props) {
    return <div className="wrapper">
        <div className="authorization_window">{props.children}</div>
    </div>
}