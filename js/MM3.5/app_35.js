// 'use strict';

var types = [				//裝備種類選項
	{val:'wp01' ,name:'劍'},
	{val:'wp02' ,name:'斧'},
	{val:'wp03' ,name:'槍'},
	{val:'wp04' ,name:'弓'},
	{val:'wp05' ,name:'杖'},
	{val:'wp06' ,name:'小刀'},
	{val:'wp07' ,name:'回力鏢'},
	{val:'wp08' ,name:'炸彈'},
	{val:'sh01' ,name:'頭盔'},
	{val:'sh02' ,name:'帽子'},
	{val:'sh03' ,name:'鎧甲'},
	{val:'sh04' ,name:'衣服'},
	{val:'sh05' ,name:'袍'},
	{val:'sh06' ,name:'靴'},
	{val:'sh07' ,name:'鞋子'},
	{val:'sh08' ,name:'盾'},
	{val:'md01' ,name:'藥水'},
	{val:'fd01' ,name:'料理'},
	{val:'sp01' ,name:'飾品'}
];

$(function(){
	var product;
	var readyToSave = false;
	var mt_match = $('#mt_match');
	var orderItem;

	$('#prd_match').addOption('all', '所有裝備');
	types.forEach(function(type, i){
		$('#type,#prd_match').addOption(type.val, type.name);
	});
	$('#prd_match').val('all');
	
	materials.forEach(function(mt){
		mt_match.addOption(mt.code, mt.name);
	});
	mt_match
		.val('m101')
		.find('option')
			.each(function(){
				let option = $(this);
				let code = option.attr('value');

				if(/w[0-9]/.test(code))
					option.addClass('wood');
				if(/m[0-9]/.test(code))
					option.addClass('mineral');
				if(/c[0-9]/.test(code))
					option.addClass('cloth');
				if(/f[0-9]/.test(code))
					option.addClass('flower');
				if(/g[0-9]/.test(code))
					option.addClass('food');
				if(/s[0-9]/.test(code))
					option.addClass('special');
			});
	
	$('.plus_list,.minus_list').data('mt_list', []);

	$('#type')
		.val('wp01')
		.find('option')
			.slice(0,8)
				.css('background-color', '#708090')
			.end()
			.slice(8,16)
				.css('background-color', '#80A0C0')
			.end()
			.slice(16,19)
				.css('background-color', '#90C0F0');

	genEqpList($('#type').val());		//產生裝備項目清單

	// noticeBoard.init();					//0308
	
	$('#type').change(function(){		//由裝備種類選項產生裝備項目清單
		//var index = $(this)[0].selectedIndex;
		let index = $(this).selectedOptions().first().index();
		let tc;
		clearTable();
		
		tc = (function(){
			if(index >= 8)
				return (index >= 16)? '#90C0F0' : '80A0C0';
			else
				return '#708090';
		}());
		
		$(this).add('#product').css('background-color', tc);
		genEqpList($(this).val());
	});
	
	$('#product').change(function(){	//由使用者選擇的裝備顯示出所需材料
		clearTable();
		setProduct();
	});
	
	$('#slots').keydown(function(event){ //輸入完數量後，按下Enter視為按下計算按鈕
		if(event.which == 13)			//Enter
			$('#calc').click();
	});

	$('.sbtn').click(function(){		// save button
		if(readyToSave)
			noticeBoard.save(orderItem);
	});

	$('.plus_btn, .minus_btn').click(function(){		// 正負向表列加入清單
		let dir = $(this).hasClass('plus_btn')? 'plus' : 'minus';
		let mt_plist = $('.plus_list').data('mt_list');
		let mt_mlist = $('.minus_list').data('mt_list');
		let exists_list = mt_plist.concat(mt_mlist);
		let mt_list = (dir == 'plus')? mt_plist : mt_mlist;
		let itemClass = (dir == 'plus')? 'p_list_item' : 'm_list_item';
		let mt = findMaterial($('#mt_match').val());
		let dunplicate = exists_list.some(m => m.code == mt.code);

// console.log(dir);
		if( !dunplicate && (mt_list.length < 5)){
			// console.log(mt_list);
			mt_list.push(mt);
			$('.' + dir + '_list')
				.data('mt_list', mt_list)
				.append('<span class="' + itemClass + '">' + mt.name + '</sapn>');
		}

console.log($('.plus_list').data('mt_list'));
console.log($('.minus_list').data('mt_list'));
	});

	$('.plus_list, .minus_list').on('click', 'span', function(){		// 從正負向表列清單中移除指定材料
		let list = $(this).parent();
		let mt_list = list.data('mt_list');
		let selected_mt = $(this).text();
		let selected_index = mt_list.findIndex((mt) => mt.name == selected_mt);
		mt_list.splice(selected_index, 1);
		list.data('mt_list', mt_list);
		$(this).fadeOut(500).remove();
	});

	$('.mbtn').click(function(){
		// var type = $('#prd_match').val();
		let $match_list = $('#match_list');
		let mt_plist = $('.plus_list').data('mt_list');
		let mt_mlist = $('.minus_list').data('mt_list');
		let count = 0;			// 完成符合篩選條件的產品數量
		let types = [];			// 篩選範圍內的種類
		let products = [];		// 篩選範圍內的產品
		$('.match, .nomatch').hide();
		$match_list.removeOption(/./);	//清除裝備項目清單
		if( type == 'all' ) {
			recipe.forEach(function(type){			// 全部種類
				types.push(type);
			});
		}
		else {
			types.push($('#prd_match').val());		// 指定種類
		}
		types.forEach(function(type){
			recipe[type].forEach(function(rcp, index){
				products.push({
					prd : new Product(type, rcp),
					index : index
				});
			});
		});
		console.log(mt_plist);
		console.log(mt_mlist);
		products.forEach(function(p){
			let prd = p.prd;
			let plus_compare = (mt_plist.length > 0)? mt_plist.every((m) => prd.containsMaterial(m.code)) : true;
			let minus_compare = (mt_mlist.length > 0)? mt_mlist.some((m) => prd.containsMaterial(m.code)) : false;
			let compare_result = (!minus_compare) && plus_compare;
			console.log(prd.name + ':' + plus_compare + ',' + minus_compare + ',' + compare_result);
			if(compare_result){
				$match_list.addOption((prd.type + '_' + prd.index), ('Lv.' + prd.level + ' ' + prd.name));
				count++;
			}
		});

		if(count > 0){
			let first_val = $match_list.find('option').eq(0).attr('value');
			$('.match .count').html('總共找到 ' + count + ' 種裝備。')
			$('.match').show();
			$match_list.val(first_val).change();
		}
		else
			$('.nomatch').html('找不到合適的裝備！！').show();
	});
	$('#match_list').change(function(){
		let type = $(this).val().split('_')[0];
		let code = $(this).val().split('_')[1];
		$('#type').val(type);
		genEqpList(type);
		$('#product').val(code).change();
	});
	$('#match_list').click(function(){
		$(this).change();
	});

	$('.close').on('click', function(){
		let noticeId = parseInt($(this).data('nid'), 10),
			noticeDiv = $(this).closest('.notice');
		noticeBoard.delete(noticeId, noticeDiv);
	});

	// $('#noticeBoard').on('click', '.mt-item', function(){
	// 	noticeBoard.mark(this);
	// });
	
	$('#calc').click(function(){
		var useSlots = 0;	//總共所需空格數量
		var str;
		var type = $('#type').val();
		var method = $('input[name=method]:checked').val();		//讀取使用者所需之計算方式
		// method1 : 依使用者填入之空格數量計算出可生產之物品數量
		// method2 : 依使用者填入之生產物品數量計算出所需之空格數量

		orderItem = noticeBoard.genOrderItem(type, product);
		// orderItem = {
		// 	id: nid,
		// 	qty: 0,
		// 	product: product.name,				//0308 記錄產品名稱
		// 	mts: [],							// [{code,text}]
		// 	code: product.code,					//0825 記錄產品代碼
		// 	type: type							//0825 記錄產品種類
		// };
		readyToSave = false;
		$('.sbtn').hide();
		
		if(method == 'method1'){
			// method1 : 依使用者填入之空格數量計算出可生產之物品數量
			let count = 0;	//可生產物品數量
			let slots = parseInt($('#slots').val(), 10);	//空格數量

			if(product.mts.size <= slots){
				useSlots = product.calcUseSlots(count);
				do {
					useSlots = product.calcUseSlots( ++count );
					// console.log('count:'+count+', useSlots:'+useSlots);
				} while(useSlots <= slots);
				count--;

				if(type == 'wp08'){		// 炸彈
					str = new String(count).fontcolor('red') + ' 次 / 共 ';
					str += new String(count * product.pcs).fontcolor('blue') + ' 個 ';
					orderItem.qty = (count * product.pcs);	//0308 記錄生產數量(炸彈)
				}
				else{
					str = new String(count).fontcolor('red') + ' 個 ';
					orderItem.qty = count;					//0308  記錄生產數量
				}

				let index = 1;
				product.calcUseMaterials(count).forEach(function(result, code){
					$('#slt'+(index++)).html(result.text);	//0828 顯示欄位異動
					orderItem.mts.push({
						code: result.mt.code,
						text: result.text
					});	//0825 記錄使用材料與組數
				});
				
				$('#pqty').html('可生產 ' + product.name.fontcolor('blue') + ' ' + new String(count).fontcolor('red') + ' 個');
				//0828 顯示欄位異動
				$('#uslt').html('共需物品欄 ' + new String(useSlots).fontcolor('red') + ' 格');	//0828 顯示欄位異動
				readyToSave = true;
				$('.sbtn').show();
				$('#errMessage').hide();
			}
			else{
				$('#errMessage').html('可使用格數不足！！').show();
				$('#pqty,#uslt').html('&nbsp;');
			}
		}
		else{
			// method2 : 依使用者填入之生產物品數量計算出所需之空格數量
			let qty = (type == 'wp08')? Math.ceil(qty / product.pcs) : parseInt($('#slots').val(), 10);

			// if(type == 'wp08'){
			// 	qty = Math.ceil(qty / product.pcs);
			// }

			orderItem.qty = qty;				//0308  記錄生產數量

			useSlots = product.calcUseSlots(qty);

			let index = 1;
			product.calcUseMaterials(qty).forEach(function(result, code){
				$('#slt'+(index++)).html(result.text);	//0828 顯示欄位異動
				orderItem.mts.push({
					code: result.mt.code,
					text: result.text
				});	//0825 記錄使用材料與組數
			});
			
			readyToSave = (qty != 0);
			if(readyToSave){
				$('#pqty').html('可生產 ' + product.name.fontcolor('blue') + ' ' + new String(qty).fontcolor('red') + ' 個');
				//0828 顯示欄位異動
				$('#uslt').html('共需物品欄 ' + new String(useSlots).fontcolor('red') + ' 格');	//0828 顯示欄位異動
				$('.sbtn').show();
				$('#errMessage').hide();
			}
			else{
				$('#errMessage').html('生產數量為 0！！').show();
				$('#pqty,#uslt').html('&nbsp;');
			}
		}
	});


	function findMaterial(code){	//由材料編號查詢材料內容
		var index = materials.findIndex((m) => m.code === code);
		return (index !== -1)? materials[index] : undefined;
	}

	function clearTable(){		//清除所顯示之材料表
		$('.wraper .slt').html('&nbsp;');
		$('#pqty,#uslt,#errMessage').html('&nbsp;');
	}

	function fillMaterial(prd){		//顯示裝備物品之材料表，並記錄所需之材料
		var tpls = $('.wrapper .item');
		var index = 0;

		readyToSave = false;
		$('.sbtn').hide();
		$('.wrapper .mat').attr('src','images/pic/blank.gif');
		$('.wrapper .qty, .wrapper .name, .wrapper .slt').html('&nbsp;');

		prd.mts.forEach(function(value, key){
			let tpl = tpls.eq(index++);
			let mt = value.m;
			tpl.find('img')
				.attr('src','images/pic/' + mt.code + '.gif')
				.data('code', mt.code)
				.mousedown(function(e){
					$('#mt_match').val($(this).data('code'));
					if(e.which == 1)			// 左鍵
						$('.plus_btn').click();
					if(e.which == 3)			// 右鍵
						$('.minus_btn').click();
				})
				.contextmenu(function(){return false;});
			tpl.find('.qty').html(value.qty);
			tpl.find('.name').html('(' + mt.set + ')<br>' + mt.name);
		});
	}

	function setProduct(){
		var type = $('#type').val();
		product = new Product(type, recipe[type][$('#product').val()]);		// Product Object
		var src ='images/pic/' + type + '/' + product.code + '.gif';

		$('#n_prd img').attr('src', src);
		// $('#n_prd .name').html(product.name);
		if(type == 'wp08')
			$('#n_prd .qty').html(product.pcs);
		fillMaterial(product);
	}

	function genEqpList(type){
		let products = recipe[type];
		let prd_sel = $('#product');
		prd_sel.removeOption(/./);	//清除裝備項目清單
		products.forEach(function(rcp, index){
			prd_sel.addOption(index, ('Lv.' + rcp.level + ' ' + rcp.name));
		});
		$('#n_prd').find('.qty').html('&nbsp;');

		prd_sel
			.val(0)
			.find('option')
			.each(function(){
				let txt = $.trim($(this).text().substring(3, 5));
				let lv = parseInt(txt, 10);
				if((lv % 2) != 0)
					$(this).addClass('even');
			});
		setProduct();
	}
	
});
