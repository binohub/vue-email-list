console.log("ehy piccolo dev! sono main.js 😛 ora puoi usarmi! usami uwu ")
// ! vue
const app = new Vue(
    {
        el: '#app',

        data: {
            mail: "",
            mails: [],
        },
        methods: {
            mailGenerator() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        // console.log(response);
                        // console.log(`axios ON! 😀`);
                        // console.log(response.data);
                        // console.log("random mail ON! 😀 ");

                        const result = response.data.response;
                        console.log("mail generated! i'm pushing in the array... 😀");
                        this.mails.push(result);
                        console.log(result);
                    });
            },

            counter() {
                for (let index = 0; index <= 9; index++) {
                    this.mailGenerator();
                }
                console.log(this.mails);
            },



        },

        created() {
            this.counter();
        },

    });