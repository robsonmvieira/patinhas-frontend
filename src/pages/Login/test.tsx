import { render } from '@testing-library/react'
import Login from '.'
import { MockedProvider } from '@apollo/react-testing'

describe('Login', () => {
  it('should render TopNavBar', () => {
    const { getByRole, getByLabelText } = render(
      <MockedProvider>
        <Login />
      </MockedProvider>
    )

    expect(getByRole('textbox', { name: /email-input/i })).toBeInTheDocument()
    expect(getByLabelText(/password/i)).toBeTruthy()
  })
})
