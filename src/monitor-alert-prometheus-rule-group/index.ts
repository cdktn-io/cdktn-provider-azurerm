/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MonitorAlertPrometheusRuleGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}
  */
  readonly ruleGroupEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}
  */
  readonly scopes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#rule MonitorAlertPrometheusRuleGroup#rule}
  */
  readonly rule: MonitorAlertPrometheusRuleGroupRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#timeouts MonitorAlertPrometheusRuleGroup#timeouts}
  */
  readonly timeouts?: MonitorAlertPrometheusRuleGroupTimeouts;
}
export interface MonitorAlertPrometheusRuleGroupRuleAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#action_group_id MonitorAlertPrometheusRuleGroup#action_group_id}
  */
  readonly actionGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#action_properties MonitorAlertPrometheusRuleGroup#action_properties}
  */
  readonly actionProperties?: { [key: string]: string };
}

export function monitorAlertPrometheusRuleGroupRuleActionToTerraform(struct?: MonitorAlertPrometheusRuleGroupRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_group_id: cdktn.stringToTerraform(struct!.actionGroupId),
    action_properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.actionProperties),
  }
}


export function monitorAlertPrometheusRuleGroupRuleActionToHclTerraform(struct?: MonitorAlertPrometheusRuleGroupRuleAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_group_id: {
      value: cdktn.stringToHclTerraform(struct!.actionGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.actionProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertPrometheusRuleGroupRuleActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorAlertPrometheusRuleGroupRuleAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionGroupId = this._actionGroupId;
    }
    if (this._actionProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionProperties = this._actionProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertPrometheusRuleGroupRuleAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionGroupId = undefined;
      this._actionProperties = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionGroupId = value.actionGroupId;
      this._actionProperties = value.actionProperties;
    }
  }

  // action_group_id - computed: false, optional: false, required: true
  private _actionGroupId?: string; 
  public get actionGroupId() {
    return this.getStringAttribute('action_group_id');
  }
  public set actionGroupId(value: string) {
    this._actionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupIdInput() {
    return this._actionGroupId;
  }

  // action_properties - computed: false, optional: true, required: false
  private _actionProperties?: { [key: string]: string }; 
  public get actionProperties() {
    return this.getStringMapAttribute('action_properties');
  }
  public set actionProperties(value: { [key: string]: string }) {
    this._actionProperties = value;
  }
  public resetActionProperties() {
    this._actionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPropertiesInput() {
    return this._actionProperties;
  }
}

export class MonitorAlertPrometheusRuleGroupRuleActionList extends cdktn.ComplexList {
  public internalValue? : MonitorAlertPrometheusRuleGroupRuleAction[] | cdktn.IResolvable

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
  public get(index: number): MonitorAlertPrometheusRuleGroupRuleActionOutputReference {
    return new MonitorAlertPrometheusRuleGroupRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertPrometheusRuleGroupRuleAlertResolution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#auto_resolved MonitorAlertPrometheusRuleGroup#auto_resolved}
  */
  readonly autoResolved?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#time_to_resolve MonitorAlertPrometheusRuleGroup#time_to_resolve}
  */
  readonly timeToResolve?: string;
}

export function monitorAlertPrometheusRuleGroupRuleAlertResolutionToTerraform(struct?: MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference | MonitorAlertPrometheusRuleGroupRuleAlertResolution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_resolved: cdktn.booleanToTerraform(struct!.autoResolved),
    time_to_resolve: cdktn.stringToTerraform(struct!.timeToResolve),
  }
}


export function monitorAlertPrometheusRuleGroupRuleAlertResolutionToHclTerraform(struct?: MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference | MonitorAlertPrometheusRuleGroupRuleAlertResolution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_resolved: {
      value: cdktn.booleanToHclTerraform(struct!.autoResolved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_to_resolve: {
      value: cdktn.stringToHclTerraform(struct!.timeToResolve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAlertPrometheusRuleGroupRuleAlertResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoResolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoResolved = this._autoResolved;
    }
    if (this._timeToResolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToResolve = this._timeToResolve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertPrometheusRuleGroupRuleAlertResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoResolved = undefined;
      this._timeToResolve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoResolved = value.autoResolved;
      this._timeToResolve = value.timeToResolve;
    }
  }

  // auto_resolved - computed: false, optional: true, required: false
  private _autoResolved?: boolean | cdktn.IResolvable; 
  public get autoResolved() {
    return this.getBooleanAttribute('auto_resolved');
  }
  public set autoResolved(value: boolean | cdktn.IResolvable) {
    this._autoResolved = value;
  }
  public resetAutoResolved() {
    this._autoResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolvedInput() {
    return this._autoResolved;
  }

  // time_to_resolve - computed: false, optional: true, required: false
  private _timeToResolve?: string; 
  public get timeToResolve() {
    return this.getStringAttribute('time_to_resolve');
  }
  public set timeToResolve(value: string) {
    this._timeToResolve = value;
  }
  public resetTimeToResolve() {
    this._timeToResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToResolveInput() {
    return this._timeToResolve;
  }
}
export interface MonitorAlertPrometheusRuleGroupRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#alert MonitorAlertPrometheusRuleGroup#alert}
  */
  readonly alert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#annotations MonitorAlertPrometheusRuleGroup#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#enabled MonitorAlertPrometheusRuleGroup#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#expression MonitorAlertPrometheusRuleGroup#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#for MonitorAlertPrometheusRuleGroup#for}
  */
  readonly for?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#labels MonitorAlertPrometheusRuleGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#record MonitorAlertPrometheusRuleGroup#record}
  */
  readonly record?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#severity MonitorAlertPrometheusRuleGroup#severity}
  */
  readonly severity?: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#action MonitorAlertPrometheusRuleGroup#action}
  */
  readonly action?: MonitorAlertPrometheusRuleGroupRuleAction[] | cdktn.IResolvable;
  /**
  * alert_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#alert_resolution MonitorAlertPrometheusRuleGroup#alert_resolution}
  */
  readonly alertResolution?: MonitorAlertPrometheusRuleGroupRuleAlertResolution;
}

export function monitorAlertPrometheusRuleGroupRuleToTerraform(struct?: MonitorAlertPrometheusRuleGroupRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alert: cdktn.stringToTerraform(struct!.alert),
    annotations: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.annotations),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    expression: cdktn.stringToTerraform(struct!.expression),
    for: cdktn.stringToTerraform(struct!.for),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    record: cdktn.stringToTerraform(struct!.record),
    severity: cdktn.numberToTerraform(struct!.severity),
    action: cdktn.listMapper(monitorAlertPrometheusRuleGroupRuleActionToTerraform, true)(struct!.action),
    alert_resolution: monitorAlertPrometheusRuleGroupRuleAlertResolutionToTerraform(struct!.alertResolution),
  }
}


export function monitorAlertPrometheusRuleGroupRuleToHclTerraform(struct?: MonitorAlertPrometheusRuleGroupRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alert: {
      value: cdktn.stringToHclTerraform(struct!.alert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktn.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for: {
      value: cdktn.stringToHclTerraform(struct!.for),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    record: {
      value: cdktn.stringToHclTerraform(struct!.record),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: cdktn.listMapperHcl(monitorAlertPrometheusRuleGroupRuleActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertPrometheusRuleGroupRuleActionList",
    },
    alert_resolution: {
      value: monitorAlertPrometheusRuleGroupRuleAlertResolutionToHclTerraform(struct!.alertResolution),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAlertPrometheusRuleGroupRuleAlertResolutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAlertPrometheusRuleGroupRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorAlertPrometheusRuleGroupRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._for !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._record !== undefined) {
      hasAnyValues = true;
      internalValueResult.record = this._record;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._alertResolution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertResolution = this._alertResolution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAlertPrometheusRuleGroupRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._annotations = undefined;
      this._enabled = undefined;
      this._expression = undefined;
      this._for = undefined;
      this._labels = undefined;
      this._record = undefined;
      this._severity = undefined;
      this._action.internalValue = undefined;
      this._alertResolution.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._annotations = value.annotations;
      this._enabled = value.enabled;
      this._expression = value.expression;
      this._for = value.for;
      this._labels = value.labels;
      this._record = value.record;
      this._severity = value.severity;
      this._action.internalValue = value.action;
      this._alertResolution.internalValue = value.alertResolution;
    }
  }

  // alert - computed: false, optional: true, required: false
  private _alert?: string; 
  public get alert() {
    return this.getStringAttribute('alert');
  }
  public set alert(value: string) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // for - computed: false, optional: true, required: false
  private _for?: string; 
  public get for() {
    return this.getStringAttribute('for');
  }
  public set for(value: string) {
    this._for = value;
  }
  public resetFor() {
    this._for = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // record - computed: false, optional: true, required: false
  private _record?: string; 
  public get record() {
    return this.getStringAttribute('record');
  }
  public set record(value: string) {
    this._record = value;
  }
  public resetRecord() {
    this._record = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // action - computed: false, optional: true, required: false
  private _action = new MonitorAlertPrometheusRuleGroupRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: MonitorAlertPrometheusRuleGroupRuleAction[] | cdktn.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // alert_resolution - computed: false, optional: true, required: false
  private _alertResolution = new MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference(this, "alert_resolution");
  public get alertResolution() {
    return this._alertResolution;
  }
  public putAlertResolution(value: MonitorAlertPrometheusRuleGroupRuleAlertResolution) {
    this._alertResolution.internalValue = value;
  }
  public resetAlertResolution() {
    this._alertResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertResolutionInput() {
    return this._alertResolution.internalValue;
  }
}

export class MonitorAlertPrometheusRuleGroupRuleList extends cdktn.ComplexList {
  public internalValue? : MonitorAlertPrometheusRuleGroupRule[] | cdktn.IResolvable

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
  public get(index: number): MonitorAlertPrometheusRuleGroupRuleOutputReference {
    return new MonitorAlertPrometheusRuleGroupRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAlertPrometheusRuleGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#create MonitorAlertPrometheusRuleGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#delete MonitorAlertPrometheusRuleGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#read MonitorAlertPrometheusRuleGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#update MonitorAlertPrometheusRuleGroup#update}
  */
  readonly update?: string;
}

export function monitorAlertPrometheusRuleGroupTimeoutsToTerraform(struct?: MonitorAlertPrometheusRuleGroupTimeouts | cdktn.IResolvable): any {
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


export function monitorAlertPrometheusRuleGroupTimeoutsToHclTerraform(struct?: MonitorAlertPrometheusRuleGroupTimeouts | cdktn.IResolvable): any {
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

export class MonitorAlertPrometheusRuleGroupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorAlertPrometheusRuleGroupTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MonitorAlertPrometheusRuleGroupTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group azurerm_monitor_alert_prometheus_rule_group}
*/
export class MonitorAlertPrometheusRuleGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_alert_prometheus_rule_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MonitorAlertPrometheusRuleGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorAlertPrometheusRuleGroup to import
  * @param importFromId The id of the existing MonitorAlertPrometheusRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorAlertPrometheusRuleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_alert_prometheus_rule_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/resources/monitor_alert_prometheus_rule_group azurerm_monitor_alert_prometheus_rule_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAlertPrometheusRuleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAlertPrometheusRuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_alert_prometheus_rule_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.78.0',
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
    this._clusterName = config.clusterName;
    this._description = config.description;
    this._id = config.id;
    this._interval = config.interval;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._ruleGroupEnabled = config.ruleGroupEnabled;
    this._scopes = config.scopes;
    this._tags = config.tags;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // rule_group_enabled - computed: false, optional: true, required: false
  private _ruleGroupEnabled?: boolean | cdktn.IResolvable; 
  public get ruleGroupEnabled() {
    return this.getBooleanAttribute('rule_group_enabled');
  }
  public set ruleGroupEnabled(value: boolean | cdktn.IResolvable) {
    this._ruleGroupEnabled = value;
  }
  public resetRuleGroupEnabled() {
    this._ruleGroupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupEnabledInput() {
    return this._ruleGroupEnabled;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new MonitorAlertPrometheusRuleGroupRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: MonitorAlertPrometheusRuleGroupRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorAlertPrometheusRuleGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorAlertPrometheusRuleGroupTimeouts) {
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
      cluster_name: cdktn.stringToTerraform(this._clusterName),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      interval: cdktn.stringToTerraform(this._interval),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      rule_group_enabled: cdktn.booleanToTerraform(this._ruleGroupEnabled),
      scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._scopes),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      rule: cdktn.listMapper(monitorAlertPrometheusRuleGroupRuleToTerraform, true)(this._rule.internalValue),
      timeouts: monitorAlertPrometheusRuleGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktn.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      interval: {
        value: cdktn.stringToHclTerraform(this._interval),
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
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_group_enabled: {
        value: cdktn.booleanToHclTerraform(this._ruleGroupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rule: {
        value: cdktn.listMapperHcl(monitorAlertPrometheusRuleGroupRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAlertPrometheusRuleGroupRuleList",
      },
      timeouts: {
        value: monitorAlertPrometheusRuleGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorAlertPrometheusRuleGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
