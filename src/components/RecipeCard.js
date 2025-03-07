import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <img
        src={recipe.imgUrl}
        alt={recipe.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {recipe.name}
        </h3>
        <p className="text-gray-600 text-sm">by {recipe.chef}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">★</span>
          <span className="ml-1 text-gray-700">
            {recipe.avgRating} ({recipe.totalRatings})
          </span>
        </div>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {recipe.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.contestWinner && (
            <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              Winner
            </span>
          )}
          {recipe.featured && (
            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          )}
          {recipe.testKitchenApproved && (
            <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
              Approved
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
