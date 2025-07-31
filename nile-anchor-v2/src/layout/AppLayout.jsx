import Footer from "@/components/common/Footer/Footer";
import Header from "@/components/common/Header/Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default AppLayout;
