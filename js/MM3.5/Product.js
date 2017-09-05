// 'use strict';

function Product(type, rcp){

	this.type = type;
	this.level = rcp.level;
	this.code = rcp.code;		// code = code
	this.name = rcp.name;
	this.pcs = (rcp.pcs)? rcp.pcs : 1;
	this.mts = new Map();
	for(let code in rcp.mts){
		this.mts.set(code, {			// code,{m,qty}
			m : M.get(code),
			qty : rcp.mts[code]
		});
	}

	// this.mts = _mts;

	this.calcUseSlots = function (qty){				// 以生產物品數計算總共需要欄位數
		let slots = 0;
		this.mts.forEach(function(val, key, m){
			slots += Math.ceil((val.qty * qty) / val.m.set);
		});
		return slots;
	};

	this.calcUseMaterials = function (qty){			// 以生產物品數計算個別材料所需要欄位數
		let slots = new Map();
		this.mts.forEach(function(val, code, m){		// Map.forEach(val,key,map)
			slots.set(code, {
				slot : Math.ceil((val.qty * qty) / val.m.set),		// 使用欄位數
				mt : val.m,											// 使用材料
				text : (function(){
					let items = val.qty * qty;			// 計算材料所需個數
					let str = '';
					let sets = Math.floor(items / val.m.set);			// 計算材料所需組數
					if(sets > 0)
						str = new String(sets).fontcolor('blue') + ' ' + val.m.unit;
					if(items % val.m.set != 0){
						if(sets > 0)
							str += '又 ';
						str += new String(items % val.m.set).fontcolor('blue') + ' 個';
					}
					return str;
				})()
			});
		});
		return slots;
	};

	this.containsMaterial = function (mt_code){						// 檢查此產品是否使用到某一材料
		return this.mts.has(mt_code);
	};
}