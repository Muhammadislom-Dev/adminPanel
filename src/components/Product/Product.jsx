import React from 'react'
import './Product.css'

export default function Product() {
  return (
    <div className='product'>
        <div className="container">
            <div className="product-page">
                <table className="product-table">
                    <thead className='product-thead'>
                        <tr>
                            <th>Mahsulot nomlari</th>
                            <th>Toifalar</th>
                            <th>Narxi</th>
                            <th>Yuklama</th>
                            <th>Razmeri</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='product-tr'>
                           <th>Lux Soft Memory</th> 
                           <th>Model C</th> 
                           <th>1 600 000 so’m</th> 
                           <th>150 kg</th> 
                           <th>200 x 134 x 40</th> 
                           <th>false</th> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
