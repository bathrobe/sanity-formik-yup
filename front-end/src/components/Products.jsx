import React, { useEffect, useState } from "react";
import client from "../client";
import getImageUrl from "../imageHelper";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          title, 
          description,
          productImage,
          cost
      }`
      )
      .then((products) => {
        setProducts(products);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="container">
      <div className="columns is-multiline">
        {products &&
          products.map((product, index) => (
            <div className="column is-3" key={index}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src={
                        product.productImage
                          ? getImageUrl(product?.productImage).url()
                          : ""
                      }
                      alt={product.title}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{product.title}</p>
                      <p className="subtitle is-6">${product?.cost}</p>
                    </div>
                  </div>
                  <div className="content">
                    {product.description}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
