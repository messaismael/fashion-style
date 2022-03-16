import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'


const CheckoutSummary: React.FC = () => {
  return (
      <div className='checkout-summary'>
        <h5>Order Summary</h5>
        <div className='mt-3'>Subtotal (6 items): <span className='float-right'>$452</span></div>
        <div className="divider"></div>
        <h6 className='mt-3 mb-3' >Total: <span className='float-right'>$452</span></h6>
        <Button variant='success' size="lg"> <FontAwesomeIcon  icon={faLock}  className='mr-2'/>Secure Checkout</Button>
        <p>Please review your order By submitting your order, you agree to our <span>Terms of Service</span> and <span>Privacy policy</span></p>
      </div>
  )
}

export default CheckoutSummary;