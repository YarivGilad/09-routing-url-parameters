//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

import styled from "styled-components";

import { useLocation, useSearchParams } from "react-router-dom";

export function PizzaOrderForm() {
  const location = useLocation();
  console.log({ location });

  const [searchParams, setSearchParams] = useSearchParams();
  console.log({ searchParams, setSearchParams });

  const size = searchParams.get("size");
  const coupon = searchParams.get("coupon");
  const toppings = searchParams.get("toppings")?.split(",");
  console.log("searchParams", searchParams);
  // console.log('entries',[...searchParams.entries()]);
  // console.log('keys',[...searchParams.keys()]);
  // console.log('values',[...searchParams.values()]);

  return (
    <Box>
      <H1>My Pizza Order</H1>
      <H3>
        Size: <span>{size}</span>
      </H3>
      <H3>
        Coupon: <span>{coupon}</span>
      </H3>
      <H3>Toppings: </H3>
      <Ul>
        {toppings?.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </Ul>
    </Box>
  );
}

const Box = styled.div`
  background: lightskyblue;
  padding: 8rem 15rem;
  border-radius: 0.8rem;
`;

const H1 = styled.h1`
  font-size: 5rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  text-align: center;
  color: mintcream;
  padding-bottom: 1rem;
`;
const H3 = styled.h3`
  font-size: 2rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  /* text-align: center; */
  color: purple;
  margin-top: 0.6rem;
  span {
    font-family: Arial;
    font-size: 1.6rem;
    color: darkblue;
  }
`;
const Ul = styled.ul`
  list-style-type: none;
  margin-top: -2.2rem;
  li {
    font-family: Arial;
    font-size: 1.6rem;
    color: darkblue;
    padding-left: 8.5rem;
  }
`;
