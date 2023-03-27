import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: "Divya Daulat",
    lastName: "Jangid",
    handle: "@divyajangid",
    profilePicture: "corgi.jpeg",
    bannerPicture: "golden-bridge.JPG",
    bio: "You probably know who I am lol",
    website: "https://en.wikipedia.org/wiki/divyajangid",
    location: "Boston, MA",
    dateOfBirth: "1/24/1996",
    dateJoined: "10/2011",
    followingCount: 1,
    followersCount: 56273727273778,
    tuits: 611138
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: profile,
        reducers: {
            updateUser(state, action) {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.handle = action.payload.handle;
                state.bio = action.payload.bio;
                state.location = action.payload.location;
                state.website = action.payload.website;
                state.dateOfBirth = action.payload.dateOfBirth;
            }
        }
    }
);

export const {updateUser} = profileSlice.actions;
export default profileSlice.reducer;