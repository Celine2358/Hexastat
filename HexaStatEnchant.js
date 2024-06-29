document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {

    })
})

// 메인 코어, 에디셔널 코어
var MainOption = document.getElementById("Main1");
var AddOption1 = document.getElementById("Add1");
var AddOption2 = document.getElementById("Add2");

// 옵션 가짓수
var Op1 = 0; // 크리티컬 데미지
var Op2 = 0; // 보스 데미지
var Op3 = 0; // 방어율 무시
var Op4 = 0; // 데미지
var Op5 = 0; // 공격력 마력
var Op6 = 0; // 주스탯

// 코어 레벨
var TotalLevel = 0;
var MainLevel = 0;
var Add1Level = 0;
var Add2Level = 0;

// 강화 확률
var MainChance = 35;
var AddChance1 = 32.5;
var AddChance2 = 32.5;

// 솔 에르다 조각 , 메소
var SolErdaShade = 0;
var NeedSolErdaShade = 10;

// 효과음
var Sound = document.getElementById("Sound");
Sound.volume = 0.3;

function CoreOption() {
    
    var MainResult = MainSelect.value;
    var AddResult1 = AddSelect1.value;
    var AddResult2 = AddSelect2.value;

    // 메인 코어
    if (MainResult === "CriDamage") {
        MainOption.textContent = "크리티컬 데미지"
        Op1 = 1;
    } else if (MainResult === "BossDamage") {
        MainOption.textContent = "보스 몬스터 공격 시 데미지"
        Op2 = 1;
    } else if (MainResult === "IgnoreGuard") {
        MainOption.textContent = "방어율 무시"
        Op3 = 1;
    } else if (MainResult === "Damage") {
        MainOption.textContent = "데미지"
        Op4 = 1;
    } else if (MainResult === "ATT") {
        MainOption.textContent = "공격력 / 마력"
        Op5 = 1;
    } else if (MainResult === "Stat") {
        MainOption.textContent = "주스탯"
        Op6 = 1;
    }

    // 에디 코어
    if (AddResult1 === "CriDamage") {
        AddOption1.textContent = "크리티컬 데미지"
        Op1 = 1;
    } else if (AddResult1 === "BossDamage") {
        AddOption1.textContent = "보스 몬스터 공격 시 데미지"
        Op2 = 1;
    } else if (AddResult1 === "IgnoreGuard") {
        AddOption1.textContent = "방어율 무시"
        Op3 = 1;
    } else if (AddResult1 === "Damage") {
        AddOption1.textContent = "데미지"
        Op4 = 1;
    } else if (AddResult1 === "ATT") {
        AddOption1.textContent = "공격력 / 마력"
        Op5 = 1;
    } else if (AddResult1 === "Stat") {
        AddOption1.textContent = "주스탯"
        Op6 = 1;
    }

    if (AddResult2 === "CriDamage") {
        AddOption2.textContent = "크리티컬 데미지"
        Op1 = 1;
    } else if (AddResult2 === "BossDamage") {
        AddOption2.textContent = "보스 몬스터 공격 시 데미지"
        Op2 = 1;
    } else if (AddResult2 === "IgnoreGuard") {
        AddOption2.textContent = "방어율 무시"
        Op3 = 1;
    } else if (AddResult2 === "Damage") {
        AddOption2.textContent = "데미지"
        Op4 = 1;
    } else if (AddResult2 === "ATT") {
        AddOption2.textContent = "공격력 / 마력"
        Op5 = 1;
    } else if (AddResult2 === "Stat") {
        AddOption2.textContent = "주스탯"
        Op6 = 1;
    }
}

