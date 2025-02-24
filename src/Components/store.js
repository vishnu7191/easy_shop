import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// redux presist
// import storage from 'redux-persist/lib/storage'; // ✅ Correct spacing
import { persistReducer,persistStore } from 'redux-persist'; // ✅ Correct function name
import { combineReducers } from "@reduxjs/toolkit";

// indexDB
import createIDBStorage from "redux-persist-indexeddb-storage";


const storage = createIDBStorage({
    name: "myAppDB",       // Name of the IndexedDB database
    storeName: "reduxStore", // Store name inside IndexedDB
  });

const presistConfig={
    key:'root',
    version:2,
    storage,
    whitelist:['products','cart']
}



const products={
    status:'',
    error:false,
    products:[]
}

const cart={
    cart:[],
    totalAmount:0,
}


export const fetchProducts=createAsyncThunk('products/fetch',async()=>{
    try{
        let data=await axios.get(`https://fakestoreapi.com/products`)
        
        return data.data
    }
    catch(err){
        throw err

    }

})

const productSlice=createSlice({
    name:'products',
    initialState:products,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
                    state.status='Loading...'

        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
                        state.status='Completed',
                        state.products=action.payload
                        console.log(state.products);
                        
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
                  state.status="rejected",
                  state.error=action.error.message

        })

    }
})

const cartSlice=createSlice({
    name:'cart',
    initialState:cart,
    reducers:{
        addTOCart:(state,action)=>{
            console.log(action);
            
            const product=action.payload
            const exsistingItem=state.cart.find((item)=>{item.id==product.id})
            if(!exsistingItem){
                state.cart.push({...product,quantity:1})
            }
        },
        increaseQuantity:(state,action)=>{
                    const item=state.cart.find((item)=>item.id==action.payload)
                    if(item){
                        item.quantity +=1;
                    }
        },
        decreaseQuantity:(state,action)=>{
            console.log(action);
            
            const item=state.cart.find((item)=>item.id==action.payload)
            console.log(item);
            
            if(item){
                console.log("res");
                
                if(item.quantity>1){
                    console.log("pm");
                    
                    item.quantity -=1;
                }
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        bill:(state)=>{
            state.totalAmount=state.cart.reduce((total,item)=>{
                console.log(total);
                
                return total+item.price*item.quantity
            },0)
        }
    }
})



// redux presist
const rootReducer=combineReducers({
    products:productSlice.reducer,
    cart:cartSlice.reducer
})

const persistedReducer=persistReducer(presistConfig,rootReducer)

const store = configureStore({
    reducer: persistedReducer,  // Fix typo: 'presistedReducer' → 'persistedReducer'
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })  // ✅ Must return the array
});



// const store=configureStore({
//     reducer:{
//         products:productSlice.reducer,
//         cart:cartSlice.reducer,
//     }
// })

export const {addTOCart,increaseQuantity,decreaseQuantity,removeFromCart,bill}=cartSlice.actions

// export const presistor=persistStore(store)

export default store





