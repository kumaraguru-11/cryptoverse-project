import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import Mainroutes from "./routes";
import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import GoToTop from "../components/GoToTop";
import Wrapper from "../context/ContextProvider";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/cryptoverse-project">
        <Sidebar />
          <div className="Route">
            <Provider store={store}>
              <Wrapper>
                <div className="NavBar">
                  <Navbar />
                </div>
        <ErrorBoundary>
                <Mainroutes />
        </ErrorBoundary>
              </Wrapper>
              <GoToTop />
            </Provider>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
