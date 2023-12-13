import React, { useContext,useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Coin } from "../app/react-ts-env";
import { userContext } from "../context/ContextProvider";

const DropDown = (props: { coins: Coin[] }) => {
  const {setSortedData } = useContext(userContext);

  useEffect(()=>{
     const tempdata: Coin[] =[...props.coins]
     setSortedData(tempdata);
  },[props.coins,setSortedData])

  const handleAscending = () => {
    const tempdata: Coin[] = [...props.coins];
    let temp: Coin[] = tempdata.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setSortedData(temp);

  };

  const handleDecending = () => {
    const tempdata: Coin[] = [...props.coins];
    let temp: Coin[] = tempdata.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    setSortedData(temp);
  };

  const priceLowtoHigh = () => {
    const tempdata: Coin[] = [...props.coins];
    let temp: Coin[] = tempdata.sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setSortedData(temp);
  };

  const priceHightoLow = () => {
    const tempdata: Coin[] = [...props.coins];
    let temp: Coin[] = tempdata.sort((a, b) => {
      return parseFloat(b.price) - parseFloat(a.price);
    });
    setSortedData(temp);
  };
     
  return (
    <Dropdown className="m-3">
      <Dropdown.Toggle id="dropdown-autoclose-outside">Filter</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleAscending}>A-Z</Dropdown.Item>
        <Dropdown.Item onClick={handleDecending}>Z-A</Dropdown.Item>
        <Dropdown.Item onClick={priceLowtoHigh}>
          Price Low to Price High
        </Dropdown.Item>
        <Dropdown.Item onClick={priceHightoLow}>
          Price High to Price Low
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
