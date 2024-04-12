import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    login: null,
    followers: null,
    public_repos: null,
    avatar_url: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    //ahora passamos todos los cambios que vamos a necesitar dentro de ese estado.
    reducers: {
      addUser: (state, action) => {
        const { name, login, followers, public_repos, avatar_url } = action.payload;
        state.name = name;
        state.login = login;
        state.followers = followers;
        state.public_repos = public_repos;
        state.avatar_url = avatar_url
      },
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;