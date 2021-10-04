import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart.js';
import './Main.css'

const Main = () => {
    const [data, setData] = useState([]);
    const [infoData, setInfoData] = useState([])
    useEffect(() => setData(fakeData));
    function handleCart(info) {
        const newInfoData = [...infoData, info];
        setInfoData(newInfoData)
        console.log('infoData', infoData);
    }
    let total = 0;
    for (let i = 0; i < infoData.length; i++) {
        const element = infoData[i];
        const salary = element.salary;
        total = total + salary;
    }
    // const totalBudget = infoData.reduce((rTotal, num)=> rTotal + num.salary, 0)
    return (
        <div className="main-div">
            <div className="main-cart">
                {
                    data.map(dt => <Cart handleCart={handleCart} key={dt.id} data={dt}></Cart>)
                }
            </div>
            <div className="main-info">
                <h1>Total Employee: {infoData.length}</h1>
                <table>
                    <tr className="total-tr">
                        <th>Image</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    {
                        infoData.map(infoDt => (
                        <tr>
                            <td><img style={{width: '30px', borderRadius: '50%'}} src={infoDt.image} alt="" /></td>
                            <td>{infoDt.name}</td>
                            <td>{infoDt.salary}</td>
                        </tr>
                        ))
                    }
                    <tr className="total-tr">
                        <th>Total Compony budget: </th>
                        <th> --- </th>
                        <th>{total}</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Main;