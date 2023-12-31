import {
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconEye,
  IconFingerprint,
  IconNotification,
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { StaticImageData } from "next/image";
import { SeatMap } from "../interfaces";
import { MouseEventHandler } from "react";
type IconType =
  | typeof IconEye
  | typeof IconCode
  | typeof IconCoin
  | typeof IconBook
  | typeof IconFingerprint
  | typeof IconChartPie3
  | typeof IconNotification;

export type MockDataType = {
  icon: IconType;
  title: string;
  description?: string;
};

// MODEL TYPES

export type PaginatePropsTypes = {
  data: PaginateDataTypes[];
  itemsPerPage: number;
};
export type PaginateReturnType = {
  paginateData: PaginateDataTypes[];
  totalPage: number;
  handlePageChange: (page: number) => void;
};
export type PaginateDataTypes = {
  name: string;
};
//BUS
export type BusMockDataType = {
  logo: string;
  name: string;
  description: string;
};
export type navlinkDataType = {
  href: string;
  label: string;
};
export type PopularBusRouteDataType = {
  name: string;
};
export type FactsDataTypes = {
  icon: StaticImageData;
  dataNumber: number;
  desc: string;
};
export type StoriesTypes = {
  rating: number;
  review: string;
  issue: string;
  userName: string;
  userPic: StaticImageData | string;
};
// Define the different seat groups
export type AuthTypes = {
  name?: string;
  email: string;
  password?: string;
  endPoint: string;
};
export type SignUpProps = {
  state: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: MouseEventHandler<HTMLDivElement>;
};
// Define the AvailableBussDataTypes type with seats as an array of Seat
export type AvailableBussDataTypes = {
  bussNumber: number;
  roadName: string;
  startTime: string;
  reachedTime: string;
  seats: SeatMap;
  img: string;
  category: "Ac" | "Non-Ac" | "Coach bus";
};

export type BusesTypes = {
  _id: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  totalSeats: number;
  availableSeats: number;
  seatPrice: number;
  busType: string;
  busNumber: number;
} & AvailableBussDataTypes;

export type BusesApiResponseType = {
  OK: boolean;
  msg: string;
  data: BusesTypes[];
};
export type BusApiResponseType = {
  OK: boolean;
  msg: string;
  data: BusesTypes;
};
export type busCHairDataypes = {
  type: string;
  gender?: string;
};
// dashboard
export type NavDataTypes = {
  label: string;
  href: string;
};
export type btnText = "Click here" | "View All";
export type ChartDataTypes = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

export type FooterDataTypes = {};
export type FooterCompanyInfoTypes = {
  name: string;
  href: string;
};
export type FooterCompanyAboutTypes = {
  name: string;
  href: string;
};
type SocialIconType =
  | typeof IconBrandGithub
  | typeof IconBrandFacebook
  | typeof IconBrandLinkedin
  | typeof IconBrandTwitter;
export type SocialLinkDataTypes = {
  Icon: SocialIconType;
  link: string;
};
export type FaqDataTypes = {
  name: string;
  value: { question: string; answer: string }[] | string;
};
export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  isAdmin: boolean;
  verificationToken: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type MyTicket = {
  boardingPlace: string;
  busNumber: number;
  date: string;
  destination: string;
  isPayment: boolean;
  purchaseDate: string;
  seatNumber: number[];
  user: string;
  __v: number;
  _id: string;
};
