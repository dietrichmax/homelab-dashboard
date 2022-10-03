import React, { useEffect } from "react"
import styled from "styled-components"
import Sidebar from '@/src/components/sidebar/sidebar'


const prism = require("prismjs")
//import Header from "@/components/navigation/header/header"
//import Footer from "@/components/navigation/footer/footer"
require("prismjs/components/prism-python")

const Container = styled.div``

export default function Layout({ children }) {
  useEffect(() => {
    prism.highlightAll()
  }, [])

  return (
    <>
      {/*<Header />
      <Sidebar />*/}
      <Container>{children}</Container>
      {/*<Footer />*/}
    </>
  )
}