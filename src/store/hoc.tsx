import * as React from "react";
import { NextAppContext, AppComponentProps, DefaultAppIProps } from 'next/app'
import { initializeStore, RootState, RootStore } from "./createStore";

const isServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState?: RootState): RootStore {
  if (isServer) {
    return initializeStore(initialState);
  }

  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

export interface WithReduxStore {
  reduxStore: RootStore;
}

export interface HocIProps extends DefaultAppIProps {
  initialReduxState: RootState
}

export default (App: any) => {
  return class ConnectedApp extends React.Component<AppComponentProps & HocIProps> {
    public static async getInitialProps(appContext: NextAppContext) {
      const reduxStore = getOrCreateStore();

      let appProps: DefaultAppIProps = {
        pageProps: {}
      }

      if (App.getInitialProps !== undefined) {
        appProps = await App.getInitialProps(appContext);
      }

      const ret: HocIProps = {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };

      return ret
    }

    public reduxStore: RootStore;

    constructor(props: AppComponentProps & HocIProps) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    public render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
