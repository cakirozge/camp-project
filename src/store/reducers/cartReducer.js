import { ADD_TO_CARD } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

//sepetin son halini tuttuğumuz yer. neye göre gönderilen action göre 
//cartItems:cartItems ES göre eşitliğin sağ ve sol tarafı aynı gibi hareket eder.
const initialState = {
    cartItems:cartItems
}


//comment-pattern SQRS
//REDUX PATTERN
export default function cartReducer(state=initialState, {type,payload}){
    switch (type) {
        case ADD_TO_CARD:
            let product = state.cartItems.find(c=>c.product.id == payload.id)
            break;
    
        default:
            break;
    }

}