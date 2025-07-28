import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AppRoutes } from "./routes/AppRoutes";
import { useLanguage } from "./hooks/helpers/useLanguage";
import { queryClient } from "./config/queryClient";
import { DirectionProvider } from "@radix-ui/react-direction";

function App() {
  const { language } = useLanguage();

  return (
    <DirectionProvider dir={language === "en" ? "ltr" : "rtl"}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter future={{ v7_startTransition: true }}>
          <AppRoutes />
        </BrowserRouter>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </DirectionProvider>
  );
}

export default App;
