<script setup lang="ts" generic="T extends any, O extends any">
import { UseClipboard } from '@vueuse/components'

defineOptions({
  name: 'IndexPage',
})

function generateEmoteCode(num: string) {
  return `880000${num}`
}

function generateEmoteSrc(code: string) {
  return `/emotes/${code}.png`
}

const images = [1, 2, 3, 4, 6, 7, 8, 10, 12, 13, 20, 26, 27].map((num) => {
  const code = generateEmoteCode(num.toString().padStart(2, '0'))
  return {
    code,
    src: generateEmoteSrc(code),
    source: `[style="Image" id="${code}"]`,
  }
})

// eslint-disable-next-line no-console
console.log(images)
</script>

<template>
  <div pt-12 w-full>
    <header>
      <h1 flex gap-1 items-center justify-center rel="noreferrer" href="https://github.com/antfu-collective/vitesse-lite" target="_blank">
        <img rounded h-8 w-8 src="/icon.webp" alt="icon">
        <span>Calabiyau Emotes</span>
      </h1>
      <p>
        <em text-sm op75>Copy the emote codes below to use in-game chat.</em>
      </p>
    </header>

    <div py-4 />

    <section w="1/2" mx-auto>
      <ul flex flex-wrap justify-center space-x-4 space-y-6>
        <li v-for="image in images" :key="image.code" rounded space-y-2>
          <div p-2 flex h-32 w-32 items-center justify-center border="~ rounded gray-300 dark:gray-700 hover:gray-700 dark:hover:gray-200">
            <img :src="image.src" :alt="image.code">
          </div>

          <UseClipboard v-slot="{ copy, copied }" :source="image.source">
            <button

              border="~ rounded gray-300 dark:gray-700 hover:gray-700 dark:hover:gray-200"

              text-sm py-1 flex gap-1 w-full transition duration-200 items-center justify-center
              bg="white dark:dark-800 hover:gray-100 dark:hover:dark-700"
              text="gray-700 dark:gray-200"
              shadow="sm hover:md"
              cursor="pointer"
              @click="copy()"
            >
              <span class="i-lucide-copy" />
              <span>{{ copied ? 'Copied' : 'Copy' }}</span>
            </button>
          </UseClipboard>
        </li>
      </ul>
    </section>

    <div mt-8>
      <a rel="noreferrer" href="https://wiki.biligame.com/klbq/%E8%A1%A8%E6%83%85%E5%8C%85" target="_blank" text-sm op50 hover="underline">Emotes Origin: https://wiki.biligame.com/klbq/表情包</a>
    </div>
  </div>
</template>
