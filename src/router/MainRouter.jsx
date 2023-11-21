import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBarComponent } from "../components";
import { ItemDetailContainer } from "../pages";

export const MainRouter = () => {


  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
