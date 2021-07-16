<template>
    <div :key="task.id" v-for="task in tasks">
         <SingleTask 
            @toggle-reminder="$emit('toggle-reminder', task.id)"
            :task="task" 
            @delete-task="$emit('delete-task', task.id)"
        />
    </div>
</template>

<script>
    import SingleTask from './SingleTask.vue'

    export default {
        name: 'Task',
        components: {
            SingleTask
        },
        emits: [
            'delete-task','toggle-reminder'],
        props: {
            tasks: Array
        }
    }
</script>