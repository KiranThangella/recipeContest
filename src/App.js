import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterSidebar from "./components/FilterSidebar";
import RecipeList from "./components/RecipeList";
import { recipes as initialRecipes } from "./data/recipes";


function App() {
  const [recipes, setRecipes] = useState(initialRecipes || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    attributes: [],
    mealType: [],
    dishType: [],
  });
  const [sortOption, setSortOption] = useState("");

  const filterAndSortRecipes = useCallback(() => {
    let filtered = [...(initialRecipes || [])];
    if (searchTerm) {
      filtered = filtered.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.chef.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filters.attributes.length > 0) {
      filtered = filtered.filter((recipe) =>
        filters.attributes.some((attr) => recipe[attr] === true)
      );
    }
    if (filters.mealType.length > 0) {
      filtered = filtered.filter((recipe) =>
        filters.mealType.includes(recipe.mealType)
      );
    }
    if (filters.dishType.length > 0) {
      filtered = filtered.filter((recipe) =>
        filters.dishType.includes(recipe.dishType)
      );
    }
    if (sortOption) {
      filtered.sort((a, b) => {
        switch (sortOption) {
          case "newest":
            return new Date(b.uploadedOn) - new Date(a.uploadedOn);
          case "oldest":
            return new Date(a.uploadedOn) - new Date(b.uploadedOn);
          case "highestRating":
            return b.avgRating - a.avgRating;
          case "lowestRating":
            return a.avgRating - b.avgRating;
          default:
            return 0;
        }
      });
    }
    setRecipes(filtered);
  }, [searchTerm, filters, sortOption]);

  useEffect(() => {
    filterAndSortRecipes();
  }, [filterAndSortRecipes]);

  const clearFilters = () => {
    setFilters({ attributes: [], mealType: [], dishType: [] });
    setSearchTerm("");
    setSortOption("");
  };

  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        <main className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-80">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              clearFilters={clearFilters}
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full sm:w-48 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Sort By</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="highestRating">Highest Rating</option>
                <option value="lowestRating">Lowest Rating</option>
              </select>
            </div>
            <RecipeList recipes={recipes} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
