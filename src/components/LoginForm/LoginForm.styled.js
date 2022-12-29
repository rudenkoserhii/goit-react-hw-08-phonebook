import styled from 'styled-components';

export const FormStyled = styled.form`{
    width: ${p => p.theme.space[8]}px;
`;

export const LabelStyled = styled.label`{
    display: flex;
    flex-direction: column;
    margin-bottom: ${p => p.theme.space[4]}px;
`;
