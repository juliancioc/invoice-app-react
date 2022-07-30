import { useEffect, useState } from 'react'

const useResizeHook = (callback: any) => {
  const [windowInnerHeight, setWindowInnerHeight] = useState(window.innerHeight)

  const updateDimensions = () => {
    setWindowInnerHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    callback()
  }, [windowInnerHeight, callback])
}

export const useWindowSizeHook = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [isMobile, setIsMobile] = useState(false)

  useResizeHook(() => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
    setIsMobile(window.innerWidth <= 768)
  })
  
  return { width, height, isMobile }
}
