import * as React from 'react'
import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { INTRO_SECTION_QUERY } from '../../api/api'
import ReactMarkdown from 'react-markdown'
import css from './index.module.css'
import Button from '../common/Button'
import Preloader from "../common/Preloader";

type Props = {}

const IntroSection: FC<Props> = (): JSX.Element => {
	const { loading, error, data } = useQuery(INTRO_SECTION_QUERY)

	if (error) return <div>Failed to load</div>
	if (loading) return <div><Preloader /></div>

	const { homePage } = data

	return (
		<header className={css.introSection}>
			<div className="container flex">
				<div className={css.textBox}>
					<article>
						<ReactMarkdown>
							{homePage.introSection.title}
						</ReactMarkdown>
						<p>{homePage.introSection.TextBox}</p>
					</article>

					<Button>Посмотреть все работы</Button>
				</div>

				<div className={css.avatar}>
					<img
						src={homePage.introSection.image.url}
						alt="Picture of the author"
						width='372px'
						height='447px'
					/>
				</div>
			</div>
		</header>
	)
}

export default IntroSection
