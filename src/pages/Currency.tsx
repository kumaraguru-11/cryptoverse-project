import React, { useContext } from "react";
import CryptoCard from "../components/CryptoCard";
import { userContext } from "../context/ContextProvider";
import Spinner from "../components/Spinner";


const Currency = () => {
  const { sortedData } = useContext(userContext);

  return (
      <div>{sortedData ? <CryptoCard coins={sortedData} /> : <Spinner />}</div>
  );
};

export default Currency;
