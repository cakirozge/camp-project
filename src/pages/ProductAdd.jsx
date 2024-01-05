import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, ButtonContent, Button, Icon, Label} from "semantic-ui-react";
import TobetoTextInput from "../utilities/customFormControls/TobetoTextInput";

export default function ProductAdd() {
  //bir form oluştururken form sabit değerlere ihtiyaç duyar.
  const initialValues = { title: "", price: 10 };

  //validationSchema ile forma zorunlu alanlarımızı sağlarız. yup ile birlikte validasyon semalarımızı oluştururuz.
  const schema = Yup.object({
    title: Yup.string().required("Ürün Adı Zorunlu"),
    price: Yup.number().required("Ürün Fiyatı Zorunlu"),
  });

  return (
    <Formik 
    initialValues={initialValues} 
    validationSchema={schema}
    //values: name alanları örn. title
    //  console.log(values): içinde axios çağırarak ürünü backen gönderebilirim.
    onSubmit = {(values) => {
        console.log(values)
    }}
    >
      <Form className="ui form">
        <TobetoTextInput name="title" placeholder="Ürün Adı"/>
        <TobetoTextInput name="price" placeholder="Ürün Fiyatı"/>
      
        <Button className="ui vertical animated button" animated="vertical" color='orange' type="submit">
          <ButtonContent hidden>Ekle</ButtonContent>
          <ButtonContent visible>
            <Icon name="shop" />
          </ButtonContent>
        </Button>
      </Form>
    </Formik>
  );
}


//Redux- thunk --> asenkron işlemler için state yönetmek için.

//   {/* <FormField>
//           <Field name="title" placeholder="Ürün Adı"></Field>
//           <ErrorMessage name="title" render={error=>
//             <Label pointing basir color="red" content ={error}></Label>
//           }></ErrorMessage>
//         </FormField> */}
//         <FormField>
//           <Field name="price" placeholder="Ürün Fiyatı"></Field>
//           <ErrorMessage name="title" render={error=>
//             <Label pointing basir color="red" content ={error}></Label>
//           }></ErrorMessage>
//         </FormField>