import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
            <Route exact path="/" Component={ProductList} />
            <Route exact path="/products" Component={ProductList} />
            <Route path="/products/:id" Component={ProductDetail} />
            <Route path="/cart" Component={CartDetail} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}

//yan yana getirdik.
//exac ifade ile / pathi diğer şeyleri açtırmadan sadece ana sayfada tutmamızı sağlar.
///products/:id id önemli bir parametri gereklidir. Parametre verdiğimizde detay sayfası ne verilirse verilsin calışır.

