<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $clicks } = useSlideContext()

const text = [
  '$ ./thank_you --all ',
  '[ x ] Assisted by Copilot-Claude Haiku',
  '[ x ] Human has read every line of code :)',
  '[ x ] Questions welcome',
  ' _____ _                _     __   __',
  '|_   _| |__   __ _ _ __ | | __ \\ \\ / /__  _   _',
  '  | | | \'_ \\ / _` | \'_ \\| |/ /  \\ V / _ \\| | | |',
  '  | | | | | | (_| | | | |   <    | | (_) | |_| |',
  '  |_| |_| |_|\\__,_|_| |_|_|\\_\\   |_|\\___/ \\__,_|',
  '',
  '',
  '      LLM4Dev - 2026-11-18 - Rennes - France     ',
].join('\n')

const CHARS_PER_SECOND = 60
const shown = ref('')
let timer: ReturnType<typeof setInterval> | undefined

function stop() {
  if (timer !== undefined) {
    clearInterval(timer)
    timer = undefined
  }
}

function typeOut() {
  stop()
  shown.value = ''
  let i = 0
  timer = setInterval(() => {
    shown.value += text[i++]
    if (i >= text.length) stop()
  }, 1000 / CHARS_PER_SECOND)
}

watch($clicks, (clicks) => {
  if (clicks >= 1) {
    if (timer === undefined && shown.value.length === 0) typeOut()
  } else {
    stop()
    shown.value = ''
  }
}, { immediate: true })

onUnmounted(stop)
</script>

<template>
  <pre class="terminal">{{ shown }}</pre>
</template>

<style scoped>
.terminal {
  font-family: monospace;
  font-size: 0.8em;
  line-height: 1.3;
  background: #f5f5f5;
  color: #393a34;
  padding: 1em;
  border-radius: 6px;
  height: 22em;
  overflow: hidden;
  margin: 0;
}
</style>
