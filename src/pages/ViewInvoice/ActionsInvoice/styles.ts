import styled from 'styled-components'

export const Container = styled.div`
  height: 91px;
  background-color: var(--color-white);
  margin-top: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border-radius: 24px;
    padding: 12px 19px;
    margin-right: 8px;
    font-size: var(--font-small);
    font-weight: 700;
    color: var(--color-white);
    border: none;
  }

  .btn-edit {
    color: var(--color5);
  }

  .btn-delete {
    background-color: var(--color7);
  }

  .btn-mark-as-paid {
    background-color: var(--color-primary);
  }
`
