import React, { useState, useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
export default function RoundedCategories() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data)
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(process.env.REACT_APP_API_URL + "/api/products");
            console.log()
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
    return (
        <>
            <div class='container p-5'>
                <Row >

                    <Col style={{ cursor: 'pointer' }} >
                        <Image type="image" src="https://k.nooncdn.com/cms/pages/20211212/aed3041d6c2cfd025c9c3191e76ac81f/en_cb-11.png" /></Col>

                    <Col style={{ cursor: 'pointer' }}>
                        <Image type="image" src="https://k.nooncdn.com/cms/pages/20211212/aed3041d6c2cfd025c9c3191e76ac81f/en_cb-07.png" /></Col>

                    <Col style={{ cursor: 'pointer' }}>
                        <Image type="image" src="https://k.nooncdn.com/cms/pages/20211212/aed3041d6c2cfd025c9c3191e76ac81f/en_cb-06.png" /></Col>


                    <Col style={{ cursor: 'pointer' }}>
                        <Image type="image" src="https://k.nooncdn.com/cms/pages/20211212/aed3041d6c2cfd025c9c3191e76ac81f/en_cb-09.png" /></Col>


                    <Col style={{ cursor: 'pointer' }}>
                        <Image type="image" src="https://k.nooncdn.com/cms/pages/20211212/aed3041d6c2cfd025c9c3191e76ac81f/en_cb-03.png" /></Col>

                    <Col style={{ cursor: 'pointer' }}>
                        <Image type="image" src="https://k.nooncdn.com/cms/pages/20211212/aed3041d6c2cfd025c9c3191e76ac81f/en_cb-08.png" /></Col>

                    <Col style={{ cursor: 'pointer' }}>
                        <Image type="image" src="https://k.nooncdn.com/cms/pages/20211212/aed3041d6c2cfd025c9c3191e76ac81f/en_cb-10.png" /></Col>

                    {/* <input width="150px" onClick={() => filterProduct("Baby")}
                    type="image" src="https://k.nooncdn.com/cms/pages/20211212/aed3041d6c2cfd025c9c3191e76ac81f/en_cb-05.png"
                    alt="jewelery"
                    className="col img img-responsive m-1"
                /> */}
                </Row>
            </div>
        </>
    );
};