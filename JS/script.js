let numberOfFilms;

function start(){
     numberOfFilms = +prompt ( "Сколько фильмов вы уже смотрели?",'');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt ( "Сколько фильмов вы уже смотрели?",'');

    }
    }
    
    start();


const personaMovieDB = {
 count: numberOfFilms ,
 movies:{},
 actors:{},
 genres:[],
 privat:false

};

    



function rememberMyFilms (){
    for( let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?',''),
              b = prompt ('На сколько оцените его','');
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personaMovieDB.movies[a]= b;
            console.log('Done');
        }  else {
            console.log('error');
            i--;
    
        }
              
    }
}

rememberMyFilms();

function detectPersonalLevel(){

    if (personaMovieDB.count < 10) {
        console.log("Просмотренно мало фильмов");
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        console.log ("Вы классический зритель");
    } else if (personaMovieDB.count >= 30) {
        console.log ("Вы киноман");
    }else{
        console.log("Проиiзошла ошибка");
    }
}
 detectPersonalLevel();

 function showMyDB ( hidden) {
   if (!hidden){

    console.log(personaMovieDB);

   }
 }

 showMyDB(personaMovieDB.privat);

function writeYourGenres () {
       for (let  i = 1; i <= 3; i++ ) {
           const genre = prompt(`Ваш любимы жанр под номером ${i}`);
           personaMovieDB.genres[i - 1] = genre;
           
       }
}
writeYourGenres();