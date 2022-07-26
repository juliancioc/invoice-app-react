import React, { useState } from 'react'

import GoBack from '../GoBack'
import * as S from './styles'
import iconDelete from '../../assets/icon-delete.svg'
import formatMoney from '../../utils/formatMoney'

type ItemsProps = {
  name: string
  quantity: number
  price: number
  total: number
}

const NewInvoice = () => {
  const [items, setItems] = useState<ItemsProps[]>([
    { name: '', price: 0, quantity: 0, total: 0 }
  ])
  const [itemState, setItemState] = useState<ItemsProps>({
    name: '',
    price: 0,
    quantity: 0,
    total: 0
  })

  const [invoiceDataToSave, setInvoiceDataToSave] = useState({
    id: '',
    createdAt: new Date(),
    paymentDue: '',
    description: '',
    paymentTerms: 1,
    clientName: '',
    clientEmail: '',
    status: '',
    senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: ''
    },
    clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: ''
    },
    items: [],
    total: 1800.9
  })

  function handleAddNewItem(e: any) {
    e.preventDefault()

    setItems([itemState, ...items])
    setItemState({ name: '', price: 0, quantity: 0, total: 0 })
  }

  function changeTotalItem(name: string, value: string | number) {
    if (name !== 'name') {
      return name === 'quantity'
        ? Number(value) * itemState.price
        : Number(value) * itemState.quantity
    } else {
      return 0
    }
  }

  function handleChangeItem(event: any) {
    const value = event.target.value
    const name = event.target.name

    setItemState({
      ...itemState,
      [name]: name === 'quantity' || name === 'price' ? Number(value) : value,
      total: changeTotalItem(name, value)
    })
  }

  function handleDeleteItem(nameItem: string) {
    setItems(items.filter((item) => item.name !== nameItem))
  }

  return (
    <S.Wrapper>
      <GoBack />
      <S.Form>
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

          <S.FieldWrapper>
            <p>Project Description</p>
            <input type="text" />
          </S.FieldWrapper>

          <p className="item-list">Item List</p>
          {items.map((item, idx) => (
            <div key={idx}>
              <S.FieldWrapper>
                <p>Item Name</p>
                <input
                  value={item.name !== '' ? item.name : itemState.name}
                  name="name"
                  onChange={(e: any) => handleChangeItem(e)}
                  type="text"
                />
              </S.FieldWrapper>

              <S.ItemDetail>
                <div className="quantity">
                  <p>Qty.</p>
                  <input
                    value={
                      item.quantity !== 0 ? item.quantity : itemState.quantity
                    }
                    name="quantity"
                    onChange={(e: any) => handleChangeItem(e)}
                    type="number"
                  />
                </div>

                <div className="price">
                  <p>Price</p>
                  <input
                    value={item.price !== 0 ? item.price : itemState.price}
                    name="price"
                    onChange={(e: any) => handleChangeItem(e)}
                    type="number"
                  />
                </div>
                <div className="total">
                  <p>Total</p>
                  <p>
                    {formatMoney(
                      item.total !== 0 ? item.total : itemState.total
                    )}
                  </p>
                </div>
                <S.DeleteItem>
                  <img
                    onClick={() => handleDeleteItem(item.name)}
                    src={iconDelete}
                    alt="Action delete"
                  />
                </S.DeleteItem>
              </S.ItemDetail>
            </div>
          ))}

          <button onClick={handleAddNewItem} className="btn-add-item">
            + Add New Item
          </button>
        </S.Content>

        <S.Actions>
          <button className="btn-discard">Discard</button>
          <button className="btn-save-as-draft">Save as Draft</button>
          <button type="submit" className="save-send">
            Save &#38; Send
          </button>
        </S.Actions>
      </S.Form>
    </S.Wrapper>
  )
}

export default NewInvoice
