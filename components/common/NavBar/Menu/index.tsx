import * as React from 'react'
import { FC, useState } from 'react'
import Link from 'next/link'
import css from './index.module.css'
import { MENU_QUERY } from '../../../../pages/api/api'
import { useQuery } from '@apollo/client'


type Props = {}

const Menu: FC<Props> = (): JSX.Element => {

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { loading, error, data } = useQuery(MENU_QUERY)

	if (error) return <div>Failed to load</div>
	if (loading) return <div>Loading...</div>

	const { menus } = data

	return (
		<div className={css.menu}>
			<a href="#" onClick={() => setIsOpen(!isOpen)}>
				<svg
					width="38"
					height="20"
					viewBox="0 0 38 20"
					fill="black"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M36.7381 3.42393H2.10924C1.47205 3.42393 0.954979 2.8785 0.954979 2.20659C0.954979 1.53458 1.47214 0.989258 2.10924 0.989258H36.7381C37.3753 0.989258 37.8923 1.53468 37.8923 2.20659C37.8923 2.8785 37.3752 3.42393 36.7381 3.42393Z" />
					<path d="M2.00015 9.5106H33.3561C33.9331 9.5106 34.4013 9.94239 34.4013 10.4743C34.4013 11.0063 33.933 11.438 33.3561 11.438H2.00015C1.42318 11.438 0.954979 11.0063 0.954979 10.4743C0.954979 9.94239 1.42318 9.5106 2.00015 9.5106Z" />
					<path d="M1.98896 17.5247H22.669C23.2398 17.5247 23.703 17.9338 23.703 18.4377C23.703 18.9417 23.2397 19.3507 22.669 19.3507H1.98896C1.41816 19.3507 0.954979 18.9417 0.954979 18.4377C0.954895 17.9337 1.41816 17.5247 1.98896 17.5247Z" />
				</svg>
				<span>Menu</span>
			</a>

			<nav className={`${isOpen ? css.visible : ''}`}>
				{menus.map((item) => (
					<Link href={item.url}>{item.title}</Link>
				))}
			</nav>
		</div>
	)
}

export default Menu
