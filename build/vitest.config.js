import { defineConfig } from 'vitest/config';
export default defineConfig({
    test: {
        // Dónde buscar los archivos de test
        include: ['tests/**/*.test.ts'],
        // Variables globales disponibles sin importar
        globals: true,
        // Entorno de ejecución
        environment: 'node',
    }
});
//# sourceMappingURL=vitest.config.js.map