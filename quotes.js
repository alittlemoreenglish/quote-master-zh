const quotes = [
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
    }
];
