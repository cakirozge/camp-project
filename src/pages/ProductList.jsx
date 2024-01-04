import React, { useState, useEffect } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
   Button
} from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";

//distractor products:data , setProducts:fonksiyonu - useState[] default değeri boş bir array bunu değiştirmek istersem bu da -Hook -döndürür.
//lifecycleHook- react yasam döngüsüne müdahale etmemizi sağlar.
//componentDidMount sayfa yerleşti şimdi statei değiştireceğiz. producta müdahale.
//useDispatch : aksiyonlarımızı çağırmak için kullandığımız bir fonksiyondur.
//dispatch görürsek biz bir fonksiyonu çağırmak istiyoruz diye anlamalıyız.
export default function ProductList() {

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  //sayfa yüklendiğinde burası çalışıyor.
  //`/products/` stringleri direkt birleştirebiliriz.

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.products));
  }, []);


  //bir değişken oluşturduk ve buna bir fonksiyon tanımladık. --> Button onClick özeliği için.
  //addToCard bi payload ister o: productdır.

  const handleAddToCard= (product)=> {
    dispatch(addToCart(product))
    toast.success(`${product.productName} sepete eklendi!`)
  }



  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Ürün Adı</TableHeaderCell>
            <TableHeaderCell>Ürün Fiyatı</TableHeaderCell>
            <TableHeaderCell>Stok Adedi</TableHeaderCell>
            <TableHeaderCell>Ürün Açıklaması</TableHeaderCell>
            <TableHeaderCell>Kategori</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell><Button inverted color='orange' onClick={()=>handleAddToCard(product)}>Sepete ekle</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <MenuItem as="a" icon>
                  <Icon name="chevron left" />
                </MenuItem>
                <MenuItem as="a">1</MenuItem>
                <MenuItem as="a">2</MenuItem>
                <MenuItem as="a">3</MenuItem>
                <MenuItem as="a">4</MenuItem>
                <MenuItem as="a" icon>
                  <Icon name="chevron right" />
                </MenuItem>
              </Menu>
            </TableHeaderCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

//Tablerow gelen ürün sayısı kadar tekrar edecek.
// Altgr + , ile `` oluştururuz.

// export interface ProductList {
// 	id: number;
// 	title: string;
// 	description: string;
// 	price: number;
// 	discountPercentage: number;
// 	rating: number;
// 	stock: number;
// 	brand: string;
// 	category: string;
// 	thumbnail: string;
// 	images: string[];
// }


