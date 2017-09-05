 var searchTarget = 3,
      isFullSearch = true,
      sRange = {
        e0 : 0,
        e1 : 1000,
        s0 : 0,
        s1 : 1000
      };
  jQuery.event.props.push('dataTransfer');

  $(document).ready(
    function(){
      var file;

      // $.get("desc.html", function(data){
      //   $(".container .row").append(data);
      // });

      $('#searchType').click(function(event){
        searchTarget = $(event.target).find(':radio').val();
        if(file != undefined)
            readFile(file);
      });

      $('#fullSearch').click(function(event){
        isFullSearch = true;
        sRange.e0 = 0;
        sRange.s0 = 0;
        if(file != undefined)
            readFile(file);
      });

      $('#rangeSearch').click(function(event){
        isFullSearch = false;
      });

      $('#saveRange').click(function(event){
        var e0 = $('#e0').val(),
            e1 = $('#e1').val(),
            s0 = $('#s0').val(),
            s1 = $('#s1').val();
        e0 = Math.max(0,e0);
        e1 = Math.max(0,e1);
        s0 = Math.max(0,s0);
        s1 = Math.max(0,s1);
        sRange.e0 = Math.min(e0, e1);
        sRange.e1 = Math.max(e0, e1);
        sRange.s0 = Math.min(s0, s1);
        sRange.s1 = Math.max(s0, s1);

        if(file != undefined)
            readFile(file);
      });

      $('#drop').on('dragover', function(event){
        //停止開啟檔案及其他動作
        event.stopPropagation();
        event.preventDefault();
      });
      
      $('#drop').on('drop', function(event){
        //停止開啟檔案及其他動作
        event.stopPropagation();
        event.preventDefault();
        file = event.originalEvent.dataTransfer.files[0];
        if(file.name.split('.')[1] == 'dat')  //確認副檔名為dat
          readFile(file);
      });
    }
  );

  function readFile(file){
    var dv, 
        mapHeader = '', 
        r = new FileReader();

    r.readAsArrayBuffer(file);                   // #1
    r.onload = function(e){
      dv = new DataView(r.result);
      mapHeader += String.fromCharCode(dv.getUint8(0));
      mapHeader += String.fromCharCode(dv.getUint8(1));
      mapHeader += String.fromCharCode(dv.getUint8(2));
      if(mapHeader == 'MAP'){                    // #1
        $('#filename')
          .html(file.name)
          .removeClass('label-default')
          .addClass('label-success');
        parseResult(dv);    // #1 - OK
      }
      else{
        file = undefined;
        $('#map_size').add('#map_content').html('');
        $('#filename')
          .html('xxxx.dat')
          .removeClass('label-success')
          .addClass('label-default');
      }
    };
  }

  function parseResult(dv) {  // #2 - OK
    var mapSize = {};
    var sectionOffset;
    var stairs = [];
    var target;         //從區段三中抓取的資料
    var obj;            //從區段二中抓取的資料
    var addr, addr2;    //memory address
    var rhtml = '';

    mapSize.width = dv.getUint16(12,true);  //2.讀取地圖寬度 
    mapSize.height = dv.getUint16(16,true); //2.讀取地圖寬度
    mapSize.area = mapSize.width * mapSize.height; //2.計算地圖面積(x2就等於每一區段之大小)
    mapSize.toString = function(){
      var str = (searchTarget==3)? '迷宮' : '地圖';
      str += '大小 : ' + this.width + '&times;' + this.height;
      return str;
    };

    $('#map_size').html(mapSize.toString()); //顯示地圖大小
    sectionOffset = mapSize.area *2;        //2.就等於每一區段之大小

    /* 開始分析地圖切換位置點 */
    stairs = [];
    if(isFullSearch){
      sRange.e1 = mapSize.width;
      sRange.s1 = mapSize.height;
    }

    for(var i=sRange.s0; i<sRange.s1; i++){
      for(var j=sRange.e0; j<sRange.e1; j++){
        addr = (j + i*mapSize.width)*2 + sectionOffset*2 + 20;
        addr2 = addr - sectionOffset;
        target = dv.getUint16(addr,true) % 256;
        if(target == searchTarget){         //找到地圖切換點後，記錄該點資訊
          obj = dv.getUint16(addr2,true);
          stairs.push({
            'east'  : j, 'south' : i,
            'pnum'  : getStairPic(obj)      //由地圖編號尋找是否有符合的樓梯圖片
          });
        }
      }
    }
    /* 呈現搜尋結果 */
    if(!isFullSearch)
      rhtml = '在東('+sRange.e0+'~'+sRange.e1+'),南('+sRange.s0+'~'+sRange.s1+')範圍內<br/>';
    else
      rhtml = '';

    if(stairs.length == 0){
      rhtml += (searchTarget==3)? '沒找到任何樓梯位置' : '沒找到任何出入口位置';
      $('#map_content').html(rhtml);
    }
    else{
      rhtml += '<table class="table table-striped">';
      rhtml += '<caption> 共找到 <span class="badge">' + stairs.length + '</span>個';
      rhtml += (searchTarget==3)? '樓梯位置' : '地圖出入口';
      rhtml += '</caption>';
      for(var i=0; i<stairs.length; i++){
        rhtml += '<tr><td>';
        rhtml += '<span class="badge">' + (stairs[i].east + ',' + stairs[i].south) + '</span>';
        rhtml += '<img src="images/stair/s00' + stairs[i].pnum + '.gif" />';
        rhtml += '</td></tr>';
      }
      rhtml += '</table>';
      $('#map_content').html(rhtml);
    }
  }

  function getStairPic(gnum){
    var pnum = '';
    for(var i=0; i<st.length; i++){
      if(gnum == st[i].gnum){
        pnum = st[i].pnum;
        break;
      }
    }
    return pnum;
  }