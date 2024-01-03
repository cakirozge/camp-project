import React from 'react'
import { MenuItem, Image, Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'

export default function SignedIn() {
  return (
    <div>
        <MenuItem>
            <Image avatar spaced="right" src="https://www.svgrepo.com/show/382693/user-account-person-avatar.svg" />
            <Dropdown pointing="top left" text="Özge">
                <DropdownMenu>
                    <DropdownItem text="Bilgilerim" icon="info" />
                    <DropdownItem text="Çıkış yap" icon="sign-out" />
                </DropdownMenu>
            </Dropdown>
        </MenuItem>
    </div>
  )
}

