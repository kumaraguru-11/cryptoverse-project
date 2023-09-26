import React from "react";
import { useParams } from "react-router-dom";
import { useGetCoinExchangesQuery } from "../redux/feature/coin.feature";
import AsyncWrapper from "../layouts/AsyncWrapper";
import millify from "millify";
import DataTable, { TableColumn } from "react-data-table-component";
import { ExchangeDataRow } from "../app/react-ts-env";


const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
      fontSize: "15px",
      justifyContent: "right",
      alignSelf:"right"
    },
  },
  headCells: {
    style: {
      paddingRight: "8px",
      fontSize: "15px",
      justifyContent: "left",
    },
  },
};

const CryptoExchange = () => {
  const params = useParams();

  const { isLoading, error, data } = useGetCoinExchangesQuery({
    coinId: params?.coinId,
  });
  const columns: TableColumn<ExchangeDataRow>[] = [
    {
      name: "Rank",
      selector: (row) => row.rank,
    },
    {
      name: "Avatar",
      cell: (row) => (
        <img src={row.iconUrl} alt={row.name} width={30} height={30} />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Number of Markets",
      selector: (row) => row.numberOfMarkets,
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
      name: "verify",
      cell: (row) =>
        row.verified === true ? (
          <i className="bi bi-slash-circle fs-3" style={{ color: "green" }}></i>
        ) : (
          <i className="bi bi-slash-circle fs-3" style={{ color: "red" }}></i>
        ),
    },
    {
      name: "Coin Ranking Url",
      cell: (row) => (
        <a href={row.coinrankingUrl} target="_blank" rel="noreferrer" className="fs-3 text-dark">
          <i className="bi bi-link-45deg"></i>
        </a>
      ),
    },
  ];

  return (
    <AsyncWrapper fulfilled={Boolean(data)} error={error} loading={isLoading}>
      <div className="p-4 mb-5">
        {Boolean(data) && (
          <>
            {" "}
            <h3 className="fw-normal mt-3">Exchange Crypto Stats</h3>
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
          data={data?.data?.exchanges || []}
          pagination
          customStyles={customStyles}
          highlightOnHover
        />
      </div>
    </AsyncWrapper>
  );
};

export default CryptoExchange;
