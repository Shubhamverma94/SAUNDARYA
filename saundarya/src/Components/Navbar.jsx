import "./Navbar.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSearch, FiHeart } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import React, { useState } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Login from "../Pages/Login";

const Navbar = () => {
  const navData = JSON.parse(localStorage.getItem("user"));
  const cartItems = JSON.parse(localStorage.getItem("shopping-cart"));
    const [user, setUser] = useState("");
    
  const handleName = () => {
    //  localStorage.clear();
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <div className="NavbarContainer-1">
        <div className="Navbar-11">
          <div className="Navbar-12">
            <div className="Searchlogo">
              {" "}
              <FiSearch />{" "}
            </div>
            <input
              className="Navbar-13"
              type="text"
              placeholder="Search SAUNDARYA"
            />
          </div>
          <div className="Navbar-14">
            <Link to={`/`} className="Navbar-15">
              SAUNDARYA
            </Link>
          </div>
          <div className="Navbar-16">
            <div className="Navbar-17">
              <li>
                <Link to="/wishlist">
                  <FiHeart style={{ color: "pink" }} />
                </Link>
              </li>
              <li>|</li>
              <Link to={`/checkout`}>
                <li>
                  <HiOutlineShoppingBag />
                </li>
              </Link>
              <li>|</li>
              <Link to={`/login`} >
                <span id="adjustment1">
                  <li>
                    <RiContactsLine />
                  </li>
                  <li style={{ marginLeft: "5px" }}>
                    {navData == null ? "Login" : ""}
                  </li>
                </span>
            </Link>
            
              <div>{navData == null ? "" : navData} </div>
              {/* <div>{navData==null ? "":<button onClick={handleName}>Logout</button>}</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="NavbarContainer-2">
        <div className="header--left">
          <ul>
            <li className="nav-hover ">
              {" "}
              <a className="heading1" href="">
                SALE
              </a>
            </li>
            <li className="nav-hover">
              <a href="" className="heading">
                MAKEUP
              </a>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    <ul>
                      <li className="first">
                        <Link to={"/Makeup"}>FACE</Link>
                      </li>
                      <li className="active">
                        <Link to={"/Makeup"}>Foundation</Link>
                      </li>
                      <li className="active">
                        <Link to={"/Makeup"}>BB & CC Cream</Link>
                      </li>
                      <li className="active">
                        <Link to={"/Makeup"}>Concealer</Link>
                      </li>
                      <li className="active">
                        <Link to={"/Makeup"}>Face Primer</Link>
                      </li>
                      <li className="active">
                        <Link to={"/Makeup"}>Highlighter</Link>
                      </li>
                      <li className="active">
                        <Link to={"/Makeup"}>Makeup Palette</Link>
                      </li>
                      <li className="active">
                        <Link to={"/Makeup"}>Face Brushes</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="first">
                        <Link to={"/Makeup"}>EYE</Link>
                      </li>
                      <li>
                        <Link to={"/Makeup"}>Eye Palettes</Link>
                      </li>
                      <li>
                        <Link to={"/Makeup"}>Mascara</Link>
                      </li>
                      <li>
                        <Link to={"/Makeup"}>Eyeliner</Link>
                      </li>
                      <li>
                        <Link to={"/Makeup"}>Eyebrow</Link>
                      </li>
                      <li>
                        <Link to={"/Makeup"}>Eyeshadow</Link>
                      </li>
                      <li>
                        <Link to={"/Makeup"}>Eye Primer</Link>
                      </li>
                      <li>
                        <Link to={"/Makeup"}>Eye Brushes</Link>
                      </li>
                      <li>
                        <Link to={"/Makeup"}>FACE</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">LIP</a>
                        </li>
                        <li>
                          <a href="">Lip Stain</a>
                        </li>
                        <li>
                          <a href="">Lipstick</a>
                        </li>
                        <li>
                          <a href="">Lip Gloss</a>
                        </li>
                        <li>
                          <a href="">Lip Liner</a>
                        </li>
                        <li>
                          <a href="">Lip Balm & Treatment</a>
                        </li>
                        <li>
                          <a href="">Lip Brushes </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">CHEEK</a>
                        </li>
                        <li>
                          <a href="">Blush</a>
                        </li>
                        <li>
                          <a href="">Bronzer</a>
                        </li>
                        <li>
                          <a href="">Highlighter</a>
                        </li>
                        <li>
                          <a href="">Face Oils</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">MAKEUP ACCESSORIES </a>
                        </li>
                        <li>
                          <a href="">Tweezers & Eyebrow Tools</a>
                        </li>
                        <li>
                          <a href="">Nakeup Removers</a>
                        </li>
                        <li>
                          <a href="">Sponges & Applicators</a>
                        </li>
                        <li>
                          <a href="">Makeup Bags & Travel Cases</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">NAIL MAKEUP </a>
                        </li>
                        <li>
                          <a href="">Nail Polish</a>
                        </li>
                        <li>
                          <a href="">Nail Care</a>
                        </li>
                        <li>
                          <a href="">Highlighter</a>
                        </li>
                        <li>
                          <a href="">Manicure Tools</a>
                        </li>
                        <li>
                          <a href="">Pedicure Tools</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <a className="heading" href="">
                SKINCARE
              </a>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">FACE</a>
                        </li>
                        <li className="active">
                          <a href="">Foundation</a>
                        </li>
                        <li className="active">
                          <a href="">BB & CC Cream</a>
                        </li>
                        <li className="active">
                          <a href="">Concealer</a>
                        </li>
                        <li className="active">
                          <a href="">Face Primer</a>
                        </li>
                        <li className="active">
                          <a href="">Highlighter</a>
                        </li>
                        <li className="active">
                          <a href="">Makeup Palette</a>
                        </li>
                        <li className="active">
                          <a href="">Face Brushes</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">EYE </a>
                        </li>
                        <li>
                          <a href="">Eye Palettes</a>
                        </li>
                        <li>
                          <a href="">Mascara</a>
                        </li>
                        <li>
                          <a href="">Eyeliner</a>
                        </li>
                        <li>
                          <a href="">Eyebrow</a>
                        </li>
                        <li>
                          <a href="">Eyeshadowr</a>
                        </li>
                        <li>
                          <a href="">Eye Primer</a>
                        </li>
                        <li>
                          <a href="">Eye Brushes</a>
                        </li>
                        <li>
                          <a href="">Contact Lenses</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>LIP</h5> */}
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">LIP</a>
                        </li>
                        <li>
                          <a href="">Lip Stain</a>
                        </li>
                        <li>
                          <a href="">Lipstick</a>
                        </li>
                        <li>
                          <a href="">Lip Gloss</a>
                        </li>
                        <li>
                          <a href="">Lip Liner</a>
                        </li>
                        <li>
                          <a href="">Lip Balm & Treatment</a>
                        </li>
                        <li>
                          <a href="">Lip Brushes </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>CHEEK</h5> */}
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">CHEEK </a>
                        </li>
                        <li>
                          <a href="">Blush</a>
                        </li>
                        <li>
                          <a href="">Bronzer</a>
                        </li>
                        <li>
                          <a href="">Highlighter</a>
                        </li>
                        <li>
                          <a href="">Face Oils</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    {/* <h3>NAIL MAKEUP</h3> */}

                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">NAIL MAKEUP </a>
                        </li>
                        <li>
                          <a href="">Nail Polish</a>
                        </li>
                        <li>
                          <a href="">Nail Care</a>
                        </li>
                        <li>
                          <a href="">Highlighter</a>
                        </li>
                        <li>
                          <a href="">Manicure Tools</a>
                        </li>
                        <li>
                          <a href="">Pedicure Tools</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <a className="heading" href="">
                FRAGRANCE
              </a>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>WOMEN</h5> */}
                    <ul>
                      <Link to={`/Makeup`}>
                        <li className="first">
                          <a href="">WOMEN </a>
                        </li>
                        <li>
                          <a href="">Perfume</a>
                        </li>
                        <li>
                          <a href="">Mists and Deodorants</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>MEN</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">MEN </a>
                      </li>
                      <li>
                        <a href="">Perfume</a>
                      </li>
                      <li>
                        <a href="">Body Sprays & Deodorant</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <a className="heading" href="">
                HAIRCARE
              </a>
              <div className="hover ">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>SHAMPOO & CONDITIONER</h5> */}
                    <ul>
                      <Link to={`/hairproduct`}>
                        <li className="first">
                          <a href="">SHAMPOO & CONDITIONER </a>
                        </li>
                        <li>
                          <a href="">Shampoo</a>
                        </li>
                        <li>
                          <a href="">Conditioner</a>
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div>
                    {/* <h5>HAIR STYLING & TREATMENTS</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">HAIR STYLING & TREATMENTS </a>
                      </li>
                      <li>
                        <a href="">Hair Spray & Styling Products</a>
                      </li>
                      <li>
                        <a href="">Hair Masks</a>
                      </li>
                      <li>
                        <a href="">Hair Clips</a>
                      </li>
                      <li>
                        <a href="">Hair Oil</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <a className="heading" href="">
                TOOLS & BRUSHES
              </a>
              <div className="hover">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>	BRUSHES</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">BRUSHES </a>
                      </li>
                      <li>
                        <a href="">Eye Brushes</a>
                      </li>
                      <li>
                        <a href="">Face Brushes</a>
                      </li>
                      <li>
                        <a href="">Lip Brushes</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>TOOLS</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">TOOLS </a>
                      </li>
                      <li>
                        <a href="">Sponges & Applicators</a>
                      </li>
                      <li>
                        <a href="">Face Tools</a>
                      </li>
                      <li>
                        <a href="">Hair Clips</a>
                      </li>
                      <li>
                        <a href="">Sharpeners</a>
                      </li>
                      <li>
                        <a href="">Eyelash Curlers</a>
                      </li>
                      <li>
                        <a href="">Accessories</a>
                      </li>
                      <li>
                        <a href="">Brush Cleaners</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>VEGAN</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">VEGAN </a>
                      </li>
                      <li>
                        <a href="">Face Brushes</a>
                      </li>
                      <li>
                        <a href="">Eye Brushes</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-hover">
              <a className="heading" href="">
                BRANDS
              </a>
              <div className="hover">
                <div className="hover--navbar">
                  <div>
                    {/* <h5>TOP MAKEUP BRANDS</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">TOP MAKEUP BRANDS</a>
                      </li>
                      <li>
                        <a href="">Lancôme</a>
                      </li>
                      <li>
                        <a href="">Caudalie</a>
                      </li>
                      <li>
                        <a href="">Kora Organics</a>
                      </li>
                      <li>
                        <a href="">Mario Badescu</a>
                      </li>
                      <li>
                        <a href="">Foreo</a>
                      </li>
                      <li>
                        <a href="">Shiseido</a>
                      </li>
                      <li>
                        <a href="">Estee Lauder</a>
                      </li>
                      <li>
                        <a href="">Elizabeth Arden</a>
                      </li>
                      <li>
                        <a href="">Clarins</a>
                      </li>
                      <li>
                        <a href="">Gallinee</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {/* <h5>TOP FRAGRANCE BRANDS</h5> */}
                    <ul>
                      <li className="first">
                        <a href="">FRAGRANCE BRANDS</a>
                      </li>
                      <li>
                        <a href="">Shiseido</a>
                      </li>
                      <li>
                        <a href="">Estee Lauder</a>
                      </li>
                      <li>
                        <a href="">Elizabeth Arden</a>
                      </li>
                      <li>
                        <a href="">Clarins</a>
                      </li>
                      <li>
                        <a href="">Gallinee</a>
                      </li>
                      <li>
                        <a href="">Lancôme</a>
                      </li>
                      <li>
                        <a href="">Caudalie</a>
                      </li>
                      <li>
                        <a href="">Kora Organics</a>
                      </li>
                      <li>
                        <a href="">Mario Badescu</a>
                      </li>
                      <li>
                        <a href="">Foreo</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    {" "}
                    <li className="first">
                      <a href=""> BRANDS A-Z</a>
                    </li>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </div>
      {/* ///////////////////////////////// */}
    </>
  );
};

export default Navbar;
