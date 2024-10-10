export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  colorMode.value = 'dark'

  console.log(colorMode.value)
})
