//Ensures form fields are correct before submitting to DB
function validateForm() {

  var name = $('#nameInput').val(),
      species = $('#speciesInput').val(),
      age = $('#ageInput').val();

  if (!name.length || !species.length || !age.length) {
    alert('All fields must be filled');
    console.log(typeof name, typeof species, typeof age);
    return false;
  }
  if (typeof name !== 'string' || typeof species !== 'string' || typeof parseInt(age) !== 'number' || isNaN(age)) {
    alert('Name and species must be strings. Age must be a number.')
    console.log(typeof name, typeof species, typeof age);
    return false;
  }
}

//Change text color
$('#colorChange').on('click', function() {
  $('body').css('color', 'red');
})
//Hide everything
$('#hide').on('click', function() {
  $('main').css('display', 'none');
})
