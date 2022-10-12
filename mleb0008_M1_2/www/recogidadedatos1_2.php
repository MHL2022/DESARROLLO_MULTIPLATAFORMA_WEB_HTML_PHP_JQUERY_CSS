<!DOCTYPE html>

<!-- Abrimos la etiqueta de la página -->
<html lang="es">


<!-- Definimos el head -->
<head>
	<meta charset="utf-8" />
</head>

<body>
	<header>
	</header>
	<section>
		<article>
			<h3> RECEPCIÓN DE DATOS </h3>
		</article>
<!-- Recogida de datos-->
<?php		echo 'Usuario';
			echo '<pre>';
					print_r($_POST);
			echo '</pre>'; 
?>

	</section>
	
</body>

</html>