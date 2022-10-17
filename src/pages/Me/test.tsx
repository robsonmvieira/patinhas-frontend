import { render } from '@testing-library/react'
import Me from '.'

describe('Me ', () => {
  it('should render Me ', () => {
    const { getByRole } = render(<Me />)

    expect(getByRole('heading', { name: /Me/i })).toBeInTheDocument()
  })
})
