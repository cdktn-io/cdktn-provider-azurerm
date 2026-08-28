/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AutomationRunbookConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#automation_account_name AutomationRunbook#automation_account_name}
  */
  readonly automationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#content AutomationRunbook#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#description AutomationRunbook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#id AutomationRunbook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#job_schedule AutomationRunbook#job_schedule}
  */
  readonly jobSchedule?: AutomationRunbookJobSchedule[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#location AutomationRunbook#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#log_activity_trace_level AutomationRunbook#log_activity_trace_level}
  */
  readonly logActivityTraceLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#log_progress AutomationRunbook#log_progress}
  */
  readonly logProgress: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#log_verbose AutomationRunbook#log_verbose}
  */
  readonly logVerbose: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#name AutomationRunbook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#resource_group_name AutomationRunbook#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#runbook_type AutomationRunbook#runbook_type}
  */
  readonly runbookType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#runtime_environment_name AutomationRunbook#runtime_environment_name}
  */
  readonly runtimeEnvironmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#tags AutomationRunbook#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * draft block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#draft AutomationRunbook#draft}
  */
  readonly draft?: AutomationRunbookDraft;
  /**
  * publish_content_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#publish_content_link AutomationRunbook#publish_content_link}
  */
  readonly publishContentLink?: AutomationRunbookPublishContentLink;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#timeouts AutomationRunbook#timeouts}
  */
  readonly timeouts?: AutomationRunbookTimeouts;
}
export interface AutomationRunbookJobSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#job_schedule_id AutomationRunbook#job_schedule_id}
  */
  readonly jobScheduleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#run_on AutomationRunbook#run_on}
  */
  readonly runOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#schedule_name AutomationRunbook#schedule_name}
  */
  readonly scheduleName?: string;
}

export function automationRunbookJobScheduleToTerraform(struct?: AutomationRunbookJobSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    job_schedule_id: struct!.jobScheduleId === undefined ? null : cdktn.stringToTerraform(struct!.jobScheduleId),
    parameters: struct!.parameters === undefined ? null : cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
    run_on: struct!.runOn === undefined ? null : cdktn.stringToTerraform(struct!.runOn),
    schedule_name: struct!.scheduleName === undefined ? null : cdktn.stringToTerraform(struct!.scheduleName),
  }
}


