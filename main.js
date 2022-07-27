//llamado a la API de themoviedb atravez de Axios

const API_KEY = "d3a850d921ca1cfd932b5d0517b5caef"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "content-type": "application/json;charset=utf-8",

  },
  params: {
    "api_key": API_KEY,
  },

});
alert(baseURL);
async function getheader(){
    const { data } = await api("trending/movie/day");
    const movie = data.results;
    const movie1 = movie[1];
    console.log(movie1);
    console.log(movie1.backdrop_path);
    const header = document.querySelector('#container_header');
    /* header.innerHTML = ""; */

    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");
    const movie_title = document.createElement("div");
    movie_title.classList.add("movie_title");
    
    const divText = document.createTextNode(movie1.original_title);
    
    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie1.title);
    movieImg.setAttribute("src", "https://image.tmdb.org/t/p/original" + movie1.backdrop_path);

    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(movie_title);
    header.appendChild(movieContainer);
    movie_title.appendChild(divText);
    };

async function getTrendingMoviesPreview(){
      const { data } = await api("trending/movie/day");
      const movies = data.results;
      const genericSection = document.querySelector('#genericList');
      genericSection.innerHTML = "";
      
      movies.forEach(movie=>{
          
  
          const movieContainer = document.createElement("div");
          movieContainer.classList.add("movie-container");
  
          const movieImg = document.createElement("img");
          movieImg.classList.add("movie-img2");
  
          movieImg.setAttribute("alt", movie.title);
          movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path);
  
          movieContainer.appendChild(movieImg);
          genericSection.appendChild(movieContainer);
          
      });
      console.log({data, movies});
  };

// obtener el listado de los generos de peliculas
async function getCategoriesPreview(){
        const {data} = await api("genre/movie/list");  // llama la api donde esta el objeto con los generos
        const categories = data.genres; // el objeto data --- genres.name contiene el nombre de las peliculas 

        categories.forEach(
        movie=>{ //por cada categoria que me haga lo siguiente:
        const categoryContainermain = document.querySelector('#categoriesPreview');  //que me seleccione la seccion donde va a insertar los nombres (section id=categoriesPreview) y aqui en JS le pongo como nombre categoryContainermain
       
        const categoryContainer = document.createElement("div"); //que en esa seccion me cree un div llamadado categoryContainer
        categoryContainer.classList.add("category-container"); // que ese div tenga como clase: category-container

        const categoryTitle = document.createElement("h3"); //que en esa seccion me cree un h3 llamadado categoryTitle
        categoryTitle.classList.add("category-title"); // que ese h3 tenga como clase: category-title
        categoryTitle.setAttribute("id", "id" + movie.id); // que ese h3 tenga como id: el id del genero
       
        const categoryTitleText =document.createTextNode(movie.name); //que en esa seccion me crea un texto que contenga el nombre de cada genero

        categoryTitle.appendChild(categoryTitleText); //inserto el nombre de cada genero en el h3 (categoryTitle)
        categoryContainermain.appendChild(categoryTitle); //inserto el h3 en el div (categoryContainer)
        categoryContainermain.appendChild(categoryContainer); //inserto el div en la seccion (categoryContainermain)

        const id = movie.id
                     async function getMoviesByCategory(){
                     const { data } = await api("discover/movie", {
                     params:{
                     with_genres: movie.id,
                     },
                     });
                     console.log(data);
                     const movies = data.results;
                     movies.forEach(movie=>{
              
        
              const movieImgcont = document.createElement("div");
              movieImgcont.classList.add("movie-img2cont");
        
              const movieImg = document.createElement("img");
              movieImg.classList.add("movie-img2");
        
              movieImg.setAttribute("alt", movie.title);
              movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.backdrop_path);
        
              movieImgcont.appendChild(movieImg);
              categoryContainer.appendChild(movieImgcont);
              
          });
          console.log({data, movies}); 
        }





        getMoviesByCategory()

        });
  };

// obtener las imagenes por generos de peliculas



    getTrendingMoviesPreview();
    getheader();
    getCategoriesPreview();

