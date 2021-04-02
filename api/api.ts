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
export const INTRO_SECTION_QUERY = gql`
	query {
		homePage {
			introSection {
				title
				TextBox
				image {
					url
				}
			}
		}
	}
`
