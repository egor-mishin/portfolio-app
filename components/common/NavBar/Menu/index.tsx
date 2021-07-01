import * as React from "react"
import { FC, useState } from "react"
import Link from "next/link"
import css from "./index.module.css"
import { MENU_QUERY } from "../../../../api/api"
import { useQuery } from "@apollo/client"
import { MenuType } from "../../../../api/types"
import Preloader from "../../Preloader"


type Props = {}

const Menu: FC<Props> = (): JSX.Element => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { loading, error, data } = useQuery<MenuType>(MENU_QUERY);

  if (error) return <div>Failed to load</div>;
  if (loading) return <div><Preloader /></div>;

  const { menus } = data;

  return (
    <div className={css.menu}>
      <a href="#" onClick={() => setIsOpen(!isOpen)}>
        <svg
          width="28"
          height="25"
          viewBox="0 0 38 20"
          fill="#46466E"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.7381 3.42393H2.10924C1.47205 3.42393 0.954979 2.8785 0.954979 2.20659C0.954979 1.53458 1.47214 0.989258 2.10924 0.989258H36.7381C37.3753 0.989258 37.8923 1.53468 37.8923 2.20659C37.8923 2.8785 37.3752 3.42393 36.7381 3.42393Z" />
          <path
            d="M2.00015 9.5106H33.3561C33.9331 9.5106 34.4013 9.94239 34.4013 10.4743C34.4013 11.0063 33.933 11.438 33.3561 11.438H2.00015C1.42318 11.438 0.954979 11.0063 0.954979 10.4743C0.954979 9.94239 1.42318 9.5106 2.00015 9.5106Z" />
          <path
            d="M1.98896 17.5247H22.669C23.2398 17.5247 23.703 17.9338 23.703 18.4377C23.703 18.9417 23.2397 19.3507 22.669 19.3507H1.98896C1.41816 19.3507 0.954979 18.9417 0.954979 18.4377C0.954895 17.9337 1.41816 17.5247 1.98896 17.5247Z" />
        </svg>
        <span>Menu</span>
      </a>


      <nav className={`${isOpen ? css.visible : ""}`}>
        <div className={css.menuWrapper}>
         <div className={css.menuContainer}>
           <a href="#" className={css.closeButton} onClick={() => setIsOpen(!isOpen)} >
             <svg  width="35"
                   height="35"
                   viewBox="0 0 512.001 512.001"
                   fill="#272121FF"
                   xmlns="http://www.w3.org/2000/svg">
               <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
											L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
											c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
											l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
											L284.286,256.002z" />
             </svg>

           </a>
           <ul className={css.menuList}>
             {menus.map((item) => (
               <li><Link href={item.url}>{item.title}</Link></li>
             ))}
           </ul>
         </div>
         </div>
      </nav>
    </div>
)
}

export default Menu
