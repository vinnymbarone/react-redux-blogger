import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Vinny Barone' },
    {id: '1', name: 'Taylor Barone' },
    {id: '2', name: 'Lady Barone' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice