import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Cart from "./cart";
import './shop.css'

function Shop (){

    let [counter,setCounter] = useState(0);
    const addToCart= ()=>{
        setCounter((prev) => prev + 1)
    }
    const [products, setProducts] = useState([]); 
    useEffect(()=>{
        getProductsFromApi();
    },[])
    const getProductsFromApi = ()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json));
    }
    return (
        <div className="container">
            <Cart counter={counter}></Cart>
            <div className="row">
                {products.map((product)=>{
                    return(
                        <div key={product.id} className="col-4">
                            <div >
                                <Card className="card mb-5">
                                    <Link to={`/shop/${product.id}`}>
                                        <Card.Img variant="top" className="w-50 h-50 m-auto" src={product.image} />
                                    </Link>
                                    <Card.Body>
                                        <Card.Title className="size-20">{product.title}</Card.Title>
                                        <Card.Text className="size-15">
                                            {product.description}
                                        </Card.Text>
                                        <Button variant="primary" onClick={addToCart}>Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} 
export default Shop;