import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { news: [] };

export const fetchNews = createAsyncThunk("news/getNews", async () => {
  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&category=health`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news.push(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function

export default newsSlice.reducer;
