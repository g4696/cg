﻿var materials = [
	{name:'銅', code:'m001', set:40},
	{name:'鐵', code:'m002', set:40},
	{name:'銀', code:'m003', set:40},
	{name:'鋁', code:'m003a', set:40},
	{name:'純銀', code:'m004', set:40},
	{name:'金', code:'m005', set:40},
	{name:'鈦礦石', code:'m005a', set:40},
	{name:'白金', code:'m006', set:40},
	{name:'幻之鋼', code:'m007', set:40},
	{name:'幻之銀', code:'m008', set:40},
	{name:'達馬斯礦', code:'m008a', set:40},
	{name:'永久冰石', code:'m008b', set:40},
	{name:'藍龍之鱗', code:'m008c', set:40},
	{name:'勒格耐席鉧', code:'m009', set:40},
	{name:'謝爾哈特礦', code:'m009a', set:40},
	{name:'奧哈利鋼', code:'m010', set:40},
	{name:'喜馬拉斯礦', code:'m010a', set:40},
	{name:'銅條', code:'m101', set:20},
	{name:'鐵條', code:'m102', set:20},
	{name:'銀條', code:'m103', set:20},
	{name:'鋁條', code:'m103a', set:20},
	{name:'純銀條', code:'m104', set:20},
	{name:'金條', code:'m105', set:20},
	{name:'白金條', code:'m106', set:20},
	{name:'幻之鋼條', code:'m107', set:20},
	{name:'幻之銀條', code:'m108', set:20},
	{name:'達馬斯礦條', code:'m108a', set:20},
	{name:'勒格耐席鉧條', code:'m109', set:20},
	{name:'謝爾哈特礦條', code:'m109a', set:20},
	{name:'奧利哈鋼條', code:'m110', set:20},
	{name:'喜馬拉斯礦條', code:'m110a', set:20},
	{name:'印度輕木', code:'w01', set:40},
	{name:'樅', code:'w02', set:40},
	{name:'黃月木', code:'w03', set:40},
	{name:'茱萸木', code:'w03a', set:40},
	{name:'鐵杉', code:'w04', set:40},
	{name:'琵琶木', code:'w05', set:40},
	{name:'赤松', code:'w06', set:40},
	{name:'朴', code:'w07', set:40},
	{name:'杉', code:'w08', set:40},
	{name:'單木', code:'w08a', set:40},
	{name:'魔法紅蘿蔔', code:'w08b', set:40},
	{name:'絲柏', code:'w09', set:40},
	{name:'梣', code:'w10', set:40},
	{name:'蘋果薄荷', code:'f01', set:40},
	{name:'檸檬草', code:'f02', set:40},
	{name:'蝴蝶花', code:'f03', set:40},
	{name:'果梨', code:'f04', set:40},
	{name:'桃木', code:'f05', set:40},
	{name:'冰凍愛麗絲', code:'f05a', set:40},
	{name:'番紅花', code:'f06', set:40},
	{name:'百里香', code:'f07', set:40},
	{name:'瞿麥', code:'f08', set:40},
	{name:'香草', code:'f08a', set:40},
	{name:'茴香', code:'f09', set:40},
	{name:'七葉樹', code:'f10', set:40},
	{name:'麻', code:'c001', set:40},
	{name:'木棉', code:'c002', set:40},
	{name:'羊毛', code:'c003', set:40},
	{name:'棉花', code:'c004', set:40},
	{name:'紗', code:'c005', set:40},
	{name:'蠶絲', code:'c006', set:40},
	{name:'莎蓮娜紗', code:'c007', set:40},
	{name:'傑諾瓦紗', code:'c008', set:40},
	{name:'芎麻', code:'c009', set:40},
	{name:'開米士羊毛', code:'c010', set:40},
	{name:'麻布', code:'c101', set:20},
	{name:'木棉布', code:'c102', set:20},
	{name:'毛氈', code:'c103', set:20},
	{name:'棉布', code:'c104', set:20},
	{name:'細線', code:'c105', set:20},
	{name:'絹布', code:'c106', set:20},
	{name:'莎蓮娜線', code:'c107', set:20},
	{name:'傑諾瓦線', code:'c108', set:20},
	{name:'阿巴尼斯製的布', code:'c108a', set:20},
	{name:'阿巴尼斯製的線', code:'c108b', set:20},
	{name:'細麻布', code:'c109', set:20},
	{name:'開米士毛線', code:'c110', set:20},
	{name:'鹿皮', code:'g01a', set:40},
	{name:'蕃茄', code:'g01b', set:40},
	{name:'雞蛋', code:'g01c', set:40},
	{name:'小麥粉', code:'g01d', set:40},
	{name:'神聖米', code:'g01e', set:40},
	{name:'蔥', code:'g02a', set:40},
	{name:'牛奶', code:'g02b', set:40},
	{name:'青椒', code:'g02c', set:40},
	{name:'大豆', code:'g02d', set:40},
	{name:'石鯛魚', code:'g02e', set:40},
	{name:'鹽', code:'g03a', set:40},
	{name:'醬油', code:'g03b', set:40},
	{name:'白菜', code:'g03c', set:40},
	{name:'芹菜', code:'g04a', set:40},
	{name:'雞肉', code:'g04b', set:40},
	{name:'竹筍', code:'g04c', set:40},
	{name:'海苔', code:'g04d', set:40},
	{name:'竹莢魚', code:'g04e', set:40},
	{name:'井底蛙', code:'g04f', set:1},
	{name:'摩斯蜥蝪', code:'g04g', set:1},
	{name:'惡魔魚', code:'g04h', set:1},
	{name:'竹莢魚', code:'g04i', set:40},
	{name:'狐皮', code:'g04j', set:40},
	{name:'牛肉', code:'g05a', set:40},
	{name:'星鰻', code:'g05b', set:40},
	{name:'生薑', code:'g05c', set:40},
	{name:'胡椒', code:'g05d', set:40},
	{name:'馬鈴薯', code:'g05e', set:40},
	{name:'豬肉', code:'g05f', set:40},
	{name:'戀愛蘋果', code:'g05g', set:40},
	{name:'鮭魚', code:'g05h', set:40},
	{name:'大黑蝦', code:'g05i', set:40},
	{name:'芝麻娃娃', code:'g05j', set:1},
	{name:'砂糖', code:'g06a', set:40},
	{name:'米', code:'g06b', set:40},
	{name:'高級奶油', code:'g07a', set:40},
	{name:'辣椒', code:'g07b', set:40},
	{name:'咖哩塊', code:'g07c', set:40},
	{name:'螃蟹', code:'g08a', set:40},
	{name:'霜降牛肉', code:'g08b', set:40},
	{name:'阿巴尼斯哈蜜瓜', code:'g08c', set:3},
	{name:'濕地毒蛇', code:'g08d', set:40},
	{name:'伊勢蝦', code:'g09a', set:40},
	{name:'海膽', code:'g09b', set:40},
	{name:'魚翅', code:'g10a', set:40},
	{name:'鱉', code:'g10b', set:40},
	{name:'地的水晶碎片', code:'s01', set:999},
	{name:'水的水晶碎片', code:'s02', set:999},
	{name:'火的水晶碎片', code:'s03', set:999},
	{name:'風的水晶碎片', code:'s04', set:999},
	{name:'火焰之魂', code:'s05', set:5},
	{name:'魔族的水晶', code:'s06', set:5},
	{name:'鋼騎之礦', code:'s07', set:5},
	{name:'誓言之證', code:'s08', set:5},
	{name:'德特家的布', code:'s09', set:5},
	{name:'蔓陀羅草的皮', code:'s10', set:5},
	{name:'風龍蜥的甲殼', code:'s11', set:5},
	{name:'妖草的血', code:'s12', set:5},
	{name:'神眼', code:'s13', set:1},
	{name:'隕石', code:'s14', set:1},
	{name:'大炸彈的卡片', code:'s15', set:1},
	{name:'瓶子', code:'xf01', set:20},
	{name:'泡菜', code:'xf02', set:3},
	{name:'神聖油', code:'xf03', set:10},
	{name:'神聖醋', code:'xf04', set:3},
	{name:'神聖美奶滋', code:'xf05', set:3},
	{name:'茶碗', code:'xf06', set:5},
	{name:'蕃茄醬', code:'xf07', set:3},
	{name:'炒麵', code:'xf08', set:3},
	{name:'法國麵包', code:'xf09', set:3},
	{name:'生鏽的劍', code:'wd01', set:99},
	{name:'生鏽的斧', code:'wd02', set:99},
	{name:'生鏽的槍', code:'wd03', set:99},
	{name:'生鏽的弓', code:'wd04', set:99},
	{name:'生鏽的杖', code:'wd05', set:99},
	{name:'生鏽的短劍', code:'wd06', set:99},
	{name:'生鏽的投擲武器', code:'wd07', set:99},
	{name:'生鏽的頭盔', code:'wd08', set:99},
	{name:'破爛的帽子', code:'wd09', set:99},
	{name:'生鏽的鎧', code:'wd10', set:99},
	{name:'破爛的衣服', code:'wd11', set:99},
	{name:'破爛的袍', code:'wd12', set:99},
	{name:'破爛的靴子', code:'wd13', set:99},
	{name:'破損的鞋', code:'wd14', set:99},
	{name:'生鏽的盾', code:'wd15', set:99}
];
