import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useLocation, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import crypto from "../assest/crypto.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { SideBarItemType } from "../app/react-ts-env";

type HandleDefautType = () =>
  | "link-2"
  | "link-1"
  | "link-3"
  | "link-4"
  | undefined;

const items= [
  {
    label: "Home",
    key: "/",
    icon: "bi bi-house",
    link: "link-1",
  },
  {
    label: "Currencies",
    key: "/currencies",
    icon: "bi bi-graph-up",
    link: "link-2",
  },
  {
    label: "Reference Currencies",
    key: "/reference-currencies",
    icon: "bi bi-pencil-square",
    link: "link-3",
  },
  {
    label: "News",
    key: "/news",
    icon: "bi bi-lightbulb",
    link: "link-4",
  },
];

const Sidebar = () => {
  const [shrink, setShrink] = React.useState(false);
  const location = useLocation();
  const handleDefault: HandleDefautType = () => {
    if (location.pathname === "/currencies") {
      return "link-2";
    } else if (location.pathname === "/") {
      return "link-1";
    } else if (location.pathname === "/reference-currencies") {
      return "link-3";
    } else if (location.pathname === "/news") {
      return "link-4";
    }
    return undefined;
  };
  return (
    <Nav
      variant="pills"
      defaultActiveKey={handleDefault() as string}
      className={`flex-column bg-dark text-light sidebar_menu ${
        shrink ? "Toggle_sidebar" : "sidebar_menu"
      }`}
      style={{zIndex:2}}
    >
      <span className="d-flex m-3">
        <img src={crypto} alt="crypto_logo" width={40} />
        <h3 className="ms-3 mt-1">Cryptoverse</h3>
      </span>
      {items.map((el:SideBarItemType) => (
        <Nav.Item key={el.label}>
          <Nav.Link
            className="text-light opacity-75 m-2 sidebar_items"
            eventKey={el.link}
            as={Link}
            to={el.key}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={el.label}
            data-tooltip-place="right"
          >
            <span className={el.icon}></span>
            <span className="ms-3">{el.label}</span>
          </Nav.Link>
        </Nav.Item>
      ))}
      <button
        className={`p-2 bg-primary text-light fs-5 sidebar_btn ${
          shrink ? "Toggle_sidebar_btn" : ""
        }`}
        onClick={() => setShrink(!shrink)}
      >
        {" "}
        <i className="bi bi-caret-right"></i>
      </button>
      <Tooltip id="my-tooltip" />
    </Nav>
  );
};

export default Sidebar;
