import { BusesTypes } from "@/lib/types";
import { loadUi } from "@/lib/utils";
import { SimpleBusTable } from "@/ui";
import {
  Box,
  Button,
  LoadingOverlay,
  Modal,
  Stepper,
  Text,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconArmchair, IconCircleCheck } from "@tabler/icons-react";
import React from "react";
import { BookingForm } from "@/ui";
import useFormValidation from "@/lib/hooks/validateForm";
export interface BusPropsTypes {
  opend: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  bus: BusesTypes | null;
  dest: string;
  date: string;
  origin: string;
  road: string;
}
export const initialValues = {
  id: "",
  name: "",
  email: "",
};

export interface FormValues {
  id: string;
  name: string;
  email: string;
}
const BusModal: React.FC<BusPropsTypes> = ({
  opend,
  closeModal,
  bus,
  dest,
  date,
  origin,
  road,
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [isTableShow, setIsTableShow] = React.useState<boolean>(true);
  const [seatNumber, setSeatNumber] = React.useState<number[]>([]);
  const [active, setActive] = React.useState(0);
  const [name, setName] = React.useState<string>("");
  const [id, setId] = React.useState<number>(0);
  const [email, setEmail] = React.useState<string>("");

  ///

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleSelect = async () => {
    setVisible(true);
    await loadUi(200);
    setVisible(false);
    setIsTableShow(false);
    nextStep();
  };
  const handleSeatSelect = (index: number) => {
    // Check if the seat is already selected
    if (seatNumber.includes(index)) {
      setSeatNumber((prevSelect) =>
        prevSelect.filter((seatIndex) => seatIndex !== index)
      );
    } else {
      if (seatNumber.length >= 4) {
        notifications.show({
          title: "You can only select up to 4 seats.",
          message: "Hey there, You can only select up to 4 seats.! 🤥",
        });
      } else {
        setSeatNumber((prevSelect) => [...prevSelect, index]);
      }
    }
  };
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };
  const { formData, errors, handleChange, validateForm } =
    useFormValidation(initialValues);

  // console.log(bus);
  return (
    <>
      <Modal
        opened={opend}
        onClose={() => closeModal(false)}
        // mt={53}
        size="xl"
        centered
        // title="m,fakmfjk"
      >
        <LoadingOverlay visible={visible} overlayBlur={2} />

        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First step" description="Select Bus">
            Step 1 Select Bus
            <SimpleBusTable
              roadName={bus?.roadName}
              dest={dest}
              date={date}
              totalSeats={bus?.totalSeats}
              seatPrice={bus?.seatPrice}
              handleSelect={handleSelect}
            />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Select Seat ">
            Step 2 Select Seat:
            <Box
              sx={(theme) => ({
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: theme.spacing.lg,
                height: "200px",
                overflowY: "scroll",
                // Adjust the gap between the grid items as needed
              })}
            >
              {Array.from({ length: bus?.totalSeats ?? 0 }).map((_, index) => {
                return (
                  <Box
                    onClick={() => handleSeatSelect(index)}
                    style={{
                      display: "flex",
                      gap: "11px",
                      cursor: "pointer",
                    }}
                    key={index}
                  >
                    <IconArmchair
                      color={seatNumber.includes(index) ? "#1971C2" : "white"}
                    />
                    <Text
                      color={seatNumber.includes(index) ? "#1971C2" : "unset"}
                    >
                      {index}
                    </Text>
                    {seatNumber.includes(index) ? (
                      <IconCircleCheck color="#1971C2" />
                    ) : null}
                  </Box>
                );
              })}
            </Box>
            <Box
              style={{
                display: "flex",
                gap: "11px",
                justifyContent: "center",
                marginTop: "11px",
              }}
            >
              <Button
                onClick={() => setActive((currentStep) => currentStep + 1)}
                disabled={seatNumber.length === 0}
              >
                Next
              </Button>
              <Button variant="default" onClick={prevStep}>
                Back
              </Button>
            </Box>
          </Stepper.Step>
          <Stepper.Step label="Final step" description="fill information box">
            <BookingForm handleChange={handleChange} />
            <Box
              style={{
                display: "flex",
                gap: "11px",
                justifyContent: "center",
                marginTop: "11px",
              }}
            >
              <Button
                onClick={() => {
                  if (!validateForm()) {
                    // Perform form submission logic here, e.g., send data to the server
                    console.log("", errors);
                    const { email, name, id } = errors;
                    notifications.show({
                      title: "Default notification",
                      message: `${name} ${email} ${id}`,
                    });
                    return;
                  }
                  setActive((currentStep) => currentStep + 1);
                }}
                disabled={
                  formData.id === "" ||
                  formData.name === "" ||
                  formData.email == ""
                }
              >
                Next
              </Button>
              <Button variant="default" onClick={prevStep}>
                Back
              </Button>
            </Box>
          </Stepper.Step>
          <Stepper.Completed>
            <Box
              sx={(theme) => ({
                textAlign: "center",
              })}
            >
              <Text>ID: {formData.id}</Text>
              <Text>Name: {formData.name}</Text>
              <Text>Email: {formData.email}</Text>
              <Text>Date: {date}</Text>
              <Text>Origin: {origin}</Text>
              <Text>Destination: {dest}</Text>
              <Text>Road: {road}</Text>
              <Text>BusNumber: {bus?._id}</Text>
              {seatNumber.map((seat, index) => {
                return <Text key={index}>Seatnumber: {seat}</Text>;
              })}

              <Button my={11}>By a ticket</Button>
            </Box>
          </Stepper.Completed>
        </Stepper>

        {/* <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group> */}

        {/* <Button onClick={() => closeModal(false)}>Close Modal</Button> */}
      </Modal>
    </>
  );
};

export default BusModal;