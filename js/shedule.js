$(function() {
	var j=0
	if($.browser.chrome){$('#gr_mes').height(192), $('#gr_mes_head').height(29), $('#mes_inp').height(86),  $('#nav_mes').css('margin-top', '133px'),$('#gr_mes_cont').livequery(function()
	{
		$(this).height(80)
	})}
	if($.browser.firefox){$('#gr_mes').height(202),$('#tablid').height(100)}
	if($.browser.opera){$('#tablid').height(100)}
var height=$(window).height()-10
var width=$(window).width()-10
$('#add_mes').bind('click',	mes_btn)
$('#next_mes').addClass('dis').bind('click', next_mes_func)
$('#prev_mes').bind('click', prev_mes_func)
$('#list_mes').bind('click', list_mes)

var times=["","08:45 - 10:15", "10:25 - 11:55", "12:35 - 14:05", "14:10 - 15:40", "15:50 - 17:20", "17:25 - 18:55"];

//------------------------------------------------------------------------------------------------------------------------ Weeks

var two=["02/06/2011","02/13/2011","02/20/2011","02/27/2011","03/06/2011","03/13/2011","03/20/2011","03/27/2011","04/03/2011","04/10/2011","04/17/2011","04/24/2011","05/01/2011","05/08/2011","05/15/2011","05/22/2011","05/29/2011","06/05/2011","06/12/2011"];
var one=["02/13/2011","02/20/2011","02/27/2011","03/06/2011","03/13/2011","03/20/2011","03/27/2011","04/03/2011","04/10/2011","04/17/2011","04/24/2011","05/01/2011","05/08/2011","05/15/2011","05/22/2011","05/29/2011","06/05/2011"];		

//--------------- 371 ----------------

var monday_1=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"","","",""),
	new para(times[3],"Информатизация маркет. деятельности в корп.", "Лаб", "M-206", "Леонов Ю.Е."),
	new para(times[4],"Информатизация маркет. деятельности в корп.", "Лаб", "M-206", "Леонов Ю.Е."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var tuesday_1=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Трудовое право", "Лекция","М-728","Озеров В.С."),
	new para(times[3],"Предметно - ориентированные эк. инф. сист.","Лаб","М-722","Пономарев С.Е."),
	new para(times[4],"Предметно - ориентированные эк. инф. сист.","Лаб","М-722","Пономарев С.Е."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var wednesday_1=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"Трудовое право", "Практика","М-612","Озеров В.С."),
	new para(times[3],"Проектирование информационных систем", "Практика","М-408", "Чиркова М.Ю."), 	
	new para(times[4],"Проектирование информационных систем", "Лекция","М-415", "Соколов Р.В."), 
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var thursday_1=new day
(
	new para(times[1],"", "","",""), 
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""), 
	new para(times[4],"Предметно - ориентрированные эк. инф. сист.", "Лекция","М-518","Пономарев С.Е."), 
	new para(times[5],"Проектирование и эксплуатация эк. корп. ИС", "Лекция","М-504","Фомин В.И."), 
	new para(times[6],"Информатизация маркет. деятельности в корп.", "Лекция","М-709","Пономарев В.В.")
)
var friday_1=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"","","",""),
	new para(times[3],"","","",""),
	new para(times[4],"Интеллектуальные информационные системы","Лекция","М-604","Иванов С.А."),
	new para(times[5],"Сетевая экономика", "Лекция","М-518","Бугорский В.Н."),
	new para(times[6],"Сетевая экономика", "Практика","М-704","Бугорский В.Н.")
)
var saturday_1=new day
(
	new para(times[1],"Интеллектуальные информационные системы","Лаб","М-203","Иванов С.А."),
	new para(times[2],"Интеллектуальные информационные системы","Лаб","М-203","Иванов С.А."),
	new para(times[3],"", "","",""), 
	new para(times[4],"", "","",""), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
)					
var monday_2=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"Сетевая экономика", "Лаб","М-206","Андреевский И.Л."), 
	new para(times[4],"Сетевая экономика", "Лаб","М-206","Андреевский И.Л."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var tuesday_2=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Трудовое право", "Лекция","М-709","Озеров В.С."), 
	new para(times[3],"","","",""), 
	new para(times[4],"","","",""), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
)
var wednesday_2=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""), 
	new para(times[4],"Проектирование информационных систем", "Лекция","М-415", "Соколов Р.В."),  
	new para(times[5],"Проектирование информационных систем", "Лаб","М-722", "Чиркова М.Ю."), 
	new para(times[6],"Проектирование информационных систем", "Лаб","М-722", "Чиркова М.Ю.")
)
var thursday_2=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"Предметно - ориентированные эк. инф. сист.", "Практика","М-415","Пономарев С.Е."),
	new para(times[4],"Предметно - ориентированные эк. инф. сист.", "Лекция","М-728","Пономарев С.Е."), 
	new para(times[5],"Проектирование и эксплуатация эк. корп. ИС", "Лекция","М-604","Фомин В.И."), 
	new para(times[6],"", "","","")
)
var friday_2=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Интеллектуальные информационные системы","Практика","М-408","Иванов С.А."),
	new para(times[3],"Интеллектуальные информационные системы","Лекция","М-518","Иванов С.А."),
	new para(times[4],"Интеллектуальные информационные системы","Лекция","М-604","Иванов С.А."),
	new para(times[5],"Сетевая экономика", "Лекция","М-518","Бугорский В.Н."), 
	new para(times[6],"", "","","")
)
var saturday_2=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"","","",""), 
	new para(times[4],"", "","",""), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
);

//--------------- 372 ----------------

