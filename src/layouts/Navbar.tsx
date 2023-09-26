import React from "react";
import NavbarSelect from "../components/Select";
import DropDown from "../components/DropDown";
import { useGetCoinsQuery } from "../redux/feature/coin.feature";
import Alert from "react-bootstrap/Alert";
import Spinner from "../components/Spinner";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { data, error, isLoading } = useGetCoinsQuery({ limit: 100 });
  if (isLoading) {
    return (
      <div >
        <Spinner />
      </div>
    );
  } else if (error) {
    return <Alert variant="warning">This is a alert—check it out!</Alert>;
  } else if (data) {
    return (
      <div className="pt-2 d-flex">
        <NavbarSelect coins={data.data.coins} />
        {location.pathname === "/currencies" && (
          <DropDown coins={data.data.coins} />
        )}
      </div>
    );
  } else {
    return <>Somethintg Went wrong</>;
  }
}

export default Navbar;
