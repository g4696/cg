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
	{val:'sp01' ,name:'飾品'},
	{val:'pa01' ,name:'寵物服裝'},
	{val:'pa02' ,name:'寵物裝甲'},
	{val:'pa03' ,name:'寵物項圈'},
	{val:'pa04' ,name:'寵物晶石'},
	{val:'pa05' ,name:'寵物飾品'}
];
var product;
var useMts = [];
var readyToSave = false,
	orderItem;

$(function(){
	$('#prd_match').addOption('all', '所有裝備');
	for(var i=0;i<types.length;i++){		//產生裝備種類選項清單
		$('#type,#prd_match').addOption(types[i].val, types[i].name);
	}
	$('#prd_match').val('all');

	var mt_match = $('#mt_match');
	var option;
	for(var i=0;i<materials.length;i++){
		mt_match.addOption(materials[i].code, materials[i].name);
		option = mt_match.find('option:last');

		if(/w[0-9]/.test(materials[i].code))
			option.addClass('wood');
		if(/m[0-9]/.test(materials[i].code))
			option.addClass('mineral');
		if(/c[0-9]/.test(materials[i].code))
			option.addClass('cloth');
		if(/f[0-9]/.test(materials[i].code))
			option.addClass('flower');
		if(/g[0-9]/.test(materials[i].code))
			option.addClass('food');
		if(/s[0-9]/.test(materials[i].code))
			option.addClass('special');
	}
	mt_match.val('m101');
	
	$('#mt_match').val('m101');
	$('.plus_list').data('mt_list', []);
	$('.minus_list').data('mt_list', []);
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

	noticeBoard.init();					//0308
	
	$('#type').change(function(){		//由裝備種類選項產生裝備項目清單
		//var index = $(this)[0].selectedIndex;
		var index = $(this).selectedOptions().first().index();
		var tc;
		clearTable();
		useMts = [];
		
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

	$('.sbtn').click(function(){
		if(readyToSave)
			noticeBoard.save(orderItem);
	});

	$('.plus_btn').click(function(){		// 正向表列加入清單
		var mt = findMaterial($('#mt_match').val());
		var mt_plist = $('.plus_list').data('mt_list');
		var mt_mlist = $('.minus_list').data('mt_list');
		var dunplicate = false;
		for(var i=0;i<mt_plist.length;i++){
			if(mt_plist[i].code == mt.code)
				dunplicate = true;
		}
		for(var i=0;i<mt_mlist.length;i++){
			if(mt_mlist[i].code == mt.code)
				dunplicate = true;
		}
		if(!dunplicate && (mt_plist.length < 5)){
			mt_plist.push(mt);
			$('.plus_list').data('mt_list', mt_plist);
			$('.plus_list').append('<span class="p_list_item">' + mt.name + '</sapn>');
		}
	});
	$('.minus_btn').click(function(){		// 負向表列加入清單
		var mt = findMaterial($('#mt_match').val());
		var mt_plist = $('.plus_list').data('mt_list');
		var mt_mlist = $('.minus_list').data('mt_list');
		var dunplicate = false;
		for(var i=0;i<mt_plist.length;i++){
			if(mt_plist[i].code == mt.code)
				dunplicate = true;
		}
		for(var i=0;i<mt_mlist.length;i++){
			if(mt_mlist[i].code == mt.code)
				dunplicate = true;
		}
		if(!dunplicate && (mt_mlist.length < 5)){
			mt_mlist.push(mt);
			$('.minus_list').data('mt_list', mt_mlist);
			$('.minus_list').append('<span class="m_list_item">' + mt.name + '</sapn>');
		}
	});

	$('.plus_list').on('click', 'span', function(){
		var mt_plist = $('.plus_list').data('mt_list');
		var selected_mt = $(this).text();
		var new_list = [];
		for(var i=0;i<mt_plist.length;i++){
			if(mt_plist[i].name != selected_mt)
				new_list.push(mt_plist[i]);
		}
		$('.plus_list').data('mt_list', new_list);

		$(this).remove();
	});

	$('.minus_list').on('click', 'span', function(){
		var mt_mlist = $('.minus_list').data('mt_list');
		var selected_mt = $(this).text();
		var new_list = [];
		for(var i=0;i<mt_mlist.length;i++){
			if(mt_mlist[i].name != selected_mt)
				new_list.push(mt_mlist[i]);
		}
		$('.minus_list').data('mt_list', new_list);

		$(this).remove();
	});

	$('.mbtn').click(function(){
		// 
		var type = $('#prd_match').val();
		var mt = $('#mt_match').val();
		var mt_plist = $('.plus_list').data('mt_list');
		var mt_mlist = $('.minus_list').data('mt_list');
		var count = 0;
		var first_val = '';
		var plus_compare = true;
		var minus_compare = false;
		var prd, _type, compare_result;
		$('.match, .nomatch').hide();
		$('#match_list').removeOption(/./);	//清除裝備項目清單
		if(type == 'all'){
			for(var i=0;i<types.length;i++){
				_type = types[i].val;
				for(var j=0;j<recipe[_type].length;j++){
					prd = recipe[_type][j];
					plus_compare = true;
					minus_compare = false;
					for(var pl=0; pl<mt_plist.length; pl++){
						plus_compare &= containsMaterial(prd, mt_plist[pl].code);
					}
					for(var ml=0;ml<mt_mlist.length;ml++){
						minus_compare |= containsMaterial(prd, mt_mlist[ml].code);
					}
					compare_result = (!minus_compare) && plus_compare;
					if(compare_result){
						$('#match_list').addOption((_type+'_'+j), ('Lv.' + prd.level + ' ' + prd.name));
						if(first_val == '')
								first_val = (_type+'_'+j);
						count++;
					}
				}
			}
		}
		else{
			for(var j=0;j<recipe[type].length;j++){
				prd = recipe[type][j];
				plus_compare = true;
				minus_compare = false;
				for(var pl=0; pl<mt_plist.length; pl++){
					plus_compare &= containsMaterial(prd, mt_plist[pl].code);
				}
				for(var ml=0;ml<mt_mlist.length;ml++){
					minus_compare |= containsMaterial(prd, mt_mlist[ml].code);
				}
				compare_result = (!minus_compare) && plus_compare;
				if(compare_result){
					$('#match_list').addOption((type+'_'+j), ('Lv.' + prd.level + ' ' + prd.name));
					if(first_val == '')
							first_val = (type+'_'+j);
					count++;
				}
			}
		}
		if(count > 0){
			$('.match .count').html('總共找到 ' + count + ' 種裝備。')
			$('.match').show();
			$('#match_list').val(first_val).change();
		}
		else
			$('.nomatch').html('找不到合適的裝備！！').show();
	});
	$('#match_list').change(function(){
		var type = $(this).val().split('_')[0];
		var index = $(this).val().split('_')[1];
		$('#type').val(type);
		genEqpList(type);
		$('#product').val(index).change();
	});
	$('#match_list').click(function(){
		$(this).change();
	});

	$('.close').on('click', function(){
		var noticeId = parseInt($(this).data('nid'), 10)
			div = $(this).closest('div');
		noticeBoard.delete(noticeId, div);
	});

	$('#noticeBoard').on('click', '.mt-item', function(){
		noticeBoard.mark(this);
	});
	
	$('#calc').click(function(){
		var useSlots = 0;	//總共所需空格數量
		var result = '';
		var j;
		var str, idstr;
		var dt = new Date();
		var items;	//單一材料數量
		var type = $('#type').val();
		var method = $('input[name=method]:checked').val();		//讀取使用者所需之計算方式
		// method1 : 依使用者填入之空格數量計算出可生產之物品數量
		// method2 : 依使用者填入之生產物品數量計算出所需之空格數量

		orderItem = {
			id: noticeBoard.orderItems.idSeed++,
			qty: 0,
			product: product.name,				//0308 記錄產品名稱
			mts: [],
			code: product.code,					//0825 記錄產品代碼
			type: type							//0825 記錄產品種類
		};
		readyToSave = false;
		$('.sbtn').hide();
		
		if(method == 'method1'){
			var count = 0;	//可生產物品數量
			var slots = parseInt($('#slots').val());	//空格數量

			if(useMts.length <= slots){
				while(useSlots <= slots){
					count++;
					useSlots = 0;
					for(var i=0;i<useMts.length;i++){
						useSlots += Math.ceil((product['qty'+(i+1)]*count) / useMts[i].set);
					}
				}
				count--;
				useSlots = 0;
				
				for(var i=0;i<5;i++){
					j = i + 1;
					if(i < useMts.length){
						items = product['qty'+j] * count;
						str = new String(Math.floor(items / useMts[i].set)).fontcolor('blue') + ' ' + useMts[i].unit;

						if((items % useMts[i].set) != 0){
							str += '又 ' + new String(items % useMts[i].set).fontcolor('blue') + ' 個';
						}

						useSlots += Math.ceil(items / useMts[i].set);
						
						$('#slt'+j).html(str);	//0828 顯示欄位異動
						orderItem.mts.push({
							code: useMts[i].code,
							text: useMts[i].name + ' ' + str
						});	//0825 記錄使用材料與組數
					}
					else{
						$('#slt'+j).html('&nbsp;');	//0828 顯示欄位異動
						orderItem.mts.push({
							code: '',
							text: '&nbsp;'
						});	//0825 記錄empty
					}
				}
				if(type == 'wp08'){		// 炸彈
					str = new String(count).fontcolor('red') + ' 次 / 共 ';
					str += new String(count * product.pcs).fontcolor('blue') + ' 個 ';
					orderItem.qty = (count * product.pcs);	//0308 記錄生產數量(炸彈)
				}
				else{
					str = new String(count).fontcolor('red') + ' 個 ';
					orderItem.qty = count;					//0308  記錄生產數量
				}
				
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
			var qty = parseInt($('#slots').val());

			if(type == 'wp08'){
				qty = Math.ceil(qty / product.pcs);
			}

			orderItem.qty = qty;				//0308  記錄生產數量

			for(var i=0;i<5;i++){
				j = i+1;
				if(i < useMts.length){
					items = product['qty'+j] * qty;
					useSlots += Math.ceil(items / useMts[i].set);
					
					str = new String(Math.floor(items / useMts[i].set)).fontcolor('blue') + ' ' + useMts[i].unit;
					if((items % useMts[i].set) != 0)
						str += '又 ' + new String(items % useMts[i].set).fontcolor('blue') + ' 個';
					
					$('#slt'+j).html(str);	//0828 顯示欄位異動
					orderItem.mts.push({
						code: useMts[i].code,
						text: useMts[i].name + ' ' + str
					});	//0825 記錄使用材料與組數
				}
				else{
					$('#slt'+j).html('&nbsp;');	//0828 顯示欄位異動
					orderItem.mts.push({
						code: '',
						text: '&nbsp;'
					});	//0825 記錄empty
				}
			}
			
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
	
});

function findMaterial(code){	//由材料編號查詢材料內容
	var m;
	for(var i=0;i<materials.length;i++)
		if(materials[i].code == code){
			m = materials[i];
			break;
		}
	return m;
}

function clearTable(){		//清除所顯示之材料表
	for(var i=1;i<=5;i++){
		$('#slt'+i).html('&nbsp;');
	}
	$('#pqty,#uslt,#errMessage').html('&nbsp;');
}

function fillMaterial(product){		//顯示裝備物品之材料表，並記錄所需之材料
	var mt, tpl;
	
	for(var i=1;i<=5;i++){
		mt = findMaterial(product['mt'+i]);	//由材料編號查詢對應的材料
		tpl = $('#n_mt'+i);
		if(mt){
			tpl.find('img')
				.attr('src','images/pic/' + mt.code + '.gif')
				.data('code', mt.code)
				.mousedown(function(e){
					$('#mt_match').val($(this).data('code'));
					if(e.which == 1)
						$('.plus_btn').click();
					if(e.which == 3)
						$('.minus_btn').click();
				})
				.contextmenu(function(){return false;});
			tpl.find('.qty').html(product['qty'+i]);
			tpl.find('.name').html('(' + mt.set + ')<br>' + mt.name);

			useMts.push(mt);
		}
		else{
			tpl.find('img').attr('src','images/pic/blank.gif');
			tpl.find('.qty').html('&nbsp;');
			tpl.find('.name').html('&nbsp;');
		}
	}
}

function containsMaterial(product, mt_code){
	for(var i=1;i<=5;i++){
		if(product['mt'+i] == mt_code)
			return true;
	}
	return false;
}

function setProduct(){
	var type = $('#type').val();
	useMts = [];
	product = recipe[type][$('#product').val()];
	var src ='images/pic/' + type + '/' + product.code + '.gif';

	$('#n_prd').find('img').attr('src', src);
	$('#n_prd').find('.name').html(product.name);
	if(type == 'wp08')
		$('#n_prd').find('.qty').html(product.pcs);
	fillMaterial(product);
}

function genEqpList(type){
	var products = recipe[type];
	
	$('#product').removeOption(/./);	//清除裝備項目清單
	for(var i=0;i<products.length;i++){	//產生裝備項目清單
		$('#product').addOption(i, ('Lv.' + products[i].level + ' ' + products[i].name));
	}
	$('#n_prd').find('.qty').html('&nbsp;');

	$('#product')
		.val(0)
		.find('option')
		.each(function(){
			var lv = 0;
			var txt = $.trim($(this).text().substring(3, 5));
			lv = parseInt(txt);
			if((lv % 2) != 0){
				$(this).css({
					'background-color':'#333',
					'color':'#FFFF33'
				});
			}
		})
		.css('border', 'dashed 1px #808080');
	setProduct();
}
