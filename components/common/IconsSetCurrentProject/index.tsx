import * as React from "react";
import { FC } from "react";
import css from "./index.module.css";
import { Item } from "./Item";

type Props = {
  iconsSection: any
}

const IconsSetCurrentProject: FC<Props> = ({ iconsSection }): JSX.Element => {
  return (

			<div className={`${css.iconsSet}`}>
				{iconsSection.map((item) => (
					<div className={css.iconItems}>
						<h4 className={css.iconsSetTitle}>{item.title}</h4>
						{
							item.iconItems.map(icon => <Item title={icon.title} imgUrl={icon.icon.url} />)
						}
					</div>
						))}
					</div>
  );
};



    export default IconsSetCurrentProject
;