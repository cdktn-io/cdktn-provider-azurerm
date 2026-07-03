/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ContainerAppJobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#container_app_environment_id ContainerAppJob#container_app_environment_id}
  */
  readonly containerAppEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#id ContainerAppJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#location ContainerAppJob#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#replica_retry_limit ContainerAppJob#replica_retry_limit}
  */
  readonly replicaRetryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#replica_timeout_in_seconds ContainerAppJob#replica_timeout_in_seconds}
  */
  readonly replicaTimeoutInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#resource_group_name ContainerAppJob#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#tags ContainerAppJob#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#workload_profile_name ContainerAppJob#workload_profile_name}
  */
  readonly workloadProfileName?: string;
  /**
  * event_trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#event_trigger_config ContainerAppJob#event_trigger_config}
  */
  readonly eventTriggerConfig?: ContainerAppJobEventTriggerConfig;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#identity ContainerAppJob#identity}
  */
  readonly identity?: ContainerAppJobIdentity;
  /**
  * manual_trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#manual_trigger_config ContainerAppJob#manual_trigger_config}
  */
  readonly manualTriggerConfig?: ContainerAppJobManualTriggerConfig;
  /**
  * registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#registry ContainerAppJob#registry}
  */
  readonly registry?: ContainerAppJobRegistry[] | cdktn.IResolvable;
  /**
  * schedule_trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#schedule_trigger_config ContainerAppJob#schedule_trigger_config}
  */
  readonly scheduleTriggerConfig?: ContainerAppJobScheduleTriggerConfig;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#secret ContainerAppJob#secret}
  */
  readonly secret?: ContainerAppJobSecret[] | cdktn.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#template ContainerAppJob#template}
  */
  readonly template: ContainerAppJobTemplate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#timeouts ContainerAppJob#timeouts}
  */
  readonly timeouts?: ContainerAppJobTimeouts;
}
export interface ContainerAppJobEventTriggerConfigScaleRulesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#trigger_parameter ContainerAppJob#trigger_parameter}
  */
  readonly triggerParameter: string;
}

export function containerAppJobEventTriggerConfigScaleRulesAuthenticationToTerraform(struct?: ContainerAppJobEventTriggerConfigScaleRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
    trigger_parameter: cdktn.stringToTerraform(struct!.triggerParameter),
  }
}


