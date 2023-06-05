var Damage = 0;
var DamageHand = null;
var ActivePlayer = "Player1";

var P1Power = 0;
var P2Power = 0;
var P3Power = 0;

var LeftHealth = 1;
var RightHealth = 1;

var Shifting = false;

var P1LeftHealth = document.getElementById("P1LeftHealth");
var P1RightHealth = document.getElementById("P1RightHealth");

var P2LeftHealth = document.getElementById("P2LeftHealth")
var P2RightHealth = document.getElementById("P2RightHealth")

var P3LeftHealth = document.getElementById("P3LeftHealth")
var P3RightHealth = document.getElementById("P3RightHealth")



SetActive(ActivePlayer);



//The following is only for visuals
function SetVictim(PlayerName) {
    if (PlayerName=="Player1") {
        document.getElementById("P1LeftHand").className = "HandVictim";
        document.getElementById("P1LeftHealth").className = "HandHealth";

        document.getElementById("P1RightHand").className = "HandVictim";
        document.getElementById("P1RightHealth").className = "HandHealth";

        document.getElementById("P1SwapperContainer").style.display = 'none';

    } else if (PlayerName=="Player2") {
        document.getElementById("P2LeftHand").className = "HandVictim";
        document.getElementById("P2LeftHealth").className = "HandHealth";

        document.getElementById("P2RightHand").className = "HandVictim";
        document.getElementById("P2RightHealth").className = "HandHealth";

        document.getElementById("P2SwapperContainer").style.display = 'none';

    } else if (PlayerName=="Player3") {
        document.getElementById("P3LeftHand").className = "HandVictim";
        document.getElementById("P3LeftHealth").className = "HandHealth";

        document.getElementById("P3RightHand").className = "HandVictim";
        document.getElementById("P3RightHealth").className = "HandHealth";

        document.getElementById("P3SwapperContainer").style.display = 'none';
    }
}

function SetActive(PlayerName) {
    ActivePlayer = PlayerName;

    if (PlayerName=="Player1") {
        document.getElementById("P1LeftHand").className = "HandActive";
        document.getElementById("P1LeftHealth").className = "HandHealthActive";

        document.getElementById("P1RightHand").className = "HandActive";
        document.getElementById("P1RightHealth").className = "HandHealthActive";

        SetVictim("Player2")
        SetVictim("Player3")

        document.getElementById("P1SwapperContainer").style.display = '';

    } else if (PlayerName=="Player2") {
        document.getElementById("P2LeftHand").className = "HandActive";
        document.getElementById("P2LeftHealth").className = "HandHealthActive";

        document.getElementById("P2RightHand").className = "HandActive";
        document.getElementById("P2RightHealth").className = "HandHealthActive";

        SetVictim("Player1")
        SetVictim("Player3")

        document.getElementById("P2SwapperContainer").style.display = '';

    } else if (PlayerName=="Player3") {
        document.getElementById("P3LeftHand").className = "HandActive";
        document.getElementById("P3LeftHealth").className = "HandHealthActive";

        document.getElementById("P3RightHand").className = "HandActive";
        document.getElementById("P3RightHealth").className = "HandHealthActive";

        SetVictim("Player1")
        SetVictim("Player2")

        document.getElementById("P3SwapperContainer").style.display = '';
    }
}

function SetDead(HandHealthID) {
    document.getElementById(HandHealthID).className = "HandHealthDead";
    document.getElementById(GetHandParent(HandHealthID)).className = "HandDead";
}

//-----------------------------------

function UpdateDead() {
    
    if (P1LeftHealth.innerHTML == "0") {
        SetDead("P1LeftHealth");
    } 
    if (P1RightHealth.innerHTML == "0") {
        SetDead("P1RightHealth");
    } 

    if (P2LeftHealth.innerHTML == "0") {
        SetDead("P2LeftHealth");
    } 
    if (P2RightHealth.innerHTML == "0") {
        SetDead("P2RightHealth");
    } 

    if (P3LeftHealth.innerHTML == "0") {
        SetDead("P3LeftHealth");
    } 
    if (P3RightHealth.innerHTML == "0") {
        SetDead("P3RightHealth");
    } 

}

function UpdatePower() {
    P1Power = parseInt(document.getElementById("P1Power").innerHTML);
    P2Power = parseInt(document.getElementById("P2Power").innerHTML);
    P3Power = parseInt(document.getElementById("P3Power").innerHTML);
}



