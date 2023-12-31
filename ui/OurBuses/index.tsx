import usePaginate from "@/lib/hooks/usePaginate";
import { AvailableBussProps } from "@/lib/interfaces";
import { ourBusesStyles } from "@/lib/styles";
import { useAppSelector } from "@/redux/hooks";
import { Box, Loader, Pagination, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { BusTable } from "@/ui";

const OurBusses: React.FC<AvailableBussProps> = ({ title }) => {
  // console.log(data);
  const { data } = useAppSelector((state) => state.bussData);
  const { classes } = ourBusesStyles();
  const paginate = usePaginate({ data: data, itemsPerPage: 5 });
  const { handlePageChange, paginateData, totalPage } = paginate;
  const { container, titileStle, paginateStyle, busContainer, busImg } =
    classes;
  console.log(data);

  return (
    <Box className={container}>
      <Text className={titileStle}>{title}</Text>

      {/* {data ? <BusTable data={data} /> : <Loader size="sm" />} */}

      {/* {paginateData.map((bus, index) => {
        return (
          <Box className={busContainer} key={index}>
            <Image
              className={busImg}
              src={bus.img}
              width={100}
              height={100}
              alt={bus.category}
            />
            <Text>
              {bus.bussNumber < 10 ? `0${bus.bussNumber}` : bus.bussNumber}
            </Text>
            <Text>{bus.road}</Text>
            <Text>{bus.category}</Text>
          </Box>
        );
      })}

      <Pagination
        className={paginateStyle}
        total={totalPage}
        onChange={handlePageChange}
        radius="xs"
        sx={{ justifyContent: "center", marginTop: "22px" }}
      /> */}
    </Box>
  );
};

export default OurBusses;
