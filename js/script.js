// VUE JS
const { createApp } = Vue;

createApp({
  data() {
    return {
      readUrl: "read.php",
      createUrl: "create.php",
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
