// 헥사 스탯 UI
var HexaLock = document.getElementById("HexaStatLock"); // 활성화 전
var HexaOpen = document.getElementById("HexaStatOpen"); // 활성화 후
var SolErdaPiece = document.getElementById("SolErdaPiece"); // 솔 에르다 조각

// 조각 시세 부분
var PriceInput = document.querySelector('input[name="piece_price"]'); // 조각 시세 입력
var PriceShow = document.getElementById("PiecePrice"); // 조각 시세 출력

// 옵션 선택 부분
var MainSelect = document.getElementById("MainSelect");
var AddSelect1 = document.getElementById("AddSelect1");
var AddSelect2 = document.getElementById("AddSelect2");

// 코어 활성화 부분
var IsPriceSet = 0;

// 메세지창
var Msg = document.getElementById("Msg");

function OpenChat() {
    window.open("https://open.kakao.com/o/s5Om6OKe", "_blank");
}

function PriceSetting() {

    var SolErdaPiecePrice = PriceInput.value;
    var ConvertPrice = parseInt(SolErdaPiecePrice)
    var PriceResult = ConvertPrice.toLocaleString();

    if (!isNaN(ConvertPrice) && ConvertPrice <= 100000000 && SolErdaPiecePrice !== '') {
        IsPriceSet = 1; // 시세 결정
        PriceShow.textContent = `(조각 시세 : ${PriceResult} 메소)`
        Msg.textContent = `솔 에르다 조각 시세가 ${PriceResult} 메소로 설정되었습니다.`
    } else {
        IsPriceSet = 0; // 시세 취소 및 오류
        alert("솔 에르다 조각의 시세가 올바르지 않은 것 같습니다!")
    }
}

function CoreOpen() {

    var MainResult = MainSelect.value;
    var AddResult1 = AddSelect1.value;
    var AddResult2 = AddSelect2.value;

    if ((MainResult !== AddResult1) && (MainResult !== AddResult2) && (AddResult1 !== AddResult2)
    && (IsPriceSet == 1)) {
        Msg.textContent = `헥사 스탯 코어가 활성화되었습니다!`
        HexaLock.style.display = 'none';
        HexaOpen.style.display = 'block';
        SolErdaPiece.style.display = 'none';
        document.getElementById("Reset").style.display = 'block';
        CoreOption();
    } else if (IsPriceSet == 0) {
        alert("솔 에르다 조각의 시세를 설정하세요!");
    } else {
        alert("메인 스탯과 추가 스탯들을 다른 종류로 설정하세요!");
    }
}