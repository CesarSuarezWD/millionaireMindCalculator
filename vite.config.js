import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/millionaireMindCalculator",
  plugins: [react()],
})

// Para hacer deploy en gh pages: https://www.youtube.com/watch?v=V2-U_j30u_Y
