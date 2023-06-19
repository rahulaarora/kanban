import Navbar from "@/components/Navbar/Navbar";
import Main from "@/components/Main/Main";
import { useState } from "react";
export default function Home() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Navbar navToggle={navToggle} setNavToggle={setNavToggle} />
      <Main navToggle={navToggle} setNavToggle={setNavToggle} />
    </div>
  );
}
