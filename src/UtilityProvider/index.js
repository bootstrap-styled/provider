import PropTypes from 'prop-types';
import styled from 'styled-components';
import { screenUtilities, printUtilities } from '@bootstrap-styled/css-utils/lib/_api';
import { ifThen } from '@bootstrap-styled/css-mixins/lib/conditional';
import alignUtils from '@bootstrap-styled/css-utils/lib/align';
import backgroundUtils from '@bootstrap-styled/css-utils/lib/background';
import bordersUtils from '@bootstrap-styled/css-utils/lib/borders';
import clearfixUtils from '@bootstrap-styled/css-utils/lib/clearfix';
import cursorUtils from '@bootstrap-styled/css-utils/lib/cursor';
import displayUtils from '@bootstrap-styled/css-utils/lib/display';
import flexUtils from '@bootstrap-styled/css-utils/lib/flex';
import floatUtils from '@bootstrap-styled/css-utils/lib/float';
import positionUtils from '@bootstrap-styled/css-utils/lib/position';
import rebootUtils from '@bootstrap-styled/css-utils/lib/reboot';
import screenreadersUtils from '@bootstrap-styled/css-utils/lib/screenreaders';
import sizingUtils from '@bootstrap-styled/css-utils/lib/sizing';
import spacingUtils from '@bootstrap-styled/css-utils/lib/spacing';
import textUtils from '@bootstrap-styled/css-utils/lib/text';
import transitionUtils from '@bootstrap-styled/css-utils/lib/transition';
import visibilityUtils from '@bootstrap-styled/css-utils/lib/visibility';
import theme from 'bootstrap-styled/lib/theme';


export const defaultProps = {
  theme,
  utilities: {
  },
  utils: {
    // v4.4.0 implementation of utilities
    screen: true,
    print: true,
    // v4.0.0 implementation of utilities
    align: false,
    background: false,
    border: false,
    display: false,
    flex: false,
    float: false,
    position: false,
    screenreaders: false,
    sizing: false,
    spacing: false,
    text: false,
    visibility: false,
    // custom utils
    clearfix: true,
    cursor: true,
    transition: true,
  },
};

export const propTypes = {
  /** Specified node element will be passed as children of `<UtilityProvider />` component. */
  children: PropTypes.node,
  /** Theme variables. */
  theme: PropTypes.object,
  /** Utilities variables, all v4.0.0 are now disable variant. If you were relying on the old color scheme, just disable 4.4.0 and enable 4.0.0 variant */
  utils: PropTypes.shape({
    /** v4.4.0 implementation for all screen utilities */
    screen: PropTypes.bool,
    /** v4.4.0 implementation for all print utilities */
    print: PropTypes.bool,
    /** v4.0.0 implementation align theme variables. */
    align: PropTypes.bool,
    /** v4.0.0 implementation background theme variables. */
    background: PropTypes.bool,
    /** v4.0.0 implementation border theme variables. */
    border: PropTypes.bool,
    /** v4.0.0 implementation display theme variables. */
    display: PropTypes.bool,
    /** v4.0.0 implementation flex theme variables. */
    flex: PropTypes.bool,
    /** v4.0.0 implementation float theme variables. */
    float: PropTypes.bool,
    /** v4.0.0 implementation position theme variables. */
    position: PropTypes.bool,
    /** v4.0.0 implementation screenreaders theme variables. */
    screenreaders: PropTypes.bool,
    /** v4.0.0 implementation sizing theme variables. */
    sizing: PropTypes.bool,
    /** v4.0.0 implementation spacing theme variables. */
    spacing: PropTypes.bool,
    /** v4.0.0 implementation text theme variables. */
    text: PropTypes.bool,
    /** v4.0.0 implementation  visibility theme variables. */
    visibility: PropTypes.bool,
    /** add a .clearfix class. */
    clearfix: PropTypes.bool,
    /** add cursor utilities. */
    cursor: PropTypes.bool,
    /** add transition utilities. */
    transition: PropTypes.bool,
  }),
};

