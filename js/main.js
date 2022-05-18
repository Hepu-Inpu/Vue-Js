const API = "https://api.github.com/users/";

async function buscar() {
    const response = await fetch(API + "Hepu-Inpu")
    //traemos la informacion en formato JSON
    const data = await response.json();
    console.log(data)
}
//se crea un modelo
const app = Vue.createApp({
    data() {
        return {
            message: 'cambio afirmado'
        }
    }
})//montamos esta informacion en el div de html