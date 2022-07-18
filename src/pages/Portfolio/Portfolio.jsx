import Header from '../../components/Header/Header'
import image from '../../assets/project.svg'

import './portfolio.css'

const list = [
  {
      id: 1,
      nome: "Busca Digimon",
      descrição: "Site com a lista de todos os Digimons e campo de busca para pesquisa dos mesmos",
      imagem: "https://media.discordapp.net/attachments/835234743108632578/995083603488821308/Digimon.jpeg?width=940&height=422"
  },
  {
      id: 2,
      nome: "Via CEP",
      descrição: "Site para consulta de endereços através do CEP informado",
      imagem: "https://media.discordapp.net/attachments/835234743108632578/995083602989690920/Busca_CEP.jpeg?width=924&height=422"
  },
  {
      id: 3,
      nome: "Meu diário Reprograma",
      descrição: "Site com 8 coisas boas que a Reprograma me trouxe",
      imagem: "https://media.discordapp.net/attachments/835234743108632578/995083603262316554/Diario_Reprograma.png?width=879&height=422"
  },
  {
      id: 4,
      nome: "M de Maravilhosa",
      descrição: "Projeto que conta um pouquinho da história de Zilda Arns",
      imagem: "https://media.discordapp.net/attachments/835234743108632578/995083632450486282/M_de_Maravilhosa.jpeg?width=930&height=422"
  }
]

function Portfolio() {
  return (
    <>
    <Header
      image={image}
      description="ilustracao mulher com site"
    >
      Meus Projetos
    </Header>

    <div className="cartao-container">
      {
        list.map(projeto => {
          return(
            <div className="cartao" key={projeto.id}>
              <h1>{projeto.nome}</h1>
              <img src={projeto.imagem} alt={"gif do projeto"+ projeto.nome}/>
              <p>{projeto.descrição}</p>
              

            </div>
          )
        })
      }
    </div>
    </>
  )
}



export default Portfolio