import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import 'aos/dist/aos.css'
import Preloader from "../components/common/Preloader";
import { Router } from "next/router";
import Aos from 'aos'
import { useEffect } from "react";
import { GTMPageView } from "../utils/gtm";

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState)

	Router.events.on('routeChangeStart', () => <Preloader/>)
	Router.events.on('routeChangeComplete', () => <Preloader/>)
	Router.events.on('routeChangeError', () => <Preloader/>)

	useEffect(() =>{
		Aos.init({ duration: 1500 })

		// Google Tag Manager

		const handleRouteChange = (url: string) => GTMPageView(url);
		Router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			Router.events.off('routeChangeComplete', handleRouteChange);
		};
	})

	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}
