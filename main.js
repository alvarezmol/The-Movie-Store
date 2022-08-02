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



async function getheader(){

  const moviecont = document.querySelector('#movie');  //que me seleccione la seccion donde va a insertar el detalle de la pelicula (section id=movie) y aqui en JS le pongo como nombre moviecont
  
  moviecont.classList.add("inactive");

  const categoriesPreview = document.querySelector('#categoriesPreview');
  categoriesPreview.classList.remove("inactive");

  const containerHeader = document.querySelector('#container_header');
  containerHeader.classList.remove("inactive");

  const categories = document.querySelector('#categories');
  categories.classList.remove("inactive"); 

  const header_title = document.querySelector('#header-title');
  header_title.classList.remove("inactive"); 

  const header_arrow = document.querySelector('#header-arrow');
  header_arrow.classList.add("inactive"); 

  const header_section = document.querySelector('#header_section');
  header_section.className = "header_section"



  
/* const genericList1 = document.querySelector('#genericList_noScroll');
  genericList1.id = "genericList"
  
  genericList1.classList.remove("inactive");  */
 







    const { data } = await api("trending/movie/day");
    const movie = data.results;
    const movie1 = movie[1];
    console.log(movie1);
    
    const header = document.querySelector('#container_header');
    header.innerHTML = ""; 

    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container1");
    const movieContainerText = document.createElement("div");
    movieContainerText.classList.add("movie-container-text");
    const movie_title = document.createElement("div");
    movie_title.classList.add("movie_title");
    const movie_date = document.createElement("div");
    movie_date.classList.add("movie_data");
    const movie_desc = document.createElement("div");
    movie_desc.classList.add("movie_desc");
    
    const divText = document.createTextNode(movie1.original_title);
    const divDesc = document.createTextNode(movie1.overview); 
    const divDate = document.createTextNode(movie1.release_date);

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie1.title);
    movieImg.setAttribute("src", "https://image.tmdb.org/t/p/original" + movie1.backdrop_path);

    movieContainer.appendChild(movieImg);
    movieContainerText.appendChild(movie_title);
    movieContainerText.appendChild(movie_date);
    movieContainerText.appendChild(movie_desc);
    header.appendChild(movieContainer);
    header.appendChild(movieContainerText);
    movie_title.appendChild(divText);
    movie_desc.appendChild(divDesc);
    movie_date.appendChild(divDate);
    };

async function getTrendingMoviesPreview(){
      const { data } = await api("trending/movie/day");
      const movies = data.results;
      const genericSection = document.querySelector(".genericList");
      /* genericSection.innerHTML = ""; */
      
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
                    
                     const movies = data.results;
                     movies.forEach(movie=>{
              
        
              const movieImgcont = document.createElement("div");
              movieImgcont.classList.add("movie-img2cont");
        
              const movieImg = document.createElement("img");
              movieImg.classList.add("movie-img2");
        
              movieImg.setAttribute("alt", movie.title);
              movieImg.setAttribute("src", "https://image.tmdb.org/t/p/w300" + movie.poster_path);
        
              movieImgcont.appendChild(movieImg);
              categoryContainer.appendChild(movieImgcont);
              movieImg.addEventListener("click", ()=>{
                location.hash = "#movie=" + movie.id ;
              });
          });
          
        
          
        }





        getMoviesByCategory()

        });
  };
  
