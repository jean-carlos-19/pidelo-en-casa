import {
  eventos_crear_cuenta,
  evento_vista,
} from "./atomic/Registrate/eventos";

window.addEventListener("load", () => {
  eventos_crear_cuenta();
  evento_vista();
});
