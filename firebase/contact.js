// Initialize Firebase
var config = {

};
firebase.initializeApp(config);

//reference messages collection
var messageRef = firebase.database().ref('messages');


//listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
  e.preventDefault();

  //get values

  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var subject = getInputVal('subject');

  //save message
  saveMessage(name, phone, email, subject);

  //show alert
  document.querySelector('.alert').style.display = 'block';

  //hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  },3000);

  //clear form after submit
  document.getElementById('contactForm').reset();
 
}

//function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

//function to save message to firebase
function saveMessage(name, phone, email, subject) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    email: email,
    subject: subject,
  });
}


