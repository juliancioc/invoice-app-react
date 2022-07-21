import styled from 'styled-components'

type StatusProps = {
  status: string
}

const colorStatus = (status: string) => {
  switch (status) {
    case 'paid':
      return '#33D69F'
    case 'pending':
      return '#FF8F00'
    case 'draft':
      return '#373B53'
    default:
      return '#000000'
  }
}

const colorStatusRGB = (status: string) => {
  switch (status) {
    case 'paid':
      return '51, 214, 159'
    case 'pending':
      return '255, 143, 0'
    case 'draft':
      return '55, 59, 83'
    default:
      return '0, 0, 0'
  }
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  background-color: var(--color-white);
  max-width: 327px;
  height: 134px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  padding: 24px;
  margin: 16px auto;
`

export const LeftSide = styled.div`
  .invoice-id {
    font-weight: 700;
    font-size: var(--font-small);
    color: var(--color6);

    span {
      color: var(--color5);
    }
  }

  .date {
    color: var(--color4);
    font-size: var(--font-small);
    margin-top: 24px;
  }

  .total {
    color: var(--color6);
    font-weight: 700;
    margin-top: 8px;
  }
`

export const RightSide = styled.div`
  .client-name {
    color: var(--color11);
    font-size: var(--font-small);
  }
`

export const Status = styled.div<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 27px;
  text-transform: capitalize;
  width: 104px;
  height: 40px;
  font-size: var(--font-small);
  font-weight: 700;
  color: ${({ status }) => colorStatus(status)};
  background: rgba(${({ status }) => colorStatusRGB(status)}, 0.1);
  border-radius: 6px;

  &::before {
    content: '•';
    margin-right: 8px;
    font-size: var(--font-large);
  }
`
