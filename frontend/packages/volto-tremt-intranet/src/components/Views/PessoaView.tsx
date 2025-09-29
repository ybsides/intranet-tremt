import React from 'react';
import Image from '@plone/volto/components/theme/Image/Image';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { Container } from '@plone/components';
import ContactInfo from '../ContactInfo/ContactInfo';
import EnderecoInfo from '../EnderecoInfo/EnderecoInfo';
import type { Pessoa } from '../../types/content';

interface PessoaViewProps {
  content: Pessoa;
  [key: string]: any;
}

const PessoaView: React.FC<PessoaViewProps> = (props) => {
  const { content } = props;

  return (
    <Container id="page-document" className="view-wrapper area-view">
      <Container className="wrapper" narrow>
        {content.image && (
          <Container className={'image'}>
            <Image
              className="documentImage ui right floated image"
              alt={content.title}
              title={content.title}
              item={content}
              imageField="image"
              responsive={true}
            />
          </Container>
        )}
        {content.cargo && (
          <span className={`cargo cargo-${content.cargo.token}`}>
            {content.cargo.title}
          </span>
        )}
        <h1 className="documentFirstHeading">{content.title}</h1>
        {content.area && (
          <UniversalLink className={'area'} item={content.area}>
            {content.area.title}
          </UniversalLink>
        )}
        {content.description && (
          <p className="documentDescription">{content.description}</p>
        )}
        <ContactInfo content={content} />
        <EnderecoInfo content={content} />
      </Container>
    </Container>
  );
};

export default PessoaView;
