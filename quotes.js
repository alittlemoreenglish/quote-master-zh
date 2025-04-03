const quotes = [
    {
        "text": "山重水複疑無路，柳暗花明又一村。",
        "author": "陸游",
        "fakeAuthors": ["楊萬里", "范成大"]
    },
    {
        "text": "世界以痛吻我，我要報之以歌。",
        "author": "泰戈爾",
        "fakeAuthors": ["紀伯倫", "徐志摩"]
    },
    {
        "text": "何當共剪西窗燭，卻說巴山夜雨時。",
        "author": "李商隱",
        "fakeAuthors": ["杜牧", "溫庭筠"]
    },
    {
        "text": "舊時王謝堂前燕，飛入尋常百姓家。",
        "author": "劉禹錫",
        "fakeAuthors": ["白居易", "元稹"]
    },
    {
        "text": "你站在橋上看風景，看風景人在樓上看你。",
        "author": "卞之琳",
        "fakeAuthors": ["徐志摩", "戴望舒"]
    },
    {
        "text": "讀書破萬卷，下筆如有神。",
        "author": "杜甫",
        "fakeAuthors": ["李白", "韓愈"]
    },
    {
        "text": "三日不讀書，便覺言語無味，面目可憎。",
        "author": "黃庭堅",
        "fakeAuthors": ["蘇軾", "歐陽修"]
    },
    {
        "text": "好鳥枝頭亦朋友，落花水面皆文章。",
        "author": "翁森",
        "fakeAuthors": ["朱熹", "程顥"]
    },
    {
        "text": "況陽春召我以煙景，大塊假我以文章。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "王維"]
    },
    {
        "text": "願生如夏花之絢爛，死如秋葉之靜美。",
        "author": "泰戈爾",
        "fakeAuthors": ["徐志摩", "冰心"]
    },
    {
        "text": "問世間，情為何物？直教生死相許。",
        "author": "元好問",
        "fakeAuthors": ["李商隱", "納蘭性德"]
    },
    {
        "text": "大膽假設，小心求證。",
        "author": "胡適",
        "fakeAuthors": ["魯迅", "錢玄同"]
    },
    {
        "text": "安居不必架高堂，書中自有黃金屋；娶妻莫恨無良媒，書中有女顏如玉。",
        "author": "趙恆",
        "fakeAuthors": ["朱熹", "司馬光"]
    },
    {
        "text": "教育之道無他，唯愛與榜樣而已。",
        "author": "福祿貝爾",
        "fakeAuthors": ["杜威", "蒙特梭利"]
    },
    {
        "text": "夫以銅為鏡，可以正衣冠；以古為鏡，可以知興替；以人為鏡，可以明得失。",
        "author": "李世民",
        "fakeAuthors": ["魏徵", "房玄齡"]
    },
    {
        "text": "如果你給我的，和給別人的一樣，那我就不要了。",
        "author": "三毛",
        "fakeAuthors": ["張愛玲", "席慕蓉"]
    },
    {
        "text": "少年不識愁滋味，為賦新辭強說愁。而今識盡愁滋味，欲說還休，欲說還休，卻道天涼好個秋。",
        "author": "辛棄疾",
        "fakeAuthors": ["李清照", "陸游"]
    },
    {
        "text": "枯籐老樹昏鴉，小橋流水人家，古道西風瘦馬。夕陽西下，斷腸人在天涯。",
        "author": "馬致遠",
        "fakeAuthors": ["白樸", "關漢卿"]
    },
    {
        "text": "知否？知否？應是綠肥紅瘦。",
        "author": "李清照",
        "fakeAuthors": ["辛棄疾", "晏幾道"]
    },
    {
        "text": "我揮一揮衣袖，不帶走一片雲彩。",
        "author": "徐志摩",
        "fakeAuthors": ["戴望舒", "卞之琳"]
    },
    {
        "text": "我是天空裡的一片雲，偶爾投影在你的波心。",
        "author": "徐志摩",
        "fakeAuthors": ["戴望舒", "卞之琳"]
    },
    {
        "text": "不識廬山真面目，只緣身在此山中。",
        "author": "蘇軾",
        "fakeAuthors": ["王安石", "黃庭堅"]
    },
    {
        "text": "也不必吸盡大澤與長河，那只是落日的倒影。",
        "author": "楊牧",
        "fakeAuthors": ["鄭愁予", "余光中"]
    },
    {
        "text": "了卻君王天下事，贏得生前身後名。",
        "author": "辛棄疾",
        "fakeAuthors": ["陸游", "岳飛"]
    },
    {
        "text": "劍閣崢嶸而崔嵬，一夫當關，萬夫莫開。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "白居易"]
    },
    {
        "text": "桃之夭夭，灼灼其華。",
        "author": "《詩經》",
        "fakeAuthors": ["《禮記》", "《春秋》"]
    },
    {
        "text": "壯志饑餐胡虜肉，笑談渴飲匈奴血。",
        "author": "岳飛",
        "fakeAuthors": ["辛棄疾", "陸游"]
    },
    {
        "text": "高山仰止，景行行止。",
        "author": "《詩經》",
        "fakeAuthors": ["孔子", "孟子"]
    },
    {
        "text": "力拔山兮氣蓋世。時不利兮騅不逝。騅不逝兮可奈何。虞兮虞兮奈若何。",
        "author": "項羽",
        "fakeAuthors": ["劉邦", "曹操"]
    },
    {
        "text": "我已在佛前，求了五百年，求他讓我們結一段塵緣。",
        "author": "席慕蓉",
        "fakeAuthors": ["徐志摩", "鄭愁予"]
    },
    {
        "text": "有緣千里來相會，無緣對面不相逢。",
        "author": "《增廣賢文》",
        "fakeAuthors": ["《詩經》", "《論語》"]
    },
    {
        "text": "勸君更盡一杯酒，西出陽關無故人。",
        "author": "王維",
        "fakeAuthors": ["孟浩然", "李白"]
    },
    {
        "text": "洛陽親友如相問，一片冰心在玉壺。",
        "author": "王昌齡",
        "fakeAuthors": ["李白", "杜甫"]
    },
    {
        "text": "任憑弱水三千，我只取一瓢飲。",
        "author": "無名氏",
        "fakeAuthors": ["曹雪芹", "祝枝山"]
    },
    {
        "text": "世人笑我太瘋癲，我笑他人看不穿。",
        "author": "唐寅",
        "fakeAuthors": ["徐渭", "祝枝山"]
    },
    {
        "text": "徒言滴水能穿石，其那堅貞匪石心。",
        "author": "韋應物",
        "fakeAuthors": ["劉禹錫", "柳宗元"]
    },
    {
        "text": "山不在高，有仙則名；水不在深，有龍則靈。斯是陋室，惟吾德馨。",
        "author": "劉禹錫",
        "fakeAuthors": ["柳宗元", "韓愈"]
    },
    {
        "text": "一室之不治，何以天下國家為？",
        "author": "劉蓉",
        "fakeAuthors": ["曾國藩", "孟子"]
    },
    {
        "text": "此情無計可消除，才下眉頭，卻上心頭。",
        "author": "李清照",
        "fakeAuthors": ["辛棄疾", "晏幾道"]
    },
    {
        "text": "寒塘渡鹤影，冷月葬花魂",
        "author": "曹雪芹",
        "fakeAuthors": ["李商隱", "納蘭性德"]
    },
    {
        "text": "去年今日此門中，人面桃花相映紅。人面不知何處在？桃花依舊笑春風。",
        "author": "崔護",
        "fakeAuthors": ["杜牧", "溫庭筠"]
    },
    {
        "text": "爾曹身與名俱滅，不廢江河萬古流。",
        "author": "杜甫",
        "fakeAuthors": ["李白", "白居易"]
    },
    {
        "text": "滿堂花醉三千客，一劍霜寒十四州。",
        "author": "貫休",
        "fakeAuthors": ["李白", "王維"]
    },
    {
        "text": "何日功成名遂了，還鄉，醉笑陪公三萬場。不用訴離觴，痛飲從來別有腸。",
        "author": "蘇軾",
        "fakeAuthors": ["辛棄疾", "陸游"]
    },
    {
        "text": "憑君莫話封侯事，一將功成萬骨枯。",
        "author": "曹松",
        "fakeAuthors": ["杜甫", "李賀"]
    },
    {
        "text": "眾裡尋他千百度，驀然回首，那人卻在，燈火闌珊處。",
        "author": "辛棄疾",
        "fakeAuthors": ["李清照", "柳永"]
    },
    {
        "text": "但去莫復問，白雲無盡時。",
        "author": "王維",
        "fakeAuthors": ["孟浩然", "陶淵明"]
    },
    {
        "text": "江雨霏霏江草齊，六朝如夢鳥空啼。",
        "author": "韋莊",
        "fakeAuthors": ["杜牧", "李商隱"]
    },
    {
        "text": "一枝紅豔露凝香，雲雨巫山枉斷腸。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "白居易"]
    },
    {
        "text": "孤雲將野鶴，豈向人間住。",
        "author": "劉長卿",
        "fakeAuthors": ["王維", "孟浩然"]
    },
    {
        "text": "何當載酒來，共醉重陽節。",
        "author": "孟浩然",
        "fakeAuthors": ["王維", "陶淵明"]
    },
    {
        "text": "相望試登高，心隨雁飛滅。",
        "author": "孟浩然",
        "fakeAuthors": ["王維", "劉長卿"]
    },
    {
        "text": "水深波浪闊，無使蛟龍得。",
        "author": "杜甫",
        "fakeAuthors": ["李白", "白居易"]
    },
    {
        "text": "含沙射流影，吹蠱痛行暉。",
        "author": "李白",
        "fakeAuthors": ["李賀", "杜甫"]
    },
    {
        "text": "我本楚狂人，鳳歌笑孔丘。手持綠玉杖，朝別黃鶴樓。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "白居易"]
    },
    {
        "text": "呼兒將出換美酒，與爾同銷萬古愁。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "蘇軾"]
    },
    {
        "text": "天生我材必有用，千金散盡還復來。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "白居易"]
    },
    {
        "text": "岑夫子，丹丘生，將進酒，杯莫停。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "蘇軾"]
    },
    {
        "text": "待到秋來九月八，我花開後百花殺。沖天香陣透長安，滿城盡帶黃金甲。",
        "author": "黃巢",
        "fakeAuthors": ["李白", "杜甫"]
    },
    {
        "text": "衰蘭送客咸陽道，天若有情天亦老。",
        "author": "李賀",
        "fakeAuthors": ["杜甫", "李白"]
    },
    {
        "text": "我醉君復樂，陶然共忘機！",
        "author": "李白",
        "fakeAuthors": ["陶淵明", "王維"]
    },
    {
        "text": "水光瀲灧晴方好，山色空濛雨亦奇；欲把西湖比西子，淡妝濃抹總相宜。",
        "author": "蘇軾",
        "fakeAuthors": ["王安石", "黃庭堅"]
    },
    {
        "text": "桃李春風一杯酒，江湖夜雨十年燈。",
        "author": "黃庭堅",
        "fakeAuthors": ["蘇軾", "辛棄疾"]
    },
    {
        "text": "娶了紅玫瑰，久而久之，紅的變了牆上的一抹蚊子血，白的還是『床前明月光』；娶了白玫瑰，白的便是衣服上沾的一粒飯黏子，紅的卻是心口上一顆硃砂痣。",
        "author": "張愛玲",
        "fakeAuthors": ["魯迅", "錢鍾書"]
    },
    {
        "text": "十步殺一人，千里不留行。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "李賀"]
    },
    {
        "text": "竹杖芒鞋輕勝馬，誰怕？一蓑煙雨任平生。",
        "author": "蘇軾",
        "fakeAuthors": ["辛棄疾", "陸游"]
    },
    {
        "text": "桃花流水窅然去，别有天地非人间。",
        "author": "李白",
        "fakeAuthors": ["王維", "孟浩然"]
    },
    {
        "text": "飛流直下三千尺，疑是銀河落九天。",
        "author": "李白",
        "fakeAuthors": ["杜甫", "白居易"]
    },
    {
        "text": "朋友買了一件衣料，綠色的底子帶白色方格，當她拿給我們看時，一位對圍棋十分感興趣的同學說：「啊，好像棋盤似的。」 「我看倒有點像稿紙。」",
        "author": "宋晶宜",
        "fakeAuthors": ["簡媜", "張曉風"]
    },
    {
        "text": "一沙一世界，一花一天堂。",
        "author": "威廉·布萊克",
        "fakeAuthors": ["泰戈爾", "徐志摩"]
    },
    {
        "text": "本是同根生，相煎何太急！",
        "author": "曹植",
        "fakeAuthors": ["曹操", "曹丕"]
    },
    {
        text: "沒吃過豬肉，也見過豬跑。",
        author: "曹雪芹",
        fakeAuthors: ["錢謙益", "吳敬梓"]
    },
    {
        text: "己所不欲，勿施於人。",
        author: "孔子",
        fakeAuthors: ["孟子", "荀子"]
    },
    {
        text: "知之為知之，不知為不知，是知也。",
        author: "孔子",
        fakeAuthors: ["老子", "莊子"]
    },
    {
        text: "學而不思則罔，思而不學則殆。",
        author: "孔子",
        fakeAuthors: ["荀子", "墨子"]
    },
    {
        text: "三人行，必有我師焉。擇其善者而從之，其不善者而改之。",
        author: "孔子",
        fakeAuthors: ["孟子", "韓非子"]
    },
    {
        text: "不患人之不己知，患不知人也。",
        author: "孔子",
        fakeAuthors: ["顏回", "曾子"]
    },
    {
        text: "人不可有傲氣，但不可無傲骨。",
        author: "魯迅",
        fakeAuthors: ["李白", "蘇軾"]
    },
    {
        text: "天行健，君子以自強不息。",
        author: "周易",
        fakeAuthors: ["論語", "大學"]
    },
    {
        text: "千里之行，始於足下。",
        author: "老子",
        fakeAuthors: ["孔子", "墨子"]
    },
    {
        text: "上善若水，水善利萬物而不爭。",
        author: "老子",
        fakeAuthors: ["孔子", "莊子"]
    },
    {
        text: "窮則獨善其身，達則兼善天下。",
        author: "孟子",
        fakeAuthors: ["荀子", "韓非子"]
    },
    {
        text: "富貴不能淫，貧賤不能移，威武不能屈。",
        author: "孟子",
        fakeAuthors: ["顏回", "曾子"]
    },
    {
        text: "天生我材必有用，千金散盡還復來。",
        author: "李白",
        fakeAuthors: ["杜甫", "白居易"]
    },
    {
        text: "人生得意須盡歡，莫使金樽空對月。",
        author: "李白",
        fakeAuthors: ["蘇軾", "王維"]
    },
    {
        text: "安得廣廈千萬間，大庇天下寒士俱歡顏。",
        author: "杜甫",
        fakeAuthors: ["李白", "白居易"]
    },
    {
        text: "人生自古誰無死，留取丹心照汗青。",
        author: "文天祥",
        fakeAuthors: ["岳飛", "辛棄疾"]
    },
    {
        text: "山重水複疑無路，柳暗花明又一村。",
        author: "陸游",
        fakeAuthors: ["蘇軾", "辛棄疾"]
    },
    {
        text: "欲窮千里目，更上一層樓。",
        author: "王之渙",
        fakeAuthors: ["李白", "杜甫"]
    },
    {
        text: "外圓內方，厚德載物。",
        author: "周易",
        fakeAuthors: ["論語", "大學"]
    },
    {
        text: "不以物喜，不以己悲。",
        author: "範仲淹",
        fakeAuthors: ["蘇軾", "王安石"]
    },
    {
        text: "學會挫折，壯志不改。",
        author: "李登輝",
        fakeAuthors: ["蔡英文", "陳水扁"]
    },
    {
        text: "寧靜致遠，淡泊明志。",
        author: "諸葛亮",
        fakeAuthors: ["曾國藩", "王陽明"]
    },
    {
        text: "勿以惡小而為之，勿以善小而不為。",
        author: "劉備",
        fakeAuthors: ["諸葛亮", "關羽"]
    },
    {
        text: "讀書破萬卷，下筆如有神。",
        author: "杜甫",
        fakeAuthors: ["李白", "蘇軾"]
    },
    {
        text: "滾滾長江東逝水，浪花淘盡英雄。",
        author: "楊慎",
        fakeAuthors: ["李白", "蘇軾"]
    },
    {
        text: "不畏浮雲遮望眼，只緣身在最高層。",
        author: "王安石",
        fakeAuthors: ["蘇軾", "陸游"]
    },
    {
        text: "海納百川，有容乃大；壁立千仞，無欲則剛。",
        author: "林則徐",
        fakeAuthors: ["曾國藩", "左宗棠"]
    },
    {
        text: "哀莫大於心死，而身死次之。",
        author: "王陽明",
        fakeAuthors: ["朱熹", "顧炎武"]
    },
    {
        text: "業精於勤，荒於嬉；行成於思，毀於隨。",
        author: "韓愈",
        fakeAuthors: ["柳宗元", "歐陽修"]
    },
    {
        text: "天下興亡，匹夫有責。",
        author: "顧炎武",
        fakeAuthors: ["王陽明", "顏真卿"]
    },
    {
        text: "路遙知馬力，日久見人心。",
        author: "元·錢思復",
        fakeAuthors: ["諸葛亮", "曾國藩"]
    },
    {
        text: "生於憂患，死於安樂。",
        author: "孟子",
        fakeAuthors: ["荀子", "韓非子"]
    },
    {
        text: "少年強則國強，少年智則國智，少年富則國富，少年獨立則國獨立，少年自由則國自由。",
        author: "梁啟超",
        fakeAuthors: ["康有為", "胡適"]
    },
    {
        text: "居廟堂之高則憂其民，處江湖之遠則憂其君。",
        author: "範仲淹",
        fakeAuthors: ["歐陽修", "蘇軾"]
    },
    {
        text: "先天下之憂而憂，後天下之樂而樂。",
        author: "範仲淹",
        fakeAuthors: ["司馬光", "王安石"]
    },
    {
        text: "以銳氣為胆，以識見為膽，以練達為膽，以精神為膽。",
        author: "蔣中正",
        fakeAuthors: ["孫中山", "毛澤東"]
    },
    {
        text: "寧為太平犬，不做亂世人。",
        author: "蘇軾",
        fakeAuthors: ["李白", "杜甫"]
    },
    {
        text: "風聲雨聲讀書聲，聲聲入耳；家事國事天下事，事事關心。",
        author: "顧憲成",
        fakeAuthors: ["王陽明", "顧炎武"]
    },
    {
        text: "吾生也有涯，而知也無涯。",
        author: "莊子",
        fakeAuthors: ["老子", "韓非子"]
    },
    {
        text: "千淘萬漉雖辛苦，吹盡狂沙始到金。",
        author: "劉禹錫",
        fakeAuthors: ["白居易", "杜牧"]
    },
    {
        text: "苟利國家生死以，豈因禍福避趨之。",
        author: "林則徐",
        fakeAuthors: ["顧炎武", "曾國藩"]
    },
    {
        text: "不鳴則已，一鳴驚人。",
        author: "司馬遷",
        fakeAuthors: ["班固", "司馬光"]
    },
  {
    text: "知恥近乎勇。",
    author: "中庸",
    fakeAuthors: ["論語", "大學"],
  },
  {
    text: "鍥而捨之，朽木不折；鍥而不捨，金石可鏤。",
    author: "荀子",
    fakeAuthors: ["孟子", "韓非子"],
  },
  {
    text: "有則改之，無則加勉。",
    author: "朱熹",
    fakeAuthors: ["王陽明", "程頤"],
  },
  {
    text: "臨淵羨魚，不如退而結網。",
    author: "《漢書·董仲舒傳》",
    fakeAuthors: ["司馬遷", "班固"],
  },
  {
    text: "它山之石，可以攻玉。",
    author: "《詩經·小雅·鶴鳴》",
    fakeAuthors: ["論語", "孟子"],
  },
  {
    text: "士別三日，刮目相待。",
    author: "《資治通鑑》",
    fakeAuthors: ["史記", "漢書"],
  },
  {
    text: "人無遠慮，必有近憂。",
    author: "《論語·衛靈公》",
    fakeAuthors: ["孟子", "大學"],
  },
  {
    text: "金玉其外，敗絮其中。",
    author: "劉基",
    fakeAuthors: ["宋濂", "歸有光"],
  },
    {
    text: "當仁不讓於師。",
    author: "論語",
    fakeAuthors: ["孟子", "中庸"],
  },
    {
    text: "青，取之於藍，而青於藍；冰，水為之，而寒於水。",
    author: "荀子",
    fakeAuthors: ["韓非子", "孟子"],
    },
    {
    text: "長江後浪推前浪，浮事新人換舊人",
    author: "劉斧",
    fakeAuthors: ["李清照", "李昴英"],
    },
    {
        text: "不飛則已，一飛沖天；不鳴則已，一鳴驚人。",
        author: "司馬遷",
        fakeAuthors: ["韓非子", "班固"]
    },
    {
        text: "海內存知己，天涯若比鄰。",
        author: "王勃",
        fakeAuthors: ["李白", "杜甫"]
    },
    {
        text: "會當凌絕頂，一覽眾山小。",
        author: "杜甫",
        fakeAuthors: ["李白", "白居易"]
    },
    {
        text: "位卑未敢忘憂國。",
        author: "陸游",
        fakeAuthors: ["范仲淹", "辛棄疾"]
    },
    {
        text: "博觀而約取，厚積而薄發。",
        author: "蘇軾",
        fakeAuthors: ["歐陽修", "王安石"]
    },
    {
        text: "大丈夫生於天地間，不識其主而事之，是無志也。",
        author: "諸葛亮",
        fakeAuthors: ["劉邦", "韓信"]
    },
    {
        text: "風蕭蕭兮易水寒，壯士一去兮不復還。",
        author: "荊軻",
        fakeAuthors: ["項羽", "司馬遷"]
    },
    {
        text: "人生如逆旅，我亦是行人。",
        author: "蘇軾",
        fakeAuthors: ["杜牧", "王維"]
    },
    {
        text: "人生如夢，一尊還酹江月。",
        author: "蘇軾",
        fakeAuthors: ["辛棄疾", "李清照"]
    },
    {
        text: "小不忍則亂大謀。",
        author: "孔子",
        fakeAuthors: ["孟子", "莊子"]
    },
    {
        text: "精誠所至，金石為開。",
        author: "《後漢書》",
        fakeAuthors: ["史記", "左傳"]
    },
    {
        text: "君子坦蕩蕩，小人長戚戚。",
        author: "論語",
        fakeAuthors: ["孟子", "韓非子"]
    },
    {
        text: "人固有一死，或重於泰山，或輕於鴻毛。",
        author: "司馬遷",
        fakeAuthors: ["班固", "韓非子"]
    },
    {
        text: "尺有所短，寸有所長。",
        author: "屈原",
        fakeAuthors: ["莊子", "老子"]
    },
    {
        text: "千磨萬擊還堅勁，任爾東西南北風。",
        author: "鄭燮",
        fakeAuthors: ["文天祥", "林則徐"]
    },
    {
        text: "位卑未敢忘憂國。",
        author: "陸游",
        fakeAuthors: ["辛棄疾", "范仲淹"]
    },
    {
        text: "寧為玉碎，不為瓦全。",
        author: "李白",
        fakeAuthors: ["杜甫", "蘇軾"]
    },
    {
        text: "不積跬步，無以至千里；不積小流，無以成江海。",
        author: "荀子",
        fakeAuthors: ["韓非子", "孟子"]
    },
    {
        text: "生當作人傑，死亦為鬼雄。",
        author: "李清照",
        fakeAuthors: ["杜甫", "王維"]
    },
    {
        text: "先天下之憂而憂，後天下之樂而樂。",
        author: "范仲淹",
        fakeAuthors: ["歐陽修", "王安石"]
    },
    {
        text: "千軍易得，一將難求。",
        author: "《三國志》",
        fakeAuthors: ["孫武", "韓信"]
    },
    {
        text: "燕雀安知鴻鵠之志哉？",
        author: "陳勝",
        fakeAuthors: ["項羽", "韓信"]
    },
    {
        text: "天將降大任於斯人也，必先苦其心志，勞其筋骨。",
        author: "孟子",
        fakeAuthors: ["荀子", "韓非子"]
    },
    {
        text: "橫眉冷對千夫指，俯首甘為孺子牛。",
        author: "魯迅",
        fakeAuthors: ["胡適", "李大釗"]
    },
    {
        text: "三軍可奪帥也，匹夫不可奪志也。",
        author: "孔子",
        fakeAuthors: ["孟子", "韓非子"]
    },
    {
        text: "言之無文，行而不遠。",
        author: "孔子",
        fakeAuthors: ["孟子", "莊子"]
    },
    {
        text: "不經一番寒徹骨，怎得梅花撲鼻香。",
        author: "黃蘗禪師",
        fakeAuthors: ["王安石", "杜牧"]
    },
    {
        text: "生如夏花之絢爛，死如秋葉之靜美。",
        author: "泰戈爾",
        fakeAuthors: ["魯迅", "冰心"]
    },
    {
        text: "紙上得來終覺淺，絕知此事要躬行。",
        author: "陸游",
        fakeAuthors: ["杜甫", "蘇軾"]
    },
    {
        text: "千里之行，始於足下。",
        author: "老子",
        fakeAuthors: ["孔子", "墨子"]
    },
    {
        text: "知恥近乎勇。",
        author: "中庸",
        fakeAuthors: ["論語", "大學"]
    },
    {
        text: "不經一番寒徹骨，怎得梅花撲鼻香。",
        author: "黃檗禪師",
        fakeAuthors: ["王安石", "白居易"]
    },
    {
        text: "以直報怨，以德報德。",
        author: "孔子",
        fakeAuthors: ["孟子", "老子"]
    },
    {
        text: "歲寒，然後知松柏之後凋也。",
        author: "論語",
        fakeAuthors: ["孟子", "莊子"]
    },
    {
        text: "物以類聚，人以群分。",
        author: "易經",
        fakeAuthors: ["論語", "韓非子"]
    },
    {
        text: "得道者多助，失道者寡助。",
        author: "孟子",
        fakeAuthors: ["荀子", "老子"]
    },
    {
        text: "大丈夫能屈能伸。",
        author: "《左傳》",
        fakeAuthors: ["孟子", "韓非子"]
    },
    {
        text: "祸兮福之所倚，福兮祸之所伏。",
        author: "老子",
        fakeAuthors: ["莊子", "列子"]
    },
    {
        text: "玉不琢，不成器；人不學，不知道。",
        author: "禮記",
        fakeAuthors: ["論語", "荀子"]
    },
    {
        text: "莫愁前路無知己，天下誰人不識君。",
        author: "高適",
        fakeAuthors: ["杜甫", "王昌齡"]
    },
    {
        text: "學然後知不足，教然後知困。",
        author: "禮記",
        fakeAuthors: ["論語", "荀子"]
    },
    {
        text: "志士不飲盜泉之水，廉者不受嗟來之食。",
        author: "後漢書",
        fakeAuthors: ["論語", "韓非子"]
    },
    {
        text: "才者，德之資也；德者，才之帥也。",
        author: "司馬光",
        fakeAuthors: ["范仲淹", "王陽明"]
    },
    {
        text: "忍一時風平浪靜，退一步海闊天空。",
        author: "林則徐",
        fakeAuthors: ["曾國藩", "鄭板橋"]
    },
    {
        text: "滴水穿石，非一日之功。",
        author: "羅大經",
        fakeAuthors: ["韓愈", "朱熹"]
    },
    {
        text: "知人者智，自知者明。",
        author: "老子",
        fakeAuthors: ["莊子", "孔子"]
    },
    {
        text: "心有靈犀一點通。",
        author: "李商隱",
        fakeAuthors: ["杜牧", "白居易"]
    },
    {
        text: "人生若只如初見，何事秋風悲畫扇。",
        author: "納蘭性德",
        fakeAuthors: ["李清照", "杜牧"]
    },
    {
        text: "落霞與孤鶩齊飛，秋水共長天一色。",
        author: "王勃",
        fakeAuthors: ["李白", "杜甫"]
    },
    {
        text: "三軍可奪帥也，匹夫不可奪志也。",
        author: "論語",
        fakeAuthors: ["孟子", "韓非子"]
    },
    {
        text: "寧為玉碎，不為瓦全。",
        author: "《北齊書》",
        fakeAuthors: ["司馬光", "范仲淹"]
    },
    {
        text: "人生如逆旅，我亦是行人。",
        author: "蘇軾",
        fakeAuthors: ["李白", "杜甫"]
    },
    {
        text: "書山有路勤為徑，學海無涯苦作舟。",
        author: "韓愈",
        fakeAuthors: ["朱熹", "范仲淹"]
    },
    {
        text: "黑髮不知勤學早，白首方悔讀書遲。",
        author: "顏真卿",
        fakeAuthors: ["柳宗元", "杜甫"]
    },
    {
        text: "桃李不言，下自成蹊。",
        author: "《史記》",
        fakeAuthors: ["韓非子", "孔子"]
    },
    {
        text: "君子藏器於身，待時而動。",
        author: "《周易》",
        fakeAuthors: ["論語", "荀子"]
    },
    {
        text: "志當存高遠。",
        author: "諸葛亮",
        fakeAuthors: ["司馬遷", "范仲淹"]
    },
    {
        text: "生亦何歡，死亦何苦。",
        author: "李白",
        fakeAuthors: ["杜甫", "王之渙"]
    }
];
