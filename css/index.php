<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Расписание для групп 371/372/373/3571</title>
<link rel="stylesheet" href="css/black-tie/jquery-ui-1.8.4.custom.css" type="text/css"/>
<link rel="stylesheet" type="text/css" href="css/jquery.tooltip.css" />
<link rel="stylesheet" href="css/blog.css" />

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.js"></script>
<script type="text/javascript" src="js/ui/development-bundle/ui/i18n/jquery.ui.datepicker-ru.js"></script>
<script type="text/javascript" src=" https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.livequery.js"></script>
<script type="text/javascript" src="js/jquery.tooltip.js"></script>
<script type="text/javascript" src="js/shedule.js"></script>
<script src="http://vkontakte.ru/js/api/xd_connection.js?2" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery.reject.js"></script>

</head>
<body>
<div id="tabs" class="yy">
  <ul>
   	<li id="shedule"><a href="#tabs-1"><span>Расписание</span></a></li>
    <li id="file"><a href="#tabs-3"><span>Файловый сервер</span></a></li>
  </ul>
	<div id="tabs-1">
  		      <div id="group" align="center" class="no">
            <form id="gr_tog" style="margin-top:3px">
                <input type="radio" id="gr1" class="371" name="radio" value="371"/><label for="gr1">371</label>
                <input type="radio" id="gr2" class="372"  name="radio" value="372"/><label for="gr2">372</label>
                <input type="radio" id="gr3" class="373" name="radio" value="373"/><label for="gr3">373</label>
                <input type="radio" id="gr5" class="3571" name="radio" value="3571"/><label for="gr5">3571</label>
            </form>
            <div id="adv" style="display:block">
            <span class="ui-icon ui-icon-triangle-1-n" style="margin-bottom:0"></span>
            <span>Выберите группу</span>
            </div>
        </div>
        <div id="all" style="display:none; position:absolute">
            <form id="week_tog">
                    <input type="radio" id="radio1" name="radio" value="first"/><label for="radio1">Первая неделя</label>
                    <input type="radio" id="radio2" name="radio" value="second"/><label for="radio2">Вторая неделя</label>
            </form>
          
            <div id="week" style="float:left">
                <h3><a href="#">Понедельник</a></h3>
                <div id="mon" style="text-align:center"></div>
                <h3><a href="#">Вторник</a></h3>
                <div id="tue" style="text-align:center"></div>
                <h3><a href="#">Среда</a></h3>
                <div id="wed" style="text-align:center"></div>
                <h3><a href="#">Четверг</a></h3>
                <div id="thu" style="text-align:center"></div>
                <h3><a href="#">Пятница</a></h3>
                <div id="fri" style="text-align:center"></div>
                <h3><a href="#">Суббота</a></h3>
                <div id="sat" style="text-align:center"></div>
            </div>            
        </div>
        <div id="datepicker"></div>
        <div id="gr_mes" class="ui-corner-all">
            <div id="gr_mes_head" class="ui-corner-all"></div>
            <div id="gr_mes_menu" class="ui-corner-all"><span id="mes_prev" class="ui-icon ui-icon-circle-triangle-e"><span id="mes_next" class="ui-icon ui-icon-circle-triangle-e"></div>
            <div id="gr_mes_cont" class="ui-corner-all"></div>
            <div id="gr_mes_bot" class="ui-corner-all"></div>            
        </div>
    </div>
    <div id="info" align="center">
        <div id='funci' class="ui-corner-all">
            <div class="nomer ui-icon-fff ui-icon-circle-check ui-corner-all"></div>
            <div class="func ui-corner-all">
                <div class='name ui-corner-all'>
                    <b>
                        <h4 class='ui-corner-top'>
                            Определение группы пользователя и активация нужного расписания
                        </h4>
                    </b>
                </div>
                <div class='fun ui-corner-all'>
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Группа пользователя определяется путем поиска в его профайле клуба, посвященного гр. 371, 372, 373 или 3571.</span><br>
                    
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Реккомендуется состоять только в одном из этих клубов.</span><br />
<span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Пример: среди ваших групп есть club482775 → вы увидите расписание 371 гр.</span><br>
                </div>
             </div>
            <div class="nomer ui-icon-fff ui-icon-circle-check ui-corner-all"></div>
            <div class="func ui-corner-all">
                <div class='name ui-corner-all'>
                    <b>
                        <h4 class='ui-corner-top'>
                            Определение текущих дня и недели при запуске приложения
                        </h4>
                    </b>
                </div>
                <div class='fun ui-corner-all'>
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Текущее время меньше 17:00 → активируется текущий день.</span><br>
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Текущее время больше 17:00 → активируется следующий день.</span><br>
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Текущий день - воскресенье → активируется понедельник следующей недели.</span><br>
                </div>
             </div>
             <div class="nomer ui-icon-fff ui-icon-circle-check ui-corner-all"></div>
              <div class="func ui-corner-all">
                <div class='name ui-corner-all'>
                    <b>
                        <h4 class='ui-corner-top'>
                            Проверка пар (лабы и практики) на привязанность к датам
                        </h4>
                    </b>
                </div>
                <div class='fun ui-corner-all'>
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Пара будет на текущей/выбранной неделе → она активна.</span><br>
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Пары не будет на текущей/выбранной неделе → она не активна.</span><br>
                </div>
             </div>
             <div class="nomer ui-icon-fff ui-icon-circle-check ui-corner-all"></div>
              <div class="func ui-corner-all">
                <div class='name ui-corner-all'>
                    <b>
                        <h4 class='ui-corner-top'>
                            Переключение дней и недель с помощью календаря
                        </h4>
                    </b>
                </div>
                <div class='fun ui-corner-all'>
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">При переключении выполняется функция проверки пар, описанная выше.</span><br>
                </div>
             </div>
             <div class="nomer ui-icon-fff ui-icon-circle-check ui-corner-all"></div>
             <div class="func ui-corner-all">
                <div class='name ui-corner-all'>
                    <b>
                        <h4 class='ui-corner-all'>
                            Отображение фото преподавателя при наведении курсора на его фамилию
                        </h4>
                    </b>
                </div>
                <div class='fun ui-corner-all'>
                    <span class="ui-icon-fff ui-icon-triangle-1-e" style="float:left"></span><span class="ui-corner-all n">Не у всех преподователей есть фото...</span><br>
                </div>
           </div>
           <div class="nomer ui-icon-fff ui-icon-circle-check ui-corner-all"></div>
             <div class="func ui-corner-all">
                <div class='name ui-corner-all'>
                    <b>
                        <h4 class='ui-corner-all'>
                            Отображение подгрупп при наведении курсора на активную лабу
                        </h4>
                    </b>
                </div>
           </div>
    </div>
</div>
<div id="info_but"></div>
</body>

</html>