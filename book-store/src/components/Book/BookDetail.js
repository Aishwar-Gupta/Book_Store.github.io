import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { Box } from '@mui/system';

const BookDetail = () => {

    const [inputs, setInputs] = useState({});

    const [checked, setChecked] = useState(false);

    const history = useNavigate();

    const id = useParams().id;
    // console.log(id);

    useEffect(() => {
        const fetchHandler = async() => {
            await axios.get(`http://localhost:5000/books/${id}`).then(res => res.data).then(data => setInputs(data.book));
        }
        fetchHandler()
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/books'));
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value}))
    }

    // console.log(inputs);

    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/books/${id}`,      // back tick notation for string to concatenate the variable $
        {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res => res.data)
    }


    return (
        <div>
            { inputs &&                     // for validation - only when there is data in the forms
            
            <form onSubmit={handleSubmit}>      
            <Box display="flex" flexDirection="column" 
                justifyContent="center" maxWidth={700}
                alignContent="center" alignSelf='center'
                marginLeft='auto' marginRight='auto'
                marginTop={5} marginBottom={5}>

                <FormLabel>Name</FormLabel>
                <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'></TextField>

                <FormLabel>Author</FormLabel>
                <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'></TextField>
            
                <FormLabel>Description</FormLabel>
                <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'></TextField>

                <FormLabel>Price</FormLabel>
                <TextField value={inputs.price} onChange={handleChange} type='number' margin='normal' fullWidth variant='outlined' name='price'></TextField>   

                <FormLabel>Image</FormLabel>
                <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image'></TextField> 

                <FormControlLabel control={<Checkbox Checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />           {/*from material UI */}

                <Button variant='contained' type='submit'>Update Book</Button>
            </Box>         
        </form>
        }
        </div>
    )
};

export default BookDetail;