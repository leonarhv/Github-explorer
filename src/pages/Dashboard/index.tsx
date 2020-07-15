import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/53581258?s=460&u=2e1869f145581b571cdd167edd5fa0f50aca961b&v=4"
            alt="Profile img"
          />
          <div>
            <strong>leonarhv/Agenda-contatos</strong>
            <p>Projeto Agenda de contatos usando SPRING + REACT</p>
          </div>
          <FiChevronRight />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/53581258?s=460&u=2e1869f145581b571cdd167edd5fa0f50aca961b&v=4"
            alt="Profile img"
          />
          <div>
            <strong>leonarhv/Agenda-contatos</strong>
            <p>Projeto Agenda de contatos usando SPRING + REACT</p>
          </div>
          <FiChevronRight />
        </a>

        <a href="#">
          <img
            src="https://avatars0.githubusercontent.com/u/53581258?s=460&u=2e1869f145581b571cdd167edd5fa0f50aca961b&v=4"
            alt="Profile img"
          />
          <div>
            <strong>leonarhv/Agenda-contatos</strong>
            <p>Projeto Agenda de contatos usando SPRING + REACT</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
