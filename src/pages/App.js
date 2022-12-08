import Input from "../components/input";
import {Container} from "./styles";
import Button from "../components/button";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";

const App = () => {
  
  const [repos, setRepos] = useState([]);
  
  return (
    <Container>
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="logo" height={72} width={72}/>
      <Input/>
      <Button/>
      <ItemRepo/>
    </Container>
  );
}
export default App;