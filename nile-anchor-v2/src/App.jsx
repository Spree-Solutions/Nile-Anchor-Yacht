import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AppRoutes } from "./routes/AppRoutes";
import { useLanguage } from "./hooks/helpers/useLanguage";
import { queryClient } from "./config/queryClient";
import { DirectionProvider } from "@radix-ui/react-direction";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  const { language } = useLanguage();

  return (
    <DirectionProvider dir={language === "en" ? "ltr" : "rtl"}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <ScrollToTop />
          <AppRoutes />
        </BrowserRouter>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </DirectionProvider>
  );
}

export default App;
