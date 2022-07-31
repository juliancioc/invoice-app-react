import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 72px;
  background-color: var(--color-white);
  width: 100%;

  input,
  .select-payment-terms {
    padding: 15px 18px;
    border: 1px solid var(--color3);
    border-radius: 4px;
    width: 100%;
    font-size: var(--font-small);
    font-weight: bold;
  }

  button {
    padding: 17px;
    border: none;
    border-radius: 24px;
    font-size: var(--font-small);
    font-weight: bold;
    color: var(--color5);
    background-color: #f9fafe;
  }

  h1 {
    padding-top: 1rem;
  }

  @media (min-width: 968px) {
    top: 0px;
    left: 100px;
    right: 0;
    width: calc(100% - 100px);

    background-color: rgba(0, 0, 0, 0.5);

    h1 {
      padding-top: 3rem;
    }

    form {
      max-width: 590px;
      background-color: var(--color-white);
      border-radius: 0px 20px 20px 0px;
    }
  }
`

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;

  h1 {
    font-size: 24px;
    color: var(--color6);
  }

  .title {
    color: var(--color-primary);
    font-size: var(--font-small);
    font-weight: 700;
    margin: 24px 0;
  }

  .item-list {
    color: #777f98;
    font-weight: 700;
    font-size: 18px;
    margin: 54px 0 24px 0;
  }

  .btn-add-item {
    width: 100%;
    margin: 48px 0;
  }
`

export const FieldWrapper = styled.div`
  margin-top: 24px;

  p {
    color: var(--color5);
    font-size: var(--font-small);
    margin-bottom: 10px;
  }
`

export const Block = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 152px;
  }

  @media (min-width: 968px) {
    div {
      width: auto;
    }
  }
`

export const ItemDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--color5);
    font-size: var(--font-small);
    margin-bottom: 10px;
  }

  .quantity {
    width: 95px;
  }

  .price {
    width: 100px;
  }

  .total {
    height: 73px;
    margin-right: 2rem;

    p:nth-child(2) {
      margin-top: 1.2rem;
      font-weight: bold;
    }
  }
`

export const DeleteItem = styled.div`
  margin-top: 1.2rem;

  img {
    cursor: pointer;
  }
`

export const Form = styled.form``
