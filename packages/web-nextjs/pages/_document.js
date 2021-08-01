import React, { Children } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry, StyleSheet } from 'react-native';
import config from '../app.json';

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const styles = StyleSheet.create({
  html: { height: '100%' },
  body: { height: '100%', overflow: 'hidden' },
});

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent(config.name, () => Main);
    const { getStyleElement } = AppRegistry.getApplication(config.name);
    const page = await renderPage();
    const documentStyles = [
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
    ];
    return { ...page, styles: Children.toArray(documentStyles) };
  }

  render() {
    return (
      <Html style={styles.html}>
        <Head />
        <body style={styles.body}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
