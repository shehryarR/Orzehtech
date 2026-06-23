import React, { useRef, useEffect } from 'react'

function NetworkMeshBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    // Particles array (increased density and visibility)
    const particles = []
    const particleCount = Math.min(65, Math.floor((width * height) / 11000))
    const connectionDistance = 140
    const mouse = { x: null, y: null, radius: 180 }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      // Alternate colors: orange and sky blue
      const colorType = i % 2 === 0 ? 'orange' : 'blue'
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 2, // Larger particles
        colorType: colorType
      })
    }

    // Resize handler
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    canvas.parentElement.addEventListener('mousemove', handleMouseMove)
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        // Move particles
        p1.x += p1.vx
        p1.y += p1.vy

        // Bounce off walls
        if (p1.x < 0 || p1.x > width) p1.vx *= -1
        if (p1.y < 0 || p1.y > height) p1.vy *= -1

        // Keep inside bounds
        p1.x = Math.max(0, Math.min(width, p1.x))
        p1.y = Math.max(0, Math.min(height, p1.y))

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.28 // More visible lines
            // Colors depend on particle nodes connection
            if (p1.colorType === 'orange' && p2.colorType === 'orange') {
              ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})` // Orange lines
            } else if (p1.colorType === 'blue' && p2.colorType === 'blue') {
              ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})` // Sky Blue lines
            } else {
              ctx.strokeStyle = `rgba(100, 116, 139, ${alpha * 0.8})` // Slate gray connecting lines
            }
            ctx.lineWidth = 1.0 // Thicker lines
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Draw connection to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p1.x - mouse.x
          const mdy = p1.y - mouse.y
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy)

          if (mdist < mouse.radius) {
            const alpha = (1 - mdist / mouse.radius) * 0.35 // Higher mouse line visibility
            ctx.strokeStyle = p1.colorType === 'orange' ? `rgba(249, 115, 22, ${alpha})` : `rgba(2, 132, 199, ${alpha})`
            ctx.lineWidth = 1.2
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }

        // Draw particle dot
        ctx.fillStyle = p1.colorType === 'orange' ? `rgba(249, 115, 22, 0.25)` : `rgba(2, 132, 199, 0.25)` // Rich node colors
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fill()

        // Core dot glow on hover near mouse
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p1.x - mouse.x
          const mdy = p1.y - mouse.y
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
          if (mdist < mouse.radius) {
            ctx.fillStyle = p1.colorType === 'orange' ? `rgba(249, 115, 22, ${(1 - mdist / mouse.radius) * 0.8})` : `rgba(2, 132, 199, ${(1 - mdist / mouse.radius) * 0.8})`
            ctx.beginPath()
            ctx.arc(p1.x, p1.y, p1.radius + 1.2, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (canvas && canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove)
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}

export default NetworkMeshBackground
