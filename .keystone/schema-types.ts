type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserImageRelateToOneInput = {
  readonly create?: UserImageCreateInput | null;
  readonly connect?: UserImageWhereUniqueInput | null;
  readonly disconnect?: UserImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type LandHoldingRelateToOneInput = {
  readonly create?: LandHoldingCreateInput | null;
  readonly connect?: LandHoldingWhereUniqueInput | null;
  readonly disconnect?: LandHoldingWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CropRelateToOneInput = {
  readonly create?: CropCreateInput | null;
  readonly connect?: CropWhereUniqueInput | null;
  readonly disconnect?: CropWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type FertPestRelateToOneInput = {
  readonly create?: FertPestCreateInput | null;
  readonly connect?: FertPestWhereUniqueInput | null;
  readonly disconnect?: FertPestWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProducePlanRelateToOneInput = {
  readonly create?: ProducePlanCreateInput | null;
  readonly connect?: ProducePlanWhereUniqueInput | null;
  readonly disconnect?: ProducePlanWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type MarketingRelateToOneInput = {
  readonly create?: MarketingCreateInput | null;
  readonly connect?: MarketingWhereUniqueInput | null;
  readonly disconnect?: MarketingWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleRelateToOneInput = {
  readonly create?: RoleCreateInput | null;
  readonly connect?: RoleWhereUniqueInput | null;
  readonly disconnect?: RoleWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly age?: Scalars['Int'] | null;
  readonly age_not?: Scalars['Int'] | null;
  readonly age_lt?: Scalars['Int'] | null;
  readonly age_lte?: Scalars['Int'] | null;
  readonly age_gt?: Scalars['Int'] | null;
  readonly age_gte?: Scalars['Int'] | null;
  readonly age_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly age_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly gender?: Scalars['String'] | null;
  readonly gender_not?: Scalars['String'] | null;
  readonly gender_contains?: Scalars['String'] | null;
  readonly gender_not_contains?: Scalars['String'] | null;
  readonly gender_starts_with?: Scalars['String'] | null;
  readonly gender_not_starts_with?: Scalars['String'] | null;
  readonly gender_ends_with?: Scalars['String'] | null;
  readonly gender_not_ends_with?: Scalars['String'] | null;
  readonly gender_i?: Scalars['String'] | null;
  readonly gender_not_i?: Scalars['String'] | null;
  readonly gender_contains_i?: Scalars['String'] | null;
  readonly gender_not_contains_i?: Scalars['String'] | null;
  readonly gender_starts_with_i?: Scalars['String'] | null;
  readonly gender_not_starts_with_i?: Scalars['String'] | null;
  readonly gender_ends_with_i?: Scalars['String'] | null;
  readonly gender_not_ends_with_i?: Scalars['String'] | null;
  readonly gender_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly gender_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state?: Scalars['String'] | null;
  readonly state_not?: Scalars['String'] | null;
  readonly state_contains?: Scalars['String'] | null;
  readonly state_not_contains?: Scalars['String'] | null;
  readonly state_starts_with?: Scalars['String'] | null;
  readonly state_not_starts_with?: Scalars['String'] | null;
  readonly state_ends_with?: Scalars['String'] | null;
  readonly state_not_ends_with?: Scalars['String'] | null;
  readonly state_i?: Scalars['String'] | null;
  readonly state_not_i?: Scalars['String'] | null;
  readonly state_contains_i?: Scalars['String'] | null;
  readonly state_not_contains_i?: Scalars['String'] | null;
  readonly state_starts_with_i?: Scalars['String'] | null;
  readonly state_not_starts_with_i?: Scalars['String'] | null;
  readonly state_ends_with_i?: Scalars['String'] | null;
  readonly state_not_ends_with_i?: Scalars['String'] | null;
  readonly state_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly state_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly district?: Scalars['String'] | null;
  readonly district_not?: Scalars['String'] | null;
  readonly district_contains?: Scalars['String'] | null;
  readonly district_not_contains?: Scalars['String'] | null;
  readonly district_starts_with?: Scalars['String'] | null;
  readonly district_not_starts_with?: Scalars['String'] | null;
  readonly district_ends_with?: Scalars['String'] | null;
  readonly district_not_ends_with?: Scalars['String'] | null;
  readonly district_i?: Scalars['String'] | null;
  readonly district_not_i?: Scalars['String'] | null;
  readonly district_contains_i?: Scalars['String'] | null;
  readonly district_not_contains_i?: Scalars['String'] | null;
  readonly district_starts_with_i?: Scalars['String'] | null;
  readonly district_not_starts_with_i?: Scalars['String'] | null;
  readonly district_ends_with_i?: Scalars['String'] | null;
  readonly district_not_ends_with_i?: Scalars['String'] | null;
  readonly district_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly district_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block?: Scalars['String'] | null;
  readonly block_not?: Scalars['String'] | null;
  readonly block_contains?: Scalars['String'] | null;
  readonly block_not_contains?: Scalars['String'] | null;
  readonly block_starts_with?: Scalars['String'] | null;
  readonly block_not_starts_with?: Scalars['String'] | null;
  readonly block_ends_with?: Scalars['String'] | null;
  readonly block_not_ends_with?: Scalars['String'] | null;
  readonly block_i?: Scalars['String'] | null;
  readonly block_not_i?: Scalars['String'] | null;
  readonly block_contains_i?: Scalars['String'] | null;
  readonly block_not_contains_i?: Scalars['String'] | null;
  readonly block_starts_with_i?: Scalars['String'] | null;
  readonly block_not_starts_with_i?: Scalars['String'] | null;
  readonly block_ends_with_i?: Scalars['String'] | null;
  readonly block_not_ends_with_i?: Scalars['String'] | null;
  readonly block_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly block_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly panchayat?: Scalars['String'] | null;
  readonly panchayat_not?: Scalars['String'] | null;
  readonly panchayat_contains?: Scalars['String'] | null;
  readonly panchayat_not_contains?: Scalars['String'] | null;
  readonly panchayat_starts_with?: Scalars['String'] | null;
  readonly panchayat_not_starts_with?: Scalars['String'] | null;
  readonly panchayat_ends_with?: Scalars['String'] | null;
  readonly panchayat_not_ends_with?: Scalars['String'] | null;
  readonly panchayat_i?: Scalars['String'] | null;
  readonly panchayat_not_i?: Scalars['String'] | null;
  readonly panchayat_contains_i?: Scalars['String'] | null;
  readonly panchayat_not_contains_i?: Scalars['String'] | null;
  readonly panchayat_starts_with_i?: Scalars['String'] | null;
  readonly panchayat_not_starts_with_i?: Scalars['String'] | null;
  readonly panchayat_ends_with_i?: Scalars['String'] | null;
  readonly panchayat_not_ends_with_i?: Scalars['String'] | null;
  readonly panchayat_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly panchayat_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly village?: Scalars['String'] | null;
  readonly village_not?: Scalars['String'] | null;
  readonly village_contains?: Scalars['String'] | null;
  readonly village_not_contains?: Scalars['String'] | null;
  readonly village_starts_with?: Scalars['String'] | null;
  readonly village_not_starts_with?: Scalars['String'] | null;
  readonly village_ends_with?: Scalars['String'] | null;
  readonly village_not_ends_with?: Scalars['String'] | null;
  readonly village_i?: Scalars['String'] | null;
  readonly village_not_i?: Scalars['String'] | null;
  readonly village_contains_i?: Scalars['String'] | null;
  readonly village_not_contains_i?: Scalars['String'] | null;
  readonly village_starts_with_i?: Scalars['String'] | null;
  readonly village_not_starts_with_i?: Scalars['String'] | null;
  readonly village_ends_with_i?: Scalars['String'] | null;
  readonly village_not_ends_with_i?: Scalars['String'] | null;
  readonly village_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly village_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phone?: Scalars['String'] | null;
  readonly phone_not?: Scalars['String'] | null;
  readonly phone_contains?: Scalars['String'] | null;
  readonly phone_not_contains?: Scalars['String'] | null;
  readonly phone_starts_with?: Scalars['String'] | null;
  readonly phone_not_starts_with?: Scalars['String'] | null;
  readonly phone_ends_with?: Scalars['String'] | null;
  readonly phone_not_ends_with?: Scalars['String'] | null;
  readonly phone_i?: Scalars['String'] | null;
  readonly phone_not_i?: Scalars['String'] | null;
  readonly phone_contains_i?: Scalars['String'] | null;
  readonly phone_not_contains_i?: Scalars['String'] | null;
  readonly phone_starts_with_i?: Scalars['String'] | null;
  readonly phone_not_starts_with_i?: Scalars['String'] | null;
  readonly phone_ends_with_i?: Scalars['String'] | null;
  readonly phone_not_ends_with_i?: Scalars['String'] | null;
  readonly phone_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phone_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phone_verified?: Scalars['String'] | null;
  readonly phone_verified_not?: Scalars['String'] | null;
  readonly phone_verified_contains?: Scalars['String'] | null;
  readonly phone_verified_not_contains?: Scalars['String'] | null;
  readonly phone_verified_starts_with?: Scalars['String'] | null;
  readonly phone_verified_not_starts_with?: Scalars['String'] | null;
  readonly phone_verified_ends_with?: Scalars['String'] | null;
  readonly phone_verified_not_ends_with?: Scalars['String'] | null;
  readonly phone_verified_i?: Scalars['String'] | null;
  readonly phone_verified_not_i?: Scalars['String'] | null;
  readonly phone_verified_contains_i?: Scalars['String'] | null;
  readonly phone_verified_not_contains_i?: Scalars['String'] | null;
  readonly phone_verified_starts_with_i?: Scalars['String'] | null;
  readonly phone_verified_not_starts_with_i?: Scalars['String'] | null;
  readonly phone_verified_ends_with_i?: Scalars['String'] | null;
  readonly phone_verified_not_ends_with_i?: Scalars['String'] | null;
  readonly phone_verified_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly phone_verified_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly photo?: UserImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly landHolding?: LandHoldingWhereInput | null;
  readonly landHolding_is_null?: Scalars['Boolean'] | null;
  readonly crop?: CropWhereInput | null;
  readonly crop_is_null?: Scalars['Boolean'] | null;
  readonly fertPest?: FertPestWhereInput | null;
  readonly fertPest_is_null?: Scalars['Boolean'] | null;
  readonly producePlan?: ProducePlanWhereInput | null;
  readonly producePlan_is_null?: Scalars['Boolean'] | null;
  readonly marketing?: MarketingWhereInput | null;
  readonly marketing_is_null?: Scalars['Boolean'] | null;
  readonly role?: RoleWhereInput | null;
  readonly role_is_null?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'age_ASC'
  | 'age_DESC'
  | 'gender_ASC'
  | 'gender_DESC'
  | 'state_ASC'
  | 'state_DESC'
  | 'district_ASC'
  | 'district_DESC'
  | 'block_ASC'
  | 'block_DESC'
  | 'panchayat_ASC'
  | 'panchayat_DESC'
  | 'village_ASC'
  | 'village_DESC'
  | 'phone_ASC'
  | 'phone_DESC'
  | 'phone_verified_ASC'
  | 'phone_verified_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'landHolding_ASC'
  | 'landHolding_DESC'
  | 'crop_ASC'
  | 'crop_DESC'
  | 'fertPest_ASC'
  | 'fertPest_DESC'
  | 'producePlan_ASC'
  | 'producePlan_DESC'
  | 'marketing_ASC'
  | 'marketing_DESC'
  | 'role_ASC'
  | 'role_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly age?: Scalars['Int'] | null;
  readonly gender?: Scalars['String'] | null;
  readonly state?: Scalars['String'] | null;
  readonly district?: Scalars['String'] | null;
  readonly block?: Scalars['String'] | null;
  readonly panchayat?: Scalars['String'] | null;
  readonly village?: Scalars['String'] | null;
  readonly phone?: Scalars['String'] | null;
  readonly phone_verified?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly photo?: UserImageRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly fertPest?: FertPestRelateToOneInput | null;
  readonly producePlan?: ProducePlanRelateToOneInput | null;
  readonly marketing?: MarketingRelateToOneInput | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly age?: Scalars['Int'] | null;
  readonly gender?: Scalars['String'] | null;
  readonly state?: Scalars['String'] | null;
  readonly district?: Scalars['String'] | null;
  readonly block?: Scalars['String'] | null;
  readonly panchayat?: Scalars['String'] | null;
  readonly village?: Scalars['String'] | null;
  readonly phone?: Scalars['String'] | null;
  readonly phone_verified?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly photo?: UserImageRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly fertPest?: FertPestRelateToOneInput | null;
  readonly producePlan?: ProducePlanRelateToOneInput | null;
  readonly marketing?: MarketingRelateToOneInput | null;
  readonly role?: RoleRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type ProductImageRelateToOneInput = {
  readonly create?: ProductImageCreateInput | null;
  readonly connect?: ProductImageWhereUniqueInput | null;
  readonly disconnect?: ProductImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: ProductImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type ProductWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'price_ASC'
  | 'price_DESC';

export type ProductUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
};

export type ProductsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductUpdateInput | null;
};

export type ProductCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
};

export type ProductsCreateInput = {
  readonly data?: ProductCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type ProductRelateToOneInput = {
  readonly create?: ProductCreateInput | null;
  readonly connect?: ProductWhereUniqueInput | null;
  readonly disconnect?: ProductWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductImageWhereInput = {
  readonly AND?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
};

export type ProductImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type ProductImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductImageUpdateInput | null;
};

export type ProductImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesCreateInput = {
  readonly data?: ProductImageCreateInput | null;
};

export type CartItemWhereInput = {
  readonly AND?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly quantity_not?: Scalars['Int'] | null;
  readonly quantity_lt?: Scalars['Int'] | null;
  readonly quantity_lte?: Scalars['Int'] | null;
  readonly quantity_gt?: Scalars['Int'] | null;
  readonly quantity_gte?: Scalars['Int'] | null;
  readonly quantity_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly quantity_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
};

export type CartItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCartItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'quantity_ASC'
  | 'quantity_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type CartItemUpdateInput = {
  readonly quantity?: Scalars['Int'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type CartItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CartItemUpdateInput | null;
};

export type CartItemCreateInput = {
  readonly quantity?: Scalars['Int'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type CartItemsCreateInput = {
  readonly data?: CartItemCreateInput | null;
};

export type OrderRelateToOneInput = {
  readonly create?: OrderCreateInput | null;
  readonly connect?: OrderWhereUniqueInput | null;
  readonly disconnect?: OrderWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OrderItemWhereInput = {
  readonly AND?: ReadonlyArray<OrderItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<OrderItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: ProductImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly quantity_not?: Scalars['Int'] | null;
  readonly quantity_lt?: Scalars['Int'] | null;
  readonly quantity_lte?: Scalars['Int'] | null;
  readonly quantity_gt?: Scalars['Int'] | null;
  readonly quantity_gte?: Scalars['Int'] | null;
  readonly quantity_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly quantity_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly order?: OrderWhereInput | null;
  readonly order_is_null?: Scalars['Boolean'] | null;
};

export type OrderItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortOrderItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'quantity_ASC'
  | 'quantity_DESC'
  | 'order_ASC'
  | 'order_DESC';

export type OrderItemUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
  readonly price?: Scalars['Int'] | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly order?: OrderRelateToOneInput | null;
};

export type OrderItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: OrderItemUpdateInput | null;
};

export type OrderItemCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
  readonly price?: Scalars['Int'] | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly order?: OrderRelateToOneInput | null;
};

export type OrderItemsCreateInput = {
  readonly data?: OrderItemCreateInput | null;
};

export type OrderItemRelateToManyInput = {
  readonly create?: ReadonlyArray<OrderItemCreateInput | null> | null;
  readonly connect?: ReadonlyArray<OrderItemWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<OrderItemWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OrderWhereInput = {
  readonly AND?: ReadonlyArray<OrderWhereInput | null> | null;
  readonly OR?: ReadonlyArray<OrderWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly total?: Scalars['Int'] | null;
  readonly total_not?: Scalars['Int'] | null;
  readonly total_lt?: Scalars['Int'] | null;
  readonly total_lte?: Scalars['Int'] | null;
  readonly total_gt?: Scalars['Int'] | null;
  readonly total_gte?: Scalars['Int'] | null;
  readonly total_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly total_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly items_every?: OrderItemWhereInput | null;
  readonly items_some?: OrderItemWhereInput | null;
  readonly items_none?: OrderItemWhereInput | null;
  readonly charge?: Scalars['String'] | null;
  readonly charge_not?: Scalars['String'] | null;
  readonly charge_contains?: Scalars['String'] | null;
  readonly charge_not_contains?: Scalars['String'] | null;
  readonly charge_starts_with?: Scalars['String'] | null;
  readonly charge_not_starts_with?: Scalars['String'] | null;
  readonly charge_ends_with?: Scalars['String'] | null;
  readonly charge_not_ends_with?: Scalars['String'] | null;
  readonly charge_i?: Scalars['String'] | null;
  readonly charge_not_i?: Scalars['String'] | null;
  readonly charge_contains_i?: Scalars['String'] | null;
  readonly charge_not_contains_i?: Scalars['String'] | null;
  readonly charge_starts_with_i?: Scalars['String'] | null;
  readonly charge_not_starts_with_i?: Scalars['String'] | null;
  readonly charge_ends_with_i?: Scalars['String'] | null;
  readonly charge_not_ends_with_i?: Scalars['String'] | null;
  readonly charge_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly charge_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type OrderWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortOrdersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'total_ASC'
  | 'total_DESC'
  | 'items_ASC'
  | 'items_DESC'
  | 'charge_ASC'
  | 'charge_DESC';

export type OrderUpdateInput = {
  readonly total?: Scalars['Int'] | null;
  readonly items?: OrderItemRelateToManyInput | null;
  readonly charge?: Scalars['String'] | null;
};

export type OrdersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: OrderUpdateInput | null;
};

export type OrderCreateInput = {
  readonly total?: Scalars['Int'] | null;
  readonly items?: OrderItemRelateToManyInput | null;
  readonly charge?: Scalars['String'] | null;
};

export type OrdersCreateInput = {
  readonly data?: OrderCreateInput | null;
};

export type UserRelateToManyInput = {
  readonly create?: ReadonlyArray<UserCreateInput | null> | null;
  readonly connect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<UserWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RoleWhereInput = {
  readonly AND?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RoleWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canManageProducts_not?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers_not?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers_not?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageRoles_not?: Scalars['Boolean'] | null;
  readonly canManageCart?: Scalars['Boolean'] | null;
  readonly canManageCart_not?: Scalars['Boolean'] | null;
  readonly canManageOrders?: Scalars['Boolean'] | null;
  readonly canManageOrders_not?: Scalars['Boolean'] | null;
  readonly canManageCrops?: Scalars['Boolean'] | null;
  readonly canManageCrops_not?: Scalars['Boolean'] | null;
  readonly canManageLandHolding?: Scalars['Boolean'] | null;
  readonly canManageLandHolding_not?: Scalars['Boolean'] | null;
  readonly canManageUserImage?: Scalars['Boolean'] | null;
  readonly canManageUserImage_not?: Scalars['Boolean'] | null;
  readonly canManageSeed?: Scalars['Boolean'] | null;
  readonly canManageSeed_not?: Scalars['Boolean'] | null;
  readonly canManageFertPest?: Scalars['Boolean'] | null;
  readonly canManageFertPest_not?: Scalars['Boolean'] | null;
  readonly canManageProducePlan?: Scalars['Boolean'] | null;
  readonly canManageProducePlan_not?: Scalars['Boolean'] | null;
  readonly canManageMarketing?: Scalars['Boolean'] | null;
  readonly canManageMarketing_not?: Scalars['Boolean'] | null;
  readonly assignedTo_every?: UserWhereInput | null;
  readonly assignedTo_some?: UserWhereInput | null;
  readonly assignedTo_none?: UserWhereInput | null;
};

export type RoleWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRolesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'canManageProducts_ASC'
  | 'canManageProducts_DESC'
  | 'canSeeOtherUsers_ASC'
  | 'canSeeOtherUsers_DESC'
  | 'canManageUsers_ASC'
  | 'canManageUsers_DESC'
  | 'canManageRoles_ASC'
  | 'canManageRoles_DESC'
  | 'canManageCart_ASC'
  | 'canManageCart_DESC'
  | 'canManageOrders_ASC'
  | 'canManageOrders_DESC'
  | 'canManageCrops_ASC'
  | 'canManageCrops_DESC'
  | 'canManageLandHolding_ASC'
  | 'canManageLandHolding_DESC'
  | 'canManageUserImage_ASC'
  | 'canManageUserImage_DESC'
  | 'canManageSeed_ASC'
  | 'canManageSeed_DESC'
  | 'canManageFertPest_ASC'
  | 'canManageFertPest_DESC'
  | 'canManageProducePlan_ASC'
  | 'canManageProducePlan_DESC'
  | 'canManageMarketing_ASC'
  | 'canManageMarketing_DESC'
  | 'assignedTo_ASC'
  | 'assignedTo_DESC';

export type RoleUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageCart?: Scalars['Boolean'] | null;
  readonly canManageOrders?: Scalars['Boolean'] | null;
  readonly canManageCrops?: Scalars['Boolean'] | null;
  readonly canManageLandHolding?: Scalars['Boolean'] | null;
  readonly canManageUserImage?: Scalars['Boolean'] | null;
  readonly canManageSeed?: Scalars['Boolean'] | null;
  readonly canManageFertPest?: Scalars['Boolean'] | null;
  readonly canManageProducePlan?: Scalars['Boolean'] | null;
  readonly canManageMarketing?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RoleUpdateInput | null;
};

export type RoleCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly canManageProducts?: Scalars['Boolean'] | null;
  readonly canSeeOtherUsers?: Scalars['Boolean'] | null;
  readonly canManageUsers?: Scalars['Boolean'] | null;
  readonly canManageRoles?: Scalars['Boolean'] | null;
  readonly canManageCart?: Scalars['Boolean'] | null;
  readonly canManageOrders?: Scalars['Boolean'] | null;
  readonly canManageCrops?: Scalars['Boolean'] | null;
  readonly canManageLandHolding?: Scalars['Boolean'] | null;
  readonly canManageUserImage?: Scalars['Boolean'] | null;
  readonly canManageSeed?: Scalars['Boolean'] | null;
  readonly canManageFertPest?: Scalars['Boolean'] | null;
  readonly canManageProducePlan?: Scalars['Boolean'] | null;
  readonly canManageMarketing?: Scalars['Boolean'] | null;
  readonly assignedTo?: UserRelateToManyInput | null;
};

export type RolesCreateInput = {
  readonly data?: RoleCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserImageWhereInput = {
  readonly AND?: ReadonlyArray<UserImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
};

export type UserImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUserImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'user_ASC'
  | 'user_DESC';

export type UserImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
};

export type UserImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserImageUpdateInput | null;
};

export type UserImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
};

export type UserImagesCreateInput = {
  readonly data?: UserImageCreateInput | null;
};

export type SeedRelateToOneInput = {
  readonly create?: SeedCreateInput | null;
  readonly connect?: SeedWhereUniqueInput | null;
  readonly disconnect?: SeedWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type LandHoldingWhereInput = {
  readonly AND?: ReadonlyArray<LandHoldingWhereInput | null> | null;
  readonly OR?: ReadonlyArray<LandHoldingWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly land_acre_number?: Scalars['Int'] | null;
  readonly land_acre_number_not?: Scalars['Int'] | null;
  readonly land_acre_number_lt?: Scalars['Int'] | null;
  readonly land_acre_number_lte?: Scalars['Int'] | null;
  readonly land_acre_number_gt?: Scalars['Int'] | null;
  readonly land_acre_number_gte?: Scalars['Int'] | null;
  readonly land_acre_number_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly land_acre_number_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly land_acre_cultivable?: Scalars['Int'] | null;
  readonly land_acre_cultivable_not?: Scalars['Int'] | null;
  readonly land_acre_cultivable_lt?: Scalars['Int'] | null;
  readonly land_acre_cultivable_lte?: Scalars['Int'] | null;
  readonly land_acre_cultivable_gt?: Scalars['Int'] | null;
  readonly land_acre_cultivable_gte?: Scalars['Int'] | null;
  readonly land_acre_cultivable_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly land_acre_cultivable_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly land_acre_irrigation?: Scalars['Int'] | null;
  readonly land_acre_irrigation_not?: Scalars['Int'] | null;
  readonly land_acre_irrigation_lt?: Scalars['Int'] | null;
  readonly land_acre_irrigation_lte?: Scalars['Int'] | null;
  readonly land_acre_irrigation_gt?: Scalars['Int'] | null;
  readonly land_acre_irrigation_gte?: Scalars['Int'] | null;
  readonly land_acre_irrigation_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly land_acre_irrigation_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly land_irrigation_type?: Scalars['String'] | null;
  readonly land_irrigation_type_not?: Scalars['String'] | null;
  readonly land_irrigation_type_contains?: Scalars['String'] | null;
  readonly land_irrigation_type_not_contains?: Scalars['String'] | null;
  readonly land_irrigation_type_starts_with?: Scalars['String'] | null;
  readonly land_irrigation_type_not_starts_with?: Scalars['String'] | null;
  readonly land_irrigation_type_ends_with?: Scalars['String'] | null;
  readonly land_irrigation_type_not_ends_with?: Scalars['String'] | null;
  readonly land_irrigation_type_i?: Scalars['String'] | null;
  readonly land_irrigation_type_not_i?: Scalars['String'] | null;
  readonly land_irrigation_type_contains_i?: Scalars['String'] | null;
  readonly land_irrigation_type_not_contains_i?: Scalars['String'] | null;
  readonly land_irrigation_type_starts_with_i?: Scalars['String'] | null;
  readonly land_irrigation_type_not_starts_with_i?: Scalars['String'] | null;
  readonly land_irrigation_type_ends_with_i?: Scalars['String'] | null;
  readonly land_irrigation_type_not_ends_with_i?: Scalars['String'] | null;
  readonly land_irrigation_type_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly land_irrigation_type_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly crop?: CropWhereInput | null;
  readonly crop_is_null?: Scalars['Boolean'] | null;
  readonly seed?: SeedWhereInput | null;
  readonly seed_is_null?: Scalars['Boolean'] | null;
  readonly fertPest?: FertPestWhereInput | null;
  readonly fertPest_is_null?: Scalars['Boolean'] | null;
  readonly producePlan?: ProducePlanWhereInput | null;
  readonly producePlan_is_null?: Scalars['Boolean'] | null;
  readonly marketing?: MarketingWhereInput | null;
  readonly marketing_is_null?: Scalars['Boolean'] | null;
};

export type LandHoldingWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortLandHoldingsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'land_acre_number_ASC'
  | 'land_acre_number_DESC'
  | 'land_acre_cultivable_ASC'
  | 'land_acre_cultivable_DESC'
  | 'land_acre_irrigation_ASC'
  | 'land_acre_irrigation_DESC'
  | 'land_irrigation_type_ASC'
  | 'land_irrigation_type_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'crop_ASC'
  | 'crop_DESC'
  | 'seed_ASC'
  | 'seed_DESC'
  | 'fertPest_ASC'
  | 'fertPest_DESC'
  | 'producePlan_ASC'
  | 'producePlan_DESC'
  | 'marketing_ASC'
  | 'marketing_DESC';

export type LandHoldingUpdateInput = {
  readonly land_acre_number?: Scalars['Int'] | null;
  readonly land_acre_cultivable?: Scalars['Int'] | null;
  readonly land_acre_irrigation?: Scalars['Int'] | null;
  readonly land_irrigation_type?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly seed?: SeedRelateToOneInput | null;
  readonly fertPest?: FertPestRelateToOneInput | null;
  readonly producePlan?: ProducePlanRelateToOneInput | null;
  readonly marketing?: MarketingRelateToOneInput | null;
};

export type LandHoldingsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: LandHoldingUpdateInput | null;
};

export type LandHoldingCreateInput = {
  readonly land_acre_number?: Scalars['Int'] | null;
  readonly land_acre_cultivable?: Scalars['Int'] | null;
  readonly land_acre_irrigation?: Scalars['Int'] | null;
  readonly land_irrigation_type?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly seed?: SeedRelateToOneInput | null;
  readonly fertPest?: FertPestRelateToOneInput | null;
  readonly producePlan?: ProducePlanRelateToOneInput | null;
  readonly marketing?: MarketingRelateToOneInput | null;
};

export type LandHoldingsCreateInput = {
  readonly data?: LandHoldingCreateInput | null;
};

export type CropWhereInput = {
  readonly AND?: ReadonlyArray<CropWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CropWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly season_type?: Scalars['String'] | null;
  readonly season_type_not?: Scalars['String'] | null;
  readonly season_type_contains?: Scalars['String'] | null;
  readonly season_type_not_contains?: Scalars['String'] | null;
  readonly season_type_starts_with?: Scalars['String'] | null;
  readonly season_type_not_starts_with?: Scalars['String'] | null;
  readonly season_type_ends_with?: Scalars['String'] | null;
  readonly season_type_not_ends_with?: Scalars['String'] | null;
  readonly season_type_i?: Scalars['String'] | null;
  readonly season_type_not_i?: Scalars['String'] | null;
  readonly season_type_contains_i?: Scalars['String'] | null;
  readonly season_type_not_contains_i?: Scalars['String'] | null;
  readonly season_type_starts_with_i?: Scalars['String'] | null;
  readonly season_type_not_starts_with_i?: Scalars['String'] | null;
  readonly season_type_ends_with_i?: Scalars['String'] | null;
  readonly season_type_not_ends_with_i?: Scalars['String'] | null;
  readonly season_type_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly season_type_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly crop_name?: Scalars['String'] | null;
  readonly crop_name_not?: Scalars['String'] | null;
  readonly crop_name_contains?: Scalars['String'] | null;
  readonly crop_name_not_contains?: Scalars['String'] | null;
  readonly crop_name_starts_with?: Scalars['String'] | null;
  readonly crop_name_not_starts_with?: Scalars['String'] | null;
  readonly crop_name_ends_with?: Scalars['String'] | null;
  readonly crop_name_not_ends_with?: Scalars['String'] | null;
  readonly crop_name_i?: Scalars['String'] | null;
  readonly crop_name_not_i?: Scalars['String'] | null;
  readonly crop_name_contains_i?: Scalars['String'] | null;
  readonly crop_name_not_contains_i?: Scalars['String'] | null;
  readonly crop_name_starts_with_i?: Scalars['String'] | null;
  readonly crop_name_not_starts_with_i?: Scalars['String'] | null;
  readonly crop_name_ends_with_i?: Scalars['String'] | null;
  readonly crop_name_not_ends_with_i?: Scalars['String'] | null;
  readonly crop_name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly crop_name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly land_acre_used?: Scalars['Int'] | null;
  readonly land_acre_used_not?: Scalars['Int'] | null;
  readonly land_acre_used_lt?: Scalars['Int'] | null;
  readonly land_acre_used_lte?: Scalars['Int'] | null;
  readonly land_acre_used_gt?: Scalars['Int'] | null;
  readonly land_acre_used_gte?: Scalars['Int'] | null;
  readonly land_acre_used_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly land_acre_used_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly average_yeild_per_acre?: Scalars['String'] | null;
  readonly average_yeild_per_acre_not?: Scalars['String'] | null;
  readonly average_yeild_per_acre_contains?: Scalars['String'] | null;
  readonly average_yeild_per_acre_not_contains?: Scalars['String'] | null;
  readonly average_yeild_per_acre_starts_with?: Scalars['String'] | null;
  readonly average_yeild_per_acre_not_starts_with?: Scalars['String'] | null;
  readonly average_yeild_per_acre_ends_with?: Scalars['String'] | null;
  readonly average_yeild_per_acre_not_ends_with?: Scalars['String'] | null;
  readonly average_yeild_per_acre_i?: Scalars['String'] | null;
  readonly average_yeild_per_acre_not_i?: Scalars['String'] | null;
  readonly average_yeild_per_acre_contains_i?: Scalars['String'] | null;
  readonly average_yeild_per_acre_not_contains_i?: Scalars['String'] | null;
  readonly average_yeild_per_acre_starts_with_i?: Scalars['String'] | null;
  readonly average_yeild_per_acre_not_starts_with_i?: Scalars['String'] | null;
  readonly average_yeild_per_acre_ends_with_i?: Scalars['String'] | null;
  readonly average_yeild_per_acre_not_ends_with_i?: Scalars['String'] | null;
  readonly average_yeild_per_acre_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly average_yeild_per_acre_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly new_crop_planned?: Scalars['String'] | null;
  readonly new_crop_planned_not?: Scalars['String'] | null;
  readonly new_crop_planned_contains?: Scalars['String'] | null;
  readonly new_crop_planned_not_contains?: Scalars['String'] | null;
  readonly new_crop_planned_starts_with?: Scalars['String'] | null;
  readonly new_crop_planned_not_starts_with?: Scalars['String'] | null;
  readonly new_crop_planned_ends_with?: Scalars['String'] | null;
  readonly new_crop_planned_not_ends_with?: Scalars['String'] | null;
  readonly new_crop_planned_i?: Scalars['String'] | null;
  readonly new_crop_planned_not_i?: Scalars['String'] | null;
  readonly new_crop_planned_contains_i?: Scalars['String'] | null;
  readonly new_crop_planned_not_contains_i?: Scalars['String'] | null;
  readonly new_crop_planned_starts_with_i?: Scalars['String'] | null;
  readonly new_crop_planned_not_starts_with_i?: Scalars['String'] | null;
  readonly new_crop_planned_ends_with_i?: Scalars['String'] | null;
  readonly new_crop_planned_not_ends_with_i?: Scalars['String'] | null;
  readonly new_crop_planned_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly new_crop_planned_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly seed?: SeedWhereInput | null;
  readonly seed_is_null?: Scalars['Boolean'] | null;
  readonly landHolding?: LandHoldingWhereInput | null;
  readonly landHolding_is_null?: Scalars['Boolean'] | null;
  readonly fertPest?: FertPestWhereInput | null;
  readonly fertPest_is_null?: Scalars['Boolean'] | null;
  readonly producePlan?: ProducePlanWhereInput | null;
  readonly producePlan_is_null?: Scalars['Boolean'] | null;
  readonly marketing?: MarketingWhereInput | null;
  readonly marketing_is_null?: Scalars['Boolean'] | null;
};

export type CropWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCropsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'season_type_ASC'
  | 'season_type_DESC'
  | 'crop_name_ASC'
  | 'crop_name_DESC'
  | 'land_acre_used_ASC'
  | 'land_acre_used_DESC'
  | 'average_yeild_per_acre_ASC'
  | 'average_yeild_per_acre_DESC'
  | 'new_crop_planned_ASC'
  | 'new_crop_planned_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'seed_ASC'
  | 'seed_DESC'
  | 'landHolding_ASC'
  | 'landHolding_DESC'
  | 'fertPest_ASC'
  | 'fertPest_DESC'
  | 'producePlan_ASC'
  | 'producePlan_DESC'
  | 'marketing_ASC'
  | 'marketing_DESC';

export type CropUpdateInput = {
  readonly season_type?: Scalars['String'] | null;
  readonly crop_name?: Scalars['String'] | null;
  readonly land_acre_used?: Scalars['Int'] | null;
  readonly average_yeild_per_acre?: Scalars['String'] | null;
  readonly new_crop_planned?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly seed?: SeedRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly fertPest?: FertPestRelateToOneInput | null;
  readonly producePlan?: ProducePlanRelateToOneInput | null;
  readonly marketing?: MarketingRelateToOneInput | null;
};

export type CropsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CropUpdateInput | null;
};

export type CropCreateInput = {
  readonly season_type?: Scalars['String'] | null;
  readonly crop_name?: Scalars['String'] | null;
  readonly land_acre_used?: Scalars['Int'] | null;
  readonly average_yeild_per_acre?: Scalars['String'] | null;
  readonly new_crop_planned?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly seed?: SeedRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly fertPest?: FertPestRelateToOneInput | null;
  readonly producePlan?: ProducePlanRelateToOneInput | null;
  readonly marketing?: MarketingRelateToOneInput | null;
};

export type CropsCreateInput = {
  readonly data?: CropCreateInput | null;
};

export type SeedWhereInput = {
  readonly AND?: ReadonlyArray<SeedWhereInput | null> | null;
  readonly OR?: ReadonlyArray<SeedWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly seed_total_acre?: Scalars['String'] | null;
  readonly seed_total_acre_not?: Scalars['String'] | null;
  readonly seed_total_acre_contains?: Scalars['String'] | null;
  readonly seed_total_acre_not_contains?: Scalars['String'] | null;
  readonly seed_total_acre_starts_with?: Scalars['String'] | null;
  readonly seed_total_acre_not_starts_with?: Scalars['String'] | null;
  readonly seed_total_acre_ends_with?: Scalars['String'] | null;
  readonly seed_total_acre_not_ends_with?: Scalars['String'] | null;
  readonly seed_total_acre_i?: Scalars['String'] | null;
  readonly seed_total_acre_not_i?: Scalars['String'] | null;
  readonly seed_total_acre_contains_i?: Scalars['String'] | null;
  readonly seed_total_acre_not_contains_i?: Scalars['String'] | null;
  readonly seed_total_acre_starts_with_i?: Scalars['String'] | null;
  readonly seed_total_acre_not_starts_with_i?: Scalars['String'] | null;
  readonly seed_total_acre_ends_with_i?: Scalars['String'] | null;
  readonly seed_total_acre_not_ends_with_i?: Scalars['String'] | null;
  readonly seed_total_acre_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly seed_total_acre_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly seed_source_type?: Scalars['String'] | null;
  readonly seed_source_type_not?: Scalars['String'] | null;
  readonly seed_source_type_contains?: Scalars['String'] | null;
  readonly seed_source_type_not_contains?: Scalars['String'] | null;
  readonly seed_source_type_starts_with?: Scalars['String'] | null;
  readonly seed_source_type_not_starts_with?: Scalars['String'] | null;
  readonly seed_source_type_ends_with?: Scalars['String'] | null;
  readonly seed_source_type_not_ends_with?: Scalars['String'] | null;
  readonly seed_source_type_i?: Scalars['String'] | null;
  readonly seed_source_type_not_i?: Scalars['String'] | null;
  readonly seed_source_type_contains_i?: Scalars['String'] | null;
  readonly seed_source_type_not_contains_i?: Scalars['String'] | null;
  readonly seed_source_type_starts_with_i?: Scalars['String'] | null;
  readonly seed_source_type_not_starts_with_i?: Scalars['String'] | null;
  readonly seed_source_type_ends_with_i?: Scalars['String'] | null;
  readonly seed_source_type_not_ends_with_i?: Scalars['String'] | null;
  readonly seed_source_type_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly seed_source_type_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly landHolding?: LandHoldingWhereInput | null;
  readonly landHolding_is_null?: Scalars['Boolean'] | null;
  readonly crop?: CropWhereInput | null;
  readonly crop_is_null?: Scalars['Boolean'] | null;
  readonly fertPest?: FertPestWhereInput | null;
  readonly fertPest_is_null?: Scalars['Boolean'] | null;
};

export type SeedWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortSeedsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'seed_total_acre_ASC'
  | 'seed_total_acre_DESC'
  | 'seed_source_type_ASC'
  | 'seed_source_type_DESC'
  | 'landHolding_ASC'
  | 'landHolding_DESC'
  | 'crop_ASC'
  | 'crop_DESC'
  | 'fertPest_ASC'
  | 'fertPest_DESC';

export type SeedUpdateInput = {
  readonly seed_total_acre?: Scalars['String'] | null;
  readonly seed_source_type?: Scalars['String'] | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly fertPest?: FertPestRelateToOneInput | null;
};

export type SeedsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: SeedUpdateInput | null;
};

export type SeedCreateInput = {
  readonly seed_total_acre?: Scalars['String'] | null;
  readonly seed_source_type?: Scalars['String'] | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly fertPest?: FertPestRelateToOneInput | null;
};

export type SeedsCreateInput = {
  readonly data?: SeedCreateInput | null;
};

export type FertPestWhereInput = {
  readonly AND?: ReadonlyArray<FertPestWhereInput | null> | null;
  readonly OR?: ReadonlyArray<FertPestWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly dap_total_acre_crop?: Scalars['Int'] | null;
  readonly dap_total_acre_crop_not?: Scalars['Int'] | null;
  readonly dap_total_acre_crop_lt?: Scalars['Int'] | null;
  readonly dap_total_acre_crop_lte?: Scalars['Int'] | null;
  readonly dap_total_acre_crop_gt?: Scalars['Int'] | null;
  readonly dap_total_acre_crop_gte?: Scalars['Int'] | null;
  readonly dap_total_acre_crop_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly dap_total_acre_crop_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly urea_total_acre_crop?: Scalars['Int'] | null;
  readonly urea_total_acre_crop_not?: Scalars['Int'] | null;
  readonly urea_total_acre_crop_lt?: Scalars['Int'] | null;
  readonly urea_total_acre_crop_lte?: Scalars['Int'] | null;
  readonly urea_total_acre_crop_gt?: Scalars['Int'] | null;
  readonly urea_total_acre_crop_gte?: Scalars['Int'] | null;
  readonly urea_total_acre_crop_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly urea_total_acre_crop_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly other_total_acre_crop?: Scalars['Int'] | null;
  readonly other_total_acre_crop_not?: Scalars['Int'] | null;
  readonly other_total_acre_crop_lt?: Scalars['Int'] | null;
  readonly other_total_acre_crop_lte?: Scalars['Int'] | null;
  readonly other_total_acre_crop_gt?: Scalars['Int'] | null;
  readonly other_total_acre_crop_gte?: Scalars['Int'] | null;
  readonly other_total_acre_crop_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly other_total_acre_crop_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly pesticide_total_crop?: Scalars['Int'] | null;
  readonly pesticide_total_crop_not?: Scalars['Int'] | null;
  readonly pesticide_total_crop_lt?: Scalars['Int'] | null;
  readonly pesticide_total_crop_lte?: Scalars['Int'] | null;
  readonly pesticide_total_crop_gt?: Scalars['Int'] | null;
  readonly pesticide_total_crop_gte?: Scalars['Int'] | null;
  readonly pesticide_total_crop_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly pesticide_total_crop_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly herbicide_total_acre_crop?: Scalars['Int'] | null;
  readonly herbicide_total_acre_crop_not?: Scalars['Int'] | null;
  readonly herbicide_total_acre_crop_lt?: Scalars['Int'] | null;
  readonly herbicide_total_acre_crop_lte?: Scalars['Int'] | null;
  readonly herbicide_total_acre_crop_gt?: Scalars['Int'] | null;
  readonly herbicide_total_acre_crop_gte?: Scalars['Int'] | null;
  readonly herbicide_total_acre_crop_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly herbicide_total_acre_crop_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly source_type?: Scalars['String'] | null;
  readonly source_type_not?: Scalars['String'] | null;
  readonly source_type_contains?: Scalars['String'] | null;
  readonly source_type_not_contains?: Scalars['String'] | null;
  readonly source_type_starts_with?: Scalars['String'] | null;
  readonly source_type_not_starts_with?: Scalars['String'] | null;
  readonly source_type_ends_with?: Scalars['String'] | null;
  readonly source_type_not_ends_with?: Scalars['String'] | null;
  readonly source_type_i?: Scalars['String'] | null;
  readonly source_type_not_i?: Scalars['String'] | null;
  readonly source_type_contains_i?: Scalars['String'] | null;
  readonly source_type_not_contains_i?: Scalars['String'] | null;
  readonly source_type_starts_with_i?: Scalars['String'] | null;
  readonly source_type_not_starts_with_i?: Scalars['String'] | null;
  readonly source_type_ends_with_i?: Scalars['String'] | null;
  readonly source_type_not_ends_with_i?: Scalars['String'] | null;
  readonly source_type_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly source_type_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly landHolding?: LandHoldingWhereInput | null;
  readonly landHolding_is_null?: Scalars['Boolean'] | null;
  readonly crop?: CropWhereInput | null;
  readonly crop_is_null?: Scalars['Boolean'] | null;
  readonly seed?: SeedWhereInput | null;
  readonly seed_is_null?: Scalars['Boolean'] | null;
};

export type FertPestWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortFertPestsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'dap_total_acre_crop_ASC'
  | 'dap_total_acre_crop_DESC'
  | 'urea_total_acre_crop_ASC'
  | 'urea_total_acre_crop_DESC'
  | 'other_total_acre_crop_ASC'
  | 'other_total_acre_crop_DESC'
  | 'pesticide_total_crop_ASC'
  | 'pesticide_total_crop_DESC'
  | 'herbicide_total_acre_crop_ASC'
  | 'herbicide_total_acre_crop_DESC'
  | 'source_type_ASC'
  | 'source_type_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'landHolding_ASC'
  | 'landHolding_DESC'
  | 'crop_ASC'
  | 'crop_DESC'
  | 'seed_ASC'
  | 'seed_DESC';

export type FertPestUpdateInput = {
  readonly dap_total_acre_crop?: Scalars['Int'] | null;
  readonly urea_total_acre_crop?: Scalars['Int'] | null;
  readonly other_total_acre_crop?: Scalars['Int'] | null;
  readonly pesticide_total_crop?: Scalars['Int'] | null;
  readonly herbicide_total_acre_crop?: Scalars['Int'] | null;
  readonly source_type?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly seed?: SeedRelateToOneInput | null;
};

export type FertPestsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: FertPestUpdateInput | null;
};

export type FertPestCreateInput = {
  readonly dap_total_acre_crop?: Scalars['Int'] | null;
  readonly urea_total_acre_crop?: Scalars['Int'] | null;
  readonly other_total_acre_crop?: Scalars['Int'] | null;
  readonly pesticide_total_crop?: Scalars['Int'] | null;
  readonly herbicide_total_acre_crop?: Scalars['Int'] | null;
  readonly source_type?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly seed?: SeedRelateToOneInput | null;
};

export type FertPestsCreateInput = {
  readonly data?: FertPestCreateInput | null;
};

export type ProducePlanWhereInput = {
  readonly AND?: ReadonlyArray<ProducePlanWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProducePlanWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly percentage_consumption?: Scalars['Int'] | null;
  readonly percentage_consumption_not?: Scalars['Int'] | null;
  readonly percentage_consumption_lt?: Scalars['Int'] | null;
  readonly percentage_consumption_lte?: Scalars['Int'] | null;
  readonly percentage_consumption_gt?: Scalars['Int'] | null;
  readonly percentage_consumption_gte?: Scalars['Int'] | null;
  readonly percentage_consumption_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly percentage_consumption_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly percent_sale_raw?: Scalars['Int'] | null;
  readonly percent_sale_raw_not?: Scalars['Int'] | null;
  readonly percent_sale_raw_lt?: Scalars['Int'] | null;
  readonly percent_sale_raw_lte?: Scalars['Int'] | null;
  readonly percent_sale_raw_gt?: Scalars['Int'] | null;
  readonly percent_sale_raw_gte?: Scalars['Int'] | null;
  readonly percent_sale_raw_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly percent_sale_raw_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly percentage_sale_primary_processed?: Scalars['Int'] | null;
  readonly percentage_sale_primary_processed_not?: Scalars['Int'] | null;
  readonly percentage_sale_primary_processed_lt?: Scalars['Int'] | null;
  readonly percentage_sale_primary_processed_lte?: Scalars['Int'] | null;
  readonly percentage_sale_primary_processed_gt?: Scalars['Int'] | null;
  readonly percentage_sale_primary_processed_gte?: Scalars['Int'] | null;
  readonly percentage_sale_primary_processed_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly percentage_sale_primary_processed_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly percentage_seed?: Scalars['Int'] | null;
  readonly percentage_seed_not?: Scalars['Int'] | null;
  readonly percentage_seed_lt?: Scalars['Int'] | null;
  readonly percentage_seed_lte?: Scalars['Int'] | null;
  readonly percentage_seed_gt?: Scalars['Int'] | null;
  readonly percentage_seed_gte?: Scalars['Int'] | null;
  readonly percentage_seed_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly percentage_seed_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly primary_processing_types?: Scalars['String'] | null;
  readonly primary_processing_types_not?: Scalars['String'] | null;
  readonly primary_processing_types_contains?: Scalars['String'] | null;
  readonly primary_processing_types_not_contains?: Scalars['String'] | null;
  readonly primary_processing_types_starts_with?: Scalars['String'] | null;
  readonly primary_processing_types_not_starts_with?: Scalars['String'] | null;
  readonly primary_processing_types_ends_with?: Scalars['String'] | null;
  readonly primary_processing_types_not_ends_with?: Scalars['String'] | null;
  readonly primary_processing_types_i?: Scalars['String'] | null;
  readonly primary_processing_types_not_i?: Scalars['String'] | null;
  readonly primary_processing_types_contains_i?: Scalars['String'] | null;
  readonly primary_processing_types_not_contains_i?: Scalars['String'] | null;
  readonly primary_processing_types_starts_with_i?: Scalars['String'] | null;
  readonly primary_processing_types_not_starts_with_i?:
    | Scalars['String']
    | null;
  readonly primary_processing_types_ends_with_i?: Scalars['String'] | null;
  readonly primary_processing_types_not_ends_with_i?: Scalars['String'] | null;
  readonly primary_processing_types_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly primary_processing_types_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly primary_processing_products?: Scalars['String'] | null;
  readonly primary_processing_products_not?: Scalars['String'] | null;
  readonly primary_processing_products_contains?: Scalars['String'] | null;
  readonly primary_processing_products_not_contains?: Scalars['String'] | null;
  readonly primary_processing_products_starts_with?: Scalars['String'] | null;
  readonly primary_processing_products_not_starts_with?:
    | Scalars['String']
    | null;
  readonly primary_processing_products_ends_with?: Scalars['String'] | null;
  readonly primary_processing_products_not_ends_with?: Scalars['String'] | null;
  readonly primary_processing_products_i?: Scalars['String'] | null;
  readonly primary_processing_products_not_i?: Scalars['String'] | null;
  readonly primary_processing_products_contains_i?: Scalars['String'] | null;
  readonly primary_processing_products_not_contains_i?:
    | Scalars['String']
    | null;
  readonly primary_processing_products_starts_with_i?: Scalars['String'] | null;
  readonly primary_processing_products_not_starts_with_i?:
    | Scalars['String']
    | null;
  readonly primary_processing_products_ends_with_i?: Scalars['String'] | null;
  readonly primary_processing_products_not_ends_with_i?:
    | Scalars['String']
    | null;
  readonly primary_processing_products_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly primary_processing_products_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly landHolding?: LandHoldingWhereInput | null;
  readonly landHolding_is_null?: Scalars['Boolean'] | null;
  readonly crop?: CropWhereInput | null;
  readonly crop_is_null?: Scalars['Boolean'] | null;
  readonly marketing?: MarketingWhereInput | null;
  readonly marketing_is_null?: Scalars['Boolean'] | null;
};

export type ProducePlanWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProducePlansBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'percentage_consumption_ASC'
  | 'percentage_consumption_DESC'
  | 'percent_sale_raw_ASC'
  | 'percent_sale_raw_DESC'
  | 'percentage_sale_primary_processed_ASC'
  | 'percentage_sale_primary_processed_DESC'
  | 'percentage_seed_ASC'
  | 'percentage_seed_DESC'
  | 'primary_processing_types_ASC'
  | 'primary_processing_types_DESC'
  | 'primary_processing_products_ASC'
  | 'primary_processing_products_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'landHolding_ASC'
  | 'landHolding_DESC'
  | 'crop_ASC'
  | 'crop_DESC'
  | 'marketing_ASC'
  | 'marketing_DESC';

export type ProducePlanUpdateInput = {
  readonly percentage_consumption?: Scalars['Int'] | null;
  readonly percent_sale_raw?: Scalars['Int'] | null;
  readonly percentage_sale_primary_processed?: Scalars['Int'] | null;
  readonly percentage_seed?: Scalars['Int'] | null;
  readonly primary_processing_types?: Scalars['String'] | null;
  readonly primary_processing_products?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly marketing?: MarketingRelateToOneInput | null;
};

export type ProducePlansUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProducePlanUpdateInput | null;
};

