import React from 'react';
import { Container } from '@plone/components';
import type { Area } from '../../types/content';

interface ContactInfoProps {
  content: Area;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ content }) => {
  const { telefone, email } = content;

  return (
    <Container narrow className="contato">
      <Container className="telefone">
        <span>Telefone</span>: <span>{telefone}</span>
      </Container>
      <Container className="email">
        <span>E-mail</span>: <a href={`mailto:${email}`}>{email}</a>
      </Container>
    </Container>
  );
};

export default ContactInfo;
