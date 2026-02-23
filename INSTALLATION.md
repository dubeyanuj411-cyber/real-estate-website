# Installation Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Step-by-Step Installation

### 1. Navigate to Project Directory
```bash
cd real-estate-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will start on `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## Features Included

✅ Responsive Design (Mobile, Tablet, Desktop)
✅ Dark/Light Mode Toggle
✅ Property Filtering (Category, Type, City, Price)
✅ Search Functionality
✅ Favorites/Wishlist (localStorage)
✅ Image Slider/Carousel
✅ Contact Modal
✅ Load More Pagination
✅ Property Details Page
✅ Contact Form
✅ About Page
✅ 404 Page

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── PropertyCard.jsx
│   ├── FilterSection.jsx
│   ├── SearchBar.jsx
│   ├── ContactModal.jsx
│   └── ImageSlider.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Properties.jsx
│   ├── PropertyDetails.jsx
│   ├── Contact.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── layout/             # Layout components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── hooks/              # Custom React hooks
│   ├── useFavorites.js
│   └── useDarkMode.js
├── data/               # Static data
│   └── properties.js
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS 3** - Styling
- **React Router DOM 6** - Routing
- **LocalStorage** - Data Persistence

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- This is a frontend-only application
- All data is static (no backend/database)
- Favorites are stored in browser localStorage
- Contact forms show alerts (no actual email sending)
- All images are from Unsplash (free stock photos)

## Customization

### Adding More Properties
Edit `src/data/properties.js` and add new property objects.

### Changing Colors
Edit `tailwind.config.js` to customize the color scheme.

### Modifying Components
All components are in `src/components/` and can be easily modified.

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try another port.

### Dependencies Not Installing
Try deleting `node_modules` and `package-lock.json`, then run `npm install` again.

### Dark Mode Not Working
Clear browser localStorage and refresh the page.

## Support

For issues or questions, please check the README.md file.

---

**Happy Coding! 🚀**