// 강화하기
function CoreEnhance() {

    let HexaRandom = Math.floor(Math.random() * 1000);

    if (MainLevel < 3 && TotalLevel < 20) {
        TotalLevel++;
        SolErdaShade += 10;
        NeedSolErdaShade = 10;
        MainChance = 35;
        AddChance1 = 32.5;
        AddChance2 = 32.5;
        if (HexaRandom < 350) { // 메인 35%
            MainLevel++;
        } else if (HexaRandom >= 350 && HexaRandom < 675) { // 에디 32.5%
            Add1Level++;
            if (Add1Level == 11) { 
                Add2Level++;
                Add1Level--;
            }
        } else if (HexaRandom >= 675) { // 에디 32.5%
            Add2Level++;
            if (Add2Level == 11) {
                Add1Level++;
                Add2Level--;
            }
        }
    } else if (MainLevel < 7 && TotalLevel < 20) {
        TotalLevel++;
        SolErdaShade += 20;
        NeedSolErdaShade = 20;
        MainChance = 20;
        AddChance1 = 40;
        AddChance2 = 40;
        if (HexaRandom < 200) { // 메인 20%
            MainLevel++;
        } else if (HexaRandom >= 200 && HexaRandom < 600) { // 에디 40%
            Add1Level++;
            if (Add1Level == 11) { 
                Add2Level++;
                Add1Level--;
            }
        } else if (HexaRandom >= 600) { // 에디 40%
            Add2Level++;
            if (Add2Level == 11) {
                Add1Level++;
                Add2Level--;
            }
        }
    } else if (MainLevel < 8 && TotalLevel < 20) {
        TotalLevel++;
        SolErdaShade += 30;
        NeedSolErdaShade = 30;
        MainChance = 15;
        AddChance1 = 42.5;
        AddChance2 = 42.5;
        if (HexaRandom < 150) { // 메인 15%
            MainLevel++;
        } else if (HexaRandom >= 150 && HexaRandom < 575) { // 에디 42.5%
            Add1Level++;
            if (Add1Level == 11) { 
                Add2Level++;
                Add1Level--;
            }
        } else if (HexaRandom >= 575) { // 에디 42.5%
            Add2Level++;
            if (Add2Level == 11) {
                Add1Level++;
                Add2Level--;
            }
        }
    } else if (MainLevel < 9 && TotalLevel < 20) {
        TotalLevel++;
        SolErdaShade += 30;
        NeedSolErdaShade = 30;
        MainChance = 10;
        AddChance1 = 45;
        AddChance2 = 45;
        if (HexaRandom < 100) { // 메인 10%
            MainLevel++;
        } else if (HexaRandom >= 100 && HexaRandom < 550) { // 에디 45%
            Add1Level++;
            if (Add1Level == 11) { 
                Add2Level++;
                Add1Level--;
            }
        } else if (HexaRandom >= 550) { // 에디 45%
            Add2Level++;
            if (Add2Level == 11) {
                Add1Level++;
                Add2Level--;
            }
        }
    } else if (MainLevel < 10 && TotalLevel < 20) {
        TotalLevel++;
        SolErdaShade += 50;
        NeedSolErdaShade = 50;
        MainChance = 5;
        AddChance1 = 47.5;
        AddChance2 = 47.5;
        if (HexaRandom < 50) { // 메인 5%
            MainLevel++;
        } else if (HexaRandom >= 50 && HexaRandom < 525) { // 에디 47.5%
            Add1Level++;
            if (Add1Level == 11) { 
                Add2Level++;
                Add1Level--;
            }
        } else if (HexaRandom >= 525) { // 에디 47.5%
            Add2Level++;
            if (Add2Level == 11) {
                Add1Level++;
                Add2Level--;
            }
        }
    } else {
        alert("모든 헥사 스탯 강화가 끝났습니다!")
    }
    Sound.play();
    Calculate()
}

