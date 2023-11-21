import React from 'react';

const ProductItem = ({ imageSrc, roomType }) => {
    return (
        <div className="product-item">
            <img src={imageSrc} alt={`Image of ${roomType}`} />
            <p>{roomType}</p>
        </div>
    );
};

const Product = () => {

    const product = [
        { roomType: 'STANDARD', imageSrc: require('./Standar1.jpeg') },
        { roomType: 'DELUXE', imageSrc: require('./Deluxe1.jpg') },
        { roomType: 'FAMILY', imageSrc: require('./Family1.jpg') },
    ];


    return (
        <div className="product">
            {product.map((product, index) => (
                <ProductItem key={index} roomType={product.roomType} imageSrc={product.imageSrc} />
            ))}
        </div>
    );
};

export default Product;