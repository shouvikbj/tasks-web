import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import {MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit"

const Layout = ({children}) => {
  return (
    <div style={{"backgroundColor": "#0D0D0D"}}>
        <Head>
          <title>Tasks Web</title>
          <link rel="manifest" href="/manifest.json" />
          <script src="/app.js" async />
        </Head>
        {/*<Navbar/> */}
        {children}
        <MDBContainer>
          <MDBRow className='mb-3'>
            <MDBCol sm='4'></MDBCol>
            <MDBCol sm='4'>
              <Footer/>
            </MDBCol>
            <MDBCol sm='4'></MDBCol>
          </MDBRow>
        </MDBContainer>
    </div>
  )
}

export default Layout