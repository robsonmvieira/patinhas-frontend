import {
  Container,
  ContainerLogo,
  Logo,
  LogoDot,
  Main,
  BannerContainer,
  Form,
  ContainerFormGroup,
  FormGroup,
  CustomInput,
  Label,
  ContainerAction,
  ButtonSubmit,
  AlternativeAction,
  Link
} from './styles'

import { LOGIN } from '../../graphql/mutations/login'
import loginSvg from '../../assets/login.svg'

import toast, { Toaster } from 'react-hot-toast'

import { EyeSlash, EnvelopeSimple } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ApolloError, useMutation } from '@apollo/client'
import { isLoggedIn, authToken } from '../../apollo'

const inputSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, {
    message: 'The password must be at least 6 characters'
  })
})

type InputForm = z.infer<typeof inputSchema>

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch
  } = useForm<InputForm>({
    resolver: zodResolver(inputSchema)
  })

  // handle response after form submitted
  const onCompleted = (data: {
    login: {
      error: string | null
      ok: boolean
      token: string
    }
  }) => {
    const {
      login: { token, error, ok }
    } = data

    if (!ok) {
      toast.error(`${error ? error : 'Some thing wont wrong'}`)
    }
    if (token) {
      toast.success('You are welcome again', {
        duration: 4000,
        position: 'top-right',
        icon: '👏'
      })
      localStorage.setItem('@ecommerceTokenAuth', token)
      isLoggedIn(true)
      authToken(token)
    }
  }

  // handle response after form submitted with error
  const onError = (error: ApolloError) => {
    console.log(error)
  }

  //  apollo setup
  const [loginMutation, { data }] = useMutation(LOGIN, {
    onCompleted,
    onError,
    variables: { email: watch('email'), password: watch('password') }
  })

  // submit form
  const onSubmit = handleSubmit(async () => {
    await loginMutation()
  })
  return (
    <Container>
      <ContainerLogo>
        <Logo>Cherry</Logo>
        <LogoDot>.</LogoDot>
      </ContainerLogo>
      <Main>
        <BannerContainer>
          <img src={loginSvg} alt="Login" />
        </BannerContainer>
        <Form onSubmit={onSubmit}>
          <ContainerFormGroup>
            <FormGroup>
              <Label>Email: </Label>

              <CustomInput>
                <input
                  type="text"
                  aria-label="email-input"
                  {...register('email')}
                />
                <EnvelopeSimple size={24} />
              </CustomInput>
              {touchedFields?.email && errors.email && (
                <p>{errors.email.message}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password:</Label>
              <CustomInput>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  aria-label="password-input"
                  {...register('password')}
                />
                <EyeSlash size={24} />
              </CustomInput>
              {errors.password && <p>{errors.password.message}</p>}
            </FormGroup>
            {data?.login.error ?? <p>{data?.login.error}</p>}
          </ContainerFormGroup>
          <ContainerAction>
            <ButtonSubmit>Login</ButtonSubmit>
            <Toaster />
          </ContainerAction>
          <AlternativeAction>
            <span>Dont have an account? </span>
            <Link href="/register">Register</Link>
          </AlternativeAction>
        </Form>
      </Main>
    </Container>
  )
}
