import React from 'react';
import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import Link from 'next/link';

const Footer = () => {
  return (
    <MDBFooter className='text-center fixed-bottom'>
      <div className='text-center p-3 m-2' style={{
        "backgroundColor": "#27292b",
        "borderRadius": "90px"
      }}>
        <Link href="/">
          <MDBBtn floating size='lg' tag='a' outline style={{"marginRight":"40px", "border": "none"}}>
            <MDBIcon fas size='xl' icon="list" color='white' />
          </MDBBtn>
        </Link>
        <Link href="/add">
          <MDBBtn floating size='lg' tag='a' outline style={{"marginRight":"40px", "marginLeft": "40px", "border": "none"}}>
            <MDBIcon fas size='xl' icon='add' color='white' />
          </MDBBtn>
        </Link>
        <Link href="/categories">
          <MDBBtn floating size='lg' tag='a' outline style={{"marginLeft":"40px", "border": "none"}}>
            <MDBIcon fas size='xl' icon='folder' color='white' />
          </MDBBtn>
        </Link>
      </div>
    </MDBFooter>
  )
}

export default Footer