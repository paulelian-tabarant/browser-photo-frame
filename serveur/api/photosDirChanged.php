<?php
	/**
	 * Checks for image directory changes and notifies the client
	 * when a change occurs.
	 * TODO: analyze behaviour, because script does not work as is
	 */

	// DB connection script
	include_once('../phpFunctions/dbConnect.php');

	if ($dbSuccess) {
		include_once('../../storage-config.php');

		include_once('../phpFunctions/dbPhotos.php');
		header('Content-Type: text/event-stream');
		header('Cache-Control: no-cache');

		$albumID = $_SESSION["albumLoaded"];
		// Temporary fix : connection should be closed on client side
		if (!isset($albumID)) {
			exit();
		}

		$lastContentArray = listPhotosInAlbum($dbConn, $albumID);
		// Condition for sending the event to the client
		if (sizeof($lastContentArray) != sizeof($_SESSION["photosDirContent"])) {
			echo 'data: ' . PHP_EOL;
			echo PHP_EOL;
		}

	}

	else {
		http_response_code(500);
	}

?>
