var count = 0;
var b = "Likes "
function like() {
    let likecount = document.querySelector("#btn");
    count++;
    likecount.innerHTML = b + count;
}

var DCount = 0;
var a = "Dislikes "
function Dislike() {
    let likecount = document.querySelector("#btn1");
    DCount++;
    likecount.innerHTML = a + DCount;
}


function comment() {
    let inpValue = document.querySelector("#Inp").value;
    let cloneValue = document.querySelector("#placeComment").cloneNode(true);
    cloneValue.innerHTML = inpValue;
    cloneValue.style.background = "tomato";
    let commentsDiv = document.querySelector("#commentDiv");
    commentsDiv.insertBefore(cloneValue, commentsDiv.firstChild)
}


/*function comment1() {
    let inpvalue = document.querySelector("#Inp").value;
    console.log("inpvalue");
    if (inpvalue === " ") {
        document.querySelector("#commentDiv").innerHTML = "comment Here !!!"
    }
    else {
        document.querySelector("#commentDiv").innerHTML = inpvalue;
        document.querySelector("#Inp").innerHTML = "";
    }
}*/