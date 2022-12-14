import styled from 'styled-components'

export const PaginationContainer = styled.div`
        margin-top: 1em;
        display: flex;
        gap: 0.5em;
        justify-content: center;

    `
export const PaginationPage = styled.button`
    display: ${props => props.isHide ? 'none' : 'block'};
    width: 2.5em;
    height: 2.5em;
    font-size: 0.7em;
`

export const PaginationIcon = styled.i`
    font-size: 0.7em;
`