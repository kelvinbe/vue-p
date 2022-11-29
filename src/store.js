import { reactive, ref } from 'vue'




export const store = reactive({
  isDark(theme){

    return theme.global.current.value.dark
  },
  toggleTheme: (theme) => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
})