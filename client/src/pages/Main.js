import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Emails from "../components/Emails";
  

const Main = () => {
  const [openDrawer,setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState);
  }

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <Emails openDrawer={openDrawer} />
    </div>
  );
};

export default Main;
