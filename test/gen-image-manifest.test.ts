import { x } from 'tinyexec'
import { describe, expect, it } from 'vitest'

const manifestPath = '../src/assets/manifest.json'

describe('gen-image-manifest', () => {
  it('should generate image manifest', async () => {
    const { stderr } = await x('nr', ['gen:images'])
    expect(stderr).toBe('')

    const manifest = (await import(manifestPath)).default
    expect(manifest).toBeDefined()
    expect(manifest['in-game'].length).toBeGreaterThan(0)
  })
})
