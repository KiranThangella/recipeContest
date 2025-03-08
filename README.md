# Recipe Contest Page

A responsive web app built with React and Tailwind CSS for exploring, filtering, and sorting contest recipes.

## Features
- **View Recipes:** Displayed as cards with images, titles, and ratings.
- **Filter by:**
  - Attributes: Contest Winner, Featured, Test Kitchen Approved.
  - Meal Type: Dinner, Lunch, Dessert, Breakfast.
  - Dish Type: Curry, Pizza, Seafood, Soup, Mexican, Smoothie.
- **Sorting:** Newest, Oldest, Highest, or Lowest Rating.
- **Search:** Find recipes by name, chef, or description.
- **Responsive Design:**
  - Mobile: Collapsible filter sidebar.
  - Desktop: Full sidebar always visible.

## Technologies Used
- React.js
- Tailwind CSS v3
- JavaScript (ES6+)

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/KiranThangella/recipe-contest-page.git
   cd recipe-contest-page
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Project Structure
```
recipe-contest-page/
├── public/           # Static assets
├── src/
│   ├── components/   # UI components
│   ├── data/         # Sample recipe data
│   ├── App.js        # Main app component
│   ├── index.js      # Entry point
├── package.json      # Dependencies and scripts
├── tailwind.config.js
└── postcss.config.js
```

## Contributing
1. Fork the repo.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Added feature"`.
4. Push: `git push origin feature-name`.
5. Submit a pull request.

## License
MIT License.

