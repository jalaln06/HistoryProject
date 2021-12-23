class HistoryObject {
    constructor(x, y, description, name, date, group, podval) {
        this.location = [x, y];
        this.description = description;
        this.name = name;
        this.date = date;
        this.group = group;
        this.podval = podval;
    }

    getLocation() {
        return this.location;
    }

    getDescription() {
        return this.description;
    }

    getName() {
        return this.name;
    }

    getDate() {
        return this.date;
    }

    getGroup() {
        return this.group;
    }

    getPodval() {
        return this.podval;
    }
}

class MyMap {
    constructor(id) {
        this.id = id;
        this.data = {
            "ARCH": [
                new HistoryObject(
                    64.53614078404169,
                    40.539498088588346,
                    "Сюда пребывает Петр 1 т.к. Архангельск был единственным российским портом имевшим возможность торговать с Европой",
                    "Прибытие Петра 1 в Архангельск",
                    "july 1693",
                    "ARCH",
                    "Тут должна быть дата"
                ),
                new HistoryObject(
                    66.24971247377589,
                    37.4118391422112,
                    "Петр 1 вышел в море на построенном для него корабле \"Святой Петр\" к кольскому полуострову",
                    "Плавание Петра 1 к кольскому полуострову",
                    "august 1693",
                    "ARCH",
                    "Тут должна быть дата"
                ),
                new HistoryObject(
                    64.56779620081946, 
                    40.51499607234626,
                    "Тут была заложена Соломбальская верфь, 18 сентября 1693 года Петр сообственноручно закладывает здесь 12-матчевый корабль \"Святой Павел\", а 20 мая 1694 года лично принимает участие в спуске на воду. Всего на ней до 1725 года будет построено 125 кораблей.",
                    "Соломбальская Верфь",
                    "autumn 1693",
                    "ARCH",
                    "Тут должна быть дата"
                ),
                new HistoryObject(
                    64.57470629914489, 40.51898364869847,
                    "Там закладываются 6 больших океанских торговых кораблей совершаваших торговые походы в Европу",
                    "Соломбальская Верфь",
                    new Date("1699").getUTCFullYear(),
                    "ARCH",
                    "Тут должна быть дата"
                ),
                new HistoryObject(
                    64.57352569843444, 40.528453033006684,
                    "Были построены 3 фрегата «Курьер», «Святой Дух» и «Святой Илья»., Позднее их перетащили в Онежское озеро, а оттуда перенесли в Неву.",
                    "Соломбальская Верфь",
                    new Date("1700").getUTCFullYear() + "-" + new Date("1702").getUTCFullYear(),
                    "ARCH",
                    "Тут должна быть дата"
                ),
                 new HistoryObject(
                    56.72512028812886,
                    38.77172404641613,
                    "Тут до сих пор хранится Ботик Петра 1. Единственный уцелевший корабль потешной флотилии. По легенде его сделал сам Петр 1",
                    "Бортик Фортуна",
                    "01 january 1689",
                    "Begin",
                    "Тут должна быть дата"
                ),
            ],
            "Begin":
                [
                    new HistoryObject(
                        56.72662433629424,
                        38.78554064774605,
                        "Тут на горе Гремяч была заложена верфь, на которой была построена потешная флотилия.",
                        "Верфь потешной флотилии",
                        new Date("1692").getUTCFullYear(),
                        "Begin"
                    )
                ],
            "People":
                [
                    new HistoryObject(
                        52.370780475020425,
                        4.898003740685993,
                        "Привезет с собой в Россию строить корабли. Он будет заниматься строительством сначала в Воронеже, потом в Санкт-Петербурге, а еще позднее в Архангельске.",
                        "Выбе Геренс ",
                        new Date("1698").getUTCFullYear(),
                        "People"
                    ),
                    new HistoryObject(
                        55.797974245061, 37.711817928163185,
                        "Член Преображенского полка. Любимец Петра 1. Был вместе с ним в великом посольстве в котором изучал корабельное строительство.",
                        "Скляев, Федосей Моисеевич\n",
                        "4 january 1672 — 10 may 1728\n",
                        "People"
                    ),
                    new HistoryObject(
                        55.780132292698056, 37.76881698304523,
                        "Здесь в Льняном дворце Петр 1 вместе с Тиммерманом обнаружили легендарный ботик деда Петра 1, и отреставрировали его. Тиммерман был учителем Петра 1 по корабельному делу. Организовал два посольства в страны Европы, также руководил строительстовом более 150 кораблей.",
                        "Тиммерман, Франц Фёдорович\n",
                        "1644 — 1702\n",
                        "People"
                    ),
                    new HistoryObject(
                        58.96787490822256, 5.722216647502774,
                        "Норвежский адмирал Крюйс. На момент знакомства с Петром 1 побывал во всем мире, и был успешным мореплавателе м и кораблестроителем. Но у него была проблема с долгами ввиду череды неудач. Потом он познакомился с Петром 1. Поначалу он не хотел принимать приглашение Петра, но потом согласился выторговав для себя хорошие условия. Впоследствии Крюйс принимал участие в строительства балтийского и черноморского флота, а также почти всего связанного с флотом на протяжении 25 лет.",
                        "Корнелиус Крюйс\n",
                        "14 june 1655, — 3 (14) june 1727",
                        "People"
                    ),
                    new HistoryObject(
                        46.214111860749234, 6.139281554004169,
                        "Здесь родился первый Адмирал российского флота Лефорт. В 1695 году он руководил азовским походом. Позднее Петр сделает его адмиралом еще не созданного флота. Многие современники удивлялись новому назначению уроженца «самой сухопутной страны во всей Европе»",
                        "Лефорт, Франц\n",
                        "23 december 1655 [2 january 1656], — 2 [12] march 1699\n",
                        "People"
                    ),
                    new HistoryObject(
                        46.214111860749234, 6.139281554004169,
                        "Здесь родился первый Адмирал российского флота Лефорт. В 1695 году он руководил азовским походом. Позднее Петр сделает его адмиралом еще не созданного флота. Многие современники удивлялись новому назначению уроженца «самой сухопутной страны во всей Европе»",
                        "Лефорт, Франц\n",
                        "23 december 1655 [2 january 1656], — 2 [12] march 1699\n",
                        "People"
                    ),
                    new HistoryObject(
                        55.717129762596834, 37.60516944533562,
                        "Первый русский адмирал. С глубокой юности был при Петре 1. Впоследствии участвовал во втором азовском походе, руководил строительством кораблей в Воронеже, участвовал в большом количестве сражений северной войны, а также стычек с турками.",
                        "Фёдор Матве́евич Апра́ксин\n",
                        "27 november (7 december) 1661 — 10 (21) november 1728, Moscow\n",
                        "People"
                    ),
                    new HistoryObject(
                        50.9094703251859, -1.4159440956179632,
                        "Тут родился Ричард Козенц, потомственный корабельный мастер. Познакомился с Петром во время великого посольства. В 1700 году переехал в Воронеж, позднее в Санкт-Петербург. Был одним из любимых корабелстроителей Петра 1. Построил любимый корабль Петра по его чертежу называемый \"Ингерманланд\". На нем Петр держал свой царский штандарт.",
                        "Ричард Козенц\n",
                        "29 may 1674, Southampton — 11 december 1735, Arkhangelsk\n",
                        "People"
                    ),
                    new HistoryObject(
                        59.93836602576839, 30.322732375439386,
                        "Генерал Губернатор Санкт-Петербурга с момента основания и до 1724 года. Меншиков руководил большим количеством строек в Санкт-Петербурге в том числе стройкой Кронштадта. Ближайший соратник Петра 1. Впоследствии в 1710х годах руководил также некоторыми операциями во флоте. После смерти Лефорта Петр 1 сказал о Меншикове: \"Осталась у меня одна рука, вороватая, да верная\"",
                        "Меншиков Александр\n",
                        "16 november 1673, Москва - 12 november 1729, Берёзов, Сибирская губерния\n",
                        "People"
                    ),
                    new HistoryObject(
                        54.687790199075316, 20.501682200228522,
                        "Сопровождал Петра 1 во многих крупных походах, а также занимался большим количеством вопросов флота включая провизию и вооружение при Петре I.",
                        "Наум Сеняев\n",
                        "Синявин, около 1680 — 24 may 1738, Очаков\n",
                        "People"
                    ),

                ],
            "AZOV":
                [
                    new HistoryObject(
                        51.64982156391588, 39.17998217078148,
                        "После пребывания в Архангельске Петр 1 понял, что если он хочет сделать Россию морской державой помимо белого моря ему нужны еще моря. Он колебался между Балтийскими и Азовскими морями. Для этого им была поставлена амбициозная задача: Взятие Азова.В Воронеж были доставлены детали для кораблей из Преображенского.",
                        "Подготовка Первого Азовского похода",
                        new Date("1965").getUTCFullYear(),
                        "AZOV"
                    ),
                    new HistoryObject(
                        47.11554446651436, 39.42133739999999,
                        "Осада Азова показала необходимость создания регулярного флота. Во время осады турецкий флот просто привозил боеприпасы в крепость с моря делая осаду бессмысленной. Несколько кораблей собранных в Воронеже показали свою неэффективность противостоя большому флоту осман.",
                        "Первая осада Азова",
                        "june 1965",
                        "AZOV"
                    ),
                    new HistoryObject(
                        47.11554446651436, 39.42133739999999,
                        "Вторая осада Азова повлекла важные события для всего морского флота России. Она показала важность использования артиллерии и флота в военных действиях. После победы в осаде 20 октября боярская дума провозглашает\"морским судам быть...\". Начинается обширная программа судостроительства.",
                        "Вторая осада Азова\n",
                        "7 june 1696",
                        "AZOV"
                    ),
                    new HistoryObject(
                        47.23128987949861, 38.932915549633655,
                        "Было решено основать Таганрог т.к. в Азове не было удобного места для строительства кораблей.",
                        "Основание Таганрога\n\n",
                        "1696",
                        "AZOV"
                    ),
                    new HistoryObject(
                        48.638532669378264, 43.551268924060665,
                        "Паншинская верфь(Локация неточна). В этом месте адмирал  Крюйс предложил заложить паншинскую верфь. На ней впоследствии был построен знаменитый корабль \"Крепость\"",
                        "Паншинская верфь\n",
                        "1697",
                        "AZOV"
                    ),


                ],
            "VORONEZH":
                [
                    new HistoryObject(
                        51.54202298666646, 39.086190051279154,
                        "Частные кумпанства показали свою неэффективность. Поэтому правительство начало строить верфи на казенные деньги. Для этого было основано Воронежское адмиралтейство.",
                        "Создание воронежского адмиралтейства",
                        new Date("1700").getUTCFullYear(),
                        "VORONEZH"
                    ),
                    new HistoryObject(
                        51.574905713086494, 39.16174926335714,
                        "Кумпанства были переданы новосозданному Адмиралтейскому приказу. Во главе был поставлен А.Протасьев. Ему было дано звание Адмиралтейца.",
                        "Создание Адмиралтейского приказа\n",
                        "17 december 1696",
                        "VORONEZH"
                    ),
                    new HistoryObject(
                        51.605071052866315, 39.17291649160905,
                        "В Воронеже начинается постройка Корабля\"Гото Предистанция\". По легенде царь сам сделал его чертеж",
                        "Начало строительства Гото Предистинции",
                        "19 november 1668",
                        "VORONEZH"
                    ),
                    new HistoryObject(
                        51.56373946030489, 39.11950800866512,
                        "Петр I приехал в Воронеж. В письме московскому дьяку Виниусу он сообщает:\n" +
                        "\n" +
                        "Мы слава Богу, дело в изрядном состоянии нашли, флот и магазины обрели. Позднее, впечатление царя поменялось",
                        "Петр 1 приезжает в Воронеж\n",
                        "31 october 1698",
                        "VORONEZH"
                    ),
                    new HistoryObject(
                        51.553271677474264, 39.18490572101152,
                        "Было основано тавровское адмиралтейство. Река Воронеж начала мелеть, и там стало сложно строить корабли. Поэтому построили новую верфь здесь",
                        "Тавровское адмиралтейство\n",
                        "1705",
                        "VORONEZH"
                    ),

                ],
            "SHIPS":
                [
                    new HistoryObject(
                        51.56192845816989, 39.15835054171525,
                        "В Воронеже начинается постройка Корабля\"Гото Предистанция\". По легенде царь сам сделал его чертеж",
                        "Начало строительства Гото Предистинции",
                        "19 november 1668",
                        "SHIPS"
                    ),
                    new HistoryObject(
                        51.579733513530535, 39.18359818819784,
                        "Закончилось строительство первого российского линейного корабля, а также первым кораблем такого класса созданным в России без иностранных специалистов",
                        "Закончилось строительство Гото Предистинции\n",
                        "27 april 1668",
                        "SHIPS"
                    ),
                    new HistoryObject(
                        52.370937988418326, 4.897985499999999,
                        "Тут Петр 1 своими руками строит фрегат \"Петр и Павел\"",
                        "Петр и Павел Великое посольство Петра\n",
                        "1697",
                        "SHIPS"
                    ),
                    new HistoryObject(
                        41.03721385083561, 29.000424440162867,
                        "Единственный 46-ти пушечный корабль «Крепость» паншинской постройки получился прочным и с хорошими мореходными качествами. Именно его Пётр назначил для доставки в Константинополь чрезвычайного русского посла, думного дьяка Е. И. Украинцева, для заключения мирного договора с турецким султаном. Одновременно царь хотел показать туркам, что у России на юге уже есть большие мореходные военные корабли. В мае 1709 был издан указ Петра I о сохранении корабля «для славы, что был в Константинополе».",
                        "Корбаль \"крепость\"\n",
                        "1699",
                        "SHIPS"
                    ),
                    new HistoryObject(
                        59.9386643791327, 30.30510249374456,
                        "26 июня 1712 года был построен первый линейный корабль на адмиралтейских верфях. В его создании принимал участие сам Петр 1. С этого корабля началась новая эпоха у балтийского флота. В период боевой службы линейного корабля на нём дважды держал свой флаг Пётр I.",
                        "Корбаль \"Полтава\"\n",
                        "1712",
                        "SHIPS"
                    ),


                ],
            "SPB":
                [
                    new HistoryObject(
                        59.94957948742604, 30.386719037244163,
                        "Петр 1 подписывает указ о создании Морского устава. В этом уставе в 5 томах описываются обязанности, ранги, наказания, взаимноотношения и другое во флоте. Помимо этого в нем есть история флота до 1719 года",
                        "Морской Устав",
                        "13 (24) january 1720",
                        "SPB"
                    ),
                    new HistoryObject(
                        59.94985197454987, 30.31681517879623,
                        " этот день в этом месте был основан Санкт-Петербург. Впоследствии ставший морской столицей России.",
                        "Санкт-Петербург\n",
                        "16 (27) may 1703",
                        "SPB"
                    ),
                    new HistoryObject(
                        59.979485377487116, 29.746076979520893,
                        "Отмерив глубину моря стало ясно что крупные корабли могут пройти только около остров Котлин. Поэтому Петр решил построить крепость именно здесь. Эскиз ее он нарисовал сам. Впоследствии эта крепость окажется очень успешной, переживет две крупные атаки шведов, и выстоит.",
                        "Кроншлот\n",
                        "january 1704 \n",
                        "SPB"
                    ),
                    new HistoryObject(
                        59.93855491679745, 30.306737495844487,
                        "Изначально адмиралтейство строилась как верфь по чертежам Петра 1. Строительство велось очень быстро и уже в 1705 году были заложены первык корабли. В 1706 году был спущен 18 пушечный прам на воду. Вся флотилия на первых парах строившаяся была оборонительной",
                        "Заложение Адмиралтейства\n",
                        "november 1704 \n",
                        "SPB"
                    ),
                    new HistoryObject(
                        59.93855491679745, 30.307,
                        "Петр 1 приказал создать модель-камеру. В ней сохранялись все чертежы и модели строившихся кораблей. В 1722 году вышел в свет «Регламент о управлении адмиралтейства и верфи», который гласил: «Когда зачнут который корабль строить, то надлежит приказать тому мастеру, кто корабль строит, сделать половинчатую модель на доске, и оную купно с чертежом по спуске корабля, отдать в коллегию Адмиралтейскую». Позднее модель-камера превратилась в современный музей.",
                        "Модель-камера\n",
                        "1709 \n",
                        "SPB"
                    ),
                    new HistoryObject(
                        59.98641464524798, 29.785535118800304,
                        "В этот день Петр 1 заложил первый камень будущей крепости Кроншдадт. До этого в город который был здесь переселяли дворян, торговцев, и прочих. В 1717 году тут был основан морской госпиталь. Со временем крепость и город станут главной базой балтийского флота.",
                        "Основание крепости Кроншдадт\n",
                        "18 october 1723\n",
                        "SPB"
                    ),
                    new HistoryObject(
                        59.937387376794135, 30.304192406623798,
                        "В 1717 году при Адмиралтейской канцелярии открылась первая в Санкт-Петербурге Адмиралтейская школа, призванная обучать основам кораблестроительной науки наиболее грамотных молодых людей.",
                        "Адмиралтейская школа\n",
                        "1717\n",
                        "SPB"
                    ),
                    new HistoryObject(
                        59.940930506093935, 30.313889774274067,
                        "Первое в России учебное заведение, носившее название Морской академии (или Академии морской гвардии), было открыто в Санкт-Петербурге 12 октября 1715 года в доме А. В. Кикина на берегу Невы, где ныне находится здание Зимнего дворца. Ученики Академии, преимущественно дворяне, числились на военной службе и были на полном государственном обеспечении. Инструкцию, которой регулировалась учёба и служба в академии, утвердил Пётр I — он собственноручно написал перечень наук, чему должно было «учить детей».",
                        "Академия Морской Гвардии\n",
                        "12 october 1715\n",
                        "SPB"
                    ),
                    new HistoryObject(
                        59.939248495194235, 30.309800175257372,
                        "Коллегия была образована в ходе реформы центральных органов управления указом Петра I от 22 декабря 1717 год в числе первых 9 коллегий. Согласно указу являлась главным органом управления Военно-морского флота. В коллегию были переданы функции нескольких существовавших до этого флотских организаций: Приказ Морского флота, морской комиссариат и др.",
                        "Адмиралтейств-коллегия\n",
                        "22 декабря 1717\n",
                        "SPB"
                    ),
                    new HistoryObject(
                        61.162014945153814, 32.452650453918395,
                        "Здесь в 1702 году построил верфь Меншиков. Она была необходима для строительства кораблей для Северной войны. Тут было построено очень много кораблей включая известный корабль \"Штандарт\"В 1999 году была сделана его реплика, которая используется в мероприятиях и сьемках исторических фильмов.",
                        "Олонецкая верфь\n",
                        "1702\n",
                        "SPB"
                    ),
                    new HistoryObject(
                        60.806715904849305, 21.394782441443194,
                        "В 1721 году с заключением Ништадского мира закончилась начальная стадия развития флота. Подводя итог можно сказать, что Петр 1 с нуля создал флот, и смог при помощи этого флота победить первоклассную морскую державу коей была Швеция. Россия завладела территориями современной прибалтики, Санкт-Петербурга, Карелии и другими.",
                        "Ништа́дтский мир\n",
                        "10 september 1721\n",
                        "SPB"
                    ),
                ],
            "Battles":
                [
                    new HistoryObject(
                        61.0286031355863, 30.134889643350157,
                        "Нападение отряда полковника Тыртова в составе 30 карбасов на шведскую озёрную флотилию вице-адмирала Нумерса  Потеряв 5 судов (2 сожжены, 2 взяты в плен, 1 потоплено) и около 300 человек, Нумерс ушёл в Выборг, оставив Ладожское озеро во власти русских.",
                        "Битва около Кегсгольма(Приозерск)\n",
                        "27 august 1702\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        59.944482691103794, 31.037234059849634,
                        "После тринадцатичасового упорного боя крепость была взята; 50 лодок, перетащенные сухим путём из Ладожского озера в Неву, отрезали крепость со стороны моря, откуда она получала помощь. Пётр I переименовал Нотебург в Шлиссельбург — в знак того, что эта крепость являлась ключом к выходу на море.",
                        "Захват Ноттенбурга(Шлиссельбурга)\n",
                        "11 october 1702\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        59.943237100010016, 30.405433339704494,
                        "Тут находилась древняя крепость называвшаяся Ландскрона. Своим местоположием у устья Невы она фактически была ключом ко всему Санкт-Петербургу. Осада началсь 24 апреля 1703 года. После двенадцати часов обстрела и взрыва порохового склада крепость сдалась русской армии под командованием Б. П. Шереметева. Вскоре был основан Санкт-Петербург.",
                        "Захват Ниеншаца\n",
                        "1 may 1703 \n",
                        "Battles"
                    ),
                    new HistoryObject(
                        59.95157551909058, 30.336577994296604,
                        "С этого времени дата 18 мая считается датой рождения балтийского флота. Можно назвать этот бой первым морским сражением русского флота.Шведы не знали о том что Ниеншац взяли. Из-за этого русским солдатам удалось застать их врасплох. Адмирал Нумерс послал два фрегата к крепости. Команды корабля подумали, что с Ниеншацом все в порядке, и встали на якорь. Этим воспользовались Петр 1 и Меншиков. В ночь на 7 мая они взяли на абордаж судно. Шведы не смогли уплыть из-за сильного встречного ветра. Атака была успешной. Были захвачены оба корабля и командой. Петр 1 бурно праздновал потом это событие.",
                        "Бой в устье Невы\n",
                        "18 may 1703\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        60.065568732430435, 25.761756245122434,
                        "В 1708 году деятельность Флота впервые приобретает наступательный характер: 10 и 11 мая отряд русской гребной флотилии из 9 скампавей и 7 бригантин под начальством шаубенахта графа Боциса дошёл до города Борго(совр. Порвоо), высадил десант и под выстрелами батарей выжег город и окрестности и истребил 16 мелких судов.",
                        "Первые наступательные действия флота\n",
                        "1708\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        60.71729634106992, 28.71206418611103,
                        "Осенью 1706 года Петр 1 предпринял первую попытку взять Выборг.  Она оказалась неудачной. Петр понял, что ему необходимо способствовать осаде с помощью флота в большей мере.",
                        "Первая осада Выборга\n\n",
                        "1706\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        60.71729634106992, 28.71206418611104,
                        "(1 апреля) 1710 года адмирал граф Фёдор Апраксин с 8-тысячным корпусом при 10-, 12-фунтовых пушках и 3 мортирах прибыл к городу после двухдневного марша по льду от Кронштадта.Сначала армия лишь готовила осаду, и до  9 мая  не предпринимала решительных действий, ожидая прибытия морем новых войск, орудий, боевых припасов и продовольствия, недостаток которого ощущался. Наконец, 9 мая флоту под командованием вице-адмирала Крюйса удалось пробиться через льды и прибыть к Выборгу. Царь присутствовал при флоте в качестве контр-адмирала.29 мая началась осада. 23 июня крепость сдалась. Это стала первая наступательная победа русского флота",
                        "Вторая осада Выборга и взятие оного\n\n",
                        "1710\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        60.71729634106992, 28.71206418611104,
                        "(1 апреля) 1710 года адмирал граф Фёдор Апраксин с 8-тысячным корпусом при 10-, 12-фунтовых пушках и 3 мортирах прибыл к городу после двухдневного марша по льду от Кронштадта.Сначала армия лишь готовила осаду, и до  9 мая  не предпринимала решительных действий, ожидая прибытия морем новых войск, орудий, боевых припасов и продовольствия, недостаток которого ощущался. Наконец, 9 мая флоту под командованием вице-адмирала Крюйса удалось пробиться через льды и прибыть к Выборгу. Царь присутствовал при флоте в качестве контр-адмирала.29 мая началась осада. 23 июня крепость сдалась. Это стала первая наступательная победа русского флота",
                        "Вторая осада Выборга и взятие оного\n",
                        "1710\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        59.81285354211982, 22.928485708574357,
                        "Тут произошло Гангутское сражение между русским армейским флотом и шведским отрядом из 10 судов, первая в истории России морская победа русского флота. В честь этого события 9 августа является одним из дней воинской славы России. Победа у полуострова Гангут стала первой крупной победой русского регулярного флота. Она обеспечила ему свободу действий в Финском и Ботническом заливах, эффективную поддержку русских войск в Финляндии. В Гангутском сражении русское командование смело использовало преимущество гребного флота в борьбе с линейным парусным флотом шведов, умело организовало взаимодействие сил флота и сухопутных войск, гибко реагировало на изменения тактической обстановки и погодных условий, сумело разгадать манёвр противника и навязать ему свою тактику. Также Гангутское сражение было одним из последних крупных сражений в истории флота, в котором решающую роль сыграл абордажный бой.",
                        "Гангутское сражение",
                        "7 august 1714\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        60.498316785187335, 28.246198537712406,
                        "Это был первый поход молодого балтийского флота. Движение флота из Петербурга началось 25 апреля, сразу же после вскрытия льда на Неве. 29 апреля флот собрался в Кронштадте. В финском заливе на тот момент была сложная ледовая обстановка, но Петр 1 чуть ли не самолично смог выстроить хороший маршрут для прохода к Выборгу. В результате похода к осаждавшим Выборг войскам были доставлены пушки и большое количество продовольствия. В распоряжении осаждавшей армии оказался галерный флот, предназначенный для действий против приморских бастионов и для блокады Выборга со стороны моря",
                        "Ледовый поход Балтийского флота в 1710 годy",
                        "25 april - 9 may 1710 \n",
                        "Battles"
                    ),
                    new HistoryObject(
                        58.658483216165024, 22.564781587620804,
                        "В 1719 году, 24 мая, было выиграно первое эскадренное сражение в открытом море одной только артиллерией и маневрированием под парусами. Русская эскадра из 4 кораблей и 1 шнявы под командой первого капитана из русских Наума Акимовича Сенявина, учившегося мореплаванию в России, настигла между островами Эзель и Готска-Сандэ шведскую эскадру из 3 судов (50-пушечный корабль, 36-пушечный фрегат и 12-пушечная бригантина) под начальством командора Врангеля и атаковала её. После 8-часового боя шведские суда сдались. Пётр «за столь добрый почин флота российского» пожаловал Сенявина в капитан-командоры и выдал 11 тысяч рублей призовых денег на его эскадру.",
                        "Эзельское сражение\n",
                        "4 june 1719\n",
                        "Battles"
                    ),
                    new HistoryObject(
                        59.99199738086411, 20.29368260767715,
                        "Тут произошло известное Гренгранское сражение. Русский флот под руководством Михаила Голицына разбили шведский флот. Это было последнее крупное сражение перед Ништадтским миром.",
                        "Сражение при Гренгаме\n\n",
                        "7 august 1720\n",
                        "Battles"
                    ),
                ]

        }
        ;
        this.selected = [];
    }

