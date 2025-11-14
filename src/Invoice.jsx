import { useState } from 'react'
import './Invoice.css'

function Invoice() {
  const [formData, setFormData] = useState({
    invoiceNumber: '',
    date: new Date().toISOString().split('T')[0],
    customerName: '',
    customerAddress: '',
    customerPhone: '',
    items: [{ description: '', quantity: 1, price: 0 }]
  })

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { description: '', quantity: 1, price: 0 }]
    })
  }

  const removeItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index)
    setFormData({ ...formData, items: newItems })
  }

  const updateItem = (index, field, value) => {
    const newItems = [...formData.items]
    newItems[index][field] = value
    setFormData({ ...formData, items: newItems })
  }

  const calculateTotal = () => {
    return formData.items.reduce((sum, item) => sum + (item.quantity * item.price), 0)
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="invoice-page">
      <div className="invoice-header">
        <button className="back-button" onClick={() => window.history.back()}>← Back to Home</button>
        <h1>Professional Invoice</h1>
      </div>

      <div className="invoice-container">
        <div className="invoice-company-header">
          <div>
            <h2>ALAM BROS</h2>
            <p>Professional Aluminium Workshop</p>
          </div>
          <div className="invoice-number">
            <label>Invoice #</label>
            <input
              type="text"
              value={formData.invoiceNumber}
              onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
              placeholder="INV-001"
            />
          </div>
        </div>

        <div className="invoice-info-section">
          <div className="invoice-from">
            <h3>From:</h3>
            <p><strong>Alam Bros Aluminium Workshop</strong></p>
            <p>123 Industrial Avenue, Workshop District</p>
            <p>Phone: +961 71 873 635</p>
            <p>Email: alamgroup7541@gmail.com</p>
          </div>

          <div className="invoice-to">
            <h3>Bill To:</h3>
            <input
              type="text"
              placeholder="Customer Name"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Customer Address"
              value={formData.customerAddress}
              onChange={(e) => setFormData({ ...formData, customerAddress: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Customer Phone"
              value={formData.customerPhone}
              onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
            />
          </div>

          <div className="invoice-date">
            <h3>Date:</h3>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>

        <div className="invoice-items">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      placeholder="Item description"
                      value={item.description}
                      onChange={(e) => updateItem(index, 'description', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 1)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.price}
                      onChange={(e) => updateItem(index, 'price', parseFloat(e.target.value) || 0)}
                    />
                  </td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                  <td>
                    {formData.items.length > 1 && (
                      <button onClick={() => removeItem(index)} className="remove-btn">×</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={addItem} className="add-item-btn">+ Add Item</button>
        </div>

        <div className="invoice-total">
          <div className="total-row">
            <span>Subtotal:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="total-row grand-total">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>

        <div className="invoice-actions no-print">
          <button onClick={handlePrint} className="print-btn">Print / Save PDF</button>
        </div>
      </div>
    </div>
  )
}

export default Invoice
