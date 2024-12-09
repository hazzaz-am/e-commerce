import "./css/Account.css"

export const AccountPage = () => {
  return (
    <div className="account">
      <div className="account-container">
        <h1>Sign Up</h1>
        <div className="account-fields">
          <input type="text" name="name" id="name" placeholder="Your Name" />
          <input type="email" name="email" id="email" placeholder="Email Address" />
          <input type="password" name="password" id="password" />
        </div>

        <button>Continue</button>
        <p className="account-login">Already have an account? <span>Login here</span></p>

        <div className="account-agree">
          <input type="checkbox" name="terms" id="terms" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}