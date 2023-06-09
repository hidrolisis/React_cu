<<<<<<< HEAD
import products from "../../mocks/products";
import ItemList from "../ItemList/index";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";

export default function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const productPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(products), 2000)
    );

    productPromise
      .then((response) => {
        if (isCategoryRoute) {
          const productsFiltered = response.filter(
            (producto) => producto.category === categoryId
          );
          setProductos(productsFiltered);
        } else {
          setProductos(response);
        }
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <Container maxWidth={false} disableGutters>
      <ItemList products={productos} />
    </Container>
  );
}
=======
export const ItemListContainer = (props) => {
  return <div className="itemListContainerDisplay">{props.text}</div>;
};
>>>>>>> 581330815b6ad0306f6bd40700fa542065e9289a
