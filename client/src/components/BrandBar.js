import React, { useContext } from "react";
import {observer} from "mobx-react-lite";
import {Context} from '../index'
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    const handleBrandClick = (brand) => {
        if (device.selectedBrand.id === brand.id) {
            device.setSelectedBrand({});
        } else {
            device.setSelectedBrand(brand);
        }
    };

    return (
        <Row className="d-flex" style={{gap: "0px 5px"}}>
           {device.brands.map(brand => 
               <Card
                style={{cursor: 'pointer', width: 'auto', gap: "20px 20px"}}
                key={brand.id}
                className="d-flex justify-content-start p-1"
                onClick={() => handleBrandClick(brand)}
                border={brand.id === device.selectedBrand.id? 'danger' : 'light'} 
               >
                {brand.name}
               </Card>
            )}
        </Row>
    )
})

export default BrandBar;