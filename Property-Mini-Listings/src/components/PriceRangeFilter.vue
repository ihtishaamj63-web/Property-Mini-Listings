<template>
  <div class="price-filter">
    <label class="filter-label">Price Range</label>
    <div class="range-values">
      <span class="range-value">R{{ localMin.toLocaleString() }}</span>
      <span class="range-value">R{{ localMax.toLocaleString() }}</span>
    </div>
    <div class="range-sliders">
      <input
        type="range"
        :min="min"
        :max="max"
        v-model.number="localMin"
        @input="emitRange"
        class="range-input range-input-min"
      />
      <input
        type="range"
        :min="min"
        :max="max"
        v-model.number="localMax"
        @input="emitRange"
        class="range-input range-input-max"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceRangeFilter",
  props: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:rangeMin", "update:rangeMax"],
  data() {
    return {
      localMin: this.min,
      localMax: this.max,
    };
  },
  watch: {
    min(newVal) {
      this.localMin = newVal;
    },
    max(newVal) {
      this.localMax = newVal;
    },
  },
  methods: {
    emitRange() {
      if (this.localMin > this.localMax) {
        const temp = this.localMin;
        this.localMin = this.localMax;
        this.localMax = temp;
      }
      this.$emit("update:rangeMin", this.localMin);
      this.$emit("update:rangeMax", this.localMax);
    },
  },
};
</script>

<style scoped>
.price-filter {
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 24px;
}

.filter-label {
  font-size: 13px;
  font-weight: 600;
  color: #888;
  display: block;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.range-values {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.range-value {
  font-size: 16px;
  font-weight: 600;
  color: #16213e;
}

.range-sliders {
  position: relative;
  height: 32px;
}

.range-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 32px;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  pointer-events: none;
  margin: 0;
}

.range-input::-webkit-slider-runnable-track {
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  pointer-events: all;
}

.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  background: #16213e;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
  margin-top: -8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.15s ease;
}

.range-input::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}

.range-input::-moz-range-track {
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  pointer-events: all;
}

.range-input::-moz-range-thumb {
  width: 22px;
  height: 22px;
  background: #16213e;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: all;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.range-input-min {
  z-index: 2;
}

.range-input-max {
  z-index: 1;
}
</style>
