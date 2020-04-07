import { Constant } from './models/constant'
import { Media, MediaType } from '../main/post/models/media'



export class MediaHelper {
  public static getMediaLink(medias: Media[]) {
    let  result = ''
    for (const media of medias) {
      switch (media.Type) {
        case MediaType.Image:
          result += `<img src="${location.origin}/${MediaHelper.MediaPath(media)}"></img>`
          break
        default:
          result += `<a href="${location.origin}/${MediaHelper.MediaPath(media)}">${media.FileName}</a>`
          break
      }
    }
    return result
  }

  public static thumbPath(media: Media): string {
    let urlPath = ''
    if (media.Type === MediaType.Image) {
      urlPath =  `api/Medias/${media.MediaId}?type=thumb`
    } else if (media.Ext === '.pdf') {
      urlPath = `assets/images/pdf-icon.png`
    } else if (['.docx', '.doc', '.rtf'].indexOf(media.Ext) !== -1) {
      urlPath = `assets/images/word-icon.png`
    } else if (['.excell', '.xlsx', '.xlx'].indexOf(media.Ext) !== -1) {
      urlPath = `assets/images/excell-icon.png`
    } else if (media.Type === MediaType.Video) {
      urlPath = `assets/images/video-icon.png`
    } else {
      urlPath = Constant.brokenImage
    }
    return urlPath
  }

  public static MediaPath(media: Media): string {
    return `api/Medias/${media.MediaId}`
  }
}
