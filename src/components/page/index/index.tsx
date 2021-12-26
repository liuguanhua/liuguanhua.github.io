import { isString } from 'util'
import LazyLoad from 'react-lazyload'

import styles from '@styles/sass/page/home.module.scss'

import { skillInfo } from '@store/mock'
import { jobsInfo } from '@store/mock'

import { SvgIcon, ISvgIconProps } from '@components/common'

import { ReactComponent as SvgUserSecret } from '@fonts/svg/home/user-secret.svg'
import { ReactComponent as SvgCode } from '@fonts/svg/home/code.svg'

import { ReactComponent as SvgQuoteLeft } from '@fonts/svg/home/quote-left.svg'
import { ReactComponent as SvgUser } from '@fonts/svg/menu/user.svg'
import { ReactComponent as SvgBank } from '@fonts/svg/home/bank.svg'
import { ReactComponent as SvgGithub } from '@fonts/svg/home/github.svg'
import { ReactComponent as SvgGraduationCap } from '@fonts/svg/home/graduation-cap.svg'
import { ReactComponent as SvgLinks } from '@fonts/svg/home/links.svg'
import { ReactComponent as SvgMarker } from '@fonts/svg/home/marker.svg'

import { ReactComponent as SvgBook } from '@fonts/svg/home/book.svg'
import { ReactComponent as SvgFileCode } from '@fonts/svg/home/file-code-o.svg'
import { ReactComponent as SvgMacDesktop } from '@fonts/svg/home/mac-desktop.svg'
import { ReactComponent as SvgUserPlus } from '@fonts/svg/home/user-plus.svg'
import { ReactComponent as SvgMusic } from '@fonts/svg/home/music.svg'
import { ReactComponent as SvgMotion } from '@fonts/svg/home/motion.svg'

import { ReactComponent as SvgCalendar } from '@fonts/svg/home/calendar.svg'
import { ReactComponent as SvgTrophy } from '@fonts/svg/home/trophy.svg'
import { ReactComponent as SvgJobs } from '@fonts/svg/home/jobs.svg'
import { ReactComponent as SvgBuilding } from '@fonts/svg/home/building.svg'
import { ReactComponent as SvgJobTitle } from '@fonts/svg/home/job-title.svg'

const age = new Date().getFullYear() - 1994
const { work_list } = styles

const baseInfo: {
  icon: ISvgIconProps
  title:
    | string
    | {
        text?: string
        className?: string
      }
  links?: string
}[] = [
  {
    icon: {
      component: SvgUser,
    },
    title: `男/${age}岁/(1994.09)`,
  },
  {
    icon: {
      component: SvgGraduationCap,
      className: 'font-size-md',
    },
    title: '软件技术/大专',
  },
  {
    icon: {
      component: SvgBank,
    },
    links: 'http://www.szpt.edu.cn/',
    title: '深圳职业技术学院',
  },
  {
    icon: {
      component: SvgMarker,
    },
    title: '深圳市南山区西丽镇',
  },
  {
    icon: {
      component: SvgGithub,
    },
    links: '//github.com/liuguanhua/',
    title: {
      text: 'liuguanhua.github.io',
      className: 'm-l-md',
    },
  },
  {
    icon: {
      component: SvgLinks,
    },
    links: 'http://lghayy.zcool.com.cn/',
    title: 'lghayy.zcool.com.cn',
  },
]

