import { FormEvent, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Title } from "../styles/styled.text.ts";


export function UserEditForm() {
  const myInput = useRef<HTMLInputElement>(null);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // console.log({ params });
  console.log({ location });

  // Vanilla JS Redirect will cause a full-page-reload:
  // window.location.href = "/about";

  const get_user = (event: FormEvent) => {
    event.preventDefault();
    //client redirect to a new path with no full-page-reload...
    navigate(`/user/${(myInput.current as HTMLInputElement).value}/edit`);
  };

  return (
    <>
      <form onSubmit={get_user} style={{marginBottom:"1rem"}}>
        <input ref={myInput} />
        <button>Go!</button>
      </form>
      <Title>
        Editing user ID: <span>{params.user_id}</span>
      </Title>
    </>
  );
}

