import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'aos/dist/aos.css'
import Preloader from "../components/common/Preloader";
import { Router } from "next/router";
import Aos from 'aos'
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState)

	Router.events.on('routeChangeStart', () => <Preloader/>)
	Router.events.on('routeChangeComplete', () => <Preloader/>)
	Router.events.on('routeChangeError', () => <Preloader/>)

	useEffect(() =>{
		Aos.init({ duration: 1500 })
	})

	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}