const empiricInfo = [
  {
    text: `具有PC端、移动端、h5、前后端分离及微信公众号、小程序的开发经验，开源社交分享组件、后台管理设计方案至GitHub。熟练使 用HTML(5)、CSS(3)、JavaScript构建高性能的Web应用程序。`,
  },
  {
    text: `熟悉JavaScript、ES6、预编译TypeScript、jQuery类库，原生BOM、DOM对象。熟练运用Ajax、Json进行数据交互，常用Axios。`,
  },
  {
    text: `熟练Flex布局，预处理器Sass，熟悉AntDesign、ElementUI、BootStrap等常用前端UI框架。了解Less、Styled-Components。`,
  },
  {
    text: `熟悉React、Vue框架进行模块化开发单页应用，状态管理库Redux、Vuex、Dva，SSR开发Next、NuxtJs，采用过RequireJs构建过 个人项目。了解Angular、SeaJs、React-Native。`,
  },
  {
    text: `开发过健身类微信小程序(WePY)，公众号端直播平台，能快速进行跨多尺寸、多平台设备开发，会用PhotoShop界面设计工具进行页面设计和原型切图。了解IlluStrator、CorelDraw。`,
  },
  {
    text: `能使用NodeJs、Gulp、WebPack搭建开发环境，并使用过Express和MockJs开发过数据接口，Postman工具进行接口测试。`,
  },
  {
    text: `熟悉使用Git版本控制，Charles抓包，掌握Linux Shell基本命令。了解Http协议、Svn、Jenkins、Docker、MySQL。`,
  },
  {
    text: `拥有良好的代码编程习惯，较强的学习能力和解决问题的能力，能保证项目在周期内完成的同时也兼顾了质量。`,
  },
]

const hobbyInfo: {
  icon: ISvgIconProps
  text: string
}[] = [
  {
    icon: {
      component: SvgBook,
    },
    text: '阅读',
  },
  {
    icon: {
      component: SvgFileCode,
    },
    text: '代码',
  },
  {
    icon: {
      component: SvgMacDesktop,
    },
    text: '网络',
  },
  {
    icon: {
      component: SvgUserPlus,
    },
    text: '交友',
  },
  {
    icon: {
      component: SvgMusic,
    },
    text: '音乐',
  },
  {
    icon: {
      component: SvgMotion,
    },
    text: '运动',
  },
]

const BlockTitle: React.FC<{
  className?: string
  title?: string
  icon?: ISvgIconProps
}> = ({ className, title, icon }) => {
  return (
    <h3 className={`color-primary ${className}`}>
      {icon?.component && <SvgIcon {...icon} />}
      <span className="vam m-l-sm">{title}</span>
    </h3>
  )
}

export const AboutMe = () => {
  return (
    <>
      <BlockTitle
        className="r-m-p"
        title="关于我"
        icon={{
          component: SvgUserSecret,
        }}
      />
      <ul className="row-content">
        <li className="row">
          {baseInfo.map(({ links, title, icon }, index) => {
            const { text, className = '' } = isString(title)
              ? { text: title }
              : title
            const node = (
              <>
                <SvgIcon {...icon} />
                <span className={`vam m-l-sm ${className}`}>{text}</span>
              </>
            )
            return (
              <div key={index} className="col-sm-6 col-lg-4">
                {links ? (
                  <a href={links} target="_blank">
                    {node}
                  </a>
                ) : (
                  node
                )}
              </div>
            )
          })}
        </li>
        <li>
          {empiricInfo.map(({ text }, index) => (
            <p key={index}>
              <SvgIcon
                className="m-r-md font-size-xs"
                component={SvgQuoteLeft}
              />
              {text}
            </p>
          ))}
        </li>
      </ul>
      <style jsx>{`
        li {
          margin-bottom: 2%;
        }
        li:first-child > div {
          margin-top: 2%;
        }
        li p {
          line-height: 2;
        }
      `}</style>
    </>
  )
}

const SkillChildList: React.FC<{
  data?: DictionaryArray
  type?: string
}> = ({ data = [], type }) => {
  return (
    <>
      {data.map((item, key) => {
        const { url, name } = item
        const path = `${type}-${item.imgName}`
        return (
          <div className="col-4 col-sm-3 col-md-4 col-lg-3 col-xl-2" key={key}>
            <a href={`${url}/`} target="_blank">
              <LazyLoad
                placeholder={<img src="/static/placeholder-skill.png" />}
              >
                <img
                  className="bg-color-white bdr-small"
                  // src={`${require(`@images/skill/${path}.png`)}`}
                  src={`/static/skill/${path}.png`}
                  alt={name}
                />
              </LazyLoad>
              <h4 className="ellipsis font-weight-normal r-m-p">{name}</h4>
            </a>
          </div>
        )
      })}
      <style jsx>
        {`
          div {
            margin-top: 2%;
          }
          a {
            display: block;
          }
          a:hover {
            opacity: 0.8;
          }
          img {
            width: 70%;
          }
        `}
      </style>
    </>
  )
}

