import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import millify from "millify";
import { Link, NavLink } from "react-router-dom";
import { Coin } from "../app/react-ts-env";
import ReactPaginate from "react-paginate";

type HandlePageClickType = {
  selected: number;
};

const CryptoCard = ({coins}:any) => {

   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 10;
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = coins && coins.slice(itemOffset, endOffset);
   const pageCount = coins ? Math.ceil(coins.length / itemsPerPage) : 1;

   const handlePageClick = (event: HandlePageClickType) => {
     const newOffset = (event.selected * itemsPerPage) % coins.length;
     setItemOffset(newOffset);
   };
  return (
    <div className="p-3">
      <div className="row">
        {coins &&
          currentItems.map((el: Coin) => (
            <div
              className="col-md-6 col-sm-6 col-lg-4 mb-4"
              key={el.uuid}
            >
              <Card style={{minWidth:"10rem"}}>
                <Card.Body>
                  <NavLink
                    to={`/crypto/${el.uuid}`}
                    className="text-decoration-none text-dark"
                  >
                    <span className="d-flex border-bottom justify-content-between align-items-center p-2">
                      <Card.Title>{el.name}</Card.Title>
                      <img
                        src={el.iconUrl}
                        alt={el.name}
                        width={40}
                        height={40}
                      />
                    </span>
                    <Card.Text className="border-bottom">
                      <div className="d-flex justify-content-between m-3">
                        <span className="fw-semibold fs-5">Price:</span>
                        <span>{millify(parseFloat(el.price))}</span>
                      </div>
                      <div className="m-3 d-flex justify-content-between">
                        <span className="fw-semibold fs-5">Market Cap:</span>
                        <span>{millify(parseFloat(el.marketCap))}</span>
                      </div>
                      <div className="m-3 d-flex justify-content-between">
                        <span className="fw-semibold fs-5">Daily Change:</span>
                        <span>{millify(parseFloat(el.change))}</span>
                      </div>
                    </Card.Text>
                  </NavLink>
                </Card.Body>
                <div className="d-flex justify-content-around mb-3">
                  <Link
                    className="text-decoration-none opacity-75 Card_Link fs-6"
                    to={`/market/${el.uuid}`}
                  >
                    View Markets
                  </Link>
                  <Link
                    className="text-decoration-none opacity-75 Card_Link fs-6"
                    to={`/exchange/${el.uuid}`}
                  >
                    View Exchanges
                  </Link>
                </div>
              </Card>
            </div>
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </div>
  );
};

export default CryptoCard;
