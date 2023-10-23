import * as C from "./styles";

function Inputs({ type, placeholder, value, onChange }) {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Inputs;
