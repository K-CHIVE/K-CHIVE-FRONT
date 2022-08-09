import styled from 'styled-components';
import theme from 'styles/theme';
// import { FONT_FAMILY } from 'src/styles'

export const SquareTagWrapper = styled.button`
    height: 30px;
    padding: 8px 10px;
    margin-right: 10px;

    background: ${props => props.primary ? "white" : "rgba(97, 111, 239, 0.1)"};
    border: 1px solid ${props => props.primary ? theme.colors.gray[600] : theme.colors.blue.primary};
    border-radius: 5px;
    color: ${props => props.primary ? theme.colors.gray[600] : theme.colors.blue.primary};
    cursor: pointer;
`;

export const SquareTagBlackWrapper = styled.button`
    height: 30px;
    padding: 8px 10px;
    margin-right: 10px;

    background: ${props => props.primary ? theme.colors.gray[600] : theme.colors.blue.primary};
    border: 1px solid ${props => props.primary ? theme.colors.gray[600] : theme.colors.blue.primary};
    border-radius: 5px;
    color: white;
    cursor: pointer;
`;