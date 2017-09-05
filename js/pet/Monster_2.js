var Monster = new (function(){
	var monAbility = params.monAbility;

	this.generate = function (monId, lv, type){	// : 寵物最高檔次(由參數查表)
		var ability = getmonAbility(monId),		// : 寵物基本能力(由參數查表)
			bp = [],
			m = {},
			rndBP = rnd(),			//隨機檔
			dropBP = drop(),		//掉檔
			grow = Math.floor(Math.random() * 6); // 成長係數 = 0,1,2,3,4,5

		if(type === 'min'){
			dropBP = [4, 4, 4, 4, 4];	//-20檔
			rndBP = [2, 2, 2, 2, 2];
			grow = 0;					//成長係數 = 0
		}
		if(type === 'max'){
			dropBP = [0, 0, 0, 0, 0];	// 0檔
			grow = 5;					//成長係數 = 5
		}
		if(type === 'std'){
			dropBP = [2, 2, 2, 2, 2];	// 10檔
			rndBP = [2, 2, 2, 2, 2];
			grow = 2;
		}

		for(i=0; i<5; i++){
			bp.push(calcBP(ability['bp'+(i+1)], rndBP[i], dropBP[i], grow, lv));
		}
		m.name = ability.name;
		m.lv = lv;
		m.kind = ability.ekn;
		m.kn = {en:ability.ekn, ch:ability.ckn};
		m.attrs = [ability.at1, ability.at2, ability.at3, ability.at4, ability.fattr];
		// m.hp  = Math.floor(bp[0]*8 + bp[1]*2 + bp[2]*3 + bp[3]*3 + bp[4]*1 + 20);
		// m.atk = Math.floor(bp[0]*0.2 + bp[1]*2.7 + bp[2]*0.3 + bp[3]*0.3 + bp[4]*0.2 + 20);
		// m.def = Math.floor(bp[0]*0.2 + bp[1]*0.3 + bp[2]*3 + bp[3]*0.3 + bp[4]*0.2 + 20);
		// m.spd = Math.floor(bp[0]*0.1 + bp[1]*0.2 + bp[2]*0.2 + bp[3]*2 + bp[4]*0.1 + 20);
		// m.mp  = Math.floor(bp[0]*1 + bp[1]*2 + bp[2]*2 + bp[3]*2 + bp[4]*10 + 20);
		// m.mnd = Math.floor(bp[0]*-0.3 + bp[1]*-0.1 + bp[2]*0.2 + bp[3]*-0.1 + bp[4]*0.8 + 100);
		// m.rcv = Math.floor(bp[0]*0.8 + bp[1]*-0.1 + bp[2]*-0.1 + bp[3]*0.2 + bp[4]*-0.3 + 100);
		var abAtts = ['hp','atk','def','spd','mp','mnd','rcv'],
			abfs = params.abf,
			abf = [];
		for(i=0; i<abAtts.length; i++){
			abf = abfs[i];
			m[abAtts[i]] = abf[5];

			for(j=0; j<5; j++){
				m[abAtts[i]] += bp[j] * abf[j];
			}
			m[abAtts[i]] = Math.floor(m[abAtts[i]]);
		}
		// m.hp  = Math.floor(bp[0]*8    + bp[1]*2    + bp[2]*3    + bp[3]*3    + bp[4]*1    + 20);
		// m.atk = Math.floor(bp[0]*0.2  + bp[1]*2.7  + bp[2]*0.3  + bp[3]*0.3  + bp[4]*0.2  + 20);
		// m.def = Math.floor(bp[0]*0.2  + bp[1]*0.3  + bp[2]*3    + bp[3]*0.3  + bp[4]*0.2  + 20);
		// m.spd = Math.floor(bp[0]*0.1  + bp[1]*0.2  + bp[2]*0.2  + bp[3]*2    + bp[4]*0.1  + 20);
		// m.mp  = Math.floor(bp[0]*1    + bp[1]*2    + bp[2]*2    + bp[3]*2    + bp[4]*10   + 20);
		// m.mnd = Math.floor(bp[0]*-0.3 + bp[1]*-0.1 + bp[2]*0.2  + bp[3]*-0.1 + bp[4]*0.8  + 100);
		// m.rcv = Math.floor(bp[0]*0.8  + bp[1]*-0.1 + bp[2]*-0.1 + bp[3]*0.2  + bp[4]*-0.3 + 100);
		return m;
	};

	function getmonAbility(monId){
		var result = {},
			i = 0;
		for(i=0 ; i<monAbility.length ; i++){
			if(monId == monAbility[i].id){
				result = monAbility[i];
				i = monAbility.length;
			}
		}
		return result;
	}

	function calcBP(bp, rndBP, dropBP, grow, lv, multi){	//計算單項BP
		var result = 0,
			dx = params.dx;

		result = (bp + rndBP - dropBP) * 0.2;	//等級1的單項BP
		if(lv != 1){
			result += (dx[bp-dropBP]+ (40+grow)/1000) * (lv - 1);
			// 每檔能力是 = [0.2+(40+成長係數)/1000*(入手等級-1)]
		}
		return result;
	}

	function rnd(seed){	//隨機檔 10
		var rrx = [0, 1, 2, 3, 4],
			rry = rrx.sort(shuffle),
			sum = 0,
			val = 0,
			arr = [0, 0, 0, 0, 0];
		
		$.each(rry, function(index, value){
			val = (index==(rry.length -1)) ? 1 : Math.random();
			val = Math.round((10 - sum) * val);
			sum += val;
			arr[value] = val;
		});
		return arr;
	}

	function drop(){		//掉檔 0~20
		var arr = [],
			i = 0;
		for(; i<5 ; i++){
			arr.push(Math.floor(Math.random()*5));
		}
		return arr;
	}

	function shuffle(a,b) {	//array 亂序
		var num = Math.random() > 0.5 ? -1 : 1;
		return num;
	}
})();