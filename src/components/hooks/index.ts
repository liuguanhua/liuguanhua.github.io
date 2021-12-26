import { useRef, useEffect, useState } from 'react'

export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (ev: Event) => void,
  element: Window | Element | null = IS_CLIENT ? window : null
): void {
  const savedHandler = useRef(handler)
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!element || !element.addEventListener) return
    const eventListener = (event) => savedHandler.current(event)
    element.addEventListener(eventName, eventListener)
    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}

export interface IIsVisibleEmitProps {
  isShow: boolean
  showContent: () => void
  hideContent: () => void
  toggleContent: () => void
}

export const useIsVisible = (
  initStatus: boolean = false
): IIsVisibleEmitProps => {
  const [visible, setVisible] = useState(initStatus)
  const toggle = (status: boolean = true) => {
    setVisible(status)
  }
  return {
    isShow: visible,
    showContent: () => toggle(),
    hideContent: () => toggle(false),
    toggleContent: () => toggle(!visible),
  }
}

export function usePrevious<T = undefined>(value: T): T
export function usePrevious(value) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

//ref: https://stackoverflow.com/a/60458593
export const useProgressiveImage = (src: string = '') => {
  const [sourceLoaded, setSourceLoaded] = useState('')

  useEffect(() => {
    if (!src) return
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
    img.onerror = () => {}
  }, [src])

  return sourceLoaded
}
