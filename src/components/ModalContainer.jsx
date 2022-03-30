import styled from "styled-components";
import handleViewport from "react-in-viewport";
import { UpperBox } from "../views/ToolsBar";

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  if (inViewport) {
    return <UpperBox />;
  }
};
