<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
//-------------------------------------------------------------------
		$email =  $_REQUEST['email'];


$sql = "INSERT INTO newsletter (email) VALUES ('email')";

if (mysqli_query($conn, $sql)) {
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>


<html>
<body>

  <a id="news" href="http://127.0.0.1:5500/index.html"> </a>
  <script>
      alert("Your feedback has been recorded. Thanks for your valuable time.");
      document.getElementById('loginPageLink').click();
  </script>

</body>
</html>