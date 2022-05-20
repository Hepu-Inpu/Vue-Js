const API = "https://api.github.com/users/";


//se crea una instancia de vue 
const app = Vue.createApp({
    data() {
        return {
            message: 'cambio afirmado',
            busqueda: null,
            result: null,
        }
    },
    //la palabra function ya no es necesaria ya que se usa methods
    methods: {
        async buscar() {
            const response = await fetch(API + this.busqueda)
            //traemos la informacion en formato JSON
            const data = await response.json();
            console.log(data)
            this.result = true
        }
    }
})//montamos esta informacion en el div de html