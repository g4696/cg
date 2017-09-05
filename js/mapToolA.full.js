  var searchTarget = 3;
  var isMapFileConfirmed = false;
  jQuery.event.props.push('dataTransfer');

	$(document).ready(
		function(){
      var file;

      $('#searchType').click(function(event) {
        searchTarget = $(event.target).find(':radio').val();
        if(file != undefined){
          if(isMapFileConfirmed)
            readBlob(file);
          else
            readFile(file);
        }
      });

      $('#drop').on('dragover', function(event){
          $(this).toggleClass('red');
          //停止開啟檔案及其他動作
          event.stopPropagation();
          event.preventDefault();
      });
      $('#drop').on('drop', function(event){
          //停止開啟檔案及其他動作
          event.stopPropagation();
          event.preventDefault();
          file = event.originalEvent.dataTransfer.files[0];
          isMapFileConfirmed = false;
          readFile(file);
      });
      $('#drop').hover(function(event){
          $(this).toggleClass('red');
      });
		}
	);

  function readFile(file){
    var r = new FileReader();
    r.readAsBinaryString(file.slice(0, 3));
    r.onload = function(e){
      if(r.result == 'MAP'){
        isMapFileConfirmed = true;
        $('#filename')
          .html(file.name)
          .removeClass('label-default')
          .addClass('label-success');
        readBlob(file);
      }
      else{
        file = undefined;
        isMapFileConfirmed = false;
        $('#map_size').add('#map_content').html('');
        $('#filename')
          .html('xxxx.dat')
          .removeClass('label-success')
          .addClass('label-default');
      }
    };
  }

  function readBlob(file) {
    var reader = new FileReader();
    var reader1 = new FileReader();
    var mapHeader = file.slice(0, 20);
    var mapSize = {};
    var start;
    var stop = file.size;
    var mapStairContent;
    var stairs = [];
    reader.readAsArrayBuffer(mapHeader);
    reader.onload = function(e){
    	var dv = new DataView(reader.result);
    	mapSize.width = dv.getUint16(12,true);
    	mapSize.height = dv.getUint16(16,true);
    	mapSize.area = function(){
    		return this.width * this.height;
    	};
    	mapSize.toString = function(){
    		var str = (searchTarget==3)? '迷宮' : '地圖';
        str += '大小 : ' + this.width + '&times;' + this.height;
        return str;
    	};

    	$('#map_size').html(mapSize.toString()); //顯示地圖大小

    	start = mapSize.area() * 4 + 20;         //計算地圖檔切割起點
    	mapStairContent = file.slice(start, stop);//切割
    	reader1.readAsArrayBuffer(mapStairContent);
    };

    reader1.onload = function(e){
    	var dv = new DataView(reader1.result);
    	var target;		//search target
    	var addr;		//memory address
    	stairs = [];
    	for(var i=0;i<mapSize.height;i++){
    		for(var j=0;j<mapSize.width;j++){
    			addr = (j + i*mapSize.width) * 2;
	    		target = dv.getUint16(addr,true) % 256;
	    		if(target == searchTarget){
	    			stairs.push({
	    				'east'	: j,
	    				'south'	: i
	    			});
	    		}
	    	}
    	}
    	
    	$('#map_content').html(
    		(function(){
    			if(stairs.length != 0){
            var str = '共找到<span class="badge">' + stairs.length + '</span>個';
    				str += (searchTarget==3)? '樓梯位置' : '地圖出入口';
            str += '在：<br/>';
    				$(stairs).each(function(index, val){
              str += '<span class="badge">'+(val.east+','+val.south).fontcolor('black')+'</span> ';
    				});
    				return str;
    			}
    			else{
    				return (searchTarget==3)?'沒找到任何樓梯位置':'沒找到任何出入口位置';
    			}
    		})()
    	);
    };

  }