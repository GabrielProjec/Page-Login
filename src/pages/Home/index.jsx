import { useNavigate } from "react-router-dom";
import * as C from "./styles";

//COMPONENTS
import Button from "../../components/Button";

//HOOKS
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>HOME</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
