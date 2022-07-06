import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { store,persistor } from "./Redux/Store";
import LandingPage from "./Pages/LandingPage";


function App() {
  return (
    <div>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>   
          </BrowserRouter>
        {/* </PersistGate>
      </Provider> */}
    </div>
  );
}

export default App;
