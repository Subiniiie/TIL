import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import FeedMain from "../pages/FeedMain";
import FeedArticleDetail from "@/pages/FeedArticleDetail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feed" element={<FeedMain />} />
                <Route path='/feed/article/:id' element={<FeedArticleDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;