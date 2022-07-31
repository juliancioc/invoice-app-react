import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 18px 15px;
  margin-top: 44px;
  background-color: var(--color-white);
  box-shadow: inset 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  border-radius: 0px 0px 20px 0px;


  .btn-save-as-draft {
    background-color: var(--color1);
    color: var(--color4);
  }

  .save-send {
    background-color: var(--color-primary);
    color: var(--color-white);
    margin-left: 8px;
  }
`

export const RightSide = styled.div``