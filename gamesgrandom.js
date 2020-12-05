const fs = require('fs');

function Winrate() {
    let winrate = Math.floor(Math.random() * 101);
    return winrate
}



// create a JSON object
const gamesg = [{
        "ID": 1,
        "GAME_CAMPS": "SG",
        "GAMENAME": "FISHING GOD",
        "IMG_PATH": "./SG/1 FISHING GOD.png",
        "GAME_IMG": "1 FISHING GOD.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 2,
        "GAME_CAMPS": "SG",
        "GAMENAME": "DOUBLE FLAME",
        "IMG_PATH": "./SG/2 DOUBLE FLAME.png",
        "GAME_IMG": "2 DOUBLE FLAME.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 3,
        "GAME_CAMPS": "SG",
        "GAMENAME": "BOOK OF MYTH",
        "IMG_PATH": "./SG/3 BOOK OF MYTH.png",
        "GAME_IMG": "3 BOOK MYTH.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 4,
        "GAME_CAMPS": "SG",
        "GAMENAME": "MONEY MOUSE",
        "IMG_PATH": "./SG/4 MONEY MOUSE.png",
        "GAME_IMG": "4 MONEY MOUSE.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 5,
        "GAME_CAMPS": "SG",
        "GAMENAME": "888",
        "IMG_PATH": "./SG/5 888.png",
        "GAME_IMG": "5 888 888.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 6,
        "GAME_CAMPS": "SG",
        "GAMENAME": "THREE LUCKY STARS",
        "IMG_PATH": "./SG/6 THREE LUCKY STARS.png",
        "GAME_IMG": "6 THREE STARS.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 7,
        "GAME_CAMPS": "SG",
        "GAMENAME": "HEROES",
        "IMG_PATH": "./SG/7 HEROES.png",
        "GAME_IMG": "7 HEROES HEROES.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 8,
        "GAME_CAMPS": "SG",
        "GAMENAME": "SWEET BAKERY",
        "IMG_PATH": "./SG/8 SWEET BAKERY.png",
        "GAME_IMG": "8 SWEET BAKERY.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 9,
        "GAME_CAMPS": "SG",
        "GAMENAME": "MAGICAL LAMP",
        "IMG_PATH": "./SG/9 MAGICAL LAMP.png",
        "GAME_IMG": "9 MAGICAL LAMP.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 10,
        "GAME_CAMPS": "SG",
        "GAMENAME": "DANCING FEVER",
        "IMG_PATH": "./SG/10 DANCING FEVER.png",
        "GAME_IMG": "10 DANCING FEVER.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 11,
        "GAME_CAMPS": "SG",
        "GAMENAME": "GOLD PANTHER",
        "IMG_PATH": "./SG/11 GOLD PANTHER.png",
        "GAME_IMG": "11 GOLD PANTHER.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 12,
        "GAME_CAMPS": "SG",
        "GAMENAME": "TRIPLE PANDA",
        "IMG_PATH": "./SG/12 TRIPLE PANDA.png",
        "GAME_IMG": "12 TRIPLE PANDA.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 13,
        "GAME_CAMPS": "SG",
        "GAMENAME": "FAFAFA",
        "IMG_PATH": "./SG/13 FAFAFA FAFAFA.png",
        "GAME_IMG": "13 FAFAFA FAFAFA.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 14,
        "GAME_CAMPS": "SG",
        "GAMENAME": "GOLDEN WHALE",
        "IMG_PATH": "./SG/14 GOLDEN WHALE.png",
        "GAME_IMG": "14 GOLDEN WHALE.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 15,
        "GAME_CAMPS": "SG",
        "GAMENAME": "BABY CAI SHEN",
        "IMG_PATH": "./SG/15 BABY SHEN.png",
        "GAME_IMG": "15 BABY SHEN.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 16,
        "GAME_CAMPS": "SG",
        "GAMENAME": "DOUBLE FORTUNES",
        "IMG_PATH": "./SG/16 DOUBLE FORTUNES.png",
        "GAME_IMG": "16 DOUBLE FORTUNES.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 17,
        "GAME_CAMPS": "SG",
        "GAMENAME": "LUCKY CAI SHEN",
        "IMG_PATH": "./SG/17 LUCKY SHEN.png",
        "GAME_IMG": "17 LUCKY SHEN.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 18,
        "GAME_CAMPS": "SG",
        "GAMENAME": "DRAGON GOLD SA",
        "IMG_PATH": "./SG/18 DRAGON SA.png",
        "GAME_IMG": "18 DRAGON SA.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 19,
        "GAME_CAMPS": "SG",
        "GAMENAME": "LUCKY KOI",
        "IMG_PATH": "./SG/19 LUCKY KOI.png",
        "GAME_IMG": "19 LUCKY KOI.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 20,
        "GAME_CAMPS": "SG",
        "GAMENAME": "BIG PROSPERITY SA",
        "IMG_PATH": "./SG/20 BIG SA.png",
        "GAME_IMG": "20 BIG SA.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 21,
        "GAME_CAMPS": "SG",
        "GAMENAME": "DA FU XIAO FU",
        "IMG_PATH": "./SG/21 DA FU.png",
        "GAME_IMG": "21 DA FU.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 22,
        "GAME_CAMPS": "SG",
        "GAMENAME": "CAI YUAN GUANG JIN",
        "IMG_PATH": "./SG/22 CAI JIN.png",
        "GAME_IMG": "22 CAI JIN.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 23,
        "GAME_CAMPS": "SG",
        "GAMENAME": "PROSPERITY GODS",
        "IMG_PATH": "./SG/23 PROSPERITY GODS.png",
        "GAME_IMG": "23 PROSPERITY GODS.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 24,
        "GAME_CAMPS": "SG",
        "GAMENAME": "ZEUS",
        "IMG_PATH": "./SG/24 ZEUS ZEUS.png",
        "GAME_IMG": "24 ZEUS ZEUS.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 25,
        "GAME_CAMPS": "SG",
        "GAMENAME": "5 FORTUNE DRAGONS",
        "IMG_PATH": "./SG/25 5 FORTUNE DRAGONS.png",
        "GAME_IMG": "25 5 FORTUNE DRAGONS.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 26,
        "GAME_CAMPS": "SG",
        "GAMENAME": "BROTHERS KINGDOM",
        "IMG_PATH": "./SG/26 BROTHERS KINGDOM.png",
        "GAME_IMG": "26 BROTHERS KINGDOM.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 27,
        "GAME_CAMPS": "SG",
        "GAMENAME": "PRINCESS WANG",
        "IMG_PATH": "./SG/27 PRINCESS WANG.png",
        "GAME_IMG": "27 PRINCESS WANG.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 28,
        "GAME_CAMPS": "SG",
        "GAMENAME": "HOYEAH! MONKEY",
        "IMG_PATH": "./SG/28 HOYEAH MONKEY.png",
        "GAME_IMG": "28 HOYEAH MONKEY.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 29,
        "GAME_CAMPS": "SG",
        "GAMENAME": "WONG CHOY SA",
        "IMG_PATH": "./SG/29 WONG SA.png",
        "GAME_IMG": "29 WONG SA.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 30,
        "GAME_CAMPS": "SG",
        "GAMENAME": "FAFAFA 2",
        "IMG_PATH": "./SG/30 FAFAFA FAFAFA 2.png",
        "GAME_IMG": "30 FAFAFA FAFAFA 2.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 31,
        "GAME_CAMPS": "SG",
        "GAMENAME": "MR CHU TYCOON",
        "IMG_PATH": "./SG/31 MR TYCOON.png",
        "GAME_IMG": "31 MR TYCOON.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 32,
        "GAME_CAMPS": "SG",
        "GAMENAME": "GOLF CHAMPION",
        "IMG_PATH": "./SG/32 GOLF CHAMPION.png",
        "GAME_IMG": "32 GOLF CHAMPION.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 33,
        "GAME_CAMPS": "SG",
        "GAMENAME": "GOLDEN CHICKEN",
        "IMG_PATH": "./SG/33 GOLDEN CHICKEN.png",
        "GAME_IMG": "33 GOLDEN CHICKEN.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 34,
        "GAME_CAMPS": "SG",
        "GAMENAME": "ALIBABA",
        "IMG_PATH": "./SG/34 ALIBABA ALIBABA.png",
        "GAME_IMG": "34 ALIBABA ALIBABA.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 35,
        "GAME_CAMPS": "SG",
        "GAMENAME": "HIGHWAY FORTUNE",
        "IMG_PATH": "./SG/35 HIGHWAY FORTUNE.png",
        "GAME_IMG": "35 HIGHWAY FORTUNE.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 36,
        "GAME_CAMPS": "SG",
        "GAMENAME": "SANTA GIFTS",
        "IMG_PATH": "./SG/36 SANTA GIFTS.png",
        "GAME_IMG": "36 SANTA GIFTS.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 37,
        "GAME_CAMPS": "SG",
        "GAMENAME": "SEA EMPEROR",
        "IMG_PATH": "./SG/37 SEA EMPEROR.png",
        "GAME_IMG": "37 SEA EMPEROR.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 38,
        "GAME_CAMPS": "SG",
        "GAMENAME": "DADDY VACATION",
        "IMG_PATH": "./SG/38 DADDY VACATION.png",
        "GAME_IMG": "38 DADDY VACATION.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 39,
        "GAME_CAMPS": "SG",
        "GAMENAME": "FESTIVE LION",
        "IMG_PATH": "./SG/39 FESTIVE LION.png",
        "GAME_IMG": "39 FESTIVE LION.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 40,
        "GAME_CAMPS": "SG",
        "GAMENAME": "MERMAID",
        "IMG_PATH": "./SG/40 MERMAID MERMAID.png",
        "GAME_IMG": "40 MERMAID MERMAID.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 41,
        "GAME_CAMPS": "SG",
        "GAMENAME": "PIRATE KING",
        "IMG_PATH": "./SG/41 PIRATE KING.png",
        "GAME_IMG": "41 PIRATE KING.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 42,
        "GAME_CAMPS": "SG",
        "GAMENAME": "DRUNKEN JUNGLE",
        "IMG_PATH": "./SG/42 DRUNKEN JUNGLE.png",
        "GAME_IMG": "42 DRUNKEN JUNGLE.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 43,
        "GAME_CAMPS": "SG",
        "GAMENAME": "EMPEROR GATE SA",
        "IMG_PATH": "./SG/43 EMPEROR SA.png",
        "GAME_IMG": "43 EMPEROR SA.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 44,
        "GAME_CAMPS": "SG",
        "GAMENAME": "CAI SHEN 888",
        "IMG_PATH": "./SG/44 CAI SHEN 888.png",
        "GAME_IMG": "44 CAI SHEN 888.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 45,
        "GAME_CAMPS": "SG",
        "GAMENAME": "GOLDEN FIST",
        "IMG_PATH": "./SG/45 GOLDEN FIST.png",
        "GAME_IMG": "45 GOLDEN FIST.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 46,
        "GAME_CAMPS": "SG",
        "GAMENAME": "WOW PROSPERITY",
        "IMG_PATH": "./SG/46 WOW PROSPERITY.png",
        "GAME_IMG": "46 WOW PROSPERITY.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 47,
        "GAME_CAMPS": "SG",
        "GAMENAME": "GANGSTER AXE",
        "IMG_PATH": "./SG/47 GANGSTER AXE.png",
        "GAME_IMG": "47 GANGSTER AXE.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 48,
        "GAME_CAMPS": "SG",
        "GAMENAME": "PAN FAIRY",
        "IMG_PATH": "./SG/48 PAN FAIRY.png",
        "GAME_IMG": "48 PAN FAIRY.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 49,
        "GAME_CAMPS": "SG",
        "GAMENAME": "GOLDEN MONKEY",
        "IMG_PATH": "./SG/49 GOLDEN MONKEY.png",
        "GAME_IMG": "49 GOLDEN MONKEY.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 50,
        "GAME_CAMPS": "SG",
        "GAMENAME": "SHANGHAI 008",
        "IMG_PATH": "./SG/50 SHANGHAI SHANGHAI 008.png",
        "GAME_IMG": "50 SHANGHAI SHANGHAI 008.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 51,
        "GAME_CAMPS": "SG",
        "GAMENAME": "JUNGLE KING",
        "IMG_PATH": "./SG/51 JUNGLE KING.png",
        "GAME_IMG": "51 JUNGLE KING.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 52,
        "GAME_CAMPS": "SG",
        "GAMENAME": "FIST OF GOLD",
        "IMG_PATH": "./SG/52 FIST GOLD.png",
        "GAME_IMG": "52 FIST GOLD.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 53,
        "GAME_CAMPS": "SG",
        "GAMENAME": "TIGER WARRIOR",
        "IMG_PATH": "./SG/53 TIGER WARRIOR.png",
        "GAME_IMG": "53 TIGER WARRIOR.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 54,
        "GAME_CAMPS": "SG",
        "GAMENAME": "KING PHARAOH",
        "IMG_PATH": "./SG/54 KING PHARAOH.png",
        "GAME_IMG": "54 KING PHARAOH.png",
        "WINRATE": Winrate()
    },
    {
        "ID": 55,
        "GAME_CAMPS": "SG",
        "GAMENAME": "HONEY HUNTER",
        "IMG_PATH": "./SG/55 HONEY HUNTER.png",
        "GAME_IMG": "55 HONEY HUNTER.png",
        "WINRATE": Winrate()
    }
];

// convert JSON object to string
const data = JSON.stringify(gamesg);

// write JSON string to a file
fs.writeFile('gamesg.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("gamesg jsondata data is saved.");
});