import * as S from './styles'

function ActionsInvoice() {
  return (
    <S.Container>
      <button type="button" className="btn-edit">
        Edit
      </button>
      <button type="button" className="btn-delete">
        Delete
      </button>
      <button type="button" className="btn-mark-as-paid">
        Mark as Paid
      </button>
    </S.Container>
  )
}

export default ActionsInvoice
