import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { makeTheme as makeThemeBs, theme as themeBs } from 'bootstrap-styled';
import UtilityProvider, { defaultProps as utilityProviderDefaultProps } from '../UtilityProvider';
import GlobalStyle from './GlobalStyle';

export const defaultProps = {
  theme: themeBs,
  injectGlobal: false,
  reset: false,
  utils: utilityProviderDefaultProps.utils,
};

export const propTypes = {
  /** Specified node element will be passed as children of `<BootstrapProvider />` component. */
  children: PropTypes.node.isRequired,
  /** Define if BootstrapProvider is in charge of calling getGlobalStyles for you, it can only be run once. */
  injectGlobal: PropTypes.bool,
  /** Define if BootstrapProvider is in charge of injecting the reset css for you, see http://meyerweb.com/eric/tools/css/reset/ for more details */
  reset: PropTypes.bool,
  /** Theme variables. */
  theme: PropTypes.object,
  /** Utilities variables. */
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
class BootstrapProvider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;

  /* eslint-enable react/no-unused-prop-types */
  static defaultProps = defaultProps;

  state = {
    theme: {},
    // isWindowPhone8Fixed is used here for testing purposes
    isWindowPhone8Fixed: null, // eslint-disable-line react/no-unused-state
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.setTheme(this.props, this.injectGlobal);
  }

  componentDidMount() {
    this.windowPhone8Fix();
  }

  /**
   * On update props
   * @param nextProps
   */
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    /**
     * We only replace the theme if the filtered theme is different from the current one
     */
    if (JSON.stringify(this.makeTheme(this.props)) !== JSON.stringify(nextProps.theme)) {
      this.setTheme(nextProps);
    }
  }

  /**
   * setTheme is in charge of replacing the theme, it does not filter it, use makeTheme for that
   * @param userTheme
   * @param cb
   */
  setTheme = ({ theme: userTheme }, cb) => {
    const theme = this.makeTheme({ theme: userTheme });
    this.setState({ theme }, cb);
  }

  /**
   * makeTheme is in charge of filtering the meta data out of the theme
   * @param userTheme
   * @returns {*}
   */
  makeTheme = ({ theme: userTheme }) => {
    const theme = makeThemeBs(userTheme);
    const metaKeyList = Object.keys(theme).filter((f) => f[0] === '_');
    metaKeyList.forEach((k) => {
      delete theme[k];
    });
    return theme;
  }

  windowPhone8Fix() {
    // Copyright 2014-2017 The Bootstrap Authors
    // Copyright 2014-2017 Twitter, Inc.
    // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      const msViewportStyle = document.createElement('style');
      msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
      document.head.appendChild(msViewportStyle);
      this.setState({
        isWindowPhone8Fixed: true, // eslint-disable-line react/no-unused-state
      });
    }
  }

  render() {
    const {
      children,
      utils,
      reset,
      injectGlobal,
    } = this.props;
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <UtilityProvider utils={utils}>
          {(reset || injectGlobal) && <GlobalStyle reset={reset} injectGlobal={injectGlobal} />}
          {children}
        </UtilityProvider>
      </ThemeProvider>
    );
  }
}

BootstrapProvider.defaultProps = defaultProps;
BootstrapProvider.propTypes = propTypes;

export default BootstrapProvider;
