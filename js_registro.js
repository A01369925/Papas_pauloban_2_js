function ejecutar(){
	nombre_p=document.r_form.nombre_p.value;
	tel=document.r_form.tel.value;
	dir=document.r_form.dir.value;

	if (nombre_p.length==0){
		document.r_form.nombre_p.style.background="#FF6F6F";
		alert("Debe llenar la casilla de Nombre del propietario");

		if (tel.length==0){
			document.r_form.tel.style.background="#FF6F6F";
			alert("Debe llenar la casilla de Teléfono");

			if (dir.length==0){
				document.r_form.dir.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Dirección");
			}
		}

		else {
			if (dir.length==0){
				document.r_form.dir.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Dirección");
			}
		}
	}

	else if (tel.length==0){
		document.r_form.tel.style.background="#FF6F6F";
		alert("Debe llenar la casilla de Teléfono");

		if (nombre_p.length==0){
			document.r_form.nombre_p.style.background="#FF6F6F";
			alert("Debe llenar la casilla de Nombre del propietario");

			if (dir.length==0){
				document.r_form.dir.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Dirección");
			}
		}

		else {
			if (dir.length==0){
				document.r_form.dir.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Dirección");
			}
		}
	}

	else {
		if (dir.length==0){
			document.r_form.dir.style.background="#FF6F6F";
			alert("Debe llenar la casilla de Dirección");

			if (nombre_p.length==0){
				document.r_form.nombre_p.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Nombre del propietario");

				if (tel.length==0){
					document.r_form.tel.style.background="#FF6F6F";
					alert("Debe llenar la casilla de Teléfono");
				}
			}

			else {
				if (tel.length==0){
					document.r_form.tel.style.background="#FF6F6F";
					alert("Debe llenar la casilla de Teléfono");
				}
			}
		}
	}
}

function campo_nombre_p(){
	document.r_form.nombre_p.style.background="rgb(255, 248, 211)";
}

function campo_tel(){
	document.r_form.tel.style.background="rgb(255, 248, 211)";
}

function campo_dir(){
	document.r_form.dir.style.background="rgb(255, 248, 211)";
}

function borrar(){
	document.r_form.nombre_p.style.background="rgb(255, 248, 211)";
	document.r_form.tel.style.background="rgb(255, 248, 211)";
	document.r_form.dir.style.background="rgb(255, 248, 211)";
}