var monday_3=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"","","",""),
	new para(times[3],"Проектирование информационных систем", "Лаб","М-722", "Чиркова М.Ю."),
	new para(times[4],"Проектирование информационных систем", "Лаб","М-722", "Чиркова М.Ю."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var tuesday_3=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Трудовое право", "Лекция","М-728","Озеров В.С."),
	new para(times[3],"Сетевая экономика", "Лаб","Мс-4","Андреевский И.Л."),
	new para(times[4],"Сетевая экономика", "Лаб","Мс-4","Андреевский И.Л."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var wednesday_3=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"", "","",""), 	
	new para(times[4],"Проектирование информационных систем", "Лекция","М-415", "Соколов Р.В."), 
	new para(times[5],"Информатизация маркет. деятельности в корп.", "Лаб", "M-203", "Леонов Ю.Е."),
	new para(times[6],"Информатизация маркет. деятельности в корп.", "Лаб", "M-203", "Леонов Ю.Е.")
)
var thursday_3=new day
(
	new para(times[1],"", "","",""), 
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""), 
	new para(times[4],"Предметно - ориентрированные эк. инф. сист.", "Лекция","М-518","Пономарев С.Е."), 
	new para(times[5],"Проектирование и эксплуатация эк. корп. ИС", "Лекция","М-504","Фомин В.И."), 
	new para(times[6],"Информатизация маркет. деятельности в корп.", "Лекция","М-709","Пономарев В.В.")
)
var friday_3=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"","","",""),
	new para(times[3],"Интеллектуальные информационные системы","Практика","М-604","Иванов С.А."),
	new para(times[4],"Интеллектуальные информационные системы","Лекция","М-604","Иванов С.А."),
	new para(times[5],"Сетевая экономика", "Лекция","М-518","Бугорский В.Н."),
	new para(times[6],"","","","")
)
var saturday_3=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"","","",""),
	new para(times[3],"","","",""), 
	new para(times[4],"","","",""), 
	new para(times[5],"","","",""), 
	new para(times[6],"","","","")
)					
var monday_4=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"Предметно - ориентированные эк. инф. сист.", "Лаб","М-204","Пономарев С.Е."), 
	new para(times[4],"Предметно - ориентированные эк. инф. сист.", "Лаб","М-204","Пономарев С.Е."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var tuesday_4=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Трудовое право", "Лекция","М-709","Озеров В.С."), 
	new para(times[3],"Проектирование и эксплуатация эк. корп. ИС","Лаб","М-722","Аминов Х.И."), 
	new para(times[4],"Проектирование и эксплуатация эк. корп. ИС","Лаб","М-722","Аминов Х.И."), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
)
var wednesday_4=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"Трудовое право", "Практика","М-612","Озеров В.С."), 
	new para(times[3],"Проектирование информационных систем", "Практика","М-510", "Чиркова М.Ю."), 
	new para(times[4],"Проектирование информационных систем", "Лекция","М-415", "Соколов Р.В."),  
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
)
var thursday_4=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""),
	new para(times[4],"Предметно - ориентированные эк. инф. сист.", "Лекция","М-728","Пономарев С.Е."), 
	new para(times[5],"Проектирование и эксплуатация эк. корп. ИС", "Лекция","М-604","Фомин В.И."), 
	new para(times[6],"", "","","")
)
var friday_4=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"Интеллектуальные информационные системы","Лекция","М-518","Иванов С.А."),
	new para(times[4],"Интеллектуальные информационные системы","Лекция","М-604","Иванов С.А."),
	new para(times[5],"Сетевая экономика", "Лекция","М-518","Бугорский В.Н."), 
	new para(times[6],"Сетевая экономика", "Практика","М-704","Бугорский В.Н.")
)
var saturday_4=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"Интеллектуальные информационные системы","Лаб","М-203","Иванов С.А."), 
	new para(times[4],"Интеллектуальные информационные системы","Лаб","М-203","Иванов С.А."), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
);

//--------------- 373 ----------------

var monday_5=new day
(
	new para(times[1],"Сетевая экономика", "Лаб","М-204","Андреевский И.Л."),
	new para(times[2],"Сетевая экономика", "Лаб","М-204","Андреевский И.Л."),
	new para(times[3],"", "","",""),
	new para(times[4],"", "","",""),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var tuesday_5=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Трудовое право", "Лекция","М-728","Озеров В.С."),
	new para(times[3],"Информатизация маркет. деятельности в корп.", "Лаб", "Mс-2", "Леонов Ю.Е."),
	new para(times[4],"Информатизация маркет. деятельности в корп.", "Лаб", "Mс-2", "Леонов Ю.Е."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var wednesday_5=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"", "","",""), 	
	new para(times[4],"Проектирование информационных систем", "Лекция","М-415", "Соколов Р.В."), 
	new para(times[5],"Проектирование и эксплуатация эк. корп. ИС","Лаб","М-204","Аминов Х.И."),
	new para(times[6],"Проектирование и эксплуатация эк. корп. ИС","Лаб","М-204","Аминов Х.И.")
)
var thursday_5=new day
(
	new para(times[1],"", "","",""), 
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""), 
	new para(times[4],"Предметно - ориентрированные эк. инф. сист.", "Лекция","М-518","Пономарев С.Е."), 
	new para(times[5],"Проектирование и эксплуатация эк. корп. ИС", "Лекция","М-504","Фомин В.И."), 
	new para(times[6],"Информатизация маркет. деятельности в корп.", "Лекция","М-709","Пономарев В.В.")
)
var friday_5=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Интеллектуальные информационные системы","Практика","М-507","Иванов С.А."),
	new para(times[3],"Сетевая экономика", "Практика","М-720","Бугорский В.Н."),
	new para(times[4],"Интеллектуальные информационные системы","Лекция","М-604","Иванов С.А."),
	new para(times[5],"Сетевая экономика", "Лекция","М-518","Бугорский В.Н."),
	new para(times[6],"","","","")
)
var saturday_5=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"Интеллектуальные информационные системы","Лаб","М-206","Иванов С.А."), 
	new para(times[4],"Интеллектуальные информационные системы","Лаб","М-206","Иванов С.А."), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
)					
var monday_6=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"Проектирование информационных систем", "Лаб","М-722", "Чиркова М.Ю."), 
	new para(times[4],"Проектирование информационных систем", "Лаб","М-722", "Чиркова М.Ю."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var tuesday_6=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Трудовое право", "Лекция","М-709","Озеров В.С."), 
	new para(times[3],"Предметно - ориентированные эк. инф. сист.", "Лаб","М-722","Пономарев С.Е."), 
	new para(times[4],"Предметно - ориентированные эк. инф. сист.", "Лаб","М-722","Пономарев С.Е."), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
)
var wednesday_6=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"Проектирование информационных систем", "Практика","М-702", "Чиркова М.Ю."), 
	new para(times[3],"Трудовое право", "Практика","М-612","Озеров В.С."), 
	new para(times[4],"Проектирование информационных систем", "Лекция","М-415", "Соколов Р.В."),  
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
)
var thursday_6=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""),
	new para(times[4],"Предметно - ориентированные эк. инф. сист.", "Лекция","М-728","Пономарев С.Е."), 
	new para(times[5],"Проектирование и эксплуатация эк. корп. ИС", "Лекция","М-604","Фомин В.И."), 
	new para(times[6],"", "","","")
)
var friday_6=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"Предметно - ориентированные эк. инф. сист.", "Практика","М-504","Пономарев С.Е."),
	new para(times[3],"Интеллектуальные информационные системы","Лекция","М-518","Иванов С.А."),
	new para(times[4],"Интеллектуальные информационные системы","Лекция","М-604","Иванов С.А."),
	new para(times[5],"Сетевая экономика", "Лекция","М-518","Бугорский В.Н."), 
	new para(times[6],"", "","","")
)
var saturday_6=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""), 
	new para(times[4],"", "","",""), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
);

//--------------- 3571 ---------------

var monday_7=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"","","",""),
	new para(times[3],"Модели оценки инвестиционных проектов", "Практика", "M-414", "Кудрявцев А.А."),
	new para(times[4],"Модели оценки инвестиционных проектов", "Лекция", "M-604", "Кудрявцев А.А."),
	new para(times[5],"Модели оценки инвестиционных проектов", "Лаб","М-206","Кудрявцев А.А."),
	new para(times[6],"Модели оценки инвестиционных проектов", "Лаб","М-206","Кудрявцев А.А.")
)
var tuesday_7=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"","","",""),
	new para(times[3],"","","",""),
	new para(times[4],"Теория риска и модел. рисковых ситуаций", "Лекция", "M-510", "Ватник П.А."),
	new para(times[5],"Теория риска и модел. рисковых ситуаций", "Лекция","М-510","Ватник П.А."),
	new para(times[6],"", "","","")
)
var wednesday_7=new day
(
	new para(times[1],"Институциональная экономика", "Лекция","М-510","Еникеева Л.А."),
	new para(times[2],"Теория оптимального управления", "Практика","М-510","Моисеенко Т.С."),
	new para(times[3],"Теория оптимального управления", "Практика","М-510","Моисеенко Т.С."), 	
	new para(times[4],"", "","",""),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var thursday_7=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"Экономика фирмы", "Практика","Мс-310","Олейник Н.М."),
	new para(times[4],"Экономика фирмы", "Лекция","Мс-204","Олейник Н.М."),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)