export const SkillList: React.FC = () => {
  return (
    <>
      <BlockTitle
        title="技术栈&工具"
        icon={{
          component: SvgCode,
        }}
      />
      <ul className="row-content">
        {skillInfo.map((item, index) => {
          const { title, data, type } = item
          return (
            <li key={index}>
              <h3 className="font-weight-normal r-m-p">{title}</h3>
              <div className="row tac">
                <SkillChildList data={data} type={type} />
              </div>
            </li>
          )
        })}
      </ul>
      <style jsx>{`
        ul h3 {
          padding: 0 2%;
          display: inline-block;
          background-color: var(--color-primary);
          color: #fff;
        }
        li {
          padding: 0 10px 10px;
          border: 1px solid var(--color-default-gray);
          margin-bottom: 10px;
          border-radius: 10px;
        }
      `}</style>
    </>
  )
}

export const MyHobbyAndHonor: React.FC = () => {
  return (
    <>
      <BlockTitle
        title="兴趣爱好"
        icon={{
          component: SvgCode,
        }}
      />
      <div className="row-content">
        <ul className="row">
          {hobbyInfo.map(({ icon, text }, index) => {
            return (
              <li key={index} className="col-4 col-sm-2 col-md-4 col-lg-2">
                <SvgIcon {...icon} />
                <span className="vam m-l-sm">{text}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <BlockTitle
        className="r-m-p"
        title="荣誉证书"
        icon={{
          component: SvgTrophy,
        }}
      />
      <ul className="row-content">
        <li>
          <p>
            <SvgIcon component={SvgCalendar} />
            <span className="font-family-georgia m-l-r-md">2015-08</span>
            国家励志奖学金（对学习充满热情,肯钻研问题,不断的自我完善）
          </p>
        </li>
        <li>
          <p>
            <SvgIcon component={SvgCalendar} />
            <span className="font-family-georgia m-l-r-md">2015-07</span>
            CEAC".NET程序设计工程师"证书（通过国家信息化计算机教育认证）
          </p>
        </li>
      </ul>
      <style jsx>
        {`
          div.row-content li {
            margin-bottom: 2%;
          }
        `}
      </style>
    </>
  )
}

const createMarkup = (content) => ({ __html: content })

export const WorkExperience = () => {
  return (
    <>
      <BlockTitle
        title="工作经历"
        icon={{
          component: SvgJobs,
        }}
      />
      <ul className={`p-b-xl row-content ${work_list}`}>
        {jobsInfo.map((item, index) => {
          const {
            links,
            duties,
            details,
            project,
            enterprise,
            logoName,
            time,
          } = item
          return (
            <li key={index}>
              <div>
                {logoName && (
                  <a
                    href={links || '#'}
                    {...(links
                      ? {
                          target: '_blank',
                        }
                      : {
                          onClick: (e) => {
                            e.preventDefault()
                          },
                        })}
                    className="logo inline-block pos-rel"
                  >
                    <img
                      src={`${require(`@images/logo/${logoName}.jpg`)}`}
                      alt={logoName}
                      title={enterprise}
                    />
                    <div className="tipso pos-abs tac color-white bg-color-primary">
                      <div className="pos-rel font-family-georgia font-size-md">
                        {time}
                      </div>
                    </div>
                  </a>
                )}
                <div className="content inline-block">
                  <h3 className="r-m-p">
                    <a className="color-primary" href={links} target="_blank">
                      <SvgIcon component={SvgBuilding} />
                      <span className="vam m-l-xs">{enterprise}</span>
                    </a>
                  </h3>
                  <h4 className="r-m-p m-t-b-md">
                    <SvgIcon component={SvgJobTitle} />
                    <span className="vam m-l-sm">{duties}</span>
                  </h4>
                  <time dateTime={time}>
                    <SvgIcon component={SvgCalendar} />
                    <span className="vam m-l-md font-size-md font-family-georgia">
                      {time}
                    </span>
                  </time>
                  <h4 className="color-primary r-m-p m-t-b-md">工作描述：</h4>
                  <p dangerouslySetInnerHTML={createMarkup(details)} />
                  <h4 className="color-primary r-m-p m-t-b-md">涉及项目：</h4>
                  <p dangerouslySetInnerHTML={createMarkup(project)} />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
