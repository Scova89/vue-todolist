const app = new Vue({
    el: '#root',
    data: {
        todos:[
            {
                text: 'Portare il cane a spasso',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Preparare la cena',
                done: false,
            },        
        ],

        valoreInput: '',
    },


    methods: {
        addTodo: function(){
            if(this.valoreInput != ""){
                this.todos.push({text:this.valoreInput});
                this.valoreInput='';
            }  
        },

        removeTodo: function(index){
            this.todos.splice(index);
        }
    },
});