var friday_7=new day
(
	new para(times[1],"","","",""),
	new para(times[2],"","","",""),
	new para(times[3],"","","",""),
	new para(times[4],"Финансовый менеджмент","Лекция","М-510","Ичкитидзе Ю.Р."),
	new para(times[5],"Финансовый менеджмент","Практика","М-510","Ичкитидзе Ю.Р."),
	new para(times[6],"","","","")
)
var saturday_7=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"", "","",""),
	new para(times[4],"", "","",""),
	new para(times[5],"", "","",""),
	new para(times[6],"", "","","")
)					
var monday_8=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"", "","",""), 
	new para(times[4],"Модели оценки инвестиционных проектов", "Лекция", "M-604", "Кудрявцев А.А."),
	new para(times[5],"Теория риска и модел. рисковых ситуаций", "Практика","М-504","Ватник П.А."),
	new para(times[6],"", "","","")
)
var tuesday_8=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""), 
	new para(times[4],"Теория риска и модел. рисковых ситуаций", "Лекция","М-510","Ватник П.А."), 
	new para(times[5],"Теория риска и модел. рисковых ситуаций", "Практика","М-510","Ватник П.А."),
	new para(times[6],"", "","","")
)
var wednesday_8=new day
(
	new para(times[1],"Институциональная экономика", "Лекция","М-510","Еникеева Л.А."),
	new para(times[2],"Институциональная экономика", "Практика","М-510","Еникеева Л.А."),
	new para(times[3],"Теория оптимального управления", "Лекция","Мс-313","Моисеенко Т.С."),
	new para(times[4],"Теория оптимального управления", "Лекция","Мс-313","Моисеенко Т.С."),
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
)
var thursday_8=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""),
	new para(times[4],"Экономика фирмы", "Лекция","Мс-204","Олейник Н.М."), 
	new para(times[5],"Финансовый менеджмент","Лаб","Мс-5","Ичкитидзе Ю.Р."),
	new para(times[6],"Финансовый менеджмент","Лаб","Мс-5","Ичкитидзе Ю.Р.")
)
var friday_8=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""),
	new para(times[3],"", "","",""),
	new para(times[4],"Финансовый менеджмент","Лекция","М-510","Ичкитидзе Ю.Р."),
	new para(times[5],"Финансовый менеджмент","Практика","М-510","Ичкитидзе Ю.Р."),
	new para(times[6],"", "","","")
)
var saturday_8=new day
(
	new para(times[1],"", "","",""),
	new para(times[2],"", "","",""), 
	new para(times[3],"", "","",""), 
	new para(times[4],"", "","",""), 
	new para(times[5],"", "","",""), 
	new para(times[6],"", "","","")
);


//-------------------------------------
var auth_key
var viewer_id
VK.init(function() {
	VK.callMethod('scrollWindow', 68)
	var parts=document.location.search.substr(1).split("&");
	var flashVars={}, curr;
	var viewer_group="no group"
	for (i=0; i<parts.length; i++)
	{
		curr = parts[i].split('=');
		flashVars[curr[0]] = curr[1];
	}
	auth_key = flashVars['auth_key'];
	viewer_id = flashVars['viewer_id'];
	/*
	VK.api("getGroups", function(data)
		{			
			for(var i=0; i<=data.response.length;i++)
			{
				switch(data.response[i])
				{							
					case 482775:setCookie('group', 371), sl(0, 371), load_mes(371),base(viewer_id, auth_key)
					break;
					case 300255,15895805:setCookie('group', 372), sl(1, 372), load_mes(372),base(viewer_id, auth_key)
					break;
					case 929251: setCookie('group', 373), sl(2, 373), load_mes(373),base(viewer_id, auth_key)
					break;
					case 292588: setCookie('group', 3571), sl(3, 3571), load_mes(3571),base(viewer_id, auth_key)
					break;
                    default: sl(0, 371)
				}						
			}
            base(viewer_id, auth_key)
		})
        */
	
})
	var loc = document.location.href.length
	if(document.location.href.length<100){
		$("#tabs-2").css({"height": $(document).height()-230})
		$("#funci").css({"margin-top":(($(document).height()-880)/2)}).draggable()
	} else{
		$("#tabs-2").css({"height": $(document).height()-250})
		$("#funci").css({"margin-top":(($(document).height()-860)/2)}).draggable()
	};
	$("#star").button({ icons: {primary:'ui-icon-script'} }).click(function(){
		$("#uved").dialog("open")
	})
	$("#info_but").button({ icons: {primary:'ui-icon-help'} }).click(function()	{
		$("#info").dialog("open")
	})
	$("#info").dialog({
		modal:true,
		autoOpen:false,
		width:800,
		height:760,
		title:'Основные функции приложения',
		show: "blind",
		hide: "blind",
		speed:'fast'
	})
	$.datepicker.setDefaults($.extend($.datepicker.regional["ru"]));
	var today = new Date().getDay();
    console.log(today);
    var day = today==7? 30: 22+today;

    $("#datepicker").datepicker({
		minDate:new Date("02/01/2010"),maxDate:new Date("05/29/2011"), dateFormat: 'mm/dd/yy',
		onSelect:function(dateText) {
			if($(".no").length==0)				
				weeky(dateText)
		}
	});


	$("#datepicker .ui-datepicker-week-end:odd:not(:first, .ui-datepicker-other-month, .ui-datepicker-today)").livequery(function() {
		$(this).addClass("ui-datepicker-unselectable ui-state-disabled");
		var day=$(this).children("a").text()
		if(day!=="")
		{
			$(this).children("a").remove()
			$(this).append("<span class=ui-state-default>"+day+"</span>")
		}
	})
	$("#datepicker .ui-datepicker-week-end .ui-datepicker-today").livequery(function()	{
		$(this).addClass("ui-datepicker-ui-state-disabled");
		var day=$(this).find("a").text()
		if(day!=="")
		{
			$(this).children("a").remove()
			$(this).append("<span class=ui-state-default>"+day+"</span>")
		}
	})
	$(".ui-accordion-content-prep").livequery(function()	{
		switch($(this).children("p").text())
		{
			case "Соколов Р.В.":swool.call($(this),"sokolov");				
			break;
			case "Андреевский И.Л.":swool.call($(this),"andreevskiy");
			break;
			case "Пономарев С.Е.":swool.call($(this),"ponomarev");							
			break;
			case "Чиркова М.Ю." :swool.call($(this),"chirikova")
			break;
			case "Бугорский В.Н.":swool.call($(this),"bugorsky");				
			break;
			case "Фомин В.И.":swool.call($(this),"fomin");				
			break;
			case "Озеров В.С.":swool.call($(this),"ozerov");				
			break;
			case "Ватник П.А.":swool.call($(this),"vatnik");				
			break;
			case "Еникеева Л.А.":swool.call($(this),"enikeeva");				
			break;
			case "Моисеенко Т.С.":swool.call($(this),"moiseenko");				
			break;
			case "Олейник Н.М.":swool.call($(this),"oley");				
			break;
			case "Ичкитидзе Ю.Р.":swool.call($(this),"itchkitidze");				
			break;
			case "":
			break
			default:swool.call($(this),"no")
			break		
		}
	})			
	$("#tabs").tabs({
		fx: { opacity: 'toggle' }
	}).css("width", $(document).width());
	$('#week').accordion({autoHeight: false, active:sixteen(), animated: 'bounceslide'}).css("float","left");
	$("#week_tog").buttonset();
	
	$("#gr_tog").buttonset();
	$("#tip").buttonset();	
	$("#tabs").css("height", height)
	$("#tabs").css("width", width)
	if(loc>100)	{
		$("#week").css("width", width-40)
		$("#datepicker").css({"position":"absolute", "bottom":"0px"})
	}	else{
		$("#week").css("width", 0.7*width)
	}
	$("#radio1").addClass('ui-corner-left').click(function(){
		firweek(new Date(),$("#gr_tog>label.ui-state-active>span").text())
		$("#datepicker").datepicker("setDate", new Date())
	})
	$("#radio2").click(function(){
		secweek(new Date(), $("#gr_tog>label.ui-state-active>span").text())
		$("#datepicker").datepicker("setDate", new Date())
	})
	$("#gr_tog").click(function(event)	{
		if($("#adv").css("display")=="block")
		{
			$("#adv").css("display","none")
		}
		var elem = $(event.target)
		if (elem.hasClass("371"))
		{
			check_gr("371")	
			load_mes('371')				
		}
		if (elem.hasClass("372"))
		{
			check_gr("372")	
			load_mes('372')					
		}
		if (elem.hasClass("373"))
		{
			check_gr("373")	
			load_mes('373')					
		}
		if (elem.hasClass("3571"))
		{
			check_gr("3571")
			load_mes('3571')						
		}
	})
