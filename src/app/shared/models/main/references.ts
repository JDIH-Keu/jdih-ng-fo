export class RefTajuk {
  RefTajutId?: number
  RefTajutCodes?: string
  RefTajutNames?: string
  RefTajutSkt?: string
  RefTajutPj?: string
  RefUnitId?: number
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}

export class RefSeragam {
  RefUniformId?: number
  RefUniformCodes?: string
  RefUniformNames?: string
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}

export class RefBentuk {
  RefTypeId?: number
  RefTypeCodes?: string
  RefTypeNames?: string
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}

export class RefSubyek {
  RefSubjectId?: number
  RefSubjectCodes?: string
  RefSubjectNames?: string
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}

export class RefStatus {
  RefStatusId?: number
  RefStatusCodes?: string
  RefStatusNames?: string
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}

export class RefPeradilan {
  JenisPeradilanId?: number
  NamaPeradilan?: string
  SingkatanPeradilan?: string
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}

export class RefCluster {
  RefClusterId?: number
  RefClusterNames?: string
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}

export class RefFasilitas {
  RefFacilitiesId?: number
  RefFacilitiesNames?: string
  ParentId?: number
  Type?: string
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}

export class RefHukum {
  RefBidangHukumId?: number
  RefBidangHukumNames?: string
  CreatedBy?: string
  CreatedDate?: Date
  ModifiedBy?: string
  ModifiedDate?: Date
}
