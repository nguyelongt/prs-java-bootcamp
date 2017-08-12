$(document).ready(function() {
  //var singleUser = buildSingleUserDetail()
  $.get('http://prs.gregorydoud.net/Users/Get/6').done(function(data) {
    singleUser = data;
    var htmlGetContent = buildSingleUserDetail();
    $('#single-user-content').html(htmlGetContent);
  });
});

var singleUser = [];


function getUsers() {
  return singleUser;
}

function buildSingleUserDetail() {
  var user = getUsers();
  var userHTML = '<table id="user-detail-table">';
  var tr = '<tr>';
  var ctr = '</tr>';
  var td = '<td>';
  var ctd = '</td>';
  userHTML += tr + td + 'Username:' + ctd + td + user.UserName + ctd + ctr +
  tr + td + 'Name:' + ctd + td + user.FirstName + ' ' + user.LastName + ctd + ctr +
  tr + td + 'Email:' + ctd + td + user.Email + ctd + ctr +
  tr + td + 'Phone:' + ctd + td + user.Phone + ctd + ctr +
  tr + td + 'Admin:' + ctd + td + user.IsAdmin + ctd + ctr +
  tr + td + 'Reviewer:' + ctd + td + user.IsReviewer + ctd + ctr;
  userHTML += '</table>';
  return userHTML;

}
