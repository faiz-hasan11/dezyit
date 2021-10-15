import { Navbar, Nav, Container } from 'react-bootstrap';
const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" style={{backgroundColor:'#302B70',color:'white'}}>
            <Container style={{paddingLeft:'10%',paddingRight:'10%'}}>
                <Navbar.Brand href="#home"><img alt="Logo" src="https://static.wixstatic.com/media/ec9816_fac99786349f4b59aeaf8550dacdbc2d~mv2.gif" className="d-inline-block align-top" width="75" height="50"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                    <Nav  className="justify-content-between" style={{ width: "65%"}}>
                        <Nav.Link href="#sec1" style={{color:'white',fontWeight:'600'}}>Home</Nav.Link>
                        <Nav.Link href="#sec3" style={{color:'white',fontWeight:'600'}}>Our Product</Nav.Link>
                        <Nav.Link href="#sec4" style={{color:'white',fontWeight:'600'}}>Why Us?</Nav.Link>
                        <Nav.Link href="#sec5" style={{color:'white',fontWeight:'600'}}>Blogs</Nav.Link>
                        <Nav.Link href="#sec6" style={{color:'white',fontWeight:'600'}}>Contact Us</Nav.Link>
                    </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation