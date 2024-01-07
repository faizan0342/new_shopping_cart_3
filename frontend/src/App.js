import logo from './logo.svg';
import './App.css';
import Home from './screen/Home';
import Product from './screen/Product';
import CartItem from './screen/CartItem';
import {Route} from "react-router-dom"
import SignIn from './screen/SignIn';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {signOut} from "./action/userAction"
import Register from "./screen/Register"
import Shipping from './screen/Shipping';

function App() {

  var userInfos = useSelector((state) => state.userInfo)

  var {userInfo} = userInfos

  var dispatch = useDispatch()

  const signOutHandler = () => {

    dispatch(signOut())

  }

  return (
    <div>
      <header>

        <div class="container-fluid-xxl padding">
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid"></div>
            <a class="navbar-brand">Shopping Cart</a>
            <form class="d-flex" role="search">
              <a class="nav-link active" aria-current="page" href="#">Cart</a>
              <ul>
                {userInfo && userInfo.length !== 0 ? 
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   {userInfo.name}
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" onClick={() => signOutHandler()}>Sign Out</a></li>
                  </ul>
                </li>
                : <div>Sign In</div>}
              </ul>
            </form>
          </nav>
        </div>
      </header>
      <main>
        <br />
        <Route path="/" exact  component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart/:id?" component={CartItem} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
        <Route path="/shipping" component={Shipping} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