function base (viewer_id, auth_key){
	VK.api("getProfiles", {uids:viewer_id,fields:"first_name,last_name,nickname,city" }, function(data)
	{
		var viewer_name
		var viewer_name1=data.response[0].first_name
		var viewer_name2=data.response[0].nickname
		var viewer_name3=data.response[0].last_name		
		if(viewer_name2!=='')
		{
			viewer_name=(viewer_name1+' '+viewer_name2+' '+viewer_name3)
		}
		else
		{
			viewer_name=(viewer_name1+' '+viewer_name3)
		}
		setCookie('viewer_name', viewer_name)
		var viewer_city=data.response[0].city
		VK.api("places.getCityById", {"cids":viewer_city}, function(data)
		{
			var city=data.response[0].name
			setCookie('city', city)
		})
		statis(viewer_id, auth_key)
	})
}

function statis(viewer_id, auth_key){
	$.post('sql/stat.php', 
	{
		"viewer_id": viewer_id,
		"auth_key": auth_key,
		"viewer_name": getCookie('viewer_name'),
		"viewer_city": getCookie('city'),
		"viewer_group":getCookie('group')
	}, function(data)
	{
	})
};
function week(m,t,w,th,f,s) {
	this.m=m,
	this.t=t,
	this.w=w,
	this.th=th,
	this.f=f,
	this.s=s			
}
function day (first, second, third, fourth, five, six) {
	this.first=first,
	this.second=second,
	this.third=third,
	this.fourth=fourth,
	this.five=five,
	this.six=six
	this.table=function(curr) {
		return "<table class='ui-accordion-content-table'>\
					<tr>\
						<td align='center' class=' ui-state-default ui-corner-top'>\
							<span class='ui-icon ui-icon-clock'></span>\
						</td>\
						<td align='center' class=' ui-state-default ui-corner-top'>\
							<span class='ui-icon ui-icon-bookmark'></span>\
						</td>\
						<td align='center' class=' ui-state-default ui-corner-top'>\
							<span class='ui-icon ui-icon-tag'></span>\
						</td>\
						<td align='center' class='ui-state-default ui-corner-top'>\
							<span class='ui-icon ui-icon-home'></span>\
						</td>\
						<td align='center' class='ui-state-default ui-corner-top'>\
							<span class='ui-icon ui-icon-person'></span>\
						</td>\
					</tr>"+this.first.tab(curr)+this.second.tab(curr)+this.third.tab(curr)+this.fourth.tab(curr)+this.five.tab(curr)+this.six.tab(curr)+"</table>"
	}
}
function para (time,predmet, type, kab, prepod) {
	this.time=time,
	this.predmet=predmet,
	this.type=type,
	this.kab=kab,
	this.prepod=prepod,
	this.tab=tab,
	this.check_date=check_date
}

