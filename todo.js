new Vue({
    el: '#app',
    data: {
      newTodo: '',
      todos: [],
      time: '',
      counter: 0,
    },

    methods: {
      addTodo() {
        if(this.newTodo!=''){
        this.todos.push({ text: this.newTodo, completed: false, time: this.time});
        console.log(this.time)
        this.counter++;
      }
        this.newTodo = '';
    },

    del: function(index){
        this.todos.splice(index,1);
        this.counter--;
    },

    delAll: function()
    {
        this.todos = [];
        this.counter = 0;
    },    
               
    },

     mounted() {
      console.log('App mounted!');
      if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
    },
    watch: {
      todos: {
        handler() {
          console.log('Todos changed!');
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true,
      },
    },

});