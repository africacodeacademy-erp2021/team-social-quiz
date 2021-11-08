import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import "../../App";

export const SideBarData = [
  {
    title: "Category",
    path: "/",
    icon: <BiIcons.BiVector />,
    cName: "nav-text",
  },

  {
    title: "Create Game",
    path: "/creategame",
    icon: <IoIcons.IoMdAddCircle />,
    cName: "nav-text",
  },
  {
    title: "History",
    path: "/history",
    icon: <FaIcons.FaHistory />,
    cName: "nav-text",
  },
  {
    title: "Leaderboard",
    path: "/leaderboard",
    icon: <RiIcons.RiTeamFill />,
    cName: "nav-text",
  },
  {
    title: "Help",
    path: "/help",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