function CycleActive() {
    DamageHand = null;
    Damage = 0;

    if (ActivePlayer == "Player1") {
        if ((P2LeftHealth.innerHTML != 0) || ((P2RightHealth.innerHTML != 0))) {
            ActivePlayer = "Player2";
        } else {
            ActivePlayer = "Player3";
        }

    } else if (ActivePlayer == "Player2") {
        if ((P3LeftHealth.innerHTML != 0) || ((P3RightHealth.innerHTML != 0))) {
            ActivePlayer = "Player3";
        } else {
            ActivePlayer = "Player1";
        }

    } else if (ActivePlayer == "Player3") {
        if ((P1LeftHealth.innerHTML != 0) || ((P1RightHealth.innerHTML != 0))) {
            ActivePlayer = "Player1";
        } else {
            ActivePlayer = "Player2";
        }
    }

    SetActive(ActivePlayer);
}


function GetPlayerParent(HandID) {
    var outParent = null;

    if (HandID[1] == '1') {
        outParent = "Player1";
    } else if (HandID[1] == '2') {
        outParent = "Player2";
    } else if (HandID[1] == '3') {
        outParent = "Player3";
    }

    return outParent;
}

function GetHandParent(HandID) {
    return HandID.substring(0, HandID.length - 6) + "Hand";
}    


function UpdateCurrentHands() {
    if (ActivePlayer=="Player1") {
        LeftHealth = parseInt(document.getElementById("P1LeftHealth").innerHTML);
        RightHealth = parseInt(document.getElementById("P1RightHealth").innerHTML);
    } else if (ActivePlayer=="Player2") {
        LeftHealth = parseInt(document.getElementById("P2LeftHealth").innerHTML);
        RightHealth = parseInt(document.getElementById("P2RightHealth").innerHTML);
    } else if (ActivePlayer=="Player3") {
        LeftHealth = parseInt(document.getElementById("P3LeftHealth").innerHTML);
        RightHealth = parseInt(document.getElementById("P3RightHealth").innerHTML);
    }
}


function SetDamageHand(HandHealth) {
    DamageHandHealth = document.getElementById(HandHealth);
    DamageHand = document.getElementById(GetHandParent(HandHealth));

    SetActive(ActivePlayer);
    DamageHand.className = "DamageHand";

    Damage = parseInt(DamageHandHealth.innerHTML);
}

function DoDamage(VictimHandHealth) {
    var Victim = document.getElementById(VictimHandHealth);

    Victim.innerHTML = parseInt(Victim.innerHTML) + Damage;
    if (parseInt(Victim.innerHTML) > 5) {
        Victim.innerHTML = 0;
        Victim.className = "HandHealthDead";

        document.getElementById(GetHandParent(VictimHandHealth)).className = "HandDead";

        if (GetPlayerParent(VictimHandHealth) == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power + 1;
        } else if (GetPlayerParent(VictimHandHealth) == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power + 1;
        } else if (GetPlayerParent(VictimHandHealth) == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power + 1;
        }
    }

    CycleActive();
}


function Interact(HandID) {
    UpdateCurrentHands();

    if (!Shifting) {
        if (document.getElementById(HandID).innerHTML != '0') {
            if (GetPlayerParent(HandID) == ActivePlayer) {
                SetDamageHand(HandID);
            } else if (DamageHand != null) {
                DoDamage(HandID);
            }
        } else {
            //Skip
        }
    }



    UpdateDead();
    UpdatePower();


}


function HandShift(takerID, giverID) {
    Shifting = true;
    UpdateCurrentHands();
    var takerHealth = parseInt(document.getElementById(takerID).innerHTML);
    var giverHealth = parseInt(document.getElementById(giverID).innerHTML);



    if ((takerHealth < 5) && (giverHealth > 0)) {
        document.getElementById(takerID).innerHTML = takerHealth + 1;
        document.getElementById(giverID).innerHTML = giverHealth - 1;
    }



    UpdateCurrentHands();
    SetActive(ActivePlayer);
    UpdateDead();
}

function ConfirmShift() {
    Shifting = false;
    CycleActive();
    UpdateDead();
}

// function HideUnneededConfirmButtons() {
//     if ((ActivePlayer=="Player1") && Shifting) {
//         document.getElementById("P1ShiftConfirm").style.display = '';
//         document.getElementById("P2ShiftConfirm").style.display = 'none';
//         document.getElementById("P3ShiftConfirm").style.display = 'none';
//     } else if ((ActivePlayer=="Player2") && Shifting) {
//         document.getElementById("P1ShiftConfirm").style.display = 'none';
//         document.getElementById("P2ShiftConfirm").style.display = '';
//         document.getElementById("P3ShiftConfirm").style.display = 'none';
//     } else if ((ActivePlayer=="Player3") && Shifting) {
//         document.getElementById("P1ShiftConfirm").style.display = 'none';
//         document.getElementById("P2ShiftConfirm").style.display = 'none';
//         document.getElementById("P3ShiftConfirm").style.display = '';
//     } else {
//         document.getElementById("P1ShiftConfirm").style.display = 'none';
//         document.getElementById("P2ShiftConfirm").style.display = 'none';
//         document.getElementById("P3ShiftConfirm").style.display = 'none';
//     }
// }
