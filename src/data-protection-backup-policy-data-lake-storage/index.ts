/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataProtectionBackupPolicyDataLakeStorageConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#backup_schedule DataProtectionBackupPolicyDataLakeStorage#backup_schedule}
  */
  readonly backupSchedule: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#data_protection_backup_vault_id DataProtectionBackupPolicyDataLakeStorage#data_protection_backup_vault_id}
  */
  readonly dataProtectionBackupVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#default_retention_duration DataProtectionBackupPolicyDataLakeStorage#default_retention_duration}
  */
  readonly defaultRetentionDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#id DataProtectionBackupPolicyDataLakeStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#time_zone DataProtectionBackupPolicyDataLakeStorage#time_zone}
  */
  readonly timeZone?: string;
  /**
  * retention_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#retention_rule DataProtectionBackupPolicyDataLakeStorage#retention_rule}
  */
  readonly retentionRule?: DataProtectionBackupPolicyDataLakeStorageRetentionRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#timeouts DataProtectionBackupPolicyDataLakeStorage#timeouts}
  */
  readonly timeouts?: DataProtectionBackupPolicyDataLakeStorageTimeouts;
}
export interface DataProtectionBackupPolicyDataLakeStorageRetentionRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#absolute_criteria DataProtectionBackupPolicyDataLakeStorage#absolute_criteria}
  */
  readonly absoluteCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#days_of_week DataProtectionBackupPolicyDataLakeStorage#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#duration DataProtectionBackupPolicyDataLakeStorage#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#months_of_year DataProtectionBackupPolicyDataLakeStorage#months_of_year}
  */
  readonly monthsOfYear?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#name DataProtectionBackupPolicyDataLakeStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#scheduled_backup_times DataProtectionBackupPolicyDataLakeStorage#scheduled_backup_times}
  */
  readonly scheduledBackupTimes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#weeks_of_month DataProtectionBackupPolicyDataLakeStorage#weeks_of_month}
  */
  readonly weeksOfMonth?: string[];
}

export function dataProtectionBackupPolicyDataLakeStorageRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyDataLakeStorageRetentionRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    absolute_criteria: cdktn.stringToTerraform(struct!.absoluteCriteria),
    days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
    duration: cdktn.stringToTerraform(struct!.duration),
    months_of_year: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.monthsOfYear),
    name: cdktn.stringToTerraform(struct!.name),
    scheduled_backup_times: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scheduledBackupTimes),
    weeks_of_month: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.weeksOfMonth),
  }
}


