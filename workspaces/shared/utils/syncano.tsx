import { SYNCANO_PROJECT_INSTANCE } from '@shared/config'
import Syncano from '@syncano/client'

export function syncano(url: string, data?: object) {
  try {
    const s = new Syncano(SYNCANO_PROJECT_INSTANCE)
    const token = window.localStorage.getItem('token')

    s.setToken(token)

    return s.post(url, data)
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err)
  }

  return new Promise(() => {
    // tslint:disable-next-line:no-console
    console.error(
      `Syncano Client was used without instance name: ${url}`
    )
  })
}

export function syncanoKshTry(url: string) {
  try {
    const s = new Syncano(SYNCANO_PROJECT_INSTANCE)

    return s.get(url)
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err)
  }

  return new Promise(() => {
    // tslint:disable-next-line:no-console
    console.error(
      `Syncano Client was used without instance name: ${url}`
    )
  })
}
export function subscribe(
  url: string,
  data?: Object
): WebSocket {
  const s = new Syncano(SYNCANO_PROJECT_INSTANCE)
  const token = window.localStorage.getItem('token')

  return s.listen(url, { token, ...data })
}
