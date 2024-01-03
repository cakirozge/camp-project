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
} from "semantic-ui-react";
import ProductService from "../services/productService";


//distractor products:data , setProducts:fonksiyonu - useState[] default değeri boş bir array bunu değiştirmek istersem bu da -Hook -döndürür.
//lifecycleHook- react yasam döngüsüne müdahale etmemizi sağlar.
//componentDidMount sayfa yerleşti şimdi statei değiştireceğiz. producta müdahale.

export default function ProductList() {
  const [products, setProducts] = useState([]);

  //sayfa yüklendiğinde burası çalışıyor.
  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.products));
  },[]);

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Ürün Adı</TableHeaderCell>
            <TableHeaderCell>Ürün Açıklaması</TableHeaderCell>
            <TableHeaderCell>Ürün Fiyatı</TableHeaderCell>
            <TableHeaderCell>Marka</TableHeaderCell>
            <TableHeaderCell>Kategori</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((products) => (
            <TableRow key={products.id}>
              <TableCell>{products.title}</TableCell>
              <TableCell>{products.description}</TableCell>
              <TableCell>{products.price}</TableCell>
              <TableCell>{products.brand}</TableCell>
              <TableCell>{products.category}</TableCell>
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
