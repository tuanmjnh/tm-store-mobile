import * as iconify from '@iconify/vue'
import { Icon } from 'vant'

export function renderIcon(icon?: string, props?: import('vant').IconProps) {
  if (!icon) return
  return () => createIcon(icon, props)
}

export function createIcon(icon?: string, props?: import('vant').IconProps) {
  if (!icon)
    return

  const isLocal = icon.startsWith('local:')
  let innerIcon: any
  if (isLocal) {
    const svgName = icon.replace('local:', '')
    const svg = import.meta.glob('@/assets/svg-icons/*.svg', {
      query: '?raw',
      import: 'default',
      eager: true,
    })
    const target = svg[`/src/assets/svg-icons/${svgName}.svg`]
    innerIcon = h(Icon, { ...props, innerHTML: target })
  }
  else {
    innerIcon = h(Icon, props, { default: () => h(iconify.Icon, { icon }) })
  }

  return innerIcon
}
