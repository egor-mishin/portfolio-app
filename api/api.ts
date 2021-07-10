import { gql } from "@apollo/client/core";

export const MENU_QUERY = gql`
    query {
        menus {
            title
            url
        }
    }
`;
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
`;
export const HOMEPAGE_QUERY = gql`
    query {
        homePage {
            introSection {
                title
                textBox
                image {
                    url
                }
                button {
                    title
                }
            }
            portfolioSection {
                title
                button {
                    title
                }
            }
            blogSection {
                title
                button {
                    title
                }
            }
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
        blogItems(where: {showOnHomePage: true}){
            id
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
`;
export const PORTFOLIO_PAGE_QUERY = gql`
    query {
        portfolioPage {
            introSection {
                title
                textBox
                image {
                    url
                }
                button{
                    title
                }
            }
        }
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
`;
export const BLOG_PAGE_QUERY = gql`
    query {
        blogPage {
            introSection {
                title
                textBox
                image {
                    url
                }
                button{
                    title
                }
            }
        }
        blogItems{
            id
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
`;
export const SINGLE_BLOG_PAGE = gql`
    query($id: ID!) {
        blogItem(id: $id){
            id
            title
            textBox
            blogImage {
                url
            }
            slug
            button{
                title
            }
            post
        }

        blogItems{
            id
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
`;
export const CONTACTS_QUERY = gql`
    query contact{
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
`;
export const FOOTER_QUERY = gql`
    query {
        footer{
            copyright
        }
    }
`;
