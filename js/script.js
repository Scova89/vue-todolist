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
                this.todos.push(
                    {
                        text:this.valoreInput,
                        done: false,
                    }
                );
               
                this.valoreInput='';
            }  
        },

        sbarraTodo: function(index){
            if(this.todos[index].done == true){
                this.todos[index].done = false
            }else{
                this.todos[index].done = true;
            }
        },

        removeTodo: function(index){
            this.todos.splice(index, 1);
        }
    },
});
