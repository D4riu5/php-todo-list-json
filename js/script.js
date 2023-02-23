// VUE JS
const { createApp } = Vue;

createApp({
  data() {
    return {
      readUrl: "read.php",
      createUrl: "create.php",
      updateUrl: "update.php",
      myTasks: [],
      newTask: "",
    };
  },
  methods: {
    addNewTask() {
      axios.post(this.createUrl,
        {
          task: this.newTask,
        },
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      ).then(resp => {
        this.myTasks.push(resp.data.newTask);
        this.newTask = '';
      })
    },

    updateTask(selectedTask) {
      selectedTask.done = !selectedTask.done;

      axios.post(this.updateUrl, {
        updatedTasks: this.myTasks,
      },
        {
          headers: {
            "content-type": "application/json"
          },
        }
      ).then(resp => {
        console.log("tasks updated");
        console.log(resp);
      })

    }
  },
  mounted() {
    console.log(`the component is now mounted.`);
  },
  created() {
    axios.get(this.readUrl).then((resp) => {
      this.myTasks = resp.data.tasks;
    });
  },
}).mount("#app");
