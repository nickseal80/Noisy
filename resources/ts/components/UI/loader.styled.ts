import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
export const Loader = styled.img.attrs({ src: '/images/loader.gif' })`
    width: 250px;
`;
