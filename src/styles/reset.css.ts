import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
   ${reset}
    html,
    body,#root  {
      min-height: 100vh;
    }
    html {
      font-size: 10px;
      /* scroll-behavior: smooth; */
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      background: papayawhip;
      background: linear-gradient(
        to bottom,
        #f5f5dc 0%,
        #d2b48c 100%
      ); 
      
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      /*border:aqua dashed 3px; */
      /*color:papayawhip*/
    }
    li {
      list-style-type: none;
    }
    /* html,
    body {
      height: 100%;
    }
    html {
      font-size: 10px;
    } */
    #root {
      /* display: flex;
      flex-direction: column;
      justify-content: center; */
      /* align-items: center; */
      padding-top: 12rem;
      /* border: deeppink 2px dashed; */
    }
    
`;
