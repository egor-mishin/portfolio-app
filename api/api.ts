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
			portfolioItems{
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
                iconsSection{
                    title
                    icon{
                        url
                    }
                }
            }
        }
    }
`
