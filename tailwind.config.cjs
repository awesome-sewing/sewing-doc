/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'max-width': '96ch',
            'font-size': '0.9rem',
            li: {
              p: {
                'margin-top': 0,
                'margin-bottom': '0',
                'line-height': '1.7',
              },
            },

            a: {
              color: 'rgb(79 70 229)',
              cursor: 'pointer',
            },

            img: {
              display: 'block',
              margin: '0 auto',
              maxWidth: '100%',
            },
            'img.ProseMirror-selectednode': {
              outline: '2px solid rgb(79 70 229)',
            },
          },
        },
      },
      width: {
        doc: '96ch',
      },
      maxWidth: {
        doc: '96ch',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
