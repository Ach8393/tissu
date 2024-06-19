import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


    const ProductCard = () => {
      const {allProducts} =  useContext(ShopContext);
      const {productId} = useParams();
      const {addToCart} = useContext(ShopContext);
       const product = allProducts.find((e)=> e.id === Number(productId));
       return (
        <div >
          <h4> Home / { product.category } / { product.title } </h4>
          <img src={product.image} alt="product image" />
          <dl className="mt2 f6 lh-copy">
            <dt className="clip">Title</dt>
            <dd className="ml0 black truncate w-100"> { product.title } </dd>
            <dt className="clip">Price</dt>
            <dd className="ml0 gray truncate w-100"> { product.price }$ </dd>
            <dt className="clip">Category</dt>
            <dd className="ml0 gray truncate w-100"> { product.category } </dd>
            <p> { product.description } </p> 
          </dl>
          <button onClick={()=>{addToCart(product.id)}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Add to cart</button>
          <hr />
          <div>
            <h1 className="tc">Related Products</h1>
            { allProducts.map(item =>{
              if (item.category===product.category) {
              return (
                  <div key={item.id} className='fl w-50 w-25-m w-20-l pa2'>
                     <Link to={ `/ProductCard/${item.id}` }><img onClick={window.scrollTo(0,0)} src="{item.image}" alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10" /></Link>
                       <dl className="mt2 f6 lh-copy">
                         <dt className="clip">Title</dt>
                         <dd className="ml0 black truncate w-100">{item.title}</dd>
                         <dt className="clip">Price</dt>
                         <dd className="ml0 gray truncate w-100">{item.price}$</dd>
                         <dt className="clip">Category</dt>
                         <dd className="ml0 gray truncate w-100">{item.category}</dd>
                       </dl>
                     <button onClick={()=>{addToCart(item.id)}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" >Add to cart</button>  
                  </div>   
                );
            } 
            })
            }
          </div>
        </div>
        );
  }
    export default ProductCard;