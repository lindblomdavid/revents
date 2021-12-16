import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";


export default function NavBar({setFormOpen}) {
  return (
    <Menu inverted fixed='top'>
      <Container>
<Menu.Item header>
  <img src="/assets/logo.png" alt="logo"style={{marginRight: 15}}/>
  Re-vents
</Menu.Item>
    <Menu.Item name='Events'/>
    <Menu.Item>
    <Button onClick={() => setFormOpen(true)} postivie inverted content = 'Skapa träningstillfälle'/>
    </Menu.Item>

    <Menu.Item position='right'>

    <Button basic inverted content ='Logga in'/>
    <Button basic inverted content ='Registrera dig' style ={{marginLef:'0.5em'}}/>

    </Menu.Item>
      </Container>
    </Menu>
  )
}