import React from 'react';
import { Container } from '@plone/components';
import type { Area } from '../../types/content';

interface AddressInfoProps {
  content: Area;
}

const AddressInfo: React.FC<AddressInfoProps> = ({ content }) => {
  const { endereco, complemento, cidade, estado, cep } = content;

  return (
    <Container narrow className="address">
      <Container className="endereco">
        <span>Endereço</span>: <span>{endereco}</span>
      </Container>
      <Container className="complemento">
        <span>Complemento</span>: <span>{complemento}</span>
      </Container>
      <Container className="cidade">
        <span>Cidade</span>: <span>{cidade}</span>
      </Container>
      <Container className="estado">
        <span>Estado</span>: <span>{estado}</span>
      </Container>
      <Container className="cep">
        <span>CEP</span>: <span>{cep}</span>
      </Container>
    </Container>
  );
};

export default AddressInfo;
