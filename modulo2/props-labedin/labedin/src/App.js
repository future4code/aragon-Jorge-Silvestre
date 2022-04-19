import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQFi3DPnYHjilQ/profile-displayphoto-shrink_800_800/0/1632143182143?e=1655942400&v=beta&t=t6Hfy9GQ9U0VWHQ3zXSakB2OEaAtWE1Ri2Wi5f0WBDE" 
          nome="Jorge" 
          descricao="Oi, eu sou o Jorge. Graduado do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas, Atualmente estudando na Labenu no curso de web full stack "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          email='jorge@hotmail.com'
          rua='Rua 13 de Maio'
          bairro='José Mendes'
          estado='Florianópolis, SC'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQE0jk-tY6Z_dA/company-logo_100_100/0/1554506676046?e=2147483647&v=beta&t=FpxxRnC1iTGoMYmgCXZjwONntr7P_YJHvrpqQN8efiQ" 
          nome="Secretaria Municipal de Desenvolvimento Econômico, Trabalho e Turismo – SMDET" 
          descricao="Suporte (Help Desk)" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQGedUYRTHFhkA/company-logo_100_100/0/1640203875812?e=2147483647&v=beta&t=N3xQxbmLMIrhQoB3Q9dDDu6HfwgysMgedwYAsOX9kts" 
          nome="Grupo Leforte" 
          descricao="Auxiliar de agendamento cirúrgico" 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
