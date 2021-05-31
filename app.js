//example for listening to key stroke
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    increment(input) {
      this.counter = this.counter + input;
    },
    decrement(number) {
      this.counter = this.counter - number;
    },
  },
});

app.mount("#events");
