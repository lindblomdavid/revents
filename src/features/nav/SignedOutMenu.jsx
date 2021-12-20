import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOutMenu({ setAuthenticated }) {
  return (
    <Menu.Item position='right'>
      <Button
        onClick={() => setAuthenticated(true)}
        basic
        inverted
        content='Logga in'
      />
      <Button
        basic
        inverted
        content='Registrera dig'
        style={{ marginLef: "0.5em" }}
      />
    </Menu.Item>
  );
}
