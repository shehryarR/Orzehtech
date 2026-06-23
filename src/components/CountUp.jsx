import { useState, useEffect, useRef } from 'react'

function CountUp({ target, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          
          let startTimestamp = null
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            
            // Ease out quad function
            const easeProgress = progress * (2 - progress)
            setCount(Math.floor(easeProgress * target))
            
            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(target)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [target, duration])

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default CountUp
