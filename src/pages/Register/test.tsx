import { render } from '@testing-library/react'
import Register from '.'

describe('TopNavBar', () => {
  it('should render TopNavBar', () => {
    const { getByRole } = render(<Register />)

    expect(getByRole('heading', { name: /Register/i })).toBeInTheDocument()
  })
})
