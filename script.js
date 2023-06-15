var Damage = 0;
var DamageHand = null;
var ActivePlayer = "Player1";

var ProtectedPlayer = null;
var DoubleProtectedPlayer = null;

var P1Power = 0;
var P2Power = 0;
var P3Power = 0;
var CurrentPower = 0;

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

function UpdateInfo() {
    document.getElementById("DamageInfo").innerHTML = "Current Damage: "+ Damage;

    if (!Shifting) {
        document.getElementById("ShiftingInfo").innerHTML = "Not Shifting";
    } else {
        document.getElementById("ShiftingInfo").innerHTML = "Shifting";
    }

}

function UpdateShop() {
    if (ActivePlayer == "Player1") {
        CurrentPower = P1Power;
    } else if (ActivePlayer == "Player2") {
        CurrentPower = P2Power;
    } else if (ActivePlayer == "Player3") {
        CurrentPower = P3Power;
    }
    
    if (CurrentPower >= 1 && !Shifting) {
        document.getElementById("OneCycleShieldPowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("OneCycleShieldPowerup").className = "LockedPowerupRow";
    }
    if (CurrentPower >= 2 && !Shifting) {
        document.getElementById("TwoCycleShieldPowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("TwoCycleShieldPowerup").className = "LockedPowerupRow";
    }
    if (CurrentPower >= 3 && !Shifting) {
        document.getElementById("LightningPowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("LightningPowerup").className = "LockedPowerupRow";
    }
    if (CurrentPower >= 4 && !Shifting) {
        document.getElementById("SkipPowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("SkipPowerup").className = "LockedPowerupRow";
    }
    if (CurrentPower >= 5 && !Shifting) {
        document.getElementById("PoisonPowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("PoisonPowerup").className = "LockedPowerupRow";
    }
    if (CurrentPower >= 7 && !Shifting) {
        document.getElementById("HealPowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("HealPowerup").className = "LockedPowerupRow";
    }
    if (CurrentPower >= 12 && !Shifting) {
        document.getElementById("StrengthPowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("StrengthPowerup").className = "LockedPowerupRow";
    }
    if (CurrentPower >= 15 && !Shifting) {
        document.getElementById("NukePowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("NukePowerup").className = "LockedPowerupRow";
    }
    if (CurrentPower >= 0 && !Shifting) {
        document.getElementById("EdgePowerup").className = "BuyablePowerupRow";
    } else {
        document.getElementById("EdgePowerup").className = "LockedPowerupRow";
    }
}

//-----------------------------------

function UpdateDead() {

    if (parseInt(P1LeftHealth.innerHTML) > 5) {
        P1LeftHealth.innerHTML = "0";
    } 
    if (parseInt(P1RightHealth.innerHTML) > 5) {
        P1RightHealth.innerHTML = "0";
    } 

    if (parseInt(P2LeftHealth.innerHTML) > 5) {
        P2LeftHealth.innerHTML = "0";
    } 
    if (parseInt(P2RightHealth.innerHTML) > 5) {
        P2RightHealth.innerHTML = "0";
    } 

    if (parseInt(P3LeftHealth.innerHTML) > 5) {
        P3LeftHealth.innerHTML = "0";
    } 
    if (parseInt(P3RightHealth.innerHTML) > 5) {
        P3RightHealth.innerHTML = "0";
    } 

    
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

function UpdateShield() {
    if ((ActivePlayer == ProtectedPlayer) && (ActivePlayer == DoubleProtectedPlayer)) {
        DoubleProtectedPlayer = null;
    } else if ((ActivePlayer == ProtectedPlayer) && (ActivePlayer != DoubleProtectedPlayer)) {
        ProtectedPlayer = null;
    }
    

    if (DoubleProtectedPlayer != null) {
        if (DoubleProtectedPlayer == "Player1") {
            document.getElementById("P1Shield").innerHTML = "2x Shielded";
            document.getElementById("P2Shield").innerHTML = "";
            document.getElementById("P3Shield").innerHTML = "";
        } else if (DoubleProtectedPlayer == "Player2") {
            document.getElementById("P1Shield").innerHTML = "";
            document.getElementById("P2Shield").innerHTML = "2x Shielded";
            document.getElementById("P3Shield").innerHTML = "";
        } else if (DoubleProtectedPlayer == "Player3") {
            document.getElementById("P1Shield").innerHTML = "";
            document.getElementById("P2Shield").innerHTML = "";
            document.getElementById("P3Shield").innerHTML = "2x Shielded";
        }
    } else if (ProtectedPlayer != null) {
        if (ProtectedPlayer == "Player1") {
            document.getElementById("P1Shield").innerHTML = "Shielded";
            document.getElementById("P2Shield").innerHTML = "";
            document.getElementById("P3Shield").innerHTML = "";
        } else if (ProtectedPlayer == "Player2") {
            document.getElementById("P1Shield").innerHTML = "";
            document.getElementById("P2Shield").innerHTML = "Shielded";
            document.getElementById("P3Shield").innerHTML = "";
        } else if (ProtectedPlayer == "Player3") {
            document.getElementById("P1Shield").innerHTML = "";
            document.getElementById("P2Shield").innerHTML = "";
            document.getElementById("P3Shield").innerHTML = "Shielded";
        }
    } else {
        document.getElementById("P1Shield").innerHTML = "";
        document.getElementById("P2Shield").innerHTML = "";
        document.getElementById("P3Shield").innerHTML = "";
    }
    

    

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
    UpdateShield();
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
    var HandParent = GetPlayerParent(HandID);

    if (!Shifting) {
        if (document.getElementById(HandID).innerHTML != '0') {
            if (GetPlayerParent(HandID) == ActivePlayer) {
                SetDamageHand(HandID);
            } else if (Damage != 0) {
                if (HandParent == ProtectedPlayer) {

                } else {
                    DoDamage(HandID);
                }
            }
        } else {
            //Skip
        }
    }



    UpdateDead();
    UpdatePower();
    UpdateInfo();
    UpdateShop();


}


function HandShift(takerID, giverID) {
    Damage = 0;
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
    UpdateInfo();
    UpdateShop()
}

function ConfirmShift() {
    Shifting = false;
    CycleActive();
    UpdateDead();
    UpdatePower();
    UpdateInfo();
    UpdateShop();
    UpdateShield();

}

// Powerups

function OneCycleShieldPowerup() {
    if (CurrentPower >= 1 && !Shifting) {
        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power - 1;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power - 1;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power - 1;
        }

        ProtectedPlayer = ActivePlayer;
        
        CycleActive();
        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }
}

function TwoCycleShieldPowerup() {
    if (CurrentPower >= 2 && !Shifting) {
        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power - 2;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power - 2;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power - 2;
        }

        ProtectedPlayer = ActivePlayer;
        DoubleProtectedPlayer = ActivePlayer;
        
        CycleActive();
        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }
}

function SkipPowerup() {
    if (CurrentPower >= 4 && !Shifting) {
        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power - 4;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power - 4;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power - 4;
        }
    
        CycleActive();
        CycleActive();

        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }
}

function LightningPowerup() {
    if (CurrentPower >= 3 && !Shifting) {

        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power - 3;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power - 3;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power - 3;
        }


        if (ActivePlayer == "Player1") {
            document.getElementById("P1LeftHealth").innerHTML = parseInt(P1LeftHealth.innerHTML) + 2;
            document.getElementById("P1RightHealth").innerHTML = parseInt(P1RightHealth.innerHTML) + 2;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2LeftHealth").innerHTML = parseInt(P2LeftHealth.innerHTML) + 2;
            document.getElementById("P2RightHealth").innerHTML = parseInt(P2RightHealth.innerHTML) + 2;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3LeftHealth").innerHTML = parseInt(P3LeftHealth.innerHTML) + 2;
            document.getElementById("P3RightHealth").innerHTML = parseInt(P3RightHealth.innerHTML) + 2;
        }

        CycleActive();
        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }
}

function PoisonPowerup() {
    if (CurrentPower >= 5 && !Shifting) {
        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power - 5;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power - 5;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power - 5;
        }


        document.getElementById("P1LeftHealth").innerHTML = parseInt(P1LeftHealth.innerHTML) + 1;
        document.getElementById("P1RightHealth").innerHTML = parseInt(P1RightHealth.innerHTML) + 1;

        document.getElementById("P2LeftHealth").innerHTML = parseInt(P2LeftHealth.innerHTML) + 1;
        document.getElementById("P2RightHealth").innerHTML = parseInt(P2RightHealth.innerHTML) + 1;

        document.getElementById("P3LeftHealth").innerHTML = parseInt(P3LeftHealth.innerHTML) + 1;
        document.getElementById("P3RightHealth").innerHTML = parseInt(P3RightHealth.innerHTML) + 1;

        CycleActive();
        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }
}

function HealPowerup() {
    if (CurrentPower >= 7 && !Shifting) {

        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power - 7;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power - 7;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power - 7;
        }


        if (ActivePlayer == "Player1") {
            document.getElementById("P1LeftHealth").innerHTML = parseInt(P1LeftHealth.innerHTML) - 1;
            document.getElementById("P1RightHealth").innerHTML = parseInt(P1RightHealth.innerHTML) - 1;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2LeftHealth").innerHTML = parseInt(P2LeftHealth.innerHTML) - 1;
            document.getElementById("P2RightHealth").innerHTML = parseInt(P2RightHealth.innerHTML) - 1;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3LeftHealth").innerHTML = parseInt(P3LeftHealth.innerHTML) - 1;
            document.getElementById("P3RightHealth").innerHTML = parseInt(P3RightHealth.innerHTML) - 1;
        }

        CycleActive();
        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }
}

function StrengthPowerup() {
    if (CurrentPower >= 12 && Damage != 0) {

        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power - 12;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power - 12;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power - 12;
        }


        Damage = Damage * 2;


        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }
}

function NukePowerup() {
    if (CurrentPower >= 15 && !Shifting) {

        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power - 15;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power - 15;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power - 15;
        }


        Damage = 999;


        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }
}

function EdgePowerup() {
    if (!Shifting) {
        if (ActivePlayer == "Player1") {
            document.getElementById("P1Power").innerHTML = P1Power + 1;
            document.getElementById("P1LeftHealth").innerHTML = 5;
            document.getElementById("P1RightHealth").innerHTML = 5;
        } else if (ActivePlayer == "Player2") {
            document.getElementById("P2Power").innerHTML = P2Power + 1;
            document.getElementById("P2LeftHealth").innerHTML = 5;
            document.getElementById("P2RightHealth").innerHTML = 5;
        } else if (ActivePlayer == "Player3") {
            document.getElementById("P3Power").innerHTML = P3Power + 1;
            document.getElementById("P3LeftHealth").innerHTML = 5;
            document.getElementById("P3RightHealth").innerHTML = 5;
        }
    
        CycleActive();
        UpdateDead();
        UpdatePower();
        UpdateInfo();
        UpdateShop();
        UpdateShield();
    }

}
