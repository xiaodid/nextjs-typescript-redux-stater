import * as React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import hoc, { WithReduxStore } from "../src/store/hoc";
import '../styles/main.scss'

class MyApp extends App<WithReduxStore> {
  public render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default hoc(MyApp);
