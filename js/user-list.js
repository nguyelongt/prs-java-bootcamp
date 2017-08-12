$(document).ready(function () {
  //var allUsers = buildListOfUsers()
  $.get('http://prs.gregorydoud.net/Users/List').done(function (data) {
    allUsers = data;
    var htmlGetContent = buildListOfUsers();
    $('content').html(htmlGetContent);
  });
});

var allUsers = [];

var users = [{
    ID: 0,
    UserName: 'admin',
    Password: 'admin',
    FirstName: 'Long',
    LastName: 'Nguyen',
    Email: 'long@admin.com',
    Phone: '513-123-4567',
    isAdmin: true,
    isReviewer: true
  },
  {
    ID: 1,
    UserName: 'kim',
    Password: 'admin',
    FirstName: 'Kim',
    LastName: 'Nguyen',
    Email: 'Kim@admin.com',
    Phone: '513-123-4567',
    isAdmin: true,
    isReviewer: true
  },
  {
    ID: 2,
    UserName: 'eric',
    Password: 'admin',
    FirstName: 'Eric',
    LastName: 'Anspach',
    Email: 'eric@admin.com',
    Phone: '513-123-4567',
    isAdmin: true,
    isReviewer: true
  },
  {
    ID: 3,
    UserName: 'elisha',
    Password: 'admin',
    FirstName: 'Elisha',
    LastName: 'Amos',
    Email: 'elish@admin.com',
    Phone: '513-123-4567',
    isAdmin: true,
    isReviewer: true
  },
  {
    ID: 4,
    UserName: 'phuc',
    Password: 'admin',
    FirstName: 'Phuc',
    LastName: 'Dao',
    Email: 'phuc@admin.com',
    Phone: '513-123-4567',
    isAdmin: true,
    isReviewer: true
  },
  {
    ID: 5,
    UserName: 'greg',
    Password: 'admin',
    FirstName: 'Greg',
    LastName: 'Doud',
    Email: 'greg@admin.com',
    Phone: '513-123-4567',
    isAdmin: true,
    isReviewer: true
  },
];

function getUsers() {
  return allUsers;
}

function buildListOfUsers() {
  var users = getUsers();
  var usersHTML = '<table>';
  usersHTML += '<tr>' +
            '<th>ID</th>' +
            '<th>User Name</th>' +
            '<th>First Name</th>' +
            '<th>Last Name</th>' +
            '<th>Email</th>' +
            '<th>Phone</th>' +
            '<th>Admin</th>' +
            '<th>Reviewer</th>' +
            '</tr>'
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var tr = '<tr>';
    tr += '<td>' + user.ID + '</td>';
    tr += '<td>' + user.UserName + '</td>';
    tr += '<td>' + user.FirstName + '</td>';
    tr += '<td>' + user.LastName + '</td>';
    tr += '<td>' + user.Email + '</td>';
    tr += '<td>' + user.Phone + '</td>';
    tr += '<td>' + user.IsAdmin + '</td>';
    tr += '<td>' + user.IsReviewer + '</td>';
    tr += '</tr>';
    usersHTML += tr;
  }

  usersHTML += '</table>';
  return usersHTML;
}
