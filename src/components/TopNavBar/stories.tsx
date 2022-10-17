import TopNavBar from '.'

type Props = {
  title: string
}
export default {
  title: 'TopNavBar',
  component: TopNavBar,
  args: {
    title: 'TopNavBar'
  },
  argTypes: {
    title: { type: 'string' }
  }
}

export const Default = (args: Props) => <TopNavBar {...args} />
