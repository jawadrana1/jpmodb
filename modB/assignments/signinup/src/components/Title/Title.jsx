import "./Title.css";

function Title(props) {
  return (
    <div className="header">
      <h2 className="header-title">{props.title}</h2>
      <div className="header-underline"></div>
    </div>
  );
}

export default Title;
