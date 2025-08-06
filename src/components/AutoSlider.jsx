import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
export default function AutoSlider() {
  const { pathname } = useLocation();
 
  useEffect(() => {
    window.scrollTo(0, 0); // 👈 jumps instantly to top
  }, [pathname]);
 
  return null;
}