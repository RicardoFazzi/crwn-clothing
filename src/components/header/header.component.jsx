import React from "react";
import { ReactComponent as Logo } from "../../assets/crown-icon.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { HeaderComponent, LogoContainer, OptionsCnotainer, OptionLink } from './headers.styles';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderComponent>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsCnotainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsCnotainer>
      {hidden ? null : <CartDropdown />}
    </HeaderComponent>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
