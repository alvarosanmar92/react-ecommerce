import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "../src/Pages/home/HomePage";
import NoPage from "../src/Pages/noPage/NoPage";
import ProductInfo from "../src/Pages/productInfo/ProductInfo";
import ScrollTop from "../src/components/scrollTop/ScrollTop";
import CartPage from "../src/Pages/cart/CartPage";
import AllProduct from "../src/Pages/allProduct/AllProduct";
import Signup from "../src/Pages/registration/Signup";
import Login from "../src/Pages/registration/Login";
import UserDashboard from "../src/Pages/user/UserDashboard";
import AdminDashboard from "../src/Pages/admin/AdminDashboard";
import AddProductPage from "../src/Pages/admin/AddProductPage";
import UpdateProductPage from "../src/Pages/admin/UpdateProductPage";
import MyState from "../src/Context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "../src/protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "../src/protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "../src/Pages/category/CategoryPage";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} />  {/* category Page route  */}
          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;