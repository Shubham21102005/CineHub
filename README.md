# 🎬 CineHub

A modern, responsive web application for movie enthusiasts to discover, explore, and manage their favorite films. Built with React and powered by Vite for optimal performance.

## ✨ Features

- **Movie Discovery**: Browse trending, popular, and upcoming movies
- **Advanced Search**: Find movies by title, genre, year, or rating
- **Detailed Information**: View comprehensive movie details including cast, crew, and reviews
- **Personal Watchlist**: Save movies to watch later
- **User Reviews**: Read and write movie reviews
- **Responsive Design**: Seamless experience across all devices
- **Fast Performance**: Optimized with Vite for lightning-fast loading



## 🛠️ Built With

- **Frontend Framework**: [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling
- **Styling**: CSS3 / [Styled Components](https://styled-components.com/) / [Tailwind CSS](https://tailwindcss.com/)
- **API**: [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- TMDb API Key (free registration at [TMDb](https://www.themoviedb.org/settings/api))

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shubham21102005/CineHub.git
   cd CineHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your TMDb API key to the `.env` file:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

## 📁 Project Structure

```
CineHub/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── movie/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   └── Search.jsx
│   ├── hooks/
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 🎨 Key Features in Detail

### Movie Discovery
- Browse trending movies updated daily
- Explore movies by genres
- View upcoming releases
- Check out top-rated films

### Search & Filter
- Real-time search functionality
- Filter by genre, year, and rating
- Sort results by popularity, rating, or release date

### Movie Details
- Comprehensive movie information
- Cast and crew details
- Trailers and images
- User ratings and reviews

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Repository**: [https://github.com/Shubham21102005/CineHub](https://github.com/Shubham21102005/CineHub)
- **Issues**: [https://github.com/Shubham21102005/CineHub/issues](https://github.com/Shubham21102005/CineHub/issues)

## 👨‍💻 Author

**Shubham**
- GitHub: [@Shubham21102005](https://github.com/Shubham21102005)
- LinkedIn: https://www.linkedin.com/in/krshubham21/
## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API
- [React Team](https://reactjs.org/) for the amazing framework
- [Vite Team](https://vitejs.dev/) for the blazing fast build tool
- All the contributors who help make this project better

## 📊 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/Shubham21102005/CineHub)
![GitHub issues](https://img.shields.io/github/issues/Shubham21102005/CineHub)
![GitHub stars](https://img.shields.io/github/stars/Shubham21102005/CineHub)
![GitHub forks](https://img.shields.io/github/forks/Shubham21102005/CineHub)

---

⭐ If you found this project helpful, please give it a star!

---

*Built with ❤️ by [Shubham](https://github.com/Shubham21102005)*
