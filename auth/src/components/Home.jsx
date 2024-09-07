import { SignInButton, SignUpButton } from "@clerk/clerk-react"

const Home = () => {
  return (
    <div>
<h1> Sign in with this button</h1>
<SignInButton />
<SignUpButton />
    </div>
  )
}

export default Home