declare module 'nitropack' {
  interface NitroRuntimeHooks {
    'webhooks:call': (data: any) => void
    'telegram': (message: string, code?: object) => void
  }
}

export {}
