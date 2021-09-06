import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InventoryEdit from './InventoryEdit';

const InventoryIndex = (props) => {
    const [ inventory, setInventory ] = useState([]);
    const [ editActive, setEditActive ] = useState(false);
    const [ inventoryToEdit, setInventoryToEdit ] = useState({});

    const fetchInventory = () => {
        fetch('http://localhost:3000/inventory', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })  .then( (res) => res.json() )
            .then( (inventoryData) => {
                setInventory(inventoryData)
            })
    }

    //editInventory = editUpdateWorkout - julia
    const editInventory = (inventory) => {
        setInventoryToEdit(inventory);
        console.log(inventory);
    }

    const editOn = () => {
        setEditActive(true);
    }

    const editOff = () => {
        setEditActive(false);
    }

    useEffect( () => {
        fetchInventory();
    }, [])

    return(
        <Container>
            <Row>
                <Col md='3'>
                    
                </Col>
                <Col md='9'>
                    <InventoryTable 
                    inventory={inventory} 
                    editInventory={editInventory}
                    editeOn={editOn}
                    fetchInventory={fetchInventory} 
                    token={props.token} />
                </Col>
                {editActive ? <InventoryEdit inventoryToEdit={inventoryToEdit}
                editOff={editOff} token={props.token} fetchInventory={fetchInventory}/> : <></>}
            </Row>
        </Container>
    )
}

export default InventoryIndex;