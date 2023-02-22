// VUE JS
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        apiUrl: 'api.php',
        myTasks: [],
      }
    },
    methods:{

    },
    mounted() {
    console.log(`the component is now mounted.`)
  },
    created(){
      axios
          .get(this.apiUrl)
          .then(resp => {
            this.myTasks = resp.data.tasks
          });
    }
  }).mount('#app')

