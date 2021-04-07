import * as React from 'react'
import { FC } from 'react'
import css from './index.module.css'

type Props = {
    width: number
    percent: number
    title: string
}

const ProgressItem: FC<Props> = ({ width, percent, title }): JSX.Element => {
    let progress = percent * width / 100

    return (
        <div className={css.progressItem}>
            <h4>{title}</h4>
            <div className={css.progressContainer} style={{ width: `${width}%` }}>
                <div style={{ width: `${progress}%` }} className={css.progress} />
            </div>
        </div>
    )
}

export default ProgressItem
