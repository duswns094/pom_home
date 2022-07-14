
/**
* Initiate KakaoMap
*/
/** 지곡점*/
var container_jigok = document.getElementById('jigok'); //지도를 담을 영역의 DOM 레퍼런스
var options_jigok = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(36.02897258072399,129.3240311767926), //지도의 중심좌표.
  level: 3 //지도의 레벨(확대, 축소 정도)
};

var jigok_map = new kakao.maps.Map(container_jigok, options_jigok); //지도 생성 및 객체 리턴
// 마커가 표시될 위치입니다
var jigok_position  = new kakao.maps.LatLng(36.02897258072399,129.3240311767926);

// 마커를 생성합니다
var jigok_marker = new kakao.maps.Marker({
position: jigok_position
});

// 마커가 지도 위에 표시되도록 설정합니다
jigok_marker.setMap(jigok_map);

var iwContent_jigok = '<div class="overlay_info">';
iwContent_jigok += '    <a href="http://kko.to/YXrtiyiPI" target="_blank"><strong>포엠학원 지곡점</strong></a>';
iwContent_jigok += '    <div class="desc">';
iwContent_jigok += '        <span class="address">경북 포항시 남구 지곡로 253 2층</span>';
iwContent_jigok += '    </div>';
iwContent_jigok += '</div>';

var overlay = new kakao.maps.CustomOverlay({
    content: iwContent_jigok,
    position: jigok_position,
    xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
    yAnchor: 1.5
});

overlay.setMap(jigok_map);


function jigok_relayout() {
  var container_jigok = document.getElementById('jigok'); //지도를 담을 영역의 DOM 레퍼런스
  var options_jigok = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(36.02897258072399,129.3240311767926), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

  var jigok_map = new kakao.maps.Map(container_jigok, options_jigok); //지도 생성 및 객체 리턴
  // 마커가 표시될 위치입니다
  var jigok_position  = new kakao.maps.LatLng(36.02897258072399,129.3240311767926);

  // 마커를 생성합니다
  var jigok_marker = new kakao.maps.Marker({
    position: jigok_position
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  jigok_marker.setMap(jigok_map);

    var iwContent_jigok = '<div class="overlay_info">';
    iwContent_jigok += '    <a href="http://kko.to/YXrtiyiPI" target="_blank"><strong>포엠학원 지곡점</strong></a>';
    iwContent_jigok += '    <div class="desc">';
    iwContent_jigok += '        <span class="address">경북 포항시 남구 지곡로 253 2층</span>';
    iwContent_jigok += '    </div>';
    iwContent_jigok += '</div>';

    var overlay = new kakao.maps.CustomOverlay({
        content: iwContent_jigok,
        position: jigok_position,
        xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
        yAnchor: 1.5
    });

overlay.setMap(jigok_map);

  jigok_map.relayout();
}

function centum_relayout() {
/** 센텀점*/
  var container_centum = document.getElementById('centum'); //지도를 담을 영역의 DOM 레퍼런스
  var options_centum = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(35.16666510383538,129.1324462385412), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

  var centum_map = new kakao.maps.Map(container_centum, options_centum); //지도 생성 및 객체 리턴
  // 마커가 표시될 위치입니다
  var centum_position  = new kakao.maps.LatLng(35.16666510383538,129.1324462385412);

  // 마커를 생성합니다
  var centum_marker = new kakao.maps.Marker({
    position: centum_position
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  centum_marker.setMap(centum_map);


    var iwContent_centum = '<div class="overlay_info">';
    iwContent_centum += '    <a href="http://kko.to/GQPVxuaIl" target="_blank"><strong>포엠학원 센텀점</strong></a>';
    iwContent_centum += '    <div class="desc">';
    iwContent_centum += '        <span class="address">부산 해운대구 센텀2로 24 </br>센텀다이아몬드 7층</span>';
    iwContent_centum += '    </div>';
    iwContent_centum += '</div>';

    var overlay = new kakao.maps.CustomOverlay({
        content: iwContent_centum,
        position: centum_position,
        xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
        yAnchor: 1.5
    });

overlay.setMap(centum_map);

  centum_map.relayout();
}

function bukgu_relayout(){
    /** 북구점*/
    var container_bukgu = document.getElementById('bukgu'); //지도를 담을 영역의 DOM 레퍼런스
    var options_bukgu = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(36.06702792028669, 129.37325585030231), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var bukgu_map = new kakao.maps.Map(container_bukgu, options_bukgu); //지도 생성 및 객체 리턴
    // 마커가 표시될 위치입니다
    var bukgu_position  = new kakao.maps.LatLng(36.06702792028669, 129.37325585030231);

    // 마커를 생성합니다
    var bukgu_marker = new kakao.maps.Marker({
    position: bukgu_position
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    bukgu_marker.setMap(bukgu_map);

    var iwContent_bukgu = '<div class="overlay_info">';
    iwContent_bukgu += '    <a href="http://kko.to/cwmK-m6tZ" target="_blank"><strong>포엠학원 북구점</strong></a>';
    iwContent_bukgu += '    <div class="desc">';
    iwContent_bukgu += '        <span class="address">경북 포항시 북구 대곡로 47 2층 </span>';
    iwContent_bukgu += '    </div>';
    iwContent_bukgu += '</div>';

    var overlay = new kakao.maps.CustomOverlay({
        content: iwContent_bukgu,
        position: bukgu_position,
        xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
        yAnchor: 1.5
    });

overlay.setMap(bukgu_map);
    bukgu_map.relayout();

}
