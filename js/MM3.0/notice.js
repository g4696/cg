var noticeBoard = {
	orderItems : {},

	init : function(){
		var result = localStorage.getItem('n_orderItems');
		if(result !== null){
			noticeBoard.orderItems = JSON.parse(result);
			noticeBoard.show();
		}
		else{
			noticeBoard.orderItems.idSeed = 0;
			noticeBoard.orderItems.items = [];
		}		
	},
	save : function(item){
		var ois = noticeBoard.orderItems,
			marked = ['u','u','u','u','u'];
		
		item.m = marked;
		ois.items.push(item);
		noticeBoard.update(ois);
		noticeBoard.showNotice(item, 0);
	},
	delete : function(id, div){
		var orderItems = noticeBoard.orderItems,
			items = orderItems.items,
			index = noticeBoard.getIndex(id);
		if(index != -1){
			items.splice(index,1);
			div.fadeOut(1000, function() {
				this.remove();
			});
			noticeBoard.update(orderItems);
		}
	},
	update : function(ois){
		localStorage.setItem('n_orderItems', JSON.stringify(ois));
	},
	mark : function(div){
		var panel = $(div),
			m_index = panel.data('m'),
			notice = panel.closest('.notice'),
			noticeId = parseInt(notice.find('.close').data('nid'), 10),
			orderItems = noticeBoard.orderItems,
			items = orderItems.items,
			item_index = noticeBoard.getIndex(noticeId),
			marked;
		if(item_index != -1){
			marked = items[item_index].m[m_index];
			if(marked==='m'){
				marked = 'u';
				panel.css('text-decoration', 'none');
			}
			else{
				marked = 'm';
				panel.css('text-decoration', 'line-through');
			}
			items[item_index].m[m_index] = marked;

			noticeBoard.update(orderItems);
			// localStorage.setItem('orderItems', JSON.stringify(orderItems));
		};
	},
	getIndex : function(id){
		var orderItems = noticeBoard.orderItems,
			items = orderItems.items,
			index = -1;
		for(var i=0;i<items.length;i++){
			if(id == items[i].id)
				index = i;
		}
		return index;
	},
	showNotice : function(item, i){
		var notice = $('#noticeTemplate').clone(true),
			delay = 600,
			panels = [];

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
			.delay(delay*i)
			.fadeIn(delay);

		panels = notice.find('.mt-item');
		$.each(panels, function(index,panel){
			var mt = item.mts[index];
			$(panel)
				.html(function(){
					if(mt.code !== ''){
						return '<img src="images/pic/'+ mt.code + '.gif">' + mt.text;
					}
					else{
						return mt.text;
					}
				}())
				.data('m', index);
			if(item.m[index] == 'm')
				$(panel).addClass('marked');
			if(/w[0-9]/.test(mt.code))
				$(panel).addClass('wood');
			if(/m[0-9]/.test(mt.code))
				$(panel).addClass('mineral');
			if(/c[0-9]/.test(mt.code))
				$(panel).addClass('cloth');
			if(/f[0-9]/.test(mt.code))
				$(panel).addClass('flower');
			if(/g[0-9]/.test(mt.code))
				$(panel).addClass('food');
			if(/s[0-9]/.test(mt.code))
				$(panel).addClass('special');
		});
	},
	show : function(){
		var result = localStorage.getItem('n_orderItems'),
			orderItems = JSON.parse(result),
			items = orderItems.items;

		$('#noticeBoard').html('');
		for(var i=0;i<items.length;i++){
			noticeBoard.showNotice(items[i], i);
		}
	}
};