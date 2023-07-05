import { css } from "styled-components";

export const MaxContainer = css`
    max-width: ${({theme}) => theme.size.maxWidth};
    margin: auto;
`;