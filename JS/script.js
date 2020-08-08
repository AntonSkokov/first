const numberOfFilms = +prompt ( "Сколько фильмов вы уже смотрели?",'');

const personaMovieDB = {
 count: numberOfFilms ,
 movies:{},
 actors:{},
 genres:[],
 private:false

};

const a = prompt ('Один из последних просмотренных фильмов?',''),
      b = prompt ('На сколько оцените его',''),
      c = prompt ('Один из последних просмотренных фильмов?',''),
      d = prompt ('На сколько оцените его','');

personaMovieDB.movies[a]= b;  
personaMovieDB.movies[c]= d;    

console.log(personaMovieDB);