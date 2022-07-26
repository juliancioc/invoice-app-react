import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--color-background);
  padding-bottom: 3rem;

  .text-highlights,
  .text-important {
    font-weight: bold;
  }

  .text-important {
    font-size: 15px;
    margin: 8px 0;
  }

  .text-low {
    color: var(--color5);
    font-size: var(--font-small);
    margin-top: 4px;
  }

  .text-small {
    font-size: var(--font-small);
    color: var(--color5);
    margin-top: 10px;
  }
`

export const Address = styled.div`
  margin-bottom: 1.5rem;

  p {
    color: var(--color5);
    font-size: var(--font-small);
    margin-bottom: 6px;
  }

  @media(min-width: 768px) {
    position: absolute;
    right: 48px;
    top: 48px;
  }
`

export const StatusWrapper = styled.div`
  background-color: var(--color-white);
  margin: 0 auto;
  width: 100%;
  height: 91px;
  max-width: 327px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  p {
    font-size: var(--font-small);
    color: var(--color11);
  }

  div {
    margin: 0;
  }

  @media (min-width: 768px) {
    max-width: 730px;
    margin: 24px auto;

    .status-invoice {
      margin-right: 10rem;
    }
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 327px;
  background-color: var(--color-white);
  margin: 1rem auto;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  position: relative;
  padding: 1.5rem;

  @media (min-width: 768px) {
    max-width: 730px;
    margin: 24px auto;
    padding: 48px;
  }
`

export const Block = styled.div`
  padding-bottom: 1.5rem;

  .installments {
    font-weight: 700;
    font-size: var(--font-small);
    color: var(--color5);
    margin-top: 4px;
  }

  .date {
    margin-bottom: 1.5rem;
  }
`

export const InvoiceInformation = styled.div`
  display: flex;

  div:first-child {
    margin-right: 3rem;
  }

  @media(min-width: 768px) {
    margin-top: 3.5rem;
  }
`

export const PaymentInformation = styled.div`
  border-radius: 8px 8px 0px 0px;
  background-color: var(--color-background);
  margin-top: 1rem;
`

export const PaymentContent = styled.div`
  padding: 2rem 2rem 0 2rem;
`

export const Total = styled.div`
  background-color: var(--color1);
  padding: 2rem;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);

  p:first-child {
    font-size: var(--font-small);
  }

  .price {
    font-size: var(--font-large);
  }
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item {
    font-weight: bold;
    font-size: var(--font-small);
  }
`
