// window.onload = pageLoad;

// function pageLoad(){
	

// }

// function startGame(){
// 	alert("Ready");
// 	addBox();
// 	timeStart();
// }

// function timeStart(){
// 	var TIMER_TICK = 1000;
// 	var timer = null;
// 	var min = 0.5; // 0.5 minute
// 	var second = min*60; 
// 	var x = document.getElementById('clock');
// 	//setting timer using setInterval function
// 	timer = 30;
	
// 	function timeCount(){
// 		var allbox = document.querySelectorAll("#layer div");
// 		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
// 		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
// 		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
// 	}
// }

// function addBox(){
// 	// สร้างกล่องตาม input ที่เราใส่ 
// 	var numbox = 4;
// 	var gameLayer = 4;
// 	var colorDrop = 4;
// 	for (var i =0; i<numbox;i++){
// 		var tempbox = 4;
// 		tempbox.className = 4;
// 		tempbox.id = "box"+i;
// 		tempbox.style.left = Math.random() * (500 - 25) + "px";
// 		tempbox.style.top = Math.random() * (500 - 25) + "px";
// 		//add element to HTML node
// 		gameLayer.4;
// 		bindBox(tempbox);
// 	}
// }

// function bindBox(box){
// 	//เมื่อกดแล้ว กล่องจะหายไป
// 	box.onclick = function(){
		
// 	}
// }

// function clearScreen(){
// 	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
// 	var allbox = ;

// 	//delete all  div
// 	for (var i=0;i<allbox.length;i++){
		
// 	}
// }


window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;
}

function startGame(){
	showMessage("Ready!", "ready");
    addBox();
    timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 1; 
	var second = min*5; 
	var x = document.getElementById('clock');
	timer = setInterval(timeCount, TIMER_TICK);

	function timeCount(){
		second--;
		x.innerHTML = second;
		if (second <= 0){
			clearInterval(timer);
			showMessage("Game Over!", "lose");
			clearScreen();
		}
		var allbox = document.querySelectorAll("#layer div");
		if (allbox.length == 0 && second > 0){
			showMessage("You Win!", "win");
			clearInterval(timer);
			clearScreen();
		}
	}
}

function addBox(){
	var numbox = document.getElementById("numbox").value;
	var color = document.getElementById("color").value;
	var gameLayer = document.getElementById("layer");

	for (var i = 0; i < numbox; i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square " + color;
		tempbox.id = "box" + i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	// เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบกล่องทั้งหมดออกจากหน้าจอ
	var allbox = document.querySelectorAll("#layer div");
	for (var i = 0; i < allbox.length; i++){
		allbox[i].remove();
	}
}
function showMessage(text, className) {
    var messageBox = document.createElement("div");
    messageBox.id = "message";
    messageBox.className = className;
    messageBox.innerHTML = text;
    document.body.appendChild(messageBox); // เพิ่ม div เข้าไปใน body

    // ตั้งเวลาให้ข้อความหายไปหลังจาก 2 วินาที
    setTimeout(function() {
        messageBox.remove(); // ลบข้อความออกจากหน้า
    }, 2000);
}


// function timeStart(){
//     // เรียกฟังก์ชันเมื่อเกมเริ่มหรือจบ
//     if (allbox.length == 0 && second > 0){
//         showMessage("You Win!", "win");
//     } else if (second <= 0 && allbox.length > 0){
//         showMessage("You Lose!", "lose");
//     }
// }






