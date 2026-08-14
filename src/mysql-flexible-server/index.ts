/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MysqlFlexibleServerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#administrator_login MysqlFlexibleServer#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#administrator_password MysqlFlexibleServer#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#administrator_password_wo MysqlFlexibleServer#administrator_password_wo}
  */
  readonly administratorPasswordWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#administrator_password_wo_version MysqlFlexibleServer#administrator_password_wo_version}
  */
  readonly administratorPasswordWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#backup_retention_days MysqlFlexibleServer#backup_retention_days}
  */
  readonly backupRetentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#create_mode MysqlFlexibleServer#create_mode}
  */
  readonly createMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#delegated_subnet_id MysqlFlexibleServer#delegated_subnet_id}
  */
  readonly delegatedSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#geo_redundant_backup_enabled MysqlFlexibleServer#geo_redundant_backup_enabled}
  */
  readonly geoRedundantBackupEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#id MysqlFlexibleServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#location MysqlFlexibleServer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#name MysqlFlexibleServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#point_in_time_restore_time_in_utc MysqlFlexibleServer#point_in_time_restore_time_in_utc}
  */
  readonly pointInTimeRestoreTimeInUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#private_dns_zone_id MysqlFlexibleServer#private_dns_zone_id}
  */
  readonly privateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#public_network_access MysqlFlexibleServer#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#replication_role MysqlFlexibleServer#replication_role}
  */
  readonly replicationRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#resource_group_name MysqlFlexibleServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#sku_name MysqlFlexibleServer#sku_name}
  */
  readonly skuName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#source_server_id MysqlFlexibleServer#source_server_id}
  */
  readonly sourceServerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#tags MysqlFlexibleServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#version MysqlFlexibleServer#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#zone MysqlFlexibleServer#zone}
  */
  readonly zone?: string;
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#customer_managed_key MysqlFlexibleServer#customer_managed_key}
  */
  readonly customerManagedKey?: MysqlFlexibleServerCustomerManagedKey;
  /**
  * high_availability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#high_availability MysqlFlexibleServer#high_availability}
  */
  readonly highAvailability?: MysqlFlexibleServerHighAvailability;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#identity MysqlFlexibleServer#identity}
  */
  readonly identity?: MysqlFlexibleServerIdentity;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#maintenance_window MysqlFlexibleServer#maintenance_window}
  */
  readonly maintenanceWindow?: MysqlFlexibleServerMaintenanceWindow;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#storage MysqlFlexibleServer#storage}
  */
  readonly storage?: MysqlFlexibleServerStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#timeouts MysqlFlexibleServer#timeouts}
  */
  readonly timeouts?: MysqlFlexibleServerTimeouts;
}
export interface MysqlFlexibleServerCustomerManagedKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#geo_backup_key_vault_key_id MysqlFlexibleServer#geo_backup_key_vault_key_id}
  */
  readonly geoBackupKeyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#geo_backup_user_assigned_identity_id MysqlFlexibleServer#geo_backup_user_assigned_identity_id}
  */
  readonly geoBackupUserAssignedIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#key_vault_key_id MysqlFlexibleServer#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#primary_user_assigned_identity_id MysqlFlexibleServer#primary_user_assigned_identity_id}
  */
  readonly primaryUserAssignedIdentityId?: string;
}

export function mysqlFlexibleServerCustomerManagedKeyToTerraform(struct?: MysqlFlexibleServerCustomerManagedKeyOutputReference | MysqlFlexibleServerCustomerManagedKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    geo_backup_key_vault_key_id: cdktn.stringToTerraform(struct!.geoBackupKeyVaultKeyId),
    geo_backup_user_assigned_identity_id: cdktn.stringToTerraform(struct!.geoBackupUserAssignedIdentityId),
    key_vault_key_id: cdktn.stringToTerraform(struct!.keyVaultKeyId),
    primary_user_assigned_identity_id: cdktn.stringToTerraform(struct!.primaryUserAssignedIdentityId),
  }
}