async function getmovie(){
    
      const hash = location.hash.split("#");
      const hasht = hash[1].split("movie=")
      console.log(hasht);
      const hash1 = hasht[1];
      console.log(hasht);
      const { data } = await api("movie/" + hash1);
      console.log(data);
      const moviecont = document.querySelector('#movie');  //que me seleccione la seccion donde va a insertar el detalle de la pelicula (section id=movie) y aqui en JS le pongo como nombre moviecont
      moviecont.innerHTML = ""; //reseteo lo que hay en la sesion
      moviecont.classList.remove("inactive");

      const categoriesPreview = document.querySelector('#categoriesPreview');
      categoriesPreview.classList.add("inactive");

      const containerHeader = document.querySelector('#container_header');
      containerHeader.classList.add("inactive");

      const categories = document.querySelector('#categories');
      categories.classList.add("inactive"); 

      const header_title = document.querySelector('#header-title');
      header_title.classList.add("inactive"); 

      const header_arrow = document.querySelector('#header-arrow');
      header_arrow.classList.remove("inactive"); 

      const header_section = document.querySelector('#header_section');
      header_section.className = "header_section_movie"

      const genericList1 = document.querySelector('.genericList');
      /* genericList1.classList.add("inactive"); */
      genericList1.id = "genericList_noScroll"
      genericList1.innerHTML = "";




      



      const cat1 = document.querySelector('.categories1');
      cat1.classList.add("inactive");


      const moviecontdiv = document.createElement("div"); //que en esa seccion me cree un div llamadado moviecontdiv
      moviecontdiv.classList.add("movie_div"); // que ese div tenga como clase: category-container

      const movieTitle = document.createElement("h2"); //que en esa seccion me cree un h2 llamadado movieTitle
      movieTitle.classList.add("movie-title"); // que ese h3 tenga como clase: category-title

      const moviedate = document.createElement("h4"); //que en esa seccion me cree un h3 llamadado moviedate
      moviedate.classList.add("movie-date"); // que ese h3 tenga como clase: movie-date
      
      const movieOverview = document.createElement("h3"); //que en esa seccion me cree un h3 llamadado movieOverview
      movieOverview.classList.add("movie-Overview"); // que ese h3 tenga como clase: category-Overview
       
      const movieTitleText =document.createTextNode(data.original_title); //que en esa seccion me crea un texto que contenga el nombre de la pelicula
      const movieOverviewt =document.createTextNode(data.overview); //que en esa seccion me crea un texto que contenga el overview de la pelicula
      const movieDatet =document.createTextNode("release date: " + data.release_date); //que en esa seccion me crea un texto que contenga el fecha de salida de la pelicula
      const movieImgT = document.createElement("img"); //que en esa seccion me cree un img llamadado movieImgT
      movieImgT.classList.add("movie-img"); //que en esa img tenga como clase movie-img

      movieImgT.setAttribute("alt", data.original_title); //que en esa img tenga como alt el titulo de la pelicula
      movieImgT.setAttribute("src", "https://image.tmdb.org/t/p/original" + data.backdrop_path); //que en esa img tenga como src el poster path de la pelicula


      moviecontdiv.appendChild(movieImgT); //inserto la img en el div (moviecontdiv)
      
      movieTitle.appendChild(movieTitleText); //inserto el nombre de la pelicula en el h3 (movieTitle)
      moviedate.appendChild(movieDatet);
      moviecontdiv.appendChild(movieTitle); //inserto el h3 (movieTitle) en el div (moviecontdiv)
      moviecontdiv.appendChild(moviedate);
      moviecontdiv.appendChild(movieOverview); //inserto el h3 (movieOverview) en el div (moviecontdiv)
    
      movieOverview.appendChild(movieOverviewt); //inserto el overview de la pelicula en el h3 (movieOverview)
      moviecont.appendChild(moviecontdiv); //inserto el div en la seccion (moviecont)
      
};




window.addEventListener("hashchange", navigator, false);
window.addEventListener("DOMContentLoaded", navigator, false);

const arroybtn = document.querySelector('#header-arrow');

arroybtn.addEventListener("click", ()=>{
location.hash = "#Home";
});


function navigator(){
 

  if(location.hash.startsWith("#Home")){
    getheader();
    getTrendingMoviesPreview();
    getCategoriesPreview();
  }else if (location.hash.startsWith("#movie=")){
    getmovie();
  }else{
    getheader();
    getTrendingMoviesPreview();
    getCategoriesPreview();
  }
 
};







/* getheader();
getCategoriesPreview();
getTrendingMoviesPreview(); */


