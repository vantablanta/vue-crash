<template>
  <AddTask v-show="showAddTask" @add-task="addTask" />
  <Task
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Task from '../components/Task.vue'
import AddTask from '../components/AddTask.vue'
export default {
  name: 'Home',
  props: {
    showAddTask: Boolean,
  },
  components: {
    Task,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    }
  },
  created(){
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st 2.30 pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'March 3rd 1.30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Go shopping',
        day: 'March 3rd 11.00am',
        reminder: false
      }
    ]
  },
  methods: {
          addTask(task){
      this.tasks = [ ...this.tasks, task]
    },
    deleteTask(id){
      if (confirm("Are you sure?")) {
         this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    },
    toggleReminder(id){ //toggle function not working 
      this.tasks = this.tasks.map((task) => {
        task.id === id ? { ...task, reminder: !task.reminder} : task
      })
    } 
  },
  
}

</script>

