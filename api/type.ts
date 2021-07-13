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
  homePage: {
    currentProjectSection: CurrentProjectSectionType;
    IconsSection: IconItemType[]
    introSection: IntroSection
    portfolioSection: any
    blogSection: any
  }
  skillItems: SkillItem[]
  portfolioItems: PortfolioItem[]
  currentProjectSection: CurrentProjectSectionType
  IconsSection: IconItemType[]
  blogItems: any
}

type IntroSection = {
    title: string
    TextBox: string
    image: { url: string }
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
  headTitle?: string
  title: string
  icon: { url: string }

}

// Portfolio Section

export type LinkType = {
  url: string
  title: string
  icon: {
    url: string
  }

}

export type PortfolioItem = {
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
  iconsSection: IconItemType[]
}

// Blog Section
export type ContactsType = {
  contact: any
}

type Links = { }

// Footer Section
export type FooterType = {
    copyright: string
}
