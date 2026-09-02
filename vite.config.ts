import { defineConfig, loadEnv, type ServerOptions } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode and working directory
  const env = loadEnv(mode, process.cwd(), '')

  const certPath = env.TLS_CERT_PATH || process.env.TLS_CERT_PATH
  const keyPath = env.TLS_KEY_PATH || process.env.TLS_KEY_PATH

  let httpsOptions: ServerOptions['https'] = undefined

  if (certPath && keyPath) {
    try {
      const resolvedCert = path.resolve(certPath)
      const resolvedKey = path.resolve(keyPath)

      if (fs.existsSync(resolvedCert) && fs.existsSync(resolvedKey)) {
        httpsOptions = {
          cert: fs.readFileSync(resolvedCert),
          key: fs.readFileSync(resolvedKey),
        }
      } else {
        const missing: string[] = []
        if (!fs.existsSync(resolvedCert)) missing.push(`Certificate (${resolvedCert})`)
        if (!fs.existsSync(resolvedKey)) missing.push(`Private Key (${resolvedKey})`)
        console.warn(`[TLS Warning] TLS certificate/key file not found: ${missing.join(', ')}. Falling back to HTTP.`)
      }
    } catch (error) {
      console.error('[TLS Error] Failed to read TLS certificate or private key:', error)
    }
  }

  return {
    plugins: [
      // The React and Tailwind plugins are both required for Make, even if
      // Tailwind is not being actively used – do not remove them
      react(),
      tailwindcss(),
    ],
    server: {
      ...(httpsOptions ? { https: httpsOptions } : {}),
    },
    preview: {
      ...(httpsOptions ? { https: httpsOptions } : {}),
    },
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})


