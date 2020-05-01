import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "HelloWorld",
  filters: {
    toFixed(value: number) {
      return value.toFixed(2);
    }
  }
})
export default class CommonMixin extends Vue {
  protected fvalue = 4.98562;
  get floatValue(): number {
    return this.fvalue;
  }
}
