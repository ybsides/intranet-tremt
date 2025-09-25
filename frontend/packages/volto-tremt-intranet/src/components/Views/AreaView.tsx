import React from 'react';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import { Container } from '@plone/components';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';
import type { Area } from '../../types/content';

import ContactInfo from '../ContactInfo/ContactInfo';

interface AreaViewProps {
  content: Area;
  location?: {
    pathname: string;
  };
  [key: string]: any;
}

const AreaView: React.FC<AreaViewProps> = (props) => {
  const { content, location } = props;
  const path = getBaseUrl(location?.pathname || '');

  return (
    <Container id="page-document" className="view-wrapper area-view">
      <RenderBlocks {...props} path={path} />
      <ContactInfo content={content} />
    </Container>
  );
};

export default AreaView;
