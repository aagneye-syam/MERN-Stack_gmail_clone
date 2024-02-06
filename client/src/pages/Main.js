import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [openDrawer,setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState);
  }

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <div>Display Mail</div>
    </div>
  );
};

export default Main;
