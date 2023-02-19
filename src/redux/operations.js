import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);

export const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const { name, number } = contact;
            const response = await axios.post("/contacts", {name, number});
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);


export const deleteContacts = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
        try {

            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
);