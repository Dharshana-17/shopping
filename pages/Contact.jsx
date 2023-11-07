import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

const Contact = () => {
  return (
    <Helmet title='Contact'>
      <CommonSection title='Contact' />
      <section>
        <Container>
          <Row>
            <Col>
            const res = await fetch('https://food-ea600-default-rtdb.asia-southeast1.firebasedatabase.app/', options)
        console.log(res)
        if(res)
        {
            alert("Your Message sent")
        }
        else
        {
            alert("An error occured")
        }
    }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
