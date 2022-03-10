
import { useState } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../components/logo'
import { User } from '../model/user.model'
import { RegisterService } from '../services/register'

const Register:React.FC = () => {
    const [userData, setUserData] = useState({});

    const handleChange = (event:{target:{ value: string, name: string }})=> {
        const {target:{ value, name } } = event;
        console.log('name', name);
        (userData as any)[name] = value; 
        setUserData({...userData});
        console.log(userData)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("submitted")
        try {
            let resData = await RegisterService.registration(userData as User);
            console.log(resData);
        } catch (error: any) {
            console.log('error response  ',error);
        }
    }

  return (
    <div id="register">
        <Container fluid='lg'>
            <Row className='box-container shadow-lg bg-white'>
                <Col md={7} className='pl-0 pr-1'>
                    <div className='logo-container mb-4'>
                        <Link to="/home"><Logo/></Link>
                    </div>
                </Col>
                <Col md={5} className='pl-0 pr-0 d-flex align-items-center justify-content-center'>
                    <div className='shadow p-3 mt-5 mb-5 bg-white rounded register-form'>
                        <h1 className='form-title'>Create an Account</h1>
                    <Form  onSubmit={handleSubmit}>
                        <Row>
                          <Form.Group as={Col} lg={6} md={12} className="position-relative">
                              <Form.Label>First Name</Form.Label>
                              <Form.Control onChange={handleChange} name="firstname" required/>
                          </Form.Group>
                          <Form.Group as={Col} lg={6} md={12} className="position-relative">
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control onChange={handleChange} name="lastname" required/>
                          </Form.Group>
                        </Row>
                        <Form.Group className="position-relative">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={handleChange} name="username" required/>
                        </Form.Group>
                        <Form.Group >
                        <Form.Label>Address Email</Form.Label>
                            <Form.Control onChange={handleChange} type="email" name="email" required/>
                        </Form.Group>
                        <Form.Group className="position-relative">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} type="password" name="password" required/>
                        </Form.Group>
                        <span className="login-text">already have an account <Link to='/login'>login</Link> </span>
                        <Button variant="outline-dark" type="submit" className='float-right'>Register</Button>
                    </Form>
                    </div>
                </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register