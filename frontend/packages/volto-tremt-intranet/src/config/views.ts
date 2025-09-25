import type { ConfigType } from '@plone/registry';
import AreaView from 'volto-tremt-intranet/components/Views/AreaView';

export default function install(config: ConfigType) {
  // Registra Visoes padrao para tipos de conteúdo
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Area: AreaView,
  };
  return config;
}
