import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emojiApi = createApi({
  reducerPath: "emojiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://emojihub.yurace.pro/api/random",
  }),
  endpoints: (builder) => ({
    getRandomEmoji: builder.query({
      query: () => "/",
    }),
  }),
});

export const { useGetRandomEmojiQuery } = emojiApi;
