import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { Link } from 'react-router-dom';



  const Collection = () => {
      const {allProducts} =  useContext(ShopContext);
      const {addToCart} = useContext(ShopContext);
      
    return (
          <div className=''>
           {allProducts.map(product =>{
            if (product.category==="electronics") {
               return (
                  <div key={product.id} className='fl w-50 w-25-m w-20-l pa2'>
                     <Link to={ `/ProductCard/${product.id}` }><img src="{product.image}" alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10" /></Link>
                       <dl className="mt2 f6 lh-copy">
                         <dt className="clip">Title</dt>
                         <dd className="ml0 black truncate w-100">{product.title}</dd>
                         <dt className="clip">Price</dt>
                         <dd className="ml0 gray truncate w-100">{product.price}$</dd>
                         <dt className="clip">Category</dt>
                         <dd className="ml0 gray truncate w-100">{product.category}</dd>
                       </dl>
                     <button onClick={()=>{addToCart(product.id)}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Add to cart</button>
                  </div>);
            }
           } )}  
          </div>

      );
}
export default Collection;