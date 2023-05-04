import React from "react";

// Admin Imports
import DashboardPage from "views/admin/default";
import Patient from "views/admin/patient";
import Paramétres from "views/admin/paramétres";
import Agenda from "views/admin/agenda";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdPeopleAlt,
  MdLock,
  MdSettings,
  MdAssignmentTurnedIn
} from "react-icons/md";

import {
  RiStethoscopeLine
} from "react-icons/ri";

import {
  IoCalendarNumber
} from "react-icons/io5";

const routes = [
  {
    name: "Acceuil",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <DashboardPage />,
  },
  {
    name: "Patient",
    layout: "/admin",
    path: "patient",
    icon: <MdPeopleAlt className="h-6 w-6" />,
    component: <Patient />,
    secondary: true,
  },
  {
    name: "Agenda",
    layout: "/admin",
    path: "agenda",
    icon: <IoCalendarNumber className="h-6 w-6" />,

    component: <Agenda />,
  },
  {
    name: "Consultation",
    layout: "/admin",
    path: "consultation",
    icon: <RiStethoscopeLine className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Rendez Vous",
    layout: "/admin",
    path: "rendez-vous",
    icon: <MdAssignmentTurnedIn className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Paramétres",
    layout: "/admin",
    path: "profile",
    icon: <MdSettings className="h-6 w-6" />,
    component: <Paramétres />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/admin",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },

];
export default routes;
