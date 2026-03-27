import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, CssBaseline, Stack } from '@mui/material'
import { theme } from '../../theme/theme'
import { GradientChip } from './GradientChip'

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <div style={{ padding: 24, background: '#0F0F1A', minHeight: '100vh' }}>
      <Story />
    </div>
  </ThemeProvider>
)

const meta: Meta<typeof GradientChip> = {
  title: 'Design System/GradientChip',
  component: GradientChip,
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
    size: { control: 'select', options: ['small', 'medium'] },
    glow: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof GradientChip>

export const Default: Story = {
  args: {
    label: 'Gradient Chip',
    color: 'primary',
    glow: true,
  },
}

export const AllColors: Story = {
  render: () => (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {(['primary', 'secondary', 'success', 'error', 'warning', 'info', 'default'] as const).map(
        (color) => <GradientChip key={color} label={color} color={color} />
      )}
    </Stack>
  ),
}

export const WithDelete: Story = {
  args: {
    label: 'Deletable',
    color: 'primary',
    onDelete: () => alert('deleted'),
  },
}

export const NoGlow: Story = {
  render: () => (
    <Stack direction="row" gap={2}>
      <GradientChip label="With glow" color="primary" glow />
      <GradientChip label="No glow" color="primary" glow={false} />
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={2} alignItems="center">
      <GradientChip label="Medium" color="primary" size="medium" />
      <GradientChip label="Small" color="primary" size="small" />
    </Stack>
  ),
}
