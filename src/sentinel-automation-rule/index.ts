/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SentinelAutomationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#condition_json SentinelAutomationRule#condition_json}
  */
  readonly conditionJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#display_name SentinelAutomationRule#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#enabled SentinelAutomationRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#expiration SentinelAutomationRule#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#id SentinelAutomationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#log_analytics_workspace_id SentinelAutomationRule#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#name SentinelAutomationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#triggers_on SentinelAutomationRule#triggers_on}
  */
  readonly triggersOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#triggers_when SentinelAutomationRule#triggers_when}
  */
  readonly triggersWhen?: string;
  /**
  * action_incident block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#action_incident SentinelAutomationRule#action_incident}
  */
  readonly actionIncident?: SentinelAutomationRuleActionIncident[] | cdktn.IResolvable;
  /**
  * action_incident_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#action_incident_task SentinelAutomationRule#action_incident_task}
  */
  readonly actionIncidentTask?: SentinelAutomationRuleActionIncidentTask[] | cdktn.IResolvable;
  /**
  * action_playbook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#action_playbook SentinelAutomationRule#action_playbook}
  */
  readonly actionPlaybook?: SentinelAutomationRuleActionPlaybook[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#timeouts SentinelAutomationRule#timeouts}
  */
  readonly timeouts?: SentinelAutomationRuleTimeouts;
}
export interface SentinelAutomationRuleActionIncident {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#classification SentinelAutomationRule#classification}
  */
  readonly classification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#classification_comment SentinelAutomationRule#classification_comment}
  */
  readonly classificationComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#labels SentinelAutomationRule#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#owner_id SentinelAutomationRule#owner_id}
  */
  readonly ownerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#severity SentinelAutomationRule#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#status SentinelAutomationRule#status}
  */
  readonly status?: string;
}

