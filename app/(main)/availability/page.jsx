import { getUserAvailability } from "@/actions/availability";
import React from "react";
import AvailabilityLayout from "./layout";
import { defaultAvailability } from "./data";
import AvailabilityForm from "./_components/availability-form";

const AvailabiltyPage = async () => {
  const availability = await getUserAvailability();

  return <AvailabilityForm initialData={availability || defaultAvailability} />;
};

export default AvailabiltyPage;
