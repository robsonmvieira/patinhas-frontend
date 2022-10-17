import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset
} = createStitches({
  media: {
    bp1: '(max-width: 520px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 900px)',
    xl: '(min-width: 1200px)',
    xxl: '(max-width: 1800px)',

    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)'
  },
  theme: {
    colors: {
      backgroundLightMode: '#383a59',
      backgroundDarkMode: '#121214',
      white200: 'rgb(248, 248, 242)',
      gray300: 'rgb(68, 71, 90)',
      blue200: 'rgb(139, 233, 253)',
      purple200: 'rgb(189, 147, 249)',
      light: '#FFFFFF',
      'slate-50': '#F8FAFC',
      'slate-100': '#F1F5F9',
      'slate-200': '#E2E8F0',
      'slate-300': '#CBD5E1',
      'slate-400': '#94A3B8',
      'slate-500': '#64748B',
      'slate-600': '#475569',
      'slate-700': '#334155',
      'slate-800': '#1E293B',
      'slate-900': '#0F172A',
      'gray-50': '#F9FAFB',
      'gray-100': '#F3F4F6',
      'gray-200': '#E5E7EB',
      'gray-300': '#D1D5DB',
      'gray-400': '#9CA3AF',
      'gray-500': '#6B7280',
      'gray-600': '#4B5563',
      'gray-700': '#374151',
      'gray-800': '#1F2937',
      'gray-900': '#111827',
      'zinc-50': '#FAFAFA',
      'zinc-100': '#F4F4F5',
      'zinc-200': '#E4E4E7',
      'zinc-300': '#D4D4D8',
      'zinc-400': '#A1A1AA',
      'zinc-500': '#71717A',
      'zinc-600': '#52525B',
      'zinc-700': '#3F3F46',
      'zinc-800': '#27272A',
      'zinc-900': '#18181B',
      'neutral-50': '#FAFAFA',
      'neutral-100': '#F5F5F5',
      'neutral-200': '#E5E5E5',
      'neutral-300': '#D4D4D4',
      'neutral-400': '#A3A3A3',
      'neutral-500': '#737373',
      'neutral-600': '#525252',
      'neutral-700': '#404040',
      'neutral-800': '#262626',
      'neutral-900': '#171717',
      'stone-50': '#FAFAF9',
      'stone-100': '#F5F5F4',
      'stone-200': '#E7E5E4',
      'stone-300': '#D6D3D1',
      'stone-400': '#A8A29E',
      'stone-500': '#78716C',
      'stone-600': '#57534E',
      'stone-700': '#44403C',
      'stone-800': '#292524',
      'stone-900': '#1C1917',
      'red-50': '#FEF2F2',
      'red-100': '#FEE2E2',
      'red-200': '#FECACA',
      'red-300': '#FCA5A5',
      'red-400': '#F87171',
      'red-500': '#EF4444',
      'red-600': '#DC2626',
      'red-700': '#B91C1C',
      'red-800': '#991B1B',
      'red-900': '#7F1D1D',
      'oragange-50': '#FFF7ED',
      'oragange-100': '#FFEDD5',
      'oragange-200': '#FED7AA',
      'oragange-300': '#FDBA74',
      'oragange-400': '#FB923C',
      'oragange-500': '#F97316',
      'oragange-600': '#EA580C',
      'oragange-700': '#C2410C',
      'oragange-800': '#9A3412',
      'oragange-900': '#7C2D12',
      'amber-50': '#FFFBEB',
      'amber-100': '#FEF3C7',
      'amber-200': '#FDE68A',
      'amber-300': '#FCD34D',
      'amber-400': '#FBBF24',
      'amber-500': '#F59E0B',
      'amber-600': '#D97706',
      'amber-700': '#B45309',
      'amber-800': '#92400E',
      'amber-900': '#78350F',
      'yellow-50': '#FEFCE8',
      'yellow-100': '#FEF9C3',
      'yellow-200': '#FEF08A',
      'yellow-300': '#FDE047',
      'yellow-400': '#FACC15',
      'yellow-500': '#EAB308',
      'yellow-600': '#CA8A04',
      'yellow-700': '#A16207',
      'yellow-800': '#854D0E',
      'yellow-900': '#713F12',
      'lime-50': '#F7FEE7',
      'lime-100': '#ECFCCB',
      'lime-200': '#D9F99D',
      'lime-300': '#BEF264',
      'lime-400': '#A3E635',
      'lime-500': '#84CC16',
      'lime-600': '#65A30D',
      'lime-700': '#4D7C0F',
      'lime-800': '#3F6212',
      'lime-900': '#365314',
      'green-50': '#F0FDF4',
      'green-100': '#DCFCE7',
      'green-200': '#BBF7D0',
      'green-300': '#86EFAC',
      'green-400': '#4ADE80',
      'green-500': '#22C55E',
      'green-600': '#16A34A',
      'green-700': '#15803D',
      'green-800': '#166534',
      'green-900': '#14532D',
      'emerald-50': '#ECFDF5',
      'emerald-100': '#D1FAE5',
      'emerald-200': '#A7F3D0',
      'emerald-300': '#6EE7B7',
      'emerald-400': '#34D399',
      'emerald-500': '#10B981',
      'emerald-600': '#059669',
      'emerald-700': '#047857',
      'emerald-800': '#065F46',
      'emerald-900': '#064E3B',
      'teal-50': '#F0FDFA',
      'teal-100': '#CCFBF1',
      'teal-200': '#99F6E4',
      'teal-300': '#5EEAD4',
      'teal-400': '#2DD4BF',
      'teal-500': '#14B8A6',
      'teal-600': '#0D9488',
      'teal-700': '#0F766E',
      'teal-800': '#115E59',
      'teal-900': '#134E4A',
      'cyan-50': '#ECFEFF',
      'cyan-100': '#CFFAFE',
      'cyan-200': '#A5F3FC',
      'cyan-300': '#67E8F9',
      'cyan-400': '#22D3EE',
      'cyan-500': '#06B6D4',
      'cyan-600': '#0891B2',
      'cyan-700': '#0E7490',
      'cyan-800': '#155E75',
      'cyan-900': '#164E63',
      'sky-50': '#F0F9FF',
      'sky-100': '#E0F2FE',
      'sky-200': '#BAE6FD',
      'sky-300': '#7DD3FC',
      'sky-400': '#38BDF8',
      'sky-500': '#0EA5E9',
      'sky-600': '#0284C7',
      'sky-700': '#0369A1',
      'sky-800': '#075985',
      'sky-900': '#0C4A6E',
      'blue-50': '#EFF6FF',
      'blue-100': '#DBEAFE',
      'blue-200': '#BFDBFE',
      'blue-300': '#93C5FD',
      'blue-400': '#60A5FA',
      'blue-500': '#3B82F6',
      'blue-600': '#2563EB',
      'blue-700': '#1D4ED8',
      'blue-800': '#1E40AF',
      'blue-900': '#1E3A8A',
      'indigo-50': '#EEF2FF',
      'indigo-100': '#E0E7FF',
      'indigo-200': '#C7D2FE',
      'indigo-300': '#A5B4FC',
      'indigo-400': '#818CF8',
      'indigo-500': '#6366F1',
      'indigo-600': '#4F46E5',
      'indigo-700': '#4338CA',
      'indigo-800': '#3730A3',
      'indigo-900': '#312E81',
      'violet-50': '#F5F3FF',
      'violet-100': '#EDE9FE',
      'violet-200': '#DDD6FE',
      'violet-300': '#C4B5FD',
      'violet-400': '#A78BFA',
      'violet-500': '#8B5CF6',
      'violet-600': '#7C3AED',
      'violet-700': '#6D28D9',
      'violet-800': '#5B21B6',
      'violet-900': '#4C1D95',
      'purple-50': '#FAF5FF',
      'purple-100': '#F3E8FF',
      'purple-200': '#E9D5FF',
      'purple-300': '#D8B4FE',
      'purple-400': '#C084FC',
      'purple-500': '#A855F7',
      'purple-600': '#9333EA',
      'purple-700': '#7E22CE',
      'purple-800': '#6B21A8',
      'purple-900': '#581C87',
      'fuchsia-50': '#FDF4FF',
      'fuchsia-100': '#FAE8FF',
      'fuchsia-200': '#F5D0FE',
      'fuchsia-300': '#F0ABFC',
      'fuchsia-400': '#E879F9',
      'fuchsia-500': '#D946EF',
      'fuchsia-600': '#C026D3',
      'fuchsia-700': '#A21CAF',
      'fuchsia-800': '#86198F',
      'fuchsia-900': '#701A75',
      'pink-50': '#FDF2F8',
      'pink-100': '#FCE7F3',
      'pink-200': '#FBCFE8',
      'pink-300': '#F9A8D4',
      'pink-400': '#F472B6',
      'pink-500': '#EC4899',
      'pink-600': '#DB2777',
      'pink-700': '#BE185D',
      'pink-800': '#9D174D',
      'pink-900': '#831843',
      'rose-50': '#FFF1F2',
      'rose-100': '#FFE4E6',
      'rose-200': '#FECDD3',
      'rose-300': '#FDA4AF',
      'rose-400': '#FB7185',
      'rose-500': '#F43F5E',
      'rose-600': '#E11D48',
      'rose-700': '#BE123C',
      'rose-800': '#9F1239',
      'rose-900': '#881337'
    },

    space: {
      '1r': '1rem',
      '1.5r': '1.5rem',
      '2r': '2rem',
      '2.5r': '2.5rem',
      '3r': '3rem',
      '3.5r': '3.5rem',
      '4': '4rem',
      '4.5r': '4.5rem',
      '5r': '5rem',
      '5.5r': '5.5rem',
      '6r': '6rem',
      '6.5r': '6.5rem',
      '7r': '7rem',
      '7.5r': '7.5rem',
      '8r': '8rem',
      '8.5r': '8.5rem',
      '9r': '9rem',
      '9.5r': '9.5rem',
      '10r': '10rem',
      '10.5r': '10.5rem'
    },
    sizes: {
      1: '1rem',
      '1.25': '1.25rem',
      2: '2rem',
      3: '3rem',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px'
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px'
    }
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    })
  }
})

export type CSS = Stitches.CSS<typeof config>

export const darkTheme = createTheme('dark-theme', {})
