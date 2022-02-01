import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./style.scss";
import api from "../../services/api";
import Header from "../../components/Header";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        api.get(`/products/${id}`)
            .then((res) => {
                setProduct(res.data.marca);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);

    return (
        <div className="page-container-product-page">
            <Header />
            <div className="content">
                <h1>Nome: {product.nome}</h1>
                <h1>Marca: {product.marca_produto}</h1>
                <h1>Categoria: {product.categoria}</h1>
                <h1>Descrição: {product.descricao}</h1>
                <h1>Fabricante: {product.fabricante}</h1>
                <h1>Característica: {product.caracteristica}</h1>
                <h1>Preço: R${product.preco}</h1>
            </div>
        </div>
    );
}
