import React from "react";
import { Button, MenuItem } from "semantic-ui-react";

export default function SignedOut({signIn}) {
  return (
    <div>
      <MenuItem>
        <Button onClick={signIn}  color='violet'>Giriş yap</Button>
        <Button  color='violet' style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
      </MenuItem>
    </div>
  );
}
