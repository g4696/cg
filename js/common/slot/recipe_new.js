
var recipe = {
	wp01:[
		{name:'長劍', mt1:'m101', qty1:4, mt2:'w01', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'闊劍', mt1:'m101', qty1:4, mt2:'m102', qty2:3, mt3:'w01', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'突刺劍', mt1:'m101', qty1:5, mt2:'m102', qty2:4, mt3:'w01', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'火舌劍', mt1:'m101', qty1:7, mt2:'m102', qty2:5, mt3:'w02', qty3:20, mt4:'w03', qty4:20, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'麵包劍', mt1:'m101', qty1:7, mt2:'m102', qty2:6, mt3:'m103', qty3:5, mt4:'', qty4:0, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'雙手劍', mt1:'m102', qty1:10, mt2:'m103', qty2:8, mt3:'w02', qty3:20, mt4:'w04', qty4:20, mt5:'', qty5:0, level:3, code:'3b'},
		{name:'雙刃長劍', mt1:'m101', qty1:15, mt2:'m102', qty2:5, mt3:'m104', qty3:5, mt4:'w03', qty4:20, mt5:'', qty5:0, level:4, code:'4a'},
		{name:'鎖刃劍', mt1:'m102', qty1:10, mt2:'m104', qty2:7, mt3:'m105', qty3:5, mt4:'w03', qty4:20, mt5:'', qty5:0, level:4, code:'4b'},
		{name:'格鬥劍', mt1:'m102', qty1:10, mt2:'m103', qty2:3, mt3:'m104', qty3:6, mt4:'m105', qty4:7, mt5:'w04', qty5:20, level:5, code:'5a'},
		{name:'長鍔劍', mt1:'m101', qty1:10, mt2:'m102', qty2:8, mt3:'m103', qty3:7, mt4:'m105', qty4:8, mt5:'w06', qty5:20, level:5, code:'5b'},
		{name:'黑作太刀', mt1:'m101', qty1:10, mt2:'m102', qty2:10, mt3:'m103a', qty3:7, mt4:'m105', qty4:7, mt5:'w06', qty5:20, level:5, code:'5c'},
		{name:'豬牙劍', mt1:'m103', qty1:10, mt2:'m104', qty2:10, mt3:'m106', qty3:8, mt4:'w04', qty4:20, mt5:'w05', qty5:20, level:6, code:'6a'},
		{name:'雙刃闊劍', mt1:'m104', qty1:6, mt2:'m105', qty2:10, mt3:'m106', qty3:10, mt4:'w05', qty4:20, mt5:'w07', qty5:20, level:6, code:'6b'},
		{name:'巨劍', mt1:'m104', qty1:15, mt2:'m106', qty2:10, mt3:'m107', qty3:7, mt4:'w06', qty4:20, mt5:'s07', qty5:1, level:7, code:'7a'},
		{name:'長軍刀', mt1:'m103', qty1:10, mt2:'m105', qty2:13, mt3:'m107', qty3:11, mt4:'w01', qty4:20, mt5:'w07', qty5:20, level:7, code:'7b'},
		{name:'水龍之劍', mt1:'wd01', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'m107', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'護身短劍', mt1:'m101', qty1:15, mt2:'m106', qty2:16, mt3:'m107', qty3:13, mt4:'w08', qty4:20, mt5:'s06', qty5:1, level:8, code:'8a'},
		{name:'細柄短劍', mt1:'m107', qty1:10, mt2:'m108', qty2:13, mt3:'w02', qty3:20, mt4:'w06', qty4:20, mt5:'w08', qty5:20, level:8, code:'8b'},
		{name:'長軍刀+', mt1:'m107', qty1:18, mt2:'m108', qty2:18, mt3:'w08', qty3:20, mt4:'m008b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'細刃重劍', mt1:'m102', qty1:10, mt2:'m106', qty2:10, mt3:'m107', qty3:10, mt4:'m108', qty4:10, mt5:'w09', qty5:20, level:9, code:'9a'},
		{name:'剛硬巨劍', mt1:'m104', qty1:10, mt2:'m108', qty2:10, mt3:'m109', qty3:10, mt4:'w05', qty4:20, mt5:'s07', qty5:2, level:9, code:'9b'},
		{name:'青龍刀', mt1:'m105', qty1:10, mt2:'m108', qty2:10, mt3:'m109', qty3:10, mt4:'w08', qty4:20, mt5:'w10', qty5:20, level:10, code:'10a'},
		{name:'曲刀', mt1:'m108', qty1:10, mt2:'m110', qty2:10, mt3:'w09', qty3:20, mt4:'s07', qty4:2, mt5:'s06', qty5:2, level:10, code:'10b'},
		{name:'彎勾劍', mt1:'m108a', qty1:5, mt2:'m109', qty2:4, mt3:'w10', qty3:40, mt4:'w09', qty4:40, mt5:'s07', qty5:2, level:11, code:'11a'},
		{name:'剛毅', mt1:'m108a', qty1:4, mt2:'m108', qty2:5, mt3:'m109', qty3:5, mt4:'w10', qty4:40, mt5:'s06', qty5:2, level:11, code:'11b'},
		{name:'烏金劍', mt1:'w11', qty1:20, mt2:'w10', qty2:20, mt3:'m111', qty3:9, mt4:'m110b', qty4:11, mt5:'m110', qty5:5, level:11, code:'11c'},
		{name:'流瑩劍', mt1:'w11', qty1:20, mt2:'w12', qty2:20, mt3:'m110b', qty3:15, mt4:'m111', qty4:12, mt5:'m112', qty5:6, level:12, code:'12a'},
		{name:'天使長劍', mt1:'w12', qty1:40, mt2:'m108a', qty2:12, mt3:'m108', qty3:19, mt4:'m112', qty4:7, mt5:'', qty5:0, level:12, code:'12b'},
		{name:'碎藥之劍', mt1:'s06', qty1:7, mt2:'m110', qty2:17, mt3:'m112', qty3:8, mt4:'w11', qty4:20, mt5:'w12', qty5:20, level:12, code:'12c'},
		{name:'追風劍', mt1:'w12', qty1:20, mt2:'w13', qty2:20, mt3:'m110', qty3:19, mt4:'m112', qty4:13, mt5:'m113', qty5:7, level:13, code:'13a'},
		{name:'楓紅劍', mt1:'w11', qty1:20, mt2:'w12', qty2:20, mt3:'m110b', qty3:15, mt4:'m111', qty4:12, mt5:'m112', qty5:6, level:13, code:'13b'},
		{name:'風虎巨劍', mt1:'s04', qty1:100, mt2:'m113', qty2:40, mt3:'s103', qty3:5, mt4:'s106', qty4:5, mt5:'wt01', qty5:1, level:13, code:'13c'},
		{name:'逐霓劍', mt1:'s08', qty1:3, mt2:'w14', qty2:20, mt3:'m112', qty3:10, mt4:'m113', qty4:10, mt5:'m114', qty5:4, level:14, code:'14a'},
		{name:'破石巨刃', mt1:'w14', qty1:40, mt2:'m111', qty2:7, mt3:'m112', qty3:13, mt4:'m113', qty4:5, mt5:'m114', qty5:12, level:14, code:'14b'},
		{name:'兩儀劍', mt1:'w15', qty1:40, mt2:'m112', qty2:14, mt3:'m113', qty3:4, mt4:'m114', qty4:12, mt5:'m115', qty5:8, level:15, code:'15a'},
		{name:'勇者之劍', mt1:'s103', qty1:4, mt2:'w15', qty2:40, mt3:'m110b', qty3:4, mt4:'m114', qty4:17, mt5:'m115', qty5:11, level:15, code:'15b'}
	],
// 11C劍：烏金劍
// 棗木20 梣20 石墨條9 雅達曼鎝條11 奧利哈鋼條5
// 12A劍：流瑩劍
// 棗木20 藤木20 雅達曼鎝條15 石墨條12 鉛錠6
// 12B劍：天使長劍
// 藤木40 達馬斯礦條12 幻之銀條19 鉛錠7
// 12C劍：碎藥之劍
// 魔族的水晶7 奧利哈剛17 鉛錠8 棗木20 藤木20
// 13A劍：追風劍
// 藤木20 桃花心木20 奧利哈鋼條19 鉛錠13 朱砂錠7
// 13B劍：楓紅劍
// 鋼騎之礦4 桃花心木40 謝爾哈特礦條19 鉛錠6 朱砂錠18
// 14A劍：逐霓劍
// 誓言之證3 檜木20 鉛錠10 朱砂錠10 紫英石4
// 14B劍：破石巨刃
// 檜木40 石墨條7 鉛錠13 朱砂錠5 紫英石12
// 15A劍：兩儀劍
// 檀木40 鉛錠14 朱砂錠4 紫英石12 石油8
// 15B劍：勇者之劍
// 火山岩石4 檀木40 雅達曼鎝條4 紫英石17 石油11
// 13C劍：風虎巨劍
// 風的水晶碎片100 朱砂錠40 火山岩石5 光輝結晶5 塵封的大劍1
	wp02:[
		{name:'手斧', mt1:'m101', qty1:4, mt2:'w01', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'勇氣之斧', mt1:'m101', qty1:4, mt2:'m102', qty2:3, mt3:'w01', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'寬手斧', mt1:'m101', qty1:7, mt2:'m102', qty2:4, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'戰鬥手斧', mt1:'m102', qty1:10, mt2:'m103', qty2:5, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'格鬥手斧', mt1:'m101', qty1:9, mt2:'m102', qty2:5, mt3:'m103', qty3:5, mt4:'w03', qty4:20, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'鋼斧', mt1:'m101', qty1:10, mt2:'m102', qty2:9, mt3:'m104', qty3:4, mt4:'w03', qty4:20, mt5:'', qty5:0, level:3, code:'3b'},
		{name:'長戰斧', mt1:'m101', qty1:8, mt2:'m102', qty2:8, mt3:'m103', qty3:7, mt4:'m104', qty4:3, mt5:'w04', qty5:20, level:4, code:'4a'},
		{name:'雙刃斧', mt1:'m102', qty1:10, mt2:'m103', qty2:7, mt3:'m104', qty3:5, mt4:'m105', qty4:4, mt5:'w01', qty5:20, level:4, code:'4b'},
		{name:'鉤爪斧', mt1:'m103', qty1:10, mt2:'m104', qty2:10, mt3:'m105', qty3:5, mt4:'w02', qty4:20, mt5:'w05', qty5:20, level:5, code:'5a'},
		{name:'闊刃斧', mt1:'m102', qty1:10, mt2:'m103', qty2:10, mt3:'m104', qty3:10, mt4:'m106', qty4:2, mt5:'w05', qty5:20, level:5, code:'5b'},
		{name:'鑽保雷格之斧', mt1:'m103a', qty1:7, mt2:'m102', qty2:10, mt3:'m104', qty3:7, mt4:'m106', qty4:2, mt5:'w05', qty5:20, level:5, code:'5c'},
		{name:'彎月大戰斧', mt1:'m104', qty1:10, mt2:'m105', qty2:10, mt3:'m106', qty3:6, mt4:'w03', qty4:20, mt5:'w06', qty5:20, level:6, code:'6a'},
		{name:'大型闊刃斧', mt1:'m103', qty1:8, mt2:'m104', qty2:10, mt3:'m105', qty3:10, mt4:'m107', qty4:3, mt5:'w06', qty5:20, level:6, code:'6b'},
		{name:'大型雙刃斧', mt1:'m102', qty1:20, mt2:'m106', qty2:12, mt3:'m107', qty3:6, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:7, code:'7a'},
		{name:'超大皇帝斧', mt1:'m104', qty1:20, mt2:'m106', qty2:10, mt3:'m107', qty3:10, mt4:'w07', qty4:20, mt5:'s08', qty5:1, level:7, code:'7b'},
		{name:'水龍之斧', mt1:'wd02', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'m107', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'新月斧', mt1:'m105', qty1:13, mt2:'m106', qty2:10, mt3:'m108', qty3:10, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:8, code:'8a'},
		{name:'米諾陶斯戰斧', mt1:'m104', qty1:10, mt2:'m107', qty2:10, mt3:'m108', qty3:10, mt4:'w08', qty4:20, mt5:'s06', qty5:1, level:8, code:'8b'},
		{name:'大型雙刃斧+', mt1:'m107', qty1:20, mt2:'m108', qty2:12, mt3:'w08', qty3:20, mt4:'m008b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'薄刃鉤爪斧', mt1:'m106', qty1:10, mt2:'m107', qty2:10, mt3:'m109', qty3:10, mt4:'w07', qty4:20, mt5:'w08', qty5:20, level:9, code:'9a'},
		{name:'彎月長柄斧', mt1:'m105', qty1:10, mt2:'m108', qty2:10, mt3:'m109', qty3:10, mt4:'w09', qty4:20, mt5:'s08', qty5:2, level:9, code:'9b'},
		{name:'金屬重斧', mt1:'m107', qty1:10, mt2:'m108', qty2:10, mt3:'m110', qty3:8, mt4:'w08', qty4:20, mt5:'w09', qty5:20, level:10, code:'10a'},
		{name:'處刑斧', mt1:'m110', qty1:14, mt2:'w10', qty2:20, mt3:'s07', qty3:2, mt4:'s06', qty4:2, mt5:'s08', qty5:2, level:10, code:'10b'},
		{name:'高速斧', mt1:'m108a', qty1:8, mt2:'m108', qty2:8, mt3:'m109', qty3:6, mt4:'w10', qty4:40, mt5:'s07', qty5:2, level:11, code:'11a'},
		{name:'重擊斧', mt1:'m108a', qty1:3, mt2:'m108', qty2:10, mt3:'m107', qty3:9, mt4:'w10', qty4:40, mt5:'s06', qty5:2, level:11, code:'11b'},
		{name:'百鍊斧', mt1:'w11', qty1:20, mt2:'m107', qty2:13, mt3:'m111', qty3:4, mt4:'m110', qty4:9, mt5:'m109', qty5:18, level:11, code:'11c'},
		{name:'飛龍斧', mt1:'w12', qty1:20, mt2:'m108', qty2:7, mt3:'m110', qty3:2, mt4:'m111', qty4:11, mt5:'m112', qty5:5, level:12, code:'12a'},
		{name:'天使斧槍', mt1:'m108', qty1:20, mt2:'m010a', qty2:8, mt3:'m112', qty3:9, mt4:'m111', qty4:12, mt5:'', qty5:0, level:12, code:'12b'},
		{name:'碎藥之斧', mt1:'s09', qty1:3, mt2:'w11', qty2:20, mt3:'m110', qty3:17, mt4:'m112', qty4:20, mt5:'m111', qty5:15, level:12, code:'12c'},
		{name:'巨闕斧', mt1:'w12', qty1:20, mt2:'w13', qty2:20, mt3:'m111', qty3:9, mt4:'m112', qty4:12, mt5:'m113', qty5:13, level:13, code:'13a'},
		{name:'白龍之翼', mt1:'w12', qty1:40, mt2:'w13', qty2:40, mt3:'m110b', qty3:11, mt4:'m112', qty4:12, mt5:'m113', qty5:13, level:13, code:'13b'},
		{name:'劈山神斧', mt1:'m110', qty1:4, mt2:'m110b', qty2:13, mt3:'m112', qty3:6, mt4:'m113', qty4:18, mt5:'m114', qty5:6, level:14, code:'14a'},
		{name:'颶風審判者', mt1:'w14', qty1:40, mt2:'m109', qty2:10, mt3:'m112', qty3:14, mt4:'m113', qty4:7, mt5:'m114', qty5:14, level:14, code:'14b'},
		{name:'蚩尤斧', mt1:'w15', qty1:40, mt2:'m112', qty2:4, mt3:'m113', qty3:20, mt4:'m114', qty4:17, mt5:'m115', qty5:4, level:15, code:'15a'},
		{name:'制裁者之斧', mt1:'s104', qty1:3, mt2:'w15', qty2:20, mt3:'m112', qty3:11, mt4:'m114', qty4:17, mt5:'m115', qty5:9, level:15, code:'15b'}
	],
// 11C斧：百鍊斧
// 棗木20、幻之鋼條13、石墨條4、奧利哈鋼條9、勒格耐席鉧條18
// 12A斧：飛龍斧
// 藤木20、幻之銀條7、奧利哈鋼條2、石墨條11、鉛錠5
// 12B斧：天使斧槍
// 幻之銀條20 喜馬拉斯礦8 鉛錠9 石墨條12
// 12C斧：碎藥之斧
// 得特家的布3、棗木20、奧利哈鋼條17、鉛錠20、石墨條15
// 13A斧：巨闕斧
// 藤木20、桃花心木20、石墨條9、鉛錠12、朱砂錠13
// 13B斧：白龍之翼
// 藤木40 桃花心木40 雅達曼塔條11 鉛錠12 朱砂錠13
// 14A斧：劈山神斧
// 奧利哈鋼條4、雅達曼鎝條13、鉛錠6、朱砂錠18、紫英石6
// 14B斧：颶風審判者
// 檜木40 勒格耐席鉧10 鉛錠14 朱砂錠7 紫英石14
// 15A斧：蚩尤斧
// 檀木40、鉛錠4、朱砂錠20、紫英石17、石油4
// 15B斧：制裁者之斧
// 鋼鐵斷刃3 檀木20 鉛錠11 紫石英17 石油9
	wp03:[
		{name:'短矛', mt1:'m101', qty1:4, mt2:'w01', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'攻城槍', mt1:'m101', qty1:5, mt2:'m102', qty2:3, mt3:'w01', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'刺槍', mt1:'m101', qty1:7, mt2:'m102', qty2:4, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'金屬槍', mt1:'m101', qty1:8, mt2:'m102', qty2:5, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'長柄彎槍', mt1:'m101', qty1:10, mt2:'m102', qty2:6, mt3:'m103', qty3:3, mt4:'w02', qty4:20, mt5:'w03', qty5:20, level:3, code:'3a'},
		{name:'長柄尖槍', mt1:'m102', qty1:8, mt2:'m103', qty2:6, mt3:'m104', qty3:5, mt4:'w02', qty4:20, mt5:'w03', qty5:20, level:3, code:'3b'},
		{name:'穗槍', mt1:'m102', qty1:8, mt2:'m103', qty2:7, mt3:'m104', qty3:7, mt4:'w03', qty4:20, mt5:'w04', qty5:20, level:4, code:'4a'},
		{name:'雙叉戟', mt1:'m103', qty1:10, mt2:'m104', qty2:10, mt3:'m105', qty3:3, mt4:'w03', qty4:20, mt5:'w04', qty5:20, level:4, code:'4b'},
		{name:'護衛槍', mt1:'m103', qty1:15, mt2:'m105', qty2:10, mt3:'w03', qty3:20, mt4:'w04', qty4:20, mt5:'w05', qty5:20, level:5, code:'5a'},
		{name:'騎士槍', mt1:'m103', qty1:15, mt2:'m106', qty2:10, mt3:'w02', qty3:20, mt4:'w04', qty4:20, mt5:'w05', qty5:20, level:5, code:'5b'},
		{name:'偃月刀', mt1:'m102', qty1:10, mt2:'m103a', qty2:5, mt3:'w03a', qty3:20, mt4:'w04', qty4:20, mt5:'w05', qty5:20, level:5, code:'5c'},
		{name:'大砍槍', mt1:'m104', qty1:7, mt2:'m105', qty2:8, mt3:'m106', qty3:10, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:6, code:'6a'},
		{name:'長尖槍', mt1:'m105', qty1:9, mt2:'m106', qty2:10, mt3:'m107', qty3:5, mt4:'w04', qty4:20, mt5:'w06', qty5:20, level:6, code:'6b'},
		{name:'蠍槍', mt1:'m103', qty1:15, mt2:'m106', qty2:10, mt3:'m107', qty3:8, mt4:'w03', qty4:20, mt5:'w07', qty5:20, level:7, code:'7a'},
		{name:'雙刃槍', mt1:'m106', qty1:10, mt2:'m107', qty2:14, mt3:'s07', qty3:1, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:7, code:'7b'},
		{name:'水龍之槍', mt1:'wd03', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'m107', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'闊刃槍', mt1:'m108', qty1:20, mt2:'w04', qty2:20, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:8, code:'8a'},
		{name:'東方長刺鎗', mt1:'m106', qty1:9, mt2:'m107', qty2:9, mt3:'m108', qty3:10, mt4:'w08', qty4:20, mt5:'s06', qty5:1, level:8, code:'8b'},
		{name:'蠍槍+', mt1:'m107', qty1:17, mt2:'m108', qty2:13, mt3:'w08', qty3:20, mt4:'m008b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'鉤爪槍', mt1:'m109', qty1:15, mt2:'w05', qty2:20, mt3:'w06', qty3:20, mt4:'w07', qty4:20, mt5:'w08', qty5:20, level:9, code:'9a'},
		{name:'原始槍', mt1:'m107', qty1:10, mt2:'m108', qty2:10, mt3:'m109', qty3:10, mt4:'w09', qty4:20, mt5:'s07', qty5:2, level:9, code:'9b'},
		{name:'三叉戰戟', mt1:'m110', qty1:10, mt2:'w06', qty2:20, mt3:'w07', qty3:20, mt4:'w08', qty4:20, mt5:'w09', qty5:20, level:10, code:'10a'},
		{name:'異型槍', mt1:'m108', qty1:10, mt2:'m109', qty2:10, mt3:'m110', qty3:10, mt4:'w10', qty4:20, mt5:'s06', qty5:3, level:10, code:'10b'},
		{name:'痛擊槍', mt1:'m109', qty1:9, mt2:'w09', qty2:40, mt3:'w08a', qty3:40, mt4:'w10', qty4:40, mt5:'s07', qty5:2, level:11, code:'11a'},
		{name:'穿刺槍', mt1:'m108', qty1:13, mt2:'w09', qty2:40, mt3:'w08a', qty3:40, mt4:'w10', qty4:40, mt5:'s06', qty5:2, level:11, code:'11b'},
		{name:'烈火槍', mt1:'m111', qty1:4, mt2:'m110', qty2:4, mt3:'w11', qty3:40, mt4:'w10', qty4:40, mt5:'w08a', qty5:40, level:11, code:'11c'},
		{name:'鬼戈', mt1:'m112', qty1:11, mt2:'w12', qty2:20, mt3:'w10a', qty3:20, mt4:'w10', qty4:40, mt5:'w09', qty5:40, level:12, code:'12a'},
		{name:'天使騎槍', mt1:'w08', qty1:40, mt2:'w12', qty2:40, mt3:'m110', qty3:10, mt4:'m111', qty4:6, mt5:'m112', qty5:13, level:12, code:'12b'},
		{name:'碎藥之槍', mt1:'s07', qty1:4, mt2:'w12', qty2:20, mt3:'w11', qty3:20, mt4:'m111', qty4:12, mt5:'m112', qty5:7, level:12, code:'12c'},
		{name:'疾風槍', mt1:'m008c', qty1:12, mt2:'m111', qty2:12, mt3:'w11', qty3:40, mt4:'w10', qty4:40, mt5:'w12', qty5:40, level:13, code:'13a'},
		{name:'守護者之翼', mt1:'w10', qty1:40, mt2:'w13', qty2:40, mt3:'m112', qty3:9, mt4:'m108a', qty4:19, mt5:'m113', qty5:10, level:13, code:'13b'},
		{name:'落雷之槍', mt1:'s08', qty1:7, mt2:'m114', qty2:12, mt3:'w13', qty3:40, mt4:'w14', qty4:40, mt5:'w12', qty5:40, level:14, code:'14a'},
		{name:'青炎槍', mt1:'w14', qty1:40, mt2:'m110b', qty2:6, mt3:'m112', qty3:17, mt4:'m113', qty4:17, mt5:'m114', qty5:7, level:14, code:'14b'},
		{name:'黃金矛', mt1:'s06', qty1:4, mt2:'m115', qty2:17, mt3:'w13', qty3:20, mt4:'w14', qty4:40, mt5:'w15', qty5:20, level:15, code:'15a'},
		{name:'殉教者長槍', mt1:'s102', qty1:4, mt2:'w14', qty2:40, mt3:'w15', qty3:40, mt4:'m114', qty4:19, mt5:'m115', qty5:9, level:15, code:'15b'}
	],
// 11C槍：烈火槍
// 火焰之魂5、喜馬拉斯礦條7、棗木40、梣40、月桂木40		// old
// 石墨條4、奧利哈鋼條4、棗木40、梣40、單木40
// 12A槍：鬼戈
// 魔族的水晶7、奧利哈鋼條10、棗木40、梣40、月桂木40		// old
// 鉛錠11、藤木20、月桂木20、梣40、絲柏40
// 12B槍：天使騎槍
// 杉40、藤木40、奧利哈鋼條10、石墨條6、鉛錠13
// 12C槍：碎藥之槍
// 鋼騎之礦4、藤木20、棗木20、石墨條12、鉛錠7
// 13A槍：疾風槍
// 藍龍之麟12、石墨條12、棗木40、梣40、藤木40
// 13B槍：守護者之翼
// 梣40、桃花心木40、鉛錠9、達馬斯礦條19、朱砂錠10
// 14A槍：落雷之槍
// 誓言之證7、紫英石12、桃花心木40、檜木40、藤木40
// 14B槍：青炎槍
// 檜木40、雅達曼鎝條6、鉛錠17、朱砂錠17、紫英石7
// 15A槍：黃金矛
// 太古的道具2、紫英石15、桃花心木40、檜木40、藤木40
// 魔族的水晶4、石油17、桃花心木20、檜木40、檀木20
// 15B槍：殉教者長槍
// 冰龍石4、檜木40、檀木40、紫英石19、石油9
	wp04:[
		{name:'輕型弓', mt1:'m101', qty1:3, mt2:'w01', qty2:20, mt3:'c101', qty3:1, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'威力短弓', mt1:'m101', qty1:2, mt2:'w01', qty2:20, mt3:'w02', qty3:20, mt4:'c101', qty4:3, mt5:'c102', qty5:2, level:1, code:'1b'},
		{name:'短戰弓', mt1:'m102', qty1:2, mt2:'w01', qty2:20, mt3:'w02', qty3:20, mt4:'c101', qty4:5, mt5:'c102', qty5:4, level:2, code:'2a'},
		{name:'獵弓', mt1:'m102', qty1:4, mt2:'w02', qty2:20, mt3:'w03', qty3:20, mt4:'c101', qty4:3, mt5:'c102', qty5:6, level:2, code:'2b'},
		{name:'強弓', mt1:'m103', qty1:8, mt2:'w01', qty2:20, mt3:'w02', qty3:20, mt4:'w03', qty4:20, mt5:'c103', qty5:7, level:3, code:'3a'},
		{name:'格鬥弓', mt1:'m103', qty1:9, mt2:'w02', qty2:20, mt3:'w03', qty3:20, mt4:'w04', qty4:20, mt5:'c103', qty5:9, level:3, code:'3b'},
		{name:'狙擊弓', mt1:'m104', qty1:10, mt2:'w02', qty2:20, mt3:'w03', qty3:20, mt4:'w04', qty4:20, mt5:'c103', qty5:10, level:4, code:'4a'},
		{name:'超強狙擊弓', mt1:'m104', qty1:11, mt2:'w03', qty2:20, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'c104', qty5:11, level:4, code:'4b'},
		{name:'殺手長弓', mt1:'m104', qty1:9, mt2:'m105', qty2:11, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'c103', qty5:5, level:5, code:'5a'},
		{name:'衝擊弓', mt1:'m103', qty1:5, mt2:'m105', qty2:19, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:5, code:'5b'},
		{name:'米斯特汀之弓', mt1:'m103a', qty1:19, mt2:'m105', qty2:15, mt3:'w03a', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:5, code:'5c'},
		{name:'巨弓', mt1:'m105', qty1:12, mt2:'m106', qty2:11, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:6, code:'6a'},
		{name:'長格鬥弓', mt1:'m105', qty1:13, mt2:'m106', qty2:12, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:6, code:'6b'},
		{name:'破邪長弓', mt1:'m106', qty1:10, mt2:'m107', qty2:10, mt3:'c106', qty3:6, mt4:'w07', qty4:20, mt5:'s08', qty5:1, level:7, code:'7a'},
		{name:'月光長弓', mt1:'m106', qty1:8, mt2:'m107', qty2:16, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:7, code:'7b'},
		{name:'水龍之弓', mt1:'wd04', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'w07', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'原始石弓', mt1:'m106', qty1:20, mt2:'m107', qty2:14, mt3:'w07', qty3:20, mt4:'w08', qty4:20, mt5:'s06', qty5:1, level:8, code:'8a'},
		{name:'重弦弓', mt1:'m107', qty1:11, mt2:'m108', qty2:12, mt3:'w06', qty3:20, mt4:'w07', qty4:20, mt5:'w08', qty5:20, level:8, code:'8b'},
		{name:'月光之弓+', mt1:'m108', qty1:20, mt2:'w07', qty2:20, mt3:'w08', qty3:20, mt4:'g08d', qty4:10, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'平行弓', mt1:'m107', qty1:15, mt2:'m108', qty2:15, mt3:'w07', qty3:20, mt4:'w08', qty4:20, mt5:'w09', qty5:20, level:9, code:'9a'},
		{name:'靈魂之弓', mt1:'m108', qty1:15, mt2:'m109', qty2:10, mt3:'w08', qty3:20, mt4:'w09', qty4:20, mt5:'s07', qty5:2, level:9, code:'9b'},
		{name:'摘星之弓', mt1:'m108', qty1:20, mt2:'m109', qty2:10, mt3:'w08', qty3:20, mt4:'w09', qty4:20, mt5:'w10', qty5:20, level:10, code:'10a'},
		{name:'魔彈', mt1:'m109', qty1:6, mt2:'m110', qty2:10, mt3:'w09', qty3:20, mt4:'w10', qty4:20, mt5:'s06', qty5:4, level:10, code:'10b'},
		{name:'調和之弓', mt1:'m108a', qty1:4, mt2:'m109', qty2:3, mt3:'w09', qty3:40, mt4:'w10', qty4:20, mt5:'s06', qty5:2, level:11, code:'11a'},
		{name:'月之弓', mt1:'m108', qty1:13, mt2:'m109', qty2:9, mt3:'w08a', qty3:40, mt4:'w10', qty4:40, mt5:'s05', qty5:2, level:11, code:'11b'},
		{name:'連弩', mt1:'m111', qty1:6, mt2:'m110a', qty2:6, mt3:'w11', qty3:20, mt4:'w10', qty4:20, mt5:'w09', qty5:40, level:11, code:'11c'},
		{name:'落星弓', mt1:'m112', qty1:9, mt2:'m111', qty2:8, mt3:'w11', qty3:20, mt4:'w10', qty4:40, mt5:'w10a', qty5:20, level:12, code:'12a'},
		{name:'天使之弓', mt1:'m108d', qty1:13, mt2:'m112', qty2:10, mt3:'w08a', qty3:40, mt4:'w11', qty4:40, mt5:'w12', qty5:40, level:12, code:'12b'},
		{name:'碎藥之弓', mt1:'s06', qty1:7, mt2:'m110', qty2:17, mt3:'m112', qty3:8, mt4:'w11', qty4:20, mt5:'w12', qty5:20, level:12, code:'12c'},
		{name:'穿雲弓', mt1:'m113', qty1:12, mt2:'m112', qty2:6, mt3:'m111', qty3:12, mt4:'w11', qty4:20, mt5:'w12', qty5:40, level:13, code:'13a'},
		{name:'獸角長弓', mt1:'m113', qty1:19, mt2:'m109a', qty2:9, mt3:'w09', qty3:40, mt4:'w11', qty4:40, mt5:'w13', qty5:40, level:13, code:'13b'},
		{name:'風虎弓', mt1:'s04', qty1:100, mt2:'m113', qty2:40, mt3:'s103', qty3:5, mt4:'s106', qty4:5, mt5:'wt04', qty5:1, level:13, code:'13c'},
		{name:'射日弓', mt1:'m111', qty1:14, mt2:'m112', qty2:14, mt3:'m113', qty3:7, mt4:'m114', qty4:7, mt5:'w14', qty5:40, level:14, code:'14a'},
		{name:'碧空機弩', mt1:'m112', qty1:11, mt2:'m114', qty2:6, mt3:'w08', qty3:40, mt4:'w13', qty4:40, mt5:'w14', qty5:40, level:14, code:'14b'},
		{name:'七彩琉璃弓', mt1:'s08', qty1:3, mt2:'m114', qty2:7, mt3:'m115', qty3:11, mt4:'w14', qty4:40, mt5:'w15', qty5:40, level:15, code:'15a'},
		{name:'天行者之弓', mt1:'s102', qty1:3, mt2:'m112', qty2:16, mt3:'m115', qty3:6, mt4:'w14', qty4:40, mt5:'w15', qty5:40, level:15, code:'15b'}
	],
// 11C弓：連弩
// 石墨條6、雅達曼鎝條6、棗木20、梣20、絲柏40
// 12A弓：落星弓
// 鉛錠9 石墨條8 棗木20 梣40 月桂木20
// 12B弓：天使之弓
// 萊姆騎士礦條13 鉛錠10 單木40 棗木40 藤木40
// 12C弓：碎藥之弓
// 魔族的水晶7 奧利哈剛17 鉛錠8 棗木20 藤木20
// 13A弓：穿雲弓
// 朱砂錠12 鉛錠6 石墨條12 棗木20 藤木40
// 13B弓：獸角長弓
// 朱砂錠19 謝爾哈特礦條9 絲柏40 棗木40 桃花心木40
// 14A弓：射日弓
// 石墨條14 鉛錠14 朱砂錠7 紫英石7 檜木40
// 14B弓：碧空機弩
// 鉛錠11 紫英石6 杉40 桃花心木40 檜木40
// 15A弓：七彩琉璃弓
// 誓言之證3 紫英石7 石油11 檜木40 檀木40
// 15B弓：天行者之弓
// 冰龍石3 鉛錠16 石油6 檜木40 檀木40
// 13C弓：風虎弓
// 風的水晶碎片100 朱砂錠40 火山岩石5 光輝結晶5 塵封的長弓1
	wp05:[
		{name:'短杖', mt1:'m101', qty1:4, mt2:'w01', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'權杖', mt1:'m101', qty1:6, mt2:'m102', qty2:2, mt3:'w01', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'大地之杖', mt1:'m102', qty1:10, mt2:'w01', qty2:20, mt3:'w02', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'激流權杖', mt1:'m102', qty1:12, mt2:'w01', qty2:20, mt3:'w02', qty3:20, mt4:'w03', qty4:20, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'魔之手杖', mt1:'m102', qty1:14, mt2:'m103', qty2:2, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'w03', qty5:20, level:3, code:'3a'},
		{name:'魔之權杖', mt1:'m102', qty1:11, mt2:'m103', qty2:8, mt3:'w01', qty3:20, mt4:'w03', qty4:20, mt5:'w04', qty5:20, level:3, code:'3b'},
		{name:'賢者手杖', mt1:'m103', qty1:10, mt2:'m104', qty2:10, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'w04', qty5:20, level:4, code:'4a'},
		{name:'賢者權杖', mt1:'m103', qty1:12, mt2:'m104', qty2:12, mt3:'w02', qty3:20, mt4:'w04', qty4:20, mt5:'w05', qty5:20, level:4, code:'4b'},
		{name:'琥珀杖', mt1:'m105', qty1:16, mt2:'w02', qty2:20, mt3:'w03', qty3:20, mt4:'w04', qty4:20, mt5:'w05', qty5:20, level:5, code:'5a'},
		{name:'琥珀權杖', mt1:'m105', qty1:17, mt2:'w03', qty2:20, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:5, code:'5b'},
		{name:'魔晶之杖', mt1:'m103a', qty1:7, mt2:'w03a', qty2:20, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:5, code:'5c'},
		{name:'元素之杖', mt1:'m106', qty1:16, mt2:'w03', qty2:20, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:6, code:'6a'},
		{name:'神聖之杖', mt1:'m106', qty1:17, mt2:'w04', qty2:20, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:6, code:'6b'},
		{name:'怒音之杖', mt1:'m107', qty1:18, mt2:'w04', qty2:20, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:7, code:'7a'},
		{name:'隱者之杖', mt1:'m106', qty1:12, mt2:'m107', qty2:9, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:7, code:'7b'},
		{name:'水龍之杖', mt1:'wd05', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'w07', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'光明短杖', mt1:'m106', qty1:10, mt2:'m107', qty2:12, mt3:'w06', qty3:20, mt4:'w07', qty4:20, mt5:'w08', qty5:20, level:8, code:'8a'},
		{name:'惡魔之杖', mt1:'m107', qty1:10, mt2:'m108', qty2:7, mt3:'w06', qty3:20, mt4:'w07', qty4:20, mt5:'w08', qty5:20, level:8, code:'8b'},
		{name:'落雷權杖+', mt1:'m108', qty1:15, mt2:'w07', qty2:20, mt3:'w08', qty3:20, mt4:'g08d', qty4:10, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'太陽短杖', mt1:'m108', qty1:15, mt2:'w08', qty2:20, mt3:'w09', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:9, code:'9a'},
		{name:'天使之杖', mt1:'m108', qty1:15, mt2:'w08', qty2:20, mt3:'w09', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:9, code:'9b'},
		{name:'聖者之杖', mt1:'m110', qty1:10, mt2:'w09', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:10, code:'10a'},
		{name:'星屑短杖', mt1:'m109', qty1:15, mt2:'w09', qty2:20, mt3:'w10', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:10, code:'10b'},
		{name:'王者之手', mt1:'m108a', qty1:3, mt2:'m109', qty2:3, mt3:'w09', qty3:40, mt4:'w10', qty4:40, mt5:'s06', qty5:1, level:11, code:'11a'},
		{name:'星錘杖', mt1:'m109', qty1:3, mt2:'w08a', qty2:40, mt3:'w09', qty3:40, mt4:'w10', qty4:40, mt5:'s06', qty5:1, level:11, code:'11b'},
		{name:'紅蓮杖', mt1:'m111', qty1:4, mt2:'m109', qty2:11, mt3:'m110', qty3:9, mt4:'w10a', qty4:20, mt5:'w11', qty5:20, level:11, code:'11c'},
		{name:'貔貅杖', mt1:'m112', qty1:6, mt2:'m111', qty2:4, mt3:'m110', qty3:11, mt4:'w11', qty4:20, mt5:'w12', qty5:20, level:12, code:'12a'},
		{name:'天使魔杖', mt1:'w09', qty1:40, mt2:'w11', qty2:40, mt3:'m110b', qty3:11, mt4:'m112', qty4:7, mt5:'', qty5:0, level:12, code:'12b'},
		{name:'碎藥之法杖', mt1:'s06', qty1:4, mt2:'m110', qty2:18, mt3:'m112', qty3:9, mt4:'w11', qty4:20, mt5:'w12', qty5:20, level:12, code:'12c'},
		{name:'碎藥之權杖', mt1:'s05', qty1:3, mt2:'s08', qty2:4, mt3:'m111', qty3:13, mt4:'w11', qty4:20, mt5:'w12', qty5:20, level:12, code:'12d'},
		{name:'鬼頭杖', mt1:'m112', qty1:10, mt2:'m113', qty2:10, mt3:'w11', qty3:20, mt4:'w12', qty4:20, mt5:'w13', qty5:20, level:13, code:'13a'},
		{name:'普羅米修斯手杖', mt1:'w09', qty1:40, mt2:'w11', qty2:40, mt3:'w13', qty3:40, mt4:'m112', qty4:9, mt5:'m113', qty5:12, level:13, code:'13b'},
		{name:'風虎杖', mt1:'s04', qty1:100, mt2:'m113', qty2:40, mt3:'s103', qty3:5, mt4:'s106', qty4:5, mt5:'wt05', qty5:1, level:13, code:'13c'},
		{name:'青蛇杖', mt1:'m111', qty1:10, mt2:'m112', qty2:10, mt3:'m113', qty3:8, mt4:'m114', qty4:7, mt5:'w14', qty5:20, level:14, code:'14a'},
		{name:'大主教權杖', mt1:'w11', qty1:10, mt2:'w14', qty2:40, mt3:'m111', qty3:12, mt4:'m113', qty4:19, mt5:'m114', qty5:9, level:14, code:'14b'},
		{name:'追魂杖', mt1:'s06', qty1:7, mt2:'m114', qty2:15, mt3:'m115', qty3:5, mt4:'w14', qty4:40, mt5:'w15', qty5:40, level:15, code:'15a'},
		{name:'先知者手杖', mt1:'s105', qty1:3, mt2:'w14', qty2:40, mt3:'w15', qty3:40, mt4:'m114', qty4:12, mt5:'m115', qty5:17, level:15, code:'15b'}
	],
// 11C杖：紅蓮杖
// 石墨條4、勒格耐席鉧條11、奧利哈鋼條9、月桂木20、棗木20
// 12A杖：貔貅杖
// 鉛錠6、石墨條4、奧利哈鋼條11、棗木40、藤木20
// 12B杖：天使魔杖
// 絲柏40 藤木40 雅達曼鎝條11 鉛錠7
// 12C杖：碎藥之法杖
// 魔族的水晶4 奧利哈剛18 鉛錠9 棗木20 藤木20
// 12D杖：碎藥之權杖
// 火焰之魂3 誓言之證4 石墨條13 棗木20 藤木20
// 13A杖：鬼頭杖
// 鉛錠10、朱砂錠10、棗木40、藤木40、桃花心木20
// 13B杖：普羅米修斯手杖
// 絲柏40 藤木40 桃花心木40 鉛錠9 朱砂錠12
// 14A杖：青蛇杖
// 石墨條10、鉛錠10、朱砂錠8、紫英石7、檜木20
// 14B杖：大主教權杖
// 棗木10 檜木40 石墨條12 朱砂錠19 紫英石9
// 15A杖：追魂杖
// 魔族的水晶7、紫英石15、石油5、檜木40、檀木40
// 15B杖：先知者手杖
// 魔法之羽3 檜木40 檀木40 紫英石12 石油17
// 13C杖：風虎杖
// 風的水晶碎片100 朱砂錠40 火山岩石5 光輝結晶5 塵封的手杖1
	wp06:[
		{name:'小刀', mt1:'m101', qty1:4, mt2:'w01', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'銳刃小刀', mt1:'m101', qty1:4, mt2:'m102', qty2:4, mt3:'w02', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'圓盤小刀', mt1:'m101', qty1:6, mt2:'m102', qty2:3, mt3:'w02', qty3:20, mt4:'c102', qty4:3, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'細刃擲刀', mt1:'m102', qty1:7, mt2:'m103', qty2:3, mt3:'w02', qty3:20, mt4:'w03', qty4:20, mt5:'c102', qty5:4, level:2, code:'2b'},
		{name:'滑翔小刀', mt1:'m102', qty1:8, mt2:'m103', qty2:5, mt3:'w02', qty3:20, mt4:'w03', qty4:20, mt5:'c103', qty5:4, level:3, code:'3a'},
		{name:'細直刃小刀', mt1:'m103', qty1:7, mt2:'m104', qty2:5, mt3:'w03', qty3:20, mt4:'w04', qty4:20, mt5:'c103', qty5:7, level:3, code:'3b'},
		{name:'耳柄小刀', mt1:'m103', qty1:8, mt2:'m104', qty2:7, mt3:'w03', qty3:20, mt4:'w04', qty4:20, mt5:'c104', qty5:7, level:4, code:'4a'},
		{name:'騎士小刀', mt1:'m104', qty1:8, mt2:'m105', qty2:7, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'c104', qty5:8, level:4, code:'4b'},
		{name:'球鍔小刀', mt1:'m104', qty1:7, mt2:'m105', qty2:8, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'c105', qty5:8, level:5, code:'5a'},
		{name:'雙刃小刀', mt1:'m104', qty1:8, mt2:'m105', qty2:7, mt3:'m106', qty3:7, mt4:'w04', qty4:20, mt5:'w06', qty5:20, level:5, code:'5b'},
		{name:'忍者飛鏢', mt1:'m103a', qty1:6, mt2:'m104', qty2:5, mt3:'m106', qty3:5, mt4:'w04', qty4:20, mt5:'w06', qty5:20, level:5, code:'5c'},
		{name:'闊刃小刀', mt1:'m104', qty1:8, mt2:'m105', qty2:7, mt3:'m106', qty3:8, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:6, code:'6a'},
		{name:'觸角小刀', mt1:'m107', qty1:15, mt2:'w05', qty2:20, mt3:'w06', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:6, code:'6b'},
		{name:'漢拉提小刀', mt1:'m107', qty1:10, mt2:'w06', qty2:20, mt3:'w07', qty3:20, mt4:'c105', qty4:10, mt5:'s13', qty5:1, level:7, code:'7a'},
		{name:'兇殺刀', mt1:'m106', qty1:10, mt2:'m107', qty2:10, mt3:'w04', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:7, code:'7b'},
		{name:'水龍的小刀', mt1:'wd06', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'m107', qty4:10, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'切肉小刀', mt1:'m107', qty1:20, mt2:'w06', qty2:20, mt3:'w07', qty3:20, mt4:'w08', qty4:20, mt5:'s06', qty5:1, level:8, code:'8a'},
		{name:'古傳小刀', mt1:'m108', qty1:14, mt2:'w03', qty2:20, mt3:'w04', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:8, code:'8b'},
		{name:'疾速短刀+', mt1:'m108', qty1:12, mt2:'w07', qty2:20, mt3:'w08', qty3:20, mt4:'g08d', qty4:10, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'華麗小刀', mt1:'m108', qty1:20, mt2:'w06', qty2:20, mt3:'w07', qty3:20, mt4:'w08', qty4:20, mt5:'w09', qty5:20, level:9, code:'9a'},
		{name:'手裡劍', mt1:'m109', qty1:15, mt2:'w07', qty2:20, mt3:'w08', qty3:20, mt4:'s07', qty4:1, mt5:'s08', qty5:1, level:9, code:'9b'},
		{name:'勾爪擲刀', mt1:'m109', qty1:15, mt2:'w07', qty2:20, mt3:'w08', qty3:20, mt4:'w09', qty4:20, mt5:'w10', qty5:20, level:10, code:'10a'},
		{name:'幻之匕首', mt1:'m110', qty1:10, mt2:'w10', qty2:20, mt3:'s13', qty3:1, mt4:'s07', qty4:1, mt5:'s08', qty5:1, level:10, code:'10b'},
		{name:'破滅刀', mt1:'m108a', qty1:4, mt2:'m109', qty2:3, mt3:'w09', qty3:40, mt4:'w10', qty4:40, mt5:'s06', qty5:1, level:11, code:'11a'},
		{name:'兇殘刀', mt1:'m108', qty1:2, mt2:'m109', qty2:5, mt3:'w08a', qty3:40, mt4:'w10', qty4:40, mt5:'s06', qty5:2, level:11, code:'11b'},
		{name:'水紋短劍', mt1:'w11', qty1:20, mt2:'w10', qty2:40, mt3:'w09', qty3:40, mt4:'m110', qty4:5, mt5:'m110b', qty5:5, level:11, code:'11c'},
		{name:'響馬小刀', mt1:'w12', qty1:20, mt2:'m109', qty2:6, mt3:'m110', qty3:12, mt4:'m103a', qty4:11, mt5:'m112', qty5:6, level:12, code:'12a'},
		{name:'碎藥之小刀', mt1:'s06', qty1:2, mt2:'s07', qty2:2, mt3:'m112', qty3:12, mt4:'m111', qty4:12, mt5:'m110', qty5:15, level:12, code:'12c'},
		{name:'綠玉小刀', mt1:'w12', qty1:40, mt2:'w13', qty2:40, mt3:'m110b', qty3:17, mt4:'m112', qty4:8, mt5:'m113', qty5:8, level:13, code:'13a'},
		{name:'獅子短刃', mt1:'w10a', qty1:40, mt2:'w11', qty2:40, mt3:'w14', qty3:40, mt4:'m113', qty4:11, mt5:'m114', qty5:6, level:14, code:'14a'},
		{name:'飛龍短刃', mt1:'w15', qty1:20, mt2:'m103a', qty2:18, mt3:'m113', qty3:7, mt4:'m114', qty4:7, mt5:'m115', qty5:11, level:15, code:'15a'}
	],
// 11C小刀：水紋短劍
// 永久冰石5、梣40、絲柏40、奧利哈鋼條3、喜馬拉斯礦條5	//old
// 棗木20、梣40、絲柏40、奧利哈鋼條5、勒格耐席鉧條5
// 12A小刀：響馬小刀
// 藤木20、勒格耐席鉧條6、奧利哈鋼條12、鋁條11、鉛錠6
// 12C小刀：碎藥之小刀
// 13A小刀：綠玉小刀
// 藤木40、桃花心木20、雅達曼鎝條17、鉛錠8、朱砂錠8
// 14A小刀：獅子短刃
// 月桂木40、棗木40、檜木20、朱砂錠11、紫英石6
// 15A小刀：飛龍短刃
// 檀木20、鋁條18、朱砂錠7、紫英石7、石油11
	wp07:[
		{name:'木製大回力鏢', mt1:'m101', qty1:4, mt2:'w01', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'青銅回力鏢', mt1:'m101', qty1:7, mt2:'w01', qty2:20, mt3:'w02', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'追跡者', mt1:'m101', qty1:7, mt2:'m102', qty2:4, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'彩光回力鏢', mt1:'m101', qty1:9, mt2:'m102', qty2:6, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'w03', qty5:20, level:2, code:'2b'},
		{name:'暗殺回力鏢', mt1:'m103', qty1:5, mt2:'w02', qty2:20, mt3:'w03', qty3:20, mt4:'c101', qty4:8, mt5:'c102', qty5:6, level:3, code:'3a'},
		{name:'殺敵回力鏢', mt1:'m103', qty1:12, mt2:'w02', qty2:20, mt3:'w03', qty3:20, mt4:'w04', qty4:20, mt5:'c101', qty5:10, level:3, code:'3b'},
		{name:'獅子回力鏢', mt1:'w02', qty1:20, mt2:'w03', qty2:20, mt3:'w04', qty3:20, mt4:'c103', qty4:10, mt5:'c104', qty5:11, level:4, code:'4a'},
		{name:'銳角回力鏢', mt1:'m104', qty1:11, mt2:'w03', qty2:20, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'c103', qty5:15, level:4, code:'4b'},
		{name:'翼鹿回力鏢', mt1:'w03', qty1:20, mt2:'w04', qty2:20, mt3:'w05', qty3:20, mt4:'c103', qty4:15, mt5:'c105', qty5:10, level:5, code:'5a'},
		{name:'阿修塔羅回力鏢', mt1:'m105', qty1:20, mt2:'w03', qty2:20, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:5, code:'5b'},
		{name:'北斗之鎌刀', mt1:'m103a', qty1:6, mt2:'w03a', qty2:20, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:5, code:'5c'},
		{name:'蛇獅回力鏢', mt1:'m106', qty1:17, mt2:'w03', qty2:20, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:6, code:'6a'},
		{name:'鶇回力鏢', mt1:'m106', qty1:17, mt2:'w04', qty2:20, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:6, code:'6b'},
		{name:'雄翼牛回力鏢', mt1:'m105', qty1:10, mt2:'m107', qty2:10, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'w07', qty5:20, level:7, code:'7a'},
		{name:'閃光回力鏢', mt1:'m106', qty1:8, mt2:'m107', qty2:10, mt3:'w06', qty3:20, mt4:'w07', qty4:20, mt5:'s07', qty5:1, level:7, code:'7b'},
		{name:'冰龍', mt1:'wd07', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'w07', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'凶暴回力鏢', mt1:'m106', qty1:10, mt2:'m107', qty2:12, mt3:'w06', qty3:20, mt4:'w07', qty4:20, mt5:'w08', qty5:20, level:8, code:'8a'},
		{name:'赤獅回力鏢', mt1:'m108', qty1:10, mt2:'w04', qty2:20, mt3:'w07', qty3:20, mt4:'c105', qty4:10, mt5:'s06', qty5:1, level:8, code:'8b'},
		{name:'熊翼回力鏢+', mt1:'m108', qty1:15, mt2:'w07', qty2:20, mt3:'w08', qty3:20, mt4:'g08d', qty4:10, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'天使之翼', mt1:'m107', qty1:10, mt2:'m108', qty2:10, mt3:'w07', qty3:20, mt4:'w08', qty4:20, mt5:'w09', qty5:20, level:9, code:'9a'},
		{name:'普利辛回力鏢', mt1:'m109', qty1:10, mt2:'w08', qty2:20, mt3:'w09', qty3:20, mt4:'s07', qty4:1, mt5:'s06', qty5:1, level:9, code:'9b'},
		{name:'治癒回力鏢', mt1:'m109', qty1:15, mt2:'w08', qty2:20, mt3:'w09', qty3:20, mt4:'w10', qty4:20, mt5:'', qty5:0, level:10, code:'10a'},
		{name:'天秤回力鏢', mt1:'m110', qty1:10, mt2:'w09', qty2:20, mt3:'w10', qty3:20, mt4:'s05', qty4:4, mt5:'s08', qty5:2, level:10, code:'10b'},
		{name:'基盤飛鏢', mt1:'m109', qty1:8, mt2:'w09', qty2:40, mt3:'w08a', qty3:20, mt4:'w10', qty4:40, mt5:'s10', qty5:2, level:11, code:'11a'},
		{name:'節制飛鏢', mt1:'m108a', qty1:2, mt2:'m109', qty2:4, mt3:'w09', qty3:40, mt4:'w10', qty4:40, mt5:'s06', qty5:2, level:11, code:'11b'},
		{name:'天穿雲', mt1:'m111', qty1:8, mt2:'m110', qty2:8, mt3:'m109', qty3:8, mt4:'m108', qty4:8, mt5:'', qty5:0, level:11, code:'11c'},
		{name:'藤環', mt1:'w12', qty1:40, mt2:'m112', qty2:9, mt3:'m111', qty3:9, mt4:'m110b', qty4:11, mt5:'', qty5:0, level:12, code:'12a'},
		{name:'碎藥之迴力鏢', mt1:'s07', qty1:2, mt2:'w11', qty2:20, mt3:'m112', qty3:11, mt4:'m111', qty4:9, mt5:'m110', qty5:7, level:12, code:'12c'},
		{name:'嗜血環', mt1:'s06', qty1:1, mt2:'w13', qty2:20, mt3:'m110b', qty3:9, mt4:'m112', qty4:9, mt5:'m113', qty5:19, level:13, code:'13a'},
		{name:'影誅', mt1:'w14', qty1:20, mt2:'w11', qty2:40, mt3:'w10', qty3:20, mt4:'m113', qty4:13, mt5:'m114', qty5:6, level:14, code:'14a'},
		{name:'霜痕', mt1:'s05', qty1:2, mt2:'w15', qty2:20, mt3:'m111', qty3:15, mt4:'m114', qty4:12, mt5:'m115', qty5:7, level:15, code:'15a'}
	],
// 11C鏢：天穿雲
// 石墨條8 奧利哈鋼條8 勒格耐席鉧條8 幻之銀條8
// 12A鏢：藤環
// 藤木40 鉛錠9 石墨條9 雅達曼鎝條11
// 12C鏢：碎藥之迴力鏢
// 鋼騎之礦2、棗木20、鉛錠11、石墨條9、奧力哈鋼條7
// 13A鏢：嗜血環
// 魔族的水晶1、桃花心木20、雅達曼鎝條9、鉛錠9、朱砂錠19
// 14A鏢：影誅
// 檜木20、棗木40、梣20、朱砂錠13、紫英石6
// 15A鏢：霜痕
// 火焰之魂2、檀木20、石墨條15、紫英石12、石油7
	wp08:[
		{name:'番茄炸彈', mt1:'c101', qty1:4, mt2:'g01b', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, pcs:2, code:'1a'},
		{name:'白米炸彈', mt1:'m101', qty1:8, mt2:'c101', qty2:8, mt3:'g01e', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, pcs:4, code:'1b'},
		{name:'石彈', mt1:'m101', qty1:6, mt2:'c102', qty2:4, mt3:'w03', qty3:20, mt4:'s01', qty4:2, mt5:'', qty5:0, level:2, pcs:2, code:'2a'},
		{name:'火焰彈', mt1:'m103', qty1:2, mt2:'c102', qty2:8, mt3:'w02', qty3:20, mt4:'s03', qty4:8, mt5:'', qty5:0, level:2, pcs:4, code:'2b'},
		{name:'手榴彈', mt1:'m102', qty1:8, mt2:'m103', qty2:6, mt3:'w02', qty3:20, mt4:'w03', qty4:20, mt5:'c103', qty5:4, level:3, pcs:2, code:'3a'},
		{name:'冷凍彈', mt1:'m103', qty1:8, mt2:'m104', qty2:4, mt3:'w04', qty3:16, mt4:'c103', qty4:8, mt5:'s02', qty5:12, level:3, pcs:4, code:'3b'},
		{name:'輪刃', mt1:'m103', qty1:8, mt2:'m104', qty2:8, mt3:'w04', qty3:20, mt4:'c104', qty4:4, mt5:'s04', qty5:16, level:4, pcs:2, code:'4a'},
		{name:'蜂巢', mt1:'m105', qty1:8, mt2:'m104', qty2:8, mt3:'f03', qty3:20, mt4:'f05', qty4:20, mt5:'c104', qty5:8, level:4, pcs:4, code:'4b'},
		{name:'黃色炸彈', mt1:'m105', qty1:10, mt2:'m104', qty2:10, mt3:'w04', qty3:20, mt4:'w05', qty4:20, mt5:'c105', qty5:8, level:5, pcs:4, code:'5a'},
		{name:'迷魂彈', mt1:'m105', qty1:7, mt2:'m104', qty2:8, mt3:'m106', qty3:7, mt4:'w06', qty4:12, mt5:'c105', qty5:20, level:5, pcs:6, code:'5b'},
		{name:'臭彈', mt1:'m105', qty1:7, mt2:'m106', qty2:8, mt3:'w06', qty3:14, mt4:'c106', qty4:8, mt5:'xf10', qty5:1, level:6, pcs:4, code:'6a'},
		{name:'狂風炸彈', mt1:'m107', qty1:12, mt2:'w05', qty2:12, mt3:'w06', qty3:20, mt4:'s04', qty4:30, mt5:'', qty5:0, level:6, pcs:6, code:'6b'},
		{name:'催淚彈', mt1:'m107', qty1:16, mt2:'w06', qty2:20, mt3:'f07', qty3:20, mt4:'c107', qty4:8, mt5:'s13', qty5:1, level:7, pcs:4, code:'7a'},
		{name:'催眠彈', mt1:'m106', qty1:12, mt2:'m107', qty2:12, mt3:'w05', qty3:20, mt4:'w06', qty4:20, mt5:'f07', qty5:20, level:7, pcs:6, code:'7b'},
		{name:'星星彈', mt1:'m107', qty1:20, mt2:'w06', qty2:12, mt3:'w07', qty3:20, mt4:'w08', qty4:20, mt5:'s08', qty5:1, level:8, pcs:4, code:'8a'},
		{name:'毒氣彈', mt1:'m108', qty1:18, mt2:'w04', qty2:10, mt3:'w07', qty3:20, mt4:'c108a', qty4:12, mt5:'g04g', qty5:1, level:8, pcs:6, code:'8b'},
		{name:'碎紙彈', mt1:'m108a', qty1:20, mt2:'f01', qty2:20, mt3:'f08a', qty3:20, mt4:'f09', qty4:16, mt5:'c109', qty5:16, level:9, pcs:10, code:'9a'},
		{name:'雪花彈', mt1:'m109', qty1:15, mt2:'w08', qty2:20, mt3:'m008b', qty3:12, mt4:'s07', qty4:1, mt5:'s08', qty5:1, level:9, pcs:6, code:'9b'},
		{name:'銀彈', mt1:'m109', qty1:15, mt2:'m109a', qty2:12, mt3:'m110a', qty3:8, mt4:'w08a', qty4:20, mt5:'c110', qty5:12, level:10, pcs:10, code:'10a'},
		{name:'震撼彈', mt1:'m110a', qty1:10, mt2:'w10', qty2:20, mt3:'s07', qty3:3, mt4:'s06', qty4:2, mt5:'s08', qty5:2, level:10, pcs:5, code:'10b'},
		{name:'地缚彈', mt1:'s08', qty1:5, mt2:'f03', qty2:5, mt3:'m109a', qty3:10, mt4:'c108b', qty4:10, mt5:'w11', qty5:20, level:11, pcs:10, code:'11a'},
		{name:'千羽彈', mt1:'s15', qty1:6, mt2:'s16', qty2:6, mt3:'m110', qty3:10, mt4:'c111', qty4:10, mt5:'w12', qty5:20, level:12, pcs:10, code:'12a'},
		{name:'入夢彈', mt1:'f05b', qty1:7, mt2:'f02a', qty2:7, mt3:'m112', qty3:10, mt4:'c111', qty4:10, mt5:'w12', qty5:20, level:13, pcs:10, code:'13a'},
		{name:'水煙彈', mt1:'m008b', qty1:7, mt2:'f05a', qty2:7, mt3:'m111', qty3:12, mt4:'c114', qty4:12, mt5:'w13', qty5:20, level:14, pcs:10, code:'14a'},
		{name:'萬蠱彈', mt1:'s10', qty1:2, mt2:'g08d', qty2:10, mt3:'m113', qty3:12, mt4:'c114', qty4:12, mt5:'w13', qty5:20, level:15, pcs:10, code:'15a'}
	],
// 11級炸彈: 地缚彈
// 誓言之證5 蝴蝶花5 謝爾哈特礦條10 阿巴尼斯製的線10 棗木20
// 12級炸彈: 千羽彈
// 紅鳳凰羽毛6 藍鳳凰羽毛6 奧利哈鋼條10 鴨絨10 藤木20
// 13級炸彈: 入夢彈
// 含月草7 薄荷7 鉛錠10 鴨絨10 藤木20
// 14級炸彈: 水煙彈
// 永久冰石7 冰凍愛麗絲7 石墨條12 宁麻布12 桃花心木20
// 15級炸彈: 萬蠱彈
// 蔓陀羅草的皮2 濕地毒蛇10 朱砂錠12 宁麻布12 桃花心木20
	sh01:[
		{name:'硬皮頭盔', mt1:'g01a', qty1:20, mt2:'c101', qty2:2, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'銅製頭盔', mt1:'m101', qty1:3, mt2:'c101', qty2:3, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'鐵板布盔', mt1:'m101', qty1:4, mt2:'m102', qty2:2, mt3:'c101', qty3:3, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'銅鐵皮盔', mt1:'m101', qty1:5, mt2:'m102', qty2:3, mt3:'c101', qty3:2, mt4:'c102', qty4:2, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'金屬護額', mt1:'m101', qty1:4, mt2:'m102', qty2:5, mt3:'m103', qty3:3, mt4:'c102', qty4:2, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'鐵製頭盔', mt1:'m101', qty1:3, mt2:'m102', qty2:10, mt3:'m103', qty3:3, mt4:'c103', qty4:1, mt5:'', qty5:0, level:3, code:'3b'},
		{name:'霸葛頭盔', mt1:'m101', qty1:4, mt2:'m102', qty2:4, mt3:'m103', qty3:5, mt4:'m104', qty4:5, mt5:'', qty5:0, level:4, code:'4a'},
		{name:'角飾頭盔', mt1:'m101', qty1:5, mt2:'m102', qty2:5, mt3:'m103', qty3:5, mt4:'m104', qty4:5, mt5:'c104', qty5:2, level:4, code:'4b'},
		{name:'開放式頭盔', mt1:'m104', qty1:5, mt2:'m105', qty2:8, mt3:'c104', qty3:5, mt4:'', qty4:0, mt5:'', qty5:0, level:5, code:'5a'},
		{name:'葛理克頭盔', mt1:'m104', qty1:5, mt2:'m105', qty2:5, mt3:'c104', qty3:5, mt4:'c105', qty4:5, mt5:'', qty5:0, level:5, code:'5b'},
		{name:'聖騎士之盔', mt1:'w03a', qty1:20, mt2:'m104', qty2:4, mt3:'m105', qty3:4, mt4:'m103a', qty4:3, mt5:'', qty5:0, level:5, code:'5c'},
		{name:'巴比克頭盔', mt1:'m105', qty1:5, mt2:'m106', qty2:8, mt3:'c105', qty3:5, mt4:'', qty4:0, mt5:'', qty5:0, level:6, code:'6a'},
		{name:'利刃頭盔', mt1:'m105', qty1:5, mt2:'m106', qty2:5, mt3:'c105', qty3:5, mt4:'c106', qty4:5, mt5:'', qty5:0, level:6, code:'6b'},
		{name:'騎士頭盔', mt1:'m105', qty1:8, mt2:'m106', qty2:4, mt3:'m107', qty3:5, mt4:'c106', qty4:4, mt5:'s07', qty5:1, level:7, code:'7a'},
		{name:'鋼製頭盔', mt1:'m106', qty1:5, mt2:'m107', qty2:5, mt3:'c105', qty3:9, mt4:'w05', qty4:20, mt5:'w07', qty5:20, level:7, code:'7b'},
		{name:'水龍之盔', mt1:'wd08', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'m107', qty4:10, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'博流蓋爾頭盔', mt1:'m107', qty1:5, mt2:'m108', qty2:5, mt3:'c106', qty3:5, mt4:'w07', qty4:20, mt5:'s08', qty5:5, level:8, code:'8a'},
		{name:'鉚釘頭盔', mt1:'m102', qty1:10, mt2:'m108', qty2:5, mt3:'c107', qty3:5, mt4:'w08', qty4:20, mt5:'', qty5:0, level:8, code:'8b'},
		{name:'鋼製頭盔+', mt1:'m107', qty1:7, mt2:'m108', qty2:5, mt3:'w08', qty3:20, mt4:'m008b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'羽毛頭盔', mt1:'m108', qty1:3, mt2:'m109', qty2:5, mt3:'w07', qty3:20, mt4:'w08', qty4:20, mt5:'c107', qty5:3, level:9, code:'9a'},
		{name:'龍盔', mt1:'m109', qty1:8, mt2:'w09', qty2:20, mt3:'c107', qty3:4, mt4:'s08', qty4:1, mt5:'s07', qty5:1, level:9, code:'9b'},
		{name:'白金頭盔', mt1:'m108', qty1:3, mt2:'m109', qty2:5, mt3:'m110', qty3:3, mt4:'w09', qty4:20, mt5:'c107', qty5:3, level:10, code:'10a'},
		{name:'聖龍頭盔', mt1:'m109', qty1:5, mt2:'m110', qty2:5, mt3:'w10', qty3:20, mt4:'s07', qty4:4, mt5:'s06', qty5:4, level:10, code:'10b'},
		{name:'正義頭盔', mt1:'m103a', qty1:10, mt2:'m108', qty2:7, mt3:'m109', qty3:5, mt4:'w08a', qty4:40, mt5:'s08', qty5:2, level:11, code:'11a'},
		{name:'靈力頭盔', mt1:'m103a', qty1:9, mt2:'m108', qty2:6, mt3:'m109', qty3:6, mt4:'w10', qty4:40, mt5:'s11', qty5:2, level:11, code:'11b'},
		{name:'棗木盔', mt1:'c108b', qty1:10, mt2:'c111', qty2:10, mt3:'m109', qty3:10, mt4:'m108', qty4:17, mt5:'', qty5:0, level:11, code:'11c'},
		{name:'千羽盔', mt1:'c112', qty1:8, mt2:'m110', qty2:15, mt3:'m111', qty3:5, mt4:'m112', qty4:9, mt5:'', qty5:0, level:12, code:'12a'},
		{name:'流金盔', mt1:'c113', qty1:9, mt2:'c108b', qty2:7, mt3:'m109', qty3:11, mt4:'m110', qty4:11, mt5:'m113', qty5:7, level:13, code:'13a'},
		{name:'綠玉盔', mt1:'c114', qty1:4, mt2:'c113', qty2:4, mt3:'c110', qty3:8, mt4:'m113', qty4:9, mt5:'m114', qty5:4, level:14, code:'14a'},
		{name:'飛螢盔', mt1:'s07', qty1:3, mt2:'c115', qty2:11, mt3:'m113', qty3:9, mt4:'m114', qty4:7, mt5:'m115', qty5:7, level:15, code:'15a'}
	],
// 11C盔：棗木盔
// 阿巴尼斯製的線10 鴨絨10 勒格耐席鉧條7 幻之銀條17
// 12盔：千羽盔
// 鵝絨8 奧利哈鋼條15 石墨條5 鉛錠9
// 13盔：流金盔
// 硬綢布9 阿巴尼斯製的線7 勒格耐席鉧條11 奧利哈鋼條11 朱砂錠7
// 14盔：綠玉盔
// 寧麻布4 硬綢布4 開米士毛線8 朱砂錠9 紫英石4
// 15盔：飛螢盔
// 鋼騎之礦3 水鳥羽絨11 朱砂錠9 紫英石7 石油7
	sh02:[
		{name:'麻布帽', mt1:'g01a', qty1:20, mt2:'c101', qty2:2, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'硬帽', mt1:'w01', qty1:20, mt2:'g01a', qty2:20, mt3:'c101', qty3:4, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'輕帽', mt1:'w01', qty1:20, mt2:'f02', qty2:20, mt3:'c101', qty3:5, mt4:'c102', qty4:2, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'皮帽', mt1:'w02', qty1:20, mt2:'f02', qty2:20, mt3:'g01a', qty3:20, mt4:'c101', qty4:6, mt5:'c102', qty5:3, level:2, code:'2b'},
		{name:'硬皮帽', mt1:'m101', qty1:4, mt2:'g01a', qty2:20, mt3:'c102', qty3:5, mt4:'c103', qty4:4, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'可愛的帽子', mt1:'f04', qty1:20, mt2:'c101', qty2:6, mt3:'c102', qty3:6, mt4:'c103', qty4:5, mt5:'', qty5:0, level:3, code:'3b'},
		{name:'時髦帽子', mt1:'f02', qty1:20, mt2:'f03', qty2:20, mt3:'c101', qty3:6, mt4:'c103', qty4:6, mt5:'c104', qty5:6, level:4, code:'4a'},
		{name:'鴨舌帽', mt1:'f04', qty1:20, mt2:'g01a', qty2:20, mt3:'c102', qty3:11, mt4:'c103', qty4:11, mt5:'', qty5:0, level:4, code:'4b'},
		{name:'藍徽章之帽', mt1:'f04', qty1:20, mt2:'c104', qty2:7, mt3:'c105', qty3:10, mt4:'', qty4:0, mt5:'', qty5:0, level:5, code:'5a'},
		{name:'高級帽子', mt1:'f05', qty1:20, mt2:'c104', qty2:8, mt3:'c106', qty3:10, mt4:'', qty4:0, mt5:'', qty5:0, level:5, code:'5b'},
		{name:'劍客帽', mt1:'w03a', qty1:20, mt2:'s01', qty2:2, mt3:'f05', qty3:20, mt4:'c103', qty4:10, mt5:'c106', qty5:4, level:5, code:'5c'},
		{name:'裝飾著花的帽子', mt1:'c104', qty1:19, mt2:'f02', qty2:20, mt3:'f03', qty3:20, mt4:'f04', qty4:20, mt5:'f05', qty5:20, level:6, code:'6a'},
		{name:'青銅帽子', mt1:'m101', qty1:15, mt2:'c104', qty2:14, mt3:'f06', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:6, code:'6b'},
		{name:'淑女帽', mt1:'c105', qty1:10, mt2:'c106', qty2:10, mt3:'f07', qty3:20, mt4:'s02', qty4:5, mt5:'', qty5:0, level:7, code:'7a'},
		{name:'可愛的扁帽子', mt1:'f05', qty1:20, mt2:'f07', qty2:20, mt3:'c107', qty3:13, mt4:'s03', qty4:5, mt5:'', qty5:0, level:7, code:'7b'},
		{name:'水龍之帽', mt1:'wd09', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'f07', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'軍帽', mt1:'f08', qty1:20, mt2:'c104', qty2:5, mt3:'c105', qty3:5, mt4:'c107', qty4:10, mt5:'', qty5:0, level:8, code:'8a'},
		{name:'時髦避暑帽', mt1:'f06', qty1:20, mt2:'f08', qty2:20, mt3:'c108', qty3:10, mt4:'s09', qty4:1, mt5:'', qty5:0, level:8, code:'8b'},
		{name:'可愛的扁帽子+', mt1:'f07', qty1:20, mt2:'f08', qty2:10, mt3:'s03', qty3:10, mt4:'w08b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'頭目帽子', mt1:'wd09', qty1:2, mt2:'s07', qty2:3, mt3:'s06', qty3:3, mt4:'f08a', qty4:20, mt5:'', qty5:0, level:8, code:'8d'},
		{name:'羽毛帽', mt1:'f07', qty1:20, mt2:'f09', qty2:20, mt3:'g01a', qty3:20, mt4:'c107', qty4:6, mt5:'c108', qty5:8, level:9, code:'9a'},
		{name:'魔術師之帽', mt1:'f08', qty1:20, mt2:'f09', qty2:20, mt3:'c103', qty3:20, mt4:'c108', qty4:10, mt5:'s06', qty5:2, level:9, code:'9b'},
		{name:'黃昏之帽', mt1:'f10', qty1:20, mt2:'c104', qty2:5, mt3:'c108', qty3:5, mt4:'c109', qty4:7, mt5:'', qty5:0, level:10, code:'10a'},
		{name:'妖精之帽', mt1:'f10', qty1:20, mt2:'c110', qty2:5, mt3:'c106', qty3:5, mt4:'s10', qty4:5, mt5:'s09', qty5:2, level:10, code:'10b'},
		{name:'貝斯神帽', mt1:'c107', qty1:11, mt2:'f10', qty2:40, mt3:'f08a', qty3:40, mt4:'s10', qty4:2, mt5:'s12', qty5:1, level:11, code:'11a'},
		{name:'神官帽', mt1:'c110', qty1:16, mt2:'s09', qty2:2, mt3:'f09', qty3:40, mt4:'f08a', qty4:40, mt5:'s05', qty5:2, level:11, code:'11b'},
		{name:'絨毛帽', mt1:'f11', qty1:20, mt2:'c109', qty2:9, mt3:'c110', qty3:10, mt4:'c111', qty4:8, mt5:'', qty5:0, level:11, code:'11c'},
		{name:'鵝毛帽', mt1:'f10', qty1:20, mt2:'f11', qty2:20, mt3:'c110', qty3:10, mt4:'c111', qty4:4, mt5:'c112', qty5:7, level:12, code:'12a'},
		{name:'天使郊遊帽', mt1:'s101', qty1:40, mt2:'f12', qty2:40, mt3:'f11', qty3:40, mt4:'c111', qty4:16, mt5:'c112', qty5:9, level:12, code:'12b'},
		{name:'金絲帽', mt1:'f13', qty1:20, mt2:'c110', qty2:9, mt3:'c109', qty3:7, mt4:'c112', qty4:9, mt5:'c113', qty5:11, level:13, code:'13a'},
		{name:'狙擊手鴨舌帽', mt1:'m113', qty1:9, mt2:'f12', qty2:40, mt3:'f13', qty3:40, mt4:'c112', qty4:12, mt5:'c113', qty5:14, level:13, code:'13b'},
		{name:'鑲玉帽', mt1:'m114', qty1:8, mt2:'f14', qty2:20, mt3:'c110', qty3:12, mt4:'c113', qty4:11, mt5:'c114', qty5:9, level:14, code:'14a'},
		{name:'深紅禮帽', mt1:'s105', qty1:6, mt2:'f13', qty2:40, mt3:'f14', qty3:40, mt4:'c113', qty4:7, mt5:'c114', qty5:17, level:14, code:'14b'},
		{name:'紅香帽', mt1:'m114', qty1:11, mt2:'f15', qty2:20, mt3:'c113', qty3:6, mt4:'c114', qty4:4, mt5:'c115', qty5:13, level:15, code:'15a'},
		{name:'烏拉諾斯黑禮帽', mt1:'m114', qty1:11, mt2:'f15', qty2:20, mt3:'c113', qty3:6, mt4:'c114', qty4:4, mt5:'c115', qty5:13, level:15, code:'15b'}
	],
// 11C帽：絨毛帽
// 紫茉莉20 細麻布9 開米士毛線10 鴨絨8
// 12A帽：鵝毛帽
// 七葉樹20 紫茉莉20 開米士毛線10 鴨絨4 鵝絨7
// 12B帽：天使郊遊帽
// 炎獸皮40 鳳仙花40 紫茉莉40 鴨絨16 鵝絨9
// 13A帽：金絲帽
// 茉莉20 開米士毛線9 細麻布7 鵝絨9 硬綢布11
// 13B帽：狙擊手鴨舌帽
// 朱砂錠9 鳳仙花40 茉莉40 鵝絨12 硬綢布14
// 14A帽：鑲玉帽
// 紫英石8 萱草20 開米士毛線12 硬綢布11 寧麻布9
// 14B帽：深紅禮帽
// 魔法之羽6 茉莉40 萓草40 硬綢布7 寧麻布17
// 15A帽：紅香帽
// 紫英石11 梔子花20 硬綢布6 寧麻布4 水鳥羽絨13
// 15B帽：烏拉諾斯黑禮帽
// 紫英石11 梔子花20 硬綢布6 寧麻布4 水鳥羽絨13
	sh03:[
		{name:'軟皮甲', mt1:'m101', qty1:3, mt2:'w01', qty2:20, mt3:'g01a', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'護心甲', mt1:'m101', qty1:4, mt2:'m102', qty2:3, mt3:'w01', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'青銅鎧甲', mt1:'m101', qty1:7, mt2:'m102', qty2:2, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'輕型鎧甲', mt1:'m101', qty1:4, mt2:'m102', qty2:5, mt3:'m103', qty3:3, mt4:'g01a', qty4:20, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'輕型鎖鍊甲', mt1:'m101', qty1:6, mt2:'m102', qty2:10, mt3:'w03', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'環甲', mt1:'m101', qty1:5, mt2:'m102', qty2:4, mt3:'m103', qty3:5, mt4:'m104', qty4:4, mt5:'w02', qty5:20, level:3, code:'3b'},
		{name:'鋼鐵鎧甲', mt1:'m102', qty1:13, mt2:'m103', qty2:4, mt3:'m104', qty3:2, mt4:'w03', qty4:20, mt5:'', qty5:0, level:4, code:'4a'},
		{name:'金屬皮甲', mt1:'m102', qty1:6, mt2:'m103', qty2:9, mt3:'m104', qty3:8, mt4:'w03', qty4:20, mt5:'w05', qty5:20, level:4, code:'4b'},
		{name:'長型金屬鎧甲', mt1:'m102', qty1:5, mt2:'m103', qty2:10, mt3:'m104', qty3:7, mt4:'m105', qty4:5, mt5:'w04', qty5:20, level:5, code:'5a'},
		{name:'索狀鎧甲', mt1:'m102', qty1:5, mt2:'m103', qty2:5, mt3:'m104', qty3:8, mt4:'m105', qty4:10, mt5:'w05', qty5:20, level:5, code:'5b'},
		{name:'鐵齒鎧甲', mt1:'w03a', qty1:20, mt2:'m106', qty2:4, mt3:'m105', qty3:5, mt4:'m102', qty4:3, mt5:'m103a', qty5:6, level:5, code:'5c'},
		{name:'重鐵板甲', mt1:'m103', qty1:5, mt2:'m104', qty2:5, mt3:'m105', qty3:5, mt4:'m106', qty4:10, mt5:'w05', qty5:20, level:6, code:'6a'},
		{name:'鐵板半身甲', mt1:'m103', qty1:6, mt2:'m104', qty2:6, mt3:'m105', qty3:6, mt4:'m106', qty4:10, mt5:'w06', qty5:20, level:6, code:'6b'},
		{name:'實戰鎧甲', mt1:'m102', qty1:20, mt2:'m105', qty2:5, mt3:'m106', qty3:5, mt4:'m107', qty4:8, mt5:'w06', qty5:20, level:7, code:'7a'},
		{name:'黃金鎧甲', mt1:'m104', qty1:10, mt2:'m105', qty2:10, mt3:'m106', qty3:10, mt4:'m107', qty4:10, mt5:'s10', qty5:1, level:7, code:'7b'},
		{name:'水龍鎧甲', mt1:'wd10', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'m107', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'重金屬鎧甲', mt1:'m102', qty1:20, mt2:'m107', qty2:10, mt3:'m108', qty3:10, mt4:'', qty4:0, mt5:'', qty5:0, level:8, code:'8a'},
		{name:'野獸之鎧', mt1:'m103', qty1:15, mt2:'m107', qty2:20, mt3:'w06', qty3:20, mt4:'s11', qty4:1, mt5:'', qty5:0, level:8, code:'8b'},
		{name:'輕短鎧甲+', mt1:'m108', qty1:13, mt2:'m107', qty2:15, mt3:'w07', qty3:10, mt4:'m008b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'帝王之鎧', mt1:'m107', qty1:10, mt2:'m108', qty2:10, mt3:'m109', qty3:10, mt4:'w08', qty4:20, mt5:'', qty5:0, level:9, code:'9a'},
		{name:'亡靈鎧甲', mt1:'m102', qty1:20, mt2:'m107', qty2:10, mt3:'m108', qty3:10, mt4:'m109', qty4:12, mt5:'s06', qty5:5, level:9, code:'9b'},
		{name:'漆黑之鎧', mt1:'m106', qty1:5, mt2:'m107', qty2:5, mt3:'m108', qty3:10, mt4:'m109', qty4:10, mt5:'m110', qty5:5, level:10, code:'10a'},
		{name:'騎士鎧甲', mt1:'m105', qty1:20, mt2:'m109', qty2:10, mt3:'m110', qty3:10, mt4:'s07', qty4:5, mt5:'s06', qty5:5, level:10, code:'10b'},
		{name:'紅繩威鎧', mt1:'m103a', qty1:13, mt2:'m108a', qty2:10, mt3:'m110', qty3:2, mt4:'m109', qty4:10, mt5:'s11', qty5:2, level:11, code:'11a'},
		{name:'守護鎧甲', mt1:'m103a', qty1:5, mt2:'m108', qty2:10, mt3:'m108a', qty3:4, mt4:'m110', qty4:8, mt5:'s12', qty5:2, level:11, code:'11b'},
		{name:'軟蝟甲', mt1:'m11oa', qty1:11, mt2:'m008f', qty2:6, mt3:'c111', qty3:7, mt4:'c110', qty4:6, mt5:'', qty5:0, level:11, code:'11c'},
		{name:'烏鋼甲', mt1:'m110b', qty1:4, mt2:'m008f', qty2:5, mt3:'m110', qty3:3, mt4:'m111', qty4:8, mt5:'m112', qty5:11, level:12, code:'12a'},
		{name:'天使鎧甲', mt1:'s101', qty1:40, mt2:'c110', qty2:11, mt3:'c112', qty3:9, mt4:'c111', qty4:16, mt5:'m112', qty5:7, level:12, code:'12b'},
		{name:'金絲甲', mt1:'c113', qty1:8, mt2:'m112', qty2:5, mt3:'m113', qty3:6, mt4:'m109', qty4:7, mt5:'m106', qty5:18, level:13, code:'13a'},
		{name:'高階天使鎧甲', mt1:'s101', qty1:40, mt2:'c112', qty2:7, mt3:'c113', qty3:16, mt4:'m112', qty4:13, mt5:'m113', qty5:11, level:13, code:'13b'},
		{name:'玉石甲', mt1:'c114', qty1:12, mt2:'c113', qty2:4, mt3:'m110a', qty3:10, mt4:'m112', qty4:6, mt5:'m114', qty5:11, level:14, code:'14a'},
		{name:'棘鱗鎧甲', mt1:'c114', qty1:9, mt2:'m110a', qty2:10, mt3:'m112', qty3:7, mt4:'m113', qty4:7, mt5:'m114', qty5:17, level:14, code:'14b'},
		{name:'螢月甲', mt1:'s07', qty1:4, mt2:'c115', qty2:6, mt3:'m113', qty3:5, mt4:'m114', qty4:19, mt5:'m115', qty5:4, level:15, code:'15a'},
		{name:'維納斯戰甲', mt1:'c113', qty1:15, mt2:'c115', qty2:15, mt3:'m113', qty3:13, mt4:'m114', qty4:12, mt5:'m115', qty5:8, level:15, code:'15b'}
	],
// 11C鎧：軟蝟甲
// 誓言之證5、謝爾哈特礦條10、奧利哈鋼條6、雅達曼鎝條8、喜馬拉斯礦條6	// old
// 喜馬拉斯礦條11、克德謝爾礦6、鴨絨7、開米士毛線6
// 12A鎧：烏鋼甲
// 雅達曼鎝條4 克德謝爾礦5 奧利哈鋼條3 石墨條8 鉛錠11
// 12B鎧：天使鎧甲
// 炎獸皮40、開米士毛線11、鵝絨9、石墨條16、鉛錠7
// 13A鎧：金絲甲
// 硬綢布8、鉛錠5、朱砂錠6、勒格耐席鉧條7、白金18
// 13B鎧：高階天使鎧甲
// 炎獸皮40、鵝絨7、硬綢布16、鉛錠13、朱砂錠11
// 14A鎧：玉石甲
// 寧麻布12、硬綢布4、喜馬拉斯礦條10、鉛錠6、紫英石11
// 14B鎧：棘鱗鎧甲
// 寧麻布9、喜馬拉斯礦條10、鉛錠7、朱砂錠7、紫英石17
// 15A鎧：螢月甲
// 鋼騎之礦4、水鳥羽絨6、朱砂錠5、紫英石19、石油4
// 15B鎧：維納斯戰甲
// 硬綢布15、水鳥羽絨15、朱砂錠13、紫英石12、石油8
	sh04:[
		{name:'旅人之服', mt1:'g01a', qty1:20, mt2:'c101', qty2:4, mt3:'w01', qty3:10, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'保護衣', mt1:'m101', qty1:3, mt2:'g01a', qty2:20, mt3:'c101', qty3:3, mt4:'c102', qty4:2, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'羽毛裝', mt1:'g01a', qty1:20, mt2:'c101', qty2:11, mt3:'c102', qty3:2, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'皮裝', mt1:'m101', qty1:2, mt2:'g01a', qty2:20, mt3:'c101', qty3:5, mt4:'c102', qty4:5, mt5:'c103', qty5:4, level:2, code:'2b'},
		{name:'硬皮服', mt1:'m103', qty1:3, mt2:'g01a', qty2:20, mt3:'c101', qty3:5, mt4:'c102', qty4:5, mt5:'c103', qty5:6, level:3, code:'3a'},
		{name:'鎖鏈裝', mt1:'m102', qty1:15, mt2:'m103', qty2:5, mt3:'g01a', qty3:20, mt4:'c104', qty4:2, mt5:'', qty5:0, level:3, code:'3b'},
		{name:'布甲', mt1:'m103', qty1:5, mt2:'g01a', qty2:20, mt3:'c103', qty3:7, mt4:'c104', qty4:10, mt5:'', qty5:0, level:4, code:'4a'},
		{name:'襯甲', mt1:'m105', qty1:4, mt2:'g01a', qty2:20, mt3:'c103', qty3:10, mt4:'c104', qty4:10, mt5:'', qty5:0, level:4, code:'4b'},
		{name:'環服', mt1:'m102', qty1:10, mt2:'m105', qty2:5, mt3:'g01a', qty3:20, mt4:'c104', qty4:6, mt5:'c105', qty5:5, level:5, code:'5a'},
		{name:'士兵護衣', mt1:'m103', qty1:5, mt2:'m106', qty2:5, mt3:'g01a', qty3:20, mt4:'c104', qty4:10, mt5:'c105', qty5:5, level:5, code:'5b'},
		{name:'功夫裝', mt1:'w03a', qty1:20, mt2:'c106', qty2:4, mt3:'m104', qty3:3, mt4:'m105', qty4:7, mt5:'m103a', qty5:4, level:5, code:'5c'},
		{name:'長索錐衣', mt1:'m102', qty1:10, mt2:'m103', qty2:7, mt3:'m106', qty3:5, mt4:'g01a', qty4:20, mt5:'c104', qty5:10, level:6, code:'6a'},
		{name:'索錐上衣', mt1:'m102', qty1:15, mt2:'m105', qty2:5, mt3:'m106', qty3:5, mt4:'g01a', qty4:20, mt5:'c104', qty5:10, level:6, code:'6b'},
		{name:'骨衣', mt1:'m106', qty1:5, mt2:'c104', qty2:5, mt3:'c106', qty3:5, mt4:'c107', qty4:10, mt5:'', qty5:0, level:7, code:'7a'},
		{name:'超級衣服', mt1:'c104', qty1:20, mt2:'c107', qty2:10, mt3:'s12', qty3:1, mt4:'', qty4:0, mt5:'', qty5:0, level:7, code:'7b'},
		{name:'水龍之衣', mt1:'wd11', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'f07', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'疾風之衣', mt1:'s01', qty1:50, mt2:'s02', qty2:50, mt3:'s03', qty3:50, mt4:'s04', qty4:50, mt5:'c108', qty5:20, level:8, code:'8a'},
		{name:'步兵戰衣', mt1:'m102', qty1:10, mt2:'m108', qty2:5, mt3:'c104', qty3:10, mt4:'c106', qty4:10, mt5:'c108', qty5:5, level:8, code:'8b'},
		{name:'獸骨之衣+', mt1:'m107', qty1:13, mt2:'c106', qty2:15, mt3:'c108b', qty3:10, mt4:'w08b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'勇者之衣', mt1:'m109', qty1:1, mt2:'c102', qty2:10, mt3:'c105', qty3:10, mt4:'c108', qty4:5, mt5:'c109', qty5:10, level:9, code:'9a'},
		{name:'女神之衣', mt1:'c106', qty1:10, mt2:'c108', qty2:10, mt3:'c109', qty3:15, mt4:'s06', qty4:1, mt5:'s08', qty5:1, level:9, code:'9b'},
		{name:'不死鳥之服', mt1:'m110', qty1:1, mt2:'c104', qty2:10, mt3:'c106', qty3:10, mt4:'c108', qty4:10, mt5:'c110', qty5:10, level:10, code:'10a'},
		{name:'靈魂之服', mt1:'c106', qty1:20, mt2:'c110', qty2:15, mt3:'s13', qty3:1, mt4:'s12', qty4:1, mt5:'s06', qty5:4, level:10, code:'10b'},
		{name:'海洋之服', mt1:'m103a', qty1:5, mt2:'m108a', qty2:6, mt3:'m109', qty3:6, mt4:'c108b', qty4:10, mt5:'s11', qty5:2, level:11, code:'11a'},
		{name:'幻想之服', mt1:'m103a', qty1:9, mt2:'m109', qty2:13, mt3:'c110', qty3:20, mt4:'w08a', qty4:40, mt5:'s05', qty5:2, level:11, code:'11b'},
		{name:'紫綢服', mt1:'c111', qty1:7, mt2:'c108a', qty2:5, mt3:'c110', qty3:12, mt4:'c109', qty4:6, mt5:'', qty5:0, level:11, code:'11c'},
		{name:'彩絲裳', mt1:'m111', qty1:6, mt2:'m110a', qty2:6, mt3:'c112', qty3:6, mt4:'c111', qty4:7, mt5:'c110', qty5:12, level:12, code:'12a'},
		{name:'天使背心', mt1:'s101', qty1:40, mt2:'m110', qty2:7, mt3:'m112', qty3:7, mt4:'c111', qty4:11, mt5:'c112', qty5:13, level:12, code:'12b'},
		{name:'描金服', mt1:'m113', qty1:5, mt2:'m105', qty2:20, mt3:'c113', qty3:4, mt4:'c112', qty4:8, mt5:'c111', qty5:8, level:13, code:'13a'},
		{name:'仿古衣衫', mt1:'s101', qty1:40, mt2:'m113', qty2:6, mt3:'c110', qty3:6, mt4:'c112', qty4:4, mt5:'c113', qty5:19, level:13, code:'13b'},
		{name:'風虎之衣', mt1:'s04', qty1:100, mt2:'c113', qty2:40, mt3:'s107', qty3:5, mt4:'s108', qty4:5, mt5:'wt11', qty5:1, level:13, code:'13c'},
		{name:'絲縷玉衣', mt1:'m114', qty1:4, mt2:'c114', qty2:6, mt3:'c111', qty3:3, mt4:'c112', qty4:6, mt5:'c113', qty5:7, level:14, code:'14a'},
		{name:'突擊裝', mt1:'s101', qty1:40, mt2:'m114', qty2:12, mt3:'c112', qty3:9, mt4:'c113', qty4:9, mt5:'c114', qty5:10, level:14, code:'14b'},
		{name:'流螢服', mt1:'s09', qty1:3, mt2:'m114', qty2:8, mt3:'c115', qty3:6, mt4:'c113', qty4:12, mt5:'c114', qty5:8, level:15, code:'15a'},
		{name:'尼普頓緊身背心', mt1:'s102', qty1:4, mt2:'s101', qty2:40, mt3:'c113', qty3:9, mt4:'c114', qty4:17, mt5:'c115', qty5:6, level:15, code:'15b'}
	],
// 11C衣：紫綢服
// 鴨絨7 阿巴尼斯製的布5 開米士毛線12 細麻布6
// 12A衣：彩絲裳
// 石墨條3 喜馬拉斯礦條6 鵝絨6 鴨絨7 開米士毛線12
// 12B衣：天使背心
// 炎獸皮40 奧利哈鋼條7 鉛錠7 鴨絨11 鵝絨13
// 13A衣：描金服
// 朱砂錠5 金條20 硬綢布4 鵝絨8 鴨絨8
// 13B衣：仿古衣衫
// 炎獸皮40 朱砂錠6 開米士毛線6 鵝絨4 硬綢布19
// 14A衣：絲縷玉衣
// 紫英石4 寧麻布6 鴨絨3 鵝絨6 硬綢布7
// 14B衣：突擊裝
// 炎獸皮40 紫英石12 鵝絨9 硬綢布9 寧麻布10
// 15A衣：流螢服
// 德特家的布3、紫英石8、水鳥羽絨6、硬綢布12、寧麻布8
// 15B衣：尼普頓緊身背心
// 冰龍石4 炎獸皮40 硬綢布9 寧麻布17 水鳥羽絨6
// 13C衣：風虎之衣
// 風的水晶碎片100 硬綢布40 銀絲棉線5 黯淡的獸皮5 塵封的衣服1
	sh05:[
		{name:'羽毛袍', mt1:'g01a', qty1:20, mt2:'c101', qty2:4, mt3:'w01', qty3:10, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'輕皮袍', mt1:'g01a', qty1:20, mt2:'c101', qty2:5, mt3:'c102', qty3:4, mt4:'w01', qty4:10, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'網袍', mt1:'g01a', qty1:20, mt2:'c101', qty2:2, mt3:'c102', qty3:10, mt4:'w02', qty4:10, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'風袍', mt1:'g01a', qty1:20, mt2:'c101', qty2:4, mt3:'c102', qty3:10, mt4:'c103', qty4:2, mt5:'w02', qty5:10, level:2, code:'2b'},
		{name:'硬皮袍', mt1:'g01a', qty1:20, mt2:'c101', qty2:7, mt3:'c102', qty3:8, mt4:'c103', qty4:5, mt5:'w03', qty5:10, level:3, code:'3a'},
		{name:'環袍', mt1:'m102', qty1:8, mt2:'c101', qty2:5, mt3:'c103', qty3:7, mt4:'c104', qty4:3, mt5:'w03', qty5:10, level:3, code:'3b'},
		{name:'烏鴉之袍', mt1:'g01a', qty1:20, mt2:'c101', qty2:10, mt3:'c103', qty3:10, mt4:'c104', qty4:6, mt5:'w04', qty5:10, level:4, code:'4a'},
		{name:'月亮之袍', mt1:'g01a', qty1:20, mt2:'c101', qty2:6, mt3:'c103', qty3:10, mt4:'c105', qty4:11, mt5:'w04', qty5:10, level:4, code:'4b'},
		{name:'狐皮披風', mt1:'g04i', qty1:4, mt2:'w02', qty2:2, mt3:'c104', qty3:20, mt4:'c107', qty4:4, mt5:'', qty5:0, level:4, code:'4c'},
		{name:'東方法衣', mt1:'g01a', qty1:20, mt2:'c101', qty2:10, mt3:'c104', qty3:10, mt4:'c106', qty4:11, mt5:'w04', qty5:10, level:5, code:'5a'},
		{name:'聖堂之袍', mt1:'m104', qty1:5, mt2:'g01a', qty2:20, mt3:'c101', qty3:5, mt4:'c106', qty4:15, mt5:'w05', qty5:10, level:5, code:'5b'},
		{name:'治癒之袍', mt1:'w03a', qty1:40, mt2:'c106', qty2:7, mt3:'c104', qty3:3, mt4:'m104', qty4:4, mt5:'m103a', qty5:4, level:5, code:'5c'},
		{name:'聖者之袍', mt1:'m105', qty1:10, mt2:'c104', qty2:13, mt3:'c106', qty3:5, mt4:'w06', qty4:10, mt5:'', qty5:0, level:6, code:'6a'},
		{name:'戰鬥長袍', mt1:'m106', qty1:5, mt2:'g01a', qty2:20, mt3:'c104', qty3:20, mt4:'c105', qty4:6, mt5:'w06', qty5:10, level:6, code:'6b'},
		{name:'冠軍之袍', mt1:'m104', qty1:10, mt2:'m106', qty2:10, mt3:'c107', qty3:20, mt4:'s08', qty4:1, mt5:'', qty5:0, level:7, code:'7a'},
		{name:'時之袍', mt1:'m105', qty1:5, mt2:'m107', qty2:5, mt3:'c104', qty3:5, mt4:'c107', qty4:10, mt5:'', qty5:0, level:7, code:'7b'},
		{name:'水龍法袍', mt1:'wd12', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'w07', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'死神之袍', mt1:'m108', qty1:10, mt2:'c104', qty2:5, mt3:'c106', qty3:5, mt4:'c108', qty4:5, mt5:'s13', qty5:1, level:8, code:'8a'},
		{name:'勇者之袍', mt1:'m106', qty1:5, mt2:'m108', qty2:10, mt3:'c104', qty3:5, mt4:'c106', qty4:5, mt5:'c108', qty5:5, level:8, code:'8b'},
		{name:'潔淨之袍+', mt1:'m108', qty1:5, mt2:'c108b', qty2:10, mt3:'c108a', qty3:20, mt4:'w08b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'黑暗之袍', mt1:'m109', qty1:3, mt2:'c103', qty2:5, mt3:'c106', qty3:5, mt4:'c108', qty4:5, mt5:'c109', qty5:8, level:9, code:'9a'},
		{name:'聖袍', mt1:'m109', qty1:3, mt2:'c105', qty2:10, mt3:'c109', qty3:10, mt4:'s06', qty4:1, mt5:'s08', qty5:2, level:9, code:'9b'},
		{name:'靈魂之袍', mt1:'m110', qty1:2, mt2:'c104', qty2:10, mt3:'c106', qty3:10, mt4:'c108', qty4:10, mt5:'c110', qty5:5, level:10, code:'10a'},
		{name:'奇蹟之袍', mt1:'m110', qty1:5, mt2:'c105', qty2:10, mt3:'c109', qty3:15, mt4:'s13', qty4:1, mt5:'s06', qty5:5, level:10, code:'10b'},
		{name:'共嗚之袍', mt1:'c108b', qty1:10, mt2:'w08a', qty2:20, mt3:'w10', qty3:20, mt4:'s10', qty4:2, mt5:'s12', qty5:2, level:11, code:'11a'},
		{name:'和平之袍', mt1:'m109', qty1:13, mt2:'c110', qty2:10, mt3:'w08a', qty3:40, mt4:'s11', qty4:2, mt5:'s08', qty5:2, level:11, code:'11b'},
		{name:'絨毛袍', mt1:'m110', qty1:7, mt2:'c111', qty2:8, mt3:'c110', qty3:6, mt4:'c109', qty4:4, mt5:'', qty5:0, level:11, code:'11c'},
		{name:'織花袍', mt1:'f11', qty1:20, mt2:'f12', qty2:20, mt3:'c112', qty3:5, mt4:'c111', qty4:5, mt5:'c110', qty5:9, level:12, code:'12a'},
		{name:'天使長袍', mt1:'s105', qty1:4, mt2:'c111', qty2:12, mt3:'c112', qty3:13, mt4:'m110', qty4:6, mt5:'m112', qty5:13, level:12, code:'12b'},
		{name:'金線袍', mt1:'m112', qty1:6, mt2:'m113', qty2:4, mt3:'c113', qty3:4, mt4:'c112', qty4:10, mt5:'c110', qty5:10, level:13, code:'13a'},
		{name:'修行者長袍', mt1:'s105', qty1:4, mt2:'s101', qty2:40, mt3:'c113', qty3:12, mt4:'m112', qty4:9, mt5:'m113', qty5:9, level:13, code:'13b'},
		{name:'風虎法袍', mt1:'s04', qty1:100, mt2:'c114', qty2:40, mt3:'s107', qty3:5, mt4:'s108', qty4:5, mt5:'wt12', qty5:1, level:13, code:'13c'},
		{name:'綴玉袍', mt1:'m114', qty1:4, mt2:'f12', qty2:20, mt3:'f13', qty3:20, mt4:'c114', qty4:7, mt5:'c113', qty5:7, level:14, code:'14a'},
		{name:'神官長袍', mt1:'s105', qty1:5, mt2:'s101', qty2:40, mt3:'c112', qty3:10, mt4:'c114', qty4:10, mt5:'m114', qty5:13, level:14, code:'14b'},
		{name:'防寒袍', mt1:'s09', qty1:5, mt2:'c115', qty2:9, mt3:'c113', qty3:7, mt4:'c112', qty4:10, mt5:'c111', qty5:10, level:15, code:'15a'},
		{name:'普魯托法袍', mt1:'s105', qty1:6, mt2:'c114', qty2:13, mt3:'c115', qty3:9, mt4:'m114', qty4:9, mt5:'m115', qty5:11, level:15, code:'15b'}
	],
// 11C袍：絨毛袍
// 天青石3、奧利哈鋼條3、傑諾瓦線10、絹布15、細麻布15		// old
// 奧利哈鋼條7、鴨絨8、開米士毛線6、細麻布4
// 12A袍：織花袍
// 紅鳳凰的羽毛6 誓言之證5 細線10 鵝絨10 德特家的布15		// old
// 紫茉莉20、鳳仙花20、鵝絨5、鴨絨5、開米士毛線9
// 12B袍：天使長袍
// 魔法之羽4、鴨絨12、鵝絨13、奧利哈鋼條6、鉛錠13
// 13A袍：金線袍
// 鉛錠6、朱砂錠4、硬綢布4、鵝絨10、開米士毛線10
// 13B袍：修行者長袍
// 魔法之羽4、炎獸皮40、硬綢布12、鉛錠9、朱砂錠9
// 13C袍：風虎法袍
// 風的水晶碎片100、硬綢布40、銀絲錦線5、黯淡的獸皮5、塵封的長袍1
// 14A袍：綴玉袍
// 紫英石4、鳳仙花20、茉莉20、寧麻布7、硬綢布7
// 14B袍：神官長袍
// 魔法之羽5、炎獸皮40、硬綢布10、寧麻布10、紫英石13
// 15A袍：防寒袍
// 德特家的布5、水鳥羽絨9、硬綢布7、鵝絨10、鴨絨10
// 15B袍：普魯托法袍
// 魔法之羽6、寧麻布13、水鳥羽絨9、紫英石9、石油11
	sh06:[
		{name:'軟皮靴', mt1:'g01a', qty1:20, mt2:'c101', qty2:4, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'皮靴', mt1:'m101', qty1:7, mt2:'g01a', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'硬皮靴', mt1:'m101', qty1:5, mt2:'g01a', qty2:20, mt3:'c102', qty3:4, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'長靴', mt1:'m101', qty1:3, mt2:'g01a', qty2:20, mt3:'c101', qty3:3, mt4:'c102', qty4:3, mt5:'c103', qty5:3, level:2, code:'2b'},
		{name:'厚底靴', mt1:'w01', qty1:20, mt2:'g01a', qty2:20, mt3:'c101', qty3:8, mt4:'c102', qty4:4, mt5:'c103', qty5:3, level:3, code:'3a'},
		{name:'編織的靴子', mt1:'w02', qty1:20, mt2:'g01a', qty2:20, mt3:'c101', qty3:5, mt4:'c103', qty4:9, mt5:'c104', qty5:2, level:3, code:'3b'},
		{name:'鎖鍊長靴', mt1:'m102', qty1:6, mt2:'m103', qty2:6, mt3:'c101', qty3:6, mt4:'c104', qty4:3, mt5:'', qty5:0, level:4, code:'4a'},
		{name:'鎖鍊靴', mt1:'m102', qty1:8, mt2:'m103', qty2:3, mt3:'m104', qty3:3, mt4:'c103', qty4:3, mt5:'c105', qty5:3, level:4, code:'4b'},
		{name:'蜥蝪靴', mt1:'m102', qty1:10, mt2:'m105', qty2:5, mt3:'c103', qty3:3, mt4:'c104', qty4:3, mt5:'', qty5:0, level:5, code:'5a'},
		{name:'蜥蝪長靴', mt1:'m104', qty1:5, mt2:'m105', qty2:4, mt3:'c104', qty3:5, mt4:'c105', qty4:5, mt5:'', qty5:0, level:5, code:'5b'},
		{name:'防護靴', mt1:'c106', qty1:3, mt2:'c104', qty2:3, mt3:'m105', qty3:2, mt4:'m102', qty4:4, mt5:'m103a', qty5:3, level:5, code:'5c'},
		{name:'鋼靴', mt1:'m102', qty1:20, mt2:'m106', qty2:5, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:6, code:'6a'},
		{name:'鋼製長靴', mt1:'m103', qty1:8, mt2:'m104', qty2:7, mt3:'m106', qty3:7, mt4:'', qty4:0, mt5:'', qty5:0, level:6, code:'6b'},
		{name:'水晶靴', mt1:'m102', qty1:10, mt2:'m105', qty2:8, mt3:'m107', qty3:5, mt4:'', qty4:0, mt5:'', qty5:0, level:7, code:'7a'},
		{name:'銀靴', mt1:'m105', qty1:5, mt2:'m106', qty2:5, mt3:'m107', qty3:7, mt4:'s07', qty4:1, mt5:'', qty5:0, level:7, code:'7b'},
		{name:'水龍之靴', mt1:'wd13', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'m107', qty4:10, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'流水之靴', mt1:'m102', qty1:4, mt2:'m104', qty2:4, mt3:'m108', qty3:5, mt4:'c107', qty4:5, mt5:'', qty5:0, level:8, code:'8a'},
		{name:'芙蕾雅之靴', mt1:'m107', qty1:10, mt2:'m108', qty2:5, mt3:'c107', qty3:5, mt4:'s05', qty4:1, mt5:'', qty5:0, level:8, code:'8b'},
		{name:'標準長靴+', mt1:'m108', qty1:10, mt2:'c108b', qty2:20, mt3:'c108a', qty3:5, mt4:'m008b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'鑽石靴', mt1:'m106', qty1:5, mt2:'m107', qty2:5, mt3:'m109', qty3:4, mt4:'c108', qty4:5, mt5:'', qty5:0, level:9, code:'9a'},
		{name:'鑽石長靴', mt1:'m108', qty1:10, mt2:'m109', qty2:5, mt3:'s14', qty3:1, mt4:'s07', qty4:2, mt5:'', qty5:0, level:9, code:'9b'},
		{name:'秘密之靴', mt1:'m105', qty1:5, mt2:'m107', qty2:5, mt3:'m110', qty3:5, mt4:'c109', qty4:5, mt5:'', qty5:0, level:10, code:'10a'},
		{name:'龍之靴', mt1:'m109', qty1:5, mt2:'m110', qty2:8, mt3:'s07', qty3:5, mt4:'s08', qty4:1, mt5:'', qty5:0, level:10, code:'10b'},
		{name:'幸運靴', mt1:'m108a', qty1:3, mt2:'m110', qty2:2, mt3:'m109', qty3:3, mt4:'w10', qty4:40, mt5:'s09', qty5:2, level:11, code:'11a'},
		{name:'試力鞋', mt1:'m103a', qty1:8, mt2:'m108a', qty2:14, mt3:'m108', qty3:15, mt4:'w10', qty4:40, mt5:'s11', qty5:2, level:11, code:'11b'},
		{name:'彩繪靴', mt1:'c110', qty1:11, mt2:'m110', qty2:6, mt3:'m108a', qty3:9, mt4:'m109a', qty4:10, mt5:'', qty5:0, level:11, code:'11c'},
		{name:'踏雪靴', mt1:'c112', qty1:11, mt2:'m112', qty2:4, mt3:'m111', qty3:4, mt4:'m110', qty4:7, mt5:'m110a', qty5:5, level:12, code:'12a'},
		{name:'描金鞋', mt1:'m113', qty1:3, mt2:'m112', qty2:10, mt3:'m111', qty3:6, mt4:'m110b', qty4:6, mt5:'m110', qty5:7, level:13, code:'13a'},
		{name:'雕玉履', mt1:'c114', qty1:10, mt2:'c112', qty2:10, mt3:'m114', qty3:4, mt4:'m112', qty4:6, mt5:'m110a', qty5:9, level:14, code:'14a'},
		{name:'花凋靴', mt1:'f14', qty1:20, mt2:'f15', qty2:20, mt3:'m115', qty3:5, mt4:'m114', qty4:8, mt5:'m111', qty5:7, level:15, code:'15a'}
	],
// 11C靴：彩繪靴
// 開米士毛線11 奧利哈鋼條6 達馬斯礦條9 謝爾哈礦條10
// 12靴：踏雪靴
// 鵝絨11 鉛錠4 石墨條4 奧利哈鋼條7 喜馬拉斯礦條5
// 13靴：描金鞋
// 朱砂錠3 鉛錠10 石墨條6 雅達曼鎝條6 奧利哈鋼條7
// 14靴：雕玉履
// 寧麻布10 鵝絨10 紫英石4 鉛錠6 喜馬拉斯礦條9
// 15靴：花凋靴
// 萱草20 槴子花20 石油5 紫英石8 石墨條7
	sh07:[
		{name:'運動鞋', mt1:'g01a', qty1:20, mt2:'c101', qty2:4, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'馬車鞋', mt1:'m101', qty1:3, mt2:'g01a', qty2:20, mt3:'c101', qty3:3, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'皮鞋', mt1:'g01a', qty1:20, mt2:'c101', qty2:4, mt3:'c102', qty3:4, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'安全鞋', mt1:'m102', qty1:4, mt2:'g01a', qty2:20, mt3:'c101', qty3:4, mt4:'c102', qty4:3, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'光之鞋', mt1:'g01a', qty1:20, mt2:'c101', qty2:5, mt3:'c102', qty3:4, mt4:'c103', qty4:4, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'戰鞋', mt1:'m101', qty1:4, mt2:'m102', qty2:5, mt3:'g01a', qty3:20, mt4:'c101', qty4:2, mt5:'c103', qty5:5, level:3, code:'3b'},
		{name:'薄板鞋', mt1:'m101', qty1:10, mt2:'m102', qty2:3, mt3:'m103', qty3:3, mt4:'g01a', qty4:20, mt5:'c104', qty5:3, level:4, code:'4a'},
		{name:'鎖鏈鞋', mt1:'m101', qty1:10, mt2:'m102', qty2:6, mt3:'m103', qty3:2, mt4:'m104', qty4:2, mt5:'c103', qty5:2, level:4, code:'4b'},
		{name:'蜥蝪鞋', mt1:'m103', qty1:5, mt2:'m104', qty2:6, mt3:'m105', qty3:3, mt4:'c103', qty4:6, mt5:'', qty5:0, level:5, code:'5a'},
		{name:'維京鞋', mt1:'m101', qty1:7, mt2:'m103', qty2:5, mt3:'m104', qty3:5, mt4:'m105', qty4:5, mt5:'g01a', qty5:20, level:5, code:'5b'},
		{name:'特製舞鞋', mt1:'g01a', qty1:20, mt2:'m104', qty2:2, mt3:'m106', qty3:3, mt4:'m105', qty4:2, mt5:'m103a', qty5:3, level:5, code:'5c'},
		{name:'戰鬥鞋', mt1:'m102', qty1:20, mt2:'m106', qty2:5, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:6, code:'6a'},
		{name:'騎士鞋', mt1:'m103', qty1:10, mt2:'m104', qty2:8, mt3:'m106', qty3:5, mt4:'g01a', qty4:20, mt5:'', qty5:0, level:6, code:'6b'},
		{name:'妖精鞋', mt1:'m104', qty1:5, mt2:'m106', qty2:5, mt3:'m107', qty3:5, mt4:'c107', qty4:3, mt5:'', qty5:0, level:7, code:'7a'},
		{name:'紫水晶鞋', mt1:'m103', qty1:5, mt2:'m105', qty2:5, mt3:'m107', qty3:8, mt4:'s14', qty4:1, mt5:'', qty5:0, level:7, code:'7b'},
		{name:'水龍之鞋', mt1:'wd14', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'w07', qty4:20, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'白金鞋', mt1:'m104', qty1:5, mt2:'m106', qty2:5, mt3:'m108', qty3:5, mt4:'c108', qty4:3, mt5:'', qty5:0, level:8, code:'8a'},
		{name:'精緻高根鞋', mt1:'m107', qty1:10, mt2:'m108', qty2:10, mt3:'s17', qty3:1, mt4:'', qty4:0, mt5:'', qty5:0, level:8, code:'8b'},
		{name:'妖精鞋+', mt1:'m108', qty1:5, mt2:'m107', qty2:3, mt3:'c108b', qty3:17, mt4:'g08d', qty4:10, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'神秘之鞋', mt1:'m107', qty1:5, mt2:'m109', qty2:4, mt3:'c106', qty3:5, mt4:'c109', qty4:4, mt5:'', qty5:0, level:9, code:'9a'},
		{name:'力量之鞋', mt1:'m109', qty1:10, mt2:'c107', qty2:10, mt3:'s07', qty3:2, mt4:'s14', qty4:1, mt5:'', qty5:0, level:9, code:'9b'},
		{name:'黃金鞋', mt1:'m108', qty1:5, mt2:'m110', qty2:5, mt3:'c103', qty3:5, mt4:'c110', qty4:5, mt5:'', qty5:0, level:10, code:'10a'},
		{name:'龍之鞋', mt1:'m110', qty1:10, mt2:'c108', qty2:10, mt3:'s07', qty3:3, mt4:'s08', qty4:2, mt5:'', qty5:0, level:10, code:'10b'},
		{name:'守護之鞋', mt1:'m108a', qty1:3, mt2:'m108', qty2:8, mt3:'m109', qty3:8, mt4:'c108b', qty4:3, mt5:'s05', qty5:2, level:11, code:'11a'},
		{name:'大木屐', mt1:'m103a', qty1:20, mt2:'m109', qty2:14, mt3:'w08a', qty3:40, mt4:'w10', qty4:40, mt5:'s11', qty5:2, level:11, code:'11b'},
		{name:'絨毛鞋', mt1:'g01a', qty1:20, mt2:'c111', qty2:7, mt3:'c110', qty3:11, mt4:'c109', qty4:6, mt5:'', qty5:0, level:11, code:'11c'},
		{name:'編藤鞋', mt1:'g01a', qty1:20, mt2:'m110a', qty2:9, mt3:'c110', qty3:9, mt4:'w12', qty4:20, mt5:'c111', qty5:7, level:12, code:'12a'},
		{name:'天使輕便鞋', mt1:'s101', qty1:40, mt2:'m109', qty2:4, mt3:'m112', qty3:6, mt4:'c109', qty4:19, mt5:'c112', qty5:12, level:12, code:'12b'},
		{name:'金絲鞋', mt1:'g01a', qty1:20, mt2:'m113', qty2:3, mt3:'c113', qty3:7, mt4:'c112', qty4:6, mt5:'c111', qty5:9, level:13, code:'13a'},
		{name:'仿牛仔鞋', mt1:'s101', qty1:40, mt2:'w12', qty2:40, mt3:'m112', qty3:8, mt4:'m113', qty4:6, mt5:'c113', qty5:10, level:13, code:'13b'},
		{name:'綴玉鞋', mt1:'g01a', qty1:7, mt2:'f14', qty2:20, mt3:'m114', qty3:7, mt4:'c113', qty4:6, mt5:'c114', qty5:5, level:14, code:'14a'},
		{name:'深紅軟靴', mt1:'s101', qty1:40, mt2:'s105', qty2:5, mt3:'m114', qty3:4, mt4:'c113', qty4:9, mt5:'c114', qty5:9, level:14, code:'14b'},
		{name:'香織鞋', mt1:'s10', qty1:2, mt2:'f15', qty2:20, mt3:'m114', qty3:12, mt4:'c114', qty4:6, mt5:'c115', qty5:7, level:15, code:'15a'},
		{name:'朱比特短靴', mt1:'s101', qty1:40, mt2:'c114', qty2:18, mt3:'c115', qty3:9, mt4:'m114', qty4:5, mt5:'m115', qty5:12, level:15, code:'15b'}
	],
// 11C鞋：絨毛鞋
// 鹿皮20 鴨絨7 開米士毛線11 細麻布6
// 12A鞋：編藤鞋
// 鹿皮20 喜馬拉斯礦條9 開米士毛線9 藤木20 鴨絨7
// 12B鞋：天使輕便鞋
// 炎獸皮40 勒格耐席鉧條4 鉛錠6 細麻布19 鵝絨12
// 13A鞋：金絲鞋
// 鹿皮20 珠砂錠3 硬綢布7 鵝絨6 鴨絨9
// 13B鞋：仿牛仔鞋
// 炎獸皮40 藤木40 鉛錠8 珠砂錠6 硬綢布10
// 14A鞋：綴玉鞋
// 鹿皮7 萱草20 紫英石7 硬綢布6 寧麻布5
// 14B鞋：深紅軟靴
// 炎獸皮40 魔法之羽5 紫英石4 硬綢布9 寧麻布9
// 15A鞋：香織鞋
// 蔓陀羅草的皮2 梔子花20 紫英石12 寧麻布6 水鳥羽絨7
// 15B鞋：朱比特短靴
// 炎獸皮40 寧麻布18 水鳥羽絨9 紫英石5 石油12
	sh08:[
		{name:'小圓盾', mt1:'m101', qty1:4, mt2:'c101', qty2:1, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'小型盾', mt1:'m101', qty1:6, mt2:'w02', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'板盾', mt1:'m101', qty1:8, mt2:'w01', qty2:20, mt3:'w02', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'鳶盾', mt1:'m101', qty1:7, mt2:'m102', qty2:3, mt3:'w01', qty3:20, mt4:'w03', qty4:20, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'漩渦重盾', mt1:'m102', qty1:7, mt2:'m103', qty2:3, mt3:'w01', qty3:20, mt4:'w02', qty4:20, mt5:'w03', qty5:20, level:3, code:'3a'},
		{name:'哥特盾', mt1:'m101', qty1:3, mt2:'m102', qty2:4, mt3:'m103', qty3:4, mt4:'m104', qty4:3, mt5:'w03', qty5:20, level:3, code:'3b'},
		{name:'士兵盾', mt1:'m101', qty1:4, mt2:'m102', qty2:4, mt3:'m103', qty3:4, mt4:'m104', qty4:4, mt5:'w04', qty5:20, level:4, code:'4a'},
		{name:'重盾', mt1:'m101', qty1:2, mt2:'m102', qty2:2, mt3:'m103', qty3:3, mt4:'m104', qty4:5, mt5:'m105', qty5:5, level:4, code:'4b'},
		{name:'蜥蝪盾', mt1:'m102', qty1:6, mt2:'m103', qty2:5, mt3:'m104', qty3:4, mt4:'m105', qty4:3, mt5:'w05', qty5:20, level:5, code:'5a'},
		{name:'反光之盾', mt1:'m102', qty1:6, mt2:'m103', qty2:6, mt3:'m105', qty3:4, mt4:'m106', qty4:3, mt5:'', qty5:0, level:5, code:'5b'},
		{name:'聖者之盾', mt1:'w03a', qty1:20, mt2:'m104', qty2:2, mt3:'m106', qty3:2, mt4:'m105', qty4:2, mt5:'m103a', qty5:3, level:5, code:'5c'},
		{name:'風之盾', mt1:'m104', qty1:6, mt2:'m105', qty2:6, mt3:'m106', qty3:4, mt4:'w06', qty4:20, mt5:'', qty5:0, level:6, code:'6a'},
		{name:'獅子盾', mt1:'m103', qty1:8, mt2:'m105', qty2:4, mt3:'m107', qty3:4, mt4:'w05', qty4:20, mt5:'w06', qty5:20, level:6, code:'6b'},
		{name:'防守之盾', mt1:'m102', qty1:5, mt2:'m103', qty2:5, mt3:'m104', qty3:5, mt4:'m106', qty4:5, mt5:'m107', qty5:5, level:7, code:'7a'},
		{name:'黃金之盾', mt1:'m105', qty1:5, mt2:'m106', qty2:5, mt3:'m107', qty3:15, mt4:'s07', qty4:1, mt5:'', qty5:0, level:7, code:'7b'},
		{name:'水龍之盾', mt1:'wd15', qty1:1, mt2:'s07', qty2:2, mt3:'s06', qty3:2, mt4:'m107', qty4:10, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'鏡之盾', mt1:'m103', qty1:6, mt2:'m104', qty2:6, mt3:'m108', qty3:10, mt4:'', qty4:0, mt5:'', qty5:0, level:8, code:'8a'},
		{name:'力量之盾', mt1:'m108', qty1:20, mt2:'s06', qty2:1, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:8, code:'8b'},
		{name:'防禦之盾+', mt1:'m107', qty1:9, mt2:'m108', qty2:10, mt3:'w08', qty3:20, mt4:'m008b', qty4:20, mt5:'m008c', qty5:20, level:8, code:'8c'},
		{name:'漆黑之盾', mt1:'m104', qty1:5, mt2:'m007', qty2:5, mt3:'m108', qty3:5, mt4:'m109', qty4:5, mt5:'', qty5:0, level:9, code:'9a'},
		{name:'火龍之盾', mt1:'m106', qty1:5, mt2:'m109', qty2:10, mt3:'s07', qty3:1, mt4:'s06', qty4:3, mt5:'', qty5:0, level:9, code:'9b'},
		{name:'黑暗之盾', mt1:'m107', qty1:5, mt2:'m108', qty2:5, mt3:'m109', qty3:5, mt4:'m110', qty4:3, mt5:'', qty5:0, level:10, code:'10a'},
		{name:'勇者之盾', mt1:'m105', qty1:10, mt2:'m110', qty2:8, mt3:'s06', qty3:5, mt4:'s08', qty4:3, mt5:'', qty5:0, level:10, code:'10b'},
		{name:'突猛盾', mt1:'m103a', qty1:7, mt2:'m108a', qty2:3, mt3:'m108', qty3:6, mt4:'m109', qty4:6, mt5:'s11', qty5:2, level:11, code:'11a'},
		{name:'重型防禦盾', mt1:'m103a', qty1:5, mt2:'m108a', qty2:4, mt3:'m110', qty3:3, mt4:'m109', qty4:6, mt5:'s08', qty5:2, level:11, code:'11b'},
		{name:'棗木盾', mt1:'w11', qty1:20, mt2:'m108a', qty2:10, mt3:'m108', qty3:15, mt4:'m110', qty4:5, mt5:'m111', qty5:3, level:11, code:'11c'},
		{name:'烏金盾', mt1:'m108a', qty1:15, mt2:'m108', qty2:6, mt3:'m109a', qty3:9, mt4:'m111', qty4:9, mt5:'m112', qty5:6, level:12, code:'12a'},
		{name:'天使頭盔', mt1:'c109', qty1:7, mt2:'c112', qty2:6, mt3:'m108', qty3:15, mt4:'m111', qty4:17, mt5:'m112', qty5:13, level:12, code:'12b'},
		{name:'描金盾', mt1:'w12', qty1:20, mt2:'w13', qty2:20, mt3:'m110', qty3:7, mt4:'m112', qty4:8, mt5:'m113', qty5:4, level:13, code:'13a'},
		{name:'武士道頭盔', mt1:'c112', qty1:4, mt2:'c113', qty2:13, mt3:'m111', qty3:14, mt4:'m112', qty4:9, mt5:'m113', qty5:9, level:13, code:'13b'},
		{name:'玉石盾', mt1:'w14', qty1:20, mt2:'m109a', qty2:9, mt3:'m111', qty3:11, mt4:'m113', qty4:10, mt5:'m114', qty5:6, level:14, code:'14a'},
		{name:'屠魔頭盔', mt1:'c113', qty1:11, mt2:'c114', qty2:20, mt3:'m112', qty3:13, mt4:'m113', qty4:7, mt5:'m114', qty5:11, level:14, code:'14b'},
		{name:'鬼面盾', mt1:'s12', qty1:2, mt2:'c115', qty2:7, mt3:'m112', qty3:11, mt4:'m114', qty4:9, mt5:'m115', qty5:7, level:15, code:'15a'},
		{name:'瑪爾斯頭盔', mt1:'s102', qty1:2, mt2:'c115', qty2:10, mt3:'m112', qty3:6, mt4:'m114', qty4:12, mt5:'m115', qty5:18, level:15, code:'15b'}
	],
// 11C盾：棗木盾
// 藍龍之鱗10、謝爾哈特礦條10、奧利哈鋼條6、雅達曼鎝條8、喜馬拉斯礦條6	//old
// 棗木20 達馬斯礦條10 幻之銀條15 奧利哈鋼條5 石墨條3
// 12A盾：烏金盾
// 達馬斯礦條15 幻之銀條6 謝爾哈特礦條9 石墨條9 鉛錠6
// 誓言之證5、謝爾哈特礦條12、奧利哈鋼條6、雅達曼鎝條4、喜馬拉斯礦條6	//old
// 12B盔：天使頭盔
// 細麻布7、鵝絨6、幻之銀條15、石墨條17、鉛錠13
// 13A盾：描金盾
// 藤木20 桃花心木20 奧利哈鋼條7 鉛錠8 朱砂錠4
// 13B盔：武士道頭盔
// 鵝絨4、硬綢布13、石墨條14、鉛錠9、朱砂錠9
// 14A盾：玉石盾
// 檜木20、謝爾哈特礦條9、石墨條11、朱砂錠10、紫英石6
// 14B盔：屠魔頭盔
// 硬綢布11、寧麻布10、鉛錠13、朱砂錠7、紫英石11
// 15A盾：鬼面盾
// 妖草的血2、水鳥羽絨7、鉛錠11、紫英石9、石油7
// 15B盔：瑪爾斯頭盔
// 冰龍石2、水鳥羽絨10、鉛錠6、紫英石12、石油18
	md01:[
		{name:'生命力回復藥(100)', mt1:'f01', qty1:10, mt2:'f02', qty2:1, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'生命力回復藥(150)', mt1:'f01', qty1:10, mt2:'f02', qty2:10, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'想泉丸', mt1:'g02f', qty1:20, mt2:'g02g', qty2:20, mt3:'g02h', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'生命力回復藥(200)', mt1:'f01', qty1:10, mt2:'f02', qty2:10, mt3:'f03', qty3:5, mt4:'', qty4:0, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'猛毒的餌', mt1:'g05a', qty1:20, mt2:'xf11', qty2:1, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:3, code:'3b'},
		{name:'生命力回復藥(250)', mt1:'f02', qty1:10, mt2:'f03', qty2:15, mt3:'f04', qty3:5, mt4:'', qty4:0, mt5:'', qty5:0, level:4, code:'4a'},
		{name:'迷魂藥', mt1:'g04g', qty1:1, mt2:'g04h', qty2:1, mt3:'g04f', qty3:1, mt4:'g05g', qty4:20, mt5:'', qty5:0, level:4, code:'4b'},
		{name:'畢克銀酸', mt1:'g04g', qty1:1, mt2:'g04h', qty2:1, mt3:'g04f', qty3:1, mt4:'s22', qty4:1, mt5:'m004', qty5:1, level:4, code:'4c'},
		{name:'生命力回復藥(300)', mt1:'f03', qty1:15, mt2:'f04', qty2:15, mt3:'f05', qty3:5, mt4:'', qty4:0, mt5:'', qty5:0, level:5, code:'5a'},
		{name:'生命力回復藥(400)', mt1:'f04', qty1:10, mt2:'f05', qty2:15, mt3:'f06', qty3:15, mt4:'', qty4:0, mt5:'', qty5:0, level:6, code:'6a'},
		{name:'生命力回復藥(500)', mt1:'f04', qty1:5, mt2:'f05', qty2:13, mt3:'f06', qty3:15, mt4:'f07', qty4:15, mt5:'', qty5:0, level:7, code:'7a'},
		{name:'水龍之藥', mt1:'wd17', qty1:1, mt2:'f07', qty2:20, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'生命力回復藥(600)', mt1:'f01', qty1:10, mt2:'f04', qty2:10, mt3:'f06', qty3:10, mt4:'f07', qty4:20, mt5:'f08', qty5:10, level:8, code:'8a'},
		{name:'深藍九號', mt1:'f07', qty1:10, mt2:'f08', qty2:10, mt3:'w08b', qty3:20, mt4:'g08d', qty4:10, mt5:'s02', qty5:5, level:8, code:'8b'},
		{name:'生命力回復藥(800)', mt1:'f03', qty1:5, mt2:'f06', qty2:7, mt3:'f08', qty3:5, mt4:'f09', qty4:10, mt5:'f10', qty5:5, level:9, code:'9a'},
		{name:'生命力回復藥(1000)', mt1:'f01', qty1:10, mt2:'f02', qty2:10, mt3:'f08', qty3:6, mt4:'f09', qty4:8, mt5:'f10', qty5:10, level:10, code:'10a'},
		{name:'生命力回復藥(1400)', mt1:'f05', qty1:20, mt2:'f08', qty2:20, mt3:'f09', qty3:10, mt4:'f10', qty4:10, mt5:'g04f', qty5:1, level:11, code:'11a'},
		{name:'生命力回復藥(1200)', mt1:'f10', qty1:40, mt2:'f08a', qty2:20, mt3:'f11', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:11, code:'11b'},
		{name:'生命力回復藥(1400)', mt1:'f09', qty1:20, mt2:'f08a', qty2:20, mt3:'f11', qty3:20, mt4:'f12', qty4:20, mt5:'', qty5:0, level:12, code:'12a'},
		{name:'生命力回復藥(1600)', mt1:'f08', qty1:20, mt2:'f09', qty2:20, mt3:'f10', qty3:20, mt4:'f11', qty4:20, mt5:'f13', qty5:20, level:13, code:'13a'}
	],
// 11B藥水：水粉
// 魔法紅蘿蔔1、香草3、茴香20、德島果蘭20、月桂樹的葉子20		// old
// 11B藥水：生命力回復藥(1200)
// 七葉樹40、香草20、紫茉莉20
// 12級藥水：指甲油
// 13級藥水：香片
// 14級藥水：忘憂湯
// 15級藥水：花露水
	fd01:[
		{name:'蕃茄醬', mt1:'g01b', qty1:5, mt2:'xf01', qty2:1, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'麵包', mt1:'g01d', qty1:16, mt2:'g02b', qty2:10, mt3:'g03a', qty3:5, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'神聖美乃滋', mt1:'g03a', qty1:1, mt2:'xf03', qty2:2, mt3:'xf04', qty3:2, mt4:'g01c', qty4:2, mt5:'', qty5:0, level:1, code:'1c'},
		{name:'白飯', mt1:'xf06', qty1:5, mt2:'g01e', qty2:5, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1d'},
		{name:'美乃滋芝麻拌飯', mt1:'g05j', qty1:1, mt2:'xf05', qty2:3, mt3:'xf10', qty3:3, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1e'},
		{name:'蛋飯', mt1:'xf10', qty1:3, mt2:'g01c', qty2:10, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1f'},
		{name:'蛋包飯', mt1:'g01c', qty1:10, mt2:'g02b', qty2:15, mt3:'g03a', qty3:5, mt4:'g04a', qty4:1, mt5:'xf07', qty5:1, level:2, code:'2a'},
		{name:'法國麵包', mt1:'g01d', qty1:20, mt2:'g02b', qty2:20, mt3:'g03a', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'炒麵', mt1:'g01d', qty1:20, mt2:'g03a', qty2:10, mt3:'g04d', qty3:20, mt4:'g05c', qty4:12, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'青椒肉絲', mt1:'g02c', qty1:20, mt2:'g03a', qty2:10, mt3:'g04c', qty3:20, mt4:'g05a', qty4:20, mt5:'', qty5:0, level:3, code:'3b'},
		{name:'猛毒的餌', mt1:'g05a', qty1:20, mt2:'xf11', qty2:1, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:3, code:'3c'},
		{name:'燒雞', mt1:'g03a', qty1:20, mt2:'g04b', qty2:20, mt3:'g05d', qty3:20, mt4:'f02', qty4:20, mt5:'', qty5:0, level:4, code:'4a'},
		{name:'親子丼', mt1:'g01c', qty1:20, mt2:'g02a', qty2:20, mt3:'g03b', qty3:20, mt4:'g04b', qty4:20, mt5:'g06b', qty5:20, level:4, code:'4b'},
		{name:'漢堡', mt1:'g01c', qty1:20, mt2:'g02a', qty2:20, mt3:'xf07', qty3:3, mt4:'g05a', qty4:20, mt5:'', qty5:0, level:5, code:'5a'},
		{name:'星鰻飯糰', mt1:'g03a', qty1:20, mt2:'g03b', qty2:20, mt3:'g04d', qty3:20, mt4:'g05b', qty4:20, mt5:'g06b', qty5:20, level:5, code:'5b'},
		{name:'醬油豬骨拉麵', mt1:'g01d', qty1:20, mt2:'g01c', qty2:20, mt3:'g03b', qty3:20, mt4:'g04d', qty4:20, mt5:'g05f', qty5:20, level:5, code:'5c'},
		{name:'炒麵麵包', mt1:'xf09', qty1:1, mt2:'xf08', qty2:1, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:6, code:'6a'},
		{name:'壽喜鍋', mt1:'g02a', qty1:20, mt2:'g03a', qty2:20, mt3:'g03b', qty3:20, mt4:'g05a', qty4:20, mt5:'g06a', qty5:20, level:6, code:'6b'},
		{name:'咖哩飯', mt1:'g02a', qty1:20, mt2:'g04b', qty2:20, mt3:'g05e', qty3:20, mt4:'g06b', qty4:20, mt5:'g07c', qty5:10, level:7, code:'7a'},
		{name:'韓式泡菜飯', mt1:'g01c', qty1:10, mt2:'g03a', qty2:20, mt3:'g05a', qty3:20, mt4:'g06b', qty4:20, mt5:'g07b', qty5:20, level:7, code:'7b'},
		{name:'水龍料理', mt1:'wd16', qty1:1, mt2:'', qty2:0, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:7, code:'7c'},
		{name:'螃蟹鍋', mt1:'g02a', qty1:20, mt2:'g03b', qty2:20, mt3:'g05e', qty3:20, mt4:'g07b', qty4:20, mt5:'g08a', qty5:10, level:8, code:'8a'},
		{name:'牛排', mt1:'g03a', qty1:20, mt2:'g05d', qty2:10, mt3:'g05e', qty3:10, mt4:'g07a', qty4:20, mt5:'g08b', qty5:20, level:8, code:'8b'},
		{name:'魅惑的哈蜜瓜麵包', mt1:'g01d', qty1:20, mt2:'g02b', qty2:20, mt3:'g06a', qty3:20, mt4:'w08b', qty4:10, mt5:'g08c', qty5:3, level:8, code:'8c'},
		{name:'醋飯壽司', mt1:'g04d', qty1:20, mt2:'g05b', qty2:20, mt3:'g06b', qty3:20, mt4:'g08a', qty4:20, mt5:'g09a', qty5:10, level:9, code:'9a'},
		{name:'豪華壽司組', mt1:'g01c', qty1:20, mt2:'g03b', qty2:20, mt3:'g04d', qty3:20, mt4:'g09a', qty4:15, mt5:'g09b', qty5:15, level:9, code:'9b'},
		{name:'魚翅湯', mt1:'g01c', qty1:20, mt2:'g02a', qty2:20, mt3:'g03a', qty3:20, mt4:'g05d', qty4:20, mt5:'g10a', qty5:20, level:10, code:'10a'},
		{name:'鱉料理', mt1:'g07b', qty1:20, mt2:'g08a', qty2:20, mt3:'g09a', qty3:10, mt4:'g09b', qty4:10, mt5:'g10b', qty5:20, level:10, code:'10b'},
		{name:'韓式海鮮鍋', mt1:'g10b', qty1:20, mt2:'g09a', qty2:40, mt3:'g08a', qty3:20, mt4:'g04e', qty4:20, mt5:'xf02', qty5:3, level:11, code:'11a'},
		// {name:'豆腐', mt1:'g03a', qty1:20, mt2:'g11a', qty2:40, mt3:'', qty3:0, mt4:'', qty4:0, mt5:'', qty5:0, level:11, code:'11b'},
		{name:'定食飯盒', mt1:'g09a', qty1:20, mt2:'g08b', qty2:20, mt3:'g06b', qty3:20, mt4:'g03a', qty4:20, mt5:'g11a', qty5:20, level:11, code:'11c'},
		{name:'味增鍋', mt1:'g03b', qty1:20, mt2:'g02a', qty2:20, mt3:'g05d', qty3:20, mt4:'g03a', qty4:20, mt5:'g10a', qty5:40, level:12, code:'12a'},
		{name:'魚翅燕窩', mt1:'g03a', qty1:40, mt2:'g13b', qty2:40, mt3:'g10a', qty3:40, mt4:'g06a', qty4:20, mt5:'', qty5:0, level:13, code:'13a'},
		{name:'海陸鍋', mt1:'g03a', qty1:40, mt2:'g08a', qty2:20, mt3:'g08b', qty3:20, mt4:'g09a', qty4:20, mt5:'g14a', qty5:40, level:14, code:'14a'}
	],
// 11C料理：定食飯盒
// 伊勢蝦20 霜降牛肉20 米20 鹽20 黃豆20
// 12級料理：味增鍋
// 醬油20 蔥20 胡椒20 鹽20 魚翅40
// 13級料理：魚翅燕窩
// 鹽40 天然燕窩40 魚翅40 砂糖20
// 14級料理：海陸鍋
// 鹽40 螃蟹20 霜降牛肉20 伊勢蝦20 鹿茸40
// 15級料理：蜂蜜牛奶鍋
	sp01:[
		{name:'鹿皮手套', mt1:'g01a', qty1:20, mt2:'c001', qty2:20, mt3:'c101', qty3:1, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1a'},
		{name:'皮製鈴鼓', mt1:'g01a', qty1:20, mt2:'w01', qty2:20, mt3:'m101', qty3:1, mt4:'', qty4:0, mt5:'', qty5:0, level:1, code:'1b'},
		{name:'隕石之鼓', mt1:'g01a', qty1:20, mt2:'w02', qty2:10, mt3:'m101', qty3:1, mt4:'', qty4:1, mt5:'', qty5:0, level:2, code:'2a'},
		{name:'薰香包', mt1:'f01', qty1:10, mt2:'f02', qty2:10, mt3:'c101', qty3:1, mt4:'c102', qty4:1, mt5:'', qty5:0, level:2, code:'2b'},
		{name:'雪之結晶', mt1:'m008b', qty1:10, mt2:'g03a', qty2:20, mt3:'m102', qty3:1, mt4:'', qty4:0, mt5:'', qty5:0, level:3, code:'3a'},
		{name:'銀折扇', mt1:'f03', qty1:10, mt2:'m103', qty2:5, mt3:'w03a', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:3, code:'3b'},
		{name:'惡魔風笛', mt1:'s18', qty1:1, mt2:'w01a', qty2:20, mt3:'m101', qty3:1, mt4:'m102', qty4:2, mt5:'c102', qty5:1, level:4, code:'4a'},
		{name:'戀愛耳環', mt1:'g05k', qty1:2, mt2:'f01', qty2:10, mt3:'m104', qty3:1, mt4:'m105', qty4:3, mt5:'', qty5:0, level:4, code:'4b'},
		{name:'淚石之戒', mt1:'s19', qty1:1, mt2:'m105', qty2:1, mt3:'m104', qty3:2, mt4:'w05', qty4:1, mt5:'', qty5:0, level:5, code:'5a'},
		{name:'龍之環', mt1:'g08d', qty1:5, mt2:'m105', qty2:3, mt3:'m104', qty3:1, mt4:'m101', qty4:1, mt5:'', qty5:0, level:5, code:'5b'},
		{name:'藍羽髮暨', mt1:'s16', qty1:1, mt2:'m106', qty2:3, mt3:'m104', qty3:1, mt4:'', qty4:2, mt5:'', qty5:0, level:6, code:'6a'},
		{name:'黑魔法之戒', mt1:'s20', qty1:1, mt2:'m105', qty2:3, mt3:'m104', qty3:1, mt4:'c006', qty4:2, mt5:'', qty5:0, level:6, code:'6b'},
		{name:'祈願之符', mt1:'s21', qty1:1, mt2:'c105', qty2:10, mt3:'m107', qty3:1, mt4:'', qty4:0, mt5:'', qty5:0, level:7, code:'7a'},
		{name:'鏡戒', mt1:'m105', qty1:1, mt2:'m108', qty2:1, mt3:'w06', qty3:20, mt4:'', qty4:0, mt5:'', qty5:0, level:7, code:'7b'},
		{name:'紅羽髮暨', mt1:'s15', qty1:1, mt2:'m106', qty2:3, mt3:'m108', qty3:1, mt4:'m005a', qty4:2, mt5:'', qty5:0, level:8, code:'8a'},
		{name:'香草錦囊', mt1:'f08a', qty1:20, mt2:'w08a', qty2:20, mt3:'c106', qty3:1, mt4:'c108', qty4:2, mt5:'', qty5:0, level:8, code:'8b'},
		{name:'豐年之穗', mt1:'f08', qty1:20, mt2:'m108a', qty2:1, mt3:'f07', qty3:20, mt4:'s05', qty4:2, mt5:'', qty5:0, level:9, code:'9a'},
		{name:'茴香環', mt1:'m109a', qty1:1, mt2:'f09', qty2:20, mt3:'w08', qty3:20, mt4:'s07', qty4:2, mt5:'', qty5:0, level:9, code:'9b'},
		{name:'奇石步搖', mt1:'m005a', qty1:7, mt2:'m103a', qty2:5, mt3:'m110a', qty3:1, mt4:'s07', qty4:2, mt5:'w10', qty5:20, level:10, code:'10a'},
		{name:'香柏環', mt1:'m110a', qty1:1, mt2:'w09', qty2:20, mt3:'f10', qty3:20, mt4:'m109', qty4:1, mt5:'', qty5:0, level:10, code:'10b'},
		{name:'文昌筆', mt1:'s05', qty1:5, mt2:'s06', qty2:5, mt3:'c111', qty3:10, mt4:'w11', qty4:40, mt5:'w09', qty5:40, level:11, code:'11a'},
		{name:'貔貅墜', mt1:'s11', qty1:5, mt2:'m112', qty2:15, mt3:'c110', qty3:15, mt4:'c108b', qty4:20, mt5:'f12', qty5:40, level:12, code:'12a'},
		{name:'碎藥之護符', mt1:'s06', qty1:5, mt2:'s08', qty2:5, mt3:'s07', qty3:5, mt4:'s10', qty4:5, mt5:'s11', qty5:5, level:12, code:'12c'},
		{name:'避毒珠', mt1:'s05', qty1:5, mt2:'c114', qty2:10, mt3:'f13', qty3:40, mt4:'m112', qty4:15, mt5:'m113', qty5:15, level:13, code:'13a'},
		{name:'風虎之戒', mt1:'s04', qty1:100, mt2:'s107', qty2:10, mt3:'s106', qty3:10, mt4:'wt18', qty4:1, mt5:'', qty5:0, level:13, code:'13b'},
		{name:'狐仙手環', mt1:'s07', qty1:5, mt2:'c114', qty2:10, mt3:'m110a', qty3:15, mt4:'m111', qty4:20, mt5:'m114', qty5:20, level:14, code:'14a'},
		{name:'九龍珮', mt1:'s08', qty1:5, mt2:'f14', qty2:40, mt3:'m113', qty3:20, mt4:'m114', qty4:20, mt5:'m115', qty5:15, level:15, code:'15a'}
	]
// 11級飾品: 文昌筆
// 七葉樹2 鉛錠1 柞蠶絲2 梣5		// old
// 火焰之魂5 魔族的水晶5 鴨絨10 棗木40 絲柏40

// 12級飾品: 貔貅墜
// 火焰之魂2 喜馬拉斯礦條2 阿巴尼斯製的線2 棗木5		// old
// 風龍蜥的甲殼5 鉛錠15 開米士毛線15 阿巴尼斯製的線20 鳳仙花40

// 12C飾品: 碎藥之護符
// 魔族的水晶5 誓言之證5 鋼騎之礦5 德特家的布5 風龍蜥的甲殼5
// 13級飾品: 避毒珠
// 土龍1 濕地毒蛇5 傑諾瓦線2 萊姆騎士礦條5 藤木5		// old
// 火焰之魂5 妖草的血5 茉莉40 鉛錠15 朱砂錠15

// 14級飾品: 狐仙手環
// 狐皮1 宁麻布2 紫英石5 桃花心木5		// old
// 鋼騎之礦5 寧麻布10 喜馬拉斯礦條15 石墨條20 紫英石20

// 15級飾品: 九龍珮
// 藍龍之鱗10 宁麻布2 萊姆騎士礦條10 紫英石10 檜木5		// old
// 誓言之證5 萱草40 朱砂錠20 紫英石20 石油15

// 13級飾品：風虎之戒
// 風的水晶碎片100 銀絲棉線10 光輝結晶10 塵封的鐵戒1
};
