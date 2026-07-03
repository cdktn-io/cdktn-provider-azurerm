/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MonitorScheduledQueryRulesAlertConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#authorized_resource_ids MonitorScheduledQueryRulesAlert#authorized_resource_ids}
  */
  readonly authorizedResourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#auto_mitigation_enabled MonitorScheduledQueryRulesAlert#auto_mitigation_enabled}
  */
  readonly autoMitigationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#data_source_id MonitorScheduledQueryRulesAlert#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#description MonitorScheduledQueryRulesAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#enabled MonitorScheduledQueryRulesAlert#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#frequency MonitorScheduledQueryRulesAlert#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#id MonitorScheduledQueryRulesAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#location MonitorScheduledQueryRulesAlert#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#name MonitorScheduledQueryRulesAlert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#query MonitorScheduledQueryRulesAlert#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#query_type MonitorScheduledQueryRulesAlert#query_type}
  */
  readonly queryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#resource_group_name MonitorScheduledQueryRulesAlert#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#severity MonitorScheduledQueryRulesAlert#severity}
  */
  readonly severity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#tags MonitorScheduledQueryRulesAlert#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#throttling MonitorScheduledQueryRulesAlert#throttling}
  */
  readonly throttling?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#time_window MonitorScheduledQueryRulesAlert#time_window}
  */
  readonly timeWindow: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#action MonitorScheduledQueryRulesAlert#action}
  */
  readonly action: MonitorScheduledQueryRulesAlertAction;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#timeouts MonitorScheduledQueryRulesAlert#timeouts}
  */
  readonly timeouts?: MonitorScheduledQueryRulesAlertTimeouts;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#trigger MonitorScheduledQueryRulesAlert#trigger}
  */
  readonly trigger: MonitorScheduledQueryRulesAlertTrigger;
}
export interface MonitorScheduledQueryRulesAlertAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#action_group MonitorScheduledQueryRulesAlert#action_group}
  */
  readonly actionGroup: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#custom_webhook_payload MonitorScheduledQueryRulesAlert#custom_webhook_payload}
  */
  readonly customWebhookPayload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#email_subject MonitorScheduledQueryRulesAlert#email_subject}
  */
  readonly emailSubject?: string;
}

export function monitorScheduledQueryRulesAlertActionToTerraform(struct?: MonitorScheduledQueryRulesAlertActionOutputReference | MonitorScheduledQueryRulesAlertAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_group: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actionGroup),
    custom_webhook_payload: cdktn.stringToTerraform(struct!.customWebhookPayload),
    email_subject: cdktn.stringToTerraform(struct!.emailSubject),
  }
}


