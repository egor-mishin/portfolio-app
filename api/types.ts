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

export type SkillItem = {
  title: string
  iconsSection: {
    title: string
    iconItems: IconItem[]
  }
  skillBoxes: SkillBox[]
}


export type IconItem = {
	title: string
	icon: { url: string }
}

export type SkillBox = {
  title: string
  percent: number
}