export function automationRunbookJobScheduleToHclTerraform(struct?: AutomationRunbookJobSchedule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    job_schedule_id: {
      value: struct!.jobScheduleId === undefined ? null : cdktn.stringToHclTerraform(struct!.jobScheduleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: struct!.parameters === undefined ? null : cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    run_on: {
      value: struct!.runOn === undefined ? null : cdktn.stringToHclTerraform(struct!.runOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_name: {
      value: struct!.scheduleName === undefined ? null : cdktn.stringToHclTerraform(struct!.scheduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationRunbookJobScheduleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutomationRunbookJobSchedule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobScheduleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobScheduleId = this._jobScheduleId;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._runOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOn = this._runOn;
    }
    if (this._scheduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleName = this._scheduleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationRunbookJobSchedule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jobScheduleId = undefined;
      this._parameters = undefined;
      this._runOn = undefined;
      this._scheduleName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jobScheduleId = value.jobScheduleId;
      this._parameters = value.parameters;
      this._runOn = value.runOn;
      this._scheduleName = value.scheduleName;
    }
  }

  // job_schedule_id - computed: true, optional: true, required: false
  private _jobScheduleId?: string; 
  public get jobScheduleId() {
    return this.getStringAttribute('job_schedule_id');
  }
  public set jobScheduleId(value: string) {
    this._jobScheduleId = value;
  }
  public resetJobScheduleId() {
    this._jobScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobScheduleIdInput() {
    return this._jobScheduleId;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // run_on - computed: true, optional: true, required: false
  private _runOn?: string; 
  public get runOn() {
    return this.getStringAttribute('run_on');
  }
  public set runOn(value: string) {
    this._runOn = value;
  }
  public resetRunOn() {
    this._runOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnInput() {
    return this._runOn;
  }

  // schedule_name - computed: true, optional: true, required: false
  private _scheduleName?: string; 
  public get scheduleName() {
    return this.getStringAttribute('schedule_name');
  }
  public set scheduleName(value: string) {
    this._scheduleName = value;
  }
  public resetScheduleName() {
    this._scheduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleNameInput() {
    return this._scheduleName;
  }
}

export class AutomationRunbookJobScheduleList extends cdktn.ComplexList {
  public internalValue? : AutomationRunbookJobSchedule[] | cdktn.IResolvable

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
  public get(index: number): AutomationRunbookJobScheduleOutputReference {
    return new AutomationRunbookJobScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationRunbookDraftContentLinkHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#value AutomationRunbook#value}
  */
  readonly value: string;
}

export function automationRunbookDraftContentLinkHashToTerraform(struct?: AutomationRunbookDraftContentLinkHashOutputReference | AutomationRunbookDraftContentLinkHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function automationRunbookDraftContentLinkHashToHclTerraform(struct?: AutomationRunbookDraftContentLinkHashOutputReference | AutomationRunbookDraftContentLinkHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
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

export class AutomationRunbookDraftContentLinkHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationRunbookDraftContentLinkHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationRunbookDraftContentLinkHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._value = value.value;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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
export interface AutomationRunbookDraftContentLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#version AutomationRunbook#version}
  */
  readonly version?: string;
  /**
  * hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}
  */
  readonly hash?: AutomationRunbookDraftContentLinkHash;
}

export function automationRunbookDraftContentLinkToTerraform(struct?: AutomationRunbookDraftContentLinkOutputReference | AutomationRunbookDraftContentLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
    version: cdktn.stringToTerraform(struct!.version),
    hash: automationRunbookDraftContentLinkHashToTerraform(struct!.hash),
  }
}


export function automationRunbookDraftContentLinkToHclTerraform(struct?: AutomationRunbookDraftContentLinkOutputReference | AutomationRunbookDraftContentLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: automationRunbookDraftContentLinkHashToHclTerraform(struct!.hash),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationRunbookDraftContentLinkHashList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationRunbookDraftContentLinkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationRunbookDraftContentLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._hash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationRunbookDraftContentLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
      this._version = undefined;
      this._hash.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
      this._version = value.version;
      this._hash.internalValue = value.hash;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // version - computed: false, optional: true, required: false
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

  // hash - computed: false, optional: true, required: false
  private _hash = new AutomationRunbookDraftContentLinkHashOutputReference(this, "hash");
  public get hash() {
    return this._hash;
  }
  public putHash(value: AutomationRunbookDraftContentLinkHash) {
    this._hash.internalValue = value;
  }
  public resetHash() {
    this._hash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash.internalValue;
  }
}
export interface AutomationRunbookDraftParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#default_value AutomationRunbook#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#key AutomationRunbook#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#mandatory AutomationRunbook#mandatory}
  */
  readonly mandatory?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#position AutomationRunbook#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#type AutomationRunbook#type}
  */
  readonly type: string;
}

export function automationRunbookDraftParametersToTerraform(struct?: AutomationRunbookDraftParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: cdktn.stringToTerraform(struct!.defaultValue),
    key: cdktn.stringToTerraform(struct!.key),
    mandatory: cdktn.booleanToTerraform(struct!.mandatory),
    position: cdktn.numberToTerraform(struct!.position),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function automationRunbookDraftParametersToHclTerraform(struct?: AutomationRunbookDraftParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: cdktn.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktn.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    position: {
      value: cdktn.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class AutomationRunbookDraftParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AutomationRunbookDraftParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationRunbookDraftParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._key = undefined;
      this._mandatory = undefined;
      this._position = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._key = value.key;
      this._mandatory = value.mandatory;
      this._position = value.position;
      this._type = value.type;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mandatory - computed: false, optional: true, required: false
  private _mandatory?: boolean | cdktn.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktn.IResolvable) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }

  // position - computed: false, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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

export class AutomationRunbookDraftParametersList extends cdktn.ComplexList {
  public internalValue? : AutomationRunbookDraftParameters[] | cdktn.IResolvable

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
  public get(index: number): AutomationRunbookDraftParametersOutputReference {
    return new AutomationRunbookDraftParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationRunbookDraft {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#edit_mode_enabled AutomationRunbook#edit_mode_enabled}
  */
  readonly editModeEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#output_types AutomationRunbook#output_types}
  */
  readonly outputTypes?: string[];
  /**
  * content_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#content_link AutomationRunbook#content_link}
  */
  readonly contentLink?: AutomationRunbookDraftContentLink;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#parameters AutomationRunbook#parameters}
  */
  readonly parameters?: AutomationRunbookDraftParameters[] | cdktn.IResolvable;
}

export function automationRunbookDraftToTerraform(struct?: AutomationRunbookDraftOutputReference | AutomationRunbookDraft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    edit_mode_enabled: cdktn.booleanToTerraform(struct!.editModeEnabled),
    output_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.outputTypes),
    content_link: automationRunbookDraftContentLinkToTerraform(struct!.contentLink),
    parameters: cdktn.listMapper(automationRunbookDraftParametersToTerraform, true)(struct!.parameters),
  }
}


export function automationRunbookDraftToHclTerraform(struct?: AutomationRunbookDraftOutputReference | AutomationRunbookDraft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    edit_mode_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.editModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.outputTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    content_link: {
      value: automationRunbookDraftContentLinkToHclTerraform(struct!.contentLink),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationRunbookDraftContentLinkList",
    },
    parameters: {
      value: cdktn.listMapperHcl(automationRunbookDraftParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationRunbookDraftParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationRunbookDraftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationRunbookDraft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._editModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.editModeEnabled = this._editModeEnabled;
    }
    if (this._outputTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputTypes = this._outputTypes;
    }
    if (this._contentLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLink = this._contentLink?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationRunbookDraft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._editModeEnabled = undefined;
      this._outputTypes = undefined;
      this._contentLink.internalValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._editModeEnabled = value.editModeEnabled;
      this._outputTypes = value.outputTypes;
      this._contentLink.internalValue = value.contentLink;
      this._parameters.internalValue = value.parameters;
    }
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // edit_mode_enabled - computed: false, optional: true, required: false
  private _editModeEnabled?: boolean | cdktn.IResolvable; 
  public get editModeEnabled() {
    return this.getBooleanAttribute('edit_mode_enabled');
  }
  public set editModeEnabled(value: boolean | cdktn.IResolvable) {
    this._editModeEnabled = value;
  }
  public resetEditModeEnabled() {
    this._editModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editModeEnabledInput() {
    return this._editModeEnabled;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // output_types - computed: false, optional: true, required: false
  private _outputTypes?: string[]; 
  public get outputTypes() {
    return this.getListAttribute('output_types');
  }
  public set outputTypes(value: string[]) {
    this._outputTypes = value;
  }
  public resetOutputTypes() {
    this._outputTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypesInput() {
    return this._outputTypes;
  }

  // content_link - computed: false, optional: true, required: false
  private _contentLink = new AutomationRunbookDraftContentLinkOutputReference(this, "content_link");
  public get contentLink() {
    return this._contentLink;
  }
  public putContentLink(value: AutomationRunbookDraftContentLink) {
    this._contentLink.internalValue = value;
  }
  public resetContentLink() {
    this._contentLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLinkInput() {
    return this._contentLink.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new AutomationRunbookDraftParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: AutomationRunbookDraftParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface AutomationRunbookPublishContentLinkHash {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#algorithm AutomationRunbook#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#value AutomationRunbook#value}
  */
  readonly value: string;
}

export function automationRunbookPublishContentLinkHashToTerraform(struct?: AutomationRunbookPublishContentLinkHashOutputReference | AutomationRunbookPublishContentLinkHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function automationRunbookPublishContentLinkHashToHclTerraform(struct?: AutomationRunbookPublishContentLinkHashOutputReference | AutomationRunbookPublishContentLinkHash): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
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

export class AutomationRunbookPublishContentLinkHashOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationRunbookPublishContentLinkHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationRunbookPublishContentLinkHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._value = value.value;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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
export interface AutomationRunbookPublishContentLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#uri AutomationRunbook#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#version AutomationRunbook#version}
  */
  readonly version?: string;
  /**
  * hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#hash AutomationRunbook#hash}
  */
  readonly hash?: AutomationRunbookPublishContentLinkHash;
}

export function automationRunbookPublishContentLinkToTerraform(struct?: AutomationRunbookPublishContentLinkOutputReference | AutomationRunbookPublishContentLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
    version: cdktn.stringToTerraform(struct!.version),
    hash: automationRunbookPublishContentLinkHashToTerraform(struct!.hash),
  }
}


export function automationRunbookPublishContentLinkToHclTerraform(struct?: AutomationRunbookPublishContentLinkOutputReference | AutomationRunbookPublishContentLink): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: automationRunbookPublishContentLinkHashToHclTerraform(struct!.hash),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationRunbookPublishContentLinkHashList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationRunbookPublishContentLinkOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationRunbookPublishContentLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._hash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationRunbookPublishContentLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
      this._version = undefined;
      this._hash.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
      this._version = value.version;
      this._hash.internalValue = value.hash;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // version - computed: false, optional: true, required: false
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

  // hash - computed: false, optional: true, required: false
  private _hash = new AutomationRunbookPublishContentLinkHashOutputReference(this, "hash");
  public get hash() {
    return this._hash;
  }
  public putHash(value: AutomationRunbookPublishContentLinkHash) {
    this._hash.internalValue = value;
  }
  public resetHash() {
    this._hash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash.internalValue;
  }
}
export interface AutomationRunbookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#create AutomationRunbook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#delete AutomationRunbook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#read AutomationRunbook#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#update AutomationRunbook#update}
  */
  readonly update?: string;
}

export function automationRunbookTimeoutsToTerraform(struct?: AutomationRunbookTimeouts | cdktn.IResolvable): any {
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


export function automationRunbookTimeoutsToHclTerraform(struct?: AutomationRunbookTimeouts | cdktn.IResolvable): any {
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

export class AutomationRunbookTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationRunbookTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AutomationRunbookTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook azurerm_automation_runbook}
*/
export class AutomationRunbook extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_automation_runbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AutomationRunbook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationRunbook to import
  * @param importFromId The id of the existing AutomationRunbook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationRunbook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_automation_runbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/automation_runbook azurerm_automation_runbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationRunbookConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationRunbookConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_runbook',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.3.0',
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
    this._automationAccountName = config.automationAccountName;
    this._content = config.content;
    this._description = config.description;
    this._id = config.id;
    this._jobSchedule.internalValue = config.jobSchedule;
    this._location = config.location;
    this._logActivityTraceLevel = config.logActivityTraceLevel;
    this._logProgress = config.logProgress;
    this._logVerbose = config.logVerbose;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._runbookType = config.runbookType;
    this._runtimeEnvironmentName = config.runtimeEnvironmentName;
    this._tags = config.tags;
    this._draft.internalValue = config.draft;
    this._publishContentLink.internalValue = config.publishContentLink;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName?: string; 
  public get automationAccountName() {
    return this.getStringAttribute('automation_account_name');
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountNameInput() {
    return this._automationAccountName;
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // job_schedule - computed: true, optional: true, required: false
  private _jobSchedule = new AutomationRunbookJobScheduleList(this, "job_schedule", true);
  public get jobSchedule() {
    return this._jobSchedule;
  }
  public putJobSchedule(value: AutomationRunbookJobSchedule[] | cdktn.IResolvable) {
    this._jobSchedule.internalValue = value;
  }
  public resetJobSchedule() {
    this._jobSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobScheduleInput() {
    return this._jobSchedule.internalValue;
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

  // log_activity_trace_level - computed: false, optional: true, required: false
  private _logActivityTraceLevel?: number; 
  public get logActivityTraceLevel() {
    return this.getNumberAttribute('log_activity_trace_level');
  }
  public set logActivityTraceLevel(value: number) {
    this._logActivityTraceLevel = value;
  }
  public resetLogActivityTraceLevel() {
    this._logActivityTraceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logActivityTraceLevelInput() {
    return this._logActivityTraceLevel;
  }

  // log_progress - computed: false, optional: false, required: true
  private _logProgress?: boolean | cdktn.IResolvable; 
  public get logProgress() {
    return this.getBooleanAttribute('log_progress');
  }
  public set logProgress(value: boolean | cdktn.IResolvable) {
    this._logProgress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logProgressInput() {
    return this._logProgress;
  }

  // log_verbose - computed: false, optional: false, required: true
  private _logVerbose?: boolean | cdktn.IResolvable; 
  public get logVerbose() {
    return this.getBooleanAttribute('log_verbose');
  }
  public set logVerbose(value: boolean | cdktn.IResolvable) {
    this._logVerbose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logVerboseInput() {
    return this._logVerbose;
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

  // runbook_type - computed: false, optional: false, required: true
  private _runbookType?: string; 
  public get runbookType() {
    return this.getStringAttribute('runbook_type');
  }
  public set runbookType(value: string) {
    this._runbookType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookTypeInput() {
    return this._runbookType;
  }

  // runtime_environment_name - computed: false, optional: true, required: false
  private _runtimeEnvironmentName?: string; 
  public get runtimeEnvironmentName() {
    return this.getStringAttribute('runtime_environment_name');
  }
  public set runtimeEnvironmentName(value: string) {
    this._runtimeEnvironmentName = value;
  }
  public resetRuntimeEnvironmentName() {
    this._runtimeEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentNameInput() {
    return this._runtimeEnvironmentName;
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

  // draft - computed: false, optional: true, required: false
  private _draft = new AutomationRunbookDraftOutputReference(this, "draft");
  public get draft() {
    return this._draft;
  }
  public putDraft(value: AutomationRunbookDraft) {
    this._draft.internalValue = value;
  }
  public resetDraft() {
    this._draft.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draftInput() {
    return this._draft.internalValue;
  }

  // publish_content_link - computed: false, optional: true, required: false
  private _publishContentLink = new AutomationRunbookPublishContentLinkOutputReference(this, "publish_content_link");
  public get publishContentLink() {
    return this._publishContentLink;
  }
  public putPublishContentLink(value: AutomationRunbookPublishContentLink) {
    this._publishContentLink.internalValue = value;
  }
  public resetPublishContentLink() {
    this._publishContentLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishContentLinkInput() {
    return this._publishContentLink.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AutomationRunbookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AutomationRunbookTimeouts) {
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
      automation_account_name: cdktn.stringToTerraform(this._automationAccountName),
      content: cdktn.stringToTerraform(this._content),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      job_schedule: cdktn.listMapper(automationRunbookJobScheduleToTerraform, false)(this._jobSchedule.internalValue),
      location: cdktn.stringToTerraform(this._location),
      log_activity_trace_level: cdktn.numberToTerraform(this._logActivityTraceLevel),
      log_progress: cdktn.booleanToTerraform(this._logProgress),
      log_verbose: cdktn.booleanToTerraform(this._logVerbose),
      name: cdktn.stringToTerraform(this._name),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      runbook_type: cdktn.stringToTerraform(this._runbookType),
      runtime_environment_name: cdktn.stringToTerraform(this._runtimeEnvironmentName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      draft: automationRunbookDraftToTerraform(this._draft.internalValue),
      publish_content_link: automationRunbookPublishContentLinkToTerraform(this._publishContentLink.internalValue),
      timeouts: automationRunbookTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automation_account_name: {
        value: cdktn.stringToHclTerraform(this._automationAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktn.stringToHclTerraform(this._content),
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
      job_schedule: {
        value: cdktn.listMapperHcl(automationRunbookJobScheduleToHclTerraform, false)(this._jobSchedule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AutomationRunbookJobScheduleList",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_activity_trace_level: {
        value: cdktn.numberToHclTerraform(this._logActivityTraceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_progress: {
        value: cdktn.booleanToHclTerraform(this._logProgress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_verbose: {
        value: cdktn.booleanToHclTerraform(this._logVerbose),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      runbook_type: {
        value: cdktn.stringToHclTerraform(this._runbookType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_environment_name: {
        value: cdktn.stringToHclTerraform(this._runtimeEnvironmentName),
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
      draft: {
        value: automationRunbookDraftToHclTerraform(this._draft.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationRunbookDraftList",
      },
      publish_content_link: {
        value: automationRunbookPublishContentLinkToHclTerraform(this._publishContentLink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationRunbookPublishContentLinkList",
      },
      timeouts: {
        value: automationRunbookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationRunbookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
