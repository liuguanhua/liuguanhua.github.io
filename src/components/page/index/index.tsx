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
      text: 'github.com/liuguanhua',
      className: 'm-l-md',
    },
  },
  {
    icon: {
      component: SvgLinks,
    },
    links: 'http://lgh930.com/',
    title: 'www.lgh930.com',
  },
  ]

const empiricInfo = [
  {
    text: `深入掌握现代前端技术栈，包括 React、Vue、TypeScript、Next.js、UniApp、Vite、Rsbuild、Jotai、UnoCSS、Ant Design、Element UI 等，均有完整项目实践经验。`,
  },
  {
    text: `熟悉工程化与架构设计，了解 Monorepo + Turborepo 方案，具备独立搭建前端工程体系的能力；代码规范方面有 Biome、ESLint 等工具的落地经验。`,
  },
  {
    text: `具备全链路开发与部署能力，熟练使用 Git/SVN 进行版本管理，掌握 Nginx、PM2 部署，Charles 抓包，Ngrok 代理及 Shell 基本操作。`,
  },
  {
    text: `主导或深度参与过地图、BI平台、社区、备案、任务流程管理、微信小程序/公众号、直播、旅游、办公等多类型项目开发，项目详见作品集（http://lgh930.com/works）`,
  },
  {
    text: `在 GitHub（github.com/liuguanhua）开源了社交分享组件、省市区级联 Node.js 爬虫及后台管理设计方案，具备良好的技术沉淀与分享意识。`,
  },
  {
    text: `在研发提效方面，积极使用 Cursor、Copilot 等 AI 编码助手提升开发效率，并利用 Claude、Gemini、GPT 等模型进行 UI 代码生成与开发辅助。`,
  }
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
            <span className="font-family-georgia m-l-r-md">2020-12</span>
            荣获公司“最佳新人奖”（表现优秀，绩效突出，对工作认真负责）
          </p>
        </li>
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
                  <p dangerouslySetInnerHTML={createMarkup(details.split('\n').join('<br>'))} />
                  <h4 className="color-primary r-m-p m-t-b-md">涉及项目：</h4>
                  <p dangerouslySetInnerHTML={createMarkup(project.split('\n').join('<br>'))} />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
