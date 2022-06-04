<?php
echo "current user: ".get_current_user();
echo "script was executed under user: ".exec('whoami');

$o = fopen("php://input", "r");
$str = stream_get_contents($o);
fclose($o);

$t = fopen("log.txt", "a+");
fwrite($t, $str);
fclose($t);
?>
