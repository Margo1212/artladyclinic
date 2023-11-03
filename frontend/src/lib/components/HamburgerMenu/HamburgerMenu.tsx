"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { Instagram } from "@lib/assets/svg/Instagram";
import { Booksy } from "@lib/assets/svg/Booksy";

export default function HamburgerMenu() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  return (
    <div className="block laptop:hidden">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{
          m: 0,
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* The outside of the drawer */}
      <Drawer
        //from which side the drawer slides in
        anchor="right"
        //if open is true --> drawer is shown
        open={state}
        //function that is called when the drawer should close
        onClose={toggleDrawer(false)}
        //function that is called when the drawer should open
      >
        {/* The inside of the drawer */}
        <Box
          sx={{
            p: 2,
            height: 1,
          }}
        >
          {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
          <IconButton onClick={toggleDrawer(false)} sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2, px: "10px" }}>
            <ul className=" space-y-2 align-middle py-6 flex flex-col justify-between">
              <li>
                <Link href="/about">O nas</Link>
              </li>
              <li>
                <Link href="/about-services">O usługach</Link>
              </li>
              <li>
                <Link href="/gallery">Galeria</Link>
              </li>
              <li>
                <Link href="/price-list">Cennik</Link>
              </li>
              <li>
                <Link href="/products">Produkty</Link>
              </li>
              <li>
                <Link href="/news">Nowośći</Link>
              </li>
              <li>
                <Link href="/vouchers">
                  <p className="text-wrapper">Bony podarunkowe</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">Kontakt</Link>
              </li>
            </ul>
            <ul className="flex space-x-2 ">
              <li>
                <Link
                  href={
                    "https://booksy.com/pl-pl/81163_art-lady_brwi-i-rzesy_8820_krakow#ba_s=sr_1"
                  }
                  target="_blank"
                >
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "https://booksy.com/pl-pl/81163_art-lady_brwi-i-rzesy_8820_krakow#ba_s=sr_1"
                  }
                  target="_blank"
                >
                  <Booksy />
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
