//creare una to do list in cui ogni todo sia formato da due proprietá: text(string) e done(boolean true/false)
//MILESTONE 1
//Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
//MILESTONE 2
//Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.
//MILESTONE 3
//Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
//Bonus:
//1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
//2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
//bonus extra:
// limitare caratteri minimi per evitare task vuote e inserimento messaggio allo svutamento della lista 

const { createApp } = Vue 


createApp({
    data() {
        return {
            newTask: '',
            error: false,
            tasks: [
                {
                    text: 'Learn Html',
                    done: true
                },
                {
                    text: 'Learn Css',
                    done: true
                },
                {
                    text: 'Learn Js',
                    done: false
                },
            ]
        }
    },
    methods: {
        taskDone(index){
            this.tasks.splice(index, 1)
        },
        addTask(){
            if(this.newTask.length < 4){
                this.error = true
            } else {
                this.error = false
                this.tasks.unshift({text: this.newTask})
            console.log(this.newTask);
            //svuotare task dopo
            this.newTask= ''
            }
            
        },
        changeStatus(task){
            if(task.done === true){
                task.done = false
            } else {
                task.done = true
            }
        }
    }
   
}).mount('#app')