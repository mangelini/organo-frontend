import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Contact } from "../pages/Contact";
import { AllFoods } from "../pages/AllFoods";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import User from "../pages/User";
import NotAuthenticated from "../pages/NotAuthenticated";
import PaymentSuccess from "../pages/PaymentSuccess";
import PaymentError from "../pages/PaymentError";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/homepage" />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/not-authenticated" element={<NotAuthenticated />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/payment-error" element={<PaymentError />} />
    </Routes>
  );
};

export default Routers;
