let contraseña="hola";
let palabra=" ";
do{
   palabra=prompt("Introduce la clave de acceso al contenido:");
if (palabra ===contraseña){
  alert("Contraseña correcta");
  break;
}
  else{
  alert("Contraseña incorrecta");
}
  }
while(palabra!==contraseña);