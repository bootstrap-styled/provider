declare module '@bootstrap-styled/provider' {
  import { Theme, UserTheme } from 'bootstrap-styled';
  import { Component, ReactNode } from 'react';

  export type BootstrapProviderProps = {
    children: ReactNode;
    injectGlobal?: boolean;
    reset?: boolean;
    theme?: UserTheme;
    utils?: {
      align?: boolean;
      background?: boolean;
      a?: boolean;
      border?: boolean;
      clearfix?: boolean;
      display?: boolean;
      flex?: boolean;
      float?: boolean;
      position?: boolean;
      screenreaders?: boolean;
      sizing?: boolean;
      spacing?: boolean;
      text?: boolean;
      transition?: boolean;
      visibility?: boolean;
    };
  };

  type BootstrapProviderState = {
    theme: Theme;
    isWindowPhone8Fixed: boolean | null;
  };

  class BootstrapProvider extends Component<
    BootstrapProviderProps,
    BootstrapProviderState
  > {
    private setTheme: (
      userTheme: { theme: UserTheme },
      callback?: function
    ) => void;
    private makeTheme: (userTheme: { theme: UserTheme }) => Theme;
    private windowPhone8Fix: () => void;
  }

  export default BootstrapProvider;
}
