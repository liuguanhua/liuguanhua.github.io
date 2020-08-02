import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Router from 'next/router'
import classNames from 'classnames'
import { debounce } from 'throttle-debounce'
import { isString, isBoolean, isUndefined } from 'util'

import styles from '@styles/sass/frame/menus.module.scss'

import { isSmallScreen } from '@scripts/helper'
import {
  APP_CONFIG,
  THEME_COLOR_LIST,
  DEFAULT_THEME_COLOR,
  BACKGROUND_COLOR_LIST,
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_DARK_COLOR,
  DEFAULT_LOVEEYE_COLOR,
} from '@scripts/constant'
import {
  globalSelf,
  generateNumList,
  setStorage,
  getStorage,
} from '@scripts/utils'

import { CtxStore } from '../context'

import Menubar from './Menubar'
import { SvgIcon, Switch } from '../common'

import { ReactComponent as SvgCheck } from '@fonts/svg/menu/check.svg'
import { ReactComponent as SvgSetting } from '@fonts/svg/merge/setting.svg'
import { ReactComponent as SvgClose } from '@fonts/svg/shared/close.svg'

import { useIsVisible } from '../hooks'

const { side_wrapper, logo, theme_wrapper, head_menu } = styles
const { name, logo: logoPic } = globalSelf.g_config
const themeNums = generateNumList(5)
const toggleBtnNums = generateNumList(3)
const mediaScheme = () => window.matchMedia('(prefers-color-scheme: dark)')

const SideLogo: React.FC = () => {
  return (
    <Link href="/">
      <a className={`tac pos-rel block ${logo}`} title={name}>
        <div className="round bdr-half">
          <i className="icon-circle pos-abs t-0" />
        </div>
        <h2 className="pos-abs r-m-p color-white bg-color-primary">
          <span className="vam">
            前端
            <br />
            一枚
          </span>
        </h2>
        <img className="pos-abs vam" src={logoPic} alt={name} />
      </a>
    </Link>
  )
}

