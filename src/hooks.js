import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the 'visible' class is added.
 * Use with the .reveal CSS class.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, ...options }
    )

    // Observe all .reveal children, or the element itself
    const targets = el.querySelectorAll('.reveal')
    if (targets.length > 0) {
      targets.forEach((t, i) => {
        t.style.transitionDelay = `${(i % 4) * 0.08}s`
        observer.observe(t)
      })
    } else {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Animates a number from 0 to target when element enters viewport.
 */
export function useCountUp(target, { prefix = '', suffix = '', duration = 1600 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now()
          const frame = (now) => {
            const t = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - t, 3)
            el.textContent = prefix + Math.floor(ease * target).toLocaleString() + suffix
            if (t < 1) requestAnimationFrame(frame)
            else el.textContent = prefix + target.toLocaleString() + suffix
          }
          requestAnimationFrame(frame)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, prefix, suffix, duration])

  return ref
}

/**
 * Animates skill bar widths when section enters viewport.
 */
export function useSkillBars() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.skill-fill').forEach((bar) => {
            bar.style.width = bar.dataset.w + '%'
          })
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
