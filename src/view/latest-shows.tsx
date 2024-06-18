import { useParams } from "react-router-dom";
import { Title } from "../styles/styled.text.ts";

export function LatestShows() {
  const params = useParams();

  console.log({ params });

  return (
    <Title>
      Latest shows on: <span>{params.brand}</span>
    </Title>
  );
}