const BackgroundOrColorTheme: React.FC = () => {
  const [isFollowSystem, setIsFollowSystem] = useState(false)
  const keepData = useRef({
    isFollowSystem,
  })
  const [activeKey, setActiveKey] = useState()
  const [currentColor, setCurrentColor] = useState(DEFAULT_THEME_COLOR)
  const { dispatch } = useContext(CtxStore)

  const [, ...rest] = BACKGROUND_COLOR_LIST

  const onSwitchTheme = ({
    backgroundKey,
    isColor = true,
    isMemory = true,
    isEqualReturn = true,
  }: {
    backgroundKey: any
    isColor?: boolean
    isMemory?: boolean
    isEqualReturn?: boolean
  }) => {
    if (isUndefined(backgroundKey)) return
    try {
      const isEqual = isEqualReturn && Object.is(activeKey, backgroundKey)
      const [isDefaultColor, isDarkColor, isLoveEyeColor] =
        isColor && !isEqual
          ? [
              Object.is(DEFAULT_BACKGROUND_COLOR, backgroundKey),
              rest.includes(backgroundKey),
              Object.is(backgroundKey, DEFAULT_LOVEEYE_COLOR),
            ]
          : []
      const isEmpty = isEqual || isDefaultColor
      const bodyStyle = isEmpty
        ? {}
        : {
            background: isColor
              ? backgroundKey
              : `url(${require(`@images/icons/icon-bg${backgroundKey}.png`)})`,
          }
      const docStyle = document.documentElement.style

      docStyle.setProperty(
        '--color-default-gray',
        isLoveEyeColor ? DEFAULT_DARK_COLOR : isDarkColor ? '#fff' : '#aaa'
      )
      docStyle.setProperty(
        '--color-lighten-gray',
        isLoveEyeColor ? '#d2d2d2' : isDarkColor ? '#676767' : '#dadada'
      )
      setActiveKey(isEqual ? void 0 : backgroundKey)
      isMemory &&
        setStorage(APP_CONFIG, {
          backgroundKey: isEmpty ? void 0 : backgroundKey,
        })
      dispatch({
        type: 'global',
        payload: {
          bodyStyle,
        },
      })
    } catch (error) {
      console.warn(`引入背景图片失败`)
    }
  }

  const onSwitchColor = (color) => {
    if (Object.is(currentColor, color)) return
    const docStyle = document.documentElement.style
    docStyle.setProperty('--color-primary', color)
    setCurrentColor(color)
    setStorage(APP_CONFIG, {
      themeColor: color,
    })
  }

  const onCustomColorChange = useCallback(debounce(1000, onSwitchColor), [])

  const setThemeBackground = () => {
    const { backgroundKey } = getStorage(APP_CONFIG)
    onSwitchTheme({
      backgroundKey,
      isColor: isString(backgroundKey) && backgroundKey.includes('#'),
      isEqualReturn: false,
    })
  }

  const handleSwitchTheme = (e?: MediaQueryListEvent) => {
    if (!keepData.current.isFollowSystem) return
    const isDarkMode = e ? e.matches : mediaScheme().matches
    if (isDarkMode) {
      return onSwitchTheme({
        backgroundKey: DEFAULT_DARK_COLOR,
        isMemory: false,
        isEqualReturn: false,
      })
    }
    return onSwitchTheme({
      backgroundKey: DEFAULT_BACKGROUND_COLOR,
      isMemory: false,
    })
  }

  const changeIsFollowSystem = (isOpen: boolean) => {
    setIsFollowSystem(isOpen)
    keepData.current.isFollowSystem = isOpen
  }

  const onFollowSystem = (checked) => {
    setStorage(APP_CONFIG, {
      isFollowSystem: checked,
    })
    changeIsFollowSystem(checked)
    checked ? handleSwitchTheme() : setThemeBackground()
  }

  useEffect(() => {
    const { themeColor, isFollowSystem: storeIsFollowSystem } = getStorage(
      APP_CONFIG
    )
    themeColor && onSwitchColor(themeColor)
    if (isBoolean(storeIsFollowSystem) && storeIsFollowSystem) {
      changeIsFollowSystem(true)
      return handleSwitchTheme()
    }
    setThemeBackground()
  }, [])

  useEffect(() => {
    const media = mediaScheme()
    media.addListener
      ? media.addListener(handleSwitchTheme)
      : media.addEventListener('change', handleSwitchTheme)
    return () => {
      ;(media.removeListener || media.removeListener)(handleSwitchTheme)
    }
  }, [])

  return (
    <section className={`${theme_wrapper} tac p-b-xl`}>
      <h4 className="font-weight-normal r-m-p">背景</h4>
      <div className="m-t-xl">
        {BACKGROUND_COLOR_LIST.map((color) => {
          return (
            <button
              className={classNames('pos-rel', {
                active: !isFollowSystem && Object.is(activeKey, color),
              })}
              disabled={isFollowSystem}
              style={{
                width: 42,
                height: 32,
                backgroundColor: color,
              }}
              onClick={() => onSwitchTheme({ backgroundKey: color })}
              key={color}
            >
              <SvgIcon
                className="pos-abs tblr-0 m-auto hide color-primary"
                component={SvgCheck}
              />
            </button>
          )
        })}
        {themeNums.slice(-(themeNums.length - 2)).map((item) => {
          const index = ++item
          return (
            <button
              className={classNames('pos-rel', {
                active: !isFollowSystem && Object.is(activeKey, index),
              })}
              disabled={isFollowSystem}
              {...(activeKey && {
                style: {
                  boxShadow: '0px 0px 5px var(--color-lighten-gray)',
                },
              })}
              onClick={() =>
                onSwitchTheme({ backgroundKey: index, isColor: false })
              }
              key={index}
            >
              <i className={`icon-bg${index}`} />
              <SvgIcon
                className="pos-abs tblr-0 m-auto hide color-primary"
                component={SvgCheck}
              />
            </button>
          )
        })}
        <h4 className="font-weight-normal r-m-p m-t-b-xl">
          跟随系统:
          <span className="m-l-xxs">
            <Switch
              checked={isFollowSystem}
              checkedChildren="开"
              uncheckedChildren="关"
              onChange={onFollowSystem}
            />
          </span>
        </h4>
      </div>
      <h4 className="font-weight-normal r-m-p m-b-xl">颜色</h4>
      {THEME_COLOR_LIST.map((color, index) => {
        const isLast = Object.is(THEME_COLOR_LIST.length - 1, index)
        return (
          <button
            className={classNames('pos-rel', {
              active: Object.is(currentColor, color),
            })}
            style={{
              width: 42,
              height: 32,
              backgroundColor: color,
            }}
            {...(!isLast && {
              onClick: () => onSwitchColor(color),
            })}
            key={color}
          >
            <SvgIcon
              className="pos-abs tblr-0 m-auto hide color-white"
              component={SvgCheck}
            />
            {isLast && (
              <>
                <input
                  className="input-custom-color pos-abs tblr-0 w-h-100 cursign"
                  onChange={({ target: { value } }) =>
                    onCustomColorChange(value)
                  }
                  type="color"
                />
                <span className="font-size-xs color-white">自定义</span>
              </>
            )}
          </button>
        )
      })}
    </section>
  )
}

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = () => {
  const { store } = useContext(CtxStore)
  const { bodyStyle } = store
  const keepData = useRef({
    pathname: '',
  })
  const { pathname } = useRouter()
  const [toogle, setToogle] = useState(false)
  const { isShow, toggleContent } = useIsVisible()

  useEffect(() => {
    if (!isSmallScreen()) return
    const handleRouteChange = (url) => {
      const { pathname } = keepData.current
      if (!Object.is(url, pathname)) {
        setToogle(false)
      }
    }
    const { events } = Router
    events.on('routeChangeStart', handleRouteChange)
    return () => {
      events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  useEffect(() => {
    keepData.current.pathname = pathname
  }, [pathname])

  return (
    <>
      <div
        className={`pos-fix tar z-3 t-l-0 w-100 bg-color-primary ${head_menu}`}
      >
        <button
          className={classNames(`bg-color-transparent vam`, {
            active: toogle,
          })}
          onClick={() => setToogle(!toogle)}
        >
          {toggleBtnNums.map((num) => (
            <span key={num}>
              <i />
            </span>
          ))}
        </button>
      </div>
      <section
        style={{
          ...(toogle && {
            left: 0,
          }),
          zIndex: 13,
          ...bodyStyle,
        }}
        className={classNames(
          `pos-fix t-l-0 h-100 bg-color-white ${side_wrapper}`,
          {
            active: toogle,
          }
        )}
      >
        <SideLogo />
        <Menubar />
        <div className="pos-rel">
          <button
            onClick={toggleContent}
            className={classNames(
              'btn-theme-setting pos-abs bg-color-primary color-white p-tblr-xxs font-size-lg bd-none z-1'
            )}
          >
            <SvgIcon component={isShow ? SvgClose : SvgSetting} />
          </button>
          <div
            className="pos-abs tblr-0 m-auto"
            style={{
              transform: `translateX(${isShow ? 0 : '-100%'})`,
              transition: '.5s',
            }}
          >
            <BackgroundOrColorTheme />
          </div>
        </div>
      </section>
    </>
  )
}

export default Sidebar
