import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("https://dummyjson.com/products")//apideki restfull servise request atmaya yarıyor.
    }
    getByProductId(productId){
        return axios.get("https://dummyjson.com/products/"+ productId)
    }


    
}