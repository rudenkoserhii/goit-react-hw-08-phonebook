import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
`;

export const Text = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
`;

// export const ButtonStyled = styled.button`
//     display: flex;
//     flex-direction: column;
//     margin-bottom: ${p => p.theme.space[4]}px;
// `;
