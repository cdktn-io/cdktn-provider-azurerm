/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StorageAccountQueuePropertiesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#id StorageAccountQueueProperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueueProperties#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * cors_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueueProperties#cors_rule}
  */
  readonly corsRule?: StorageAccountQueuePropertiesCorsRule[] | cdktn.IResolvable;
  /**
  * hour_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueueProperties#hour_metrics}
  */
  readonly hourMetrics?: StorageAccountQueuePropertiesHourMetrics;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueueProperties#logging}
  */
  readonly logging?: StorageAccountQueuePropertiesLogging;
  /**
  * minute_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueueProperties#minute_metrics}
  */
  readonly minuteMetrics?: StorageAccountQueuePropertiesMinuteMetrics;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueueProperties#timeouts}
  */
  readonly timeouts?: StorageAccountQueuePropertiesTimeouts;
}
export interface StorageAccountQueuePropertiesCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueueProperties#allowed_headers}
  */
  readonly allowedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueueProperties#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueueProperties#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueueProperties#exposed_headers}
  */
  readonly exposedHeaders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueueProperties#max_age_in_seconds}
  */
  readonly maxAgeInSeconds: number;
}

export function storageAccountQueuePropertiesCorsRuleToTerraform(struct?: StorageAccountQueuePropertiesCorsRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposedHeaders),
    max_age_in_seconds: cdktn.numberToTerraform(struct!.maxAgeInSeconds),
  }
}


export function storageAccountQueuePropertiesCorsRuleToHclTerraform(struct?: StorageAccountQueuePropertiesCorsRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.maxAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesCorsRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): StorageAccountQueuePropertiesCorsRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesCorsRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allowed_headers - computed: false, optional: false, required: true
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: false, optional: false, required: true
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: false, optional: false, required: true
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // max_age_in_seconds - computed: false, optional: false, required: true
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}

export class StorageAccountQueuePropertiesCorsRuleList extends cdktn.ComplexList {
  public internalValue? : StorageAccountQueuePropertiesCorsRule[] | cdktn.IResolvable

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
  public get(index: number): StorageAccountQueuePropertiesCorsRuleOutputReference {
    return new StorageAccountQueuePropertiesCorsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountQueuePropertiesHourMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}
  */
  readonly includeApis?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}
  */
  readonly version: string;
}

export function storageAccountQueuePropertiesHourMetricsToTerraform(struct?: StorageAccountQueuePropertiesHourMetricsOutputReference | StorageAccountQueuePropertiesHourMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_apis: cdktn.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktn.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function storageAccountQueuePropertiesHourMetricsToHclTerraform(struct?: StorageAccountQueuePropertiesHourMetricsOutputReference | StorageAccountQueuePropertiesHourMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_apis: {
      value: cdktn.booleanToHclTerraform(struct!.includeApis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesHourMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesHourMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApis = this._includeApis;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesHourMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeApis = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeApis = value.includeApis;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
    }
  }

  // include_apis - computed: false, optional: true, required: false
  private _includeApis?: boolean | cdktn.IResolvable; 
  public get includeApis() {
    return this.getBooleanAttribute('include_apis');
  }
  public set includeApis(value: boolean | cdktn.IResolvable) {
    this._includeApis = value;
  }
  public resetIncludeApis() {
    this._includeApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApisInput() {
    return this._includeApis;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StorageAccountQueuePropertiesLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}
  */
  readonly delete: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}
  */
  readonly read: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#write StorageAccountQueueProperties#write}
  */
  readonly write: boolean | cdktn.IResolvable;
}

export function storageAccountQueuePropertiesLoggingToTerraform(struct?: StorageAccountQueuePropertiesLoggingOutputReference | StorageAccountQueuePropertiesLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete: cdktn.booleanToTerraform(struct!.delete),
    read: cdktn.booleanToTerraform(struct!.read),
    retention_policy_days: cdktn.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktn.stringToTerraform(struct!.version),
    write: cdktn.booleanToTerraform(struct!.write),
  }
}


export function storageAccountQueuePropertiesLoggingToHclTerraform(struct?: StorageAccountQueuePropertiesLoggingOutputReference | StorageAccountQueuePropertiesLogging): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete: {
      value: cdktn.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read: {
      value: cdktn.booleanToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktn.booleanToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesLoggingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delete = undefined;
      this._read = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delete = value.delete;
      this._read = value.read;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
      this._write = value.write;
    }
  }

  // delete - computed: false, optional: false, required: true
  private _delete?: boolean | cdktn.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktn.IResolvable) {
    this._delete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: false, required: true
  private _read?: boolean | cdktn.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktn.IResolvable) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // write - computed: false, optional: false, required: true
  private _write?: boolean | cdktn.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktn.IResolvable) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface StorageAccountQueuePropertiesMinuteMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueueProperties#include_apis}
  */
  readonly includeApis?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueueProperties#retention_policy_days}
  */
  readonly retentionPolicyDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#version StorageAccountQueueProperties#version}
  */
  readonly version: string;
}

