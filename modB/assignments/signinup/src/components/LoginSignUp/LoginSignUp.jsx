import "./LoginSignUp.css";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";

function LoginSignUp() {
  /* Functionality Sign Up button */
  const [action, setAction] = useState("Sign Up");

  /* Function to handle button clicks, updating the 'action' state */
  const handleButtonClick = (buttonName) => {
    setAction(buttonName);
  };

  const hiddenPasswordAssistance =
    action === "Sign Up" ? "hiddenDiv" : "password-assistance";

  return (
    <>
      <Title title={action} />
      <form className="form">
        <Input
          type="text"
          title="Name"
          forId="username"
          action={action}
          icon={<i className="bi bi-person-fill"></i>}
        />
        <Input
          type="email"
          title="E-mail"
          forId="email"
          action={action}
          icon={<i className="bi bi-envelope-at-fill"></i>}
        />
        <Input
          type="password"
          title="Password"
          forId="password"
          action={action}
          icon={<i className="bi bi-shield-lock-fill"></i>}
        />
        <div className={hiddenPasswordAssistance}>
          <span>
            Need help with your password?
            <a href="#" className="recovery-link">
              Recover your password
            </a>
          </span>
        </div>
        <div className="button-container">
          <Button
            nameButton="Sign Up"
            action={action}
            onClick={handleButtonClick}
          />
          <Button
            nameButton="Sign In"
            action={action}
            onClick={handleButtonClick}
          />
        </div>
      </form>
    </>
  );
}

export default LoginSignUp;
