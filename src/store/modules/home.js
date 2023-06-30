import { getHomeGoodPriceData } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGoodPriceInfoAction = createAsyncThunk(
  "fetch/goodpriceinfo",
  async () => {
    const res = await getHomeGoodPriceData();
    return res;
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoodPriceInfoAction.fulfilled, (state, action) => {
      const { payload } = action;
      console.log(payload);
      state.goodPriceInfo = payload;
    });
  },
});

export default homeSlice.reducer;
