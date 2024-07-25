import { createSlice } from "@reduxjs/toolkit";
import sportsday from "../assets/images/sportsday.jpeg";
import sciencefair from "../assets/images/sciencefair.jpeg";
import lib from "../assets/images/libopen.jpeg";
import vid1 from "../assets/Video/annual.mp4";
import gif from "../assets/Video/download.gif";

const initialState = {
  items: [
    {
      id: 1,
      type: "photo",
      eventType: "sports",
      date: "2024-03-15",
      src: sportsday,
      alt: "Annual Sports Day",
    },
    {
      id: 2,
      type: "video",
      eventType: "cultural",
      date: "2024-02-20",
      src: vid1,
      alt: "Annual Dance Performance",
    },
    {
      id: 3,
      type: "photo",
      eventType: "academic",
      date: "2024-01-10",
      src: sciencefair,
      alt: "Science Fair",
    },
    {
      id: 4,
      type: "photo",
      eventType: "infrastructure",
      date: "2023-12-05",
      src: lib,
      alt: "New Library Opening",
    },
    {
      id: 5,
      type: "photo",
      eventType: "sports",
      date: "2023-11-22",
      src: gif,
      alt: "Inter-school Basketball Match",
    },
  ],
  filter: { eventType: "all", date: "all" },
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

export const { setFilter } = gallerySlice.actions;

export const selectFilteredItems = (state) => {
  const { items, filter } = state.gallery;
  return items.filter((item) => {
    const eventTypeMatch =
      filter.eventType === "all" || item.eventType === filter.eventType;
    const dateMatch =
      filter.date === "all" || item.date.startsWith(filter.date);
    return eventTypeMatch && dateMatch;
  });
};

export default gallerySlice.reducer;
