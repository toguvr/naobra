import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Logo from '../../assets/1.svg';
import Danielle from '../../assets/danielle.jpg';
import Rodolfo from '../../assets/rodolfo.jpeg';
import Lidiene from '../../assets/lidiene.jpeg';
import Daiana from '../../assets/daiana.jpeg';
import {
  Container,
  Start,
  ColorUp,
  Video,
  Advantage,
  Video2,
  Footer,
  Whatsapp,
  CallMsg,
  SubTitle,
  TitleComments,
  // Button,
  TextVideo,
  TitleVideoSection,
  Card,
  Name,
  TextDescription,
} from './styles';

const Dashboard: React.FC = () => {
  const msgWhats = `Olá, gostaria de maiores informações sobre o evento #NaObra`;

  const apiWhats = `https://api.whatsapp.com/send?phone=+55024999308767&text=${msgWhats}`;

  return (
    <Container>
      <ColorUp />
      <Start id="start">
        <CallMsg>
          <img src={Logo} alt="logo NaObra" />
          {/* <Title>#NaObra</Title> */}
          <SubTitle>
            Alinhado ao conhecimento teórico, venha conhecer como a engenharia
            funciona na prática!
          </SubTitle>
          {/* <a target="_blank" rel="noopener noreferrer" href={apiWhats}>
            <Button>Inscreva-se já</Button>
          </a> */}
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
            <li>Como executar laje nervurada;</li>
            <li> Como executar laje maciça;</li>
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
          title="com alunos"
          src="https://www.youtube.com/embed/jFq_R6gSPqs"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Video>
      <TitleComments>Comentários de quem já foi:</TitleComments>
      <Advantage id="comments">
        <Card>
          <img src={Danielle} alt="foto Danielle" />
          <Name>Danielle Sales</Name>
          <TextDescription>
            Foi muito importante para mim que não tive a vivência, saber o
            “passo a passo” desde o início de uma construção. Porque mesmo
            formada acho que fica tudo muito vago. Foi muito bom conhecer tudo
            de perto, e também as informações valiosas que tivemos. Foi tudo
            muito bem explicado!
          </TextDescription>
        </Card>
        <Card>
          <img src={Daiana} alt="foto Daiana" />
          <Name>Daiana Rodrigues</Name>
          <TextDescription>
            Ighor, quero te parabenizar pela sua grande iniciativa com esse
            projeto, quero que saiba que estou muito feliz pelo aprendizado,
            desejo todo sucesso com esse projeto.
          </TextDescription>
        </Card>
        <Card>
          <img src={Rodolfo} alt="" />
          <Name>Rodolfo Silva</Name>
          <TextDescription>
            Queria deixar aqui o meu agradecimento por essa oportunidade de
            participar do projeto NaObra, criado pelo Engenheiro Ighor. É com
            satisfação que digo que foi muito mais do que eu esperava, a atenção
            do Engenheiro Ighor é muito top, a forma como ele explica deixa tudo
            muito mais claro e além de tudo, ainda ganhamos uma apostila com
            fotos, ensaio de sondagem, nota fiscal de concretagem, tabela de
            bitolas e entre outras coisas que são muito importantes na nossa
            vida profissional. Só tenho a agradecer pela oportunidade. Sucesso
            pra todos. #NaObra
          </TextDescription>
        </Card>

        <Card>
          <img src={Lidiene} alt="" />
          <Name>Lidiene Venancio</Name>
          <TextDescription>
            Primeiramente gostaria de parabeniza-lo pelo sábado de conhecimentos
            que você me proporcionou, foi muito interessante sua abordagem, você
            soube conduzir as informações de forma clara e direta...muito
            obrigada!!!
          </TextDescription>
        </Card>
      </Advantage>
      <TitleVideoSection>
        E além de conhecer como é feito tudo isto, você ainda ganha:
      </TitleVideoSection>
      <Video2 id="advantage">
        <iframe
          title="video chamada"
          src="https://www.youtube.com/embed/p0ScgVXPmDA"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
        <div>
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
            E VOCÊ GANHARÁ UM APOSTILA COM TODO O CONTEÚDO ABORDADO NA OBRA PARA
            QUE SIRVA DE APOIO EM SUA CARREIRA PROFISSIONAL.
          </p>
        </div>
      </Video2>
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
