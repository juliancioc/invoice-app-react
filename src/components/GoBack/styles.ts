import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 2rem 1.5rem;
  max-width: 730px;
  margin: 0 auto;

  img {
    margin-right: 1.5rem;
  }

  button {
    color: var(--color6);
    font-size: var(--font-small);
    font-weight: 700;
    background: transparent !important;
    border: none;
  }

  @media(min-width: 768px) {
    padding-top: 60px;
  } 
`