import { Route, Routes } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import HomePage from "./pages/HomePage"
import SinglePost from "./pages/SinglePost"
import ProfilePage from "./pages/ProfilePage"
import SavedPostPage from "./pages/SavedPostPage"
import UserPostPage from "./pages/UserPostPage"
import WritePage from "./pages/WritePage"
import PostsPage from "./pages/PostsPage"


function App() {


  return (
    <Routes>
      <Route path="/" element={<RootLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/single-post" element={<SinglePost />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route  element={<ProfilePage />} >
          <Route path="/profile" element={<UserPostPage />} />
          <Route path="/saved" element={<SavedPostPage />} />
          <Route path="/write" element={<WritePage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
