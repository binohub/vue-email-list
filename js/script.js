console.log("ehy piccolo dev! sono main.js 😛 ora puoi usarmi! usami uwu ")
// ! vue
const app = new Vue(
    {
        el: '#app',

        data: {
            mail: "",
        },
        methods: {


        },

        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                console.log(response);
                console.log(`axios ON! 😀`);
                console.log(response.data);
                console.log("random mail ON! 😀 ");
                console.log("<< CONNETTI response.data.response A mail >>");

                this.mail = response.data.response;

                console.log("connected! 😀");
            });
        },

    });