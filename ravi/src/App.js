import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Auth from "./log-in/Auth";
// import Homepage from "./log-in/Homepage";
import ShowData from "./CRUD/ShowData";
import NewUser from "./CRUD/NewUser";

function App() {
  return (
    <>
 
      {/* ===========================[Login/registration]========================================= */}
      <BrowserRouter>
        <Routes>
            {/* <Route path="/hh" element={<NewUser />} /> */}
          {/* <Route
            path="/home"
            element={
              <Auth>
                <Homepage />
              </Auth>
            }
          /> */}
        </Routes>
      </BrowserRouter>
      {/* ===========================[API CRUD]============================================== */}
      <ShowData />


    </>
  );
}

export default App;
