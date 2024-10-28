import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserInfoState {
    nickname: string;
    userId: string;
}

const initialState: UserInfoState = {
    nickname: '',
    userId: ''
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setNickname(state, action: PayloadAction<string>) {
            state.nickname = action.payload;
        },
        setUserId(state, action: PayloadAction<string>) {
            state.userId = action.payload;
        },
    }
})

export const userInfoActions = userInfoSlice.actions;
export default userInfoSlice.reducer;