import { styled } from '../../stitches.config'

export const Container = styled('div', {
  gap: '$5r',
  display: 'flex',
  flexDirection: 'column',
  '@md': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
})

export const ContainerLogo = styled('div', {
  mt: '8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@lg': {
    display: 'none'
  }
})

export const Logo = styled('span', {
  color: '$gray-500',
  fontSize: '3.5rem',
  fontWeight: '600'
})

export const LogoDot = styled('span', {
  color: '$green-600',
  fontSize: '4rem'
})

export const BannerContainer = styled('div', {
  '& > img': {
    display: 'none'
  },

  '@lg': {
    ml: '1rem',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.3)',
    '& > img': {
      display: 'block',
      width: '500px',
      height: '500px'
    }
  }
})

export const Main = styled('div', {
  width: '100%',
  height: '100vh',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '@lg': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export const ContainerFormGroup = styled('div', {
  gap: '$2r',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '@md': {}
})

export const Form = styled('form', {
  mt: '1rem',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '@md': {
    width: '70%'
  },

  '@lg': {
    width: '50%'
  },
  '@xl': {
    width: '40%'
  }
})

export const FormGroup = styled('div', {
  width: '80%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})
export const Label = styled('label', {
  fontSize: '.9rem',
  color: '$gray-500'
})

export const CustomInput = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  p: '.8rem',
  mt: '.5rem',
  width: '100%',
  fontSize: '.9rem',
  color: '$gray-500',
  borderRadius: '5px',
  border: '1px solid $gray-300',

  '&:focus-within': {
    outline: 'none',
    border: '2px solid $violet-400',
    boxShadow: '0 0 0 20px $violet-900'
  },
  '& > input': {
    flex: 1,
    border: 0,
    outline: 0,
    color: '$gray-500'
  },
  '@md': {}
})
export const Input = styled('input', {
  p: '.8rem',
  mt: '.5rem',
  width: '100%',
  fontSize: '.9rem',
  color: '$gray-500',
  borderRadius: '5px',
  border: '1px solid $gray-300',
  '&:focus': {
    outline: 'none',
    border: '2px solid $violet-400',
    boxShadow: '0 0 0 20px $violet-900'
  }
})

export const ContainerAction = styled('div', {
  width: '80%',
  mt: '1.5rem'
})

export const ButtonSubmit = styled('button', {
  border: 0,
  width: '100%',
  p: '.8rem 1.5rem',
  backgroundColor: '$violet-700',
  color: '$gray-100',
  fontSize: '$4',
  lineHeight: '1.5',
  letterSpacing: '0.02857em',
  fontWeight: 'bold',
  boxShadow: '0 0 0 20px $violet-900',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'all .2s ease',
  '&(not:disabled):hover': {
    backgroundColor: '$violet-600'
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.7
  }
})

export const ButtonSubmitText = styled('span', {
  color: '$white'
})

export const AlternativeAction = styled('div', {
  mt: '1rem',
  '& > span': {
    fontSize: '.8rem',
    color: '$gray-700'
  }
})
export const Link = styled('a', {
  fontWeight: '600',
  fontSize: '.9rem',
  color: '$violet-700',
  textDecoration: 'none'
})
