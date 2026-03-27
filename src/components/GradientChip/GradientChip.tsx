import { Chip, type ChipProps } from '@mui/material'
import { Box } from '@mui/material'
import { gradients, glowColors, type GradientColor } from '../../theme/theme'

export type GradientChipProps = Omit<ChipProps, 'color'> & {
  color?: GradientColor
  glow?: boolean
}

export function GradientChip({
  color = 'primary',
  glow = true,
  sx,
  ...props
}: GradientChipProps) {
  const gradient = gradients[color]
  const glowColor = glowColors[color]

  return (
    <Box
      sx={{
        display: 'inline-flex',
        padding: '1.5px',
        background: gradient,
        borderRadius: '16px',
        boxShadow: glow ? `0 0 12px ${glowColor}, 0 0 24px ${glowColor}` : 'none',
      }}
    >
      <Chip
        {...props}
        sx={{
          background: '#1A1A2E',
          border: 'none',
          color: 'white',
          fontWeight: 500,
          boxShadow: `inset 0 0 8px ${glowColor}`,
          '& .MuiChip-label': {
            background: gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600,
          },
          '& .MuiChip-deleteIcon': {
            color: 'rgba(255,255,255,0.6)',
            '&:hover': { color: 'white' },
          },
          ...sx,
        }}
      />
    </Box>
  )
}
