import { createTheme } from '@mui/material/styles'

export const gradients = {
  primary: 'linear-gradient(135deg, #6B4EFF 0%, #A855F7 100%)',
  secondary: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
  success: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
  error: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
  warning: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
  info: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
  default: 'linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)',
} as const

export type GradientColor = keyof typeof gradients

export const glowColors = {
  primary: 'rgba(107, 78, 255, 0.4)',
  secondary: 'rgba(59, 130, 246, 0.4)',
  success: 'rgba(16, 185, 129, 0.4)',
  error: 'rgba(239, 68, 68, 0.4)',
  warning: 'rgba(245, 158, 11, 0.4)',
  info: 'rgba(59, 130, 246, 0.4)',
  default: 'rgba(107, 114, 128, 0.4)',
} as const

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6B4EFF' },
    secondary: { main: '#3B82F6' },
    background: {
      default: '#0F0F1A',
      paper: '#1A1A2E',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
})
