import styled from 'styled-components';
import theme from 'styles/theme';
// import { FONT_FAMILY } from 'src/styles'

export const RoundTagFilterWrapper = styled.button`
    height: 28px;
    padding: 8px 10px;
    display: flex;
    gap: 7px;
    align-items: center;

    background: white;
    border: 1px solid ${theme.colors.gray[300]};
    border-radius: 50px;
    color: ${theme.colors.gray[300]};
    cursor: pointer;

    font-weight: 500;

    cursor: pointer;
    &:hover {
        background: rgba(97, 188, 239, 0.1); 
    }
`;