export declare namespace TelegramWebApp {
  interface Utils {
    sessionStorageGet: (key: string) => any
    sessionStorageSet: (key: string, value: any) => any
    urlAppendHashParams: (url: string, addHash: string) => any
    urlParseHashParams: (locationHash: string) => string
    urlParseQueryString: (queryString: string) => object
    urlSafeDecode: (urlencoded: string) => string
  }

  interface WebView {
    isIframe: boolean
    initParams: object
    callEventCallbacks: (eventType: string, func: Function) => void
    offEvent: (eventType: string, func: Function) => void
    onEvent: (eventType: string, func: Function) => void
    postEvent: (eventType: string, callback: Function, eventData: any) => void
    receiveEvent: (eventType: string, eventData: any) => void
  }

  type ImpactStyle = 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'
  type NotificationType = 'error' | 'success' | 'warning'

  interface BackButton {
    isVisible: boolean
    hide: () => void
    show: () => void
    onClick: (callback: Function) => void
    offClick: (callback: Function) => void
  }

  interface MainButtonParams {
    text?: string
    color?: string
    text_color?: string
    is_active?: boolean
    is_visible?: boolean
  }

  interface ThemeParams {
    bg_color?: string
    secondary_bg_color?: string
    text_color?: string
    hint_color?: string
    link_color?: string
    button_color?: string
    button_text_color?: string
  }

  interface PopupButton {
    id?: string | number
    type?: 'ok' | 'close' | 'cancel' | 'default' | 'destructive'
    text?: string
  }

  interface ShowPopupParams {
    title?: string
    message?: string
    buttons?: PopupButton[]
  }

  interface ShowQrPopupParams {
    text?: string
  }

  interface MainButton {
    color: string
    text: string
    textColor: string
    disable: () => MainButton
    enable: () => MainButton
    hide: () => MainButton
    show: () => MainButton
    hideProgress: () => void
    showProgress: (leaveActive: boolean) => MainButton
    isActive: boolean
    isVisible: boolean
    isProgressVisible: boolean
    offClick: (callback: Function) => MainButton
    onClick: (callback: Function) => MainButton
    setParams: (params: MainButtonParams) => MainButton
    setText: (text: string) => MainButton
  }

  interface HapticFeedback {
    impactOccurred: (style: ImpactStyle) => HapticFeedback
    notificationOccurred: (type: NotificationType) => HapticFeedback
    selectionChanged: () => HapticFeedback
  }

  interface CloudStorage {
    setItem: (key: string, value: any, callback: Function) => CloudStorage
    getItem: (key: string, callback: Function) => any
    getItems: (keys: any[], callback: Function) => CloudStorage
    removeItem: (key: string, callback: Function) => CloudStorage
    removeItems: (keys: any[], callback: Function) => CloudStorage
    getKeys: (callback: Function) => CloudStorage
  }

  interface WebAppUser {
    id?: number
    is_bot: boolean
    first_name: string
    last_name?: string
    usernames?: string
    language_code?: string
    photo_url?: string
  }

  interface InitData {
    query_id?: string
    user?: WebAppUser
    receiver?: WebAppUser
    start_param?: string
    auth_date?: number
    hash?: string
  }

  interface WebApp {
    initData: String
    initDataUnsafe: InitData

    themeParams: ThemeParams

    viewportHeight: number
    viewportStableHeight: number

    platform: string

    colorScheme: 'light' | 'dark'
    version: String
    backgroundColor: String
    headerColor: String

    CloudStorage?: CloudStorage

    BackButton: BackButton
    MainButton: MainButton
    HapticFeedback: HapticFeedback

    closeScanQrPopup: () => void
    disableClosingConfirmation: () => void
    enableClosingConfirmation: () => void

    setBackgroundColor: (color: string) => void
    setHeaderColor: (color_key: 'secondary_bg_color' | 'bg_colo') => void

    isVersionAtLeast: (ver: string) => boolean

    onEvent: (eventType: string, callback: Function) => void
    offEvent: (eventType: string, callback: Function) => void

    sendData: (data: any) => void
    switchInlineQuery: (
        query: string,
        choose_chat_types: 'users' | 'bots' | 'groups' | 'channels'
    ) => void

    openLink: (url: string, options: object) => void
    openTelegramLink: (url: string) => void
    openInvoice: (url: string, callback: Function) => void
    showPopup: (params: ShowPopupParams, callback: Function) => void
    showAlert: (message: string, callback: Function) => void
    showConfirm: (message: string, callback: Function) => void
    showScanQrPopup: (params: ShowQrPopupParams, callback: Function) => void
    readTextFromClipboard: (callback: Function) => void
    requestWriteAccess: (callback: Function) => void
    requestContact: (callback: Function) => void
    invokeCustomMethod: (method: string, params: object, callback: Function) => void
    ready: () => void
    expand: () => void
    close: () => void
  }

  interface Telegram {
    Utils: Utils
    WebApp: WebApp
    WebView: WebView
  }
}

declare global {
  interface Window {
    Telegram: TelegramWebApp.Telegram
  }
}
