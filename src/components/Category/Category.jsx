import React from 'react'
import './Category.css'

function Category() {
  return (
    <div className='category'>
        <div className="container">
            <div className="category-page">
                <table className="category-table">
                    <thead>
                        <tr className='category-thead'>
                            <th className='category-name'>ID</th>
                            <th className='category-names'>Toifalar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='category-names'>1</th>
                            <th className='category-names'>Model A</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        
    </div>
  )
}

export default Category