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
			  title
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
export const SKILLS_SECTION_QUERY = gql`
	query {
		skillItems(sort: "id") {
			title
			iconsSection {
				title
				iconItems {
					title
					icon {
						url
					}
				}
			}
			skillBoxes {
				title
				percent
			}
		}
	}
`

export const PORTFOLIO_SECTION_QUERY = gql`
    query {
			portfolioItems(where: {
          showOnHomePage: true
      }){
				title
				image{
					url
				}
				textBox
				slug
				showOnHomePage
				iconsSection{
					title
					iconItems{
						title
						icon{
							url
						}
					}
				}
				Links{
					link{
						url
						icon{
							url
						}
						title
					}
				}
			}
    }
`


export const CURRENT_PROJECT_SECTION_QUERY = gql`
    query {
			homePage {
				currentProjectSection{
					sectionTitile
					title
					image {
						url
					}
					textBox
					
					Links {
						url
						icon {
							url
						}
					}
				}
				IconsSection {
					title
					iconItems {
						title
						icon {
							url
						}
					}
				}
			}
    }
`

export const BLOG_ITEMS_QUERY = gql`
	query {
		blogItems(where: {showOnHomePage: true}){
			title
			textBox
			blogImage {
				url
			}
			slug
			button{
				title
			}
		}
	}
`

export const CONTACTS_QUERY = gql`
	query {
		contact{
			title
			Links{
				title
				url
				icon{
					url
				}
			}
		}
	}
`

export const FOOTER_QUERY = gql`
	query {
		footer{
			copyright
		}
	}
`