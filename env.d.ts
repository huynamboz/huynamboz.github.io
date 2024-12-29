declare module 'nitropack' {
  interface NitroRuntimeHooks {
    'webhooks': (data: any) => void
    'telegram': (message: string, code?: object) => void
  }
}

export {}
