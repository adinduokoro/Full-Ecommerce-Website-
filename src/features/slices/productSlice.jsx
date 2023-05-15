import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
  },
  reducers:{

    filteredProducts(state, action){
      try {
        const filter = storeData.filter(f => f.type === action.payload)
        state.filteredProducts = filter
        console.log("filter", filter)
        const saveState = JSON.stringify(filter)
        sessionStorage.setItem("filteredData" , saveState)
      } catch (err) {
        return err
      }
    }
  }
})

export default productSlice.reducer
export const { filteredProducts } = productSlice.actions