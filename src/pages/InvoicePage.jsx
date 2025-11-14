import { useState } from 'react'
import { Link } from 'react-router-dom'
import './InvoicePage.css'

function InvoicePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItems, setSelectedItems] = useState([])
  const [quantities, setQuantities] = useState({})

  // Product categories and items
  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'windows', name: 'Windows & Doors' },
    { id: 'facades', name: 'Glass Facades' },
    { id: 'railings', name: 'Railings' },
    { id: 'partitions', name: 'Partitions' },
    { id: 'curtainwalls', name: 'Curtain Walls' },
    { id: 'accessories', name: 'Accessories' }
  ]

  const items = [
    // Windows & Doors
    { id: 1, name: 'Sliding Window', category: 'windows', price: 150, unit: 'sqm' },
    { id: 2, name: 'Casement Window', category: 'windows', price: 180, unit: 'sqm' },
    { id: 3, name: 'Double Glazed Window', category: 'windows', price: 220, unit: 'sqm' },
    { id: 4, name: 'Aluminium Door', category: 'windows', price: 300, unit: 'piece' },
    { id: 5, name: 'Sliding Door', category: 'windows', price: 400, unit: 'piece' },
    
    // Glass Facades
    { id: 6, name: 'Spider Glass Facade', category: 'facades', price: 350, unit: 'sqm' },
    { id: 7, name: 'Structural Glazing', category: 'facades', price: 400, unit: 'sqm' },
    { id: 8, name: 'Point Fixed Glazing', category: 'facades', price: 380, unit: 'sqm' },
    
    // Railings
    { id: 9, name: 'Glass Railing System', category: 'railings', price: 200, unit: 'meter' },
    { id: 10, name: 'Aluminium Handrail', category: 'railings', price: 80, unit: 'meter' },
    { id: 11, name: 'Balcony Railing', category: 'railings', price: 150, unit: 'meter' },
    
    // Partitions
    { id: 12, name: 'Office Partition', category: 'partitions', price: 120, unit: 'sqm' },
    { id: 13, name: 'Glass Partition', category: 'partitions', price: 180, unit: 'sqm' },
    { id: 14, name: 'Soundproof Partition', category: 'partitions', price: 250, unit: 'sqm' },
    
    // Curtain Walls
    { id: 15, name: 'Unitized Curtain Wall', category: 'curtainwalls', price: 450, unit: 'sqm' },
    { id: 16, name: 'Stick System Curtain Wall', category: 'curtainwalls', price: 420, unit: 'sqm' },
    
    // Accessories
    { id: 17, name: 'Door Handle', category: 'accessories', price: 25, unit: 'piece' },
    { id: 18, name: 'Window Lock', category: 'accessories', price: 15, unit: 'piece' },
    { id: 19, name: 'Hinge Set', category: 'accessories', price: 20, unit: 'set' },
    { id: 20, name: 'Weather Seal', category: 'accessories', price: 10, unit: 'meter' }
  ]

  // Filter items
  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Toggle item selection
  const toggleItem = (item) => {
    if (selectedItems.find(i => i.id === item.id)) {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id))
      const newQuantities = { ...quantities }
      delete newQuantities[item.id]
      setQuantities(newQuantities)
    } else {
      setSelectedItems([...selectedItems, item])
      setQuantities({ ...quantities, [item.id]: 1 })
    }
  }

  // Update quantity
  const updateQuantity = (itemId, quantity) => {
    setQuantities({ ...quantities, [itemId]: Math.max(1, parseInt(quantity) || 1) })
  }

  // Calculate totals
  const calculateSubtotal = () => {
    return selectedItems.reduce((total, item) => {
      return total + (item.price * (quantities[item.id] || 1))
    }, 0)
  }

  const subtotal = calculateSubtotal()
  const tax = subtotal * 0.11 // 11% VAT
  const total = subtotal + tax

  // Generate invoice
  const generateInvoice = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item')
      return
    }
    
    let invoiceText = 'ALAM BROS - INVOICE\\n\\n'
    invoiceText += 'Contact: +961 71 873 635\\n'
    invoiceText += 'Email: alamgroup7541@gmail.com\\n\\n'
    invoiceText += '----------------------------\\n\\n'
    
    selectedItems.forEach(item => {
      const qty = quantities[item.id] || 1
      const itemTotal = item.price * qty
      invoiceText += `${item.name}\\n`
      invoiceText += `${qty} ${item.unit} × $${item.price} = $${itemTotal.toFixed(2)}\\n\\n`
    })
    
    invoiceText += '----------------------------\\n'
    invoiceText += `Subtotal: $${subtotal.toFixed(2)}\\n`
    invoiceText += `Tax (11%): $${tax.toFixed(2)}\\n`
    invoiceText += `Total: $${total.toFixed(2)}\\n`
    
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
          <p>Select items and generate your invoice</p>
        </div>
      </header>

      <div className="invoice-container">
        {/* Sidebar - Categories */}
        <aside className="invoice-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map(category => (
              <li key={category.id}>
                <button
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="invoice-main">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Items Grid */}
          <div className="items-grid">
            {filteredItems.map(item => {
              const isSelected = selectedItems.find(i => i.id === item.id)
              return (
                <div
                  key={item.id}
                  className={`item-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleItem(item)}
                >
                  <h4>{item.name}</h4>
                  <p className="item-price">${item.price} / {item.unit}</p>
                  {isSelected && (
                    <div className="quantity-control" onClick={(e) => e.stopPropagation()}>
                      <button onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) - 1)}>-</button>
                      <input
                        type="number"
                        value={quantities[item.id] || 1}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                        min="1"
                      />
                      <button onClick={() => updateQuantity(item.id, (quantities[item.id] || 1) + 1)}>+</button>
                    </div>
                  )}
                  <div className="item-checkbox">
                    {isSelected ? '✓' : '+'}
                  </div>
                </div>
              )
            })}
          </div>
        </main>

        {/* Invoice Summary */}
        <aside className="invoice-summary">
          <h3>Invoice Summary</h3>
          
          <div className="selected-items-list">
            {selectedItems.length === 0 ? (
              <p className="empty-message">No items selected</p>
            ) : (
              selectedItems.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-info">
                    <strong>{item.name}</strong>
                    <span>{quantities[item.id] || 1} {item.unit}</span>
                  </div>
                  <div className="summary-item-price">
                    ${(item.price * (quantities[item.id] || 1)).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (11%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <strong>Total:</strong>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          <button
            className="generate-invoice-btn"
            onClick={generateInvoice}
            disabled={selectedItems.length === 0}
          >
            Send Invoice via WhatsApp
          </button>
        </aside>
      </div>
    </div>
  )
}

export default InvoicePage
