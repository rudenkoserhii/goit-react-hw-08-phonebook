import styled from 'styled-components';

export const ContactStyled = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.grey};
    border-radius: ${p => p.theme.radii.normal};
`;

export const NameStyled = styled.p`
    margin-top: ${p => p.theme.space[0]}px;
    margin-bottom: ${p => p.theme.space[0]}px;
`;

export const NumberStyled = styled.p`
    margin-top: ${p => p.theme.space[0]}px;
    margin-bottom: ${p => p.theme.space[0]}px;
`;

export const ButtonStyled = styled.button`
    border: none;
    font: inherit;
    cursor: pointer;
    outline: none;
    margin-left: auto;
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
    background-color: ${p => p.theme.colors.lightblue};
    color: ${p => p.theme.colors.white};

    &:hover,
    &:focus {
    background-color: ${p => p.theme.colors.blue};
    }

    &:active {
    ${p => p.theme.shadows.second};
    }
`;
