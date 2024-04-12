import { Suspense } from "react";
import { Footer, Preloader } from "@/components";
import { Topbar, Navbar } from "@/components/layout/admin";

const AdminLayout = ({ children }) => {
  return (
    <Suspense>
      <Suspense>
        <Topbar />
      </Suspense>

      <Suspense>
        <Navbar />
      </Suspense>

      <Suspense fallback={<Preloader />}>{children}</Suspense>

      <Suspense>
        <Footer hideLinks />
      </Suspense>
    </Suspense>
  );
};

export default AdminLayout;
