
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../components/logo'
import '../css/login.scss'


const Login:React.FC = () => {
  return (
    <div id="login">
        <Container fluid='lg'>
            <Row className="box-container shadow-lg p-3 bg-white">
                <Col md={7} className='pl-0 pr-1'>
                    <div className='logo-container mb-4'>
                        <Link to="/home"><Logo/></Link>
                    </div>
                </Col>
                <Col md={5} className='pl-0 pr-0 d-flex align-items-center justify-content-center'>
                    <div className='shadow p-3 mt-5 mb-5 bg-white rounded login-form'>
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
                        <span className="register-text">You don't have an account <Link to='/register'>register now</Link> </span>
                        <Button variant="outline-dark" className='float-right'>Login</Button>
                    </Form>
                    </div>
                </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login