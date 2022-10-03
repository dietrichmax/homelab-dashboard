import Head from "next/head"
import React from "react"
import App from "next/app"
import GlobalStyle from "@/styles/global.js"
//import config from "src/data/internal/SiteConfig"
//import Providers from "src/utils/providers"
//import "@/styles/mapbox-gl.css"
//import "@/styles/prism.css"

class MyApp extends App {
  componentDidMount() {
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        {/*<Providers>*/}
          <GlobalStyle />
          <Component {...pageProps} />
        {/*</Providers>*/}
      </>
    )
  }
}

export default MyApp