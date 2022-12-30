import styled from 'styled-components';

export const Title = styled.h3`
`;

export const InputStyled = styled.input`
    flex-grow: 1;
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.dark};
    border-radius: ${p => p.theme.radii.normal};
    font: inherit;
    line-height: ${p => p.theme.lineHeights.body};
    letter-spacing: 0.01em;
    resize: none;
`;

