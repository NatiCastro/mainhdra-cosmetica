import React from "react";
import { useForm } from "react-hook-form";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import "../Styles/ProductsForm.css"

export default function ProductsForm() {

  const { register, handleSubmit, reset } = useForm();

 //const [producto, setProducto] = useState([]);

  function onSubmit (data) {
      console.log(data);
      // setProducto(data)

     let nuevoProducto = data;

      const db = getFirestore();

      const ingresoProd = collection(db, 'nuevos-productos');

    addDoc(ingresoProd, nuevoProducto).then(({id})=> {
                                        console.log(id);
                                        reset();
                                    })
                                    .catch(error=> console.log(error))


  }
   
  return (
    <>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label" htmlFor={"name"}>Nombre del producto</label>
      <input className="form-input" type="text" {...register("nombre", { required: true, maxLength: 30 })} />
      <label className="form-label" htmlFor={"name"}>Categoría</label>
      <input className="form-input" type="text" {...register("categoria", { required: true, maxLength: 30 })} />
      <label className="form-label" htmlFor={"name"}>Imagen del producto</label>
      <input className="form-input" type="text" {...register("imagen", { required: true, maxLength: 200 })} />
      <label className="form-label" htmlFor={"text"}>Descripción</label>
      <input className="form-input" type="text" {...register("descripcion", { required: true, maxLength: 500 })} />
      <label className="form-label" htmlFor={"number"}>Stock</label>
      <input className="form-input" type="number" {...register("stock", { required: true, min: 1, max: 99 })} />
      <label className="form-label" htmlFor={"number"}>Precio</label>
      <input className="form-input" type="number" {...register("precio", { minLength: 2, maxLength: 5 })} />
      <input className="form-submit" type="submit" value="Enviar" />
    </form> 
    
      {/* {producto.map((n)=> (
        <div key={n.id}>
        <ul>
          <li>Nombre del Producto: {n.nombre} | <br/>
          Precio: {n.precio} |</li>
        </ul>
      </div>
      ))} */}
      
    </>
  );
}

