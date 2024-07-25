import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilteredItems } from "../Store/gallerySlice";
import Header from "./Header";
import ContactUs from "./ContactUs";

const Gallery = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredItems);
  const filter = useSelector((state) => state.gallery.filter);

  const eventTypes = [
    "all",
    "sports",
    "cultural",
    "academic",
    "infrastructure",
  ];
  const years = ["all", "2024", "2023", "2022"];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilter({ [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold text-center mb-8">School Gallery</h1>

        {/* Filter Controls */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <select
            name="eventType"
            value={filter.eventType}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>

          <select
            name="date"
            value={filter.date}
            onChange={handleFilterChange}
            className="p-2 border rounded-md"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === "all" ? "All Years" : year}
              </option>
            ))}
          </select>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {item.type === "photo" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-48 object-cover"
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="p-4">
                <p className="font-medium">{item.alt}</p>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No items match the selected filters.
          </p>
        )}
      </main>
      <ContactUs />
    </div>
  );
};

export default Gallery;
