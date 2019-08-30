import React from 'react';
import './product-list.css';
import DataService from '../services/data-service';
let ds = new DataService();


function ProductList(props){
    
    function onButtonClicked(){
       ds.removeWishListItem(props.product);
   };
    
    return(  
        <li className="list-group-item d-flex pc-item">
            <a className="btn btn-outline-danger" href="#" onClick = { onButtonClicked }>X</a><p> {props.product.title} | <b>${props.product.price}</b></p>
        </li>                                                        
    );    
}

export default ProductList;