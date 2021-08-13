
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../components/logo'
import '../css/login.scss'


const Login:React.FC = () => {
  return (
    <div id="login">
        <Container fluid='lg'>
            <Row>
                <Col md={7} className='d-flex align-items-center justify-content-center'>
                    <div className='logo-container'>
                    <Logo/>
                    </div>
                </Col>
                <Col md={5} className='d-flex align-items-center justify-content-center'>
                    <div className='shadow p-3 mb-5 bg-white rounded login-form'>
                        <h1 className='form-title'>Sign in</h1>
                    <Form >
                        <Form.Group className="position-relative">
                            <Form.Label>Email or Username</Form.Label>
                            <Form.Control type="email" name="email"/>
                        </Form.Group>
                        <Form.Group className="position-relative">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password"/>
                        </Form.Group>
                        <span className="register-text">You don't have an account <Link to='/home'>register</Link> </span>
                        <Button variant="outline-dark" className='float-right'>Submit</Button>
                    </Form>
                    </div>
                </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login