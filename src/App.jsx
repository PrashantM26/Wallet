
import { AppProvidersWrapper, BackToTop } from "./components";
import { AdminLayout } from "./layouts";
import Wallet from "./app/admin/wallet/page";

// styles
import "@/assets/css/style.css";


const App = () => {
  return (
    <AppProvidersWrapper>
      <AdminLayout>
        <Wallet />
      </AdminLayout>
      <BackToTop />
      
    </AppProvidersWrapper>
  );
};

export default App;
