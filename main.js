const USUARIO = "matias"
const CLAVE = "puentes"

let usuario = prompt ("Ingresa tu usuario")
let clave = prompt ("Ingresa tu clave")

if (usuario === USUARIO && clave === CLAVE){
    alert (`Bienvenido de vuelta ${USUARIO}`)

    let comando;
    while (comando != "salir") {
    comando = prompt ("- Ver productos\n- Enviar mensaje\n- Ver carrito\n- Salir");

        switch (comando){
            case "ver productos":
                for (let i = 1; i<=5; i++){
                    alert (`Producto N°: ${i}`);
                }
                break;
            case "enviar mensaje":
                let asunto = prompt ("Ingresa El asunto del mensaje");
                let mensaje = prompt ("Escribí tu mensaje");
                alert(`Mensaje ${mensaje} con asunto ${asunto} recibido correctamente.`);
                break;
            case "ver carrito":
                alert ("No te ilusiones tuto, apenas puedo con esto todavía :(")
                alert ("Pero si repetis mi apellido te regalo un meme")
                let clave = prompt ("Apellido")
                if (clave = CLAVE){
                    alert("Excelente joven padawan, su meme: ");
                    window.location = "https://pm1.aminoapps.com/6645/a073e6bfd3f0953800eb240ee7f2b088bb6577d7_hq.jpg";
                }
                break;
            case "salir":
                alert(`Hasta la proxima ${USUARIO}`)
                break;    
            default:
                alert ("Comando invalido, intenta de vuelta.")
                break;
        }
    }
} else{
    if (usuario != USUARIO || clave != CLAVE){
        alert ("Usuario y/o contraseña incorrectos.")
    }
}