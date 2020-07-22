import styled from 'styled-components';
import Obraimg from '../../assets/obra.jpeg';
import Mobile from '../../assets/mobile.jpeg';

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
`;

export const CallMsg = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;

  img {
    margin-bottom: 150px;
  }

  @media (max-width: 600px) {
    align-items: center;
    width: 90%;
    height: 60%;

    img {
      margin-bottom: 40px;
      z-index: 2;
    }
  }
`;

export const Title = styled.span`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  align-self: center;
  margin: 20px 0;
`;

export const TitleVideoSection = styled.div`
  color: #fff;
  font-size: 20px;
  padding: 40px 20px 0;
  text-align: center;
`;

export const TitleComments = styled.div`
  color: rgba(75, 75, 77);
  background: rgb(192, 194, 191);
  padding: 20px 0 0;
  margin: 20px 0 0;
  font-size: 20px;
  text-align: center;
`;

export const SubTitle = styled.span`
  color: #cecece;
  font-size: 30px;
  width: 70%;
  text-align: left;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const Button = styled.button`
  padding: 8px 10px;
  border-radius: 8px;
  border: none;
  position: relative;
  margin: 20px 0;
  background: #fff;
  color: rgba(75, 75, 77);

  :active {
    top: 1px;
  }

  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;

  iframe {
    width: 50%;
    height: 650px;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    padding: 0;

    iframe {
      width: 95%;
      border: 0;
    }
  }
`;

export const Video2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;

  div {
    margin-left: 50px;
    width: 50%;
  }

  p {
    margin-left: 50px;
    margin-top: 20px;
  }

  iframe {
    width: 50%;
    height: 650px;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column-reverse;
    padding: 0;

    div {
      margin-left: 0;
      margin-top: 20px;
      width: 90%;
    }

    p {
      margin: 20px 0;
    }

    iframe {
      width: 95%;
      border: 0;
      margin: 15px 0;
    }
  }
`;

export const TextVideo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 20px 0;

  span {
    font-size: 25px;
    margin-bottom: 12px;
  }

  li {
    margin: 8px 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 50px;
  }
`;

export const Advantage = styled.div`
  background: rgb(192, 194, 191);
  color: rgba(75, 75, 77);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 100px;
  border-top: 1px solid lightgray;

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  svg {
    color: #fff;

    :hover {
      color: lightgray;
    }
  }

  @media (max-width: 600px) {
    margin: 0 10px;
  }
`;

export const Start = styled.div`
  height: 100vh;
  background-image: url(${Obraimg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    z-index: 1;
    width: 500px;
  }

  @media (max-width: 600px) {
    width: 100%;
    background-image: url(${Mobile});

    img {
      z-index: 2;

      width: 300px;
    }
  }
`;

export const ColorUp = styled.div`
  background-color: rgba(120, 120, 120, 0.7);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Whatsapp = styled.div`
  position: fixed;
  bottom: 0;
  right: 15px;
  background: #01b751;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 10px;
  cursor: pointer;

  span {
    margin-right: 8px;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    right: 5px;
    height: 50px;

    span {
      display: none;
    }
  }
`;

export const Card = styled.div`
  margin: 50px 0;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: solid 2px rgba(75, 75, 77);
  }
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 8px;
`;

export const TextDescription = styled.div`
  font-size: 14px;
  text-align: justify;
`;
