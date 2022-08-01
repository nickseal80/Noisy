import { createGlobalStyle } from "styled-components";
import colors from "./global.colors.vars";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto';
    }

    body {
        background-color: ${colors.background};
    }

    #root {
        margin: 0 auto;
    }
`;