export function monitorScheduledQueryRulesAlertActionToHclTerraform(struct?: MonitorScheduledQueryRulesAlertActionOutputReference | MonitorScheduledQueryRulesAlertAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_group: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actionGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_webhook_payload: {
      value: cdktn.stringToHclTerraform(struct!.customWebhookPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_subject: {
      value: cdktn.stringToHclTerraform(struct!.emailSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorScheduledQueryRulesAlertActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorScheduledQueryRulesAlertAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionGroup = this._actionGroup;
    }
    if (this._customWebhookPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.customWebhookPayload = this._customWebhookPayload;
    }
    if (this._emailSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSubject = this._emailSubject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorScheduledQueryRulesAlertAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionGroup = undefined;
      this._customWebhookPayload = undefined;
      this._emailSubject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionGroup = value.actionGroup;
      this._customWebhookPayload = value.customWebhookPayload;
      this._emailSubject = value.emailSubject;
    }
  }

  // action_group - computed: false, optional: false, required: true
  private _actionGroup?: string[]; 
  public get actionGroup() {
    return cdktn.Fn.tolist(this.getListAttribute('action_group'));
  }
  public set actionGroup(value: string[]) {
    this._actionGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionGroupInput() {
    return this._actionGroup;
  }

  // custom_webhook_payload - computed: false, optional: true, required: false
  private _customWebhookPayload?: string; 
  public get customWebhookPayload() {
    return this.getStringAttribute('custom_webhook_payload');
  }
  public set customWebhookPayload(value: string) {
    this._customWebhookPayload = value;
  }
  public resetCustomWebhookPayload() {
    this._customWebhookPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customWebhookPayloadInput() {
    return this._customWebhookPayload;
  }

  // email_subject - computed: false, optional: true, required: false
  private _emailSubject?: string; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject;
  }
}
export interface MonitorScheduledQueryRulesAlertTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#create MonitorScheduledQueryRulesAlert#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#delete MonitorScheduledQueryRulesAlert#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#read MonitorScheduledQueryRulesAlert#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#update MonitorScheduledQueryRulesAlert#update}
  */
  readonly update?: string;
}

export function monitorScheduledQueryRulesAlertTimeoutsToTerraform(struct?: MonitorScheduledQueryRulesAlertTimeouts | cdktn.IResolvable): any {
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


export function monitorScheduledQueryRulesAlertTimeoutsToHclTerraform(struct?: MonitorScheduledQueryRulesAlertTimeouts | cdktn.IResolvable): any {
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

export class MonitorScheduledQueryRulesAlertTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorScheduledQueryRulesAlertTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MonitorScheduledQueryRulesAlertTimeouts | cdktn.IResolvable | undefined) {
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
export interface MonitorScheduledQueryRulesAlertTriggerMetricTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#metric_column MonitorScheduledQueryRulesAlert#metric_column}
  */
  readonly metricColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#metric_trigger_type MonitorScheduledQueryRulesAlert#metric_trigger_type}
  */
  readonly metricTriggerType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}
  */
  readonly threshold: number;
}

export function monitorScheduledQueryRulesAlertTriggerMetricTriggerToTerraform(struct?: MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference | MonitorScheduledQueryRulesAlertTriggerMetricTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_column: cdktn.stringToTerraform(struct!.metricColumn),
    metric_trigger_type: cdktn.stringToTerraform(struct!.metricTriggerType),
    operator: cdktn.stringToTerraform(struct!.operator),
    threshold: cdktn.numberToTerraform(struct!.threshold),
  }
}


export function monitorScheduledQueryRulesAlertTriggerMetricTriggerToHclTerraform(struct?: MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference | MonitorScheduledQueryRulesAlertTriggerMetricTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_column: {
      value: cdktn.stringToHclTerraform(struct!.metricColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_trigger_type: {
      value: cdktn.stringToHclTerraform(struct!.metricTriggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorScheduledQueryRulesAlertTriggerMetricTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricColumn = this._metricColumn;
    }
    if (this._metricTriggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTriggerType = this._metricTriggerType;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorScheduledQueryRulesAlertTriggerMetricTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricColumn = undefined;
      this._metricTriggerType = undefined;
      this._operator = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricColumn = value.metricColumn;
      this._metricTriggerType = value.metricTriggerType;
      this._operator = value.operator;
      this._threshold = value.threshold;
    }
  }

  // metric_column - computed: false, optional: true, required: false
  private _metricColumn?: string; 
  public get metricColumn() {
    return this.getStringAttribute('metric_column');
  }
  public set metricColumn(value: string) {
    this._metricColumn = value;
  }
  public resetMetricColumn() {
    this._metricColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricColumnInput() {
    return this._metricColumn;
  }

  // metric_trigger_type - computed: false, optional: false, required: true
  private _metricTriggerType?: string; 
  public get metricTriggerType() {
    return this.getStringAttribute('metric_trigger_type');
  }
  public set metricTriggerType(value: string) {
    this._metricTriggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTriggerTypeInput() {
    return this._metricTriggerType;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface MonitorScheduledQueryRulesAlertTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#operator MonitorScheduledQueryRulesAlert#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#threshold MonitorScheduledQueryRulesAlert#threshold}
  */
  readonly threshold: number;
  /**
  * metric_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#metric_trigger MonitorScheduledQueryRulesAlert#metric_trigger}
  */
  readonly metricTrigger?: MonitorScheduledQueryRulesAlertTriggerMetricTrigger;
}

export function monitorScheduledQueryRulesAlertTriggerToTerraform(struct?: MonitorScheduledQueryRulesAlertTriggerOutputReference | MonitorScheduledQueryRulesAlertTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    threshold: cdktn.numberToTerraform(struct!.threshold),
    metric_trigger: monitorScheduledQueryRulesAlertTriggerMetricTriggerToTerraform(struct!.metricTrigger),
  }
}


export function monitorScheduledQueryRulesAlertTriggerToHclTerraform(struct?: MonitorScheduledQueryRulesAlertTriggerOutputReference | MonitorScheduledQueryRulesAlertTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_trigger: {
      value: monitorScheduledQueryRulesAlertTriggerMetricTriggerToHclTerraform(struct!.metricTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorScheduledQueryRulesAlertTriggerMetricTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorScheduledQueryRulesAlertTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorScheduledQueryRulesAlertTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._metricTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTrigger = this._metricTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorScheduledQueryRulesAlertTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._threshold = undefined;
      this._metricTrigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._threshold = value.threshold;
      this._metricTrigger.internalValue = value.metricTrigger;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // metric_trigger - computed: false, optional: true, required: false
  private _metricTrigger = new MonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference(this, "metric_trigger");
  public get metricTrigger() {
    return this._metricTrigger;
  }
  public putMetricTrigger(value: MonitorScheduledQueryRulesAlertTriggerMetricTrigger) {
    this._metricTrigger.internalValue = value;
  }
  public resetMetricTrigger() {
    this._metricTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTriggerInput() {
    return this._metricTrigger.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert azurerm_monitor_scheduled_query_rules_alert}
*/
export class MonitorScheduledQueryRulesAlert extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_scheduled_query_rules_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MonitorScheduledQueryRulesAlert resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorScheduledQueryRulesAlert to import
  * @param importFromId The id of the existing MonitorScheduledQueryRulesAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorScheduledQueryRulesAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_scheduled_query_rules_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/monitor_scheduled_query_rules_alert azurerm_monitor_scheduled_query_rules_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorScheduledQueryRulesAlertConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorScheduledQueryRulesAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_scheduled_query_rules_alert',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.80.0',
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
    this._authorizedResourceIds = config.authorizedResourceIds;
    this._autoMitigationEnabled = config.autoMitigationEnabled;
    this._dataSourceId = config.dataSourceId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._frequency = config.frequency;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._query = config.query;
    this._queryType = config.queryType;
    this._resourceGroupName = config.resourceGroupName;
    this._severity = config.severity;
    this._tags = config.tags;
    this._throttling = config.throttling;
    this._timeWindow = config.timeWindow;
    this._action.internalValue = config.action;
    this._timeouts.internalValue = config.timeouts;
    this._trigger.internalValue = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_resource_ids - computed: false, optional: true, required: false
  private _authorizedResourceIds?: string[]; 
  public get authorizedResourceIds() {
    return cdktn.Fn.tolist(this.getListAttribute('authorized_resource_ids'));
  }
  public set authorizedResourceIds(value: string[]) {
    this._authorizedResourceIds = value;
  }
  public resetAuthorizedResourceIds() {
    this._authorizedResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedResourceIdsInput() {
    return this._authorizedResourceIds;
  }

  // auto_mitigation_enabled - computed: false, optional: true, required: false
  private _autoMitigationEnabled?: boolean | cdktn.IResolvable; 
  public get autoMitigationEnabled() {
    return this.getBooleanAttribute('auto_mitigation_enabled');
  }
  public set autoMitigationEnabled(value: boolean | cdktn.IResolvable) {
    this._autoMitigationEnabled = value;
  }
  public resetAutoMitigationEnabled() {
    this._autoMitigationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMitigationEnabledInput() {
    return this._autoMitigationEnabled;
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
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

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_type - computed: false, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
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

  // throttling - computed: false, optional: true, required: false
  private _throttling?: number; 
  public get throttling() {
    return this.getNumberAttribute('throttling');
  }
  public set throttling(value: number) {
    this._throttling = value;
  }
  public resetThrottling() {
    this._throttling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingInput() {
    return this._throttling;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // action - computed: false, optional: false, required: true
  private _action = new MonitorScheduledQueryRulesAlertActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: MonitorScheduledQueryRulesAlertAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorScheduledQueryRulesAlertTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorScheduledQueryRulesAlertTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new MonitorScheduledQueryRulesAlertTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: MonitorScheduledQueryRulesAlertTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized_resource_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._authorizedResourceIds),
      auto_mitigation_enabled: cdktn.booleanToTerraform(this._autoMitigationEnabled),
      data_source_id: cdktn.stringToTerraform(this._dataSourceId),
      description: cdktn.stringToTerraform(this._description),
      enabled: cdktn.booleanToTerraform(this._enabled),
      frequency: cdktn.numberToTerraform(this._frequency),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      query: cdktn.stringToTerraform(this._query),
      query_type: cdktn.stringToTerraform(this._queryType),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      severity: cdktn.numberToTerraform(this._severity),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      throttling: cdktn.numberToTerraform(this._throttling),
      time_window: cdktn.numberToTerraform(this._timeWindow),
      action: monitorScheduledQueryRulesAlertActionToTerraform(this._action.internalValue),
      timeouts: monitorScheduledQueryRulesAlertTimeoutsToTerraform(this._timeouts.internalValue),
      trigger: monitorScheduledQueryRulesAlertTriggerToTerraform(this._trigger.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_resource_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._authorizedResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_mitigation_enabled: {
        value: cdktn.booleanToHclTerraform(this._autoMitigationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_source_id: {
        value: cdktn.stringToHclTerraform(this._dataSourceId),
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
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frequency: {
        value: cdktn.numberToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      query: {
        value: cdktn.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_type: {
        value: cdktn.stringToHclTerraform(this._queryType),
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
      severity: {
        value: cdktn.numberToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      throttling: {
        value: cdktn.numberToHclTerraform(this._throttling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_window: {
        value: cdktn.numberToHclTerraform(this._timeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action: {
        value: monitorScheduledQueryRulesAlertActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorScheduledQueryRulesAlertActionList",
      },
      timeouts: {
        value: monitorScheduledQueryRulesAlertTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorScheduledQueryRulesAlertTimeouts",
      },
      trigger: {
        value: monitorScheduledQueryRulesAlertTriggerToHclTerraform(this._trigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorScheduledQueryRulesAlertTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
