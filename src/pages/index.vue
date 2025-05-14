<script setup lang="ts" generic="T extends any, O extends any">
import { UseClipboard } from '@vueuse/components'
import { useIngameImages } from '~/composables/useIngameImages'

const { imageList } = useIngameImages()
// eslint-disable-next-line no-console
console.log(imageList)

function getCopySource(code: string) {
  return `[style="Image" id="${code}"]`
}
</script>

<template>
  <div w-full>
    <header p-4>
      <h1 flex gap-2 items-center rel="noreferrer" href="https://github.com/antfu-collective/vitesse-lite" target="_blank">
        <img rounded h-8 w-8 src="/icon.webp" alt="icon">
        <span>Calabiyau Emotes</span>
      </h1>
    </header>

    <section w="2/3" mx-auto>
      <p mb-4>
        <em text-sm op75>Hover over any image and click to copy its code then paste the code in game chat.</em>
      </p>

      <ul flex flex-wrap gap-4 justify-center>
        <li
          v-for="image in imageList" :key="image.code"
          class="group" rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:-translate-y-1
        >
          <img :src="image.src" :alt="image.code" group-hover="scale-105" h-32 w-32 transition-transform duration-500 object-cover>

          <UseClipboard v-slot="{ copy, copied }" :source="getCopySource(image.code)">
            <div from="black/70" via="black/40" to="transparent" bg-gradient="to-t" group-hover="opacity-100 bg-black/60" p-2 opacity-0 flex flex-col cursor-pointer transition-opacity duration-300 inset-0 absolute @click="copy()">
              <div class="text-sm text-white flex flex-1 items-center justify-center">
                <span class="i-lucide-copy mr-2" />
                <span>{{ copied ? 'Copied' : 'Copy' }}</span>
              </div>
              <div class="text-sm text-white font-semibold text-left">
                {{ image.code }}
              </div>
            </div>
          </UseClipboard>
        </li>
      </ul>
    </section>

    <section mt-8>
      <a rel="noreferrer" href="https://wiki.biligame.com/klbq/%E8%A1%A8%E6%83%85%E5%8C%85" target="_blank" text-sm op50 hover="underline">Emotes Origin: https://wiki.biligame.com/klbq/表情包</a>
    </section>
  </div>
</template>
