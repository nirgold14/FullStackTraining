import React from 'react';
import './wishlist.css';
import ProductList from '../product-list/product-list';
import { useState, useEffect } from 'react';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';


let ns = new NotificationService(); 


function WishList(props){
    
    const [wishList , setWishList ] = useState([]);      
    useEffect( () => {      
        console.log("test");
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, onWishListChanged);
    }, []);
    
        
    function onWishListChanged (newWishList){
       setWishList(newWishList);
    };
    
    function CreateWishList (){
        const list = wishList.map( (product) =>
              
                <ProductList product= {product} key={product._id}/>
        );
        
        return list;        
    };
    
    return(  
          
        <div className="card">
            <div className="card-block">
                <h4 className="card-title"> Wish List </h4>
                <ul className="list-group">  
                       {CreateWishList()}
                </ul>
            </div>        
        </div>
    );    
}

export default WishList;