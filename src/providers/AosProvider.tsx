"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      easing: "ease-in-out",
    });
  }, []);

  return null;
}
