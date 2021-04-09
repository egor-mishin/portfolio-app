import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import Preloader from "../components/common/Preloader";
import { Router } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState)

	Router.events.on('routeChangeStart', () => <Preloader/>)
	Router.events.on('routeChangeComplete', () => <Preloader/>)
	Router.events.on('routeChangeError', () => <Preloader/>)

	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}
