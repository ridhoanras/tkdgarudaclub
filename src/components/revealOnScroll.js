import React, { useEffect, useRef, useState } from "react"

/**
 * Membungkus konten dan menambahkan kelas `is-visible` ketika elemen masuk viewport.
 * Dipakai bersama utility class `.reveal` di global.css.
 * Menghormati prefers-reduced-motion secara otomatis lewat CSS (lihat global.css).
 */
function RevealOnScroll({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.18 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default RevealOnScroll
