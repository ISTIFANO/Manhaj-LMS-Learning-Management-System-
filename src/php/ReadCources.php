<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$conn = mysqli_connect("localhost", "root", "", "e-learning");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$courseId = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($courseId > 0) {
    // Fetch video data for the specific course
    $sql = "SELECT * FROM video WHERE ID_Cours = $courseId";
    $result = mysqli_query($conn, $sql);

    $videos = array();

    if (mysqli_num_rows($result) > 0) {
        // Output data of each row
        while ($row = mysqli_fetch_assoc($result)) {
            $videos[] = $row;
        }
    }

    // Return video data as JSON
    echo json_encode($videos);
} else {
    echo json_encode([]);
}

// Close connection
mysqli_close($conn);
?>
