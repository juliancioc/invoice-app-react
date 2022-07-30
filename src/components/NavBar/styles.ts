import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--color1);
  display: flex;
  justify-content: space-between;
  height: 72px;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    width: 80px;
    height: 100vh;
    border-radius: 0px 22px 22px 0px;
    position: fixed;
  }
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  .icon-change-theme {
    margin-right: 24px;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;

    .icon-change-theme {
      margin: 0;
    }
  }
`

export const AvatarWrapper = styled.div`
  border-left: 1px solid grey;
  padding: 1rem;

  img {
    border-radius: 50%;
    width: 32px;
  }

  @media only screen and (min-width: 768px) {
    border-top: 1px solid grey;
    border-left: none;
    width: 100%;
  }
`
