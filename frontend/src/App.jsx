import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import FloatingShape from "./components/FloatingShape";
import LoadingSpinner from "./components/LoadingSpinner";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashBoardPage from "./pages/DashBoardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import { useAuthStore } from "./store/authStore";

// 🔒 Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// 🔁 Redirect logged-in users from auth pages
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // check if user is logged in when app loads
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      
      {/* Floating Background Shapes */}
      <FloatingShape
        color="bg-gradient-to-r from-purple-400 to-pink-500"
        size="w-64 h-64"
        top="20%"
        left="10%"
        delay={2}
        duration={30}
        blur="blur-2xl"
        opacity="opacity-30"
        shape="rounded-lg"
        path="diagonal"
      />
      <FloatingShape
        color="bg-green-500"
        size="w-32 h-48"
        top="70%"
        left="5%"
        delay={5}
        duration={25}
        blur="blur-xl"
        opacity="opacity-20"
        shape="rounded-full"
        path="vertical"
      />
      <FloatingShape
        color="bg-emerald-400"
        size="w-40 h-40"
        top="10%"
        left="80%"
        delay={3}
        duration={35}
        blur="blur-md"
        opacity="opacity-25"
        shape="rounded-xl"
        path="rotate"
      />

      {/* Routes */}
      <div className="z-10 w-full max-w-md p-4">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashBoardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <SignUpPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <LoginPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
          <Route
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <ForgotPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/reset-password/:token"
            element={
              <RedirectAuthenticatedUser>
                <ResetPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />
          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
