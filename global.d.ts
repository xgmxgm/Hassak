type Messages = typeof import('./src/messages/ru.json')
type KzMessages = typeof import('./src/messages/kz.json')

declare interface IntlMessages extends Messages, KzMessages {}
