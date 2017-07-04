function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
FB.login(function(response) {
  if (response.status === 'connected') {
  	$(".result").append("da dang nhap");
    // Logged into your app and Facebook.
  } else {
  	$(".result").append("chua dang nhap");

    // The person is not logged into this app or we are unable to tell. 
  }
});