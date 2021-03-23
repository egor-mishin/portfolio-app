import {gql} from "@apollo/client/core";

export const MENU_QUERY = gql`
		query {
			menus {
				MenuLinks {
					title
					url
				}
			}
		}
`