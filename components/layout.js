import { Container } from '@material-ui/core';
import Header from './header'

export default ({children}) => {
  return (
    <>
      <Header></Header>
      <Container maxWidth="lg">
        {children}
      </Container>
    </>
  )
}