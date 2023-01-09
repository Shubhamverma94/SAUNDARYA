import React from "react";
import "./UpperNav.css";
import { SiHackthebox } from "react-icons/si";
import { BiTrophy } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutbox } from "react-icons/md";
import { Box, Text } from "@chakra-ui/react";

const UpperNav = () => {
  return (
    <>
      <div className="top">
        <div className="top-left">
          <li>
            {" "}
            <img
              src="https://cdn2.iconfinder.com/data/icons/telegram/154/telegram-menu-bar-ui-256.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
              alt=""
            />
          </li>
          <li>|</li>
          <li>
            {" "}
            <MdOutlineLocationOn />
          </li>
          <li>Store Locater</li>
        </div>
        <div className="top-center">
          <li>
            {" "}
            <img
              src="https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Purple.png"
              alt=""
            />
          </li>
          <li>
            {" "}
            <img
              src="https://cdn0.iconfinder.com/data/icons/sources-of-light-cartoon-style/512/al408_12-256.png"
              alt=""
            />
          </li>

          <li>
            {" "}
            <img
              src="https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Blue.png"
              alt=""
            />
          </li>
          <Box id="offer_box">
            <Text>Get 10% OFF on your first purchase. Use Code:</Text>
            <Text>BEAUTY10</Text>
          </Box>

          <li>
            {" "}
            <img
              src="https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Blue.png"
              alt=""
            />
          </li>
          <li>
            {" "}
            <img
              src="https://cdn0.iconfinder.com/data/icons/sources-of-light-cartoon-style/512/al408_12-256.png"
              alt=""
            />
          </li>
          <li>
            {" "}
            <img
              src="https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Purple.png"
              alt=""
            />
          </li>
        </div>

        <div className="top-right">
          <li>
            <MdOutbox />{" "}
          </li>
          <li>Get App</li>
          <li>|</li>
          <li>
            <SiHackthebox />
          </li>
          <li>Track Order</li>
          <li>|</li>
          <li>
            <BiTrophy />
          </li>
          <li>Loyalty</li>
        </div>
      </div>
    </>
  );
};

export default UpperNav;
