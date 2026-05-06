import { Navigate, Route, Routes } from "react-router";
import SignInPageTsx from "./pages/sing-in-page";
import SingUpPageTsx from "./pages/sign-up-page";
import ForgetPasswordPage from "./pages/forget-password-page";
import IndexPage from "./pages/index-page";
import PostDetailPage from "./pages/post-detail-page";
import ProfileDetailPage from "./pages/profile-detail-page";
import ResetPasswordPage from "./pages/reset-password-page";
import GlobalLayout from "./components/layout/global-layout";

export default function RootRoute() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/sing-in" element={<SignInPageTsx />} />
        <Route path="/sing-up" element={<SingUpPageTsx />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />

        <Route path="/" element={<IndexPage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/profile/:userId" element={<ProfileDetailPage />} />
        <Route path="/reset-passwprd" element={<ResetPasswordPage />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}
