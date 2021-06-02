import router from 'next/router'

const Login = () => {
  const onLogin = (e) => {
    e.preventDefault()
    router.push('/dashboard')
  }
  return (
    <>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button type="button" onClick={onLogin}>
        Login
      </button>
    </>
  )
}

export default Login
