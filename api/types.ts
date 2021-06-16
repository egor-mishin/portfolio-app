export type MenuType = {
  menus: MenuItem[]
}

type MenuItem = {
  title: string
  url: string
}

export type NavBarType = {
  navBar: {
    socialLinks: SocialLink[]
  }
}

export type SocialLink = {
  title: string
  icon: { url: string }
  url: string
}

// Home Page

export type HomePageType = {
  homePage: IntroSection
}

type IntroSection = {
  introSection: {
    title: string
    TextBox: string
    image: { url: string }
  }
}

export type SkillsType = {
  skillItems: SkillItem[]
}

export type SkillBox = {
  title: string
  percent: number
}

export type SkillItem = {
  title: string
  iconsSection: {
    title: string
    iconItems: IconItemType[]
  }
  skillBoxes: SkillBox[]
}


export type IconItemType = {
  title: string
  icon: { url: string }
}

// Portfolio Section

export type PortfolioSectionType = {
  portfolioItems: portfolioItem[]
}

export type LinksType = {
  url: string
  title: string
  icon: {
    url: string
  }

}

type portfolioItem = {
  title: string
  texBox: string
  image: { url: string }
  slug: string
  IconsSection : IconItemType[]
  Links: {
    Link: {
      url: string
      title: string
      icon: {
        url: string
      }
    }
  }
}

export type CurrentProjectSectionType = {
  sectionTitle: string
  title: string
  image: {
    url: string
  }
  textBox: string
  iconsSection:
}

// currentProjectSection{
// 	sectionTitile
// 	title
// 	image {
// 		url
// 	}
// 	textBox
// 	iconsSection{
// 		title
// 		icon{
// 			url
// 		}
// 	}
// }
// }