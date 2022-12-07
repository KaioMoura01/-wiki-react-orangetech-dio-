import { ItemContainer } from "./styles"

const ItemRepo = () => {
  return (
    <ItemContainer>
        <h3>Kaio Moura</h3>
        <p>Projeto</p>
        <a href="#">Ver repositório</a><br/>
        <a href="#" className="remover">Remover</a>
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo