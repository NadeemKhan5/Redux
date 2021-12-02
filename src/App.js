import { useState } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Promotion from "./components/Promotion";
import Pages from "./components/Pages";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Register from "./components/My Account/Register";
import SignIn from "./components/My Account/SignIn";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { ImgData } from "./DataJson";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [dropUsa, setDropUsa] = useState(false);
  const [dropEng, setDropEng] = useState(false);
  const [dropPro, setDropPro] = useState(false);

  const handleShowSide = () => setShowNav(!showNav);

  return (
    <>
      <div className="container-div">
        <div className="log-header">
          <div className="h-line">FREE SHIPPING ON ALL U.S ORDERS OVER $50</div>
          <div className="h-line-link">
            <div className="drop-down">
              <div className="btnn log-head-child drop-btn">
                USD
                <RiIcons.RiArrowDropDownLine />
              </div>
              <div className="drop-content">
                <Link>EURO</Link>
                <Link>RUPEE</Link>
                <Link>YENN</Link>
              </div>
            </div>
            <div className="drop-down">
              <div className="btnn log-head-child drop-btn">
                ENGLISH
                <RiIcons.RiArrowDropDownLine />
              </div>
              <div className="drop-content">
                <Link>RUSSIAN</Link>
                <Link>HINDI</Link>
                <Link>JAPANISE</Link>
                <Link>TAMIL</Link>
              </div>
            </div>
            <div className="drop-down">
              <div className="btnn log-head-child drop-btn">
                MY ACCOUNT
                <RiIcons.RiArrowDropDownLine />
              </div>
              <div className="drop-content">
                <Link to="/register">Register</Link>
                <Link to="/signin">Sign In</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="fl-heading">
          <span className="nav-child-1">
            <Link to="/">
              <span style={{ color: "black", border: "none" }}>COLO</span>
              <span style={{ color: "red" }}>SHOP</span>
            </Link>
          </span>
          <div className="nav-child-2 top-nov" id="myTop-nov">
            <div className="name-links">
              <div className="nav-lin">
                <Link to="/">Home</Link>
              </div>

              <div className="nav-lin">
                <Link to="/shop">Shop</Link>
              </div>

              <div className="nav-lin">
                <Link to="/promotion">Promotion</Link>
              </div>

              <div className="nav-lin">
                <Link to="/pages">Pages</Link>
              </div>

              <div className="nav-lin">
                <Link to="/blog">Blog</Link>
              </div>

              <div className="nav-lin">
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div className="icon-links">
              <div className="nav-lin">
                <Link to="/search">
                  <BiIcons.BiSearch />
                </Link>
              </div>
              <div className="nav-lin">
                <Link to="/profile">
                  <FaIcons.FaUser />
                </Link>
              </div>

              <div className="nav-lin">
                <Link to="/cart">
                  <FaIcons.FaShoppingCart />
                </Link>
              </div>
            </div>

            <div className="sidebar-nav">
              <div className="nav-icon">
                <Link to="#" className="nav-icon-link">
                  <FaIcons.FaBars onClick={handleShowSide} />
                </Link>
              </div>
              <div className={showNav ? "nav-menu active" : "nav-menu"}>
                <ul className=" nav-menu-ul">
                  <li className="nav-menu-li">
                    <Link to="#" className="menu-bars" onClick={handleShowSide}>
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  <nav className=" nav-menu-li">
                    <Link
                      to="#"
                      onClick={() => {
                        setDropUsa(!dropUsa);
                      }}
                    >
                      USD
                      <RiIcons.RiArrowDropDownLine />
                    </Link>
                    <ul
                      className={
                        dropUsa ? "drop-options active" : "drop-options"
                      }
                    >
                      <li className="drop-option-list">
                        <Link to="#">EURO</Link>
                      </li>
                      <li className="drop-option-list">
                        <Link to="#">RUPEE</Link>
                      </li>
                      <li className="drop-option-list">
                        <Link to="#">YENN</Link>
                      </li>
                    </ul>
                  </nav>
                  <nav className=" nav-menu-li">
                    <Link
                      to="#"
                      onClick={() => {
                        setDropEng(!dropEng);
                      }}
                    >
                      ENGLISH
                      <RiIcons.RiArrowDropDownLine />
                    </Link>
                    <ul
                      className={
                        dropEng ? "drop-options active" : "drop-options"
                      }
                    >
                      <li className="drop-option-list">
                        <Link to="#">RUSSIAN</Link>
                      </li>
                      <li className="drop-option-list">
                        <Link to="#">HINDI</Link>
                      </li>
                      <li className="drop-option-list">
                        <Link to="#">CHAINESE</Link>
                      </li>
                    </ul>
                  </nav>
                  <nav className=" nav-menu-li">
                    <Link
                      to="#"
                      onClick={() => {
                        setDropPro(!dropPro);
                      }}
                    >
                      MY ACCOUNT
                      <RiIcons.RiArrowDropDownLine />
                    </Link>
                    <ul
                      className={
                        dropPro ? "drop-options active" : "drop-options"
                      }
                    >
                      <li className="drop-option-list">
                        <Link to="/profile/register">REGISTER</Link>
                      </li>
                      <li className="drop-option-list">
                        <Link to="/profile/signin">SIGN IN</Link>
                      </li>
                    </ul>
                  </nav>

                  <li className=" nav-menu-li">
                    <Link to="/">HOME</Link>
                  </li>
                  <li className=" nav-menu-li">
                    <Link to="/shop">SHOP</Link>
                  </li>
                  <li className=" nav-menu-li">
                    <Link to="/promotion">PROMOTION</Link>
                  </li>
                  <li className=" nav-menu-li">
                    <Link to="/pages">PAGES</Link>
                  </li>
                  <li className=" nav-menu-li">
                    <Link to="/blog">BLOG</Link>
                  </li>
                  <li className=" nav-menu-li">
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-con">
          <div className="pic-text">
            <h6>SPRING / SUMMER COLLECTION 2017</h6>
            <br />
            <h1>Get up to 30% Off New Arrivals</h1>
          </div>
        </div>

        <div className="cat-cards">
          <div className="shop-cards women">
            <button className="btn-opt">WOMEN'S</button>
          </div>
          <div className="shop-cards ass">
            <button className="btn-opt">ACCESSORIES'S</button>
          </div>
          <div className="shop-cards men">
            <button className="btn-opt">MEN'S</button>
          </div>
        </div>
        <div className="new-arrivals">
          <h1>New Arrivals</h1>
        </div>
        <hr className="hr-line"></hr>

        <div className="filter-catagory">
          <button className="filter-btn ">ALL</button>
          <button className="filter-btn ">WOMEN's</button>
          <button className="filter-btn ">ACCESSORIES</button>
          <button className="filter-btn ">MEN'S</button>
        </div>

        <div className="container">
          {ImgData.map((item, index) => {
            return (
              <div key={index} className="gallary-filter">
                <div className="img-details">
                  <img className="imgs" src={item.src} />
                  <div className="item-details">
                    <div className="item-title">{item.title}</div>
                    <div className="item-price">{item.price}</div>
                  </div>
                  <button className="add-cart-btn">add to cart</button>
                </div>
              </div>
            );
          })}
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/promotion">
            <Promotion />
          </Route>
          <Route path="/pages">
            <Pages />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/search">
            <Contact />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/profile/register">
            <Register />
          </Route>
          <Route path="/profile/signin">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;

/* <div className="container-fluid"> 

    <div className="top">
          <div className="site-name">
            <h3>COLOSHOP</h3> <Link to="/">Home</Link>
          </div>
          <div className="navbar navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/promotion">
                  Promotion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/pages">
                  Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item" to="/Search">
                  <BiIcons.BiSearch />
                </Link>
              </li>
            </ul>
          </div>
          </div> 
       </div>   */
