import React from "react";
import { TextInput as BaseInput } from "grommet";

export const Input = ({ children, ...props }) => (
  <BaseInput
    { ...props }
  >
    { children }
  </BaseInput>
);
