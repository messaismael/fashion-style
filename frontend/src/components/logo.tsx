import { Image } from "react-bootstrap"

const Logo: React.FC = ()=> {
  return(
    <Image
      className='logo'
      src='/images/logo.png'
      height='100%'
      width='100%'
      alt='fashion style'
    />
  )
}

export default Logo;