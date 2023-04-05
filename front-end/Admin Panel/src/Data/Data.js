// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilSignOutAlt,
  } from "@iconscout/react-unicons";

  // Sidebar Data
export const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
      path: "/card"
    },
    {
        icon: UilPackage,
        heading: 'Products',
        path: "/product"
      },
    {
      icon: UilClipboardAlt,
      heading: "Orders",
      path: "/Orders"
    },
    {
      icon: UilUsersAlt,
      heading: "Feedback",
      path: "/feedback"
    },
    
    {icon: UilSignOutAlt,
      heading: "LogOut",
      path:""} 
  ];