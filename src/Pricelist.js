import React from 'react';
import './Pricelist.css';
const PriceList = () => {

    const priceData = [
        { nomor: 1, tipeKamar: 'STANDARD', harga: 800000},
        { nomor: 2, tipeKamar: 'DELUXE', harga:  1200000 },
        { nomor: 3, tipeKamar: 'FAMILY', harga:  1500000 },
    ];

    return (
        <div className="price-list">
            <h2>PRICE LIST</h2>
            <table>
                <thead>
                <tr>
                    <th>NUMBER</th>
                    <th>ROOM TYPES</th>
                    <th>PRICE</th>
                </tr>
                </thead>
                <tbody>
                {priceData.map((item) => (
                    <tr key={item.nomor}>
                        <td>{item.nomor}</td>
                        <td>{item.tipeKamar}</td>
                        <td>{new Intl.NumberFormat('id-ID').format(item.harga)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriceList;
