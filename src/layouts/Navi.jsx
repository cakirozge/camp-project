import React from "react";
import { MenuMenu, MenuItem, Button, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
export default function Navi() {
  return (
    <div>
      <Menu inverted fixed>
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />
          <MenuMenu position="right">
            <CartSummary />
            <MenuItem>
              <Button primary>Sign Up</Button>
            </MenuItem>
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}

//fixed: menu sayfa kaydıkça sabit kaldı.
//inverted: menu siyah
//container: menuyu sekillendirdik. menu içine yazdık. -semantic-uı
