import React, { useState } from "react";
import { MenuMenu, MenuItem, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  //default ya true ya false olmalıdır.
  //isAuthenticated kullandığımız (ya isAuthenticated'dır ya da isAuthenticated değildir bu nedenle false) için useStatein defaultu false olmaldır

  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />
          <MenuMenu position="right">
            {cartItems.length > 0 &&  <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}

//fixed: menu sayfa kaydıkça sabit kaldı.
//inverted: menu siyah
//container: menuyu sekillendirdik. menu içine yazdık. -semantic-uı

// SignedOut ve SignedIn hangisini göstereceğine karar veren Navidir.
//Bir datayı tutma yapmak istediğimizde aklımıza State gelmelidir.

// {cartItems.length > 0 &&  <CartSummary />} eleman sayısı 0'dan büyük olursa CartSummar render et demektir. sepet görünmez
