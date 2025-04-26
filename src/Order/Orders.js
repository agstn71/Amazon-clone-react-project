import React from 'react'

function Orders() {
  return (
    <div className='orders-main'>
      <div className="page-title">
        Your Orders
      </div>
      <div className="orders-grid">
        <div className="orders-container">
            <div className="order-header">
                <div className="order-header-left-section">
                    <div className="order-date">
                        <div className="order-header-label">Order Placed</div>
                         <div>August 12</div>
                    </div>
                    <div className="order-total">
                        <div className="order-header-label">Total</div>
                        <div>$35.06</div>
                    </div>
                </div>
                 <div className="order-header-right-section">
                    <div className="order-header-label">Order ID</div>
                    <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
                 </div>
            </div>
            <div className="order-detail-grid">
                <div className="product-image-container">
                    <img src="" alt="" />
                </div>
                <div className="product-detail">
                   <div className="product-name">Black and gray</div>
                    <div className="product-delivery-date">Arriving on:August 15</div>
                     <div className="product-quantity">Quantity:1</div>
                     <button></button>
                </div>
                <div className="product-action">
                    <button>Track Package</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
