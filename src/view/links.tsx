import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export function Links() {
  const navigate = useNavigate();

  const gotoPizza = () => {
    navigate({
      pathname: "/pizza/order",
      search:
        "?size=medium&toppings=olives,pepperoni,mushrooms&coupon=holimoli29"
    });
  };
  return (
    <Ul>
      <li>
        <Link to="/shows/netflix/latest">Netflix</Link>
      </li>
      <span>|</span>
      <li>
        <Link to="/shows/hulu/latest">Hulu</Link>
      </li>
      <span>|</span>
      <li>
        <Link to="/user/1234/edit">User A</Link>
      </li>
      <li>
        <Link to="/user/5678/edit">User B</Link>
      </li>
      <span>|</span>
      <li>
        <Link to="/pizza/order?size=medium&toppings=olives,pepperoni,mushrooms&coupon=holimoli29">
          Pizza
        </Link>
      </li>
      <span>|</span>
      <li>
        <button onClick={gotoPizza}>Pizza 2</button>
      </li>
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  /* width: 30rem; */
  justify-content: space-between;

  a {
    color: mintcream;
  }
  button{
    cursor: pointer;
  }
`;
