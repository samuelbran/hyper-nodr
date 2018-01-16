// Constants
const backgroundColor = '#2d2d2d'
const foregroundColor = '#cccccc'

// Colors
const RED = '#DF5D46'
const GREEN = '#7EC699'
const CYAN = '#67CDCC'
const YELLOW = '#F8C555'
const BLUE = '#4499CD'
const MAGENTA = '#B35D8D'
const LIGHT_GRAY = '#cccccc'
const DARK_GRAY = '#999999'

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: CYAN,
  colorCubes: '#fff',
  grayscale: foregroundColor
}

// Additional Constants
const cursorColor = YELLOW
const borderColor = backgroundColor

exports.decorateConfig = config => {
  let windowControlsCSS

  if (config.showWindowControls) {
    windowControlsCSS = '.list_2902 { margin-left: 0 !important; }'
  }

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: ${backgroundColor} !important;
        border-bottom: 1px solid #252525;
      }
      .splitpane_divider {
        background-color: rgba(128, 184, 155, 0.5) !important;
      }
      .tab_tab {
        border: 0;
        background-color: #252525;
      }
      .tab_tab:hover {
        color: #cccccc;
        background-color: #252525;
      }
      .tab_textActive {
        background-color: #2d2d2d;
      }
      ${windowControlsCSS}
    `
  })
}
