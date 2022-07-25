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
  const [items, setItems] = useState<ItemsProps[]>([])
  const [item, setItem] = useState<ItemsProps>({} as any)

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

    setItems([...items, { name: '', price: 0, quantity: 0, total: 0 }])
  }

  function handleChangeItem(event: any, nameItem: string) {
    const value = event.target.value
    const name = event.target.name

    let findItem: any = items.filter((item) => item.name === nameItem)[0]
    findItem[name] = value
    findItem.total =
      name === 'price' ? value * findItem.quantity : value * findItem.price

    console.log('item', findItem)
    setItems([...findItem, ...items.filter((item) => item.name !== nameItem)])
  }

  function handleDeleteItem(nameItem: string) {
    setItems(items.filter((item) => item.name !== nameItem))
  }

  console.log(items)
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
                  name="name"
                  onChange={(e: any) => handleChangeItem(e, item.name)}
                  type="text"
                />
              </S.FieldWrapper>

              <S.ItemDetail>
                <div className="quantity">
                  <p>Qty.</p>
                  <input
                    name="quantity"
                    onChange={(e: any) => handleChangeItem(e, item.name)}
                    type="number"
                  />
                </div>

                <div className="price">
                  <p>Price</p>
                  <input
                    name="price"
                    onChange={(e: any) => handleChangeItem(e, item.name)}
                    type="number"
                  />
                </div>
                <div className="total">
                  <p>Total</p>
                  <p>{formatMoney(item.total)}</p>
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