function check_date(curr) {
	var a
	var b
	var c
	if ($("#gr_tog>label.ui-state-active>span").text()=="371")	{
		if(this.type=="Практика")
			{
				switch(this.predmet)
				{
					case "Предметно - ориентированные эк. инф. сист.":							
						a=(
						curr>new Date('02/19/2011') & curr<new Date('04/10/2011')
						)
					break;
					default:a=1
				}					
			}				
			else if(this.type=="Лаб")
			{
				switch(this.predmet)
				{
					case "Предметно - ориентированные эк. инф. сист.":
						a=(
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')
						)
						b=(
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('06/04/2011') & curr<new Date('06/12/2011')
						)
						c=(
						curr>new Date('02/12/2011') & curr<new Date('02/20/2011')|
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/07/2011') & curr<new Date('05/15/2011')
						)	
					break;
					case "Информатизация маркет. деятельности в корп.":
						a=(
						curr>new Date('02/12/2011') & curr<new Date('02/20/2011')|
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')
						)
						b=(
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('06/04/2011') & curr<new Date('06/12/2011')
						)
					break;
					case "Сетевая экономика":
						a=(
						curr>new Date('02/19/2011') & curr<new Date('02/27/2011')|
						curr>new Date('03/19/2011') & curr<new Date('03/27/2011')|
						curr>new Date('04/16/2011') & curr<new Date('04/24/2011')|
						curr>new Date('05/14/2011') & curr<new Date('05/22/2011')									
						)
						b=(
						curr>new Date('03/05/2011') & curr<new Date('03/13/2011')|
						curr>new Date('04/02/2011') & curr<new Date('04/10/2011')|
						curr>new Date('04/30/2011') & curr<new Date('05/08/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/05/2011')									
						)
					break;
					case "Интеллектуальные информационные системы":
						a=(
						curr>new Date('02/12/2011') & curr<new Date('02/20/2011')|
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/07/2011') & curr<new Date('05/15/2011')						
						)
						b=(
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')
						)
					break;
					case "Проектирование информационных систем":
						a=(
						curr>new Date('03/05/2011') & curr<new Date('03/13/2011')|
						curr>new Date('04/02/2011') & curr<new Date('04/10/2011')|
						curr>new Date('04/30/2011') & curr<new Date('05/08/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/05/2011')						
						)
						b=(
						curr>new Date('03/19/2011') & curr<new Date('03/27/2011')|
						curr>new Date('04/16/2011') & curr<new Date('04/24/2011')|
						curr>new Date('05/14/2011') & curr<new Date('05/22/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/05/2011')						
						)
					break;
					
					default:a=1
				}
			}
			else{a=1}
			if (a!==1)
			{
				if (b==1)
				{
					a=2
				}
				else if(a!==1&b!==1 & c==1)
				{
					a=5
				}
				else
				{
					a=0
				}
				return a
			}			
			else
			{
				return a
			}
	}
	if ($("#gr_tog>label.ui-state-active>span").text()=="372")	{
		if(this.type=="Лаб")
			{
				switch(this.predmet)
				{
					case "Предметно - ориентированные эк. инф. сист.":
						a=(
						curr>new Date('04/16/2011') & curr<new Date('04/24/2011')|
						curr>new Date('05/14/2011') & curr<new Date('05/22/2011')
						)
						b=(
						curr>new Date('04/30/2011') & curr<new Date('05/08/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/05/2011')
						)
						c=(
						curr>new Date('02/19/2011') & curr<new Date('03/27/2011')
						)	
					break;
					case "Проектирование и эксплуатация эк. корп. ИС":
						a=(
						curr>new Date('02/19/2011') & curr<new Date('02/27/2011')|
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/16/2011') & curr<new Date('04/24/2011')|
						curr>new Date('05/14/2011') & curr<new Date('05/22/2011')
						)
					break;
					case "Информатизация маркет. деятельности в корп.":
						a=(
						curr>new Date('02/12/2011') & curr<new Date('02/20/2011')|
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/07/2011') & curr<new Date('05/15/2011')
						)
						b=(
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')
						)
					break;
					case "Сетевая экономика":
						a=(
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')									
						)
						b=(
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/07/2011') & curr<new Date('05/15/2011')|
						curr>new Date('06/04/2011') & curr<new Date('06/12/2011')									
						)
					break;
					case "Интеллектуальные информационные системы":
						a=(
						curr>new Date('02/19/2011') & curr<new Date('02/27/2011')|
						curr>new Date('03/19/2011') & curr<new Date('03/27/2011')|
						curr>new Date('04/16/2011') & curr<new Date('04/24/2011')|
						curr>new Date('05/14/2011') & curr<new Date('05/22/2011')						
						)
						b=(
						curr>new Date('03/05/2011') & curr<new Date('03/13/2011')|
						curr>new Date('04/02/2011') & curr<new Date('04/10/2011')|
						curr>new Date('04/30/2011') & curr<new Date('05/08/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/05/2011')
						)
					break;
					case "Проектирование информационных систем":
						a=(
						curr>new Date('02/12/2011') & curr<new Date('02/20/2011')|
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')
						)
						b=(
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('06/04/2011') & curr<new Date('06/12/2011')						
						)
					break;
					default:a=1
				}
			}
			else{a=1}
			if (a!==1)
			{
				if (b==1)
				{
					a=2
				}
				else if(b!==1 & c==1)
				{
					a=6
				}
				else
				{
					a=0
				}
				return a
			}
			
			else
			{
				return a
			}
			return a
	}
	if ($("#gr_tog>label.ui-state-active>span").text()=="373")	{
		if(this.type=="Практика")
			{
				switch(this.predmet)
				{
					case "Предметно - ориентированные эк. инф. сист.":							
						a=(
						curr>new Date('02/05/2011') & curr<new Date('03/27/2011')
						)
					break;
					default:a=1
				}					
			}				
			else if(this.type=="Лаб")
			{
				switch(this.predmet)
				{
					case "Предметно - ориентированные эк. инф. сист.":
						a=(
						curr>new Date('04/02/2011') & curr<new Date('04/10/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/25/2011')
						)
						b=(
						curr>new Date('04/30/2011') & curr<new Date('05/08/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/05/2011')
						)	
					break;
					case "Проектирование и эксплуатация эк. корп. ИС":
						a=(
						curr>new Date('02/12/2011') & curr<new Date('02/20/2011')|
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/07/2011') & curr<new Date('05/15/2011')
						)
						b=10
					break;
					case "Информатизация маркет. деятельности в корп.":
						a=(
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')									
						)
						b=(
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/07/2011') & curr<new Date('05/15/2011')|
						curr>new Date('06/04/2011') & curr<new Date('06/12/2011')
						)
					break;
					case "Сетевая экономика":
						a=(
						curr>new Date('02/12/2011') & curr<new Date('02/20/2011')|
						curr>new Date('03/12/2011') & curr<new Date('03/20/2011')|
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')
						)
						b=(
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('06/04/2011') & curr<new Date('06/12/2011')									
						)
					break;
					case "Интеллектуальные информационные системы":
						a=(
						curr>new Date('02/12/2011') & curr<new Date('02/20/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')						
						)
						b=(
						curr>new Date('04/09/2011') & curr<new Date('04/17/2011')|
						curr>new Date('05/07/2011') & curr<new Date('05/15/2011')|
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('05/21/2011') & curr<new Date('05/29/2011')
						)
					break;
					case "Проектирование информационных систем":
						a=(
						curr>new Date('03/05/2011') & curr<new Date('03/13/2011')|
						curr>new Date('04/02/2011') & curr<new Date('04/10/2011')|
						curr>new Date('04/30/2011') & curr<new Date('05/08/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/05/2011')									
						)
						b=(
						curr>new Date('02/19/2011') & curr<new Date('02/27/2011')|
						curr>new Date('03/19/2011') & curr<new Date('03/27/2011')|
						curr>new Date('04/16/2011') & curr<new Date('04/24/2011')|
						curr>new Date('05/14/2011') & curr<new Date('05/22/2011')									
						)
						
					break;
					default:a=1
				}
			}
			else{a=1}
			if (a!==1)
			{
				if (b==1)
				{
					a=2
				}
				else
				{
					a=0
				}
				return a
			}
			
			else
			{
				return a
			}
			return a
	}
	if ($("#gr_tog>label.ui-state-active>span").text()=="3571")	{
			if(this.type=="Лаб")
			{
				switch(this.predmet)
				{
					case "Финансовый менеджмент":
						
						b=(
						curr>new Date('03/05/2011') & curr<new Date('03/13/2011')|
						curr>new Date('04/02/2011') & curr<new Date('04/10/2011')|
						curr>new Date('04/30/2011') & curr<new Date('05/08/2011')|
						curr>new Date('05/28/2011') & curr<new Date('06/05/2011')
						)						
					break;
					case "Модели оценки инвестиционных проектов":
						b=(
						curr>new Date('02/26/2011') & curr<new Date('03/06/2011')|
						curr>new Date('03/26/2011') & curr<new Date('04/03/2011')|
						curr>new Date('04/23/2011') & curr<new Date('05/01/2011')|
						curr>new Date('06/04/2011') & curr<new Date('06/12/2011')
						)		
					break;
					default:a=1
				}
			}
			else{a=1}
			if (a!==1)
			{
				if (b==1)
				{
					a=2
				}
				else
				{
					a=0
				}
				return a
			}
			
			else
			{
				return a
			}
			return a
	}
}
function tab (curr){
	if (this.predmet!=="")
	{
		if(this.check_date(curr)=="5")
		{
			return "<tr class=''><td class='ui-accordion-content-time ui-corner-all'><p>"+this.time+"<p></td><td class='ui-accordion-content-predmet ui-corner-all'><p>Проектирование и эксплуатация эк. корп. ИС</p></td><td class='ui-accordion-content-typ ui-corner-all'><p>"+this.type+"</p></td><td class='ui-accordion-content-kab ui-corner-all'><p>"+this.kab+"</p></td><td class='ui-accordion-content-prep ui-corner-all'><p>Аминов Х.И.</p></td></tr>"
		}
		if(this.check_date(curr)=="6")
		{
			return "<tr class=''><td class='ui-accordion-content-time ui-corner-all'><p>"+this.time+"<p></td><td class='ui-accordion-content-predmet ui-corner-all'><p>"+this.predmet+"</p></td><td class='ui-accordion-content-typ ui-corner-all'><p>Практика</p></td><td class='ui-accordion-content-kab ui-corner-all'><p>"+this.kab+"</p></td><td class='ui-accordion-content-prep ui-corner-all'><p>"+this.prepod+"</p></td></tr>"
		}
		if(this.check_date(curr)=="2")
		{
			return "<tr class=''><td class='ui-accordion-content-time ui-corner-all'><p>"+this.time+"<p></td><td class='ui-accordion-content-predmet ui-corner-all grb'><p>"+this.predmet+"</p></td><td class='ui-accordion-content-typ ui-corner-all grb'><p>"+this.type+" ('Б')</p></td><td class='ui-accordion-content-kab ui-corner-all'><p>"+this.kab+"</p></td><td class='ui-accordion-content-prep ui-corner-all'><p>"+this.prepod+"</p></td></tr>"
		}

		if(this.check_date(curr)=="1" & this.type!=='Лаб')
		{
			return "<tr><td class='ui-accordion-content-time ui-corner-all'><p>"+this.time+"<p></td><td class='ui-accordion-content-predmet ui-corner-all'><p>"+this.predmet+"</p></td><td class='ui-accordion-content-typ ui-corner-all'><p>"+this.type+"</p></td><td class='ui-accordion-content-kab ui-corner-all'><p>"+this.kab+"</p></td><td class='ui-accordion-content-prep ui-corner-all'><p>"+this.prepod+"</p></td></tr>"
		}
		if(this.check_date(curr)=="1" & this.type=='Лаб')
		{
			return "<tr class=''><td class='ui-accordion-content-time ui-corner-all'><p>"+this.time+"<p></td><td class='ui-accordion-content-predmet ui-corner-all grb'><p>"+this.predmet+"</p></td><td class='ui-accordion-content-typ ui-corner-all gra'><p>"+this.type+" ('А')</p></td><td class='ui-accordion-content-kab ui-corner-all'><p>"+this.kab+"</p></td><td class='ui-accordion-content-prep ui-corner-all'><p>"+this.prepod+"</p></td></tr>"
		}
		if(this.check_date(curr)=="0")
		{
			return "<tr><td class='ui-accordion-content-time ui-datepicker-unselectable ui-state-disabled ui-corner-all'>"+this.time+"</td><td class='ui-accordion-content-predmet ui-corner-all ui-datepicker-unselectable ui-state-disabled'><p>"+this.predmet+"</p></td><td class='ui-accordion-content-typ ui-corner-all ui-datepicker-unselectable ui-state-disabled'><p>"+this.type+"</p></td><td class='ui-accordion-content-kab ui-corner-all ui-datepicker-unselectable ui-state-disabled'><p>"+this.kab+"</p></td><td class='ui-accordion-content-prep ui-corner-all ui-datepicker-unselectable ui-state-disabled'><p>"+this.prepod+"</p></td></tr>"
		}
	}
	else
	{
		return "<tr><td class='ui-accordion-content-time ui-datepicker-unselectable ui-state-disabled  ui-corner-all'>"+this.time+"</td><td class='ui-accordion-content-predmet ui-corner-all ui-datepicker-unselectable ui-state-disabled'></td><td class='ui-accordion-content-typ ui-corner-all ui-datepicker-unselectable ui-state-disabled'></td><td class='ui-accordion-content-kab ui-corner-all ui-datepicker-unselectable ui-state-disabled'></td><td class='ui-accordion-content-prep ui-corner-all ui-datepicker-unselectable ui-state-disabled'></td></tr>"
	}
}

