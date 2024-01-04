import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

//sepetin son halini tuttuğumuz yer. neye göre gönderilen action göre
//cartItems:cartItems ES göre eşitliğin sağ ve sol tarafı aynı gibi hareket eder.
const initialState = {
  cartItems: cartItems,
};

//comment-pattern SQRS
//REDUX PATTERN
//payload.id): Benim gönderdiğim iddir. bu nedenle eşitleme kontrolü yapılır.
//  product.quantity ++; referansı değiştirmediği için -->...state ile içerisindeki elemanları yeniden ayırarak yepyeni bir obje oluştururuz. -newleme gibi düşün. referans değiştiriyoruz.
//return yapmamızım amacı üstteki kod arka planda birer birer artıyor fakat sepet ekranında yazdırmıyor.
//return var break çalışmaz.
//redux push yok.
// sepette obje yoksa cartTems a yepyeni bir eleman eklemem gerek -->  ...state, cartItems:[] --> ...state, yazıyoruz çünkü  6-8 adımında birden fazla nesne olabilir sadece cartItem değerlerini değiştirip diğer nesneleri koruyabilmek için onu da beraber kullanmalıyız.
//farklı referanslı yeni bir [] oluşur.
//export default 
export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CARD:
      let product = state.cartItems.find((c) => c.product.id == payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CARD:
      return {
        //eşit olanları filtreledik.
        //statedeki cartItemsları filtrele ve filter ile yeni bir [] oluşturarak !== farklı olanlara yeni array yazdık.
        ...state,
        cartItems: state.cardItems.filter((c) => c.product.id !== payload.id),
      };
    default:
      return state;
  }
}
