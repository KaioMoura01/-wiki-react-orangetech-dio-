import Input from "../components/input";
import {Container} from "./styles";
import {logo} from "../assets/logo-white.png"
import ItemRepo from "../components/ItemRepo";

const App = () => {
  return (
    <Container>
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="logo" height={72} width={72}/>
      <Input/>
      <ItemRepo/>
    </Container>
  );
}
export default App;