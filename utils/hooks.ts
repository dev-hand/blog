import { useEffect, useState } from 'react'
import lodash from 'lodash'

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true)
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1080)
    window.addEventListener('resize', lodash.debounce(resize, 500))
    return () =>
      window.removeEventListener('resize', lodash.debounce(resize, 500))
  }, [])
  const resize = () => {
    setIsDesktop(window.innerWidth >= 1080)
  }
  return isDesktop
}
