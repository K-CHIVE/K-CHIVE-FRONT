import styled from 'styled-components';
import theme from 'styles/theme';
// import { FONT_FAMILY } from 'src/styles'

export const RoundTagWrapper = styled.button`
    width: 70px;
    height: 30px;
    padding: 8px 10px;

    background: ${theme.colors.blue.light};
    border: 1px solid ${theme.colors.blue.light};
    border-radius: 50px;
    color: white;
    cursor: pointer;

    font-weight: 700;
`;

export const RoundTagBigWrapper = styled.button`
    width: 100px;
    height: 30px;
    padding: 8px 20px;

    background: ${props => props.primary ? "white" : "rgba(97, 111, 239, 0.1)"};
    border: 1px solid ${props => props.primary ? theme.colors.gray[600] : theme.colors.blue.primary};
    border-radius: 50px;
    color: ${props => props.primary ? theme.colors.gray[600] : theme.colors.blue.primary};
    cursor: pointer;
`;