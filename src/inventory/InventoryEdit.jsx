import React, { useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const InventoryEdit = (props) => {

    const [ editCategory, setEditCategory ] = useState(props.InventoryToEdit.category);
    const [ editName, setEditName ] = useState(props.InventoryToEdit.name);
    const [ editYear, setEditYear ] = useState(props.InventoryToEdit.year);
    const [ editModel, setEditModel ] = useState(props,InventoryToEdit.model);
    const [ editSerialNum, setEditSerialNum ] = useState(props.InventoryToEdit.serialNum);
    const [ editPicUrl, setEditPicUrl] = useState(props.InventoryToEdit.picUrl);
    const [ editValue, setEditValue ] = useState(props.InventoryToEdit.value);

    const inventoryEdit = (e, inventory) => {
        e.preventDefault();
        fetch(`http://localhost:3000/inventory/update/${props.InventoryToEdit.id}`, { 
            method: 'PUT',
            body: JSON.stringify({item: {
                category: editCategory,
                name: editName,
                year: editYear,
                model: editModel,
                serial_number: editSerialNum,
                pic_url: editPicUrl,
                value: editValue
            }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })  .then((res) => {
                props.fetchInventory();
                props.updateOff();
        })
    }

    return (
        <Modal isOpen={true} centered={true}>
            <ModalHeader>Inventory Items Edit</ModalHeader>
            <ModalBody scrollable={true}>
                <Form onSubmit={inventoryEdit}>
                    <FormGroup>
                        <Label htmlFor='category'>Edit Category:</Label>
                        <Input type='select' name='category' value={editCategory} onChange={(e) => setEditCategory(e.target.value)} >
                        <option></option>
                        <option value='Electronics'>Electronics</option>
                        <option value='Jewelry'>Jewelry</option>
                        <option value='Furs'>Furs</option>
                        <option value='Art'>Art</option>
                        <option value='Antiques'>Antiques</option>
                        <option value='Other/Misc'>Other/Misc</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='name'>Edit Name:</Label>
                        <Input name='name' value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>    
                    <FormGroup>
                        <Label htmlFor='year'>Edit Year:</Label>
                        <Input name="year" value={editYear} onChange={(e) => setEditYear(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='model'>Edit Model:</Label>
                        <Input name='model' value={editModel} onChange={(e) => setEditModel(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='serial_number'>Edit Serial Number:</Label>
                        <Input name='serial_number' value={editSerialNum} onChange={(e) => setEditSerialNum(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='pic_url'>Edit Picture URL:</Label>
                        <Input name='pic_url' value={editPicUrl} onChange={(e) => setEditPicUrl(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='value'>Edit Item Value:</Label>
                        <Input name='value' value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                    </FormGroup>
                    <Button type="submit">Edit Inventory Item!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default InventoryEdit;