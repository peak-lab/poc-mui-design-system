import { ThemeProvider, CssBaseline, Box, Typography, CardContent, Stack } from '@mui/material'
import { theme } from './theme/theme'
import { GradientChip } from './components/GradientChip/GradientChip'
import { GlowCard } from './components/GlowCard/GlowCard'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 6, minHeight: '100vh', background: '#0F0F1A' }}>
        <Typography variant="h4" fontWeight={700} color="white" mb={1}>
          POC — Design System MUI
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={6}>
          PeakLab x 40-60 studio — Gradient Chip & Glow Card
        </Typography>

        <Typography variant="overline" color="text.secondary" display="block" mb={2}>
          GradientChip — tous les variants
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={2} mb={6}>
          <GradientChip label="Primary" color="primary" />
          <GradientChip label="Secondary" color="secondary" />
          <GradientChip label="Success" color="success" />
          <GradientChip label="Error" color="error" />
          <GradientChip label="Warning" color="warning" />
          <GradientChip label="Info" color="info" />
          <GradientChip label="Default" color="default" />
          <GradientChip label="Deletable" color="primary" onDelete={() => {}} />
          <GradientChip label="No glow" color="primary" glow={false} />
          <GradientChip label="Small" color="secondary" size="small" />
        </Stack>

        <Typography variant="overline" color="text.secondary" display="block" mb={2}>
          GlowCard — halo + texture + gradient border
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={3}>
          {(['primary', 'secondary', 'success', 'warning'] as const).map((color) => (
            <GlowCard key={color} color={color} sx={{ width: 240 }}>
              <CardContent>
                <Typography variant="h6" color="white" fontWeight={600} mb={1}>
                  {color.charAt(0).toUpperCase() + color.slice(1)} Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Gradient border · inset glow · texture overlay
                </Typography>
                <Box mt={2}>
                  <GradientChip label={color} color={color} size="small" />
                </Box>
              </CardContent>
            </GlowCard>
          ))}
          <GlowCard color="primary" lightPosition="center" sx={{ width: 240 }}>
            <CardContent>
              <Typography variant="h6" color="white" fontWeight={600} mb={1}>
                Center Light
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Halo centré au milieu de la carte
              </Typography>
            </CardContent>
          </GlowCard>
          <GlowCard color="error" texture={false} sx={{ width: 240 }}>
            <CardContent>
              <Typography variant="h6" color="white" fontWeight={600} mb={1}>
                No Texture
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sans overlay de texture
              </Typography>
            </CardContent>
          </GlowCard>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}
