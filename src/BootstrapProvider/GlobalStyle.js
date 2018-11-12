import { createGlobalStyle } from 'styled-components';
import { getGlobalStyleNoBootstrapProvider } from '@bootstrap-styled/css-utils/lib/reboot';
import themeBs from 'bootstrap-styled/lib/theme';

import meyerwebReset from './reset';

const GlobalStyle = createGlobalStyle`
  ${(props) => `
    ${props.reset ? meyerwebReset : ''}
    ${props.injectGlobal ? getGlobalStyleNoBootstrapProvider(
    props.theme['$font-family-base'] || themeBs['$font-family-base'],
    props.theme['$font-size-base'] || themeBs['$font-size-base'],
    props.theme['$font-weight-base'] || themeBs['$font-weight-base'],
    props.theme['$line-height-base'] || themeBs['$line-height-base'],
    props.theme['$body-color'] || themeBs['$body-color'],
    props.theme['$body-bg'] || themeBs['$body-bg'],
  ) : ''}
  `}
`;

export default GlobalStyle;
