import styled from 'styled-components'

type Props = {
  showBackground: boolean
}

export const Wrapper = styled.main<Props>`
  background-color: ${({ showBackground }) =>
    showBackground ? '#F8F8FB' : 'transparent'};
  min-height: 100vh;
`
