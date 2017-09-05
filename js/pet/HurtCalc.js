var HurtCalc = new(function(){

	var kinds =           //種族相剋表
			{H:{H:3, B:1, P:3, U:5, F:3, I:2, A:3, M:4, D:3, Bo:5}, // 人形系
			B:{H:5, B:3, P:1, U:3, F:2, I:3, A:3, M:3, D:4, Bo:5}, // 野獸系
			P:{H:3, B:5, P:3, U:1, F:3, I:4, A:2, M:3, D:3, Bo:5},  // 植物系
			U:{H:1, B:3, P:5, U:3, F:4, I:3, A:3, M:2, D:3, Bo:5},  // 不死系
			F:{H:3, B:4, P:3, U:2, F:3, I:1, A:3, M:3, D:5, Bo:5},  // 飛行系
			I:{H:4, B:3, P:2, U:3, F:5, I:3, A:1, M:3, D:3, Bo:5},  // 昆蟲系
			A:{H:3, B:3, P:4, U:3, F:3, I:5, A:3, M:1, D:2, Bo:5},  // 特殊系
			M:{H:2, B:3, P:3, U:4, F:3, I:3, A:5, M:3, D:1, Bo:5},  // 金屬系
			D:{H:3, B:2, P:3, U:3, F:1, I:3, A:4, M:5, D:3, Bo:5}, // 龍系
			Bo:{H:1, B:1, P:1, U:1, F:1, I:1, A:1, M:1, D:1, Bo:3}};  // 邪魔系
	var _atk, atk, _def, def, base_hurt;

	this.phyHurt = function(p, m){
		var effect = [1.25],		//基本打怪就會有的25%加成
			total = {},
			i = 0;

		_atk = p.atk;
		_def = m.def;
		atk = convert240(_atk);
		def = convert240(_def);
		base_hurt = p_hurt( atk, def );

		effect.push( attrEffect( p.attrs, m.attrs ));			// 屬性相剋
		effect.push( kindEffect( p.kind, m.kind ));				// 種族相剋
		effect.push( skillEffect_p( p.skill, p.skill_lv ));		// 技能加成
		if(p.hasCritical){
			base_hurt += criticalEffect( p.lv, m.lv, m.def );	// 必殺加成，附加在基本傷害值上
		}

		if(p.hasKindWeapon){									// 種族武器加成
			effect.push( kindWeaponEffect( p.kindWeapon, m.kind ));
		}

		total.hurt = base_hurt;
		for(i=0 ; i<effect.length ; i++){						// 
			total.hurt *= effect[i];
		}
		total.hurt = Math.round(total.hurt);
		total.upperHurt = Math.round(total.hurt * 1.1);			// 傷害值隨機+10%
		total.lowerHurt = Math.round(total.hurt * 0.9);			// 傷害值隨機-10%
		total.effect = effect;
		return total;
	};

	this.magHurt = function(p, m){
		var effect = [1.25],		//基本打怪就會有的25%加成
			total = {},
			i = 0;

		if(p.skill != 12){
			base_hurt = m_hurt( p.skill, p.skill_lv );				// 基本魔法傷害 : 技能等級 & 範圍(單體/強力/全體)
			effect.push( mndDiffEffect( p.mnd, m.mnd ));			// 精神差距影響
			effect.push( mndLevelEffect( p.mnd, p.skill_lv ));		// 精神級距影響
			effect.push( attrEffect_m( p.skill, m.attrs ));			// 屬性魔法影響
			effect.push( atkEffect_m( p.matk, p.skill_lv ));		// 魔攻加成
		}
		else{
			base_hurt = s_hurt( p.mnd, m.def, p.skill_lv );			// 精神衝擊波傷害

			if(p.hasCritical){
				base_hurt += criticalEffect( p.lv, m.lv, m.def );	// 必殺加成，附加在基本傷害值上
			}

			effect.push( shkNumEffect( p.atkNum ) );				// 精神衝擊波隨攻擊數量衰減
		}

		effect.push( attrEffect( p.attrs, m.attrs ));				// 屬性相剋
		effect.push( kindEffect( p.kind, m.kind ));					// 種族相剋

		if(p.hasKindWeapon){										// 種族武器加成
			effect.push( kindWeaponEffect( p.kindWeapon, m.kind ));
		}

		total.hurt = base_hurt;
		for(i=0 ; i<effect.length ; i++){						// 
			total.hurt *= effect[i];
		}
		total.hurt = Math.round(total.hurt);
		total.upperHurt = Math.round(total.hurt * 1.1);			// 傷害值隨機+10%
		total.lowerHurt = Math.round(total.hurt * 0.9);			// 傷害值隨機-10%
		total.effect = effect;
		total.base_hurt = base_hurt;
		return total;
	};

	function convert240( x ){						// 攻防力超過240轉換
		return (x <= 240)? x : Math.round(240+(x-240)*0.3);
	}

	function p_hurt( $atk, $def ){					// 物理基本傷害計算
		return Math.round((Math.pow($atk, 2) * 3) / ($atk + $def * 3));
	}

	function m_hurt( skill, lv ){					// 魔法基本傷害計算
		// var magicHurtBasic = [83,150,210,266,323,380,438,503,567,635],
		var magicHurtBasic = [85,150,210,270,325,380,440,500,570,635],
			magicType = Math.floor(skill / 4),
			ratio = [1, 0.6, 0.4];			// (單體/強力/全體) 傷害值倍率
		return magicHurtBasic[lv-1] * ratio[magicType];
	}

	function s_hurt( a_mnd, b_def, lv ){
		// 精神值轉換為攻擊力公式: 精神 x 0.7 + 40 x 技能等級 - 50
		var $atk = a_mnd * 0.7 + 40 * lv - 50;
		return p_hurt($atk, b_def);
	}

	function attrEffect( a, b ){	// 水晶屬性影響(30%)
		var val = 0, _val = 0,
			sum = [0,0],
			i = 0, j = 0,
			tmp = 0;

		for(i=0 ; i<4 ; i++){
			j = (i+1) % 4;
			val += a[i] * b[j];
			_val += a[j] * b[i];
			sum[0] += a[i];
			sum[1] += b[i];
		}

		// 屬性格數多寡 + 屬性相剋
		tmp = (val - _val) * 0.003;
		tmp = tmp + ((sum[0] - sum[1]) * 0.03);
		tmp = tmp + 1;
		return tmp;
	}

	function kindEffect(a_kind, b_kind){		// 種族相剋影響(30%)
		var effect = [1.3, 1.15, 1, 0.85, 0.7];
		return effect[kinds[a_kind][b_kind] - 1];
	}

	function kindWeaponEffect(a_kind, b_kind){	// 種族武器影響(20%)
		var effect = [1.2, 1.1, 1, 0.9, 0.8];
		return effect[kinds[a_kind][b_kind] - 1];
	}

	function criticalEffect(a_lv, b_lv, b_def){	// 必殺傷害加成
		// 必殺時的損傷 = {[被攻擊者防禦力*攻擊者等級/(被攻擊者等級*2)]+原損傷值}*技能倍率
		return (a_lv * b_def) / (b_lv * 2);
	}

	function shkNumEffect( num ){				// 精神衝擊波隨攻擊對象數量衰減
		var effect = [1, 0.88, 0.77, 0.66, 0.55];
		return effect[num - 1];
	}

	function mndDiffEffect( a_mnd, b_mnd ){		// 精神差距影響
		var diff = parseFloat(a_mnd) / parseFloat(b_mnd),
			result = 1;

		if(diff >= 1.2){ result = 1; }
		if(diff < 1.2  &&  diff >= 1.14){ result = 0.9; }
		if(diff < 1.14 &&  diff >= 1.05){ result = 0.82; }
		if(diff < 1.05 &&  diff >= 0.98){ result = 0.63; }
		if(diff < 0.98 &&  diff >= 0.9 ){ result = 0.55; }
		if(diff < 0.9  &&  diff >= 0.8 ){ result = 0.36; }
		if(diff < 0.8  &&  diff >= 0.7 ){ result = 0.27; }
		if(diff < 0.7){ result = 0.09; }

		return result;
	}

	function mndLevelEffect( mnd, lv ){			// 等級魔法所需精神級距影響
		var mndLevel = [123,143,163,183,203,223,243,263,283,303];
		if(mnd < mndLevel[lv-1])
			return (mnd / mndLevel[lv-1]);
		else
			return 1;
	}

	function attrEffect_m( skill, attrs ){		// 屬性魔法加成
		var mAttr = skill % 4;
		return 1 + ( ( attrs[(mAttr+1)%4] - attrs[(mAttr+3)%4] ) * 0.035);
	}

	function atkEffect_m( matk, lv ){			// 魔攻影響
		var matkLow  = [10,40,70,100,130,160,190,220,250,280],
			matkHigh = [14,48,82,116,150,184,218,252,286,320];
		if( matk <= matkLow[lv-1] )
			return 1;
		else
			return 1 + Math.min((((matk-matkLow[lv-1]) / (matkHigh[lv-1]-matkLow[lv-1])) * 0.5), 0.5);
	}

	function skillEffect_p(skill, lv){
		var result;
		switch(skill){
			case 0: 			//普攻
				result = 1;
				break;
			case 1: 			//亂射1箭
				result = 0.45;
				break;
			case 2: 			//亂射2箭
				result = 0.75;
				break;
			case 3: 			//氣功彈
				result = 1.25;
				break;
			case 4: 			//追月
				result = 0.7;
				break;
			case 5: 			//乾坤
				result = 1 + (0.1 * lv);
				break;
			case 6: 			//迅速果斷
				_atk = _atk * (1.5 + 0.1 * lv) ;
				atk = convert240(_atk);
				base_hurt = p_hurt(atk, def);
				result = 1;
				break;
			case 7: 			//諸刃
				result = 1 + (0.07 * lv);
				break;
			case 8: 			//崩擊
				result = (Math.pow((10 + lv), 2) - 1) / 100;
				break;
		}
		return result;
	}
})();