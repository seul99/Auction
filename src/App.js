//App.js 파일
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import MyPage from "./pages/MyPage";
import CustomerCenter from "./pages/CustomerCenter";
import ItemList from "./pages/ItemList";
import SerchTap from "./pages/SerchTap";
import ProductEntry from "./pages/ProductEntry";
import ProductManagement from "./pages/ProductManagement";
import ProfileEdit from "./pages/ProfileEdit";
import UserInfoEdit from "./pages/userInformation";
import Detail from "./pages/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/customercenter" element={<CustomerCenter />} />
        <Route path="/itemlist" element={<ItemList />} />
        <Route path="/serchtap" element={<SerchTap />} />
        <Route path="/productentry" element={<ProductEntry />} />
        <Route path="/productmanagement" element={<ProductManagement />} />
        <Route path="/profileedit" element={<ProfileEdit />} />
        <Route path="/userinfo" element={<UserInfoEdit />} />
        <Route path="/productdetail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
