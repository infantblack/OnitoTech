import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  updateArray : [] as any,
  updateUniqueId: "",
};

const companySlice = createSlice({
  name: "companyUpadte",
  initialState,
  reducers: {
    companyUpdateInfo: (state, { payload }) => {
      state.updateArray = payload.updateArray;
      state.updateUniqueId = payload.updateUniqueId;
    },

    reset: () => {},
  },
});

// dispatch name
//ex companyupdate.companyUpdateInfo({
    //
//})
export const companyupdate = companySlice.actions;
export default companySlice.reducer;
