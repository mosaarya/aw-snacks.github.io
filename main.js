/*Fungsi login*/

function pass(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	
	if (username == "admin" && password == "admin") {
				alert("Selamat Datang !");
				window.location.href ='index.html';
		} else if (username == "admin" && password !== "admin") {
				alert("Password Salah !")
		} else if (username !== "admin" && password == "admin") {
				alert("Maaf Username Tidak Terdaftar.")
		} else { 
				alert("Masukan Username Dan Password Yang Benar !")
		}
}