export function sentinelAutomationRuleActionIncidentToTerraform(struct?: SentinelAutomationRuleActionIncident | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    classification: cdktn.stringToTerraform(struct!.classification),
    classification_comment: cdktn.stringToTerraform(struct!.classificationComment),
    labels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.labels),
    order: cdktn.numberToTerraform(struct!.order),
    owner_id: cdktn.stringToTerraform(struct!.ownerId),
    severity: cdktn.stringToTerraform(struct!.severity),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function sentinelAutomationRuleActionIncidentToHclTerraform(struct?: SentinelAutomationRuleActionIncident | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    classification: {
      value: cdktn.stringToHclTerraform(struct!.classification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classification_comment: {
      value: cdktn.stringToHclTerraform(struct!.classificationComment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    order: {
      value: cdktn.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    owner_id: {
      value: cdktn.stringToHclTerraform(struct!.ownerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktn.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAutomationRuleActionIncidentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SentinelAutomationRuleActionIncident | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classification !== undefined) {
      hasAnyValues = true;
      internalValueResult.classification = this._classification;
    }
    if (this._classificationComment !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationComment = this._classificationComment;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._ownerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerId = this._ownerId;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAutomationRuleActionIncident | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classification = undefined;
      this._classificationComment = undefined;
      this._labels = undefined;
      this._order = undefined;
      this._ownerId = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classification = value.classification;
      this._classificationComment = value.classificationComment;
      this._labels = value.labels;
      this._order = value.order;
      this._ownerId = value.ownerId;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // classification - computed: false, optional: true, required: false
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  public resetClassification() {
    this._classification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification;
  }

  // classification_comment - computed: false, optional: true, required: false
  private _classificationComment?: string; 
  public get classificationComment() {
    return this.getStringAttribute('classification_comment');
  }
  public set classificationComment(value: string) {
    this._classificationComment = value;
  }
  public resetClassificationComment() {
    this._classificationComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationCommentInput() {
    return this._classificationComment;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SentinelAutomationRuleActionIncidentList extends cdktn.ComplexList {
  public internalValue? : SentinelAutomationRuleActionIncident[] | cdktn.IResolvable

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
  public get(index: number): SentinelAutomationRuleActionIncidentOutputReference {
    return new SentinelAutomationRuleActionIncidentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAutomationRuleActionIncidentTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#description SentinelAutomationRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#title SentinelAutomationRule#title}
  */
  readonly title: string;
}

export function sentinelAutomationRuleActionIncidentTaskToTerraform(struct?: SentinelAutomationRuleActionIncidentTask | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    order: cdktn.numberToTerraform(struct!.order),
    title: cdktn.stringToTerraform(struct!.title),
  }
}


export function sentinelAutomationRuleActionIncidentTaskToHclTerraform(struct?: SentinelAutomationRuleActionIncidentTask | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAutomationRuleActionIncidentTaskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SentinelAutomationRuleActionIncidentTask | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAutomationRuleActionIncidentTask | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._order = undefined;
      this._title = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._order = value.order;
      this._title = value.title;
    }
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class SentinelAutomationRuleActionIncidentTaskList extends cdktn.ComplexList {
  public internalValue? : SentinelAutomationRuleActionIncidentTask[] | cdktn.IResolvable

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
  public get(index: number): SentinelAutomationRuleActionIncidentTaskOutputReference {
    return new SentinelAutomationRuleActionIncidentTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAutomationRuleActionPlaybook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#logic_app_id SentinelAutomationRule#logic_app_id}
  */
  readonly logicAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#order SentinelAutomationRule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#tenant_id SentinelAutomationRule#tenant_id}
  */
  readonly tenantId?: string;
}

export function sentinelAutomationRuleActionPlaybookToTerraform(struct?: SentinelAutomationRuleActionPlaybook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    logic_app_id: cdktn.stringToTerraform(struct!.logicAppId),
    order: cdktn.numberToTerraform(struct!.order),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function sentinelAutomationRuleActionPlaybookToHclTerraform(struct?: SentinelAutomationRuleActionPlaybook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    logic_app_id: {
      value: cdktn.stringToHclTerraform(struct!.logicAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktn.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelAutomationRuleActionPlaybookOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SentinelAutomationRuleActionPlaybook | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicAppId = this._logicAppId;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelAutomationRuleActionPlaybook | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logicAppId = undefined;
      this._order = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logicAppId = value.logicAppId;
      this._order = value.order;
      this._tenantId = value.tenantId;
    }
  }

  // logic_app_id - computed: false, optional: false, required: true
  private _logicAppId?: string; 
  public get logicAppId() {
    return this.getStringAttribute('logic_app_id');
  }
  public set logicAppId(value: string) {
    this._logicAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicAppIdInput() {
    return this._logicAppId;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class SentinelAutomationRuleActionPlaybookList extends cdktn.ComplexList {
  public internalValue? : SentinelAutomationRuleActionPlaybook[] | cdktn.IResolvable

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
  public get(index: number): SentinelAutomationRuleActionPlaybookOutputReference {
    return new SentinelAutomationRuleActionPlaybookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SentinelAutomationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#create SentinelAutomationRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#delete SentinelAutomationRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#read SentinelAutomationRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#update SentinelAutomationRule#update}
  */
  readonly update?: string;
}

export function sentinelAutomationRuleTimeoutsToTerraform(struct?: SentinelAutomationRuleTimeouts | cdktn.IResolvable): any {
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


export function sentinelAutomationRuleTimeoutsToHclTerraform(struct?: SentinelAutomationRuleTimeouts | cdktn.IResolvable): any {
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

export class SentinelAutomationRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelAutomationRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SentinelAutomationRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule azurerm_sentinel_automation_rule}
*/
export class SentinelAutomationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_automation_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SentinelAutomationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelAutomationRule to import
  * @param importFromId The id of the existing SentinelAutomationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelAutomationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_sentinel_automation_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/sentinel_automation_rule azurerm_sentinel_automation_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelAutomationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelAutomationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_automation_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.77.0',
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
    this._conditionJson = config.conditionJson;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._expiration = config.expiration;
    this._id = config.id;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._order = config.order;
    this._triggersOn = config.triggersOn;
    this._triggersWhen = config.triggersWhen;
    this._actionIncident.internalValue = config.actionIncident;
    this._actionIncidentTask.internalValue = config.actionIncidentTask;
    this._actionPlaybook.internalValue = config.actionPlaybook;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_json - computed: false, optional: true, required: false
  private _conditionJson?: string; 
  public get conditionJson() {
    return this.getStringAttribute('condition_json');
  }
  public set conditionJson(value: string) {
    this._conditionJson = value;
  }
  public resetConditionJson() {
    this._conditionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionJsonInput() {
    return this._conditionJson;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // triggers_on - computed: false, optional: true, required: false
  private _triggersOn?: string; 
  public get triggersOn() {
    return this.getStringAttribute('triggers_on');
  }
  public set triggersOn(value: string) {
    this._triggersOn = value;
  }
  public resetTriggersOn() {
    this._triggersOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersOnInput() {
    return this._triggersOn;
  }

  // triggers_when - computed: false, optional: true, required: false
  private _triggersWhen?: string; 
  public get triggersWhen() {
    return this.getStringAttribute('triggers_when');
  }
  public set triggersWhen(value: string) {
    this._triggersWhen = value;
  }
  public resetTriggersWhen() {
    this._triggersWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersWhenInput() {
    return this._triggersWhen;
  }

  // action_incident - computed: false, optional: true, required: false
  private _actionIncident = new SentinelAutomationRuleActionIncidentList(this, "action_incident", false);
  public get actionIncident() {
    return this._actionIncident;
  }
  public putActionIncident(value: SentinelAutomationRuleActionIncident[] | cdktn.IResolvable) {
    this._actionIncident.internalValue = value;
  }
  public resetActionIncident() {
    this._actionIncident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIncidentInput() {
    return this._actionIncident.internalValue;
  }

  // action_incident_task - computed: false, optional: true, required: false
  private _actionIncidentTask = new SentinelAutomationRuleActionIncidentTaskList(this, "action_incident_task", false);
  public get actionIncidentTask() {
    return this._actionIncidentTask;
  }
  public putActionIncidentTask(value: SentinelAutomationRuleActionIncidentTask[] | cdktn.IResolvable) {
    this._actionIncidentTask.internalValue = value;
  }
  public resetActionIncidentTask() {
    this._actionIncidentTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIncidentTaskInput() {
    return this._actionIncidentTask.internalValue;
  }

  // action_playbook - computed: false, optional: true, required: false
  private _actionPlaybook = new SentinelAutomationRuleActionPlaybookList(this, "action_playbook", false);
  public get actionPlaybook() {
    return this._actionPlaybook;
  }
  public putActionPlaybook(value: SentinelAutomationRuleActionPlaybook[] | cdktn.IResolvable) {
    this._actionPlaybook.internalValue = value;
  }
  public resetActionPlaybook() {
    this._actionPlaybook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPlaybookInput() {
    return this._actionPlaybook.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelAutomationRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelAutomationRuleTimeouts) {
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
      condition_json: cdktn.stringToTerraform(this._conditionJson),
      display_name: cdktn.stringToTerraform(this._displayName),
      enabled: cdktn.booleanToTerraform(this._enabled),
      expiration: cdktn.stringToTerraform(this._expiration),
      id: cdktn.stringToTerraform(this._id),
      log_analytics_workspace_id: cdktn.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktn.stringToTerraform(this._name),
      order: cdktn.numberToTerraform(this._order),
      triggers_on: cdktn.stringToTerraform(this._triggersOn),
      triggers_when: cdktn.stringToTerraform(this._triggersWhen),
      action_incident: cdktn.listMapper(sentinelAutomationRuleActionIncidentToTerraform, true)(this._actionIncident.internalValue),
      action_incident_task: cdktn.listMapper(sentinelAutomationRuleActionIncidentTaskToTerraform, true)(this._actionIncidentTask.internalValue),
      action_playbook: cdktn.listMapper(sentinelAutomationRuleActionPlaybookToTerraform, true)(this._actionPlaybook.internalValue),
      timeouts: sentinelAutomationRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_json: {
        value: cdktn.stringToHclTerraform(this._conditionJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
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
      expiration: {
        value: cdktn.stringToHclTerraform(this._expiration),
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
      log_analytics_workspace_id: {
        value: cdktn.stringToHclTerraform(this._logAnalyticsWorkspaceId),
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
      order: {
        value: cdktn.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      triggers_on: {
        value: cdktn.stringToHclTerraform(this._triggersOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers_when: {
        value: cdktn.stringToHclTerraform(this._triggersWhen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_incident: {
        value: cdktn.listMapperHcl(sentinelAutomationRuleActionIncidentToHclTerraform, true)(this._actionIncident.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelAutomationRuleActionIncidentList",
      },
      action_incident_task: {
        value: cdktn.listMapperHcl(sentinelAutomationRuleActionIncidentTaskToHclTerraform, true)(this._actionIncidentTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelAutomationRuleActionIncidentTaskList",
      },
      action_playbook: {
        value: cdktn.listMapperHcl(sentinelAutomationRuleActionPlaybookToHclTerraform, true)(this._actionPlaybook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SentinelAutomationRuleActionPlaybookList",
      },
      timeouts: {
        value: sentinelAutomationRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SentinelAutomationRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
