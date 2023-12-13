import React from "react";
import { useParams } from "react-router-dom";
import { useGetCoinMarketsQuery } from "../redux/feature/coin.feature";
import AsyncWrapper from "../layouts/AsyncWrapper";
import { MarketDataRow } from "../app/react-ts-env";
import millify from "millify";
import DataTable, { TableColumn } from "react-data-table-component";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
      fontSize:"15px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "15px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const CryptoMarket = () => {
  const params = useParams();

  const { isLoading, error, data } = useGetCoinMarketsQuery({
    coinId: params?.coinId,
  });
  const columns: TableColumn<MarketDataRow>[] = [
    {
      name: "Rank",
      selector: (row) => row.rank,
    },
    {
      name: "Avatar",
      cell: (row) => (
        <img
          src={row.exchange.iconUrl}
          alt={row.exchange.name}
          width={30}
          height={30}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.exchange.name,
    },
    {
      name: "Market Share",
      selector: (row) => row.marketShare,
    },
    {
      name: "BTC Price",
      cell: (row) => millify(parseFloat(row.btcPrice)),
    },
    {
      name: "Recommended",
      cell: (row) =>
        row.recommended === true ? (
          <i className="bi bi-check-lg" style={{ color: "green" }}></i>
        ) : (
          <i className="bi bi-slash-circle" style={{ color: "red" }}></i>
        ),
    },
    {
      name: "Price",
      cell: (row) => millify(parseFloat(row.price)),
    },
    {
      name: "24h Volume",
      cell: (row) => millify(parseFloat(row["24hVolume"])),
    },
  ];

  return (
    <AsyncWrapper fulfilled={Boolean(data)} error={error} loading={isLoading}>
      <div className="p-4 mb-5">
        {data &&  (
          <>
            {" "}
            <h3 className="fw-normal mt-3">Market Crypto Stats</h3>
            <div className="d-flex p-4 fs-4">
              <div className="d-flex flex-column mx-5">
                <span className="fs-6 opacity-75">24h Volume</span>
                <span>
                  <i className="bi bi-lightning"></i>
                  {millify(
                    Number(parseFloat(data.data.stats["24hVolume"])) || 0
                  )}
                </span>
              </div>
              <div className="d-flex flex-column mx-5">
                <span className="fs-6 opacity-75">Total</span>
                <span>
                  <i className="bi bi-hand-thumbs-up"></i>
                  {millify(parseFloat(data.data.stats.total))}
                </span>
              </div>
            </div>
          </>
        )}

        <DataTable
          columns={columns}
          data={data?.data?.markets || []}
          pagination
          customStyles={customStyles}
          highlightOnHover
        />
      </div>
    </AsyncWrapper>
  );
};

export default CryptoMarket;
