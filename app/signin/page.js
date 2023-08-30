import SignInButton from "../components/SingInButton"

export const SignIn = () => {
  return (
    <div className={`
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
    `}>
        <p 
        className={``}
        >
            Clique para efetuar login
        </p>
        <SignInButton />
    </div>
  )
}

export default SignIn