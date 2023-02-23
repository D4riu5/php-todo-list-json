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
        if (resp.data && resp.data.newTask) {
          this.myTasks.push(resp.data.newTask);
          this.newTask = '';
        }
      })
    },

    updateTask(selectedTask) {
      selectedTask.done = !selectedTask.done;

      axios.post(this.updateUrl, this.myTasks, {
      },
        {
          headers: {
            "content-type": "application/json"
          },
        }
      )
    },

    removeTask(selectedTaskIndex) {
      this.myTasks.splice(selectedTaskIndex, 1);

      axios.post(this.updateUrl, this.myTasks, {
      },
        {
          headers: {
            "content-type": "application/json"
          },
        }
      )
    },
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
