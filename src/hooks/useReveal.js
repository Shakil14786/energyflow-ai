import { useEffect, useRef } from 'react'

/**
 * Adds the 'in-view' class to an element the first time it enters the
 * viewport, triggering the .reveal fade-up defined in index.css.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const children = node.hasAttribute('data-reveal-group')
      ? Array.from(node.children)
      : [node]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, ...options }
    )

    children.forEach((child, i) => {
      child.classList.add('reveal')
      child.style.animationDelay = `${i * 80}ms`
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [])

  return ref
}
