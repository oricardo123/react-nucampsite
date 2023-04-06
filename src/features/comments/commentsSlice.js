import { createSlice } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";

const initialState={
  commentsArray:COMMENTS
};

const commentsSlice=createSlice({
  name:'comments',
  initialState,
  reducers:{
    addComment:(state,action)=>{
      console.log('addComment action.payload', action.payload)
      console.log('add')
    }
  }
})

export const commentsReducer=commentsSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId) =>(state)=> {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
