import React from "react";
import { Button, MenuItem } from "semantic-ui-react";

export default function SignedOut() {
  return (
    <div>
      <MenuItem>
        <Button  color='violet'>Giriş yap</Button>
        <Button  color='violet' style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
      </MenuItem>
    </div>
  );
}