     init() {
        this.map = new ymaps.Map(this.id, {
            center: [55.76, 37.64],
            zoom: 7
        });
        this.map.controls.remove('trafficControl');
    }

    render() {
        this.map.geoObjects.removeAll();
        this.selected.forEach((type) => {
            const historyObjects = this.data[type];
            historyObjects.forEach((historyObject) => {
                const myPlacemark = new ymaps.Placemark(historyObject.getLocation(), {
                    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                    balloonContentHeader: historyObject.getName(),
                    balloonContentBody: historyObject.getDescription(),
                    balloonContentFooter: historyObject.getDate(),
                    hintContent: "Хинт метки"
                });
                this.map.geoObjects.add(myPlacemark);
            });
        });
    }

    checkSelected(type) {
        if (this.selected.indexOf(type) !== -1) {
            return true;
        }
        return false;
    }

    addSelected(type) {
        this.selected.push(type);
    }

    removeSelected(type) {
        this.selected.splice(this.selected.indexOf(type), 1);
    }
}

const myMap = new MyMap("map");
ymaps.ready((ymaps) => {
    myMap.init();
    document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("epoch-selector__button")) {
            return;
        }
        const type = event.target.getAttribute("data-type");
        if (myMap.checkSelected(type)) {
            myMap.removeSelected(type);
            event.target.classList.remove("button-map_clicked");
        } else {
            myMap.addSelected(type);
            event.target.classList.add("button-map_clicked");
        }
        myMap.render();
    });
});
