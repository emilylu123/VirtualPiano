    let msg = "";
    let audio;
    document.addEventListener("keypress",function(e){
        switch (e.key){
            case "A":
            case "a":
                msg = "The 'A' key is pressed";
                audio = new Audio("white_keys/A.mp3").play();
                break;
            case "S":
            case "s":
                audio = new Audio("white_keys/S.mp3").play();
                msg = "The 'S' key is pressed";
                break;
            case "D":
            case "d":
                msg = "The 'D' key is pressed";
                audio = new Audio("white_keys/D.mp3").play();
                break;
            case "F":
            case "f":
                msg = "The 'F' key is pressed";
                audio = new Audio("white_keys/F.mp3").play();
                break;
            case "G":
            case "g":
                msg = "The 'G' key is pressed";
                audio = new Audio("white_keys/G.mp3").play();
                break;
            case "H":
            case "h":
                msg = "The 'H' key is pressed";
                audio = new Audio("white_keys/H.mp3").play();
                break;
            case "J":
            case "j":
                msg = "The 'J' key is pressed";
                audio = new Audio("white_keys/J.mp3").play();
                break;
            case "W":
            case "w":
                msg = "The 'W' key is pressed";
                audio = new Audio("black_keys/W.mp3").play();
                break;
            case "E":
            case "e":
                msg = "The 'E' key is pressed";
                audio = new Audio("black_keys/E.mp3").play();
                break;
            case "T":
            case "t":
                msg = "The 'T' key is pressed";
                audio = new Audio("black_keys/T.mp3").play();
                break;
            case "Y":
            case "y":
                msg = "The 'Y' key is pressed";
                audio = new Audio("black_keys/Y.mp3").play();
                break;
            case "U":
            case "u":
                msg = "The 'U' key is pressed";
                audio = new Audio("black_keys/U.mp3").play();
                break;
            default: break;
}
    console.log(msg);
});