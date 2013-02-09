<?php
include("connectdb2.php");
if($_POST['task']=='upd_mes')
{	
	$post_body=$_POST['post_body'];
	$post_id=$_POST['post_id'];
	$query = 'Update posts SET post_body="'.htmlspecialchars($post_body).'" Where post_id="'.$post_id.'"';
   $sql = @mysql_query($query);
	$sql=@mysql_query("ALTER TABLE  `stat` ORDER BY  `last_date` DESC");
}
if($_POST['task']=='load_mes')
{	
	$post_body=$_POST['post_body'];
	$viewer_group=$_POST['post_gr'];
	$viewer=$_POST['post_auth'];
	$query = 'INSERT INTO posts SET post_body="'.htmlspecialchars($post_body).'", post_date=now(), post_gr="'.$viewer_group.'", post_auth="'.$viewer.'"';
    $sql = @mysql_query($query);
	$sql=@mysql_query("ALTER TABLE  `stat` ORDER BY  `last_date` DESC");
}
if($_POST['task']=='del')
{
	$query = 'DELETE FROM posts  WHERE  post_id="'.$_POST['post_id'].'"';
    $sql = @mysql_query($query);
}
elseif($_POST['task']=='return')
{
	if($_POST['one'])
	{
		$query = @mysql_query('select post_id, post_body, DATE_FORMAT(post_date, "%d") as post_date_day, DATE_FORMAT(post_date, "%M") as post_date_month, post_auth from posts where post_id=(SELECT post_id FROM posts ORDER BY post_id DESC LIMIT 1)');
	}
	else
	{
		$query = @mysql_query('select post_id, post_body, DATE_FORMAT(post_date, "%d") as post_date_day, MONTH(post_date) as m, DATE_FORMAT(post_date, "%M") as post_date_month, post_auth from posts where post_gr="'.$_POST['viewer_gr'].'" or post_gr=9 order by post_id DESC');

	}
	while ($row = mysql_fetch_array($query, MYSQL_ASSOC)) 
	{
		$day=$row['post_date_day'];
		$month=$row['post_date_month'];
		$m=$row['m'];
		if($day==date('j') && $m==date('m') )
		{
			$time='сегодня';
		}
		elseif($day==date('j')-1 && $m==date('m'))
		{
			$time='вчера';
		}
		else
		{
			$time=$day.' '.$month;
		}
		if($_POST['list']==1)
		{
			$body=substr($row["post_body"],0,76);
			$body=substr($body,0, strrpos($body, ' '));
			echo (
		'<tr id="list_item" class="'.$row['post_id'].'">
			<td class="ui-corner-all" width="90px">'.$time.'</td>
			<td class="ui-corner-all" width="360px">'.$body.'...</td>
            </tr>'
			); 
		}
		else
		{
		echo (
		'<div class="mess" id="'.$row['post_id'].'">
			<div id="gr_mes_cont" class="ui-corner-all">
				<div id="mes_txt">'.nl2br($row["post_body"]).'</div></div>
                <div id="gr_mes_menu" class="ui-corner-all">
                    <div id="mes_date">'.$time.'</div> 
                    <div id="mes_from">'.$row["post_auth"].' |&nbsp;</div>
                </div>
            </div>'
			); 
		}
		}
}
// данные приложения
$app_id = '1985020'; // id приложения
$api_secret = 'kw7hnZlRT7vNgtiyela8'; // защищенный ключ приложения
 
 
$auth_key  = $_POST['auth_key'];
$viewer_id = $_POST['viewer_id'];
 
$real_key = md5($app_id."_".$viewer_id."_".$api_secret);
if ($auth_key == $real_key){
    $viewer_id=$_POST['viewer_id'];
	$viewer_name=$_POST['viewer_name'];
	$viewer_city=$_POST['viewer_city'];
	$viewer_group=$_POST['viewer_group'];
 
    // Выполняем запрос: если пользователя с таким id ещё нет в БД, то добавляем, если есть, то обновляем запись, прибавляя одно посещение (`visits` = (`visits`+1))
    $query = 'INSERT INTO stat SET uid="'.$viewer_id.'", uname="'.$viewer_name.'", city="'.$viewer_city.'", gr="'.$viewer_group.'", last_date=now() ON DUPLICATE KEY UPDATE visits=visits+1,gr="'.$viewer_group.'",city="'.$viewer_city.'",last_date=now()';
    $sql = @mysql_query($query);	
	$sql=@mysql_query("ALTER TABLE  `stat` ORDER BY  `last_date` DESC");
}
?>