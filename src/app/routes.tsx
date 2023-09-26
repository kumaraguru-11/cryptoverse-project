import React, { Suspense ,useEffect} from "react";
import { Routes, Route ,useLocation} from "react-router-dom";
import { PUBLIC_ROUTES } from "./LazyLoading";
import Spinner from "../components/Spinner";

const Mainroutes = () => {
  	const location = useLocation();

    useEffect(() => {
      window.scrollTo({ top: 0 });
      // scroll to the top of the browser window when changing route
    }, [location]);

  return (
    <Routes>
      {PUBLIC_ROUTES.map((routes) => (
        <Route
          path={routes.path}
          key={routes.path}
          element={
            <Suspense
              fallback={
                <div>
                  <Spinner />
                </div>
              }
            >
              <routes.component />
            </Suspense>
          }
        />
        ))}
    </Routes>
  );
};

export default Mainroutes;
