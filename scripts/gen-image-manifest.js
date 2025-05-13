// scripts/gen-image-manifest.ts
import { readdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'pathe'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const output = join(__dirname, '../src/assets/manifest.json')

export function genIngameEmotes() {
  const ingameEmotes = readdirSync(resolve(__dirname, '../src/assets/emotes/in-game/')).filter(f => /\.(?:png|jpe?g|webp|gif|svg)$/i.test(f))

  const manifest = {
    'in-game': ingameEmotes,
  }

  writeFileSync(output, `${JSON.stringify(manifest, null, 2)}\n`, 'utf-8')

  console.log(`Generated image manifest with [${ingameEmotes.length}] images. Saved to ${output}`)
}

(async () => {
  genIngameEmotes()
}
)()
