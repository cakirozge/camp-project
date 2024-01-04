import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  Label,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
} from "semantic-ui-react";

//Redux ile useSelectorHook kullanıyoruz işevi useState benzerdir.

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <DropdownMenu>
          {
          cartItems.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.title}
              <Label>
                {cartItem.quantity}
              </Label>
            </DropdownItem>
          ))
          }

          <DropdownDivider />
          <DropdownItem as={NavLink} to="/cart">
            Sepete git
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
