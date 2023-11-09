import React from 'react';
import{ Container,Row,Col,ListGroup,ListGroupItem } from "reactstrap";
import{ Link } from "react-router-dom";
import '../../styles/footer.css';

const quickLinks =[
  {
    path:'/about',
    display:'About'
  },
  {
    path:'#',
    display:'Privacy Policy'
  },
  {
    path:'/cars',
    display:'Car Listing'
  },
  {
    path:'/blogs',
    display:'Blog'
  },
  {
    path:'/contact',
    display:'Contact'
  },
 
]

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='4' sm='12'>
        <div className="logo footer_logo">
              <h1>
                <Link to='/home' className="d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                     Rent Car<br/>Service
                  </span>
                </Link>
              </h1>
        </div>
        <p className ="footer_logo-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Ullam modi a consectetur nulla! Consectetur, qui pariatur repudiandae maiores, accusantium sint maxime, voluptatum obcaecati excepturi hic porro consequuntur magnam quis! Officiis.
        </p>
        </Col>
        <Col lg="2" md="4" sm="6">
          <div className="mb-4">
            <h5 className="footer_link-title mb-4">Quick Links</h5>
            <ListGroup>
              {quickLinks.map((item, index) => (
                <ListGroupItem key={index} className="p-0 mt-3 quick_link" >
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>))
              }
            </ListGroup>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <div className="md-4">
          <h5 className="footer_link-title">Head Office</h5>
          <p className="office_info">Phone: 9182763694</p>
          <p className="office_info">Email:tejaswini.yallamraju2@gmail.com</p>
          <p className="office_info">Office Time:10am - 7pm </p>
          <p className="office_info">123 Vedayapalem,Nellore</p>
          
          </div>
        </Col>

        <Col lg='3' md='4'>
          <div className="mb-4">
          <h5 className="footer_link-title">Newsletter</h5> 
          <p className="section_description">Subscribe our newsletter</p>
          <div className="newsletter">
            <input type="email" placeholder="Email"/>
            <span><i class="ri-send-plane-line"></i>
            </span>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer