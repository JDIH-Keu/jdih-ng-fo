import { Category } from './category'
import { Media } from '../../post/models/media'

export class Page {
  PageId?: number
  Title?: string
  Description?: string
  CategoryId?: number
  UrlPath?: string
  Category?: Category
  LayoutType?: PageLayoutType
  ImageHeader?: Media
  _ImageHeader?: string
  Searchable?: boolean
  KeyValue?: string
  PageContent?: string
}

export enum PageLayoutType {
  Grid = 'grid',
  ListImage = 'list_image',
  ListText = 'list_text'
}

export const PageLayoutTypeMapping = {
  'grid': 'Grid', 'list_image': 'List Image', 'list_text': 'List Text'
}

export enum PageType {
  Berita = 'berita-page',
  HomePage = 'home-page',
  FAQ = 'faq',
  SiteMap = 'peta-situs-page'
}
