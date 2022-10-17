import React from 'react'
import Link from "next/link"
import {MDBBtn} from "mdb-react-ui-kit"

const Navbar = () => {
  return (
    <nav className='navbar' style={{"backgroundColor": "#27292b"}}>
        <Link href="/">
            <a className='navbar-brand' style={{"marginLeft": 10, "color": "#f2f5fc"}}>Tasks Web</a>
        </Link>
        {/*<Link href="/add">
            <MDBBtn outline color='dark'>New Identity</MDBBtn>
        </Link>*/}
    </nav>
  )
}

export default Navbar