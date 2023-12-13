import React from "react";
import { useGetReferenceCurrenciesQuery } from "../redux/feature/coin.feature";
import AsyncWrapper from "../layouts/AsyncWrapper";
import DataTable, { TableColumn } from "react-data-table-component";
import { ReferenceCurrency } from "../app/react-ts-env";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Tooltip } from "react-tooltip";

const RefrenceCurrency = () => {
  // fetching coin data
  const {
    data: coinData,
    isLoading: isFetchingCoin,
    error: errorCoin,
  } = useGetReferenceCurrenciesQuery({ type: "coin" });
  //fetching Fiat data
  const {
    data: FiatData,
    isLoading: isFetchingFiat,
    error: errorFiat,
  } = useGetReferenceCurrenciesQuery({ type: "fiat" });

  // define state
  // const [selectedRows, setSelectedRows] = React.useState<ReferenceCurrency[]>(
  //   []
  // );
  const [selectedRowsCoins, setSelectedRowsCoins] = React.useState<
    ReferenceCurrency[]
  >([]);
  const [selectedRowsFiat, setSelectedRowsFiat] = React.useState<
    ReferenceCurrency[]
  >([]);

  const [data, setData] = React.useState<ReferenceCurrency[]>(
    coinData?.data?.currencies
  );
  const [fiatdata, setFiatData] = React.useState<ReferenceCurrency[]>(
    coinData?.data?.currencies
  );
  React.useEffect(() => {
    setData(coinData?.data?.currencies);
    setFiatData(FiatData?.data?.currencies);
  }, [coinData, FiatData]);

  //tostify
  const notify = () =>
    toast.success("data updated successfully!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  //table styles
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
        fontSize: "15px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        fontSize: "15px",
        backgroundColor: "rgb(238, 238, 238)",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  //table Data
  const columns: TableColumn<ReferenceCurrency>[] = [
    {
      name: "Avatar",
      cell: (row) => (
        <img src={row.iconUrl} alt={row.name} width={30} height={30} />
      ),
    },
    {
      name: "Name",
      selector: (row) => {
        return row.name;
      },
    },
    {
      name: "Symbol",
      selector: (row) => row.symbol,
    },
    {
      name: "Sign",
      selector: (row) => (row.sign ? row.sign : "--"),
    },
  ];

  // Table Edit Methods coin
  // const handleChange = (state: any) => {
  //   setSelectedRows(state.selectedRows);
  // };
  const handleChangeCoins = (state: any) => {
    setSelectedRowsCoins(state.selectedRows);
  };

  const handleChangeFiat = (state: any) => {
    setSelectedRowsFiat(state.selectedRows);
  };

  const handleClearRows = () => {
    // const selectedNames = selectedRows.map((el) => el.name);
     const selectedNamesCoins = selectedRowsCoins.map((el) => el.name);
     const selectedNamesFiat = selectedRowsFiat.map((el) => el.name);
    // const updatedData = data.filter((el) => !selectedNames.includes(el.name));
    // const updatedFiatData = fiatdata.filter(
    //   (el) => !selectedNames.includes(el.name)
    // );
   const updatedData = data.filter(
     (el) => !selectedNamesCoins.includes(el.name)
   );
   const updatedFiatData = fiatdata.filter(
     (el) => !selectedNamesFiat.includes(el.name)
   );

    // Update the displayed data
    setData(updatedData);
    setFiatData(updatedFiatData);

    // Clear the selectedRows state
    // setSelectedRows([]);
      setSelectedRowsCoins([]);
    setSelectedRowsFiat([]);
    notify();
  };

  return (
    <>
      <AsyncWrapper
        fulfilled={Boolean(coinData && FiatData)}
        error={errorCoin || errorFiat}
        loading={isFetchingCoin || isFetchingFiat}
      >
        <div className="p-5">
          <div className="d-flex justify-content-between">
            <h3 className="my-3">Coin Refrence Currencies</h3>
            {selectedRowsCoins &&
              selectedRowsCoins.find((el) => el.type === "coin") && (
                <i
                  className="bi bi-trash3 fs-3 Delete_btn"
                  onClick={handleClearRows}
                  data-tooltip-id="tooltip-icon-show"
                  data-tooltip-content="Are you sure you want to remove this item"
                  data-tooltip-delay-show={50}
                  data-tooltip-variant="dark"
                ></i>
              )}
          </div>
          <DataTable
            columns={columns}
            data={data}
            pagination
            customStyles={customStyles}
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            onSelectedRowsChange={handleChangeCoins}
          />
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-5 mb-3">Fiat Refrence Currencies</h3>
            {selectedRowsFiat &&
              selectedRowsFiat.find((el) => el.type === "fiat") && (
                <i
                  className="bi bi-trash3 fs-3 Delete_btn"
                  onClick={handleClearRows}
                  data-tooltip-id="tooltip-icon-show"
                  data-tooltip-content="Are you sure you want to remove this item"
                  data-tooltip-delay-show={50}
                  data-tooltip-variant="dark"
                ></i>
              )}
          </div>
          <DataTable
            columns={columns}
            data={fiatdata}
            pagination
            customStyles={customStyles}
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            onSelectedRowsChange={handleChangeFiat}
          />
          <ToastContainer />
          <Tooltip id="tooltip-icon-show" place="left" />
        </div>
      </AsyncWrapper>
    </>
  );
};
export default RefrenceCurrency;