export function dataProtectionBackupPolicyDataLakeStorageRetentionRuleToHclTerraform(struct?: DataProtectionBackupPolicyDataLakeStorageRetentionRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    absolute_criteria: {
      value: cdktn.stringToHclTerraform(struct!.absoluteCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_of_week: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    months_of_year: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.monthsOfYear),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_backup_times: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scheduledBackupTimes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weeks_of_month: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.weeksOfMonth),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataProtectionBackupPolicyDataLakeStorageRetentionRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteCriteria = this._absoluteCriteria;
    }
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._monthsOfYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthsOfYear = this._monthsOfYear;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scheduledBackupTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledBackupTimes = this._scheduledBackupTimes;
    }
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyDataLakeStorageRetentionRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteCriteria = undefined;
      this._daysOfWeek = undefined;
      this._duration = undefined;
      this._monthsOfYear = undefined;
      this._name = undefined;
      this._scheduledBackupTimes = undefined;
      this._weeksOfMonth = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteCriteria = value.absoluteCriteria;
      this._daysOfWeek = value.daysOfWeek;
      this._duration = value.duration;
      this._monthsOfYear = value.monthsOfYear;
      this._name = value.name;
      this._scheduledBackupTimes = value.scheduledBackupTimes;
      this._weeksOfMonth = value.weeksOfMonth;
    }
  }

  // absolute_criteria - computed: false, optional: true, required: false
  private _absoluteCriteria?: string; 
  public get absoluteCriteria() {
    return this.getStringAttribute('absolute_criteria');
  }
  public set absoluteCriteria(value: string) {
    this._absoluteCriteria = value;
  }
  public resetAbsoluteCriteria() {
    this._absoluteCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteCriteriaInput() {
    return this._absoluteCriteria;
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return cdktn.Fn.tolist(this.getListAttribute('days_of_week'));
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // months_of_year - computed: false, optional: true, required: false
  private _monthsOfYear?: string[]; 
  public get monthsOfYear() {
    return cdktn.Fn.tolist(this.getListAttribute('months_of_year'));
  }
  public set monthsOfYear(value: string[]) {
    this._monthsOfYear = value;
  }
  public resetMonthsOfYear() {
    this._monthsOfYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsOfYearInput() {
    return this._monthsOfYear;
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

  // scheduled_backup_times - computed: false, optional: true, required: false
  private _scheduledBackupTimes?: string[]; 
  public get scheduledBackupTimes() {
    return cdktn.Fn.tolist(this.getListAttribute('scheduled_backup_times'));
  }
  public set scheduledBackupTimes(value: string[]) {
    this._scheduledBackupTimes = value;
  }
  public resetScheduledBackupTimes() {
    this._scheduledBackupTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupTimesInput() {
    return this._scheduledBackupTimes;
  }

  // weeks_of_month - computed: false, optional: true, required: false
  private _weeksOfMonth?: string[]; 
  public get weeksOfMonth() {
    return cdktn.Fn.tolist(this.getListAttribute('weeks_of_month'));
  }
  public set weeksOfMonth(value: string[]) {
    this._weeksOfMonth = value;
  }
  public resetWeeksOfMonth() {
    this._weeksOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksOfMonthInput() {
    return this._weeksOfMonth;
  }
}

export class DataProtectionBackupPolicyDataLakeStorageRetentionRuleList extends cdktn.ComplexList {
  public internalValue? : DataProtectionBackupPolicyDataLakeStorageRetentionRule[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference {
    return new DataProtectionBackupPolicyDataLakeStorageRetentionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProtectionBackupPolicyDataLakeStorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#create DataProtectionBackupPolicyDataLakeStorage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#delete DataProtectionBackupPolicyDataLakeStorage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#read DataProtectionBackupPolicyDataLakeStorage#read}
  */
  readonly read?: string;
}

export function dataProtectionBackupPolicyDataLakeStorageTimeoutsToTerraform(struct?: DataProtectionBackupPolicyDataLakeStorageTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataProtectionBackupPolicyDataLakeStorageTimeoutsToHclTerraform(struct?: DataProtectionBackupPolicyDataLakeStorageTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProtectionBackupPolicyDataLakeStorageTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyDataLakeStorageTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage azurerm_data_protection_backup_policy_data_lake_storage}
*/
export class DataProtectionBackupPolicyDataLakeStorage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_protection_backup_policy_data_lake_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataProtectionBackupPolicyDataLakeStorage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProtectionBackupPolicyDataLakeStorage to import
  * @param importFromId The id of the existing DataProtectionBackupPolicyDataLakeStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProtectionBackupPolicyDataLakeStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_protection_backup_policy_data_lake_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/data_protection_backup_policy_data_lake_storage azurerm_data_protection_backup_policy_data_lake_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupPolicyDataLakeStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupPolicyDataLakeStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_policy_data_lake_storage',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.4.0',
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
    this._backupSchedule = config.backupSchedule;
    this._dataProtectionBackupVaultId = config.dataProtectionBackupVaultId;
    this._defaultRetentionDuration = config.defaultRetentionDuration;
    this._id = config.id;
    this._name = config.name;
    this._timeZone = config.timeZone;
    this._retentionRule.internalValue = config.retentionRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_schedule - computed: false, optional: false, required: true
  private _backupSchedule?: string[]; 
  public get backupSchedule() {
    return this.getListAttribute('backup_schedule');
  }
  public set backupSchedule(value: string[]) {
    this._backupSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule;
  }

  // data_protection_backup_vault_id - computed: false, optional: false, required: true
  private _dataProtectionBackupVaultId?: string; 
  public get dataProtectionBackupVaultId() {
    return this.getStringAttribute('data_protection_backup_vault_id');
  }
  public set dataProtectionBackupVaultId(value: string) {
    this._dataProtectionBackupVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionBackupVaultIdInput() {
    return this._dataProtectionBackupVaultId;
  }

  // default_retention_duration - computed: false, optional: false, required: true
  private _defaultRetentionDuration?: string; 
  public get defaultRetentionDuration() {
    return this.getStringAttribute('default_retention_duration');
  }
  public set defaultRetentionDuration(value: string) {
    this._defaultRetentionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionDurationInput() {
    return this._defaultRetentionDuration;
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

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // retention_rule - computed: false, optional: true, required: false
  private _retentionRule = new DataProtectionBackupPolicyDataLakeStorageRetentionRuleList(this, "retention_rule", false);
  public get retentionRule() {
    return this._retentionRule;
  }
  public putRetentionRule(value: DataProtectionBackupPolicyDataLakeStorageRetentionRule[] | cdktn.IResolvable) {
    this._retentionRule.internalValue = value;
  }
  public resetRetentionRule() {
    this._retentionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionRuleInput() {
    return this._retentionRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataProtectionBackupPolicyDataLakeStorageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataProtectionBackupPolicyDataLakeStorageTimeouts) {
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
      backup_schedule: cdktn.listMapper(cdktn.stringToTerraform, false)(this._backupSchedule),
      data_protection_backup_vault_id: cdktn.stringToTerraform(this._dataProtectionBackupVaultId),
      default_retention_duration: cdktn.stringToTerraform(this._defaultRetentionDuration),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      time_zone: cdktn.stringToTerraform(this._timeZone),
      retention_rule: cdktn.listMapper(dataProtectionBackupPolicyDataLakeStorageRetentionRuleToTerraform, true)(this._retentionRule.internalValue),
      timeouts: dataProtectionBackupPolicyDataLakeStorageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_schedule: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._backupSchedule),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_protection_backup_vault_id: {
        value: cdktn.stringToHclTerraform(this._dataProtectionBackupVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_retention_duration: {
        value: cdktn.stringToHclTerraform(this._defaultRetentionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      time_zone: {
        value: cdktn.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_rule: {
        value: cdktn.listMapperHcl(dataProtectionBackupPolicyDataLakeStorageRetentionRuleToHclTerraform, true)(this._retentionRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProtectionBackupPolicyDataLakeStorageRetentionRuleList",
      },
      timeouts: {
        value: dataProtectionBackupPolicyDataLakeStorageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProtectionBackupPolicyDataLakeStorageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
