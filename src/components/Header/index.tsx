import React from 'react';
import { Container, Subtitle, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Title>
        Me conta mais{'\n'}sobre você!
      </Title>

      <Subtitle>
        Preencha os dados abaixo{'\n'}
        e não perca nenhuma novidade!
      </Subtitle>
    </Container>
  )
}