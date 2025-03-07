import React, { useState } from "react";

const FilterSidebar = ({ filters, setFilters, clearFilters }) => {
  const [openSections, setOpenSections] = useState({
    attributes: false,
    mealType: false,
    dishType: false,
  });

  const attributes = [
    { key: "contestWinner", label: "Contest Winner" },
    { key: "featured", label: "Featured" },
    { key: "testKitchenApproved", label: "Test Kitchen Approved" },
  ];
  const mealTypes = ["Dinner", "Lunch", "Dessert", "Breakfast"];
  const dishTypes = [
    "Curry",
    "Pizza",
    "Seafood",
    "Soup",
    "Mexican",
    "Smoothie",
  ];

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const removeFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].filter((item) => item !== value),
    }));
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-full lg:w-80 bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
        >
          Clear All
        </button>
      </div>
      {/* Attributes Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-700">Attributes</h3>
          <button
            onClick={() => toggleSection("attributes")}
            className="lg:hidden px-3 py-1 bg-indigo-100 text-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-200 transition-colors"
          >
            {openSections.attributes ? "Collapse" : "Explore"}
          </button>
        </div>
        <div
          className={`space-y-2 ${openSections.attributes || "lg:block"} ${
            openSections.attributes ? "block" : "hidden"
          }`}
        >
          {attributes.map(({ key, label }) => (
            <label key={key} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.attributes.includes(key)}
                onChange={() => handleFilterChange("attributes", key)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-600">{label}</span>
            </label>
          ))}
        </div>
        {filters.attributes.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {filters.attributes.map((value) => {
              const label =
                attributes.find((attr) => attr.key === value)?.label || value;
              return (
                <span
                  key={value}
                  className="inline-flex items-center bg-indigo-100 text-indigo-800 text-sm font-medium px-2 py-1 rounded-full"
                >
                  {label}
                  <button
                    onClick={() => removeFilter("attributes", value)}
                    className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                  >
                    X
                  </button>
                </span>
              );
            })}
          </div>
        )}
      </div>
      {/* Meal Type Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-700">Meal Type</h3>
          <button
            onClick={() => toggleSection("mealType")}
            className="lg:hidden px-3 py-1 bg-indigo-100 text-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-200 transition-colors"
          >
            {openSections.mealType ? "Collapse" : "Explore"}
          </button>
        </div>
        <div
          className={`space-y-2 ${openSections.mealType || "lg:block"} ${
            openSections.mealType ? "block" : "hidden"
          }`}
        >
          {mealTypes.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.mealType.includes(type)}
                onChange={() => handleFilterChange("mealType", type)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-600">{type}</span>
            </label>
          ))}
        </div>
        {filters.mealType.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {filters.mealType.map((value) => (
              <span
                key={value}
                className="inline-flex items-center bg-indigo-100 text-indigo-800 text-sm font-medium px-2 py-1 rounded-full"
              >
                {value}
                <button
                  onClick={() => removeFilter("mealType", value)}
                  className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                >
                  X
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    {/* dishType section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-700">Dish Type</h3>
          <button
            onClick={() => toggleSection("dishType")}
            className="lg:hidden px-3 py-1 bg-indigo-100 text-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-200 transition-colors"
          >
            {openSections.dishType ? "Collapse" : "Explore"}
          </button>
        </div>
        <div
          className={`space-y-2 ${openSections.dishType || "lg:block"} ${
            openSections.dishType ? "block" : "hidden"
          }`}
        >
          {dishTypes.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.dishType.includes(type)}
                onChange={() => handleFilterChange("dishType", type)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-600">{type}</span>
            </label>
          ))}
        </div>
        {filters.dishType.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {filters.dishType.map((value) => (
              <span
                key={value}
                className="inline-flex items-center bg-indigo-100 text-indigo-800 text-sm font-medium px-2 py-1 rounded-full"
              >
                {value}
                <button
                  onClick={() => removeFilter("dishType", value)}
                  className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none"
                >
                  X
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;
