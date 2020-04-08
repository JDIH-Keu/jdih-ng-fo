export class Media {
  MediaId?: string
  FileName?: string
  Ext?: string
  Type?: string
  ThumbPath?: string
}

export enum MediaType {
  Image = 'image',
  Document = 'document',
  Video = 'video',
  Other = 'other',
  All = 'all'
}
