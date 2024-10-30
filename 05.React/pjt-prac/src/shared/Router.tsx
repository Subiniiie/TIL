import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UserInfo from "@/pages/UserInfo";
import FeedMain from "../pages/FeedMain";
import FeedArticleDetail from "@/pages/FeedArticleDetail";
import MusicFeedMain from "@/pages/MusicFeedMain";
import MusicFeedDetail from "@/pages/MusicFeedDetail";
import FeedCreate from "@/pages/FeedCreate";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/user-info" element={<UserInfo />}/>
                <Route path="/feed" element={<FeedMain />} />
                <Route path='/feed/article/:id' element={<FeedArticleDetail />} />
                <Route path="/music-feed" element={<MusicFeedMain />} />
                <Route path='/music-feed/article/:id' element={<MusicFeedDetail />} />
                <Route path="feed/create" element={<FeedCreate />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;