	var p, m, chart;

	$(function() {
		var selTrp = $('#trp'),
			trp = params.trp,
			selectedTrp;
		p = {
				lv: 1,
				kind: 'H',
				attrs: [0,0,0,0],
				atk: 0,
				mnd: 0,
				matk: 0,
				skill: 0,
				skill_plv: 1,
				atkType: 'physic',
				kindWeapon: '',
				hasKindWeapon: false,
				hasCritical: false
			};

		initUI();
		chart = initChart();
		
		$.each(trp, function(i, item){
			selTrp.append('<option value="'+item.id+'">'+item.name+'</option>');
		});

		selTrp
			.val(0)
			.css({
				width:'250px',
				color:'#2f2',
				'border-color':'#cfc'
			})
			.change(function() {
				var monsters = [],
					m_names = [];
				selectedTrp = trp[this.value];
				$.each(selectedTrp.monId, function(index, monId){
					m = Monster.generate(monId, selectedTrp.lv_low, 'std');
					monsters.push(m);
					m_names.push(m.name);
				});

				$('#m_lv_span').show();
				$('#m_lv option').remove();

				for(var i=selectedTrp.lv_low; i<=selectedTrp.lv_high; i++){
					$('#m_lv').append('<option value="'+i+'">'+i+'</option>');
				}

				showM(selectedTrp.monId, selectedTrp.lv_low);

				chart.setTitle({
					text: selectedTrp.name,
					style: {
						'font-size' : '16px',
						'color' : '#a22',
					}
				},{
					// text: m_names.join(' , ') + '<br> Lv:' + selectedTrp.lv_low + ' ~ ' + selectedTrp.lv_high,
					color: '#080'
				}, true);

				
				$('#monStatus').show();
			})
			.find('option')
			.css('width','200px');

		$('#m_lv').change(function(event) {
			showM(selectedTrp.monId, this.value);
		});

		$('#calc_p').click(function(){
			var atk = 0, mnd = 0,
				rangeData = [],
				hurtData = []
				result = {},
				xTitle = '';

			getAttackerParam();

			while (chart.series.length != 0) {
				chart.series[0].remove();
			}

			// console.log(p);
			
			if(p.atkType == 'physic'){
				for(atk=0; atk<=1500 ; atk+=5){
					p.atk = atk;
					result = HurtCalc.phyHurt(p, m);
					rangeData.push([atk, result.lowerHurt, result.upperHurt]);
					hurtData.push([atk, result.hurt]);
				}
				xTitle = '攻擊力';
			}
			
			if(p.atkType == 'magic'){
				for(mnd=0; mnd<=800 ; mnd+=2){
					p.mnd = mnd;
					result = HurtCalc.magHurt(p, m);
					rangeData.push([mnd, result.lowerHurt, result.upperHurt]);
					hurtData.push([mnd, result.hurt]);
				}
				xTitle = '精神 , 魔攻(@' + p.matk + ')';
			}

			// console.log(result);

			hurtSeries = {
				name: '對Lv' + m.lv + '級' + m.name + '平均傷害',
				type: 'line',
				data: hurtData,
				color: Highcharts.getOptions().colors[0],
				zIndex: 1
			};

			rangeSeries = {
				name: '對Lv' + m.lv + '級' + m.name + '的傷害值範圍',
				type: 'arearange',
				data: rangeData,
				linkedTo: ':previous',
				color: Highcharts.getOptions().colors[0],
				fillOpacity: 0.3,
				lineWidth: 0,
				zIndex: 0
			};
			chart.yAxis[0].removePlotLine('mhp0');
			chart.yAxis[0].removePlotLine('mhp1');
			chart.yAxis[0].removePlotLine('mhp2');
			chart.xAxis[0].setTitle({
				text: xTitle
			});
			chart.yAxis[0].addPlotLine({
				color: 'rgba(240,0,0,0.5)',
				value: (m.hp / 4),
				label: {
					text: '25% HP',
					textAlign: 'left'
				},
				width: 2,
				id: 'mhp0',
				dashStyle: 'Dash'
			});
			chart.yAxis[0].addPlotLine({
				color: 'rgba(240,0,0,0.5)',
				value: (m.hp / 2),
				label: {
					text: '50% HP',
					textAlign: 'left'
				},
				width: 2,
				id: 'mhp1',
				dashStyle: 'Dash'
			});
			chart.yAxis[0].addPlotLine({
				color: 'rgba(240,0,0,0.5)',
				value: m.hp,
				label: {
					text: '100% HP',
					textAlign: 'left'
				},
				width: 2,
				id: 'mhp2',
				dashStyle: 'Dash'
			});
			chart.addSeries(hurtSeries);
			chart.addSeries(rangeSeries);
			chart.redraw();
		});

		$('#skill_p').change(function() {
			var index = this.selectedIndex;
			p.skill = index;
			if(index > 4)
				$('#skill_plv').show().val(1);
			else
				$('#skill_plv').hide();
		});

		$('#skill_m').change(function() {
			var index = this.selectedIndex,
				colorClass = ['earth', 'water', 'fire', 'wind'];
			p.skill = index;
			$(this).removeClass();
			if(index < 12){
				$(this).addClass(colorClass[index % 4]);
				$('#shkArea').hide();
			}
			else{
				$('#atkNum').val(1);
				$('#shkArea').show();
				p.atkNum = 1;
			}
		});

		$('#skill_plv').change(function() {
			var index = this.selectedIndex;
			p.skill_lv = index;
		});

		$('#kind_p').change(function() {
			var val = $(this).val();
			p.kindWeapon = val;
		});

		$('#critical :radio').change(function() {
			p.hasCritical = (this.value == 1);		// 物理攻擊的必殺
		});

		$('#attackType :radio').click(function(e) {
			var val = this.value;
			e.preventDefault();
			if(val == 1){
				p.atkType = 'physic';
				$('#phy').show();
				$('#mag').hide();
			}
			else{
				p.atkType = 'magic';
				$('#phy').hide();
				$('#mag').show();
			}
		});

		$('#weapon_p :radio').click(function(e) {
			var val = this.value;
			e.preventDefault();
			if(val == 1){
				p.hasKindWeapon = false;
				$('#kpArea').hide();
			}
			else{
				p.hasKindWeapon = true;
				$('#kpArea').show();
				$('#kind_p').val('H');
				p.kind_p = 'H';
			}
		});

		$('#weapon_m :radio').click(function(e) {
			var val = this.value;
			e.preventDefault();
			if(val == 1){
				p.hasKindWeapon = false;
				$('#kmArea').hide();
			}
			else{
				p.hasKindWeapon = true;
				$('#kmArea').show();
				$('#kind_m').val('H');
				p.kind_m = 'H';
			}
		});

		$('#monTemplate').click(function(event) {
			m = Monster.generate($(this).data('monId'), $('#m_lv').val(), 'std');

			$('#monStatus .panel').removeClass('selectedMonster');
			$(this).addClass('selectedMonster');
			if($(this).hasClass('selectedMonster'))
				$('#calc_p').show();
			
		});
	});

	function initUI(){
		$('input[id^=attr_A]').spinner({
			max : 10,
			min : 0
		}).css('width','30px');
		$('#atk').spinner({
			max : 10000,
			min : 0
		}).css('width','100px');
		$('#mnd').spinner({
			max : 1000,
			min : 0
		}).css('width','100px');
		$('#matk').spinner({
			max : 500,
			min : 0
		}).css('width','100px');
		$('#lv').spinner({
			max : 165,
			min : 1
		}).css('width','100px');
		$('#weapon_p').buttonset();
		$('#weapon_m').buttonset();
		$('#attacker').buttonset();
		$('#attackType').buttonset();
		$('#critical').buttonset();
		// $('#critical_s').buttonset();
		$('#calc_p').button().hide();

		// $('#phy').hide();
		$('#mag').hide();
		// $('#kind_p').hide();
		// $('#kind_m').hide();
		$('#skill_p').val(0);
		$('#skill_plv').val(1);
		$('#kind_A').val('H');
		$('#skill_m').val(0);
		$('#skill_mlv').val(1);
		// $('#monStatus').hide();
	}

	function initChart(){
		var ch;
		$('#chart').highcharts({
			chart: {
				type: 'line',
				borderWidth: 2,
				borderColor: '#88a'
			},
			title: {
				// floating: true,
				// y: 20,
				text: ''
			},
			xAxis: {
				title: {
					text: ''
				},
				labels: {
					overflow: 'justify'
				},
				min: 0,
				gridLineWidth: 1
			},
			yAxis: {
				title: {
					text: '傷害值',
					style:{
						fontSize: '12px',
						color: '#2D2',
						fontFamily: 'Tahoma'
					}
				},
				min: 0,
				minorGridLineWidth: 0,
				gridLineWidth: 1,
				alternateGridColor: null
			},
			tooltip: {
				crosshairs: true,
				shared: true
			},
			plotOptions: {
				line: {
					lineWidth: 2,
					states: {
						hover: {
							lineWidth: 3
						}
					},
					marker: {
						enabled: false
					},
					pointStart: 0
				}
			}
		});
		ch = $('#chart').highcharts();
		ch.xAxis[0].addPlotLine({
			color: 'rgba(128,0,0,0.5)',
			value: 240,
			width: 2,
			dashStyle: 'Dash'
		});

		return ch;
	}

	function getAttackerParam(){
		
		p.atk = 0;
		p.lv = parseInt($('#lv').val(), 10);
		p.kind = $('#kind_A').val();
		p.attrs[0] = parseInt($('#attr_A1').val(), 10);
		p.attrs[1] = parseInt($('#attr_A2').val(), 10);
		p.attrs[2] = parseInt($('#attr_A3').val(), 10);
		p.attrs[3] = parseInt($('#attr_A4').val(), 10);
		
		if(p.atkType == 'physic'){		// 物理攻擊
			p.skill = parseInt($('#skill_p').val(), 10);
			p.skill_lv = parseInt($('#skill_plv').val(), 10);
			p.kindWeapon = $('#kind_p').val();
		}
		if(p.atkType == 'magic'){
			// p.mnd = parseInt($('#mnd').val(), 10);
			p.matk = parseInt($('#matk').val(), 10);
			p.kindWeapon = $('#kind_m').val();
			p.skill = parseInt($('#skill_m').val(), 10);
			p.skill_lv = parseInt($('#skill_mlv').val(), 10);
			p.atkNum = parseInt($('#atkNum').val(), 10);
		}
	}

	function showM(monId, lv){
		var panel, i=0, 
			mA, mB;
		$('#monStatus').children().remove();

		for(i=0 ; i<monId.length ; i++){
			panel = $('#monTemplate').clone(true).removeProp('id');
			panel.data('monId', monId[i]);
			mA = Monster.generate(monId[i], lv, 'max');
			mB = Monster.generate(monId[i], lv, 'min');

			panel.find('.m_name').text(mA.name);
			panel.find('.m_lv').text(lv);
			panel.find('.m_kind').text(mA.kn.ch + '系');
			panel.find('.m_attr1').text('地 : ' + mA.attrs[0]);
			panel.find('.m_attr2').text('水 : ' + mA.attrs[1]);
			panel.find('.m_attr3').text('火 : ' + mA.attrs[2]);
			panel.find('.m_attr4').text('風 : ' + mA.attrs[3]);
			panel.find('.m_hp').text('血量 : ' + mB.hp + ' ~ ' + mA.hp);
			panel.find('.m_def').text('防禦 : ' + mB.def + ' ~ ' + mA.def);
			panel.find('.m_mnd').text('精神 : ' + mB.mnd + ' ~ ' + mA.mnd);
			panel.appendTo('#monStatus');
		}
		
	}