"use client";

import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("Zgoda", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed w-full z-50 ">
      <div
        data-aos="fade-up"
        className="fixed bottom-0  bg-white border-[1.5px] rounded-lg w-full border-dark-blue flex items-center justify-between gap-x-5 px-4 py-2 laptop:py-4"
      >
        <CookieOutlinedIcon fontSize="large" sx={{ color: "#001144" }} />
        <span className="text-dark text-xs tablet:text-sm laptop:text-base my-5 laptop:my-5">
          Używamy plików cookie na naszej stronie internetowej, aby zapewnić Ci
          najbardziej odpowiednie preferencje. Klikając „Akceptuj”, wyrażasz
          zgodę na użycie plików cookie.
        </span>
        <button
          className="bg-dark-blue py-2 laptop:px-8 px-4 text-xs tablet:text-sm laptop:text-base rounded text-white"
          onClick={() => acceptCookie()}
        >
          Akceptuj
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
