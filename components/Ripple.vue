<template>
  <svg
      :viewBox="`0 0 ${size} ${size}`"
      class="ripple block h-full w-full"
      :class="{ spin: spin === true, 'spin-r': spin === 'reverse' }"
      aria-hidden="true"
  >
    <g class="ripple-g">
      <path
          v-for="(p, i) in paths"
          :key="i"
          :d="p.d"
          fill="none"
          :stroke="p.stroke"
          :stroke-width="p.w"
          stroke-linecap="butt"
          :style="{ '--len': p.len, '--d': p.delay + 's' }"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
// The JCI "ripple": concentric rings, each split into 4 quarter-arcs, every ring
// rotated 15° from the one inside it — per the Brand Guidelines construction.
// SSR-safe: paths are computed deterministically, animation is pure CSS.
const props = withDefaults(defineProps<{
  rings?: number
  palette?: string[]
  gapDeg?: number
  size?: number
  spin?: boolean | 'reverse'
}>(), {
  rings: 7,
  // inner deep-navy fading outward to pale — reads as one cohesive object on light grounds
  palette: () => ['#1F4789', '#0097D7', '#57BCBC', '#2f93cf', '#8ecfe6', '#b6dede', '#d8ecf7'],
  gapDeg: 15,
  size: 500,
  spin: false,
})

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg - 90) * Math.PI / 180
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
}
const arc = (cx: number, cy: number, r: number, a0: number, a1: number) => {
  const [x0, y0] = polar(cx, cy, r, a0)
  const [x1, y1] = polar(cx, cy, r, a1)
  const large = (a1 - a0) > 180 ? 1 : 0
  return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`
}

const paths = computed(() => {
  const cx = props.size / 2, cy = props.size / 2
  const outer = props.size * 0.47
  const slot = outer / (props.rings * 2)   // ring width == gap between rings
  const w = slot
  const out: { d: string; stroke: string; w: number; len: number; delay: number }[] = []
  for (let i = 0; i < props.rings; i++) {
    const r = slot * (i * 2) + slot * 1.5
    const rot = i * props.gapDeg
    const col = props.palette[i % props.palette.length]
    for (let q = 0; q < 4; q++) {
      const a0 = q * 90 + rot + props.gapDeg / 2
      const a1 = q * 90 + rot + 90 - props.gapDeg / 2
      const len = (2 * Math.PI * r) * ((a1 - a0) / 360)
      out.push({ d: arc(cx, cy, r, a0, a1), stroke: col, w: +w.toFixed(2), len: Math.round(len), delay: +(0.05 * (i * 4 + q)).toFixed(2) })
    }
  }
  return out
})
</script>

<style scoped>
.ripple-g { transform-origin: center; }

@media (prefers-reduced-motion: no-preference) {
  .ripple.spin .ripple-g   { animation: ripple-spin 90s linear infinite; }
  .ripple.spin-r .ripple-g { animation: ripple-spin 120s linear infinite reverse; }
  @keyframes ripple-spin { to { transform: rotate(360deg); } }

  .ripple path {
    stroke-dasharray: var(--len);
    stroke-dashoffset: var(--len);
    animation: ripple-draw 1.6s cubic-bezier(.16, 1, .3, 1) forwards;
    animation-delay: var(--d);
  }
  @keyframes ripple-draw { to { stroke-dashoffset: 0; } }
}
</style>
