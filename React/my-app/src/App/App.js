import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Product from '../product/product'
import WishList from '../wishlist/wishlist'


//Services
import HttpService from '../services/http-service';


//Local vars
const http = new HttpService();


function App() {
    
    loadData();

    //*Hooks instead of States    
    const [products,setProducts] = useState([]);
    
    /*  In this function we retrieve a list of all the products.
    map do something for every object in the array before we get it back -
    Here in the function we inserted her we create a div with a unique id  
    (Important for sorting and actions with the objects).*/
    
    function productList(){
        const list = products.map((product) => 
            <div className="col-sm-4"  key={product._id}>
                <Product product={product} />
            </div>
        );
        
        return(list);
        
    }
    
    /* Promises:
   1. loadData is Declared - Not called, she is called above us.
   2. it calls the HttpService function : getProducts().
   3. The service return a promise so it won't have to ait for him
   4. In the promise we declare we return resolve or reject which        are equal to data or err
   5. .then means when we get the promise, what shoud we do if it        resolve or rejected
   6. We can't call a "this.func()" when we inside a promise. it breaks the bind. that's why we using the "self"
   
   7. Every time the "setState" function is caleed, it wii refresh the whole component and the ones inside her!!!
    */
    
    function loadData() {
    
     http.getProducts().then(data => {
            setProducts(data);
        }, err => {
        
        });    
    }
    
    
    /*Props Example: using the fields at the Product tab.
    props are features which are read only, while state means it can change When you are using props, it actually cascade to the component itself. 
    Like the father is the <Product> and   the son is the: product.js*/
    
    return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        It's Working
                    </p>
                </div>
                <div className="container-fluid App-main">
                    <div className="row">
                        <div className="col-sm-8">
                             <div className="row">
                                {productList()}
                            </div>
                        </div>
                        <div className="col-sm-4">
                           <WishList />
                        </div>
                    </div>
                </div>
            </div>
        );
}
    
export default App;
