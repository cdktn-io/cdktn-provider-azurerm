/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NewRelicTagRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#activity_log_enabled NewRelicTagRule#activity_log_enabled}
  */
  readonly activityLogEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#azure_active_directory_log_enabled NewRelicTagRule#azure_active_directory_log_enabled}
  */
  readonly azureActiveDirectoryLogEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#id NewRelicTagRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#metric_enabled NewRelicTagRule#metric_enabled}
  */
  readonly metricEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#monitor_id NewRelicTagRule#monitor_id}
  */
  readonly monitorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#subscription_log_enabled NewRelicTagRule#subscription_log_enabled}
  */
  readonly subscriptionLogEnabled?: boolean | cdktn.IResolvable;
  /**
  * log_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#log_tag_filter NewRelicTagRule#log_tag_filter}
  */
  readonly logTagFilter?: NewRelicTagRuleLogTagFilter[] | cdktn.IResolvable;
  /**
  * metric_tag_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#metric_tag_filter NewRelicTagRule#metric_tag_filter}
  */
  readonly metricTagFilter?: NewRelicTagRuleMetricTagFilter[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#timeouts NewRelicTagRule#timeouts}
  */
  readonly timeouts?: NewRelicTagRuleTimeouts;
}
export interface NewRelicTagRuleLogTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}
  */
  readonly value: string;
}

