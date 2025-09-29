import React from 'react';
import { Container } from '@plone/components';
import type { Area } from '../../types/content';

interface EnderecoInfoProps {
  content: Area;
}

const EnderecoInfo: React.FC<EnderecoInfoProps> = ({ content }) => {
  const { endereco, complemento, cidade, estado, cep } = content;
  return (
    <Container narrow className={'endereco-info'}>
      {endereco && (
        <Container>
          <span className="endereco">{endereco}</span>
        </Container>
      )}
      {complemento && (
        <Container>
          <span className="complemento">{complemento}</span>
        </Container>
      )}
      {cidade && estado && (
        <Container>
          <span className="cidade">{cidade}</span> {' - '}
          <span className={`estado estado-${estado.token}`}>
            {estado.token}
          </span>
        </Container>
      )}
      {cep && (
        <Container>
          <span className="cep">{cep}</span>
        </Container>
      )}
    </Container>
  );
};

export default EnderecoInfo;
