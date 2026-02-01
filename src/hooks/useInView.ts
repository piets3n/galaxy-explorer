import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.1, rootMargin = '100px', triggerOnce = false } = options
  const [isInView, setIsInView] = useState(false)
  const [viewed, setViewed] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)
        
        if (inView && !viewed) {
          setViewed(true)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, viewed])

  return { ref, isInView: triggerOnce ? viewed : isInView }
}
