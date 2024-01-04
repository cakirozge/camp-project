//isimlendirme hatasını önlemek için export olarak dışarı aldık sabitledik. export yaptık daha sonra kullanacağımız için.
export const ADD_TO_CARD= "ADD_TO_CARD";
export const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

//return içindekiler birer objedir.
//TypeScript oluşturulursa class olarak oluşturacağız.

export function addToCart(product){
    return {
        type : "ADD_TO_CARD",
        payload: product
    }

}

export function removeFromCart(product){
    return {
        type : "REMOVE_FROM_CARD",
        payload: product
    }

}