import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: var(--color1);
  display: flex;
  justify-content: space-between;
  height: 72px;
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  .icon-change-theme {
    margin-right: 24px;
    cursor: pointer;
  }
`

export const AvatarWrapper = styled.div`
  border-left: 1px solid grey;
  padding: 1rem;

  img {
    border-radius: 50%;
    width: 32px;
  }
`
