import manifest from '~/assets/manifest.json'

export function useIngameImages() {
  const imageList = manifest['in-game'].map((code) => {
    const codeWithoutExt = code.replace('.png', '')
    return {
      code: codeWithoutExt,
      src: new URL(`../assets/emotes/in-game/${code}`, import.meta.url).href,
    }
  })
  const count = imageList.length

  return {
    imageList,
    count,
  }
}
