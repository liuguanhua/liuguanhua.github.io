import styles from '@styles/sass/page/home.module.scss'

import { LayoutMain } from '@components/layout'
import { Banner } from '@components/common'
import {
  AboutMe,
  SkillList,
  MyHobbyAndHonor,
  WorkExperience,
} from '@components/page/index'

const { home_wrapper } = styles

const Home: React.FC = () => {
  return (
    <div className={home_wrapper}>
      <Banner isShowBtnDown isFullHeight />
      <LayoutMain
        pageTitleProps={{
          zhName: '刘关化－WEB前端',
          enName: 'liuguanhua WEB front-end',
        }}
      >
        <AboutMe />
        <SkillList />
        <MyHobbyAndHonor />
        <WorkExperience />
      </LayoutMain>
    </div>
  )
}

export default Home
