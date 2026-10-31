/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataProtectionBackupPolicyCosmosdbAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_frequency DataProtectionBackupPolicyCosmosdbAccount#backup_frequency}
  */
  readonly backupFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#backup_schedule DataProtectionBackupPolicyCosmosdbAccount#backup_schedule}
  */
  readonly backupSchedule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#data_protection_backup_vault_id DataProtectionBackupPolicyCosmosdbAccount#data_protection_backup_vault_id}
  */
  readonly dataProtectionBackupVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#default_retention_duration DataProtectionBackupPolicyCosmosdbAccount#default_retention_duration}
  */
  readonly defaultRetentionDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#id DataProtectionBackupPolicyCosmosdbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#name DataProtectionBackupPolicyCosmosdbAccount#name}
  */
  readonly name: string;
  /**
  * monthly_retention_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#monthly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#monthly_retention_rule}
  */
  readonly monthlyRetentionRule?: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#timeouts DataProtectionBackupPolicyCosmosdbAccount#timeouts}
  */
  readonly timeouts?: DataProtectionBackupPolicyCosmosdbAccountTimeouts;
  /**
  * weekly_retention_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weekly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#weekly_retention_rule}
  */
  readonly weeklyRetentionRule?: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule;
  /**
  * yearly_retention_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#yearly_retention_rule DataProtectionBackupPolicyCosmosdbAccount#yearly_retention_rule}
  */
  readonly yearlyRetentionRule?: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule;
}
export interface DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}
  */
  readonly weeksOfMonth?: string[];
}

export function dataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference | DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
    duration: cdktn.stringToTerraform(struct!.duration),
    weeks_of_month: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.weeksOfMonth),
  }
}


export function dataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleToHclTerraform(struct?: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference | DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._duration = undefined;
      this._weeksOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._duration = value.duration;
      this._weeksOfMonth = value.weeksOfMonth;
    }
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
export interface DataProtectionBackupPolicyCosmosdbAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#create DataProtectionBackupPolicyCosmosdbAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#delete DataProtectionBackupPolicyCosmosdbAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#read DataProtectionBackupPolicyCosmosdbAccount#read}
  */
  readonly read?: string;
}

export function dataProtectionBackupPolicyCosmosdbAccountTimeoutsToTerraform(struct?: DataProtectionBackupPolicyCosmosdbAccountTimeouts | cdktn.IResolvable): any {
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


export function dataProtectionBackupPolicyCosmosdbAccountTimeoutsToHclTerraform(struct?: DataProtectionBackupPolicyCosmosdbAccountTimeouts | cdktn.IResolvable): any {
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

export class DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProtectionBackupPolicyCosmosdbAccountTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataProtectionBackupPolicyCosmosdbAccountTimeouts | cdktn.IResolvable | undefined) {
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
export interface DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}
  */
  readonly duration: string;
}

export function dataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference | DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
    duration: cdktn.stringToTerraform(struct!.duration),
  }
}


export function dataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleToHclTerraform(struct?: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference | DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._duration = value.duration;
    }
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
}
export interface DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#days_of_week DataProtectionBackupPolicyCosmosdbAccount#days_of_week}
  */
  readonly daysOfWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#duration DataProtectionBackupPolicyCosmosdbAccount#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#months_of_year DataProtectionBackupPolicyCosmosdbAccount#months_of_year}
  */
  readonly monthsOfYear?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#weeks_of_month DataProtectionBackupPolicyCosmosdbAccount#weeks_of_month}
  */
  readonly weeksOfMonth?: string[];
}

export function dataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleToTerraform(struct?: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference | DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
    duration: cdktn.stringToTerraform(struct!.duration),
    months_of_year: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.monthsOfYear),
    weeks_of_month: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.weeksOfMonth),
  }
}


export function dataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleToHclTerraform(struct?: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference | DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
      this._duration = undefined;
      this._monthsOfYear = undefined;
      this._weeksOfMonth = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
      this._duration = value.duration;
      this._monthsOfYear = value.monthsOfYear;
      this._weeksOfMonth = value.weeksOfMonth;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account azurerm_data_protection_backup_policy_cosmosdb_account}
