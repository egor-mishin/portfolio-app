import { gql } from '@apollo/client/core'

export const MENU_QUERY = gql`
	query {
		menus {
			title
			url
		}
	}
`

export const NAVBAR_QUERY = gql`
	query {
		navBar {
			socialLinks {
				icon {
				     url
				}
				url
			}
		}
	}
`
