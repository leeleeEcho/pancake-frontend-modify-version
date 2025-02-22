import React from "react";
import { Box } from "../Box";
import { SpinnerProps } from "./types";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return <Box width={size} height={size * 1.197} position="relative"></Box>;
};

export default Spinner;
