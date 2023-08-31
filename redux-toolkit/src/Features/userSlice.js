import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: localStorage.getItem("token"),
  signingUp: false,
  signingIn: false,
  error: null,
};


export const addUser = createAsyncThunk(
    "addUser/fetch",
    async ({ log, pass, name, lastname, phone, mail }, thunkAPI) => {
      try {
        const res = await fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            login: log,
            password: pass,
            name: name,
            lastname: lastname,
            phone: phone,
            mail: mail,
          }),
        });
        const user = await res.json();
        return user;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const patchUser = createAsyncThunk(
    "user/patch",
    async ({log, pass, name, lastname, phone, mail }, thunkAPI) => {
      try {
        const res = await fetch(`http://localhost:5000/user/update`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${thunkAPI.getState().user.token}`
          },
          body: JSON.stringify({
            login: log,
            password: pass,
            name: name,
            lastname: lastname,
            phone: phone,
            mail: mail,
          }),
        });
        const user = await res.json();
        return user;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const userLogin = createAsyncThunk(
    "loginUser/fetch",
    async ({ log, pass }, thunkAPI) => {
      try {
        const res = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(
            {  login: log, password: pass }),
        });
        const token = await res.json();
        if (token.error) {
          return thunkAPI.rejectWithValue(token.error);
        }
        localStorage.setItem("token", token);
        return token;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const getUser = createAsyncThunk("fetch/user", async (id, thunkAPI) => {
    const res = await fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().user.token}`,
      },
    });
    
  
    const user = await res.json();
    return user;
  });

const user = createSlice({
    name: "User",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(addUser.fulfilled, (state, action) => {
            state.user.push(action.payload);
          })
          .addCase(addUser.pending, (state) => {
            state.signingUp = true;
            state.error = null;
          })
          .addCase(addUser.rejected, (state, action) => {
            state.error = action.payload;
            state.signingUp = false;
          })
          .addCase(userLogin.fulfilled, (state, action) => {
            state.token = action.payload;
            state.error = null
          })
          .addCase(userLogin.rejected, (state, action) => {
            state.error = action.payload;
          })
          .addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
          }).addCase(patchUser.fulfilled,(state,action)=> {
            state.user = action.payload
            
          })
          
    }
})
export default user.reducer