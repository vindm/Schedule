<?
$host = 'localhost';
$user = 'vindm'; 
$pass = '2415868644'; 
$dbname = '37x';
mysql_connect($host,$user,$pass);
mysql_select_db($dbname);
mysql_query("set lc_time_names='ru_RU'");
mysql_query("SET NAMES UTF8");
?>