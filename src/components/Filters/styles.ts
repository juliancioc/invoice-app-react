import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 72px 0;
  max-width: 730px;

  @media (min-width: 768px) {
    margin: 0 auto;
    justify-content: space-between;

    h1 {
      font-size: 32px;
    }
  }
`

export const LeftSide = styled.div`
  h1 {
    font-size: var(--font-large);
    color: var(--color6);
  }

  span {
    color: var(--color4);
    font-size: var(--font-small);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 32px;
    }
  }
`

export const RightSide = styled.div`
  display: flex;

  select {
    border: none;
    background: transparent;
    color: var(--color6);
    font-weight: bold;
    padding: 0.1rem;
    letter-spacing: -0.25px;
  }

  button {
    background: var(--color-primary);
    width: 90px;
    height: 44px;
    border: none;
    border-radius: 24px;
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: bold;
    font-size: var(--font-small);
    margin-left: 18px;
  }

  @media (min-width: 768px) {
    button {
     width: 150px;
    }
  }
`
