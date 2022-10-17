import { render } from '@testing-library/react'
import TopNavBar from '.'
import { MockedProvider } from '@apollo/react-testing'
describe('TopNavBar', () => {
  it('should render TopNavBar', () => {
    const { getByRole } = render(
      <MockedProvider>
        <TopNavBar />
      </MockedProvider>
    )

    expect(getByRole('heading', { name: /TopBar/i })).toBeInTheDocument()
  })
})
