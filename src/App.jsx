import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Section from './components/Section'
import ItemLista from './components/ItemLista'

function App() {
  const [count, setCount] = useState(0)

  const svgs = [
    {
      Link:"https://www.twitch.tv/maykbrito",
      imgLink:"/assets/twitch.svg",
      alt:"Twitch do Mayk Brito",
    },
      
    {
      Link:"https://www.twitter.com/maykbrito",
      imgLink:"/assets/twitter.svg",
      alt:"Twitter do Mayk Brito",
    },

    {
      Link:"https://www.instagram.com/maykbrito",
      imgLink:"/assets/instagram.svg",
      alt:"Instagram do Mayk Brito",
    },

    {
      Linkurl:"https://www.youtube.com/maykbrito",
      imgLink:"/assets/youtube.svg",
      alt:"Youtube do Mayk Brito",
    }
  ]

  return (
    <div className="App">
      <Header/>

      <main>
        <Section title="Meus Jogos" subtitle="Os games que eu mais curto jogar!" classeUL="games-list">
          <ItemLista 
              link="https://www.twitch.tv/directory/game/League%20of%20Legends" 
              imgLink="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" 
              alt="Imagem do jogo League of Legends"
          />
          <ItemLista 
              Link="https://www.twitch.tv/directory/game/VALORANT" 
              imgLink="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg"
              alt="Imagem do jogo Valorant"
          />
          <ItemLista 
              Link="https://www.twitch.tv/directory/game/Minecraft" 
              imgLink="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg"
              alt="Imagem do jogo Minecraft"
          />
          <ItemLista 
              Link="https://www.twitch.tv/directory/game/Teamfight%20Tactics" 
              imgLink="https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg"
              alt="Imagem do jogo TFT"
          />
        </Section>

        <Section title="Canais e Streamers" subtitle="Lista de canais e transmissões que não perco!" classeUL="channel-list">
          <ItemLista
              Link="https://www.twitch.tv/maykbrito" 
              imgLink="https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png" 
              
              alt="Imagem de Mayk Brito"
          />
          <ItemLista 
              Link="https://www.twitch.tv/alanzoka" 
              imgLink="https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png" 
              alt="Imagem de Alanzoka"
          />
          <ItemLista 
              Link="https://www.twitch.tv/cellbit"
              imgLink="https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png"
              alt="Imagem de Cellbit"
          />
        </Section>

        <Section title="Minhas Redes" subtitle="Conecte-se comigo agora mesmo!" classeUL="social-list">
            {
              svgs.map(
                function(item_vetor){
                  return(
                    <ItemLista
                        Link={item_vetor.Link}
                        imgLink={item_vetor.imgLink}
                        alt={item_vetor.alt}
                    />        
                  )
                }
              )
            }
        </Section>
      </main>
      
      <div className="card">
        <button onClick={
          () => setCount((count) => count + 1)
        }
        >
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App