import { isNumber } from 'util'
import Dialog from 'rc-dialog'
import classNames from 'classnames'

import IDialogPropTypes from 'rc-dialog/lib/IDialogPropTypes'

import { ReactComponent as SvgClose } from '@fonts/svg/shared/close.svg'
import { useState, useEffect, useRef } from 'react'
import { useProgressiveImage } from '../hooks'

const setAttrUnit = (val: number | string) => (isNumber(val) ? `${val}em` : val)

declare const SvgIconSizes: ['large', 'default', 'small']
type SvgIconSize = typeof SvgIconSizes[number]

export interface ISvgIconProps extends React.SVGProps<SVGSVGElement> {
  component: React.ComponentType<any>
  width?: string | number
  height?: string | number
  size?: SvgIconSize
}

const SvgIconSizeValues: {
  [key in SvgIconSize]: number
} = {
  large: 2,
  default: 1.2,
  small: 0.8,
}

export const SvgIcon: React.FC<ISvgIconProps> = ({
  width,
  height,
  component: SvgComponent,
  className,
  size = 'default',
  ...rest
}) => {
  width = width || SvgIconSizeValues[size]
  height = height || SvgIconSizeValues[size]
  return (
    <SvgComponent
      {...{
        ...rest,
        width: setAttrUnit(width),
        height: setAttrUnit(height),
        className: `vam${className ? ` ${className}` : ''}`,
      }}
    />
  )
}

export const Modal: React.FC<IDialogPropTypes> = ({ children, ...rest }) => {
  return (
    <Dialog closeIcon={<SvgIcon size="large" component={SvgClose} />} {...rest}>
      {children}
    </Dialog>
  )
}

export const Loading: React.FC<{
  className?: string
}> = ({ className = '' }) => (
  <div className={`line-scale ${className}`}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export const Switch: React.FC<{
  checkedChildren?: string | React.ReactNode
  uncheckedChildren?: string | React.ReactNode
  onChange?: (checked: boolean, event: Event) => void
  checked?: boolean
  className?: string
  style?: React.CSSProperties
}> = ({
  checkedChildren,
  checked: initChecked = false,
  uncheckedChildren,
  onChange,
  className = '',
  style = {},
}) => {
  const keepData = useRef({
    checked: initChecked,
  })
  const [checked, setChecked] = useState(initChecked)
  const onSwitch = (e) => {
    const isChecked = !checked
    setChecked(isChecked)
    keepData.current.checked = isChecked
    onChange && onChange(isChecked, e)
  }

  useEffect(() => {
    if (!Object.is(keepData.current.checked, initChecked)) {
      setChecked(initChecked)
    }
  }, [initChecked])

  return (
    <button
      style={style}
      onClick={onSwitch}
      className={classNames(`switch${className ? ` ${className}` : ''}`, {
        checked,
      })}
    >
      <span className="content">
        {checked ? checkedChildren : uncheckedChildren}
      </span>
      <span className="round"></span>
    </button>
  )
}

export const LoadBackgroundImage = ({
  src,
  placeholder = 'https://dummyimage.com/64x64/eee/eee',
  style,
  className = '',
}: {
  src?: string
  placeholder?: string
  style?: React.CSSProperties
  className?: string
}) => {
  const loaded = useProgressiveImage(src)
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${loaded || placeholder})`, ...style }}
    />
  )
}
