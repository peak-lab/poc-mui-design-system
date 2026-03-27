import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, CssBaseline, CardContent, Typography, Stack, Box } from '@mui/material'
import { theme } from '../../theme/theme'
import { GlowCard } from './GlowCard'
import { GradientChip } from '../GradientChip/GradientChip'

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ padding: 24, background: '#0F0F1A', minHeight: '100vh' }}>
      <Story />
    </div>
  </ThemeProvider>
)

const meta: Meta<typeof GlowCard> = {
  title: 'Design System/GlowCard',
  component: GlowCard,
  decorators: [withTheme],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'default'],
    },
    lightPosition: { control: 'select', options: ['left', 'center', 'right'] },
    texture: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof GlowCard>

const SampleContent = ({ color }: { color: string }) => (
  <CardContent>
    <Typography variant="h6" color="white" fontWeight={600} mb={1}>
      {color.charAt(0).toUpperCase() + color.slice(1)} Card
    </Typography>
    <Typography variant="body2" color="text.secondary" mb={2}>
      Gradient border · directional glow · texture overlay
    </Typography>
    <GradientChip label={color} color={color as never} size="small" />
  </CardContent>
)

export const Default: Story = {
  args: {
    color: 'primary',
    lightPosition: 'left',
    texture: true,
    sx: { width: 280 },
  },
  render: (args) => (
    <GlowCard {...args}>
      <SampleContent color={args.color ?? 'primary'} />
    </GlowCard>
  ),
}

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" flexWrap="wrap" gap={3}>
      {(['primary', 'secondary', 'success', 'error', 'warning'] as const).map((color) => (
        <GlowCard key={color} color={color} sx={{ width: 220 }}>
          <SampleContent color={color} />
        </GlowCard>
      ))}
    </Stack>
  ),
}

export const LightPositions: Story = {
  render: () => (
    <Stack direction="row" gap={3}>
      {(['left', 'center', 'right'] as const).map((pos) => (
        <GlowCard key={pos} color="primary" lightPosition={pos} sx={{ width: 220 }}>
          <CardContent>
            <Typography variant="h6" color="white" fontWeight={600}>
              Light {pos}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Halo positionné a {pos === 'left' ? 'gauche' : pos === 'center' ? 'droite' : 'droite'}
            </Typography>
          </CardContent>
        </GlowCard>
      ))}
    </Stack>
  ),
}

export const TextureComparison: Story = {
  render: () => (
    <Stack direction="row" gap={3}>
      <GlowCard color="primary" texture sx={{ width: 220 }}>
        <CardContent>
          <Typography variant="h6" color="white" fontWeight={600}>
            With texture
          </Typography>
          <Typography variant="body2" color="text.secondary">texture: true</Typography>
        </CardContent>
      </GlowCard>
      <GlowCard color="primary" texture={false} sx={{ width: 220 }}>
        <CardContent>
          <Typography variant="h6" color="white" fontWeight={600}>
            No texture
          </Typography>
          <Typography variant="body2" color="text.secondary">texture: false</Typography>
        </CardContent>
      </GlowCard>
    </Stack>
  ),
}

export const WithChips: Story = {
  render: () => (
    <GlowCard color="secondary" sx={{ width: 320 }}>
      <CardContent>
        <Typography variant="h6" color="white" fontWeight={600} mb={2}>
          Featured Project
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
          <GradientChip label="React" color="primary" size="small" />
          <GradientChip label="MUI v7" color="secondary" size="small" />
          <GradientChip label="TypeScript" color="info" size="small" />
        </Box>
        <Typography variant="body2" color="text.secondary">
          Composants MUI customises avec gradients, glows et effets avances.
        </Typography>
      </CardContent>
    </GlowCard>
  ),
}
