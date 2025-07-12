import "./Input.css";

function Input(props) {
  // Conditionally set the class name for the form input based on the action and title.
  // If the action is "Sign In" and the title is "Name," apply the "input-hidden" class; otherwise, use the default "form-input" class.
  const classNameHidden =
    props.action === "Sign In" && props.title === "Name"
      ? "form-input input-hidden"
      : "form-input";

  return (
    <div className={classNameHidden}>
      <label className="form-input-label" for={props.forId}>
        {props.icon}
        {props.title}
      </label>
      <input
        className="input-field"
        type={props.type}
        id={props.forId}
        required
      />
    </div>
  );
}

export default Input;
