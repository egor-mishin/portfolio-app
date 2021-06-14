import * as React from "react";
import { FC } from "react";
import ProgressBar from "../../common/ProgressBar";
import IconsSet from "../../common/IconsSet";
import css from "./index.module.css";
import { SkillBox } from "../../../api/types";

type Props = {
  title: string
  skillBoxes: SkillBox[]
  iconsSection: { title: string, iconItems: any }
}

const SkillSection: FC<Props> = ({ title, skillBoxes, iconsSection }): JSX.Element => {
  return (
  	<>
			<h2 className={css.title}>{title}</h2>
			<div className={css.skillSection}>
				<ProgressBar skillBoxes={skillBoxes} />
				<IconsSet iconsSection={iconsSection} />
			</div>
		</>

)
}

export default SkillSection;
