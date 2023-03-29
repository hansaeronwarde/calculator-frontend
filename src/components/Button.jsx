function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${props.bgColor} w-24 h-24 text-4xl text-white rounded-lg m-1`}
      value={props.value}
    >
      {props.value}
    </button>
  );
}
export default Button;
