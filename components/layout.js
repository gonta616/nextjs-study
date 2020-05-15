import React from 'react'
import { Container } from '@material-ui/core'
import Header from './header'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container maxWidth="lg">
        {children}
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout
