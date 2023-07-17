import {
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";
import {
  BusMockDataType,
  MockDataType,
  PopularBusRouteDataType,
  navlinkDataType,
} from "../types";

export const mockdata: BusMockDataType[] = [
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
  {
    logo: "https://w0.peakpx.com/wallpaper/200/583/HD-wallpaper-furious-ena-bangladesh-bus-ena-transport-highway-hino-hino-bus.jpg",
    name: "ENA",
    description: "Hello ENA",
  },
];

export const navlinkData: navlinkDataType[] = [
  {
    href: "buss",
    label: "Buss",
    icon: "BusIcon",
  },

  {
    href: "launch",
    label: "LAUNCH",
    icon: "LaunchIcon",
  },
  {
    href: "air",
    label: "AIR",
    icon: "AirIcon",
  },
  {
    href: "event",
    label: "EVENT",
    icon: "EventIcon",
  },
  {
    href: "tour",
    label: "TOUR",
    icon: "TourIcon",
  },
];
export const popularBusRouteData: string[] = [
  "DHAKA-COX'S BAZAR",
  "DHAKA-KHAGRACHARI",
  "DHAKA-BANDARBAN",
  "DHAKA-TEKNAF",
  "DHAKA-RANGAMATI",
  "DHAKA-CHAPAINAWABGANJ",
  "DHAKA-RAJSHAHI",
  "DHAKA-RANGPUR",
  "DHAKA-BARISAL",
  "DHAKA-BARGUNA",
  "DHAKA-KUAKATA",
  "DHAKA-SATKHIRA",
  "DHAKA-KHULNA",
  "DHAKA-PATUAKHALI",
  "DHAKA-THAKURGAON",
  "DHAKA-CHITTAGONG",
  "DHAKA-SHYAMNAGAR",
  "DHAKA-KANSAT",
  "DHAKA-KAPTAI",
  "DHAKA-BENAPOLE",
  "CHAPAINAWABGANJ-DHAKA",
  "DHAKA-PATHORGHATA",
  "DHAKA-KOLKATA",
  "DHAKA-PANCHAGARH",
  "DHAKA-VANDARIA",
  "DHAKA-KHEPUPARA",
  "DHAKA-PAIKGASA",
  "DHAKA-BURIMARI",
  "DHAKA-TANGAIL",
  "DHAKA-PABNA",
  "DHAKA-DINAJPUR",
  "DHAKA-SYLHET",
];
export const busRouteData: PopularBusRouteDataType[] = popularBusRouteData.map(
  (route) => ({
    name: route,
  })
);
