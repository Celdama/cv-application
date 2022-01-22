import React from 'react';
import { Wrapper, Content } from './footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <p>
          Copyright &copy;<span>{new Date().getFullYear()}</span> Celdama{' '}
          <i class='fab fa-github'></i>
        </p>
      </Content>
    </Wrapper>
  );
};

export default Footer;
