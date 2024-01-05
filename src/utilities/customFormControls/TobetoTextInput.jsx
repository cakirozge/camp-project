//Her zaman imza ile kullanmalıyız. --> TobetoTextInput başına Tobeto yazdık, değişebilir. Şirkete göre.

import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function TobetoTextInput({ ...props }) {
  //console.log(props)
  //reflect api
  const [field, meta] = useField(props);
  //console.log(meta)

  return (
    <FormField error={meta.touched && !! meta.error}>
        <input {...field} {...props} />
        { meta.touched && !! meta.error ? (
            <Label pointing basir color="red" content ={meta.error}></Label>
        ):null
        
        }
       
    </FormField>
 
  );
}

//meta bilgisi error bilgisini verir.
//--> !!: meta.error ve touch ise boolean değerleri almamızı sağlar
//hata var ise --> Label gösterilir.