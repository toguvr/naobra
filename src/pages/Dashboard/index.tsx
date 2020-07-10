import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/1.svg';
import {
  Container,
  Start,
  ColorUp,
  Video,
  Advantage,
  Footer,
  Whatsapp,
  CallMsg,
  SubTitle,
  Title,
  Button,
  TextVideo,
  TitleVideoSection,
} from './styles';

const Dashboard: React.FC = () => {
  const msgWhats = `Olá, gostaria de maiores informações sobre o evento #NaObra`;

  const apiWhats = `https://api.whatsapp.com/send?phone=+55024999308767&text=${msgWhats}`;

  return (
    <Container>
      <ColorUp />
      <Start id="start">
        <img src={Logo} alt="logo NaObra" />
        <CallMsg>
          <Title>#NaObra</Title>
          <SubTitle>
            ALINHADO AO CONHECIMENTO TEÓRICO, VENHA CONHECER COMO A ENGENHARIA
            FUNCIONA NA PRÁTICA!!!
          </SubTitle>
          <a target="_blank" rel="noopener noreferrer" href={apiWhats}>
            <Button>Inscreva-se já</Button>
          </a>
        </CallMsg>
      </Start>
      <TitleVideoSection>
        Venha conhecer como foi feita a fundação, a superestrutura e como está
        sendo feita a alvenaria com bloco de concreto celular de um edifício
        multifamiliar de 10 pavimentos.
      </TitleVideoSection>
      <Video id="video">
        <TextVideo>
          <span>Temas abordados no evento:</span>
          <ul>
            <li>Layout e dimensionamento de canteiro de obra;</li>

            <li>Como executar fundação em sapata;</li>

            <li>Como executar fundação em tubulão a céu aberto;</li>

            <li>Como executar os pilares (Armação, Forma e Concretagem);</li>
            <li>Como executar as vigas (Armação, Forma e Concretagem);</li>
            <li>Como executar laje nervurada; Como executar laje maciça;</li>
            <li>
              Como executar alvenaria com bloco de concreto celular autoclavado;
            </li>
            <li>Como executar escada;</li>
            <li>
              Leitura e interpretação de projeto estrutural e do laudo de
              sondagem;
            </li>
            <li>Como fazer um estribo;</li>
            <li>Como fazer aberturas em vigas;</li>
            <li>Como fazer aberturas em lajes;</li>
            <li>O que é um ensaio de esclerometria;</li>
            <li>Como bater um nível;</li>
            <li>Como verificar prumo de uma parede;</li>
            <li>Como verificar esquadro de uma parede;</li>
            <li>
              Como é feito o controle tecnológico do concreto e sua
              rastreabilidade;
            </li>
            <li>
              Como fazer o levantamento de aço, concreto e forma de uma obra;
            </li>
            <li>Problemas ocorridos na obra;</li>
            <li>
              Quais os tipos de espaçadores utilizados na obra para o cobrimento
              do concreto;
            </li>
            <li>Entre outros.</li>
          </ul>
        </TextVideo>
        <iframe
          title="video"
          src="https://www.youtube.com/embed/p0ScgVXPmDA"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Video>
      <Advantage id="advantage">
        <div>
          <span>
            E além de conhecer como é feito tudo isto, você ainda ganha:
          </span>
          <div>
            <li>Projeto Arquitetônico;</li>
            <li>Projeto Estrutural;</li>
            <li>Projeto Elétrico;</li>
            <li>Projeto Hidráulico;</li>
            <li>Projeto de Prevenção Contra Incêndio;</li>
            <li>Laudo de sondagem SPT;</li>
            <li>Quadro de cargas dos pilares;</li>
            <li>Laudo de Ensaio de Esclerometria;</li>
            <li>Laudo de Controle Tecnológico do Concreto;</li>
            <li>
              Tabelas utilizadas para cálculo estrutural e para o dia a dia da
              obra;
            </li>
            <li>
              Tabelas com informações necessárias para o layout e
              dimensionamento de canteiro de obra;
            </li>

            <li>
              + 100 fotos da infraestrutura, superestrutura e alvenaria da obra;
            </li>
            <li>+ 10 videos do dia a dia da obra;</li>
            <li>+ 5 ebooks sobre temas variados da engenharia.</li>
          </div>
          <p>
            E VOCÊ GANHARÁ UM LIVRO COM TODO O CONTEÚDO ABORDADO NA OBRA PARA
            QUE SIRVA DE APOIO EM SUA CARREIRA PROFISSIONAL.
          </p>
        </div>
      </Advantage>
      <Footer id="footer">
        <div>
          <a target="_blank" rel="noopener noreferrer" href={apiWhats}>
            <FaWhatsapp
              style={{ marginRight: '15px' }}
              cursor="pointer"
              size={25}
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/engcivil.ighor/"
          >
            <FaInstagram
              style={{ marginRight: '15px' }}
              cursor="pointer"
              size={25}
            />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/augusto-telles-471102136/"
          >
            Criado por Augusto Telles © 2020
          </a>
        </div>
      </Footer>
      <Whatsapp>
        <a target="_blank" rel="noopener noreferrer" href={apiWhats}>
          <span>
            Venha nos <br /> conhecer
          </span>
          <FaWhatsapp size="40" color="#fff" />
        </a>
      </Whatsapp>
    </Container>
  );
};

export default Dashboard;
