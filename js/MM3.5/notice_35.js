// 'use strict';

var noticeBoard = (function(){
	var orderItems = [];
	const STORAGE_KEY = 'n5_orderItems';

	this.init = function(){
		var result = localStorage.getItem(STORAGE_KEY);
		if(result !== null){
			orderItems = JSON.parse(result).items;		// unpack
			show();
		}
	};
	this.save = function(item){
		// let marked = ['u','u','u','u','u'];
		
		// item.m = marked;
		item.m = Array(item.mts.length).fill('u');
		orderItems.push(item);
		update();
		showNotice(item, 0);
	};
	this.delete = function(id, div){
		let index = getIndex(id);
		if(index != -1){
			orderItems.splice(index,1);
			div.fadeOut(1000, function() {
				this.remove();
			});
			update();
		}
	};
	this.mark = function(div){
		let panel = $(div),
			m_index = parseInt(panel.data('m'), 10),
			notice = panel.closest('.notice'),
			noticeId = parseInt(notice.find('.close').data('nid'), 10),
			item_index = getIndex(noticeId);

		if(item_index != -1){
			let marked = orderItems[item_index].m[m_index];
			orderItems[item_index].m[m_index] = (marked === 'm')? 'u' : 'm';
			panel.toggleClass('marked');
			update();
		};
	};
	this.genOrderItem = function(type, product){		// 產生新的 orderItem 物件
		// readyToSave = false;
		return {
			id: getNewId(),				// orderId
			qty: 0,								// 生產數量
			product: product.name,				//0308 記錄產品名稱
			mts: [],							// 使用材料,[{code,text},{code,text}]
			code: product.code,					//0825 記錄產品代碼
			type: type							//0825 記錄產品種類
		};
	};
	function getNewId(){			// 產生新的 id 編號
		var last_id = 0;
		if(orderItems.length > 0){
			orderItems.forEach(function(item){
				last_id = Math.max(last_id, item.id);
			});
		}
		return (orderItems.length < 1) ? 0 : (last_id + 1);
	}
	function getIndex(id){		// 取得在 orderItems 陣列裡的位址
		return orderItems.findIndex((item) => item.id === id);
	}
	function update(){
		localStorage.setItem(STORAGE_KEY,
			JSON.stringify({
				items : orderItems		// pack
			}));
	}
	function showNotice (item, n){
		var notice = $('#noticeTemplate').clone(true),		// close event
			delay = 600,
			panels;

		notice
			.removeClass('template')
			.removeAttr('id')
			.find('.close')
				.data('nid', item.id)
			.end()
			.find('h3')
				.html('<img src="images/pic/'+item.type+'/'+item.code+'.gif">'+item.product + (' X ' + item.qty).fontcolor('#822'))
			.end()
			.hide()
			.appendTo('#noticeBoard')
			.delay(delay * n)
			.fadeIn(delay);

		panels = notice.find('.mt-item');

		item.mts.forEach(function(mt,index){
			let panel = panels.eq(index);
			panel
				.html('<img src="images/pic/'+ mt.code + '.gif">' + mt.text)
				.data('m', index)
				.click(function(i,div){
					noticeBoard.mark(div);
				});
			if(item.m[index] == 'm')
				panel.addClass('marked');

			if(/w[0-9]/.test(mt.code))
				panel.addClass('wood');
			if(/m[0-9]/.test(mt.code))
				panel.addClass('mineral');
			if(/c[0-9]/.test(mt.code))
				panel.addClass('cloth');
			if(/f[0-9]/.test(mt.code))
				panel.addClass('flower');
			if(/g[0-9]/.test(mt.code))
				panel.addClass('food');
			if(/s[0-9]/.test(mt.code))
				panel.addClass('special');
		});
	}
	function show(){
		var result = localStorage.getItem(STORAGE_KEY),
		orderItems = JSON.parse(result).items;		// unpack
		
		$('#noticeBoard').empty();
		orderItems.forEach(function(item,index){
			showNotice(item, index);
		});
	}

	return this;
})();