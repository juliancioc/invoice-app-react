import { configureStore } from '@reduxjs/toolkit'
import invoiceStore from './invoice.store'

const store = configureStore({
  reducer: {
    invoices: invoiceStore
  }
})

export default store

export type AppDispatch = typeof store.dispatch
