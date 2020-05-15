import React from 'react'
import Lint from 'next/link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          Demo
        </Typography>
        <Lint href="/"><a><Button color="inherit">Top</Button></a></Lint>
        <Lint href="/list"><a><Button color="inherit">List</Button></a></Lint>
      </Toolbar>
    </AppBar>
  )
}

export default Header
