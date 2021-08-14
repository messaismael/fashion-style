
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../components/logo'
import '../css/register.scss'


const Register:React.FC = () => {
  return (
    <div id="register">
        <Container fluid='lg'>
            <Row className='box-container shadow-lg bg-white'>
                <Col md={7} className='pl-0 pr-1'>
                    <div className='logo-container mb-4'>
                        <Logo/>
                    </div>
                </Col>
                <Col md={5} className='d-flex align-items-center justify-content-center'>
                    <div className='shadow p-3 mt-5 mb-5 bg-white rounded register-form'>
                        <h1 className='form-title'>Create an Account</h1>
                    <Form >
                        <Row>
                          <Form.Group as={Col} lg={6} md={12} className="position-relative">
                              <Form.Label>First Name</Form.Label>
                              <Form.Control name="firstname"/>
                          </Form.Group>
                          <Form.Group as={Col} lg={6} md={12} className="position-relative">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control name="lastname"/>
                          </Form.Group>
                        </Row>
                        <Form.Group className="position-relative">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username"/>
                        </Form.Group>
                        <Form.Group >
                        <Form.Label>Address Email</Form.Label>
                            <Form.Control type="email" name="email"/>
                        </Form.Group>
                        <Form.Group className="position-relative">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password"/>
                        </Form.Group>
                        <span className="login-text">already have an account <Link to='/login'>login</Link> </span>
                        <Button variant="outline-dark" className='float-right'>Register</Button>
                    </Form>
                    </div>
                </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register