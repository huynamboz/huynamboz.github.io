declare module 'nitropack' {
  interface NitroRuntimeHooks {
    'webhooks': (data: any) => void
    'telegram': (data: any) => void
  }
}

export {}