export type ProducePlanCreateInput = {
  readonly percentage_consumption?: Scalars['Int'] | null;
  readonly percent_sale_raw?: Scalars['Int'] | null;
  readonly percentage_sale_primary_processed?: Scalars['Int'] | null;
  readonly percentage_seed?: Scalars['Int'] | null;
  readonly primary_processing_types?: Scalars['String'] | null;
  readonly primary_processing_products?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly marketing?: MarketingRelateToOneInput | null;
};

export type ProducePlansCreateInput = {
  readonly data?: ProducePlanCreateInput | null;
};

export type MarketingWhereInput = {
  readonly AND?: ReadonlyArray<MarketingWhereInput | null> | null;
  readonly OR?: ReadonlyArray<MarketingWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly mode_sale_type?: Scalars['String'] | null;
  readonly mode_sale_type_not?: Scalars['String'] | null;
  readonly mode_sale_type_contains?: Scalars['String'] | null;
  readonly mode_sale_type_not_contains?: Scalars['String'] | null;
  readonly mode_sale_type_starts_with?: Scalars['String'] | null;
  readonly mode_sale_type_not_starts_with?: Scalars['String'] | null;
  readonly mode_sale_type_ends_with?: Scalars['String'] | null;
  readonly mode_sale_type_not_ends_with?: Scalars['String'] | null;
  readonly mode_sale_type_i?: Scalars['String'] | null;
  readonly mode_sale_type_not_i?: Scalars['String'] | null;
  readonly mode_sale_type_contains_i?: Scalars['String'] | null;
  readonly mode_sale_type_not_contains_i?: Scalars['String'] | null;
  readonly mode_sale_type_starts_with_i?: Scalars['String'] | null;
  readonly mode_sale_type_not_starts_with_i?: Scalars['String'] | null;
  readonly mode_sale_type_ends_with_i?: Scalars['String'] | null;
  readonly mode_sale_type_not_ends_with_i?: Scalars['String'] | null;
  readonly mode_sale_type_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly mode_sale_type_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly additional_amount_processed_product?: Scalars['String'] | null;
  readonly additional_amount_processed_product_not?: Scalars['String'] | null;
  readonly additional_amount_processed_product_contains?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_not_contains?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_starts_with?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_not_starts_with?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_ends_with?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_not_ends_with?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_i?: Scalars['String'] | null;
  readonly additional_amount_processed_product_not_i?: Scalars['String'] | null;
  readonly additional_amount_processed_product_contains_i?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_not_contains_i?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_starts_with_i?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_not_starts_with_i?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_ends_with_i?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_not_ends_with_i?:
    | Scalars['String']
    | null;
  readonly additional_amount_processed_product_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly additional_amount_processed_product_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly landHolding?: LandHoldingWhereInput | null;
  readonly landHolding_is_null?: Scalars['Boolean'] | null;
  readonly crop?: CropWhereInput | null;
  readonly crop_is_null?: Scalars['Boolean'] | null;
  readonly producePlan?: ProducePlanWhereInput | null;
  readonly producePlan_is_null?: Scalars['Boolean'] | null;
};

