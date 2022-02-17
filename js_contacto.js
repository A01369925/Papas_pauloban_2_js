function ejecutar(){
	nombre=document.c_form.nombre.value;
	app=document.c_form.app.value;
	cor=document.c_form.cor.value;

	if (nombre.length==0){
		document.c_form.nombre.style.background="#FF6F6F";
		alert("Debe llenar la casilla de Nombre");

		if (app.length==0){
			document.c_form.app.style.background="#FF6F6F";
			alert("Debe llenar la casilla de Apellido paterno");

			if (cor.length==0){
				document.c_form.cor.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Correo");
			}
		}

		else {
			if (cor.length==0){
				document.c_form.cor.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Correo");
			}
		}
	}

	else if (app.length==0){
		document.c_form.app.style.background="#FF6F6F";
		alert("Debe llenar la casilla de Apellido paterno");

		if (nombre.length==0){
			document.c_form.nombre.style.background="#FF6F6F";
			alert("Debe llenar la casilla de Nombre");

			if (cor.length==0){
				document.c_form.cor.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Correo");
			}
		}

		else {
			if (cor.length==0){
				document.c_form.cor.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Correo");
			}
		}
	}

	else {
		if (cor.length==0){
			document.c_form.cor.style.background="#FF6F6F";
			alert("Debe llenar la casilla de Correo");

			if (nombre.length==0){
				document.c_form.nombre.style.background="#FF6F6F";
				alert("Debe llenar la casilla de Nombre");

				if (app.length==0){
					document.c_form.app.style.background="#FF6F6F";
					alert("Debe llenar la casilla de Apellido paterno");
				}
			}

			else {
				if (app.length==0){
					document.c_form.app.style.background="#FF6F6F";
					alert("Debe llenar la casilla de Apellido paterno");
				}
			}
		}
	}
}

function campo_nombre(){
	document.c_form.nombre.style.background="rgb(255, 248, 211)";
}

function campo_app(){
	document.c_form.app.style.background="rgb(255, 248, 211)";
}

function campo_cor(){
	document.c_form.cor.style.background="rgb(255, 248, 211)";
}

function borrar(){
	document.c_form.nombre.style.background="rgb(255, 248, 211)";
	document.c_form.app.style.background="rgb(255, 248, 211)";
	document.c_form.cor.style.background="rgb(255, 248, 211)";
}