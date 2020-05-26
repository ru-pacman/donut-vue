import { Popover as ElPopover } from "element-ui";
import "element-ui/lib/theme-chalk/popover.css";
import styles from "./styles.module.css";

const COLORS = [
  "#67B6F4",
  "#67E3F4",
  "#9E88F8",
  "#7D8AFF",
  "#5DA4DC",
  "#5DCDDC",
  "#8E7BE0",
  "#717CE6",
  "#5292C3",
  "#52B6C3",
  "#7E6DC6",
  "#646ECC",
  "#487FAA",
  "#489EAA",
  "#6E5FAD",
  "#5760B2",
  "#3D6D92",
  "#3D8792",
  "#5E5194",
  "#4B5298",
  "#335A79",
  "#337079",
  "#4E437B",
  "#3E447E"
];
const SIZES = {
  viewBox: {
    width: 600,
    height: 400
  },
  normal: {
    bigRadius: 148,
    smallRadius: 72,
    textRadius: 168,
    percentLabelRadius: 110
  },
  hover: {
    bigRadius: 158,
    smallRadius: 72,
    textRadius: 168,
    percentLabelRadius: 110
  }
};

function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

export default {
  name: "Donut",
  components: {
    ElPopover
  },
  props: {
    slices: {
      type: Array,
      required: true,
      default: () => []
    },
    colors: {
      type: Array,
      required: false,
      default: () => COLORS
    },
    sizes: {
      type: Object,
      required: false,
      default: () => SIZES
    },
    currentSlice: {},
    visible: true
  },
  methods: {
    getTooltipCoordinates(percent) {
      const [x, y] = getCoordinatesForPercent(percent);
      // eslint-disable-next-line no-unused-vars
      const { width, height } = this.sizes.viewBox;
      const radius = this.sizes.hover.textRadius;

      let top = 0;
      let left = 0;

      left = ((width / 2 + x * radius) / width) * 100;
      top = ((height / 2 + y * radius) / height) * 100;

      return {
        top: `${top}%`,
        left: `${left}%`
      };
    },
    sliceClick(id) {
      this.$emit("click", id);
    }
  },
  render() {
    let cumulativePercent = -0.25; // Чтобы части начинали свое расположения на 12 часов;
    let cumulativePercentAlt = cumulativePercent;

    return (
      <div
        class={styles.container}
        style={{
          maxWidth: this.sizes.viewBox.width,
          maxHeight: this.sizes.viewBox.height
        }}
      >
        {this.slices.map(slice => {
          const currentPercent = cumulativePercentAlt + slice.percent / 2;
          const placement = {
            horizontal: (currentPercent + 0.25) % 1 > 0.5 ? "left" : "right",
            vertical:
              currentPercent % 1 > 0.5 || currentPercent < 0 ? "end" : "start"
          };
          cumulativePercentAlt += slice.percent;
          return (
            <ElPopover
              class={styles.point}
              style={this.getTooltipCoordinates(currentPercent)}
              placement={`${placement.horizontal}-${placement.vertical}`}
              visible-arrow={false}
              popper-class="donut-popper"
              trigger="manual"
              value={slice.id === this.currentSlice}
              content={`${currentPercent}  ${placement.horizontal}-${placement.vertical}`}
            >
              <div slot="reference" />
              <div>{slice.text}</div>
              <div>{slice.percent * 100}%</div>
            </ElPopover>
          );
        })}
        <svg
          viewBox={`-${this.sizes.viewBox.width / 2} -${this.sizes.viewBox
            .height / 2} ${this.sizes.viewBox.width} ${
            this.sizes.viewBox.height
          }`}
          class={styles.svg}
        >
          <text x="0" y="0" text-anchor="middle" class={styles.svgTextAll}>
            Всего (шт.):
          </text>
          <text x="0" y="14" text-anchor="middle" class={styles.svgTextAll}>
            546864
          </text>

          {this.slices.map((slice, key) => {
            const [startX, startY] = getCoordinatesForPercent(
              cumulativePercent
            );
            const [textX, textY] = getCoordinatesForPercent(
              cumulativePercent + slice.percent / 2
            );
            cumulativePercent += slice.percent;
            const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
            const largeArc = slice.percent > 0.5 ? 1 : 0;
            const size = this.sizes[
              slice.id === this.currentSlice ? "hover" : "normal"
            ];

            const pathData = [
              `M ${startX * size.bigRadius} ${startY * size.bigRadius}`, // Координаты начальной точки
              `A ${size.bigRadius} ${size.bigRadius} 0 ${largeArc} 1 ${endX *
                size.bigRadius} ${endY * size.bigRadius}`, // Кривая
              `L ${endX * size.smallRadius} ${endY * size.smallRadius}`, // Линия
              `A ${size.smallRadius} ${
                size.smallRadius
              } 0 ${largeArc} 0 ${startX * size.smallRadius} ${startY *
                size.smallRadius}`, // Кривая
              "Z" // Закрыть полигон
            ].join(" ");
            return (
              <g>
                <path
                  d={pathData}
                  fill={this.colors[key % this.colors.length]}
                  vector-effect="non-scaling-stroke"
                  class={styles.svgSlice}
                  vOn:click={() => this.sliceClick(slice.id)}
                />
                {slice.percent >= 0.05 && (
                  <g>
                    {slice.id !== this.currentSlice && (
                      <text
                        x={textX * size.textRadius}
                        y={textY * size.textRadius + 8}
                        text-anchor={
                          (cumulativePercent - slice.percent / 2 + 0.25) % 1 >
                          0.5
                            ? "end"
                            : "start"
                        }
                        class={styles.svgText}
                      >
                        {slice.text}
                      </text>
                    )}
                    <text
                      x={textX * size.percentLabelRadius}
                      y={textY * size.percentLabelRadius + 6}
                      text-anchor="middle"
                      class={styles.svgTextPercent}
                      vOn:click={() => this.$emit("click", slice.id)}
                    >
                      {slice.percent * 100}%
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    );
  }
};
