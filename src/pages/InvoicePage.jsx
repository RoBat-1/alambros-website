import { useState } from 'react'
import { Link } from 'react-router-dom'
import './InvoicePage.css'

function InvoicePage() {
  const [invoiceItems, setInvoiceItems] = useState([])
  const [currentItem, setCurrentItem] = useState({
    name: '',
    price: '',
    length: '',
    quantity: ''
  })

  // Add item to invoice
  const addItem = () => {
    if (!currentItem.name || !currentItem.price || !currentItem.quantity) {
      alert('Please fill in item name, price, and quantity')
      return
    }

    const newItem = {
      id: Date.now(),
      name: currentItem.name,
      price: parseFloat(currentItem.price) || 0,
      length: parseFloat(currentItem.length) || 0,
      quantity: parseFloat(currentItem.quantity) || 0
    }

    setInvoiceItems([...invoiceItems, newItem])
    setCurrentItem({ name: '', price: '', length: '', quantity: '' })
  }

  // Remove item from invoice
  const removeItem = (id) => {
    setInvoiceItems(invoiceItems.filter(item => item.id !== id))
  }

  // Update item field
  const updateCurrentItem = (field, value) => {
    setCurrentItem({ ...currentItem, [field]: value })
  }

  // Calculate item total (price * length * quantity or price * quantity if no length)
  const calculateItemTotal = (item) => {
    if (item.length > 0) {
      return item.price * item.length * item.quantity
    }
    return item.price * item.quantity
  }

  // Calculate totals
  const subtotal = invoiceItems.reduce((total, item) => total + calculateItemTotal(item), 0)
  const tax = subtotal * 0.11 // 11% VAT
  const total = subtotal + tax

  // Generate invoice
  const generateInvoice = () => {
    if (invoiceItems.length === 0) {
      alert('Please add at least one item to the invoice')
      return
    }
    
    let invoiceText = 'ALAM BROS - INVOICE\n\n'
    invoiceText += 'Contact: +961 71 873 635\n'
    invoiceText += 'Email: alamgroup7541@gmail.com\n\n'
    invoiceText += '----------------------------\n\n'
    
    invoiceItems.forEach(item => {
      const itemTotal = calculateItemTotal(item)
      invoiceText += `${item.name}\n`
      if (item.length > 0) {
        invoiceText += `${item.quantity} pcs × ${item.length}m × $${item.price}/m = $${itemTotal.toFixed(2)}\n\n`
      } else {
        invoiceText += `${item.quantity} × $${item.price} = $${itemTotal.toFixed(2)}\n\n`
      }
    })
    
    invoiceText += '----------------------------\n'
    invoiceText += `Subtotal: $${subtotal.toFixed(2)}\n`
    invoiceText += `Tax (11%): $${tax.toFixed(2)}\n`
    invoiceText += `Total: $${total.toFixed(2)}\n`
    
    const message = encodeURIComponent(invoiceText)
    window.open(`https://wa.me/96171873635?text=${message}`, '_blank')
  }

  return (
    <div className="invoice-page">
      {/* Header */}
      <header className="invoice-header">
        <div className="invoice-header-content">
          <Link to="/" className="back-button">← Back to Home</Link>
          <h1>Professional Invoice System</h1>
          <p>Add items manually and generate your invoice</p>
        </div>
      </header>

      <div className="invoice-container">
        {/* Main Content - Input Form */}
        <main className="invoice-main">
          <div className="add-item-section">
            <h2>Add New Item</h2>
            <div className="item-input-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Item Name *</label>
                  <input
                    type="text"
                    placeholder="e.g., Sliding Window"
                    value={currentItem.name}
                    onChange={(e) => updateCurrentItem('name', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addItem()}
                  />
                </div>
                <div className="form-group">
                  <label>Price ($) *</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    value={currentItem.price}
                    onChange={(e) => updateCurrentItem('price', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addItem()}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Length (m) <span className="optional">(optional)</span></label>
                  <input
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    value={currentItem.length}
                    onChange={(e) => updateCurrentItem('length', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addItem()}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity *</label>
                  <input
                    type="number"
                    placeholder="1"
                    step="1"
                    min="1"
                    value={currentItem.quantity}
                    onChange={(e) => updateCurrentItem('quantity', e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addItem()}
                  />
                </div>
              </div>

              <button className="add-item-btn" onClick={addItem}>
                + Add Item to Invoice
              </button>
            </div>
          </div>

          {/* Items List */}
          <div className="invoice-items-section">
            <h2>Invoice Items ({invoiceItems.length})</h2>
            {invoiceItems.length === 0 ? (
              <div className="empty-state">
                <p>No items added yet. Start adding items above.</p>
              </div>
            ) : (
              <div className="items-table">
                <div className="table-header">
                  <div className="col-name">Item Name</div>
                  <div className="col-price">Price</div>
                  <div className="col-length">Length</div>
                  <div className="col-qty">Qty</div>
                  <div className="col-total">Total</div>
                  <div className="col-action"></div>
                </div>
                {invoiceItems.map(item => (
                  <div key={item.id} className="table-row">
                    <div className="col-name">{item.name}</div>
                    <div className="col-price">${item.price.toFixed(2)}</div>
                    <div className="col-length">{item.length > 0 ? `${item.length}m` : '-'}</div>
                    <div className="col-qty">{item.quantity}</div>
                    <div className="col-total">${calculateItemTotal(item).toFixed(2)}</div>
                    <div className="col-action">
                      <button 
                        className="remove-btn" 
                        onClick={() => removeItem(item.id)}
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Invoice Summary */}
        <aside className="invoice-summary">
          <h3>Invoice Summary</h3>
          
          <div className="summary-details">
            <div className="summary-info">
              <p><strong>Alam Bros</strong></p>
              <p>Aluminium Workshop</p>
              <p className="contact-info">📞 +961 71 873 635</p>
              <p className="contact-info">✉️ alamgroup7541@gmail.com</p>
            </div>
          </div>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Items:</span>
              <span>{invoiceItems.length}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (11%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <strong>Total:</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          <button
            className="generate-invoice-btn"
            onClick={generateInvoice}
            disabled={invoiceItems.length === 0}
          >
            📱 Send via WhatsApp
          </button>

          {invoiceItems.length > 0 && (
            <button
              className="clear-invoice-btn"
              onClick={() => {
                if (window.confirm('Clear all items from invoice?')) {
                  setInvoiceItems([])
                }
              }}
            >
              🗑️ Clear Invoice
            </button>
          )}
        </aside>
      </div>
    </div>
  )
}

export default InvoicePage
