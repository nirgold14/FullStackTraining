import 'whatwg-fetch';

class HttpService{
    
    //ES6 Functions format. Equals to: var getProducts = function(param1,param2){}
    //
    getProducts = () => {
        fetch('http://localhost:3000/product')
        .then(response => {
           console.log(response.json());
        })
    }
}

export default HttpService;