import { useDispatch } from 'react-redux'

import { newInvoice } from '../../../redux/invoice.store'
import * as S from './styles'

function ActionsNewInvoice() {
  const dispatch = useDispatch()

  function handleDiscardInvoice() {
    dispatch(newInvoice(false))
  }

  return (
    <S.Container>
      <button onClick={handleDiscardInvoice} className="btn-discard">
        Discard
      </button>
      <S.RightSide>
        <button className="btn-save-as-draft">Save as Draft</button>
        <button type="submit" className="save-send">
          Save &#38; Send
        </button>
      </S.RightSide>
    </S.Container>
  )
}

export default ActionsNewInvoice
