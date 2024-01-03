import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Esto permitirá que Vite incluya todas las imágenes en el paquete de construcción
  },
};
