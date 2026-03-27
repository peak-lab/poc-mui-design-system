import { Card, type CardProps } from '@mui/material'
import { gradients, glowColors, type GradientColor } from '../../theme/theme'

export type GlowCardProps = Omit<CardProps, 'color'> & {
  color?: GradientColor
  lightPosition?: 'left' | 'center' | 'right'
  texture?: boolean
}

export function GlowCard({
  color = 'primary',
  lightPosition = 'left',
  texture = true,
  sx,
  children,
  ...props
}: GlowCardProps) {
  const gradient = gradients[color]
  const glowColor = glowColors[color]

  const lightX = lightPosition === 'left' ? '20%' : lightPosition === 'center' ? '50%' : '80%'

  return (
    <Card
      {...props}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(160deg, #1A1A2E 0%, #0F0F1A 100%)`,
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: `0 8px 32px rgba(0,0,0,0.4), 0 0 40px ${glowColor}`,

        // Layer 1 : halo lumineux directionnel
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 60% 50% at ${lightX} 30%, ${glowColor}, transparent 70%)`,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 0,
        },

        // Layer 2 : bordure gradient + texture (via ::after)
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: texture
            ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`
            : 'none',
          borderRadius: 'inherit',
          pointerEvents: 'none',
          zIndex: 0,
        },

        // Bordure gradient via outline trick
        '& > *': {
          position: 'relative',
          zIndex: 1,
        },

        // Highlight gradient sur le top border
        backgroundImage: `
          linear-gradient(#1A1A2E, #0F0F1A),
          ${gradient}
        `,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        ...sx,
      }}
    >
      {children}
    </Card>
  )
}
