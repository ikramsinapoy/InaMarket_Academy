import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import TestComponent from "./Components/TestComponent";
import AboutUs from "./Pages/AboutUs";
import DetailClass from "./Pages/DetailClass";
import DetailMateri from "./Pages/DetailMateri";
import ForgetPass from "./Pages/ForgetPass";
import Kelas from "./Pages/Kelas";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { store,persistor } from "./Redux/Store";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Notif from "./Pages/Notification";
import Regis from "./Pages/Regis";
import Setting from "./Pages/Setting";


function App() {
  return (
    <div>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/kelas" element={<Kelas />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/detail-kelas" element={<DetailClass />} />
              <Route path="/detail-materi" element={<DetailMateri />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Regis />} />
              <Route path="/forget-password" element={<ForgetPass />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/notification" element={<Notif />} />
              <Route path="/tes" element={<TestComponent />} />
            </Routes>   
          </BrowserRouter>
        {/* </PersistGate>
      </Provider> */}
    </div>
  );
}
 
export default App;
