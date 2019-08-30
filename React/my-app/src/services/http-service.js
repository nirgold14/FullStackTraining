import 'whatwg-fetch';

class HttpService{
    
    //ES6 Functions format. Equals to: var getProducts = function(param1,param2){}
    //
    getProducts = () => {
        //1. I promise you will get resolve or reject
        var promise = new Promise((resolve,reject)=> {
        //2    
             fetch('http://localhost:3000/product')
             .then(response => {
           //console.log(response.json());
           //4      
                 resolve(response.json());
        })
            
        });
        //3 - we return without waiting to the server
        return promise;
       
    }
}

export default HttpService;