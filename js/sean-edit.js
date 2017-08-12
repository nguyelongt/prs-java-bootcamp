$(document).ready(function () {
  //var singleUser = buildEditForm()
  $.get('http://prs.gregorydoud.net/Users/Get/6').done(function(data) {
    singleUser = data;
    var htmlGetContent = buildEditForm();
    $('#single-user-edit').html(htmlGetContent);
    inputDataText();
  });
});

var singleUser = [];

function getUsers() {
  return singleUser;
}


function buildEditForm() {

  var table = '<table>';
  var ctable = '</table>';
  var tr = '<tr>';

  // Creating Input Variable
  var userNameTd = 'Username: </td><td><input id="user-name-input" type="text">';
  var firstLastNameTd = 'Name: </td><td><input id="first-last-name-input" type="text">';
  var emailTd = 'Email: </td><td><input id="email-input" type="text">';
  var phoneTd = 'Phone: </td><td><input id="phone-input" type="text">';
  var adminTd = 'Admin: </td><td><input id="admin-input" type="text">';
  var reviewerTd = 'Reviewer: </td><td><input id="reviewer-input" type="text">';

  // Creating Input
  var tableWrapper = '<table>';
  var trWrapper = '<tr>';
  var ntr = '<tr>';
  var nctr = '</tr>';
  var ctr = '</tr>';
  trWrapper += ntr + '<td>' + userNameTd + '</td>' + nctr;
  trWrapper += ntr + '<td>' + firstLastNameTd + '</td>' + nctr;
  trWrapper += ntr + '<td>' + emailTd + '</td>' + nctr;
  trWrapper += ntr + '<td>' + phoneTd + '</td>' + nctr;
  trWrapper += ntr + '<td>' + adminTd + '</td>' + nctr;
  trWrapper += ntr + '<td>' + reviewerTd + '</td>' + nctr;
  trWrapper += '</tr>';
  tableWrapper += trWrapper;

  tableWrapper += '</table>';
  return tableWrapper;
}

function inputDataText() {
  var userValue = getUsers();

  // Pulling data from userValue and storing into Dynamic Input
  var userNameWrapper = $('#user-name-input');
  var firstLastNameWrapper = $('#first-last-name-input');
  var emailWrapper = $('#email-input');
  var phoneWrapper = $('#phone-input');
  var adminWrapper = $('#admin-input');
  var reviewerWrapper = $('#reviewer-input');

  userNameWrapper.val(userValue.UserName);
  firstLastNameWrapper.val(userValue.FirstName + ' ' + userValue.LastName);
  emailWrapper.val(userValue.Email);
  phoneWrapper.val(userValue.Phone);
  adminWrapper.val(userValue.IsAdmin);
  reviewerWrapper.val(userValue.IsReviewer);
}
