const app = new Vue({
    el: '#root',
    data: {
        todos:[
            {
                text: 'Portare il cane a spasso',
                done: true,
            },
            {
                text: 'Fare la spesa',
                done: true,
            },
            {
                text: 'Preparare la cena',
                done: true,
            },        
        ],

        valoreInput: '',
    },


    methods: {
        addTodo: function(){
            this.todos.push({text:this.valoreInput})
        }
    },
});