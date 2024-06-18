import styled from "styled-components";
import { Title } from "../styles/styled.text.ts";

export function Home() {
  return (
    <Title>
      Dynamic <Span>URL</Span> parameters
    </Title>
  );
}

const Span = styled.span`
  color: purple;
`;
