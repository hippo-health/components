import ColorButton from "../components/ColorButton";
import React from "react";
import { storiesOf } from "@storybook/react";
storiesOf("ColorButton", module)
  .add("red", () => <ColorButton color="red" />)
  .add("blue", () => <ColorButton color="blue" />);
