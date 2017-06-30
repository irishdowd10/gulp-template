var DoctorsModule = require('./../js/scripts.js').doctorsModule;


// var displayMovie = function(allMovies) {
//   for(i = 0; i < allMovies.length; i++) {
//   $('.show-movies').show().append('<div class="panel">' + '<h3>' + 'Title:  ' + allMovies[i].title + '</h3>' + '<p>' + 'Average Rating:  ' + allMovies[i].vote_average + '</p>' + '<p>' + 'Release Date:  ' + allMovies[i].release_date + '</p>' + '<img src=' + 'https://image.tmdb.org/t/p/w300/' +  allMovies[i].backdrop_path + '>' + '</div>');
//   }
// };

var displayDoctors = function(doctors, error) {
  for (x = 0; x < doctors.data.length; x++) {
    var curDoctor = doctors.data[x];
    $('.show-doctors').show().append('<div class="panel"><h3>Name: ' +
      curDoctor.profile.first_name + ' ' + curDoctor.profile.last_name +
      '</h3><p>Bio:  ' +
      curDoctor.profile.bio);
      // '</p><p>Release Date:  ' +
      // allMovies[i].release_date +
      // '</p><img src=https://image.tmdb.org/t/p/w300/' +
      // allMovies[i].backdrop_path +
      // '></div>');
  }

  if(error) { /*do something*/ }
};


$(document).ready(function() {
  var doctorModule = new DoctorsModule();
  $('#doctor-finder').click(function() {
    var symptom = $('#symptom').val();
    doctorModule.getDoctors(symptom, displayDoctors);
    // empty the current list of doctors
    $('.show-doctors').empty();
  });
});
