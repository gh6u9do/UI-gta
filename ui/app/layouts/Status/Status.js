import s from "./../../../styles/Status.module.css";

export default function Status({ children }) {
  return <div className={s.statusbar}>{children}</div>;
}
