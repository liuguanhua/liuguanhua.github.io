import { ReactComponent as SvgUser } from '@fonts/svg/menu/user.svg'
import { ReactComponent as SvgWorks } from '@fonts/svg/menu/works.svg'
import { ReactComponent as SvgBlog } from '@fonts/svg/menu/blog.svg'
import { ReactComponent as SvgMenu } from '@fonts/svg/menu/menu.svg'
import { ReactComponent as SvgContact } from '@fonts/svg/menu/contact.svg'
import { ReactComponent as SvgOpenSource } from '@fonts/svg/menu/open-source.svg'

interface IMenuItemProps {
  path: string
  icon: React.FC
  title: string
  enName: string
  isHot?: boolean
}

export const HOME = '/'
export const BLOG = '/blog'
export const OPEN_SOURCE = '/open-source'

export const menuData: IMenuItemProps[] = [
  {
    path: HOME,
    icon: SvgUser,
    title: '关于',
    enName: 'me',
  },
  {
    path: '/works',
    icon: SvgWorks,
    title: '作品',
    enName: 'works',
    isHot: true,
  },
  {
    path: BLOG,
    icon: SvgBlog,
    title: '博客',
    enName: 'blog',
  },
  {
    path: OPEN_SOURCE,
    icon: SvgOpenSource,
    title: '开源',
    enName: 'GitHub',
  },
  {
    path: '/tool',
    icon: SvgMenu,
    title: '工具',
    enName: 'tool',
  },
  {
    path: '/contact',
    icon: SvgContact,
    title: '联系',
    enName: 'contact',
  },
]