const UtilityProvider = styled.div`
  ${(props) => `
    ${ifThen(!props.utilities.screen, console.warn('UtilityProvider: utilities have been replaced in bootstrap 4.4.0, to switch to 4.4.0 behavior, visit @bootstrap-styled/provider documentation') || '')/* eslint-disable-line no-console */}
    ${rebootUtils.body(
    props.theme['$font-family-base'],
    props.theme['$font-size-base'],
    props.theme['$font-weight-base'],
    props.theme['$line-height-base'],
    props.theme['$body-color'],
    props.theme['$body-bg'],
  )}
    ${ifThen(props.utils.align, alignUtils.getAlignUtilities())}
    ${ifThen(props.utils.background, backgroundUtils.getBackgroundUtilities(
    props.theme['$enable-hover-media-query'],
    props.theme['$brand-primary'],
    props.theme['$brand-success'],
    props.theme['$brand-info'],
    props.theme['$brand-warning'],
    props.theme['$brand-danger'],
    props.theme['$brand-inverse'],
    props.theme['$gray-lightest'],
  ))}
    ${ifThen(props.utils.border, bordersUtils.getBordersUtilities(
    props.theme['$enable-rounded'],
    props.theme['$border-radius']
  ))}
      ${ifThen(props.utils.clearfix, clearfixUtils.getClearfixUtilities())}
      ${ifThen(props.utils.cursor, cursorUtils.getCursorUtilities())}
      ${ifThen(props.utils.display, displayUtils.getDisplayUtilities(props.theme['$grid-breakpoints']))}
    ${ifThen(props.utils.flex, flexUtils.getFlexUtilities(props.theme['$grid-breakpoints']))}
    ${ifThen(props.utils.float, floatUtils.getFloatUtilities(props.theme['$grid-breakpoints']))}
    ${ifThen(props.utils.screenreaders, screenreadersUtils.getScreenReadersUtilities())}
    ${ifThen(props.utils.spacing, spacingUtils.getSpacingUtilities(
    props.theme['$grid-breakpoints'],
    props.theme['$spacers'], // eslint-disable-line dot-notation
  ))}
    ${ifThen(props.utils.text, textUtils.getTextUtilities(
    props.theme['$enable-hover-media-query'],
    props.theme['$grid-breakpoints'],
    props.theme['$font-weight-normal'],
    props.theme['$font-weight-bold'],
    props.theme['$text-muted'],
    props.theme['$brand-primary'],
    props.theme['$brand-success'],
    props.theme['$brand-info'],
    props.theme['$brand-warning'],
    props.theme['$brand-danger'],
    props.theme['$gray-dark'],
  ))}
    ${ifThen(props.utils.transition, transitionUtils.getTransitionUtilities(
    props.theme['$enable-transitions'],
    props.theme['$transition-fade'],
    props.theme['$transition-collapse'],
  ))}
    ${ifThen(props.utils.visibility, visibilityUtils.getVisibilityUtilities(props.theme['$grid-breakpoints']))}
    ${ifThen(props.utils.position, positionUtils.getPositionUtilities(
    props.theme['$zindex-fixed'],
    props.theme['$zindex-sticky'],
  ))}
    ${ifThen(props.utils.sizing, sizingUtils.getSizingUtilities(props.theme.$sizes))} // eslint-disable-line dot-notation
    ${ifThen(props.utilities.screen && props.theme.$utilities, screenUtilities(props.theme['$grid-breakpoints'], props.theme.$utilities))}
    ${ifThen(props.utilities.print && props.theme.$utilities, printUtilities(props.theme['$grid-breakpoints'], props.theme.$utilities))}
  `}
`;

UtilityProvider.defaultProps = defaultProps;
UtilityProvider.propTypes = propTypes;

/** @component */
export default UtilityProvider;
