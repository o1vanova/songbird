const categories = [ 'Africa', 'Europe', 'America', 'Oceania', 'Asia', 'Australia' ];

const birdsData = [
  [
    {
      id: 1,
      name: 'Клушица',
      species: 'Pyrrhocorax pyrrhocorax',
      description: 'Клуши́ца, красноклювая альпийская ворона — птица семейства врановых. Распространена в горах, на возвышенностях и морских побережьях Евразии и Северной Африки, на востоке ареала образует устойчивые городские поселения.',
      image: './images/birds/XC527413.jpg',
      audio: './sounds/birds/XC527413.mp3',
    },
    {
      id: 2,
      name: 'Зяблик',
      species: 'Fringilla coelebs africana',
      description: 'Зя́блик — певчая птица семейства вьюрковых. Численность в Западной Европе составляет 79—94 миллионов пар.',
      image: './images/birds/XC527406.jpg',
      audio: './sounds/birds/XC527406.mp3',
    },
    {
      id: 3,
      name: 'Московка',
      species: 'Periparus ater',
      description: 'Моско́вка, чёрная сини́ца, синица-московка или моховка — мелкая подвижная птица из семейства синицевых, широко распространённая в зоне лесов восточного полушария.',
      image: './images/birds/XC520704.jpg',
      audio: './sounds/birds/XC520704.mp3',
    },
    {
      id: 4,
      name: 'Одноцветная нектарница',
      species: 'Cinnyris batesi',
      description: 'Вид распространён в Южной Африке. Встречается в Анголе, Демократической Республике Конго, Малави, Мозамбике, Руанде, Свазиленде, Уганде, Замбии и Южно-Африканской Республике. Обитает в финбоше, редколесье, садах и тому подобное.',
      image: './images/birds/XC508809.jpg',
      audio: './sounds/birds/XC508809.mp3',
    },
    {
      id: 5,
      name: 'Горихвостка-чернушка',
      species: 'Phoenicurus ochruros',
      description: 'Горихво́стка-черну́шка — мелкая певчая птица из семейства мухоловковых, распространённая в Европе и Центральной Азии. Несколько меньше воробья, выделяется прежде всего тёмным оперением большей части тела и ржавчато-оранжевым хвостом. Может зависать в воздухе, подобно колибри.',
      image: './images/birds/XC497730.jpg',
      audio: './sounds/birds/XC497730.mp3',
    },
    {
      id: 6,
      name: 'Каменный воробей',
      species: 'Petronia petronia',
      description: 'Обитает в предгорьях и на склонах гор, обычно в каменистых россыпях и на скалах. Полет каменного воробья ловкий и быстрый; по земле и камням он ходит и быстро бегает, как жаворонок.',
      image: './images/birds/XC467943.jpg',
      audio: './sounds/birds/XC467943.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Зарянка',
      species: 'Erithacus rubecula',
      description: 'Зарянки окрашены сверху в серо-зеленоватый цвет. У этой птицы белое брюшко, рыжие лоб, горло, грудь и бока головы. Птица относительно длинноногая. Зарянка является перелётной птицей, но возвращается в северные края одной из первых. Самцы окрашены чаще ярче чем самки; северные зарянки ярче и могут быть крупнее южных.',
      image: './images/birds/XC527464.jpg',
      audio: './sounds/birds/XC527464.mp3',
    },
    {
      id: 2,
      name: 'Фазан',
      species: 'Phasianus colchicus',
      description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
      image: './images/birds/XC527538.jpg',
      audio: './sounds/birds/XC527538.mp3',
    },
    {
      id: 3,
      name: 'Крапивник',
      species: 'Troglodytes troglodytes troglodytes',
      description: 'Мелкая птица, единственный представитель семейства крапивниковые, обитающий в Америке, Евразии и Северной Африке. Внешне похож на мягкий пушистый шарик с поднятым торчком коротким хвостиком.',
      image: './images/birds/XC527542.jpg',
      audio: './sounds/birds/XC527542.mp3',
    },
    {
      id: 4,
      name: 'Певчий дрозд',
      species: 'Turdus philomelos',
      description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
      image: './images/birds/XC524774.jpg',
      audio: './sounds/birds/XC524774.mp3',
    },
    {
      id: 5,
      name: 'Каравайка',
      species: 'Plegadis falcinellus',
      description: 'Места обитания караваек — пресные и слабосолёные водоёмы, обширные болота, лиманы, мелководья и заливные луга. Держатся стаями, иногда до 100 птиц, кормятся на поросших тростником мелководьях с илистым дном, иногда на рисовых полях, сырых лугах. Ночуют на деревьях.',
      image: './images/birds/XC417660.jpg',
      audio: './sounds/birds/XC417660.mp3',
    },
    {
      id: 6,
      name: 'Дымчатый коршун',
      species: 'Elanus caeruleus',
      description: 'Обитает на открытых ландшафтах, саваннах и редколесьях Африки, Индии и Юго-Восточной Азии, а также на юге Испании. Ведет оседлый образ жизни.',
      image: './images/birds/XC350371.jpg',
      audio: './sounds/birds/XC350371.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Восточный пиви',
      species: 'Contopus virens',
      description: 'Живут парами по лесным опушкам, в садах и на полях, покрытых кустарником, питаются преимущественно насекомыми. способ их преследования такой же, как у наших мухоловок — поэтому тираннов иногда называют мухоловками Нового Света. В период гнездования нападают на каждую приближающуюся к их гнезду птицу, не исключая и крупных хищников.',
      image: './images/birds/XC526709.jpg',
      audio: './sounds/birds/XC526709.mp3',
    },
    {
      id: 2,
      name: 'Красноглазый виреон',
      species: 'Vireo olivaceus',
      description: 'Красноглазый виреон длиной 12,5 см. Оперение макушки головы светло-серое, спина немного более тёмная, «бровь» белая, нижняя часть тела белая, через глаза проходит тёмная полоса, глаза красные. Призыв состоит из двух-трёхсложного «чи-вит». Песня состоит из ряда коротких строф и щебечущего звука «чививи», «чиррчирр».',
      image: './images/birds/XC526708.jpg',
      audio: './sounds/birds/XC526708.mp3',
    },
    {
      id: 3,
      name: 'Сизая качурка',
      species: 'Oceanodroma furcata',
      description: 'Зимой встречаются в тёплых водах вдоль течения Куросио, летом обычна над всеми глубокими водами Дальнего Востока, кроме Японского моря. Изредка удаётся наблюдать, как сизые качурки ловят насекомых над прибрежными лугами. Самые крупные колонии находятся на Средних Курилах и острове Медный.',
      image: './images/birds/XC157187.jpg',
      audio: './sounds/birds/XC157187.mp3',
    },
    {
      id: 4,
      name: 'Американская синьга',
      species: 'Melanitta americana',
      description: 'Преимущественно лесотундровые и южнотаёжные ландшафты Северной Америки и Северо-Восточной Азии. Северная Америка от южного побережья Аляски, долины верхнего Юкона, Большого Невольничьего озера и северо-западного Онтарио к югу до южной части Британской Колумбии, северной Монтаны, южного Саскачевана, центральной Манитобы; горные области Орегона и северо-восточной Калифорнии.',
      image: './images/birds/XC295510.jpg',
      audio: './sounds/birds/XC295510.mp3',
    },
    {
      id: 5,
      name: 'Американская выпь',
      species: 'Botaurus lentiginosus',
      description: 'Американская выпь является средней по размеру цаплей с толстым телом и шеей и короткими ногами. Верхняя часть тела коричневого окраса, с мелкими чёрными пятнами, нижняя — чёрно-белая. Шея белого цвета. От выпи европейской её отличают размер и толщина когтей на ногах.',
      image: './images/birds/XC83541.jpg',
      audio: './sounds/birds/XC83541.mp3',
    },
    {
      id: 6,
      name: 'Центральноамериканский пастушок',
      species: 'Rallus limicola',
      description: 'Небольшая птица длиной около 19 см и размахом крыльев 35 см[2], плотного телосложения, с закруглёнными крыльями и коротким, часто вздёрнутым вверх хвостом. У взрослых птиц боковые перья головы голубовато-серые. Клюв очень длинный (длиннее головы), слегка загнут вниз. Оперение верхней части тела красновато-бурое, нижней немного более светлое, рыжевато-бурое; кроющие крыльев каштанового цвета.',
      image: './images/birds/XC292423.jpg',
      audio: './sounds/birds/XC292423.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Фиджийский ястреб',
      species: 'Accipiter rufitorques',
      description: 'Населяет ряд лесистых зон на Фиджи, от природных тропических лесов до кокосовых плантаций и городских садов и парков.',
      image: './images/birds/XC368861.jpg',
      audio: './sounds/birds/XC368861.mp3',
    },
    {
      id: 2,
      name: 'Пятнистая горлица',
      species: 'Spilopelia chinensis',
      description: 'Пятнистая горлица питается зёрнами и семенами, другим растительным кормом и мелкими насекомыми. Её часто можно встретить на земле, где она ищет корм на лугу или пашне.',
      image: './images/birds/XC108914.jpg',
      audio: './sounds/birds/XC108914.mp3',
    },
    {
      id: 3,
      name: 'Кандавуская веерохвостка',
      species: 'Rhipidura personata',
      description: 'Кандавуская веерохвостка — эндемичный вид птиц из семейства веерохвосток. Встречается только в лесах островов Кандаву и Оно, являющихся частью архипелага Кандаву, который административно относится к одноимённой провинции Фиджи.',
      image: './images/birds/XC75488.jpg',
      audio: './sounds/birds/XC75488.mp3',
    },
    {
      id: 4,
      name: 'Белоглазка Лайарда',
      species: 'Zosterops explorator',
      description: 'Белоглазка Лайарда — вид воробьиных птиц из семейства белоглазковых. Является эндемиком фиджийских островов Вити-Леву, Вануа-Леву, Тавеуни, Кандаву и Овалау.',
      image: './images/birds/XC109229.jpg',
      audio: './sounds/birds/XC109229.mp3',
    },
    {
      id: 5,
      name: 'Бурая майна',
      species: 'Acridotheres fuscus',
      description: 'Бурая майна достигает длины 23 см и имеет серое оперение. Обитает вблизи водоёмов или на рисовых полях. Это всеядное животное, которое питается фруктами, зёрнами и насекомыми. Бурую майну охотно содержат как комнатную птицу.',
      image: './images/birds/XC368816.jpg',
      audio: './sounds/birds/XC368816.mp3',
    },
    {
      id: 6,
      name: 'Оранжевогрудая мизомела',
      species: 'Myzomela jugularis',
      description: 'Мизомелы — род птиц из семейства медососовых. Медососы распространены в Австралии, Новой Зеландии, Новой Гвинее, на Больших и Малых Зондских островах, на островах Тихого океана, вплоть до Гавайских островов.',
      image: './images/birds/XC368811.jpg',
      audio: './sounds/birds/XC368811.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Белогорлая шпорцевая куропатка',
      species: 'Galloperdix bicalcarata',
      description: 'Характеризуются неоперённой цевкой и ноздрями. Живут во всех странах света, за исключением Крайнего Севера, ведут преимущественно наземный образ жизни, питаются растительными веществами.',
      image: './images/birds/XC68354.jpg',
      audio: './sounds/birds/XC68354.mp3',
    },
    {
      id: 2,
      name: 'Чомга',
      species: 'Podiceps cristatus',
      description: 'Размером чомга немного меньше утки. Это птица с тонкой шеей и удлинённым прямым клювом. Спина буровато-рыжая, живот, шея и голова белые. В весеннем оперении на голове у чомги вырастают два тёмных пучка перьев, похожих на «ушки», и рыжий «воротничок» вокруг шеи. Зимой этих украшений у птиц нет.',
      image: './images/birds/XC254633.jpg',
      audio: './sounds/birds/XC254633.mp3',
    },
    {
      id: 3,
      name: 'Гуменник',
      species: 'Anser fabalis middendorffii',
      description: 'Гусь гуменник — крупная птица буровато-серой окраски, напоминающий серого гуся. Клюв чёрный с оранжевой полоской посередине. Самец и самка не отличаются по окраске, однако самка несколько мельче. Масса тела колеблется от 2,5 до 4,5 кг и выше.',
      image: './images/birds/XC524264.jpg',
      audio: './sounds/birds/XC524264.mp3',
    },
    {
      id: 4,
      name: 'Индийская древесная сорока',
      species: 'Dendrocitta vagabunda',
      description: 'Питается преимущественно плодами, мелкими животными и падалью. В поисках пищи объединяется в стаи, состоящие из членов одной семьи. В зависимости от географической широты гнездование приходится на период с февраля по июль. В кладке обычно от 2-х до 6-и яиц. Птенцов выкармливают оба родителя.',
      image: './images/birds/XC26094.jpg',
      audio: './sounds/birds/XC26094.mp3',
    },
    {
      id: 5,
      name: 'Розовоголовый кольчатый попугай',
      species: 'Psittacula roseata juneae',
      description: 'Длина тела 30—35 см. По окраске очень похож на сливоголового попугая. Основная окраска оперения зелёная. Голова у самца бледно-розовая, по краям серо-голубая с чёрной каймой. У самки голова сине-серого цвета. На сгибах крыльев коричнево-красные пятна.',
      image: './images/birds/XC208890.jpg',
      audio: './sounds/birds/XC208890.mp3',
    },
    {
      id: 6,
      name: 'Пятнистая горлица',
      species: 'Spilopelia chinensis',
      description: 'Голова и брюхо светло-серо-розовые, лоб немного светлее, а затылок имеет красноватый оттенок. Спина, крылья и хвост светло-коричневые, покрытые крапинами. На шее заметна широкая тёмная полоса с белыми точками. Кроющие крыльев выглядят как чешуйки, так как отдельные перья имеют светло-коричневую кайму.',
      image: './images/birds/XC291099.jpg',
      audio: './sounds/birds/XC291099.mp3',
    }
  ],
  [
    {
      id: 1,
      name: 'Шлемоносный казуар',
      species: 'Casuarius casuarius',
      description: 'Шлемоносный казуар достигает высоты 1,5 м и веса около 80 кг. Казуары быстро бегают и хорошо прыгают.',
      image: './images/birds/XC132934.jpg',
      audio: './sounds/birds/XC132934.mp3',
    },
    {
      id: 2,
      name: 'Чёрный лебедь',
      species: 'Cygnus atratus',
      description: 'В отличие от лебедей-шипунов, у чёрных лебедей есть голос, которым они друг друга приветствуют, сопровождая это поднятием и опусканием головы. Иногда они выплывают на середину озера, кладут голову на воду и далеко трубят, зовя сородичей или просто выражая недовольство.',
      image: './images/birds/XC165155.jpg',
      audio: './sounds/birds/XC165155.mp3',
    },
    {
      id: 3,
      name: 'Каштановый чирок',
      species: 'Anas castanea',
      description: 'Этот вид всеяден. Чирки строят гнезда в нижних частях пней деревьев или иногда на земле. Оба родителя высиживаю яйца.',
      image: './images/birds/XC204392.jpg',
      audio: './sounds/birds/XC204392.mp3',
    },
    {
      id: 4,
      name: 'Олуша Абботта',
      species: 'Papasula abbotti',
      description: 'Олуша Абботта гнездится в тропических влажных джунглях острова Рождества на плоскогорьях и на западных склонах. Она отсутствует на северных склонах, так как во время муссона они особенно сильно подвержены шквалистому ветру. Птицы предпочитают в качестве гнездовых деревьев те, чьи верхушки выделяются над другими деревьями.',
      image: './images/birds/XC68966.jpg',
      audio: './sounds/birds/XC68966.mp3',
    },
    {
      id: 5,
      name: 'Королевский пингвин',
      species: 'Aptenodytes patagonicus',
      description: 'Королевский пингвин похож на императорского пингвина, но немного мельче его размерами и ярче окраской. Длина тела королевского пингвина составляет до 1 м. Взрослые птицы имеют серую спину, по бокам чёрной головы и на груди крупные яркие оранжевые пятна. Брюхо белое. Птенцы бурого цвета.',
      image: './images/birds/XC396252.jpg',
      audio: './sounds/birds/XC396252.mp3',
    },
    {
      id: 6,
      name: 'Оранжевоногий большеног',
      species: 'Megapodius reinwardt',
      description: 'Мегаподы более широко представлены в Австралазийском регионе, включая острова в западной части Тихого океана, Австралию, Новую Гвинею и острова Индонезии к востоку от линии Уоллеса, а также Андаманские и Никобарские острова в Бенгальском заливе.',
      image: './images/birds/XC260126.jpg',
      audio: './sounds/birds/XC260126.mp3',
    }
  ]
];

export default { birdsData, categories};
