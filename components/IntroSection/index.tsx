import * as React from 'react'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import css from './index.module.css'
import Button from '../common/Button'


type Props = {
	title: string
	image: {url: string}
	TextBox: string
}

const IntroSection: FC<Props> = ({ title, image,TextBox }): JSX.Element => {
	return (
		<header className={css.introSection}>
			<div className="container flex">
				<div className={css.textBox}>
					<article>
						<ReactMarkdown>
							{title}
						</ReactMarkdown>
						<p>{TextBox}</p>
					</article>

					<Button url={'/portfolio'}>Посмотреть все работы</Button>
				</div>

				<div className={css.avatar}>
					<img
						src={image.url}
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
