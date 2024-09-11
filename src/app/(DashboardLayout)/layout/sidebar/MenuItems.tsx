import {
  IconAperture,
  IconBuildingFactory,
  IconBuildingStore,
  IconCopy,
  IconExchange,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Production",
  },
  {
    id: uniqueId(),
    title: "Manufacturers",
    icon: IconBuildingFactory,
    href: "/utilities/manufacturers",
  },
  {
    id: uniqueId(),
    title: "Distributors",
    icon: IconExchange,
    href: "/utilities/distributors",
  },
  {
    id: uniqueId(),
    title: "Retailers",
    icon: IconBuildingStore,
    href: "/utilities/retailers",
  },
];

export default Menuitems;
