import * as React from 'react'
import { FC } from 'react'
import { useQuery } from '@apollo/client'

type Props = {}

const IntroSection: FC<Props> = (): JSX.Element => {

	// const { loading, error, data } = useQuery()
	//
	// if (error) return <div>Failed to load</div>
	// if (loading) return <div>Loading...</div>

	return <>IntroSection</>
}

export default IntroSection