*/
export class DataProtectionBackupPolicyCosmosdbAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_protection_backup_policy_cosmosdb_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataProtectionBackupPolicyCosmosdbAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProtectionBackupPolicyCosmosdbAccount to import
  * @param importFromId The id of the existing DataProtectionBackupPolicyCosmosdbAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProtectionBackupPolicyCosmosdbAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_protection_backup_policy_cosmosdb_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/resources/data_protection_backup_policy_cosmosdb_account azurerm_data_protection_backup_policy_cosmosdb_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupPolicyCosmosdbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupPolicyCosmosdbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_policy_cosmosdb_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.12.0',
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
    this._backupFrequency = config.backupFrequency;
    this._backupSchedule = config.backupSchedule;
    this._dataProtectionBackupVaultId = config.dataProtectionBackupVaultId;
    this._defaultRetentionDuration = config.defaultRetentionDuration;
    this._id = config.id;
    this._name = config.name;
    this._monthlyRetentionRule.internalValue = config.monthlyRetentionRule;
    this._timeouts.internalValue = config.timeouts;
    this._weeklyRetentionRule.internalValue = config.weeklyRetentionRule;
    this._yearlyRetentionRule.internalValue = config.yearlyRetentionRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_frequency - computed: false, optional: true, required: false
  private _backupFrequency?: string; 
  public get backupFrequency() {
    return this.getStringAttribute('backup_frequency');
  }
  public set backupFrequency(value: string) {
    this._backupFrequency = value;
  }
  public resetBackupFrequency() {
    this._backupFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFrequencyInput() {
    return this._backupFrequency;
  }

  // backup_schedule - computed: false, optional: false, required: true
  private _backupSchedule?: string; 
  public get backupSchedule() {
    return this.getStringAttribute('backup_schedule');
  }
  public set backupSchedule(value: string) {
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

  // incremental_backup_schedules - computed: true, optional: false, required: false
  public get incrementalBackupSchedules() {
    return this.getListAttribute('incremental_backup_schedules');
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

  // monthly_retention_rule - computed: false, optional: true, required: false
  private _monthlyRetentionRule = new DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleOutputReference(this, "monthly_retention_rule");
  public get monthlyRetentionRule() {
    return this._monthlyRetentionRule;
  }
  public putMonthlyRetentionRule(value: DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRule) {
    this._monthlyRetentionRule.internalValue = value;
  }
  public resetMonthlyRetentionRule() {
    this._monthlyRetentionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRetentionRuleInput() {
    return this._monthlyRetentionRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataProtectionBackupPolicyCosmosdbAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataProtectionBackupPolicyCosmosdbAccountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // weekly_retention_rule - computed: false, optional: true, required: false
  private _weeklyRetentionRule = new DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleOutputReference(this, "weekly_retention_rule");
  public get weeklyRetentionRule() {
    return this._weeklyRetentionRule;
  }
  public putWeeklyRetentionRule(value: DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRule) {
    this._weeklyRetentionRule.internalValue = value;
  }
  public resetWeeklyRetentionRule() {
    this._weeklyRetentionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRetentionRuleInput() {
    return this._weeklyRetentionRule.internalValue;
  }

  // yearly_retention_rule - computed: false, optional: true, required: false
  private _yearlyRetentionRule = new DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleOutputReference(this, "yearly_retention_rule");
  public get yearlyRetentionRule() {
    return this._yearlyRetentionRule;
  }
  public putYearlyRetentionRule(value: DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRule) {
    this._yearlyRetentionRule.internalValue = value;
  }
  public resetYearlyRetentionRule() {
    this._yearlyRetentionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyRetentionRuleInput() {
    return this._yearlyRetentionRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_frequency: cdktn.stringToTerraform(this._backupFrequency),
      backup_schedule: cdktn.stringToTerraform(this._backupSchedule),
      data_protection_backup_vault_id: cdktn.stringToTerraform(this._dataProtectionBackupVaultId),
      default_retention_duration: cdktn.stringToTerraform(this._defaultRetentionDuration),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      monthly_retention_rule: dataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleToTerraform(this._monthlyRetentionRule.internalValue),
      timeouts: dataProtectionBackupPolicyCosmosdbAccountTimeoutsToTerraform(this._timeouts.internalValue),
      weekly_retention_rule: dataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleToTerraform(this._weeklyRetentionRule.internalValue),
      yearly_retention_rule: dataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleToTerraform(this._yearlyRetentionRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_frequency: {
        value: cdktn.stringToHclTerraform(this._backupFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_schedule: {
        value: cdktn.stringToHclTerraform(this._backupSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      monthly_retention_rule: {
        value: dataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleToHclTerraform(this._monthlyRetentionRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProtectionBackupPolicyCosmosdbAccountMonthlyRetentionRuleList",
      },
      timeouts: {
        value: dataProtectionBackupPolicyCosmosdbAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProtectionBackupPolicyCosmosdbAccountTimeouts",
      },
      weekly_retention_rule: {
        value: dataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleToHclTerraform(this._weeklyRetentionRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProtectionBackupPolicyCosmosdbAccountWeeklyRetentionRuleList",
      },
      yearly_retention_rule: {
        value: dataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleToHclTerraform(this._yearlyRetentionRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProtectionBackupPolicyCosmosdbAccountYearlyRetentionRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
