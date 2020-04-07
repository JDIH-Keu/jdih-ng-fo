export class WebSetting {
  WebSettingId: number
  Name: string
  Value: string
  KeyValue: string
  CreatedBy: number

  public static get(key: string): string {
    const stringSetting = sessionStorage.getItem('web-setting') || ''
    const setting = JSON.parse(stringSetting)
    return  setting[key] ||  ''
  }

  public static getAll(): {[key: string]: string} {
    const stringSetting = sessionStorage.getItem('web-setting') || ''
    try {
      return JSON.parse(stringSetting).Value
    } catch (error) {
      return {}
    }
  }
}
