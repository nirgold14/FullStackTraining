import React, {useState, useEffect} from 'react';
import './product.css';
import DataService from '../services/data-service';
import NotificationService , {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';
//Local vars

let ds = new DataService();
let ns = new NotificationService();

function Product(props){
    
    const [onWishList , setWishList ] = useState(false);      
    useEffect( () => {      
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, onWishListChanged);
    }, []);
    
    function onWishListChanged (newWishList){
       setWishList(ds.itemOnWishList(props.product));
    };
    
    function onButtonClicked(){
        if(onWishList){
            ds.removeWishListItem(props.product);
        }else{
            ds.addWishListItem(props.product);
        }
   };
    
    var btnClass;        
    if(onWishList){
            btnClass = "btn btn-danger";
        }else{
            btnClass = "btn btn-primary";
        }
    
    return(  
        
       
    
        <div className="card product">
            <img className="card-img-top" src={props.product.imgUrl} alt="Product"></img>
            <div className="card-block d-flex flex-column align-content-stretch">
                <h4 className="card-title">{props.product.title}</h4>
                <p className="card-text">Price: $ {props.product.price}</p>
                <a href="#" onClick={onButtonClicked} className={btnClass}> {onWishList ? "Remove From WishList" : "Add to WhisList"} </a>                
            </div>
        </div>    
    );    
}

export default Product;