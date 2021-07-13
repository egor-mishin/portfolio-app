import * as React from 'react'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import css from './index.module.css'
import Button from '../common/Button'
import Image from 'next/image'


type Props = {
	title?: string
	image?: {url: string}
	textBox?: string
	button?: {title: string}
}

const IntroSection: FC<Props> = ({ title, image,textBox, button }): JSX.Element => {
	return (
		<header className={css.introSection}>
			<div className="container flex">
				<div className={css.textBox}>
					<article>
						<ReactMarkdown>
							{title}
						</ReactMarkdown>
						<p>{textBox}</p>
					</article>
					{
						button && <Button url={'/portfolio'}>{button.title}</Button>
					}
				</div>

				<div className={css.avatar}>
					<Image
						src={image.url}
						alt="Picture of the author"
						width={372}
						height={447}
					/>
				</div>
			</div>
		</header>
	)
}

export default IntroSection
