import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = '/api/bugs';

export const fetchBugs = createAsyncThunk('bugs/fetchBugs', async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addBug = createAsyncThunk('bugs/addBug', async (bug) => {
  const res = await axios.post(API_URL, bug);
  return res.data;
});

export const updateBug = createAsyncThunk('bugs/updateBug', async ({ id, status }) => {
  const res = await axios.put(`${API_URL}/${id}`, { status });
  return res.data;
});

export const deleteBug = createAsyncThunk('bugs/deleteBug', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const bugsSlice = createSlice({
  name: 'bugs',
  initialState: { list: [], loading: false, error: null },
  reducers: {},

  extraReducers: (builder) => {
    builder
      /* FETCH BUGS */
      .addCase(fetchBugs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBugs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBugs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      /* ADD BUG */
      .addCase(addBug.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      /* UPDATE BUG */
      .addCase(updateBug.fulfilled, (state, action) => {
        const updatedBug = action.payload;
        const index = state.list.findIndex((bug) => bug._id === updatedBug._id);
        if (index !== -1) {
          state.list[index] = updatedBug;
        }
      })

      /* DELETE BUG */
      .addCase(deleteBug.fulfilled, (state, action) => {
        state.list = state.list.filter((bug) => bug._id !== action.payload);
      });
  },
});

export default bugsSlice.reducer;
