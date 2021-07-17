import * as React from "react";
import { FC } from "react";
import ProgressBar from "../../common/ProgressBar";
import IconsSet from "../../common/IconsSet";
import css from "./index.module.css";
import { SkillBox } from "../../../api/type";

type Props = {
  title: string
  skillBoxes: SkillBox[]
  iconsSection: { title: string, iconItems: any }
}

const SkillSection: FC<Props> = ({ title, skillBoxes, iconsSection }): JSX.Element => {
  return (
  	<>
			<h2 className={css.title}
					data-aos="fade-right"
					data-aos-delay="10"
					data-aos-easing="linear"
					data-aos-offset="0">{title}</h2>
			<div className={css.skillSection} data-aos="fade-left"
					 data-aos-delay="10"
					 data-aos-easing="linear"
					 data-aos-offset="0">
				<ProgressBar skillBoxes={skillBoxes} />
				<IconsSet iconsSection={iconsSection} />
			</div>
		</>

)
}

export default SkillSection;
