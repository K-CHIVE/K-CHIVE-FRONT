import styled from 'styled-components';
import theme from 'styles/theme';
// import { FONT_FAMILY } from 'src/styles'

//Contents
export const ContentsWrapper = styled.div`
    position: relative;
`;
export const FilterBar = styled.div`
    display: flex;
    gap: 10px;
    padding-left: 22px;
    padding-right: 12px; 
    margin: 18px 0 0 0;
`
export const Feed = styled.div`
    position: relative;
    top: 113px;
`
export const MenuBarWrapper = styled.div`
    padding: 0 12px 0 22px; 
`

//MenuBar
export const TypeWrapper = styled.div`
    display: flex;
    gap: -10px;
    border: 1px solid ${theme.colors.blue.gray};
    border-radius: 25px;
    overflow: hidden;
`
export const Type = styled.button`
    padding: 7.5px 0;
    width: 35%;
    border: none;
    background: ${props => props.bg ? 'white' : theme.colors.gray[100]};
`
export const ContentsType = styled.p`
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.fontColor ? theme.colors.gray[600] : theme.colors.gray[300]};
    z-index: 3;
`