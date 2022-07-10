import Status from "../../layouts/Status/Status";
import s from "./StatusBar.module.css";

export default function StatusBar() {
	return (
		<div className={s.wrapper}>
			<Status>
				<div className={s.container}>
					<ul className={s.row}>
						<li>1000-7</li>
					</ul>
					<ul className={s.row}>
						<li>69%</li>
						<li>70%</li>
						<li>81%</li>
					</ul>
				</div>
			</Status>
		</div>
	);
}