export function newRelicTagRuleLogTagFilterToTerraform(struct?: NewRelicTagRuleLogTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function newRelicTagRuleLogTagFilterToHclTerraform(struct?: NewRelicTagRuleLogTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NewRelicTagRuleLogTagFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NewRelicTagRuleLogTagFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NewRelicTagRuleLogTagFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NewRelicTagRuleLogTagFilterList extends cdktn.ComplexList {
  public internalValue? : NewRelicTagRuleLogTagFilter[] | cdktn.IResolvable

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
  public get(index: number): NewRelicTagRuleLogTagFilterOutputReference {
    return new NewRelicTagRuleLogTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NewRelicTagRuleMetricTagFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#action NewRelicTagRule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#name NewRelicTagRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#value NewRelicTagRule#value}
  */
  readonly value: string;
}

export function newRelicTagRuleMetricTagFilterToTerraform(struct?: NewRelicTagRuleMetricTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function newRelicTagRuleMetricTagFilterToHclTerraform(struct?: NewRelicTagRuleMetricTagFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NewRelicTagRuleMetricTagFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NewRelicTagRuleMetricTagFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NewRelicTagRuleMetricTagFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NewRelicTagRuleMetricTagFilterList extends cdktn.ComplexList {
  public internalValue? : NewRelicTagRuleMetricTagFilter[] | cdktn.IResolvable

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
  public get(index: number): NewRelicTagRuleMetricTagFilterOutputReference {
    return new NewRelicTagRuleMetricTagFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NewRelicTagRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#create NewRelicTagRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#delete NewRelicTagRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#read NewRelicTagRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#update NewRelicTagRule#update}
  */
  readonly update?: string;
}

export function newRelicTagRuleTimeoutsToTerraform(struct?: NewRelicTagRuleTimeouts | cdktn.IResolvable): any {
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


export function newRelicTagRuleTimeoutsToHclTerraform(struct?: NewRelicTagRuleTimeouts | cdktn.IResolvable): any {
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

export class NewRelicTagRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NewRelicTagRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NewRelicTagRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule azurerm_new_relic_tag_rule}
*/
export class NewRelicTagRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_new_relic_tag_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NewRelicTagRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NewRelicTagRule to import
  * @param importFromId The id of the existing NewRelicTagRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NewRelicTagRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_new_relic_tag_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/new_relic_tag_rule azurerm_new_relic_tag_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NewRelicTagRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NewRelicTagRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_new_relic_tag_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.81.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activityLogEnabled = config.activityLogEnabled;
    this._azureActiveDirectoryLogEnabled = config.azureActiveDirectoryLogEnabled;
    this._id = config.id;
    this._metricEnabled = config.metricEnabled;
    this._monitorId = config.monitorId;
    this._subscriptionLogEnabled = config.subscriptionLogEnabled;
    this._logTagFilter.internalValue = config.logTagFilter;
    this._metricTagFilter.internalValue = config.metricTagFilter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activity_log_enabled - computed: false, optional: true, required: false
  private _activityLogEnabled?: boolean | cdktn.IResolvable; 
  public get activityLogEnabled() {
    return this.getBooleanAttribute('activity_log_enabled');
  }
  public set activityLogEnabled(value: boolean | cdktn.IResolvable) {
    this._activityLogEnabled = value;
  }
  public resetActivityLogEnabled() {
    this._activityLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityLogEnabledInput() {
    return this._activityLogEnabled;
  }

  // azure_active_directory_log_enabled - computed: false, optional: true, required: false
  private _azureActiveDirectoryLogEnabled?: boolean | cdktn.IResolvable; 
  public get azureActiveDirectoryLogEnabled() {
    return this.getBooleanAttribute('azure_active_directory_log_enabled');
  }
  public set azureActiveDirectoryLogEnabled(value: boolean | cdktn.IResolvable) {
    this._azureActiveDirectoryLogEnabled = value;
  }
  public resetAzureActiveDirectoryLogEnabled() {
    this._azureActiveDirectoryLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryLogEnabledInput() {
    return this._azureActiveDirectoryLogEnabled;
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

  // metric_enabled - computed: false, optional: true, required: false
  private _metricEnabled?: boolean | cdktn.IResolvable; 
  public get metricEnabled() {
    return this.getBooleanAttribute('metric_enabled');
  }
  public set metricEnabled(value: boolean | cdktn.IResolvable) {
    this._metricEnabled = value;
  }
  public resetMetricEnabled() {
    this._metricEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricEnabledInput() {
    return this._metricEnabled;
  }

  // monitor_id - computed: false, optional: false, required: true
  private _monitorId?: string; 
  public get monitorId() {
    return this.getStringAttribute('monitor_id');
  }
  public set monitorId(value: string) {
    this._monitorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIdInput() {
    return this._monitorId;
  }

  // subscription_log_enabled - computed: false, optional: true, required: false
  private _subscriptionLogEnabled?: boolean | cdktn.IResolvable; 
  public get subscriptionLogEnabled() {
    return this.getBooleanAttribute('subscription_log_enabled');
  }
  public set subscriptionLogEnabled(value: boolean | cdktn.IResolvable) {
    this._subscriptionLogEnabled = value;
  }
  public resetSubscriptionLogEnabled() {
    this._subscriptionLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionLogEnabledInput() {
    return this._subscriptionLogEnabled;
  }

  // log_tag_filter - computed: false, optional: true, required: false
  private _logTagFilter = new NewRelicTagRuleLogTagFilterList(this, "log_tag_filter", false);
  public get logTagFilter() {
    return this._logTagFilter;
  }
  public putLogTagFilter(value: NewRelicTagRuleLogTagFilter[] | cdktn.IResolvable) {
    this._logTagFilter.internalValue = value;
  }
  public resetLogTagFilter() {
    this._logTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTagFilterInput() {
    return this._logTagFilter.internalValue;
  }

  // metric_tag_filter - computed: false, optional: true, required: false
  private _metricTagFilter = new NewRelicTagRuleMetricTagFilterList(this, "metric_tag_filter", false);
  public get metricTagFilter() {
    return this._metricTagFilter;
  }
  public putMetricTagFilter(value: NewRelicTagRuleMetricTagFilter[] | cdktn.IResolvable) {
    this._metricTagFilter.internalValue = value;
  }
  public resetMetricTagFilter() {
    this._metricTagFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTagFilterInput() {
    return this._metricTagFilter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NewRelicTagRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NewRelicTagRuleTimeouts) {
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
      activity_log_enabled: cdktn.booleanToTerraform(this._activityLogEnabled),
      azure_active_directory_log_enabled: cdktn.booleanToTerraform(this._azureActiveDirectoryLogEnabled),
      id: cdktn.stringToTerraform(this._id),
      metric_enabled: cdktn.booleanToTerraform(this._metricEnabled),
      monitor_id: cdktn.stringToTerraform(this._monitorId),
      subscription_log_enabled: cdktn.booleanToTerraform(this._subscriptionLogEnabled),
      log_tag_filter: cdktn.listMapper(newRelicTagRuleLogTagFilterToTerraform, true)(this._logTagFilter.internalValue),
      metric_tag_filter: cdktn.listMapper(newRelicTagRuleMetricTagFilterToTerraform, true)(this._metricTagFilter.internalValue),
      timeouts: newRelicTagRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activity_log_enabled: {
        value: cdktn.booleanToHclTerraform(this._activityLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      azure_active_directory_log_enabled: {
        value: cdktn.booleanToHclTerraform(this._azureActiveDirectoryLogEnabled),
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
      metric_enabled: {
        value: cdktn.booleanToHclTerraform(this._metricEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitor_id: {
        value: cdktn.stringToHclTerraform(this._monitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_log_enabled: {
        value: cdktn.booleanToHclTerraform(this._subscriptionLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_tag_filter: {
        value: cdktn.listMapperHcl(newRelicTagRuleLogTagFilterToHclTerraform, true)(this._logTagFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NewRelicTagRuleLogTagFilterList",
      },
      metric_tag_filter: {
        value: cdktn.listMapperHcl(newRelicTagRuleMetricTagFilterToHclTerraform, true)(this._metricTagFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NewRelicTagRuleMetricTagFilterList",
      },
      timeouts: {
        value: newRelicTagRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NewRelicTagRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
