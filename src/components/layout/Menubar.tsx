import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { SvgIcon } from '@components/common'

import { menuData, BLOG, OPEN_SOURCE } from '@scripts/menus'

interface IMenubarProps {}

const Menubar: React.FC<IMenubarProps> = () => {
  const { pathname } = useRouter()

  return (
    <nav>
      <ul>
        {menuData.map(({ path, title, icon, enName, isHot }) => {
          const isBlog = Object.is(path, BLOG)
          const node = (
            <>
              <SvgIcon
                className="mgr"
                width={1.2}
                height={1.2}
                component={icon}
              />
              <span className="m-l-xs vam">
                {title}
                <span className="m-l-r-xxs">/</span>
                <small className="font-family-niconne font-size-lg">
                  {enName}
                </small>
                {isHot && (
                  <span className="hot pos-rel">
                    <em />
                  </span>
                )}
              </span>
            </>
          )
          return (
            <li
              className={classNames({
                active: Object.is(pathname, path),
              })}
              key={path}
            >
              {[BLOG, OPEN_SOURCE].includes(path) ? (
                <a
                  href={isBlog ? '#' : 'https://github.com/liuguanhua'}
                  {...(isBlog
                    ? {
                        onClick: (e) => {
                          e.preventDefault()
                          alert('功能开发中...，敬请期待^_^')
                        },
                      }
                    : {
                        target: '_blank',
                      })}
                >
                  {node}
                </a>
              ) : (
                <Link href={path}>
                  <a>{node}</a>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menubar