export type MarketingWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortMarketingsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'mode_sale_type_ASC'
  | 'mode_sale_type_DESC'
  | 'additional_amount_processed_product_ASC'
  | 'additional_amount_processed_product_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'landHolding_ASC'
  | 'landHolding_DESC'
  | 'crop_ASC'
  | 'crop_DESC'
  | 'producePlan_ASC'
  | 'producePlan_DESC';

export type MarketingUpdateInput = {
  readonly mode_sale_type?: Scalars['String'] | null;
  readonly additional_amount_processed_product?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly producePlan?: ProducePlanRelateToOneInput | null;
};

export type MarketingsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: MarketingUpdateInput | null;
};

export type MarketingCreateInput = {
  readonly mode_sale_type?: Scalars['String'] | null;
  readonly additional_amount_processed_product?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly landHolding?: LandHoldingRelateToOneInput | null;
  readonly crop?: CropRelateToOneInput | null;
  readonly producePlan?: ProducePlanRelateToOneInput | null;
};

export type MarketingsCreateInput = {
  readonly data?: MarketingCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'age'
    | 'gender'
    | 'state'
    | 'district'
    | 'block'
    | 'panchayat'
    | 'village'
    | 'phone'
    | 'phone_verified'
    | 'password'
    | 'photo'
    | 'landHolding'
    | 'crop'
    | 'fertPest'
    | 'producePlan'
    | 'marketing'
    | 'role'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly age?: number | null;
    readonly gender?: string | null;
    readonly state?: string | null;
    readonly district?: string | null;
    readonly block?: string | null;
    readonly panchayat?: string | null;
    readonly village?: string | null;
    readonly phone?: string | null;
    readonly phone_verified?: string | null;
    readonly password?: string | null;
    readonly photo?: string | null;
    readonly landHolding?: string | null;
    readonly crop?: string | null;
    readonly fertPest?: string | null;
    readonly producePlan?: string | null;
    readonly marketing?: string | null;
    readonly role?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type ProductListTypeInfo = {
  key: 'Product';
  fields: 'id' | 'name' | 'description' | 'photo' | 'status' | 'price';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly photo?: string | null;
    readonly status?: string | null;
    readonly price?: number | null;
  };
  inputs: {
    where: ProductWhereInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductListTypeInfo,
    ProductListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductListTypeInfo,
  ProductListTypeInfo['fields']
>;

export type ProductImageListTypeInfo = {
  key: 'ProductImage';
  fields: 'id' | 'image' | 'altText' | 'product';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly product?: string | null;
  };
  inputs: {
    where: ProductImageWhereInput;
    create: ProductImageCreateInput;
    update: ProductImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductImageListTypeInfo,
    ProductImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductImageListTypeInfo,
  ProductImageListTypeInfo['fields']
>;

export type CartItemListTypeInfo = {
  key: 'CartItem';
  fields: 'id' | 'quantity' | 'product';
  backing: {
    readonly id: string;
    readonly quantity?: number | null;
    readonly product?: string | null;
  };
  inputs: {
    where: CartItemWhereInput;
    create: CartItemCreateInput;
    update: CartItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CartItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCartItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CartItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CartItemListTypeInfo,
    CartItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CartItemListTypeInfo,
  CartItemListTypeInfo['fields']
>;

export type OrderItemListTypeInfo = {
  key: 'OrderItem';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'photo'
    | 'price'
    | 'quantity'
    | 'order';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly photo?: string | null;
    readonly price?: number | null;
    readonly quantity?: number | null;
    readonly order?: string | null;
  };
  inputs: {
    where: OrderItemWhereInput;
    create: OrderItemCreateInput;
    update: OrderItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: OrderItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortOrderItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type OrderItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    OrderItemListTypeInfo,
    OrderItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  OrderItemListTypeInfo,
  OrderItemListTypeInfo['fields']
>;

export type OrderListTypeInfo = {
  key: 'Order';
  fields: 'id' | 'label' | 'total' | 'items' | 'charge';
  backing: {
    readonly id: string;
    readonly total?: number | null;
    readonly items?: string | null;
    readonly charge?: string | null;
  };
  inputs: {
    where: OrderWhereInput;
    create: OrderCreateInput;
    update: OrderUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: OrderWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortOrdersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type OrderListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    OrderListTypeInfo,
    OrderListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  OrderListTypeInfo,
  OrderListTypeInfo['fields']
>;

export type RoleListTypeInfo = {
  key: 'Role';
  fields:
    | 'id'
    | 'name'
    | 'canManageProducts'
    | 'canSeeOtherUsers'
    | 'canManageUsers'
    | 'canManageRoles'
    | 'canManageCart'
    | 'canManageOrders'
    | 'canManageCrops'
    | 'canManageLandHolding'
    | 'canManageUserImage'
    | 'canManageSeed'
    | 'canManageFertPest'
    | 'canManageProducePlan'
    | 'canManageMarketing'
    | 'assignedTo';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly canManageProducts?: boolean | null;
    readonly canSeeOtherUsers?: boolean | null;
    readonly canManageUsers?: boolean | null;
    readonly canManageRoles?: boolean | null;
    readonly canManageCart?: boolean | null;
    readonly canManageOrders?: boolean | null;
    readonly canManageCrops?: boolean | null;
    readonly canManageLandHolding?: boolean | null;
    readonly canManageUserImage?: boolean | null;
    readonly canManageSeed?: boolean | null;
    readonly canManageFertPest?: boolean | null;
    readonly canManageProducePlan?: boolean | null;
    readonly canManageMarketing?: boolean | null;
    readonly assignedTo?: string | null;
  };
  inputs: {
    where: RoleWhereInput;
    create: RoleCreateInput;
    update: RoleUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RoleWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRolesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RoleListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RoleListTypeInfo,
    RoleListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RoleListTypeInfo,
  RoleListTypeInfo['fields']
>;

export type UserImageListTypeInfo = {
  key: 'UserImage';
  fields: 'id' | 'image' | 'altText' | 'user';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly user?: string | null;
  };
  inputs: {
    where: UserImageWhereInput;
    create: UserImageCreateInput;
    update: UserImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUserImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserImageListTypeInfo,
    UserImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserImageListTypeInfo,
  UserImageListTypeInfo['fields']
>;

export type LandHoldingListTypeInfo = {
  key: 'LandHolding';
  fields:
    | 'id'
    | 'land_acre_number'
    | 'land_acre_cultivable'
    | 'land_acre_irrigation'
    | 'land_irrigation_type'
    | 'user'
    | 'crop'
    | 'seed'
    | 'fertPest'
    | 'producePlan'
    | 'marketing';
  backing: {
    readonly id: string;
    readonly land_acre_number?: number | null;
    readonly land_acre_cultivable?: number | null;
    readonly land_acre_irrigation?: number | null;
    readonly land_irrigation_type?: string | null;
    readonly user?: string | null;
    readonly crop?: string | null;
    readonly seed?: string | null;
    readonly fertPest?: string | null;
    readonly producePlan?: string | null;
    readonly marketing?: string | null;
  };
  inputs: {
    where: LandHoldingWhereInput;
    create: LandHoldingCreateInput;
    update: LandHoldingUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: LandHoldingWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortLandHoldingsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type LandHoldingListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    LandHoldingListTypeInfo,
    LandHoldingListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  LandHoldingListTypeInfo,
  LandHoldingListTypeInfo['fields']
>;

export type CropListTypeInfo = {
  key: 'Crop';
  fields:
    | 'id'
    | 'season_type'
    | 'crop_name'
    | 'land_acre_used'
    | 'average_yeild_per_acre'
    | 'new_crop_planned'
    | 'user'
    | 'seed'
    | 'landHolding'
    | 'fertPest'
    | 'producePlan'
    | 'marketing';
  backing: {
    readonly id: string;
    readonly season_type?: string | null;
    readonly crop_name?: string | null;
    readonly land_acre_used?: number | null;
    readonly average_yeild_per_acre?: string | null;
    readonly new_crop_planned?: string | null;
    readonly user?: string | null;
    readonly seed?: string | null;
    readonly landHolding?: string | null;
    readonly fertPest?: string | null;
    readonly producePlan?: string | null;
    readonly marketing?: string | null;
  };
  inputs: {
    where: CropWhereInput;
    create: CropCreateInput;
    update: CropUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CropWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCropsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CropListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CropListTypeInfo,
    CropListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CropListTypeInfo,
  CropListTypeInfo['fields']
>;

export type SeedListTypeInfo = {
  key: 'Seed';
  fields:
    | 'id'
    | 'seed_total_acre'
    | 'seed_source_type'
    | 'landHolding'
    | 'crop'
    | 'fertPest';
  backing: {
    readonly id: string;
    readonly seed_total_acre?: string | null;
    readonly seed_source_type?: string | null;
    readonly landHolding?: string | null;
    readonly crop?: string | null;
    readonly fertPest?: string | null;
  };
  inputs: {
    where: SeedWhereInput;
    create: SeedCreateInput;
    update: SeedUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: SeedWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortSeedsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type SeedListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    SeedListTypeInfo,
    SeedListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  SeedListTypeInfo,
  SeedListTypeInfo['fields']
>;

export type FertPestListTypeInfo = {
  key: 'FertPest';
  fields:
    | 'id'
    | 'dap_total_acre_crop'
    | 'urea_total_acre_crop'
    | 'other_total_acre_crop'
    | 'pesticide_total_crop'
    | 'herbicide_total_acre_crop'
    | 'source_type'
    | 'user'
    | 'landHolding'
    | 'crop'
    | 'seed';
  backing: {
    readonly id: string;
    readonly dap_total_acre_crop?: number | null;
    readonly urea_total_acre_crop?: number | null;
    readonly other_total_acre_crop?: number | null;
    readonly pesticide_total_crop?: number | null;
    readonly herbicide_total_acre_crop?: number | null;
    readonly source_type?: string | null;
    readonly user?: string | null;
    readonly landHolding?: string | null;
    readonly crop?: string | null;
    readonly seed?: string | null;
  };
  inputs: {
    where: FertPestWhereInput;
    create: FertPestCreateInput;
    update: FertPestUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: FertPestWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortFertPestsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type FertPestListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    FertPestListTypeInfo,
    FertPestListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  FertPestListTypeInfo,
  FertPestListTypeInfo['fields']
>;

export type ProducePlanListTypeInfo = {
  key: 'ProducePlan';
  fields:
    | 'id'
    | 'percentage_consumption'
    | 'percent_sale_raw'
    | 'percentage_sale_primary_processed'
    | 'percentage_seed'
    | 'primary_processing_types'
    | 'primary_processing_products'
    | 'user'
    | 'landHolding'
    | 'crop'
    | 'marketing';
  backing: {
    readonly id: string;
    readonly percentage_consumption?: number | null;
    readonly percent_sale_raw?: number | null;
    readonly percentage_sale_primary_processed?: number | null;
    readonly percentage_seed?: number | null;
    readonly primary_processing_types?: string | null;
    readonly primary_processing_products?: string | null;
    readonly user?: string | null;
    readonly landHolding?: string | null;
    readonly crop?: string | null;
    readonly marketing?: string | null;
  };
  inputs: {
    where: ProducePlanWhereInput;
    create: ProducePlanCreateInput;
    update: ProducePlanUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProducePlanWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProducePlansBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProducePlanListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProducePlanListTypeInfo,
    ProducePlanListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProducePlanListTypeInfo,
  ProducePlanListTypeInfo['fields']
>;

export type MarketingListTypeInfo = {
  key: 'Marketing';
  fields:
    | 'id'
    | 'mode_sale_type'
    | 'additional_amount_processed_product'
    | 'user'
    | 'landHolding'
    | 'crop'
    | 'producePlan';
  backing: {
    readonly id: string;
    readonly mode_sale_type?: string | null;
    readonly additional_amount_processed_product?: string | null;
    readonly user?: string | null;
    readonly landHolding?: string | null;
    readonly crop?: string | null;
    readonly producePlan?: string | null;
  };
  inputs: {
    where: MarketingWhereInput;
    create: MarketingCreateInput;
    update: MarketingUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: MarketingWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortMarketingsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type MarketingListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    MarketingListTypeInfo,
    MarketingListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  MarketingListTypeInfo,
  MarketingListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Product: ProductListTypeInfo;
  readonly ProductImage: ProductImageListTypeInfo;
  readonly CartItem: CartItemListTypeInfo;
  readonly OrderItem: OrderItemListTypeInfo;
  readonly Order: OrderListTypeInfo;
  readonly Role: RoleListTypeInfo;
  readonly UserImage: UserImageListTypeInfo;
  readonly LandHolding: LandHoldingListTypeInfo;
  readonly Crop: CropListTypeInfo;
  readonly Seed: SeedListTypeInfo;
  readonly FertPest: FertPestListTypeInfo;
  readonly ProducePlan: ProducePlanListTypeInfo;
  readonly Marketing: MarketingListTypeInfo;
};
