import React from 'react'

import GoBack from '../GoBack'
import * as S from './styles'
import iconDelete from '../../assets/icon-delete.svg'
import formatMoney from '../../utils/formatMoney'

const NewInvoice = () => {
  return (
    <S.Wrapper>
      <GoBack />
      <S.Content>
        <h1>New Invoice</h1>
        <p className="title">Bill From</p>

        <S.FieldWrapper>
          <p>Street Address</p>
          <input type="text" />
        </S.FieldWrapper>

        <S.Block>
          <S.FieldWrapper>
            <p>City</p>
            <input type="text" />
          </S.FieldWrapper>
          <S.FieldWrapper>
            <p>Post Code</p>
            <input type="text" />
          </S.FieldWrapper>
        </S.Block>

        <S.FieldWrapper>
          <p>Country</p>
          <input type="text" />
        </S.FieldWrapper>

        <p className="title">Bill To</p>
        <S.FieldWrapper>
          <p>Client's name</p>
          <input type="text" />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <p>Client's Email</p>
          <input type="text" />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <p>Street Address</p>
          <input type="text" />
        </S.FieldWrapper>

        <S.Block>
          <S.FieldWrapper>
            <p>City</p>
            <input type="text" />
          </S.FieldWrapper>
          <S.FieldWrapper>
            <p>Post Code</p>
            <input type="text" />
          </S.FieldWrapper>
        </S.Block>

        <S.FieldWrapper>
          <p>Country</p>
          <input type="text" />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <p>Invoice Date</p>
          <input type="date" />
        </S.FieldWrapper>

        <S.FieldWrapper>
          <p>Payment Terms</p>
          <select className="select-payment-terms">
            <option>Next 30 Days</option>
          </select>
        </S.FieldWrapper>

        <p className="item-list">Item List</p>
        <S.FieldWrapper>
          <p>Item Name</p>
          <input type="text" />
        </S.FieldWrapper>

        <S.ItemDetail>
          <div className="quantity">
            <p>Qty.</p>
            <input type="text" />
          </div>

          <div className="price">
            <p>Price</p>
            <input type="text" />
          </div>
          <div className="total">
            <p>Total</p>
            <p>{formatMoney(0)}</p>
          </div>
          <S.DeleteItem>
            <img src={iconDelete} alt="Action delete" />
          </S.DeleteItem>
        </S.ItemDetail>

        <button className="btn-add-item">+ Add New Item</button>
      </S.Content>

      <S.Actions>
        <button className="btn-discard">Discard</button>
        <button className="btn-save-as-draft">Save as Draft</button>
        <button className="save-send">Save &#38; Send</button>
      </S.Actions>
    </S.Wrapper>
  )
}

export default NewInvoice
