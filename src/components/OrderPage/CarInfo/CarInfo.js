import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import FakeData from '../../FakeData/FakeData';
const CarInfo = () => {

    const {carid} = useParams();
    const [carData,setCarData]= useState({})

    useEffect(()=>{
        const cars = FakeData;

        const sellectData = cars.filter(data => data.id == carid);
        setCarData(sellectData[0])
        
       
    },[])
    console.log(carid,FakeData)
    console.log(carData)


    return (
        <section className="car-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box-car">
                            <img src="" alt="" />
                        </div>
                        <div className="detail-car">
                            <h3>Car Name :{carData.name} </h3>
                            <span>model: {carData.model}</span>
                            <span> type : {carData.type}</span>
                            <h4>Rent Price :$ {carData.Price}  /day</h4>

                            <h4>Description</h4>
                            <p>{carData.Details}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="car-form">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarInfo;