// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tailwindcss from '@tailwindcss/vite'

import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Feelicy',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/nikdelvin/feelicy' }],
            sidebar: [
                {
                    label: 'Mindful Garden',
                    link: '/mindful-garden'
                },
                {
                    label: 'Podcasts',
                    autogenerate: { directory: 'podcasts' }
                }
            ],
            customCss: ['./src/styles/global.css']
        }),
        solidJs()
    ],
    vite: {
        plugins: [tailwindcss()]
    },
    devToolbar: {
        enabled: false
    }
})