export function storageAccountQueuePropertiesMinuteMetricsToTerraform(struct?: StorageAccountQueuePropertiesMinuteMetricsOutputReference | StorageAccountQueuePropertiesMinuteMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include_apis: cdktn.booleanToTerraform(struct!.includeApis),
    retention_policy_days: cdktn.numberToTerraform(struct!.retentionPolicyDays),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function storageAccountQueuePropertiesMinuteMetricsToHclTerraform(struct?: StorageAccountQueuePropertiesMinuteMetricsOutputReference | StorageAccountQueuePropertiesMinuteMetrics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include_apis: {
      value: cdktn.booleanToHclTerraform(struct!.includeApis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_policy_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionPolicyDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountQueuePropertiesMinuteMetricsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageAccountQueuePropertiesMinuteMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeApis = this._includeApis;
    }
    if (this._retentionPolicyDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyDays = this._retentionPolicyDays;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountQueuePropertiesMinuteMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeApis = undefined;
      this._retentionPolicyDays = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeApis = value.includeApis;
      this._retentionPolicyDays = value.retentionPolicyDays;
      this._version = value.version;
    }
  }

  // include_apis - computed: false, optional: true, required: false
  private _includeApis?: boolean | cdktn.IResolvable; 
  public get includeApis() {
    return this.getBooleanAttribute('include_apis');
  }
  public set includeApis(value: boolean | cdktn.IResolvable) {
    this._includeApis = value;
  }
  public resetIncludeApis() {
    this._includeApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeApisInput() {
    return this._includeApis;
  }

  // retention_policy_days - computed: false, optional: true, required: false
  private _retentionPolicyDays?: number; 
  public get retentionPolicyDays() {
    return this.getNumberAttribute('retention_policy_days');
  }
  public set retentionPolicyDays(value: number) {
    this._retentionPolicyDays = value;
  }
  public resetRetentionPolicyDays() {
    this._retentionPolicyDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyDaysInput() {
    return this._retentionPolicyDays;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface StorageAccountQueuePropertiesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#create StorageAccountQueueProperties#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueueProperties#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#read StorageAccountQueueProperties#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#update StorageAccountQueueProperties#update}
  */
  readonly update?: string;
}

export function storageAccountQueuePropertiesTimeoutsToTerraform(struct?: StorageAccountQueuePropertiesTimeouts | cdktn.IResolvable): any {
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


export function storageAccountQueuePropertiesTimeoutsToHclTerraform(struct?: StorageAccountQueuePropertiesTimeouts | cdktn.IResolvable): any {
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

export class StorageAccountQueuePropertiesTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageAccountQueuePropertiesTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: StorageAccountQueuePropertiesTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}
*/
export class StorageAccountQueueProperties extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_account_queue_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StorageAccountQueueProperties resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageAccountQueueProperties to import
  * @param importFromId The id of the existing StorageAccountQueueProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageAccountQueueProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_account_queue_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountQueuePropertiesConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAccountQueuePropertiesConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_queue_properties',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.2.0',
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
    this._id = config.id;
    this._storageAccountId = config.storageAccountId;
    this._corsRule.internalValue = config.corsRule;
    this._hourMetrics.internalValue = config.hourMetrics;
    this._logging.internalValue = config.logging;
    this._minuteMetrics.internalValue = config.minuteMetrics;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule = new StorageAccountQueuePropertiesCorsRuleList(this, "cors_rule", false);
  public get corsRule() {
    return this._corsRule;
  }
  public putCorsRule(value: StorageAccountQueuePropertiesCorsRule[] | cdktn.IResolvable) {
    this._corsRule.internalValue = value;
  }
  public resetCorsRule() {
    this._corsRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule.internalValue;
  }

  // hour_metrics - computed: false, optional: true, required: false
  private _hourMetrics = new StorageAccountQueuePropertiesHourMetricsOutputReference(this, "hour_metrics");
  public get hourMetrics() {
    return this._hourMetrics;
  }
  public putHourMetrics(value: StorageAccountQueuePropertiesHourMetrics) {
    this._hourMetrics.internalValue = value;
  }
  public resetHourMetrics() {
    this._hourMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourMetricsInput() {
    return this._hourMetrics.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new StorageAccountQueuePropertiesLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: StorageAccountQueuePropertiesLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // minute_metrics - computed: false, optional: true, required: false
  private _minuteMetrics = new StorageAccountQueuePropertiesMinuteMetricsOutputReference(this, "minute_metrics");
  public get minuteMetrics() {
    return this._minuteMetrics;
  }
  public putMinuteMetrics(value: StorageAccountQueuePropertiesMinuteMetrics) {
    this._minuteMetrics.internalValue = value;
  }
  public resetMinuteMetrics() {
    this._minuteMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteMetricsInput() {
    return this._minuteMetrics.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageAccountQueuePropertiesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageAccountQueuePropertiesTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      storage_account_id: cdktn.stringToTerraform(this._storageAccountId),
      cors_rule: cdktn.listMapper(storageAccountQueuePropertiesCorsRuleToTerraform, true)(this._corsRule.internalValue),
      hour_metrics: storageAccountQueuePropertiesHourMetricsToTerraform(this._hourMetrics.internalValue),
      logging: storageAccountQueuePropertiesLoggingToTerraform(this._logging.internalValue),
      minute_metrics: storageAccountQueuePropertiesMinuteMetricsToTerraform(this._minuteMetrics.internalValue),
      timeouts: storageAccountQueuePropertiesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_id: {
        value: cdktn.stringToHclTerraform(this._storageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors_rule: {
        value: cdktn.listMapperHcl(storageAccountQueuePropertiesCorsRuleToHclTerraform, true)(this._corsRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesCorsRuleList",
      },
      hour_metrics: {
        value: storageAccountQueuePropertiesHourMetricsToHclTerraform(this._hourMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesHourMetricsList",
      },
      logging: {
        value: storageAccountQueuePropertiesLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesLoggingList",
      },
      minute_metrics: {
        value: storageAccountQueuePropertiesMinuteMetricsToHclTerraform(this._minuteMetrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountQueuePropertiesMinuteMetricsList",
      },
      timeouts: {
        value: storageAccountQueuePropertiesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageAccountQueuePropertiesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
