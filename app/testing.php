<?php
require_once __DIR__ . '/Db/Database.php';

	function getHistory() {
		$conn = new Database('WithdrawalHistory');
		return $conn->select('*')->fetchAll(PDO::FETCH_ASSOC);
	}

	$function = getHistory();

	exit(json_encode($function));