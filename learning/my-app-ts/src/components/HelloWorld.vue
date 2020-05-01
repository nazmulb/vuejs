<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ floatValue | toFixed }}</h2>
    {{ firstName | capitalize }} {{ lastName | capitalize }}
    <input v-model.trim="name" />
    <p>
      <button @click.prevent="decrement">-</button>
      {{ count }}
      <button @click.prevent="increase">+</button>
      <ResetCount @reset-count="resetCount" />
    </p>
    <p>
      Kilometers:
      <input type="text" v-model="kilometers" />
      Meters:
      <input type="text" v-model="meters" />
    </p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Watch, Mixins } from "vue-property-decorator";
import CommonMixin from "@/mixins/CommonMixin";
import ResetCount from "@/components/ResetCount.vue";

@Component({
  name: "HelloWorld",
  components: {
    ResetCount
  },
  filters: {
    capitalize(value: string) {
      return value.toUpperCase();
    }
  }
})
export default class HelloWorld extends Mixins(CommonMixin) {
  @Prop({ required: false, type: String, default: "Welcome" })
  private readonly msg!: string;

  // Class properties will be component data
  private count = 0;
  private firstName = "Nazmul";
  private lastName = "Basher";
  private kilometers = 0;
  private meters = 0;

  // Methods will be component methods
  public decrement() {
    this.count--;
  }

  public increase() {
    this.count++;
  }

  public resetCount(value: number) {
    this.count = value;
  }

  // Declared as computed property getter
  get name(): string {
    return this.firstName + " " + this.lastName;
  }

  // Declared as computed property setter
  set name(value: string) {
    const splitted = value.split(" ");
    console.log(splitted);
    this.firstName = splitted[0];
    this.lastName = splitted[1] || "";
  }

  @Watch("kilometers")
  kilometersChange(value: number) {
    this.kilometers = value;
    this.meters = value * 100;
  }

  @Watch("meters")
  metersChange(value: number) {
    this.kilometers = value / 100;
    this.meters = value;
  }

  // Declare mounted lifecycle hook
  created() {
    console.log("created!");
  }

  mounted() {
    console.log("mounted!");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
