import React, { useState, useEffect } from "react";

import { FaTh, FaBars, FaUserAlt, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useScreenSize } from "../../../shared/hooks/useScreenSize";
import { modalActions } from "../../../redux/actions/modal.actions/modal.actions";
import { connect } from "react-redux";
import NavBar from "../../../shared/components/navBar/navBar";

const Sidebar = ({ children, sidebar }) => {
  const [screenWidth] = useScreenSize();
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    sidebar(!isOpen);
  };

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/userGroup",
      name: "User Group",
      icon: <FaUsers />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUserAlt />,
    },
  ];

  useEffect(() => {
    if (screenWidth <= 600) {
      setIsOpen(false);
      sidebar(false);
    } else {
      setIsOpen(true);
      sidebar(true);
    }
  }, [screenWidth]);

  return (
    <div>
      <NavBar />

      <div className={`sidebar ${isOpen ? "width-200" : "width-75"} `}>
        <div
          className={`top_section ${
            isOpen ? "margin-top-n13" : "margin-top-0"
          } `}
        >
          <h1 className={`logo ${isOpen ? "d-block" : "d-none"} `}>Logo</h1>
          <div
            className={`bars ${isOpen ? "margin-left-50" : "margin-left-0"} `}
          >
            <FaBars className="pointer" onClick={toggle} />
          </div>
        </div>

        <ul
          className={`nav-list ${isOpen ? "margin-top-n10" : "margin-top-22"} `}
        >
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="linknav mt-3"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div className={`link_text ${isOpen ? "d-block" : "d-none"} `}>
                {item.name}
              </div>
            </NavLink>
          ))}
        </ul>
      </div>
      <main
        className={`${
          screenWidth <= 460
            ? isOpen
              ? "margin-left-90 width-100-90"
              : "margin-left-90 width-100-90"
            : isOpen
            ? "margin-left-220 width-100-220"
            : "margin-left-90 width-100-90"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  sidebar: (data) => dispatch(modalActions.handleSidebar(data)),
});
export default connect(null, mapDispatchToProps)(Sidebar);
