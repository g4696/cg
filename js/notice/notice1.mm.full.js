    var types = [               //裝備種類選項
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
        {val:'fd01' ,name:'料理'}
    ];
    var product;
    var useMts = [];
    var readyToSave = false,
        orderItem;
    
    $(function(){
        for(var i=0;i<types.length;i++)     //產生裝備種類選項清單
            $('#type').addOption(types[i].val, types[i].name);
        
        $('#resultTable1')
            .add('#resultTable2')
            .find('div')
            .css('font-family', 'Verdana');
        
        $('#type')
            .val('wp01')
            .find('option')
                .slice(0,8)
                    .css('background-color', '#708090')
                .end()
                .slice(8,16)
                    .css('background-color', '#80A0C0')
                .end()
                .slice(16,18)
                    .css('background-color', '#90C0F0');

        genEqpList($('#type').val());       //產生裝備項目清單

        noticeBoard.init();                 //0308
        
        $('#type').change(function(){       //由裝備種類選項產生裝備項目清單
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
            $('#result').html('');
            genEqpList($(this).val());
        });
        
        $('#product').change(function(){    //由使用者選擇的裝備顯示出所需材料
            clearTable();
            setProduct();
            $('#resultTable1')              //清除前次所顯示的計算結果
                .add('#resultTable2')
                .add('#errMessage')
                .hide();
        });
        
        $('#slots').keydown(function(event){ //輸入完數量後，按下Enter視為按下計算按鈕
            if(event.which == 13)           //Enter
                $('#calc').click();
        });

        $('.sbtn').click(function(){
            if(readyToSave){
                noticeBoard.save(orderItem);
            }
            else
                console.log('Not Ready To Save...');
        })

        $('.close').on('click', function(){
            var noticeId = parseInt($(this).data('nid'), 10)
                div = $(this).closest('div');
            noticeBoard.delete(noticeId, div);
        });

        $('#noticeBoard').on('click', '.mt-item', function(){
            noticeBoard.mark(this);
        });
        
        $('#calc').click(function(){
            var useSlots = 0;   //總共所需空格數量
            var result = '';
            var j;
            var str, idstr;
            var dt = new Date();
            var items;  //單一材料數量
            var type = $('#type').val();
            var method = $('input[name=method]:checked').val();     //讀取使用者所需之計算方式
            // method1 : 依使用者填入之空格數量計算出可生產之物品數量
            // method2 : 依使用者填入之生產物品數量計算出所需之空格數量
            $('#resultTable1, #resultTable2, #errMessage').hide();  //清除前次所顯示的計算結果

            orderItem = {
                id: noticeBoard.orderItems.idSeed++,
                qty: 0,
                product: product.name,              //0308 記錄產品名稱
                mts:[]
            };
            readyToSave = false;
            
            if(method == 'method1'){
                var count = 0;  //可生產物品數量
                var slots = parseInt($('#slots').val());    //空格數量

                if(useMts.length <= slots){
                    while(useSlots <= slots){
                        count++;
                        useSlots = 0;
                        for(var i=0;i<useMts.length;i++){
                            useSlots += Math.ceil((product['qty'+(i+1)]*count) / useMts[i].set);
                        }
                    }
                    count--;
                    
                    $('#pname1').html(product.name);
                    
                    for(var i=0;i<5;i++){
                        j = i + 1;
                        if(i < useMts.length){
                            items = product['qty'+j] * count;
                            str = new String(Math.floor(items / useMts[i].set)).fontcolor('blue') + ' 組';
                            if((items % useMts[i].set) != 0)
                                str += '又 ' + new String(items % useMts[i].set).fontcolor('blue') + ' 個';
                            
                            $('#p1mt'+j).html(useMts[i].name);
                            $('#p1slt'+j).html(str);
                            orderItem.mts.push(useMts[i].name + ' ' + str); //0308 記錄使用材料與組數
                        }
                        else{
                            $('#p1mt'+j).html('&nbsp;');
                            $('#p1slt'+j).html('&nbsp;');
                            orderItem.mts.push('&nbsp;');   //0308 empty
                        }
                    }
                    if(type == 'wp08'){     // 炸彈
                        str = new String(count).fontcolor('red') + ' 次 / 共 ';
                        str += new String(count * product.pcs).fontcolor('blue') + ' 個 ';
                        orderItem.qty = (count * product.pcs);  //0308 記錄生產數量(炸彈)
                    }
                    else{
                        str = new String(count).fontcolor('red') + ' 個 ';
                        orderItem.qty = count;                  //0308  記錄生產數量
                    }
                    
                    $('#pqty1').html(str);
                    $('#resultTable1').show();
                    readyToSave = true;
                }
                else{
                    $('#errMessage').html('可使用格數不足！！').show();
                }
            }
            else{
                var qty = parseInt($('#slots').val());

                if(type == 'wp08'){
                    qty = Math.floor(qty / product.pcs);
                }

                orderItem.qty = qty;                //0308  記錄生產數量

                $('#pname2').html(product.name);
                $('#pqty2').html(new String(qty).fontcolor('red'));
                
                for(var i=0;i<5;i++){
                    j = i+1;
                    if(i < useMts.length){
                        items = product['qty'+j] * qty;
                        useSlots += Math.ceil(items / useMts[i].set);
                        
                        $('#p2mt'+j).html(useMts[i].name);
                        
                        str = new String(Math.floor(items / useMts[i].set)).fontcolor('blue') + ' 組';
                        if((items % useMts[i].set) != 0)
                            str += '又 ' + new String(items % useMts[i].set).fontcolor('blue') + ' 個';
                        
                        $('#p2slt'+j).html(str);
                        orderItem.mts.push(useMts[i].name + ' ' + str); //0308 記錄使用材料與組數
                    }
                    else{
                        $('#p2mt'+j).html('&nbsp;');
                        $('#p2slt'+j).html('&nbsp;');
                        orderItem.mts.push('&nbsp;');           //0308 empty
                    }
                }
                $('#p2uslt').html(new String(useSlots).fontcolor('red') + ' 格');
                $('#resultTable2').show();
                readyToSave = (qty != 0);
            }
        });
        
    });
    
    function findMaterial(code){    //由材料編號查詢材料內容
        var m;
        for(var i=0;i<materials.length;i++)
            if(materials[i].code == code){
                m = materials[i];
                break;
            }
        return m;
    }
    
    function clearTable(){      //清除所顯示之材料表
        for(var i=1;i<=5;i++){
            $('#mt'+i).html('&nbsp;');
            $('#set'+i).html('&nbsp;');
        }
    }

    function fillMaterial(product){     //顯示裝備物品之材料表，並記錄所需之材料
        var mt;
        
        for(var i=1;i<=5;i++){
            mt = findMaterial(product['mt'+i]);
            if(mt){
                $('#mt'+i).html(mt.name + ' x ' + product['qty'+i]);
                $('#set'+i).html(mt.set + ' pcs/組');
                useMts.push(mt);
            }
        }
    }
    
    function setProduct(){
        useMts = [];
        product = recipe[$('#type').val()][$('#product').val()];
        fillMaterial(product);
    }
    
    function genEqpList(type){
        var products = recipe[type];
        
        $('#product').removeOption(/./);    //清除裝備項目清單
        for(var i=0;i<products.length;i++)  //產生裝備項目清單
            $('#product').addOption(i, ('Lv.' + products[i].level + ' ' + products[i].name));
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


    var noticeBoard = {
        orderItems : {},

        init : function(){
            var result = localStorage.getItem('orderItems');
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
            localStorage.setItem('orderItems', JSON.stringify(ois));
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
                    .html(item.product + (' X ' + item.qty).fontcolor('#822'))
                .end()
                .hide()
                .appendTo('#noticeBoard')
                .delay(delay*i)
                .fadeIn(delay);

            panels = notice.find('.mt-item');
            $.each(panels, function(index,panel){
                $(panel)
                    .html(item.mts[index])
                    .data('m', index);
                if(item.m[index] == 'm')
                    $(panel).addClass('marked');
            });
        },
        show : function(){
            var result = localStorage.getItem('orderItems'),
                orderItems = JSON.parse(result),
                items = orderItems.items;

            $('#noticeBoard').html('');
            for(var i=0;i<items.length;i++){
                noticeBoard.showNotice(items[i], i);
            }
        }
    };