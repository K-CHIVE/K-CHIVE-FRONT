import styled from 'styled-components';
import theme from 'styles/theme';
// import { FONT_FAMILY } from 'src/styles';

export const PostWrapper = styled.div`
    padding: 15px 12px 15px 24px;
    max-width: 390px;
    border-bottom: 1px solid ${theme.colors.blue.gray};
`;

export const PostInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 13px;
`
export const InfoAlign = styled.div`
    display: flex;
    column-gap: 10px;
`
export const NickName = styled.p`
    font-weight: 700;
    color: #000;
`
export const UserId = styled.p`
    font-weight: 500;
    color: ${theme.colors.gray[400]};
`
export const Date = styled.p`
    font-weight: 500;
    color: ${theme.colors.gray[400]};
`
export const GoTwitter = styled.button`
    padding: 0 9px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.blue.light};
    background: white;
    border: 1px solid ${theme.colors.blue.light};
    border-radius: 50px;


    cursor: pointer;
    &:hover {
        background: rgba(97, 188, 239, 0.1); 
    }
`
export const Content = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
`
export const PostRecords = styled.div`
    display: flex;
    column-gap: 10px;
`
export const Record = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 11px;
    color: ${theme.colors.gray[300]};
`