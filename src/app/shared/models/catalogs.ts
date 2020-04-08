import { Media } from './media';
import { RefSubyek } from './refrences';


export class Peraturan {
  PeraturanId?: string;
  Judul?: string;
  Nomor?: string;
  Tahun?: string;
  RefTypeId?: number;
  RefUniformId?: number;
  RefTajutId?: number;
  SubjekPeraturanJson?: RefSubyek[];
  SubjekPeraturan?: string;
  RefBidangHukumId?: number;
  TanggalPenetapan?: Date;
  TanggalPengundangan?: Date;
  TanggalMulaiBerlaku?: Date;
  TanggalSelesaiBerlaku?: Date;
  Ue1Pemrakarsa?: number;
  Kota?: string;
  Tags?: string;
  SiaranPers?: string;
  Bahasa?: string;
  Lokasi?: string;
  Status?: string;
  Role?: string;
  LampiranMedia?: Media;
  Lampiran?: string;
  ScopePublikasi?: string;
  MediaFileMedia?: Media[] = [];
  MediaFile?: string;
  FullTextMedia?: Media;
  FullTextPDF?: string;
  AbstarkMedia?: Media;
  AbstrakPDF?: string;
  CreatedBy?: string;
  CreatedDate?: Date;
  ModifiedBy?: string;
  ModifiedDate?: Date;
}

export class Putusan {
  PutusanPengadilanId?: string;
  Judul?: string;
  Nomor?: string;
  Tahun?: string;
  TipePutusan?: number;
  TajukPutusan?: number;
  SubjekPutusanJson?: RefSubyek[];
  SubjekPutusan?: string;
  RefBidangHukumId?: number;
  TanggalPengundangan?: Date;
  Penerbit?: string;
  TempatTerbit?: string;
  Sumber?: string;
  Bahasa?: string;
  Lokasi?: string;
  StatusPutusan?: string;
  Status?: string;
  Role?: string;
  LampiranMedia?: Media;
  Lampiran?: string;
  ScopePublikasi?: string;
  FullTextMedia?: Media;
  FullTextPDF?: string;
  CreatedBy?: string;
  CreatedDate?: Date;
  ModifiedBy?: string;
  ModifiedDate?: Date;
}

export class Artikel {
  ArtikelId?: string;
  Judul?: string;
  EdisiCetakan?: string;
  Penerbit?: string;
  TempatTerbit?: string;
  Sumber?: string;
  TanggalTerbit?: Date;
  TajukArtikel?: number;
  BentukArtikel?: number;
  SubjekArtikelJson?: RefSubyek[];
  SubjekArtikel?: string;
  RefBidangHukumId?: number;
  Bahasa?: string;
  Lokasi?: string;
  Status?: string;
  Role?: string;
  LampiranMedia?: Media;
  Lampiran?: string;
  ScopePublikasi?: string;
  CreatedBy?: string;
  CreatedDate?: Date;
  ModifiedBy?: string;
  ModifiedDate?: Date;
}

export class Monografi {
  MonografiHukumId?: string;
  Judul?: string;
  NomorPanggil?: string;
  EdisiCetakan?: string;
  Penerbit?: string;
  TempatTerbit?: string;
  DeskripsiFisik?: string;
  ISBN?: string;
  NomorIndukBuku?: string;
  TanggalTerbit?: Date;
  TajutHukum?: number;
  SubjekHukumJson?: RefSubyek[];
  SubjekHukum?: string;
  RefBidangHukumId?: number;
  Bahasa?: string;
  Lokasi?: string;
  Status?: string;
  Role?: string;
  LampiranMedia?: Media;
  Lampiran?: string;
  ScopePublikasi?: string;
  CreatedBy?: string;
  CreatedDate?: Date;
  ModifiedBy?: string;
  ModifiedDate?: Date;
}