export function containerAppJobEventTriggerConfigScaleRulesAuthenticationToHclTerraform(struct?: ContainerAppJobEventTriggerConfigScaleRulesAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_parameter: {
      value: cdktn.stringToHclTerraform(struct!.triggerParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobEventTriggerConfigScaleRulesAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._triggerParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerParameter = this._triggerParameter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobEventTriggerConfigScaleRulesAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretName = undefined;
      this._triggerParameter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretName = value.secretName;
      this._triggerParameter = value.triggerParameter;
    }
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // trigger_parameter - computed: false, optional: false, required: true
  private _triggerParameter?: string; 
  public get triggerParameter() {
    return this.getStringAttribute('trigger_parameter');
  }
  public set triggerParameter(value: string) {
    this._triggerParameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerParameterInput() {
    return this._triggerParameter;
  }
}

export class ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobEventTriggerConfigScaleRulesAuthentication[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference {
    return new ContainerAppJobEventTriggerConfigScaleRulesAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobEventTriggerConfigScaleRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#custom_rule_type ContainerAppJob#custom_rule_type}
  */
  readonly customRuleType: string;
  /**
  * ID of the System or User Managed Identity used to execute scale rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#identity_id ContainerAppJob#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#metadata ContainerAppJob#metadata}
  */
  readonly metadata: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#authentication ContainerAppJob#authentication}
  */
  readonly authentication?: ContainerAppJobEventTriggerConfigScaleRulesAuthentication[] | cdktn.IResolvable;
}

export function containerAppJobEventTriggerConfigScaleRulesToTerraform(struct?: ContainerAppJobEventTriggerConfigScaleRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_rule_type: cdktn.stringToTerraform(struct!.customRuleType),
    identity_id: cdktn.stringToTerraform(struct!.identityId),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    name: cdktn.stringToTerraform(struct!.name),
    authentication: cdktn.listMapper(containerAppJobEventTriggerConfigScaleRulesAuthenticationToTerraform, true)(struct!.authentication),
  }
}


export function containerAppJobEventTriggerConfigScaleRulesToHclTerraform(struct?: ContainerAppJobEventTriggerConfigScaleRules | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_rule_type: {
      value: cdktn.stringToHclTerraform(struct!.customRuleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_id: {
      value: cdktn.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: cdktn.listMapperHcl(containerAppJobEventTriggerConfigScaleRulesAuthenticationToHclTerraform, true)(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobEventTriggerConfigScaleRulesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobEventTriggerConfigScaleRules | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRuleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRuleType = this._customRuleType;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobEventTriggerConfigScaleRules | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRuleType = undefined;
      this._identityId = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._authentication.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRuleType = value.customRuleType;
      this._identityId = value.identityId;
      this._metadata = value.metadata;
      this._name = value.name;
      this._authentication.internalValue = value.authentication;
    }
  }

  // custom_rule_type - computed: false, optional: false, required: true
  private _customRuleType?: string; 
  public get customRuleType() {
    return this.getStringAttribute('custom_rule_type');
  }
  public set customRuleType(value: string) {
    this._customRuleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuleTypeInput() {
    return this._customRuleType;
  }

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ContainerAppJobEventTriggerConfigScaleRulesAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ContainerAppJobEventTriggerConfigScaleRulesAuthentication[] | cdktn.IResolvable) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}

export class ContainerAppJobEventTriggerConfigScaleRulesList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobEventTriggerConfigScaleRules[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobEventTriggerConfigScaleRulesOutputReference {
    return new ContainerAppJobEventTriggerConfigScaleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobEventTriggerConfigScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#max_executions ContainerAppJob#max_executions}
  */
  readonly maxExecutions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#min_executions ContainerAppJob#min_executions}
  */
  readonly minExecutions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#polling_interval_in_seconds ContainerAppJob#polling_interval_in_seconds}
  */
  readonly pollingIntervalInSeconds?: number;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#rules ContainerAppJob#rules}
  */
  readonly rules?: ContainerAppJobEventTriggerConfigScaleRules[] | cdktn.IResolvable;
}

export function containerAppJobEventTriggerConfigScaleToTerraform(struct?: ContainerAppJobEventTriggerConfigScale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_executions: cdktn.numberToTerraform(struct!.maxExecutions),
    min_executions: cdktn.numberToTerraform(struct!.minExecutions),
    polling_interval_in_seconds: cdktn.numberToTerraform(struct!.pollingIntervalInSeconds),
    rules: cdktn.listMapper(containerAppJobEventTriggerConfigScaleRulesToTerraform, true)(struct!.rules),
  }
}


export function containerAppJobEventTriggerConfigScaleToHclTerraform(struct?: ContainerAppJobEventTriggerConfigScale | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_executions: {
      value: cdktn.numberToHclTerraform(struct!.maxExecutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_executions: {
      value: cdktn.numberToHclTerraform(struct!.minExecutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_interval_in_seconds: {
      value: cdktn.numberToHclTerraform(struct!.pollingIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rules: {
      value: cdktn.listMapperHcl(containerAppJobEventTriggerConfigScaleRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobEventTriggerConfigScaleRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobEventTriggerConfigScaleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobEventTriggerConfigScale | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxExecutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutions = this._maxExecutions;
    }
    if (this._minExecutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.minExecutions = this._minExecutions;
    }
    if (this._pollingIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingIntervalInSeconds = this._pollingIntervalInSeconds;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobEventTriggerConfigScale | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxExecutions = undefined;
      this._minExecutions = undefined;
      this._pollingIntervalInSeconds = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxExecutions = value.maxExecutions;
      this._minExecutions = value.minExecutions;
      this._pollingIntervalInSeconds = value.pollingIntervalInSeconds;
      this._rules.internalValue = value.rules;
    }
  }

  // max_executions - computed: false, optional: true, required: false
  private _maxExecutions?: number; 
  public get maxExecutions() {
    return this.getNumberAttribute('max_executions');
  }
  public set maxExecutions(value: number) {
    this._maxExecutions = value;
  }
  public resetMaxExecutions() {
    this._maxExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutionsInput() {
    return this._maxExecutions;
  }

  // min_executions - computed: false, optional: true, required: false
  private _minExecutions?: number; 
  public get minExecutions() {
    return this.getNumberAttribute('min_executions');
  }
  public set minExecutions(value: number) {
    this._minExecutions = value;
  }
  public resetMinExecutions() {
    this._minExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExecutionsInput() {
    return this._minExecutions;
  }

  // polling_interval_in_seconds - computed: false, optional: true, required: false
  private _pollingIntervalInSeconds?: number; 
  public get pollingIntervalInSeconds() {
    return this.getNumberAttribute('polling_interval_in_seconds');
  }
  public set pollingIntervalInSeconds(value: number) {
    this._pollingIntervalInSeconds = value;
  }
  public resetPollingIntervalInSeconds() {
    this._pollingIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInSecondsInput() {
    return this._pollingIntervalInSeconds;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ContainerAppJobEventTriggerConfigScaleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ContainerAppJobEventTriggerConfigScaleRules[] | cdktn.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class ContainerAppJobEventTriggerConfigScaleList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobEventTriggerConfigScale[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobEventTriggerConfigScaleOutputReference {
    return new ContainerAppJobEventTriggerConfigScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobEventTriggerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}
  */
  readonly replicaCompletionCount?: number;
  /**
  * scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#scale ContainerAppJob#scale}
  */
  readonly scale?: ContainerAppJobEventTriggerConfigScale[] | cdktn.IResolvable;
}

export function containerAppJobEventTriggerConfigToTerraform(struct?: ContainerAppJobEventTriggerConfigOutputReference | ContainerAppJobEventTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parallelism: cdktn.numberToTerraform(struct!.parallelism),
    replica_completion_count: cdktn.numberToTerraform(struct!.replicaCompletionCount),
    scale: cdktn.listMapper(containerAppJobEventTriggerConfigScaleToTerraform, true)(struct!.scale),
  }
}


export function containerAppJobEventTriggerConfigToHclTerraform(struct?: ContainerAppJobEventTriggerConfigOutputReference | ContainerAppJobEventTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parallelism: {
      value: cdktn.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_completion_count: {
      value: cdktn.numberToHclTerraform(struct!.replicaCompletionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale: {
      value: cdktn.listMapperHcl(containerAppJobEventTriggerConfigScaleToHclTerraform, true)(struct!.scale),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobEventTriggerConfigScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobEventTriggerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAppJobEventTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._replicaCompletionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCompletionCount = this._replicaCompletionCount;
    }
    if (this._scale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobEventTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parallelism = undefined;
      this._replicaCompletionCount = undefined;
      this._scale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parallelism = value.parallelism;
      this._replicaCompletionCount = value.replicaCompletionCount;
      this._scale.internalValue = value.scale;
    }
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // replica_completion_count - computed: false, optional: true, required: false
  private _replicaCompletionCount?: number; 
  public get replicaCompletionCount() {
    return this.getNumberAttribute('replica_completion_count');
  }
  public set replicaCompletionCount(value: number) {
    this._replicaCompletionCount = value;
  }
  public resetReplicaCompletionCount() {
    this._replicaCompletionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCompletionCountInput() {
    return this._replicaCompletionCount;
  }

  // scale - computed: false, optional: true, required: false
  private _scale = new ContainerAppJobEventTriggerConfigScaleList(this, "scale", false);
  public get scale() {
    return this._scale;
  }
  public putScale(value: ContainerAppJobEventTriggerConfigScale[] | cdktn.IResolvable) {
    this._scale.internalValue = value;
  }
  public resetScale() {
    this._scale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale.internalValue;
  }
}
export interface ContainerAppJobIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#identity_ids ContainerAppJob#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#type ContainerAppJob#type}
  */
  readonly type: string;
}

export function containerAppJobIdentityToTerraform(struct?: ContainerAppJobIdentityOutputReference | ContainerAppJobIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function containerAppJobIdentityToHclTerraform(struct?: ContainerAppJobIdentityOutputReference | ContainerAppJobIdentity): any {
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

export class ContainerAppJobIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAppJobIdentity | undefined {
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

  public set internalValue(value: ContainerAppJobIdentity | undefined) {
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

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktn.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
export interface ContainerAppJobManualTriggerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}
  */
  readonly replicaCompletionCount?: number;
}

export function containerAppJobManualTriggerConfigToTerraform(struct?: ContainerAppJobManualTriggerConfigOutputReference | ContainerAppJobManualTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    parallelism: cdktn.numberToTerraform(struct!.parallelism),
    replica_completion_count: cdktn.numberToTerraform(struct!.replicaCompletionCount),
  }
}


export function containerAppJobManualTriggerConfigToHclTerraform(struct?: ContainerAppJobManualTriggerConfigOutputReference | ContainerAppJobManualTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    parallelism: {
      value: cdktn.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_completion_count: {
      value: cdktn.numberToHclTerraform(struct!.replicaCompletionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobManualTriggerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAppJobManualTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._replicaCompletionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCompletionCount = this._replicaCompletionCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobManualTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parallelism = undefined;
      this._replicaCompletionCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parallelism = value.parallelism;
      this._replicaCompletionCount = value.replicaCompletionCount;
    }
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // replica_completion_count - computed: false, optional: true, required: false
  private _replicaCompletionCount?: number; 
  public get replicaCompletionCount() {
    return this.getNumberAttribute('replica_completion_count');
  }
  public set replicaCompletionCount(value: number) {
    this._replicaCompletionCount = value;
  }
  public resetReplicaCompletionCount() {
    this._replicaCompletionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCompletionCountInput() {
    return this._replicaCompletionCount;
  }
}
export interface ContainerAppJobRegistry {
  /**
  * ID of the System or User Managed Identity used to pull images from the Container Registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#identity ContainerAppJob#identity}
  */
  readonly identity?: string;
  /**
  * The name of the Secret Reference containing the password value for this user on the Container Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#password_secret_name ContainerAppJob#password_secret_name}
  */
  readonly passwordSecretName?: string;
  /**
  * The hostname for the Container Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#server ContainerAppJob#server}
  */
  readonly server: string;
  /**
  * The username to use for this Container Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#username ContainerAppJob#username}
  */
  readonly username?: string;
}

export function containerAppJobRegistryToTerraform(struct?: ContainerAppJobRegistry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity: cdktn.stringToTerraform(struct!.identity),
    password_secret_name: cdktn.stringToTerraform(struct!.passwordSecretName),
    server: cdktn.stringToTerraform(struct!.server),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function containerAppJobRegistryToHclTerraform(struct?: ContainerAppJobRegistry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity: {
      value: cdktn.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_secret_name: {
      value: cdktn.stringToHclTerraform(struct!.passwordSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktn.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobRegistryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobRegistry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._passwordSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretName = this._passwordSecretName;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobRegistry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identity = undefined;
      this._passwordSecretName = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identity = value.identity;
      this._passwordSecretName = value.passwordSecretName;
      this._server = value.server;
      this._username = value.username;
    }
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // password_secret_name - computed: false, optional: true, required: false
  private _passwordSecretName?: string; 
  public get passwordSecretName() {
    return this.getStringAttribute('password_secret_name');
  }
  public set passwordSecretName(value: string) {
    this._passwordSecretName = value;
  }
  public resetPasswordSecretName() {
    this._passwordSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretNameInput() {
    return this._passwordSecretName;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class ContainerAppJobRegistryList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobRegistry[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobRegistryOutputReference {
    return new ContainerAppJobRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobScheduleTriggerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#cron_expression ContainerAppJob#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#parallelism ContainerAppJob#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#replica_completion_count ContainerAppJob#replica_completion_count}
  */
  readonly replicaCompletionCount?: number;
}

export function containerAppJobScheduleTriggerConfigToTerraform(struct?: ContainerAppJobScheduleTriggerConfigOutputReference | ContainerAppJobScheduleTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cron_expression: cdktn.stringToTerraform(struct!.cronExpression),
    parallelism: cdktn.numberToTerraform(struct!.parallelism),
    replica_completion_count: cdktn.numberToTerraform(struct!.replicaCompletionCount),
  }
}


export function containerAppJobScheduleTriggerConfigToHclTerraform(struct?: ContainerAppJobScheduleTriggerConfigOutputReference | ContainerAppJobScheduleTriggerConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cron_expression: {
      value: cdktn.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallelism: {
      value: cdktn.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_completion_count: {
      value: cdktn.numberToHclTerraform(struct!.replicaCompletionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobScheduleTriggerConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAppJobScheduleTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._replicaCompletionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCompletionCount = this._replicaCompletionCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobScheduleTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._parallelism = undefined;
      this._replicaCompletionCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._parallelism = value.parallelism;
      this._replicaCompletionCount = value.replicaCompletionCount;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // replica_completion_count - computed: false, optional: true, required: false
  private _replicaCompletionCount?: number; 
  public get replicaCompletionCount() {
    return this.getNumberAttribute('replica_completion_count');
  }
  public set replicaCompletionCount(value: number) {
    this._replicaCompletionCount = value;
  }
  public resetReplicaCompletionCount() {
    this._replicaCompletionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCompletionCountInput() {
    return this._replicaCompletionCount;
  }
}
export interface ContainerAppJobSecret {
  /**
  * The identity to use for accessing key vault reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#identity ContainerAppJob#identity}
  */
  readonly identity?: string;
  /**
  * The Key Vault Secret ID. Could be either one of `id` or `versionless_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#key_vault_secret_id ContainerAppJob#key_vault_secret_id}
  */
  readonly keyVaultSecretId?: string;
  /**
  * The secret name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The value for this secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#value ContainerAppJob#value}
  */
  readonly value?: string;
}

export function containerAppJobSecretToTerraform(struct?: ContainerAppJobSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity: cdktn.stringToTerraform(struct!.identity),
    key_vault_secret_id: cdktn.stringToTerraform(struct!.keyVaultSecretId),
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function containerAppJobSecretToHclTerraform(struct?: ContainerAppJobSecret | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    identity: {
      value: cdktn.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.keyVaultSecretId),
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

export class ContainerAppJobSecretOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobSecret | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._keyVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultSecretId = this._keyVaultSecretId;
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

  public set internalValue(value: ContainerAppJobSecret | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identity = undefined;
      this._keyVaultSecretId = undefined;
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
      this._identity = value.identity;
      this._keyVaultSecretId = value.keyVaultSecretId;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // key_vault_secret_id - computed: false, optional: true, required: false
  private _keyVaultSecretId?: string; 
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string) {
    this._keyVaultSecretId = value;
  }
  public resetKeyVaultSecretId() {
    this._keyVaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultSecretIdInput() {
    return this._keyVaultSecretId;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerAppJobSecretList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobSecret[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobSecretOutputReference {
    return new ContainerAppJobSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainerEnv {
  /**
  * The name of the environment variable for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The name of the secret that contains the value for this environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}
  */
  readonly secretName?: string;
  /**
  * The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#value ContainerAppJob#value}
  */
  readonly value?: string;
}

export function containerAppJobTemplateContainerEnvToTerraform(struct?: ContainerAppJobTemplateContainerEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    secret_name: cdktn.stringToTerraform(struct!.secretName),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function containerAppJobTemplateContainerEnvToHclTerraform(struct?: ContainerAppJobTemplateContainerEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
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

export class ContainerAppJobTemplateContainerEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainerEnv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateContainerEnv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretName = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretName = value.secretName;
      this._value = value.value;
    }
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerAppJobTemplateContainerEnvList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainerEnv[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerEnvOutputReference {
    return new ContainerAppJobTemplateContainerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainerLivenessProbeHeader {
  /**
  * The HTTP Header Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The HTTP Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#value ContainerAppJob#value}
  */
  readonly value: string;
}

export function containerAppJobTemplateContainerLivenessProbeHeaderToTerraform(struct?: ContainerAppJobTemplateContainerLivenessProbeHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function containerAppJobTemplateContainerLivenessProbeHeaderToHclTerraform(struct?: ContainerAppJobTemplateContainerLivenessProbeHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainerLivenessProbeHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ContainerAppJobTemplateContainerLivenessProbeHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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

export class ContainerAppJobTemplateContainerLivenessProbeHeaderList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainerLivenessProbeHeader[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference {
    return new ContainerAppJobTemplateContainerLivenessProbeHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainerLivenessProbe {
  /**
  * The number of consecutive failures required to consider this probe as failed. Possible values are between `1` and `30`. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}
  */
  readonly failureCountThreshold?: number;
  /**
  * The probe hostname. Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#host ContainerAppJob#host}
  */
  readonly host?: string;
  /**
  * The number of seconds elapsed after the container has started before the probe is initiated. Possible values are between `0` and `60`. Defaults to `1` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}
  */
  readonly initialDelay?: number;
  /**
  * How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The URI to use with the `host` for http type probes. Not valid for `TCP` type probes. Defaults to `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#path ContainerAppJob#path}
  */
  readonly path?: string;
  /**
  * The port number on which to connect. Possible values are between `1` and `65535`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#port ContainerAppJob#port}
  */
  readonly port: number;
  /**
  * Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}
  */
  readonly timeout?: number;
  /**
  * Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#transport ContainerAppJob#transport}
  */
  readonly transport: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#header ContainerAppJob#header}
  */
  readonly header?: ContainerAppJobTemplateContainerLivenessProbeHeader[] | cdktn.IResolvable;
}

export function containerAppJobTemplateContainerLivenessProbeToTerraform(struct?: ContainerAppJobTemplateContainerLivenessProbe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_count_threshold: cdktn.numberToTerraform(struct!.failureCountThreshold),
    host: cdktn.stringToTerraform(struct!.host),
    initial_delay: cdktn.numberToTerraform(struct!.initialDelay),
    interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.numberToTerraform(struct!.port),
    timeout: cdktn.numberToTerraform(struct!.timeout),
    transport: cdktn.stringToTerraform(struct!.transport),
    header: cdktn.listMapper(containerAppJobTemplateContainerLivenessProbeHeaderToTerraform, true)(struct!.header),
  }
}


export function containerAppJobTemplateContainerLivenessProbeToHclTerraform(struct?: ContainerAppJobTemplateContainerLivenessProbe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_count_threshold: {
      value: cdktn.numberToHclTerraform(struct!.failureCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay: {
      value: cdktn.numberToHclTerraform(struct!.initialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport: {
      value: cdktn.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerLivenessProbeHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerLivenessProbeHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateContainerLivenessProbeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainerLivenessProbe | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCountThreshold = this._failureCountThreshold;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateContainerLivenessProbe | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCountThreshold = undefined;
      this._host = undefined;
      this._initialDelay = undefined;
      this._intervalSeconds = undefined;
      this._path = undefined;
      this._port = undefined;
      this._timeout = undefined;
      this._transport = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCountThreshold = value.failureCountThreshold;
      this._host = value.host;
      this._initialDelay = value.initialDelay;
      this._intervalSeconds = value.intervalSeconds;
      this._path = value.path;
      this._port = value.port;
      this._timeout = value.timeout;
      this._transport = value.transport;
      this._header.internalValue = value.header;
    }
  }

  // failure_count_threshold - computed: false, optional: true, required: false
  private _failureCountThreshold?: number; 
  public get failureCountThreshold() {
    return this.getNumberAttribute('failure_count_threshold');
  }
  public set failureCountThreshold(value: number) {
    this._failureCountThreshold = value;
  }
  public resetFailureCountThreshold() {
    this._failureCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountThresholdInput() {
    return this._failureCountThreshold;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // initial_delay - computed: false, optional: true, required: false
  private _initialDelay?: number; 
  public get initialDelay() {
    return this.getNumberAttribute('initial_delay');
  }
  public set initialDelay(value: number) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: false
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // transport - computed: false, optional: false, required: true
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ContainerAppJobTemplateContainerLivenessProbeHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ContainerAppJobTemplateContainerLivenessProbeHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class ContainerAppJobTemplateContainerLivenessProbeList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainerLivenessProbe[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerLivenessProbeOutputReference {
    return new ContainerAppJobTemplateContainerLivenessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainerReadinessProbeHeader {
  /**
  * The HTTP Header Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The HTTP Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#value ContainerAppJob#value}
  */
  readonly value: string;
}

export function containerAppJobTemplateContainerReadinessProbeHeaderToTerraform(struct?: ContainerAppJobTemplateContainerReadinessProbeHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function containerAppJobTemplateContainerReadinessProbeHeaderToHclTerraform(struct?: ContainerAppJobTemplateContainerReadinessProbeHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainerReadinessProbeHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ContainerAppJobTemplateContainerReadinessProbeHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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

export class ContainerAppJobTemplateContainerReadinessProbeHeaderList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainerReadinessProbeHeader[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference {
    return new ContainerAppJobTemplateContainerReadinessProbeHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainerReadinessProbe {
  /**
  * The number of consecutive failures required to consider this probe as failed. Possible values are between `1` and `48`. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}
  */
  readonly failureCountThreshold?: number;
  /**
  * The probe hostname. Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#host ContainerAppJob#host}
  */
  readonly host?: string;
  /**
  * The number of seconds elapsed after the container has started before the probe is initiated. Possible values are between `0` and `60`. Defaults to `0` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}
  */
  readonly initialDelay?: number;
  /**
  * How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#path ContainerAppJob#path}
  */
  readonly path?: string;
  /**
  * The port number on which to connect. Possible values are between `1` and `65535`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#port ContainerAppJob#port}
  */
  readonly port: number;
  /**
  * The number of consecutive successful responses required to consider this probe as successful. Possible values are between `1` and `10`. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#success_count_threshold ContainerAppJob#success_count_threshold}
  */
  readonly successCountThreshold?: number;
  /**
  * Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}
  */
  readonly timeout?: number;
  /**
  * Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#transport ContainerAppJob#transport}
  */
  readonly transport: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#header ContainerAppJob#header}
  */
  readonly header?: ContainerAppJobTemplateContainerReadinessProbeHeader[] | cdktn.IResolvable;
}

export function containerAppJobTemplateContainerReadinessProbeToTerraform(struct?: ContainerAppJobTemplateContainerReadinessProbe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_count_threshold: cdktn.numberToTerraform(struct!.failureCountThreshold),
    host: cdktn.stringToTerraform(struct!.host),
    initial_delay: cdktn.numberToTerraform(struct!.initialDelay),
    interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.numberToTerraform(struct!.port),
    success_count_threshold: cdktn.numberToTerraform(struct!.successCountThreshold),
    timeout: cdktn.numberToTerraform(struct!.timeout),
    transport: cdktn.stringToTerraform(struct!.transport),
    header: cdktn.listMapper(containerAppJobTemplateContainerReadinessProbeHeaderToTerraform, true)(struct!.header),
  }
}


export function containerAppJobTemplateContainerReadinessProbeToHclTerraform(struct?: ContainerAppJobTemplateContainerReadinessProbe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_count_threshold: {
      value: cdktn.numberToHclTerraform(struct!.failureCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay: {
      value: cdktn.numberToHclTerraform(struct!.initialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_count_threshold: {
      value: cdktn.numberToHclTerraform(struct!.successCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport: {
      value: cdktn.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerReadinessProbeHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerReadinessProbeHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateContainerReadinessProbeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainerReadinessProbe | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCountThreshold = this._failureCountThreshold;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._successCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCountThreshold = this._successCountThreshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateContainerReadinessProbe | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCountThreshold = undefined;
      this._host = undefined;
      this._initialDelay = undefined;
      this._intervalSeconds = undefined;
      this._path = undefined;
      this._port = undefined;
      this._successCountThreshold = undefined;
      this._timeout = undefined;
      this._transport = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCountThreshold = value.failureCountThreshold;
      this._host = value.host;
      this._initialDelay = value.initialDelay;
      this._intervalSeconds = value.intervalSeconds;
      this._path = value.path;
      this._port = value.port;
      this._successCountThreshold = value.successCountThreshold;
      this._timeout = value.timeout;
      this._transport = value.transport;
      this._header.internalValue = value.header;
    }
  }

  // failure_count_threshold - computed: false, optional: true, required: false
  private _failureCountThreshold?: number; 
  public get failureCountThreshold() {
    return this.getNumberAttribute('failure_count_threshold');
  }
  public set failureCountThreshold(value: number) {
    this._failureCountThreshold = value;
  }
  public resetFailureCountThreshold() {
    this._failureCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountThresholdInput() {
    return this._failureCountThreshold;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // initial_delay - computed: false, optional: true, required: false
  private _initialDelay?: number; 
  public get initialDelay() {
    return this.getNumberAttribute('initial_delay');
  }
  public set initialDelay(value: number) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // success_count_threshold - computed: false, optional: true, required: false
  private _successCountThreshold?: number; 
  public get successCountThreshold() {
    return this.getNumberAttribute('success_count_threshold');
  }
  public set successCountThreshold(value: number) {
    this._successCountThreshold = value;
  }
  public resetSuccessCountThreshold() {
    this._successCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successCountThresholdInput() {
    return this._successCountThreshold;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // transport - computed: false, optional: false, required: true
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ContainerAppJobTemplateContainerReadinessProbeHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ContainerAppJobTemplateContainerReadinessProbeHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class ContainerAppJobTemplateContainerReadinessProbeList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainerReadinessProbe[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerReadinessProbeOutputReference {
    return new ContainerAppJobTemplateContainerReadinessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainerStartupProbeHeader {
  /**
  * The HTTP Header Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The HTTP Header value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#value ContainerAppJob#value}
  */
  readonly value: string;
}

export function containerAppJobTemplateContainerStartupProbeHeaderToTerraform(struct?: ContainerAppJobTemplateContainerStartupProbeHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function containerAppJobTemplateContainerStartupProbeHeaderToHclTerraform(struct?: ContainerAppJobTemplateContainerStartupProbeHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainerStartupProbeHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ContainerAppJobTemplateContainerStartupProbeHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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

export class ContainerAppJobTemplateContainerStartupProbeHeaderList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainerStartupProbeHeader[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference {
    return new ContainerAppJobTemplateContainerStartupProbeHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainerStartupProbe {
  /**
  * The number of consecutive failures required to consider this probe as failed. Possible values are between `1` and `240`. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#failure_count_threshold ContainerAppJob#failure_count_threshold}
  */
  readonly failureCountThreshold?: number;
  /**
  * The probe hostname. Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#host ContainerAppJob#host}
  */
  readonly host?: string;
  /**
  * The number of seconds elapsed after the container has started before the probe is initiated. Possible values are between `0` and `60`. Defaults to `0` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#initial_delay ContainerAppJob#initial_delay}
  */
  readonly initialDelay?: number;
  /**
  * How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#interval_seconds ContainerAppJob#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The URI to use with the `host` for http type probes. Not valid for `TCP` type probes. Defaults to `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#path ContainerAppJob#path}
  */
  readonly path?: string;
  /**
  * The port number on which to connect. Possible values are between `1` and `65535`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#port ContainerAppJob#port}
  */
  readonly port: number;
  /**
  * Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#timeout ContainerAppJob#timeout}
  */
  readonly timeout?: number;
  /**
  * Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#transport ContainerAppJob#transport}
  */
  readonly transport: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#header ContainerAppJob#header}
  */
  readonly header?: ContainerAppJobTemplateContainerStartupProbeHeader[] | cdktn.IResolvable;
}

export function containerAppJobTemplateContainerStartupProbeToTerraform(struct?: ContainerAppJobTemplateContainerStartupProbe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    failure_count_threshold: cdktn.numberToTerraform(struct!.failureCountThreshold),
    host: cdktn.stringToTerraform(struct!.host),
    initial_delay: cdktn.numberToTerraform(struct!.initialDelay),
    interval_seconds: cdktn.numberToTerraform(struct!.intervalSeconds),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.numberToTerraform(struct!.port),
    timeout: cdktn.numberToTerraform(struct!.timeout),
    transport: cdktn.stringToTerraform(struct!.transport),
    header: cdktn.listMapper(containerAppJobTemplateContainerStartupProbeHeaderToTerraform, true)(struct!.header),
  }
}


export function containerAppJobTemplateContainerStartupProbeToHclTerraform(struct?: ContainerAppJobTemplateContainerStartupProbe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    failure_count_threshold: {
      value: cdktn.numberToHclTerraform(struct!.failureCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay: {
      value: cdktn.numberToHclTerraform(struct!.initialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktn.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transport: {
      value: cdktn.stringToHclTerraform(struct!.transport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerStartupProbeHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerStartupProbeHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateContainerStartupProbeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainerStartupProbe | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCountThreshold = this._failureCountThreshold;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._transport !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateContainerStartupProbe | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureCountThreshold = undefined;
      this._host = undefined;
      this._initialDelay = undefined;
      this._intervalSeconds = undefined;
      this._path = undefined;
      this._port = undefined;
      this._timeout = undefined;
      this._transport = undefined;
      this._header.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureCountThreshold = value.failureCountThreshold;
      this._host = value.host;
      this._initialDelay = value.initialDelay;
      this._intervalSeconds = value.intervalSeconds;
      this._path = value.path;
      this._port = value.port;
      this._timeout = value.timeout;
      this._transport = value.transport;
      this._header.internalValue = value.header;
    }
  }

  // failure_count_threshold - computed: false, optional: true, required: false
  private _failureCountThreshold?: number; 
  public get failureCountThreshold() {
    return this.getNumberAttribute('failure_count_threshold');
  }
  public set failureCountThreshold(value: number) {
    this._failureCountThreshold = value;
  }
  public resetFailureCountThreshold() {
    this._failureCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureCountThresholdInput() {
    return this._failureCountThreshold;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // initial_delay - computed: false, optional: true, required: false
  private _initialDelay?: number; 
  public get initialDelay() {
    return this.getNumberAttribute('initial_delay');
  }
  public set initialDelay(value: number) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // interval_seconds - computed: false, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: false
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // transport - computed: false, optional: false, required: true
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ContainerAppJobTemplateContainerStartupProbeHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ContainerAppJobTemplateContainerStartupProbeHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

export class ContainerAppJobTemplateContainerStartupProbeList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainerStartupProbe[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerStartupProbeOutputReference {
    return new ContainerAppJobTemplateContainerStartupProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainerVolumeMounts {
  /**
  * The name of the Volume to be mounted in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The path in the container at which to mount this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#path ContainerAppJob#path}
  */
  readonly path: string;
  /**
  * The sub path of the volume to be mounted in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#sub_path ContainerAppJob#sub_path}
  */
  readonly subPath?: string;
}

export function containerAppJobTemplateContainerVolumeMountsToTerraform(struct?: ContainerAppJobTemplateContainerVolumeMounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
    sub_path: cdktn.stringToTerraform(struct!.subPath),
  }
}


export function containerAppJobTemplateContainerVolumeMountsToHclTerraform(struct?: ContainerAppJobTemplateContainerVolumeMounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktn.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateContainerVolumeMountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainerVolumeMounts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateContainerVolumeMounts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._subPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._subPath = value.subPath;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }
}

export class ContainerAppJobTemplateContainerVolumeMountsList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainerVolumeMounts[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerVolumeMountsOutputReference {
    return new ContainerAppJobTemplateContainerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateContainer {
  /**
  * A list of args to pass to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#args ContainerAppJob#args}
  */
  readonly args?: string[];
  /**
  * A command to pass to the container to override the default. This is provided as a list of command line elements without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#command ContainerAppJob#command}
  */
  readonly command?: string[];
  /**
  * The amount of vCPU to allocate to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}
  */
  readonly cpu: number;
  /**
  * The image to use to create the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#image ContainerAppJob#image}
  */
  readonly image: string;
  /**
  * The amount of memory to allocate to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#memory ContainerAppJob#memory}
  */
  readonly memory: string;
  /**
  * The name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#env ContainerAppJob#env}
  */
  readonly env?: ContainerAppJobTemplateContainerEnv[] | cdktn.IResolvable;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#liveness_probe ContainerAppJob#liveness_probe}
  */
  readonly livenessProbe?: ContainerAppJobTemplateContainerLivenessProbe[] | cdktn.IResolvable;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#readiness_probe ContainerAppJob#readiness_probe}
  */
  readonly readinessProbe?: ContainerAppJobTemplateContainerReadinessProbe[] | cdktn.IResolvable;
  /**
  * startup_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#startup_probe ContainerAppJob#startup_probe}
  */
  readonly startupProbe?: ContainerAppJobTemplateContainerStartupProbe[] | cdktn.IResolvable;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}
  */
  readonly volumeMounts?: ContainerAppJobTemplateContainerVolumeMounts[] | cdktn.IResolvable;
}

export function containerAppJobTemplateContainerToTerraform(struct?: ContainerAppJobTemplateContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    cpu: cdktn.numberToTerraform(struct!.cpu),
    image: cdktn.stringToTerraform(struct!.image),
    memory: cdktn.stringToTerraform(struct!.memory),
    name: cdktn.stringToTerraform(struct!.name),
    env: cdktn.listMapper(containerAppJobTemplateContainerEnvToTerraform, true)(struct!.env),
    liveness_probe: cdktn.listMapper(containerAppJobTemplateContainerLivenessProbeToTerraform, true)(struct!.livenessProbe),
    readiness_probe: cdktn.listMapper(containerAppJobTemplateContainerReadinessProbeToTerraform, true)(struct!.readinessProbe),
    startup_probe: cdktn.listMapper(containerAppJobTemplateContainerStartupProbeToTerraform, true)(struct!.startupProbe),
    volume_mounts: cdktn.listMapper(containerAppJobTemplateContainerVolumeMountsToTerraform, true)(struct!.volumeMounts),
  }
}


export function containerAppJobTemplateContainerToHclTerraform(struct?: ContainerAppJobTemplateContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktn.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.stringToHclTerraform(struct!.memory),
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
    env: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerEnvList",
    },
    liveness_probe: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerLivenessProbeToHclTerraform, true)(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerLivenessProbeList",
    },
    readiness_probe: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerReadinessProbeToHclTerraform, true)(struct!.readinessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerReadinessProbeList",
    },
    startup_probe: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerStartupProbeToHclTerraform, true)(struct!.startupProbe),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerStartupProbeList",
    },
    volume_mounts: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerVolumeMountsToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateContainerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._cpu = undefined;
      this._image = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._env.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._cpu = value.cpu;
      this._image = value.image;
      this._memory = value.memory;
      this._name = value.name;
      this._env.internalValue = value.env;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._startupProbe.internalValue = value.startupProbe;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  public get ephemeralStorage() {
    return this.getStringAttribute('ephemeral_storage');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // env - computed: false, optional: true, required: false
  private _env = new ContainerAppJobTemplateContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: ContainerAppJobTemplateContainerEnv[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new ContainerAppJobTemplateContainerLivenessProbeList(this, "liveness_probe", false);
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: ContainerAppJobTemplateContainerLivenessProbe[] | cdktn.IResolvable) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new ContainerAppJobTemplateContainerReadinessProbeList(this, "readiness_probe", false);
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: ContainerAppJobTemplateContainerReadinessProbe[] | cdktn.IResolvable) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new ContainerAppJobTemplateContainerStartupProbeList(this, "startup_probe", false);
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: ContainerAppJobTemplateContainerStartupProbe[] | cdktn.IResolvable) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new ContainerAppJobTemplateContainerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: ContainerAppJobTemplateContainerVolumeMounts[] | cdktn.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class ContainerAppJobTemplateContainerList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateContainer[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateContainerOutputReference {
    return new ContainerAppJobTemplateContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateInitContainerEnv {
  /**
  * The name of the environment variable for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The name of the secret that contains the value for this environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#secret_name ContainerAppJob#secret_name}
  */
  readonly secretName?: string;
  /**
  * The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#value ContainerAppJob#value}
  */
  readonly value?: string;
}

export function containerAppJobTemplateInitContainerEnvToTerraform(struct?: ContainerAppJobTemplateInitContainerEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    secret_name: cdktn.stringToTerraform(struct!.secretName),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function containerAppJobTemplateInitContainerEnvToHclTerraform(struct?: ContainerAppJobTemplateInitContainerEnv | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
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

export class ContainerAppJobTemplateInitContainerEnvOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateInitContainerEnv | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateInitContainerEnv | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretName = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretName = value.secretName;
      this._value = value.value;
    }
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerAppJobTemplateInitContainerEnvList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateInitContainerEnv[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateInitContainerEnvOutputReference {
    return new ContainerAppJobTemplateInitContainerEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateInitContainerVolumeMounts {
  /**
  * The name of the Volume to be mounted in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The path in the container at which to mount this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#path ContainerAppJob#path}
  */
  readonly path: string;
  /**
  * The sub path of the volume to be mounted in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#sub_path ContainerAppJob#sub_path}
  */
  readonly subPath?: string;
}

export function containerAppJobTemplateInitContainerVolumeMountsToTerraform(struct?: ContainerAppJobTemplateInitContainerVolumeMounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    path: cdktn.stringToTerraform(struct!.path),
    sub_path: cdktn.stringToTerraform(struct!.subPath),
  }
}


export function containerAppJobTemplateInitContainerVolumeMountsToHclTerraform(struct?: ContainerAppJobTemplateInitContainerVolumeMounts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktn.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateInitContainerVolumeMountsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateInitContainerVolumeMounts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateInitContainerVolumeMounts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._subPath = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._subPath = value.subPath;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }
}

export class ContainerAppJobTemplateInitContainerVolumeMountsList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateInitContainerVolumeMounts[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateInitContainerVolumeMountsOutputReference {
    return new ContainerAppJobTemplateInitContainerVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateInitContainer {
  /**
  * A list of args to pass to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#args ContainerAppJob#args}
  */
  readonly args?: string[];
  /**
  * A command to pass to the container to override the default. This is provided as a list of command line elements without spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#command ContainerAppJob#command}
  */
  readonly command?: string[];
  /**
  * The amount of vCPU to allocate to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#cpu ContainerAppJob#cpu}
  */
  readonly cpu?: number;
  /**
  * The image to use to create the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#image ContainerAppJob#image}
  */
  readonly image: string;
  /**
  * The amount of memory to allocate to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#memory ContainerAppJob#memory}
  */
  readonly memory?: string;
  /**
  * The name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#env ContainerAppJob#env}
  */
  readonly env?: ContainerAppJobTemplateInitContainerEnv[] | cdktn.IResolvable;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#volume_mounts ContainerAppJob#volume_mounts}
  */
  readonly volumeMounts?: ContainerAppJobTemplateInitContainerVolumeMounts[] | cdktn.IResolvable;
}

export function containerAppJobTemplateInitContainerToTerraform(struct?: ContainerAppJobTemplateInitContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.args),
    command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
    cpu: cdktn.numberToTerraform(struct!.cpu),
    image: cdktn.stringToTerraform(struct!.image),
    memory: cdktn.stringToTerraform(struct!.memory),
    name: cdktn.stringToTerraform(struct!.name),
    env: cdktn.listMapper(containerAppJobTemplateInitContainerEnvToTerraform, true)(struct!.env),
    volume_mounts: cdktn.listMapper(containerAppJobTemplateInitContainerVolumeMountsToTerraform, true)(struct!.volumeMounts),
  }
}


export function containerAppJobTemplateInitContainerToHclTerraform(struct?: ContainerAppJobTemplateInitContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu: {
      value: cdktn.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.stringToHclTerraform(struct!.memory),
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
    env: {
      value: cdktn.listMapperHcl(containerAppJobTemplateInitContainerEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateInitContainerEnvList",
    },
    volume_mounts: {
      value: cdktn.listMapperHcl(containerAppJobTemplateInitContainerVolumeMountsToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateInitContainerVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateInitContainerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateInitContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateInitContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._cpu = undefined;
      this._image = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._env.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._cpu = value.cpu;
      this._image = value.image;
      this._memory = value.memory;
      this._name = value.name;
      this._env.internalValue = value.env;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  public get ephemeralStorage() {
    return this.getStringAttribute('ephemeral_storage');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // env - computed: false, optional: true, required: false
  private _env = new ContainerAppJobTemplateInitContainerEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: ContainerAppJobTemplateInitContainerEnv[] | cdktn.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new ContainerAppJobTemplateInitContainerVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: ContainerAppJobTemplateInitContainerVolumeMounts[] | cdktn.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class ContainerAppJobTemplateInitContainerList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateInitContainer[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateInitContainerOutputReference {
    return new ContainerAppJobTemplateInitContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplateVolume {
  /**
  * Mount options used while mounting the AzureFile. Must be a comma-separated string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#mount_options ContainerAppJob#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * The name of the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#name ContainerAppJob#name}
  */
  readonly name: string;
  /**
  * The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#storage_name ContainerAppJob#storage_name}
  */
  readonly storageName?: string;
  /**
  * The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#storage_type ContainerAppJob#storage_type}
  */
  readonly storageType?: string;
}

export function containerAppJobTemplateVolumeToTerraform(struct?: ContainerAppJobTemplateVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mount_options: cdktn.stringToTerraform(struct!.mountOptions),
    name: cdktn.stringToTerraform(struct!.name),
    storage_name: cdktn.stringToTerraform(struct!.storageName),
    storage_type: cdktn.stringToTerraform(struct!.storageType),
  }
}


export function containerAppJobTemplateVolumeToHclTerraform(struct?: ContainerAppJobTemplateVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mount_options: {
      value: cdktn.stringToHclTerraform(struct!.mountOptions),
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
    storage_name: {
      value: cdktn.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktn.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateVolumeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerAppJobTemplateVolume | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplateVolume | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountOptions = undefined;
      this._name = undefined;
      this._storageName = undefined;
      this._storageType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountOptions = value.mountOptions;
      this._name = value.name;
      this._storageName = value.storageName;
      this._storageType = value.storageType;
    }
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
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

  // storage_name - computed: false, optional: true, required: false
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  public resetStorageName() {
    this._storageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }
}

export class ContainerAppJobTemplateVolumeList extends cdktn.ComplexList {
  public internalValue? : ContainerAppJobTemplateVolume[] | cdktn.IResolvable

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
  public get(index: number): ContainerAppJobTemplateVolumeOutputReference {
    return new ContainerAppJobTemplateVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAppJobTemplate {
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#container ContainerAppJob#container}
  */
  readonly container: ContainerAppJobTemplateContainer[] | cdktn.IResolvable;
  /**
  * init_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#init_container ContainerAppJob#init_container}
  */
  readonly initContainer?: ContainerAppJobTemplateInitContainer[] | cdktn.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#volume ContainerAppJob#volume}
  */
  readonly volume?: ContainerAppJobTemplateVolume[] | cdktn.IResolvable;
}

export function containerAppJobTemplateToTerraform(struct?: ContainerAppJobTemplateOutputReference | ContainerAppJobTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    container: cdktn.listMapper(containerAppJobTemplateContainerToTerraform, true)(struct!.container),
    init_container: cdktn.listMapper(containerAppJobTemplateInitContainerToTerraform, true)(struct!.initContainer),
    volume: cdktn.listMapper(containerAppJobTemplateVolumeToTerraform, true)(struct!.volume),
  }
}


export function containerAppJobTemplateToHclTerraform(struct?: ContainerAppJobTemplateOutputReference | ContainerAppJobTemplate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    container: {
      value: cdktn.listMapperHcl(containerAppJobTemplateContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateContainerList",
    },
    init_container: {
      value: cdktn.listMapperHcl(containerAppJobTemplateInitContainerToHclTerraform, true)(struct!.initContainer),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateInitContainerList",
    },
    volume: {
      value: cdktn.listMapperHcl(containerAppJobTemplateVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAppJobTemplateVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAppJobTemplateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAppJobTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._initContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainer = this._initContainer?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAppJobTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container.internalValue = undefined;
      this._initContainer.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container.internalValue = value.container;
      this._initContainer.internalValue = value.initContainer;
      this._volume.internalValue = value.volume;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container = new ContainerAppJobTemplateContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: ContainerAppJobTemplateContainer[] | cdktn.IResolvable) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer = new ContainerAppJobTemplateInitContainerList(this, "init_container", false);
  public get initContainer() {
    return this._initContainer;
  }
  public putInitContainer(value: ContainerAppJobTemplateInitContainer[] | cdktn.IResolvable) {
    this._initContainer.internalValue = value;
  }
  public resetInitContainer() {
    this._initContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new ContainerAppJobTemplateVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ContainerAppJobTemplateVolume[] | cdktn.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}
export interface ContainerAppJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#create ContainerAppJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#delete ContainerAppJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#read ContainerAppJob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#update ContainerAppJob#update}
  */
  readonly update?: string;
}

export function containerAppJobTimeoutsToTerraform(struct?: ContainerAppJobTimeouts | cdktn.IResolvable): any {
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


export function containerAppJobTimeoutsToHclTerraform(struct?: ContainerAppJobTimeouts | cdktn.IResolvable): any {
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

export class ContainerAppJobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerAppJobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerAppJobTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job azurerm_container_app_job}
*/
export class ContainerAppJob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_app_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ContainerAppJob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerAppJob to import
  * @param importFromId The id of the existing ContainerAppJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerAppJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_container_app_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/container_app_job azurerm_container_app_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAppJobConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAppJobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_app_job',
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
    this._containerAppEnvironmentId = config.containerAppEnvironmentId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._replicaRetryLimit = config.replicaRetryLimit;
    this._replicaTimeoutInSeconds = config.replicaTimeoutInSeconds;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._workloadProfileName = config.workloadProfileName;
    this._eventTriggerConfig.internalValue = config.eventTriggerConfig;
    this._identity.internalValue = config.identity;
    this._manualTriggerConfig.internalValue = config.manualTriggerConfig;
    this._registry.internalValue = config.registry;
    this._scheduleTriggerConfig.internalValue = config.scheduleTriggerConfig;
    this._secret.internalValue = config.secret;
    this._template.internalValue = config.template;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_app_environment_id - computed: false, optional: false, required: true
  private _containerAppEnvironmentId?: string; 
  public get containerAppEnvironmentId() {
    return this.getStringAttribute('container_app_environment_id');
  }
  public set containerAppEnvironmentId(value: string) {
    this._containerAppEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAppEnvironmentIdInput() {
    return this._containerAppEnvironmentId;
  }

  // event_stream_endpoint - computed: true, optional: false, required: false
  public get eventStreamEndpoint() {
    return this.getStringAttribute('event_stream_endpoint');
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

  // outbound_ip_addresses - computed: true, optional: false, required: false
  public get outboundIpAddresses() {
    return this.getListAttribute('outbound_ip_addresses');
  }

  // replica_retry_limit - computed: false, optional: true, required: false
  private _replicaRetryLimit?: number; 
  public get replicaRetryLimit() {
    return this.getNumberAttribute('replica_retry_limit');
  }
  public set replicaRetryLimit(value: number) {
    this._replicaRetryLimit = value;
  }
  public resetReplicaRetryLimit() {
    this._replicaRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRetryLimitInput() {
    return this._replicaRetryLimit;
  }

  // replica_timeout_in_seconds - computed: false, optional: false, required: true
  private _replicaTimeoutInSeconds?: number; 
  public get replicaTimeoutInSeconds() {
    return this.getNumberAttribute('replica_timeout_in_seconds');
  }
  public set replicaTimeoutInSeconds(value: number) {
    this._replicaTimeoutInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaTimeoutInSecondsInput() {
    return this._replicaTimeoutInSeconds;
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

  // workload_profile_name - computed: false, optional: true, required: false
  private _workloadProfileName?: string; 
  public get workloadProfileName() {
    return this.getStringAttribute('workload_profile_name');
  }
  public set workloadProfileName(value: string) {
    this._workloadProfileName = value;
  }
  public resetWorkloadProfileName() {
    this._workloadProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadProfileNameInput() {
    return this._workloadProfileName;
  }

  // event_trigger_config - computed: false, optional: true, required: false
  private _eventTriggerConfig = new ContainerAppJobEventTriggerConfigOutputReference(this, "event_trigger_config");
  public get eventTriggerConfig() {
    return this._eventTriggerConfig;
  }
  public putEventTriggerConfig(value: ContainerAppJobEventTriggerConfig) {
    this._eventTriggerConfig.internalValue = value;
  }
  public resetEventTriggerConfig() {
    this._eventTriggerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerConfigInput() {
    return this._eventTriggerConfig.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ContainerAppJobIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ContainerAppJobIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // manual_trigger_config - computed: false, optional: true, required: false
  private _manualTriggerConfig = new ContainerAppJobManualTriggerConfigOutputReference(this, "manual_trigger_config");
  public get manualTriggerConfig() {
    return this._manualTriggerConfig;
  }
  public putManualTriggerConfig(value: ContainerAppJobManualTriggerConfig) {
    this._manualTriggerConfig.internalValue = value;
  }
  public resetManualTriggerConfig() {
    this._manualTriggerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualTriggerConfigInput() {
    return this._manualTriggerConfig.internalValue;
  }

  // registry - computed: false, optional: true, required: false
  private _registry = new ContainerAppJobRegistryList(this, "registry", false);
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: ContainerAppJobRegistry[] | cdktn.IResolvable) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
  }

  // schedule_trigger_config - computed: false, optional: true, required: false
  private _scheduleTriggerConfig = new ContainerAppJobScheduleTriggerConfigOutputReference(this, "schedule_trigger_config");
  public get scheduleTriggerConfig() {
    return this._scheduleTriggerConfig;
  }
  public putScheduleTriggerConfig(value: ContainerAppJobScheduleTriggerConfig) {
    this._scheduleTriggerConfig.internalValue = value;
  }
  public resetScheduleTriggerConfig() {
    this._scheduleTriggerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTriggerConfigInput() {
    return this._scheduleTriggerConfig.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ContainerAppJobSecretList(this, "secret", true);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ContainerAppJobSecret[] | cdktn.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new ContainerAppJobTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ContainerAppJobTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAppJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAppJobTimeouts) {
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
      container_app_environment_id: cdktn.stringToTerraform(this._containerAppEnvironmentId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      replica_retry_limit: cdktn.numberToTerraform(this._replicaRetryLimit),
      replica_timeout_in_seconds: cdktn.numberToTerraform(this._replicaTimeoutInSeconds),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      workload_profile_name: cdktn.stringToTerraform(this._workloadProfileName),
      event_trigger_config: containerAppJobEventTriggerConfigToTerraform(this._eventTriggerConfig.internalValue),
      identity: containerAppJobIdentityToTerraform(this._identity.internalValue),
      manual_trigger_config: containerAppJobManualTriggerConfigToTerraform(this._manualTriggerConfig.internalValue),
      registry: cdktn.listMapper(containerAppJobRegistryToTerraform, true)(this._registry.internalValue),
      schedule_trigger_config: containerAppJobScheduleTriggerConfigToTerraform(this._scheduleTriggerConfig.internalValue),
      secret: cdktn.listMapper(containerAppJobSecretToTerraform, true)(this._secret.internalValue),
      template: containerAppJobTemplateToTerraform(this._template.internalValue),
      timeouts: containerAppJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_app_environment_id: {
        value: cdktn.stringToHclTerraform(this._containerAppEnvironmentId),
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
      replica_retry_limit: {
        value: cdktn.numberToHclTerraform(this._replicaRetryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replica_timeout_in_seconds: {
        value: cdktn.numberToHclTerraform(this._replicaTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
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
      workload_profile_name: {
        value: cdktn.stringToHclTerraform(this._workloadProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_trigger_config: {
        value: containerAppJobEventTriggerConfigToHclTerraform(this._eventTriggerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAppJobEventTriggerConfigList",
      },
      identity: {
        value: containerAppJobIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAppJobIdentityList",
      },
      manual_trigger_config: {
        value: containerAppJobManualTriggerConfigToHclTerraform(this._manualTriggerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAppJobManualTriggerConfigList",
      },
      registry: {
        value: cdktn.listMapperHcl(containerAppJobRegistryToHclTerraform, true)(this._registry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAppJobRegistryList",
      },
      schedule_trigger_config: {
        value: containerAppJobScheduleTriggerConfigToHclTerraform(this._scheduleTriggerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAppJobScheduleTriggerConfigList",
      },
      secret: {
        value: cdktn.listMapperHcl(containerAppJobSecretToHclTerraform, true)(this._secret.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerAppJobSecretList",
      },
      template: {
        value: containerAppJobTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAppJobTemplateList",
      },
      timeouts: {
        value: containerAppJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerAppJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