function swool(name){
	$(this).tooltip(
	{
		delay: 0,
		track: true,
		left:-150,
		showURL: false,
		fade: 250,
		bodyHandler: function()
		{
			return $("<img/>").attr("src", "images/prepod/"+name+".jpg");
		}
	})
}


function week_tog (dateText){
	for(var o=0; o<8;o++)
	{
		if (dateText.getDay()==0  ) 
		{
			$('#week').accordion("activate", 0)
		}
		else if(dateText.getDay()!==0 && dateText.getDay()==o)
		{
			
			if(dateText.getHours()<=16)
			{
				$('#week').accordion("activate", o-1)
			}
			else
			{
				$('#week').accordion("activate", o)
			}
		}
	}
}
function check_gr(clas){
	if ($("#group").hasClass(clas)){ }
	else
	{
		document.title = "Расписание - "+clas;
		$("#all").slideUp(300);
		weeky("now")
		$("#all").slideDown(300);
	}
	$("#datepicker").datepicker("setDate", new Date())
	$("#group").removeClass()
	$("#group").addClass(clas)						
}
			
function getCookie(name){
	var pattern = "(?:; )?" + name + "=([^;]*);?";
	var regexp  = new RegExp(pattern);	 
	if (regexp.test(document.cookie))
	return decodeURIComponent(RegExp["$1"]);
	return false;
}
function setCookie(name, value, expires, path, domain, secure){
	if (!name || !value) return false;
	var str = name + '=' + encodeURIComponent(value);
	if (expires) str += '; expires=' + expires.toGMTString();
	if (path)    str += '; path=' + path;
	if (domain)  str += '; domain=' + domain;
	if (secure)  str += '; secure';
	document.cookie = str;
	return true;
}
function deleteCookie(name, path, domain){
	setCookie(name, null, new Date(0), path, domain);
	return true;
}
function sl(a,b){
	$("#adv").css("display","none")
	$("#gr_tog>label").eq(a).addClass("ui-state-active")
	$("#gr_tog>label").eq(a).attr("aria-pressed", true)
	setCookie('group',b)
	check_gr(b)
}
function sixteen(){
	if(new Date().getHours()>16)
	{
		var a=new Date().getDay()
	}
	else if(new Date().getHours()<=16)
	{
		a=new Date().getDay()-1
	}					
	return a
}
function firweek (curr,gr){
	switch(gr)
		{
			case "371":
			$("#mon").html(monday_1.table(curr))
			$("#tue").html(tuesday_1.table(curr))
			$("#wed").html(wednesday_1.table(curr))
			$("#thu").html(thursday_1.table(curr))
			$("#fri").html(friday_1.table(curr))
			$("#sat").html(saturday_1.table(curr));
			break;
			case "372":
			$("#mon").html(monday_3.table(curr))
			$("#tue").html(tuesday_3.table(curr))
			$("#wed").html(wednesday_3.table(curr))
			$("#thu").html(thursday_3.table(curr))
			$("#fri").html(friday_3.table(curr))
			$("#sat").html(saturday_3.table(curr));
			break;
			case "373":
			$("#mon").html(monday_5.table(curr))
			$("#tue").html(tuesday_5.table(curr))
			$("#wed").html(wednesday_5.table(curr))
			$("#thu").html(thursday_5.table(curr))
			$("#fri").html(friday_5.table(curr))
			$("#sat").html(saturday_5.table(curr));
			break;
			case "3571":
			$("#mon").html(monday_7.table(curr))
			$("#tue").html(tuesday_7.table(curr))
			$("#wed").html(wednesday_7.table(curr))
			$("#thu").html(thursday_7.table(curr))
			$("#fri").html(friday_7.table(curr))
			$("#sat").html(saturday_7.table(curr));
			break;
		}
}
function secweek (curr,gr){
	switch(gr)
		{
			case "371":
			$("#mon").html(monday_2.table(curr))
			$("#tue").html(tuesday_2.table(curr))
			$("#wed").html(wednesday_2.table(curr))
			$("#thu").html(thursday_2.table(curr))
			$("#fri").html(friday_2.table(curr))
			$("#sat").html(saturday_2.table(curr));
			break;
			case "372":
			$("#mon").html(monday_4.table(curr))
			$("#tue").html(tuesday_4.table(curr))
			$("#wed").html(wednesday_4.table(curr))
			$("#thu").html(thursday_4.table(curr))
			$("#fri").html(friday_4.table(curr))
			$("#sat").html(saturday_4.table(curr));
			break;
			case "373":
			$("#mon").html(monday_6.table(curr))
			$("#tue").html(tuesday_6.table(curr))
			$("#wed").html(wednesday_6.table(curr))
			$("#thu").html(thursday_6.table(curr))
			$("#fri").html(friday_6.table(curr))
			$("#sat").html(saturday_6.table(curr));
			break;
			case "3571":
			$("#mon").html(monday_8.table(curr))
			$("#tue").html(tuesday_8.table(curr))
			$("#wed").html(wednesday_8.table(curr))
			$("#thu").html(thursday_8.table(curr))
			$("#fri").html(friday_8.table(curr))
			$("#sat").html(saturday_8.table(curr));
			break;
		}
}
function weeky(what){
	if(what=='now')
	{
		what = new Date()	
	}
	else
	{
		what=new Date(what)
	}
	for(var i=0; i<=one.length; i=i+2)
	{
		if(what>=new Date(one[i])&what<new Date(one[i+1]))
		{
			firweek(what, $("#gr_tog>label.ui-state-active>span").text())					
			$("#week_tog>label:first").addClass("ui-state-active")
			$("#week_tog>label:first").attr("aria-pressed", true)
			$("#week_tog>label:last").removeClass("ui-state-active")
			$("#week_tog>label:last").attr("aria-pressed", false)
			week_tog(what)	
		}
	}
	for (var j=0; j<=two.length;j=j+2)
	{
		if(what>=new Date(two[j])&what<new Date(two[j+1]))
		{
			secweek(what, $("#gr_tog>label.ui-state-active>span").text())							
			$("#week_tog>label:first").removeClass("ui-state-active")
			$("#week_tog>label:first").attr("aria-pressed", false)	
			$("#week_tog>label:last").addClass("ui-state-active")
			$("#week_tog>label:last").attr("aria-pressed", true)
			week_tog(what)
				
		}
	}
}
var old
var old_date
var old_next
var old_prev
var dis
function mes_btn() {
	$('#for_all_div').show('fade')
	dis=0
	old=$('#mes_from').text()
	old_date=$('#mes_date').text()
	if($('#next_mes').hasClass('dis')) old_next=true; else old_next=false
	if($('#prev_mes').hasClass('dis')) old_prev=true; else old_prev=false
	$('#next_mes, #prev_mes').addClass('dis').unbind()
	$('#list_mes').removeClass('dis').bind('click', list_mes)
	$('#mes_inp').show('fade', 'slow')
	$('#mes_from').text(getCookie('viewer_name')+' | '+' ')
	$('#mes_date').text(' сегодня')
	$('#add_mes').html('Отправить')
	$('#rem_mes').html('Отменить')
	if ($('#rem_mes').hasClass('dis'))
	{
		dis=1
		$('#rem_mes').removeClass('dis').unbind().bind('click', vernemsya)
	}
	$('#rem_mes').unbind().bind('click', vernemsya)
	$('#add_mes').unbind().bind('click', save_mes)
	
}
function vernemsya() {
    $('#for_all_div').hide('fade')
    if(!old_next)$('#next_mes').removeClass('dis').bind('click', next_mes_func)
    if(!old_prev)$('#prev_mes').removeClass('dis').bind('click', prev_mes_func)
    $('#list_mes').removeClass('dis').bind('click', list_mes)
    $('#mes_inp').hide('fade', 'slow')
    $('#mes_from').text(old)
    $('#mes_date').text(old_date)
    $('#add_mes').html('<span class="ui-icon-fff ui-icon-plus"></span>Добавить')
    $('#rem_mes').html('<span class="ui-icon-fff ui-icon-minus"></span>Удалить')
    if(dis==1)
    {
        $('#rem_mes, #izm_mes').addClass('dis').unbind()
    }
    else
    {
        $('#rem_mes').removeClass('dis').bind('click', del_mes)
        $('#izm_mes').removeClass('dis').bind('click', izm_mes)
    }
    $('#add_mes').unbind('click').bind('click', mes_btn)
}
function save_mes()	{
    var text=$('#mes_inp').val()
    if(text=='')
    {
        $('#mes_inp').effect('highlight').focus()
    }
    else
    {
        var groop
        if($('#for_all').attr('checked')|!getCookie('group')){groop=9}
        else{groop=getCookie('group')}
        $.post('sql/stat.php',
        {
            "task":'load_mes',
            "post_body":text,
            "post_gr": groop,
            "post_auth":getCookie('viewer_name')
        }, function(data)
        {
            location.reload()
        })
    }
}
function not_load()	{
    $('#gr_mes_head').html('<p>Ваша группа не определена</p>')
    $('#add_mes, #rem_mes, #izm_mes').addClass('dis').unbind('click')
}
function list_mes()	{
    vernemsya()
    $('#next_mes, #prev_mes, #list_mes, #izm_mes, #rem_mes ').addClass('dis').unbind()
    $('#mes_tbl tr').remove()
    $.post('sql/stat.php',
        {
            "task":'return',
            "list":1,
            "viewer_gr": getCookie('group')
        }, function(data)
        {
            $('#mes_tbl').fadeIn().append(data)
            $('#mes_tbl tr').hover(function()
            {
                $(this).children('td').addClass('hov')
            },
            function()
            {
                $(this).children('td').removeClass('hov')
            }).click(function(event)
            {
                $('#tablid').hide()
                id =$(this).attr('class')
                $('#'+id).fadeIn('slow')
                ind = srch(id)
                j=ind
                $('#next_mes').removeClass('dis').bind('click', next_mes_func)
                $('#prev_mes').removeClass('dis').bind('click', prev_mes_func)
                $('#list_mes').removeClass('dis').bind('click', list_mes)
                if($('.mess').eq(j).children('#gr_mes_menu').children('#mes_from').html()==(getCookie('viewer_name')+' |&nbsp;'))
                    {
                        $('#rem_mes').bind('click', del_mes).removeClass('dis')
                        $('#izm_mes').bind('click', izm_mes).removeClass('dis')
                    }
                    else
                    {
                        $('#rem_mes').unbind('click', del_mes).addClass('dis')
                        $('#izm_mes').unbind('click', izm_mes).addClass('dis')
                    }
                if(j==0) $('#next_mes').addClass('dis')
                if(j==$('.mess').length-1) $('#prev_mes').addClass('dis')

            })
        })
            $('.mess').hide()
            j=0
            $('#next_mes,#prev_mes,#list_mes,#izm_mes ').addClass('dis').unbind()
            $('').addClass('dis').unbind()
            $('').addClass('dis').unbind()
            $('#tablid').fadeIn()


}
function srch(id) {
    for(i=0; i<=$('.mess').length; i++)   {
        if($('.mess').eq(i).attr('id') == id)        {
            return i
        }
    }
}
function load_mes(gr) {
    $('#tablid').fadeOut()
    $('#list_mes').removeClass('dis')
    setCookie('group', gr)
    $('#gr_mes_head').html('<p>Объявления для группы '+getCookie('group')+'</p>')
    $('#add_mes').removeClass('dis')

    $.post('sql/stat.php', {
        "task":'return',
        "viewer_gr": getCookie('group')
    }, function(data) {
        $('.mess').remove()
        j=0
        $('#next_mes').addClass('dis')
        $('#prev_mes').removeClass('dis')
        $('#gr_mes').append(data)
        rr()
    })

}
function del_mes() {
	$.post('sql/stat.php', {
		"task":'del',
		"post_id":$('.mess').eq(j).attr('id')
	}, function(data) {
		location.reload()
	})
}
function izm_mes() {
	$("#mes_inp").show().text($('.mess').eq(j).children('#gr_mes_cont').children("#mes_txt").text()).select()
	
	$('#rem_mes').html('Отменить').unbind().bind('click', vernemsya2)
	$('#izm_mes').html('Сохранить').unbind().bind('click', save_mes2)
	if($('#next_mes').hasClass('dis')) old_next=true; else old_next=false
	if($('#prev_mes').hasClass('dis')) old_prev=true; else old_prev=false
	$('#next_mes, #prev_mes').addClass('dis').unbind()
	$('#list_mes').addClass('dis').unbind()	
	$('#add_mes').addClass('dis').unbind()
}
function vernemsya2() {
    if(!old_next)$('#next_mes').removeClass('dis').bind('click', next_mes_func)
    if(!old_prev)$('#prev_mes').removeClass('dis').bind('click', prev_mes_func)
    $('#list_mes').removeClass('dis').bind('click', list_mes)
    $('#mes_inp').hide('fade', 'slow').text('')
    $('#izm_mes').html('<span class="ui-icon-fff ui-icon-pencil"></span>Редактировать').unbind().bind('click', izm_mes)
    $('#rem_mes').html('<span class="ui-icon-fff ui-icon-minus"></span>Удалить').unbind().bind('click', del_mes)
    $('#add_mes').removeClass('dis').bind('click', mes_btn)
}
function save_mes2() {
    var text=$('#mes_inp').val()
    var id=$('.mess').eq(j).attr('id')
    if(text=='')
    {
        $('#mes_inp').effect('highlight').focus()
    }
    else
    {
        $.post('sql/stat.php',
        {
            "task":"upd_mes",
            "post_body":text,
            "post_id":id
        }, function(data)
        {
            VK.api("secure.saveAppStatus", {'id':Math.rand(), 'status':'New message there'}, function() {
                console.log('yes')
            })

        })
    }
}
function rr() {
	$('.mess').eq(0).show()
	
	if($('.mess').eq(0).children('#gr_mes_menu').children('#mes_from').html()!==(getCookie('viewer_name')+' |&nbsp;'))
	{
		$('#rem_mes').unbind('click', del_mes).addClass('dis')
		$('#izm_mes').unbind('click', izm_mes).addClass('dis')
	}
	else
	{
		$('#rem_mes').removeClass('dis').bind('click', del_mes)
		$('#izm_mes').removeClass('dis').bind('click', izm_mes)
		
	}
	if($('.mess').length<2)
	{
		$('#next_mes, #prev_mes').addClass('dis')
	}
	else
	{
		$('#next_mess').addClass('dis')
	}
}
function next_mes_func () {
	
	var col=$("#gr_mes .mess").length
	if(col<2){}
	else
	{
		if(j===0){}
		else
		{
			$('#prev_mes').removeClass('dis')
			$(this).css('margin-top', '1px')
			setTimeout("$('#next_mes').css('margin-top', '0px')", 100)	
			
			j--;
			$(".mess").fadeOut();
			$(".mess").eq(j).fadeIn();
			if($('.mess').eq(j).children('#gr_mes_menu').children('#mes_from').html()!==(getCookie('viewer_name')+' |&nbsp;')){$('#rem_mes, #izm_mes').addClass('dis').unbind('click')} else{$('#rem_mes').removeClass('dis').bind('click',del_mes); $('#izm_mes').removeClass('dis').bind('click',izm_mes) }			
			if(j===0){$('#next_mes').addClass('dis')}
		}
	}
}
function prev_mes_func () {
	var col=$("#gr_mes .mess").length
	if(col<2){}
	else
	{
		if(j+1==col){}
		else
		{	$('#next_mes').removeClass('dis')
			$(this).css('margin-top', '1px')
			setTimeout("$('#prev_mes').css('margin-top', '0px')", 100)
			
			j++;	
			$(".mess").fadeOut();
			$(".mess").eq(j).fadeIn();
			if($('.mess').eq(j).children('#gr_mes_menu').children('#mes_from').html()!==(getCookie('viewer_name')+' |&nbsp;')){$('#rem_mes, #izm_mes').addClass('dis').unbind('click')} else{$('#rem_mes').removeClass('dis').bind('click', del_mes); $('#izm_mes').removeClass('dis').bind('click',izm_mes)}			
			if(j+1==col){$('#prev_mes').addClass('dis')}
		}
	}
}
    sl(0, 371)
    $("#datepicker").datepicker("setDate", new Date("05/"+day+"/2011"));
    weeky("05/"+day+"/2011");
})
	
