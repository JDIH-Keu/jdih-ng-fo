import { Media } from '../../post/models/media'

export class Album {
  AlbumId?: number
  Name?: string
  Desc?: string
  Thumbnail?: string
  CreatedAt: string
}

export class PhotoAlbum {
  PhotoAlbumId?: number
  AlbumId?: number
  MediaId?: string
  Album: Album[]
  Media: Media[]
}