// 모든 데이터 정산
function Calculate() {
    var MainResult = MainSelect.value;
    var AddResult1 = AddSelect1.value;
    var AddResult2 = AddSelect2.value;
    var SolErdaPiecePrice = PriceInput.value;
    var ConvertPrice = parseInt(SolErdaPiecePrice)
    var Meso = SolErdaShade * ConvertPrice;
    var MesoResult = Meso.toLocaleString();
    
    document.getElementById("TotalMeso").textContent = `: ${MesoResult}`;
    document.getElementById("TotalShade").textContent = `: ${SolErdaShade} 개`;
    document.getElementById("CoreLevel").textContent = `${TotalLevel} / 20`;
    document.getElementById("MainLevel").innerHTML = `${MainLevel}<br>LEVEL`
    document.getElementById("AddLevel1").innerHTML = `${Add1Level}<br>LEVEL`
    document.getElementById("AddLevel2").innerHTML = `${Add2Level}<br>LEVEL`
    document.getElementById("NeedPiece").textContent = `x ${NeedSolErdaShade}`;
    document.getElementById("MainChance").textContent = `강화확률 ${MainChance}%`;
    document.getElementById("AddChance1").textContent = `강화확률 ${AddChance1}%`;
    document.getElementById("AddChance2").textContent = `강화확률 ${AddChance2}%`;
    document.getElementById("MainBar").style.backgroundImage = "linear-gradient(to right, #9933FF " + MainLevel * 10 + "%, transparent 0%)"
    document.getElementById("AddBar1").style.backgroundImage = "linear-gradient(to right, skyblue " + Add1Level * 10 + "%, transparent 0%)"
    document.getElementById("AddBar2").style.backgroundImage = "linear-gradient(to right, skyblue " + Add2Level * 10 + "%, transparent 0%)"

    if ((MainResult === "CriDamage") && Op1 == 1) {
        if (MainLevel == 1) {
            MainOption.textContent = "크리티컬 데미지 0.35%";
        } else if (MainLevel == 2) {
            MainOption.textContent = "크리티컬 데미지 0.7%";
        } else if (MainLevel == 3) {
            MainOption.textContent = "크리티컬 데미지 1.05%";
        } else if (MainLevel == 4) {
            MainOption.textContent = "크리티컬 데미지 1.4%";
        } else if (MainLevel == 5) {
            MainOption.textContent = "크리티컬 데미지 2.1%";
        } else if (MainLevel == 6) {
            MainOption.textContent = "크리티컬 데미지 2.8%";
        } else if (MainLevel == 7) {
            MainOption.textContent = "크리티컬 데미지 3.5%";
        } else if (MainLevel == 8) {
            MainOption.textContent = "크리티컬 데미지 4.55%";
        } else if (MainLevel == 9) {
            MainOption.textContent = "크리티컬 데미지 5.6%";
        } else if (MainLevel == 10) {
            MainOption.textContent = "크리티컬 데미지 7%";
        }
    } else if ((MainResult === "BossDamage") && Op2 == 1) {
        if (MainLevel == 1) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 1%";
        } else if (MainLevel == 2) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 2%";
        } else if (MainLevel == 3) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 3%";
        } else if (MainLevel == 4) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 4%";
        } else if (MainLevel == 5) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 6%";
        } else if (MainLevel == 6) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 8%";
        } else if (MainLevel == 7) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 10%";
        } else if (MainLevel == 8) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 13%";
        } else if (MainLevel == 9) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 16%";
        } else if (MainLevel == 10) {
            MainOption.textContent = "보스 몬스터 공격 시 데미지 20%";
        }
    } else if ((MainResult === "IgnoreGuard") && Op3 == 1) {
        if (MainLevel == 1) {
            MainOption.textContent = "방어율 무시 1%";
        } else if (MainLevel == 2) {
            MainOption.textContent = "방어율 무시 2%";
        } else if (MainLevel == 3) {
            MainOption.textContent = "방어율 무시 3%";
        } else if (MainLevel == 4) {
            MainOption.textContent = "방어율 무시 4%";
        } else if (MainLevel == 5) {
            MainOption.textContent = "방어율 무시 6%";
        } else if (MainLevel == 6) {
            MainOption.textContent = "방어율 무시 8%";
        } else if (MainLevel == 7) {
            MainOption.textContent = "방어율 무시 10%";
        } else if (MainLevel == 8) {
            MainOption.textContent = "방어율 무시 13%";
        } else if (MainLevel == 9) {
            MainOption.textContent = "방어율 무시 16%";
        } else if (MainLevel == 10) {
            MainOption.textContent = "방어율 무시 20%";
        }
    } else if ((MainResult === "Damage") && Op4 == 1) {
        if (MainLevel == 1) {
            MainOption.textContent = "데미지 0.75%";
        } else if (MainLevel == 2) {
            MainOption.textContent = "데미지 1.5%";
        } else if (MainLevel == 3) {
            MainOption.textContent = "데미지 2.25%";
        } else if (MainLevel == 4) {
            MainOption.textContent = "데미지 3%";
        } else if (MainLevel == 5) {
            MainOption.textContent = "데미지 4.5%";
        } else if (MainLevel == 6) {
            MainOption.textContent = "데미지 6%";
        } else if (MainLevel == 7) {
            MainOption.textContent = "데미지 7.5%";
        } else if (MainLevel == 8) {
            MainOption.textContent = "데미지 9.75%";
        } else if (MainLevel == 9) {
            MainOption.textContent = "데미지 12%";
        } else if (MainLevel == 10) {
            MainOption.textContent = "데미지 15%";
        }
    } else if ((MainResult === "ATT") && Op5 == 1) {
        if (MainLevel == 1) {
            MainOption.textContent = "공격력 / 마력 +5";
        } else if (MainLevel == 2) {
            MainOption.textContent = "공격력 / 마력 +10";
        } else if (MainLevel == 3) {
            MainOption.textContent = "공격력 / 마력 +15";
        } else if (MainLevel == 4) {
            MainOption.textContent = "공격력 / 마력 +20";
        } else if (MainLevel == 5) {
            MainOption.textContent = "공격력 / 마력 +30";
        } else if (MainLevel == 6) {
            MainOption.textContent = "공격력 / 마력 +40";
        } else if (MainLevel == 7) {
            MainOption.textContent = "공격력 / 마력 +50";
        } else if (MainLevel == 8) {
            MainOption.textContent = "공격력 / 마력 +65";
        } else if (MainLevel == 9) {
            MainOption.textContent = "공격력 / 마력 +80";
        } else if (MainLevel == 10) {
            MainOption.textContent = "공격력 / 마력 +100";
        }
    } else if ((MainResult === "Stat") && Op6 == 1) {
        if (MainLevel == 1) {
            MainOption.textContent = "주스탯 +100 (올스탯 +48 / 최대 HP +2100)";
        } else if (MainLevel == 2) {
            MainOption.textContent = "주스탯 +200 (올스탯 +96 / 최대 HP +4200)";
        } else if (MainLevel == 3) {
            MainOption.textContent = "주스탯 +300 (올스탯 +144 / 최대 HP +6300)";
        } else if (MainLevel == 4) {
            MainOption.textContent = "주스탯 +400 (올스탯 +192 / 최대 HP +8400)";
        } else if (MainLevel == 5) {
            MainOption.textContent = "주스탯 +600 (올스탯 +288 / 최대 HP +12600)";
        } else if (MainLevel == 6) {
            MainOption.textContent = "주스탯 +800 (올스탯 +384 / 최대 HP +16800)";
        } else if (MainLevel == 7) {
            MainOption.textContent = "주스탯 +1000 (올스탯 +480 / 최대 HP +21000)";
        } else if (MainLevel == 8) {
            MainOption.textContent = "주스탯 +1300 (올스탯 +624 / 최대 HP +27300)";
        } else if (MainLevel == 9) {
            MainOption.textContent = "주스탯 +1600 (올스탯 +768 / 최대 HP +33600)";
        } else if (MainLevel == 10) {
            MainOption.textContent = "주스탯 +2000 (올스탯 +960 / 최대 HP +42000)";
        }
    }

    if (AddResult1 === "CriDamage" && Op1 == 1) {
        AddOption1.textContent = "크리티컬 데미지 " + (Add1Level * 0.35) + "%";
    } else if (AddResult1 === "BossDamage" && Op2 == 1) {
        AddOption1.textContent = "보스 몬스터 공격 시 데미지 " + Add1Level + "%";
    } else if (AddResult1 === "IgnoreGuard" && Op3 == 1) {
        AddOption1.textContent = "방어율 무시 " + Add1Level + "%";
    } else if (AddResult1 === "Damage" && Op4 == 1) {
        AddOption1.textContent = "데미지 " + (Add1Level * 0.75) + "%";
    } else if (AddResult1 === "ATT" && Op5 == 1) {
        AddOption1.textContent = "공격력 / 마력 +" + (Add1Level * 5);
    } else if (AddResult1 === "Stat" && Op6 == 1) {
        AddOption1.textContent = "주스탯 +" + (Add1Level * 100) + " (올스탯 +" + (Add1Level * 48) + " / 최대 HP +" + (Add1Level * 2100) + ")";
    }

    if (AddResult2 === "CriDamage" && Op1 == 1) {
        AddOption2.textContent = "크리티컬 데미지 " + (Add2Level * 0.35) + "%";
    } else if (AddResult2 === "BossDamage" && Op2 == 1) {
        AddOption2.textContent = "보스 몬스터 공격 시 데미지 " + Add2Level + "%";
    } else if (AddResult2 === "IgnoreGuard" && Op3 == 1) {
        AddOption2.textContent = "방어율 무시 " + Add2Level + "%";
    } else if (AddResult2 === "Damage" && Op4 == 1) {
        AddOption2.textContent = "데미지 " + (Add2Level * 0.75) + "%";
    } else if (AddResult2 === "ATT" && Op5 == 1) {
        AddOption2.textContent = "공격력 / 마력 +" + (Add2Level * 5);
    } else if (AddResult2 === "Stat" && Op6 == 1) {
        AddOption2.textContent = "주스탯 +" + (Add2Level * 100) + " (올스탯 +" + (Add2Level * 48) + " / 최대 HP +" + (Add2Level * 2100) + ")";
    }
}

function HexaReset() {
    TotalLevel = 0;
    MainLevel = 0;
    Add1Level = 0;
    Add2Level = 0;
    Calculate();
}

function Site() {
    window.location.href = 'https://celine2358.github.io/Hexastat';
}
