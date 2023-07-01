import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchGoodPriceInfoAction = createAsyncThunk(
  "fetch/home",
  (payload, { dispatch}) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHightScoreInfoAction(res))
    });

    getHomeDiscountData().then((res)=>{
      dispatch(changeDiscountInfoAction(res))
    })

    getHomeHotRecommendData().then((res)=>{
      dispatch(changeHotRecommendInfoAction(res))
    })
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo:{},
    discountInfo:{},
    hotRecommendInfo:{}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHightScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state,{ payload}){
      state.discountInfo = payload
    },
    changeHotRecommendInfoAction(state,{ payload}){
      state.hotRecommendInfo = payload
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchGoodPriceInfoAction.fulfilled, (state, action) => {
    //   const { payload } = action;
    //   console.log(payload);
    //   state.goodPriceInfo = payload;
    // });
  },
});
export const {changeGoodPriceInfoAction,changeHightScoreInfoAction,changeDiscountInfoAction,changeHotRecommendInfoAction} = homeSlice.actions
export default homeSlice.reducer;
