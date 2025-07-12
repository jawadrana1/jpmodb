import "./Button.css";

function Button(props) {
  // Determine the CSS class for the button based on the action and nameButton.
  const classNameButton =
    (props.action === "Sign In" || props.action === "Sign Up") &&
    props.action === props.nameButton
      ? "button"
      : "button custom-color";

  return (
    <button
      className={classNameButton}
      onClick={() => props.onClick(props.nameButton)}
    >
      {props.nameButton}
    </button>
  );
}

export default Button;
