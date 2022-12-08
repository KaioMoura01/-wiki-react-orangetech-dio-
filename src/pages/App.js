import Input from "../components/input";
import {Container} from "./styles";
import Button from "../components/button";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";
import { api } from "../services/api";
import logo from "../assets/logo-white.png"

const App = () => {
  
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`);
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id);
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return;
      }else{
        alert('O repositório buscado já está em tela.');
        return;
      }
    }
    alert('Repositório não encontrado.');
  }

  const handleRemoveRepo = (id) => {
    const list = repos.filter(repos => repos.id !== id);
    setRepos(list);
  }
  
  return (
    <Container>
      <img src={logo} alt="logo" height={72} width={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}
    </Container>
  );
}
export default App;