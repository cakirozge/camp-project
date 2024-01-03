import React from "react";
import { useParams } from "react-router-dom";

import {
  CardMeta,
  CardHeader,
  CardGroup,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
} from "semantic-ui-react";
import { useEffect, useState } from "react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  //ProductListten objeleri sepet ekranına useParams kullanarak getiririm.
  //UseParams: obje olarak getirir. --roottan gelen.

   let {id } = useParams();
  
  const [product, setProduct] = useState({});

  useEffect(()=>{
    let productService = new ProductService()
    productService.getByProductId(id).then(result=>setProduct(result.data))
  },[])

  return (
    <div>
      <CardGroup>
        <Card fluid>
          <CardContent>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <CardHeader>{product.id}</CardHeader>
            <CardMeta>New User</CardMeta>
            <CardDescription>
              Jenny requested permission to view your contact details
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardGroup>
    </div>
  );
}
