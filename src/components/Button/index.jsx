import * as C from "./styles";

// eslint-disable-next-line react/prop-types
function Button({ Text, onClick, Type = "button" }) {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
}

export default Button;
