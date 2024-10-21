const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
    },
  },
  plugins: [require('flowbite/plugin'),
  //Class này có thể add vào html thông qua file.css
  //nhưng trang có nhiều nút tương tư nên cấu hình trong file tailwind.config.js để tái sử dụng & dễ chỉnh sửa.
  function ({ addComponents }) {
    addComponents({
      '.button': {
        position: 'relative',
        zIndex: '1',
        display: 'inline-flex',
        overflow: 'hidden',
        borderWidth: '1px',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingTop: '10px',
        paddingBottom: '10px',
        textAlign: 'center',
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: '700',
        lineHeight: '1.5',
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '300ms',
        '&::after': {
          position: 'absolute',
          inset: '0px',
          left: '0px',
          top: '0px',
          zIndex: '-1',
          transformOrigin: 'top right',
          '--tw-scale-y': '0',
          transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          content: 'var(--tw-content)',
          transitionDuration: '300ms',
        },
        '&:hover::after': {
          '--tw-scale-y': '1',
          transform: 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          content: 'var(--tw-content)',
        }
      }
    })
  }
  ],
}