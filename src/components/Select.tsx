import React from "react";
import Select from "react-select";
import { Coin } from "../app/react-ts-env"; // Make sure to provide the correct path to the Coin type
import { useNavigate } from "react-router-dom";

const NavbarSelect = (props: { coins: Coin[] }) => {
  const navigate = useNavigate();

  const options = props.coins.map((coin) => ({
    value: coin.uuid,
    label: coin.name,
  }));

  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption) {
      const selectedCoinUuid = selectedOption.value;
      navigate(`/crypto/${selectedCoinUuid}`);
    }
  };

  return (
    <div className="w-50 ms-3 mt-3">
      <Select
        options={options}
        placeholder="Search for Cryptocurrencies"
        noOptionsMessage={() => "Crypto Not Found"}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default NavbarSelect;