export function mysqlFlexibleServerCustomerManagedKeyToHclTerraform(struct?: MysqlFlexibleServerCustomerManagedKeyOutputReference | MysqlFlexibleServerCustomerManagedKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    geo_backup_key_vault_key_id: {
      value: cdktn.stringToHclTerraform(struct!.geoBackupKeyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_backup_user_assigned_identity_id: {
      value: cdktn.stringToHclTerraform(struct!.geoBackupUserAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_user_assigned_identity_id: {
      value: cdktn.stringToHclTerraform(struct!.primaryUserAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlFlexibleServerCustomerManagedKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlFlexibleServerCustomerManagedKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoBackupKeyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoBackupKeyVaultKeyId = this._geoBackupKeyVaultKeyId;
    }
    if (this._geoBackupUserAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoBackupUserAssignedIdentityId = this._geoBackupUserAssignedIdentityId;
    }
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    if (this._primaryUserAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryUserAssignedIdentityId = this._primaryUserAssignedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerCustomerManagedKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoBackupKeyVaultKeyId = undefined;
      this._geoBackupUserAssignedIdentityId = undefined;
      this._keyVaultKeyId = undefined;
      this._primaryUserAssignedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoBackupKeyVaultKeyId = value.geoBackupKeyVaultKeyId;
      this._geoBackupUserAssignedIdentityId = value.geoBackupUserAssignedIdentityId;
      this._keyVaultKeyId = value.keyVaultKeyId;
      this._primaryUserAssignedIdentityId = value.primaryUserAssignedIdentityId;
    }
  }

  // geo_backup_key_vault_key_id - computed: false, optional: true, required: false
  private _geoBackupKeyVaultKeyId?: string; 
  public get geoBackupKeyVaultKeyId() {
    return this.getStringAttribute('geo_backup_key_vault_key_id');
  }
  public set geoBackupKeyVaultKeyId(value: string) {
    this._geoBackupKeyVaultKeyId = value;
  }
  public resetGeoBackupKeyVaultKeyId() {
    this._geoBackupKeyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoBackupKeyVaultKeyIdInput() {
    return this._geoBackupKeyVaultKeyId;
  }

  // geo_backup_user_assigned_identity_id - computed: false, optional: true, required: false
  private _geoBackupUserAssignedIdentityId?: string; 
  public get geoBackupUserAssignedIdentityId() {
    return this.getStringAttribute('geo_backup_user_assigned_identity_id');
  }
  public set geoBackupUserAssignedIdentityId(value: string) {
    this._geoBackupUserAssignedIdentityId = value;
  }
  public resetGeoBackupUserAssignedIdentityId() {
    this._geoBackupUserAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoBackupUserAssignedIdentityIdInput() {
    return this._geoBackupUserAssignedIdentityId;
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }

  // primary_user_assigned_identity_id - computed: false, optional: true, required: false
  private _primaryUserAssignedIdentityId?: string; 
  public get primaryUserAssignedIdentityId() {
    return this.getStringAttribute('primary_user_assigned_identity_id');
  }
  public set primaryUserAssignedIdentityId(value: string) {
    this._primaryUserAssignedIdentityId = value;
  }
  public resetPrimaryUserAssignedIdentityId() {
    this._primaryUserAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUserAssignedIdentityIdInput() {
    return this._primaryUserAssignedIdentityId;
  }
}
export interface MysqlFlexibleServerHighAvailability {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#mode MysqlFlexibleServer#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#standby_availability_zone MysqlFlexibleServer#standby_availability_zone}
  */
  readonly standbyAvailabilityZone?: string;
}

export function mysqlFlexibleServerHighAvailabilityToTerraform(struct?: MysqlFlexibleServerHighAvailabilityOutputReference | MysqlFlexibleServerHighAvailability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    standby_availability_zone: cdktn.stringToTerraform(struct!.standbyAvailabilityZone),
  }
}


export function mysqlFlexibleServerHighAvailabilityToHclTerraform(struct?: MysqlFlexibleServerHighAvailabilityOutputReference | MysqlFlexibleServerHighAvailability): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_availability_zone: {
      value: cdktn.stringToHclTerraform(struct!.standbyAvailabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlFlexibleServerHighAvailabilityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlFlexibleServerHighAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._standbyAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyAvailabilityZone = this._standbyAvailabilityZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerHighAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._standbyAvailabilityZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._standbyAvailabilityZone = value.standbyAvailabilityZone;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // standby_availability_zone - computed: true, optional: true, required: false
  private _standbyAvailabilityZone?: string; 
  public get standbyAvailabilityZone() {
    return this.getStringAttribute('standby_availability_zone');
  }
  public set standbyAvailabilityZone(value: string) {
    this._standbyAvailabilityZone = value;
  }
  public resetStandbyAvailabilityZone() {
    this._standbyAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyAvailabilityZoneInput() {
    return this._standbyAvailabilityZone;
  }
}
export interface MysqlFlexibleServerIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#identity_ids MysqlFlexibleServer#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#type MysqlFlexibleServer#type}
  */
  readonly type: string;
}

export function mysqlFlexibleServerIdentityToTerraform(struct?: MysqlFlexibleServerIdentityOutputReference | MysqlFlexibleServerIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function mysqlFlexibleServerIdentityToHclTerraform(struct?: MysqlFlexibleServerIdentityOutputReference | MysqlFlexibleServerIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlFlexibleServerIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlFlexibleServerIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktn.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface MysqlFlexibleServerMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#day_of_week MysqlFlexibleServer#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#start_hour MysqlFlexibleServer#start_hour}
  */
  readonly startHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#start_minute MysqlFlexibleServer#start_minute}
  */
  readonly startMinute?: number;
}

export function mysqlFlexibleServerMaintenanceWindowToTerraform(struct?: MysqlFlexibleServerMaintenanceWindowOutputReference | MysqlFlexibleServerMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    day_of_week: cdktn.numberToTerraform(struct!.dayOfWeek),
    start_hour: cdktn.numberToTerraform(struct!.startHour),
    start_minute: cdktn.numberToTerraform(struct!.startMinute),
  }
}


export function mysqlFlexibleServerMaintenanceWindowToHclTerraform(struct?: MysqlFlexibleServerMaintenanceWindowOutputReference | MysqlFlexibleServerMaintenanceWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    day_of_week: {
      value: cdktn.numberToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour: {
      value: cdktn.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_minute: {
      value: cdktn.numberToHclTerraform(struct!.startMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlFlexibleServerMaintenanceWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlFlexibleServerMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMinute = this._startMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._startHour = undefined;
      this._startMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._startHour = value.startHour;
      this._startMinute = value.startMinute;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // start_hour - computed: false, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_minute - computed: false, optional: true, required: false
  private _startMinute?: number; 
  public get startMinute() {
    return this.getNumberAttribute('start_minute');
  }
  public set startMinute(value: number) {
    this._startMinute = value;
  }
  public resetStartMinute() {
    this._startMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinuteInput() {
    return this._startMinute;
  }
}
export interface MysqlFlexibleServerStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#auto_grow_enabled MysqlFlexibleServer#auto_grow_enabled}
  */
  readonly autoGrowEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#io_scaling_enabled MysqlFlexibleServer#io_scaling_enabled}
  */
  readonly ioScalingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#iops MysqlFlexibleServer#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#log_on_disk_enabled MysqlFlexibleServer#log_on_disk_enabled}
  */
  readonly logOnDiskEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#size_gb MysqlFlexibleServer#size_gb}
  */
  readonly sizeGb?: number;
}

export function mysqlFlexibleServerStorageToTerraform(struct?: MysqlFlexibleServerStorageOutputReference | MysqlFlexibleServerStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_grow_enabled: cdktn.booleanToTerraform(struct!.autoGrowEnabled),
    io_scaling_enabled: cdktn.booleanToTerraform(struct!.ioScalingEnabled),
    iops: cdktn.numberToTerraform(struct!.iops),
    log_on_disk_enabled: cdktn.booleanToTerraform(struct!.logOnDiskEnabled),
    size_gb: cdktn.numberToTerraform(struct!.sizeGb),
  }
}


export function mysqlFlexibleServerStorageToHclTerraform(struct?: MysqlFlexibleServerStorageOutputReference | MysqlFlexibleServerStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_grow_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.autoGrowEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    io_scaling_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.ioScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktn.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_on_disk_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.logOnDiskEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size_gb: {
      value: cdktn.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlFlexibleServerStorageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlFlexibleServerStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoGrowEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGrowEnabled = this._autoGrowEnabled;
    }
    if (this._ioScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ioScalingEnabled = this._ioScalingEnabled;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._logOnDiskEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOnDiskEnabled = this._logOnDiskEnabled;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoGrowEnabled = undefined;
      this._ioScalingEnabled = undefined;
      this._iops = undefined;
      this._logOnDiskEnabled = undefined;
      this._sizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoGrowEnabled = value.autoGrowEnabled;
      this._ioScalingEnabled = value.ioScalingEnabled;
      this._iops = value.iops;
      this._logOnDiskEnabled = value.logOnDiskEnabled;
      this._sizeGb = value.sizeGb;
    }
  }

  // auto_grow_enabled - computed: false, optional: true, required: false
  private _autoGrowEnabled?: boolean | cdktn.IResolvable; 
  public get autoGrowEnabled() {
    return this.getBooleanAttribute('auto_grow_enabled');
  }
  public set autoGrowEnabled(value: boolean | cdktn.IResolvable) {
    this._autoGrowEnabled = value;
  }
  public resetAutoGrowEnabled() {
    this._autoGrowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGrowEnabledInput() {
    return this._autoGrowEnabled;
  }

  // io_scaling_enabled - computed: false, optional: true, required: false
  private _ioScalingEnabled?: boolean | cdktn.IResolvable; 
  public get ioScalingEnabled() {
    return this.getBooleanAttribute('io_scaling_enabled');
  }
  public set ioScalingEnabled(value: boolean | cdktn.IResolvable) {
    this._ioScalingEnabled = value;
  }
  public resetIoScalingEnabled() {
    this._ioScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioScalingEnabledInput() {
    return this._ioScalingEnabled;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // log_on_disk_enabled - computed: false, optional: true, required: false
  private _logOnDiskEnabled?: boolean | cdktn.IResolvable; 
  public get logOnDiskEnabled() {
    return this.getBooleanAttribute('log_on_disk_enabled');
  }
  public set logOnDiskEnabled(value: boolean | cdktn.IResolvable) {
    this._logOnDiskEnabled = value;
  }
  public resetLogOnDiskEnabled() {
    this._logOnDiskEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOnDiskEnabledInput() {
    return this._logOnDiskEnabled;
  }

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface MysqlFlexibleServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#create MysqlFlexibleServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#delete MysqlFlexibleServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#read MysqlFlexibleServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#update MysqlFlexibleServer#update}
  */
  readonly update?: string;
}

export function mysqlFlexibleServerTimeoutsToTerraform(struct?: MysqlFlexibleServerTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function mysqlFlexibleServerTimeoutsToHclTerraform(struct?: MysqlFlexibleServerTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlFlexibleServerTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlFlexibleServerTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlFlexibleServerTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server azurerm_mysql_flexible_server}
*/
export class MysqlFlexibleServer extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mysql_flexible_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MysqlFlexibleServer resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlFlexibleServer to import
  * @param importFromId The id of the existing MysqlFlexibleServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlFlexibleServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mysql_flexible_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/mysql_flexible_server azurerm_mysql_flexible_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlFlexibleServerConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlFlexibleServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mysql_flexible_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.1.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administratorLogin = config.administratorLogin;
    this._administratorPassword = config.administratorPassword;
    this._administratorPasswordWo = config.administratorPasswordWo;
    this._administratorPasswordWoVersion = config.administratorPasswordWoVersion;
    this._backupRetentionDays = config.backupRetentionDays;
    this._createMode = config.createMode;
    this._delegatedSubnetId = config.delegatedSubnetId;
    this._geoRedundantBackupEnabled = config.geoRedundantBackupEnabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._pointInTimeRestoreTimeInUtc = config.pointInTimeRestoreTimeInUtc;
    this._privateDnsZoneId = config.privateDnsZoneId;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._replicationRole = config.replicationRole;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._sourceServerId = config.sourceServerId;
    this._tags = config.tags;
    this._version = config.version;
    this._zone = config.zone;
    this._customerManagedKey.internalValue = config.customerManagedKey;
    this._highAvailability.internalValue = config.highAvailability;
    this._identity.internalValue = config.identity;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: true, required: false
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_password - computed: false, optional: true, required: false
  private _administratorPassword?: string; 
  public get administratorPassword() {
    return this.getStringAttribute('administrator_password');
  }
  public set administratorPassword(value: string) {
    this._administratorPassword = value;
  }
  public resetAdministratorPassword() {
    this._administratorPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordInput() {
    return this._administratorPassword;
  }

  // administrator_password_wo - computed: false, optional: true, required: false
  private _administratorPasswordWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get administratorPasswordWo() {
    return this.getStringAttribute('administrator_password_wo');
  }
  public set administratorPasswordWo(value: string) {
    this._administratorPasswordWo = value;
  }
  public resetAdministratorPasswordWo() {
    this._administratorPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordWoInput() {
    return this._administratorPasswordWo;
  }

  // administrator_password_wo_version - computed: false, optional: true, required: false
  private _administratorPasswordWoVersion?: number; 
  public get administratorPasswordWoVersion() {
    return this.getNumberAttribute('administrator_password_wo_version');
  }
  public set administratorPasswordWoVersion(value: number) {
    this._administratorPasswordWoVersion = value;
  }
  public resetAdministratorPasswordWoVersion() {
    this._administratorPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordWoVersionInput() {
    return this._administratorPasswordWoVersion;
  }

  // backup_retention_days - computed: false, optional: true, required: false
  private _backupRetentionDays?: number; 
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }
  public set backupRetentionDays(value: number) {
    this._backupRetentionDays = value;
  }
  public resetBackupRetentionDays() {
    this._backupRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionDaysInput() {
    return this._backupRetentionDays;
  }

  // create_mode - computed: false, optional: true, required: false
  private _createMode?: string; 
  public get createMode() {
    return this.getStringAttribute('create_mode');
  }
  public set createMode(value: string) {
    this._createMode = value;
  }
  public resetCreateMode() {
    this._createMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createModeInput() {
    return this._createMode;
  }

  // delegated_subnet_id - computed: false, optional: true, required: false
  private _delegatedSubnetId?: string; 
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
  }
  public set delegatedSubnetId(value: string) {
    this._delegatedSubnetId = value;
  }
  public resetDelegatedSubnetId() {
    this._delegatedSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubnetIdInput() {
    return this._delegatedSubnetId;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // geo_redundant_backup_enabled - computed: false, optional: true, required: false
  private _geoRedundantBackupEnabled?: boolean | cdktn.IResolvable; 
  public get geoRedundantBackupEnabled() {
    return this.getBooleanAttribute('geo_redundant_backup_enabled');
  }
  public set geoRedundantBackupEnabled(value: boolean | cdktn.IResolvable) {
    this._geoRedundantBackupEnabled = value;
  }
  public resetGeoRedundantBackupEnabled() {
    this._geoRedundantBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoRedundantBackupEnabledInput() {
    return this._geoRedundantBackupEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // point_in_time_restore_time_in_utc - computed: false, optional: true, required: false
  private _pointInTimeRestoreTimeInUtc?: string; 
  public get pointInTimeRestoreTimeInUtc() {
    return this.getStringAttribute('point_in_time_restore_time_in_utc');
  }
  public set pointInTimeRestoreTimeInUtc(value: string) {
    this._pointInTimeRestoreTimeInUtc = value;
  }
  public resetPointInTimeRestoreTimeInUtc() {
    this._pointInTimeRestoreTimeInUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRestoreTimeInUtcInput() {
    return this._pointInTimeRestoreTimeInUtc;
  }

  // private_dns_zone_id - computed: false, optional: true, required: false
  private _privateDnsZoneId?: string; 
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }
  public set privateDnsZoneId(value: string) {
    this._privateDnsZoneId = value;
  }
  public resetPrivateDnsZoneId() {
    this._privateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdInput() {
    return this._privateDnsZoneId;
  }

  // public_network_access - computed: true, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
  }

  // replica_capacity - computed: true, optional: false, required: false
  public get replicaCapacity() {
    return this.getNumberAttribute('replica_capacity');
  }

  // replication_role - computed: true, optional: true, required: false
  private _replicationRole?: string; 
  public get replicationRole() {
    return this.getStringAttribute('replication_role');
  }
  public set replicationRole(value: string) {
    this._replicationRole = value;
  }
  public resetReplicationRole() {
    this._replicationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRoleInput() {
    return this._replicationRole;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // sku_name - computed: true, optional: true, required: false
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  public resetSkuName() {
    this._skuName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // source_server_id - computed: false, optional: true, required: false
  private _sourceServerId?: string; 
  public get sourceServerId() {
    return this.getStringAttribute('source_server_id');
  }
  public set sourceServerId(value: string) {
    this._sourceServerId = value;
  }
  public resetSourceServerId() {
    this._sourceServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServerIdInput() {
    return this._sourceServerId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey = new MysqlFlexibleServerCustomerManagedKeyOutputReference(this, "customer_managed_key");
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: MysqlFlexibleServerCustomerManagedKey) {
    this._customerManagedKey.internalValue = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey.internalValue;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability = new MysqlFlexibleServerHighAvailabilityOutputReference(this, "high_availability");
  public get highAvailability() {
    return this._highAvailability;
  }
  public putHighAvailability(value: MysqlFlexibleServerHighAvailability) {
    this._highAvailability.internalValue = value;
  }
  public resetHighAvailability() {
    this._highAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new MysqlFlexibleServerIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MysqlFlexibleServerIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new MysqlFlexibleServerMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: MysqlFlexibleServerMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new MysqlFlexibleServerStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: MysqlFlexibleServerStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlFlexibleServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlFlexibleServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrator_login: cdktn.stringToTerraform(this._administratorLogin),
      administrator_password: cdktn.stringToTerraform(this._administratorPassword),
      administrator_password_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._administratorPasswordWo)),
      administrator_password_wo_version: cdktn.numberToTerraform(this._administratorPasswordWoVersion),
      backup_retention_days: cdktn.numberToTerraform(this._backupRetentionDays),
      create_mode: cdktn.stringToTerraform(this._createMode),
      delegated_subnet_id: cdktn.stringToTerraform(this._delegatedSubnetId),
      geo_redundant_backup_enabled: cdktn.booleanToTerraform(this._geoRedundantBackupEnabled),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      point_in_time_restore_time_in_utc: cdktn.stringToTerraform(this._pointInTimeRestoreTimeInUtc),
      private_dns_zone_id: cdktn.stringToTerraform(this._privateDnsZoneId),
      public_network_access: cdktn.stringToTerraform(this._publicNetworkAccess),
      replication_role: cdktn.stringToTerraform(this._replicationRole),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      sku_name: cdktn.stringToTerraform(this._skuName),
      source_server_id: cdktn.stringToTerraform(this._sourceServerId),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      version: cdktn.stringToTerraform(this._version),
      zone: cdktn.stringToTerraform(this._zone),
      customer_managed_key: mysqlFlexibleServerCustomerManagedKeyToTerraform(this._customerManagedKey.internalValue),
      high_availability: mysqlFlexibleServerHighAvailabilityToTerraform(this._highAvailability.internalValue),
      identity: mysqlFlexibleServerIdentityToTerraform(this._identity.internalValue),
      maintenance_window: mysqlFlexibleServerMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      storage: mysqlFlexibleServerStorageToTerraform(this._storage.internalValue),
      timeouts: mysqlFlexibleServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrator_login: {
        value: cdktn.stringToHclTerraform(this._administratorLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_password: {
        value: cdktn.stringToHclTerraform(this._administratorPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_password_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._administratorPasswordWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      administrator_password_wo_version: {
        value: cdktn.numberToHclTerraform(this._administratorPasswordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_retention_days: {
        value: cdktn.numberToHclTerraform(this._backupRetentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_mode: {
        value: cdktn.stringToHclTerraform(this._createMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_subnet_id: {
        value: cdktn.stringToHclTerraform(this._delegatedSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_redundant_backup_enabled: {
        value: cdktn.booleanToHclTerraform(this._geoRedundantBackupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      point_in_time_restore_time_in_utc: {
        value: cdktn.stringToHclTerraform(this._pointInTimeRestoreTimeInUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_dns_zone_id: {
        value: cdktn.stringToHclTerraform(this._privateDnsZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access: {
        value: cdktn.stringToHclTerraform(this._publicNetworkAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_role: {
        value: cdktn.stringToHclTerraform(this._replicationRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku_name: {
        value: cdktn.stringToHclTerraform(this._skuName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_server_id: {
        value: cdktn.stringToHclTerraform(this._sourceServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktn.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktn.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key: {
        value: mysqlFlexibleServerCustomerManagedKeyToHclTerraform(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlFlexibleServerCustomerManagedKeyList",
      },
      high_availability: {
        value: mysqlFlexibleServerHighAvailabilityToHclTerraform(this._highAvailability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlFlexibleServerHighAvailabilityList",
      },
      identity: {
        value: mysqlFlexibleServerIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlFlexibleServerIdentityList",
      },
      maintenance_window: {
        value: mysqlFlexibleServerMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlFlexibleServerMaintenanceWindowList",
      },
      storage: {
        value: mysqlFlexibleServerStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlFlexibleServerStorageList",
      },
      timeouts: {
        value: mysqlFlexibleServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlFlexibleServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
