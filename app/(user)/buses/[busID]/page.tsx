import {
  BusApiResponseType,
  BusesApiResponseType,
  busCHairDataypes,
} from "@/libs/types";
import React, { useEffect } from "react";

import styles from "@/app/(user)/bus.module.css";
import { notFound } from "next/navigation";
import { getBusByID, getAllBus } from "@/libs/api";
import { BusPageProps } from "@/libs/interfaces";
import Image from "next/image";
import { IconArmchair } from "@tabler/icons-react";
import BusChairMenubar from "@/ui/busChairMenubar";

const busSeatChairData: busCHairDataypes[] = [
  { type: "BOOKED", gender: "M" },
  { type: "BOOKED", gender: "F" },
  { type: "BLOCKED", gender: "" },
  { type: "AVAILABLE", gender: "" },
  { type: "SELECTED", gender: "" },
  { type: "SOLD", gender: "M" },
  { type: "SOLD", gender: "F" },
];
export async function generateMetadata({ params }: BusPageProps) {
  const { busID } = params;
  const busData: Promise<BusApiResponseType> = getBusByID(
    `/api/buses/${busID}`
  );
  const bus = await busData;
  const { data } = bus;
  if (!data._id) {
    return {
      title: "product not found",
    };
  }
  return {
    title: `This is Bus No: ${data.bussNumber}`,
    description: `the bus drive ${data.road}`,
  };
}

const Product: React.FC<BusPageProps> = async ({ params }) => {
  const { busID } = params;
  const busData: Promise<BusApiResponseType> = getBusByID(
    `/api/buses/${busID}`
  );
  const bus = await busData;
  const { data } = bus;

  if (!data._id) {
    return notFound();
  }

  const { A, B } = data.seats;
  type SeatDataAG1 = {
    seat: string;
    passengerName: string;
    passengerId: string | null;
    isBooked: boolean;
    _id: string;
  };
  interface SeatDataAG1Props {
    data: SeatDataAG1[];
  }
  const Set15 = ({ data }: SeatDataAG1Props) => {
    return (
      <div>
        <h1>h</h1>
      </div>
    );
  };
  const g1 = [];
  for (let index = 0; index < A.length && index < 15; index++) {
    g1.push(A[index]);
  }
  console.log("G!", g1);
  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.busImage}
          style={{ borderRadius: "10px" }}
          src={data.img}
          height={250}
          width={600}
          alt=""
        />
      </div>
      <h4>Bus type: {data.category}</h4>
      <div>
        <BusChairMenubar data={busSeatChairData} />
      </div>
      <div>
        {/* {A.map((seat, index) => {
          let data: SeatDataAG1[] = [];
          if (index <= 15) {
            data.push(seat);
          }
          return (
            <div key={index}>
              {index}
              <Set15 data={data} />
              <IconArmchair />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const busData: Promise<BusesApiResponseType> = getAllBus();
  const buses = await busData;
  return buses.data.map((bus) => {
    busID: bus._id;
  });
};

export default Product;