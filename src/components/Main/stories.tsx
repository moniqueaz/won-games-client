import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default',
    description: 'Default'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Basic Title',
  description: 'Basic description'
}
