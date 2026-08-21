/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CdnFrontdoorRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#behaviour_on_match CdnFrontdoorRule#behaviour_on_match}
  */
  readonly behaviourOnMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_rule_set_id CdnFrontdoorRule#cdn_frontdoor_rule_set_id}
  */
  readonly cdnFrontdoorRuleSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#id CdnFrontdoorRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#order CdnFrontdoorRule#order}
  */
  readonly order: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#actions CdnFrontdoorRule#actions}
  */
  readonly actions: CdnFrontdoorRuleActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#conditions CdnFrontdoorRule#conditions}
  */
  readonly conditions?: CdnFrontdoorRuleConditions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#timeouts CdnFrontdoorRule#timeouts}
  */
  readonly timeouts?: CdnFrontdoorRuleTimeouts;
}
export interface CdnFrontdoorRuleActionsModifyRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}
  */
  readonly headerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
}

export function cdnFrontdoorRuleActionsModifyRequestHeaderToTerraform(struct?: CdnFrontdoorRuleActionsModifyRequestHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleActionsModifyRequestHeaderToHclTerraform(struct?: CdnFrontdoorRuleActionsModifyRequestHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleActionsModifyRequestHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsModifyRequestHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._operator = value.operator;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
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
}

export class CdnFrontdoorRuleActionsModifyRequestHeaderList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleActionsModifyRequestHeader[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference {
    return new CdnFrontdoorRuleActionsModifyRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleActionsModifyResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_name CdnFrontdoorRule#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#header_value CdnFrontdoorRule#header_value}
  */
  readonly headerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
}

export function cdnFrontdoorRuleActionsModifyResponseHeaderToTerraform(struct?: CdnFrontdoorRuleActionsModifyResponseHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header_name: cdktn.stringToTerraform(struct!.headerName),
    header_value: cdktn.stringToTerraform(struct!.headerValue),
    operator: cdktn.stringToTerraform(struct!.operator),
  }
}


export function cdnFrontdoorRuleActionsModifyResponseHeaderToHclTerraform(struct?: CdnFrontdoorRuleActionsModifyResponseHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header_name: {
      value: cdktn.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktn.stringToHclTerraform(struct!.headerValue),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleActionsModifyResponseHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsModifyResponseHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._operator = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._operator = value.operator;
    }
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
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
}

export class CdnFrontdoorRuleActionsModifyResponseHeaderList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleActionsModifyResponseHeader[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference {
    return new CdnFrontdoorRuleActionsModifyResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#behaviour CdnFrontdoorRule#behaviour}
  */
  readonly behaviour: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#compression_enabled CdnFrontdoorRule#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#duration CdnFrontdoorRule#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string_behaviour CdnFrontdoorRule#query_string_behaviour}
  */
  readonly queryStringBehaviour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string_parameters CdnFrontdoorRule#query_string_parameters}
  */
  readonly queryStringParameters?: string[];
}

export function cdnFrontdoorRuleActionsRouteConfigurationOverrideCachingToTerraform(struct?: CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference | CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behaviour: cdktn.stringToTerraform(struct!.behaviour),
    compression_enabled: cdktn.booleanToTerraform(struct!.compressionEnabled),
    duration: cdktn.stringToTerraform(struct!.duration),
    query_string_behaviour: cdktn.stringToTerraform(struct!.queryStringBehaviour),
    query_string_parameters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.queryStringParameters),
  }
}


export function cdnFrontdoorRuleActionsRouteConfigurationOverrideCachingToHclTerraform(struct?: CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference | CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behaviour: {
      value: cdktn.stringToHclTerraform(struct!.behaviour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.compressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    duration: {
      value: cdktn.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string_behaviour: {
      value: cdktn.stringToHclTerraform(struct!.queryStringBehaviour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string_parameters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.queryStringParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behaviour !== undefined) {
      hasAnyValues = true;
      internalValueResult.behaviour = this._behaviour;
    }
    if (this._compressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionEnabled = this._compressionEnabled;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._queryStringBehaviour !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringBehaviour = this._queryStringBehaviour;
    }
    if (this._queryStringParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringParameters = this._queryStringParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behaviour = undefined;
      this._compressionEnabled = undefined;
      this._duration = undefined;
      this._queryStringBehaviour = undefined;
      this._queryStringParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behaviour = value.behaviour;
      this._compressionEnabled = value.compressionEnabled;
      this._duration = value.duration;
      this._queryStringBehaviour = value.queryStringBehaviour;
      this._queryStringParameters = value.queryStringParameters;
    }
  }

  // behaviour - computed: false, optional: false, required: true
  private _behaviour?: string; 
  public get behaviour() {
    return this.getStringAttribute('behaviour');
  }
  public set behaviour(value: string) {
    this._behaviour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviourInput() {
    return this._behaviour;
  }

  // compression_enabled - computed: false, optional: true, required: false
  private _compressionEnabled?: boolean | cdktn.IResolvable; 
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }
  public set compressionEnabled(value: boolean | cdktn.IResolvable) {
    this._compressionEnabled = value;
  }
  public resetCompressionEnabled() {
    this._compressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnabledInput() {
    return this._compressionEnabled;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // query_string_behaviour - computed: false, optional: true, required: false
  private _queryStringBehaviour?: string; 
  public get queryStringBehaviour() {
    return this.getStringAttribute('query_string_behaviour');
  }
  public set queryStringBehaviour(value: string) {
    this._queryStringBehaviour = value;
  }
  public resetQueryStringBehaviour() {
    this._queryStringBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBehaviourInput() {
    return this._queryStringBehaviour;
  }

  // query_string_parameters - computed: false, optional: true, required: false
  private _queryStringParameters?: string[]; 
  public get queryStringParameters() {
    return this.getListAttribute('query_string_parameters');
  }
  public set queryStringParameters(value: string[]) {
    this._queryStringParameters = value;
  }
  public resetQueryStringParameters() {
    this._queryStringParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringParametersInput() {
    return this._queryStringParameters;
  }
}
export interface CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#cdn_frontdoor_origin_group_id CdnFrontdoorRule#cdn_frontdoor_origin_group_id}
  */
  readonly cdnFrontdoorOriginGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#forwarding_protocol CdnFrontdoorRule#forwarding_protocol}
  */
  readonly forwardingProtocol: string;
}

export function cdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupToTerraform(struct?: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference | CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cdn_frontdoor_origin_group_id: cdktn.stringToTerraform(struct!.cdnFrontdoorOriginGroupId),
    forwarding_protocol: cdktn.stringToTerraform(struct!.forwardingProtocol),
  }
}


export function cdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupToHclTerraform(struct?: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference | CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cdn_frontdoor_origin_group_id: {
      value: cdktn.stringToHclTerraform(struct!.cdnFrontdoorOriginGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_protocol: {
      value: cdktn.stringToHclTerraform(struct!.forwardingProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdnFrontdoorOriginGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnFrontdoorOriginGroupId = this._cdnFrontdoorOriginGroupId;
    }
    if (this._forwardingProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingProtocol = this._forwardingProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdnFrontdoorOriginGroupId = undefined;
      this._forwardingProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdnFrontdoorOriginGroupId = value.cdnFrontdoorOriginGroupId;
      this._forwardingProtocol = value.forwardingProtocol;
    }
  }

  // cdn_frontdoor_origin_group_id - computed: false, optional: false, required: true
  private _cdnFrontdoorOriginGroupId?: string; 
  public get cdnFrontdoorOriginGroupId() {
    return this.getStringAttribute('cdn_frontdoor_origin_group_id');
  }
  public set cdnFrontdoorOriginGroupId(value: string) {
    this._cdnFrontdoorOriginGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorOriginGroupIdInput() {
    return this._cdnFrontdoorOriginGroupId;
  }

  // forwarding_protocol - computed: false, optional: false, required: true
  private _forwardingProtocol?: string; 
  public get forwardingProtocol() {
    return this.getStringAttribute('forwarding_protocol');
  }
  public set forwardingProtocol(value: string) {
    this._forwardingProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingProtocolInput() {
    return this._forwardingProtocol;
  }
}
export interface CdnFrontdoorRuleActionsRouteConfigurationOverride {
  /**
  * caching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#caching CdnFrontdoorRule#caching}
  */
  readonly caching: CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching;
  /**
  * origin_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#origin_group CdnFrontdoorRule#origin_group}
  */
  readonly originGroup?: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup;
}

export function cdnFrontdoorRuleActionsRouteConfigurationOverrideToTerraform(struct?: CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference | CdnFrontdoorRuleActionsRouteConfigurationOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    caching: cdnFrontdoorRuleActionsRouteConfigurationOverrideCachingToTerraform(struct!.caching),
    origin_group: cdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupToTerraform(struct!.originGroup),
  }
}


export function cdnFrontdoorRuleActionsRouteConfigurationOverrideToHclTerraform(struct?: CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference | CdnFrontdoorRuleActionsRouteConfigurationOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    caching: {
      value: cdnFrontdoorRuleActionsRouteConfigurationOverrideCachingToHclTerraform(struct!.caching),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingList",
    },
    origin_group: {
      value: cdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupToHclTerraform(struct!.originGroup),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActionsRouteConfigurationOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching?.internalValue;
    }
    if (this._originGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originGroup = this._originGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsRouteConfigurationOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caching.internalValue = undefined;
      this._originGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caching.internalValue = value.caching;
      this._originGroup.internalValue = value.originGroup;
    }
  }

  // caching - computed: false, optional: false, required: true
  private _caching = new CdnFrontdoorRuleActionsRouteConfigurationOverrideCachingOutputReference(this, "caching");
  public get caching() {
    return this._caching;
  }
  public putCaching(value: CdnFrontdoorRuleActionsRouteConfigurationOverrideCaching) {
    this._caching.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching.internalValue;
  }

  // origin_group - computed: false, optional: true, required: false
  private _originGroup = new CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroupOutputReference(this, "origin_group");
  public get originGroup() {
    return this._originGroup;
  }
  public putOriginGroup(value: CdnFrontdoorRuleActionsRouteConfigurationOverrideOriginGroup) {
    this._originGroup.internalValue = value;
  }
  public resetOriginGroup() {
    this._originGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originGroupInput() {
    return this._originGroup.internalValue;
  }
}
export interface CdnFrontdoorRuleActionsUrlRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_fragment CdnFrontdoorRule#destination_fragment}
  */
  readonly destinationFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_host_name CdnFrontdoorRule#destination_host_name}
  */
  readonly destinationHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#redirect_protocol CdnFrontdoorRule#redirect_protocol}
  */
  readonly redirectProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#redirect_type CdnFrontdoorRule#redirect_type}
  */
  readonly redirectType: string;
}

export function cdnFrontdoorRuleActionsUrlRedirectToTerraform(struct?: CdnFrontdoorRuleActionsUrlRedirectOutputReference | CdnFrontdoorRuleActionsUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_fragment: cdktn.stringToTerraform(struct!.destinationFragment),
    destination_host_name: cdktn.stringToTerraform(struct!.destinationHostName),
    destination_path: cdktn.stringToTerraform(struct!.destinationPath),
    query_string: cdktn.stringToTerraform(struct!.queryString),
    redirect_protocol: cdktn.stringToTerraform(struct!.redirectProtocol),
    redirect_type: cdktn.stringToTerraform(struct!.redirectType),
  }
}


export function cdnFrontdoorRuleActionsUrlRedirectToHclTerraform(struct?: CdnFrontdoorRuleActionsUrlRedirectOutputReference | CdnFrontdoorRuleActionsUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_fragment: {
      value: cdktn.stringToHclTerraform(struct!.destinationFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_host_name: {
      value: cdktn.stringToHclTerraform(struct!.destinationHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_path: {
      value: cdktn.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktn.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_protocol: {
      value: cdktn.stringToHclTerraform(struct!.redirectProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_type: {
      value: cdktn.stringToHclTerraform(struct!.redirectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsUrlRedirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActionsUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFragment = this._destinationFragment;
    }
    if (this._destinationHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationHostName = this._destinationHostName;
    }
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._redirectProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectProtocol = this._redirectProtocol;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationFragment = undefined;
      this._destinationHostName = undefined;
      this._destinationPath = undefined;
      this._queryString = undefined;
      this._redirectProtocol = undefined;
      this._redirectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationFragment = value.destinationFragment;
      this._destinationHostName = value.destinationHostName;
      this._destinationPath = value.destinationPath;
      this._queryString = value.queryString;
      this._redirectProtocol = value.redirectProtocol;
      this._redirectType = value.redirectType;
    }
  }

  // destination_fragment - computed: false, optional: true, required: false
  private _destinationFragment?: string; 
  public get destinationFragment() {
    return this.getStringAttribute('destination_fragment');
  }
  public set destinationFragment(value: string) {
    this._destinationFragment = value;
  }
  public resetDestinationFragment() {
    this._destinationFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFragmentInput() {
    return this._destinationFragment;
  }

  // destination_host_name - computed: false, optional: true, required: false
  private _destinationHostName?: string; 
  public get destinationHostName() {
    return this.getStringAttribute('destination_host_name');
  }
  public set destinationHostName(value: string) {
    this._destinationHostName = value;
  }
  public resetDestinationHostName() {
    this._destinationHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHostNameInput() {
    return this._destinationHostName;
  }

  // destination_path - computed: false, optional: true, required: false
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  public resetDestinationPath() {
    this._destinationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // redirect_protocol - computed: false, optional: true, required: false
  private _redirectProtocol?: string; 
  public get redirectProtocol() {
    return this.getStringAttribute('redirect_protocol');
  }
  public set redirectProtocol(value: string) {
    this._redirectProtocol = value;
  }
  public resetRedirectProtocol() {
    this._redirectProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectProtocolInput() {
    return this._redirectProtocol;
  }

  // redirect_type - computed: false, optional: false, required: true
  private _redirectType?: string; 
  public get redirectType() {
    return this.getStringAttribute('redirect_type');
  }
  public set redirectType(value: string) {
    this._redirectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTypeInput() {
    return this._redirectType;
  }
}
export interface CdnFrontdoorRuleActionsUrlRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#destination_path CdnFrontdoorRule#destination_path}
  */
  readonly destinationPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#preserve_unmatched_path_enabled CdnFrontdoorRule#preserve_unmatched_path_enabled}
  */
  readonly preserveUnmatchedPathEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#source_pattern CdnFrontdoorRule#source_pattern}
  */
  readonly sourcePattern: string;
}

export function cdnFrontdoorRuleActionsUrlRewriteToTerraform(struct?: CdnFrontdoorRuleActionsUrlRewriteOutputReference | CdnFrontdoorRuleActionsUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_path: cdktn.stringToTerraform(struct!.destinationPath),
    preserve_unmatched_path_enabled: cdktn.booleanToTerraform(struct!.preserveUnmatchedPathEnabled),
    source_pattern: cdktn.stringToTerraform(struct!.sourcePattern),
  }
}


export function cdnFrontdoorRuleActionsUrlRewriteToHclTerraform(struct?: CdnFrontdoorRuleActionsUrlRewriteOutputReference | CdnFrontdoorRuleActionsUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_path: {
      value: cdktn.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_unmatched_path_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.preserveUnmatchedPathEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_pattern: {
      value: cdktn.stringToHclTerraform(struct!.sourcePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsUrlRewriteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActionsUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._preserveUnmatchedPathEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveUnmatchedPathEnabled = this._preserveUnmatchedPathEnabled;
    }
    if (this._sourcePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePattern = this._sourcePattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActionsUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationPath = undefined;
      this._preserveUnmatchedPathEnabled = undefined;
      this._sourcePattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationPath = value.destinationPath;
      this._preserveUnmatchedPathEnabled = value.preserveUnmatchedPathEnabled;
      this._sourcePattern = value.sourcePattern;
    }
  }

  // destination_path - computed: false, optional: false, required: true
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // preserve_unmatched_path_enabled - computed: false, optional: true, required: false
  private _preserveUnmatchedPathEnabled?: boolean | cdktn.IResolvable; 
  public get preserveUnmatchedPathEnabled() {
    return this.getBooleanAttribute('preserve_unmatched_path_enabled');
  }
  public set preserveUnmatchedPathEnabled(value: boolean | cdktn.IResolvable) {
    this._preserveUnmatchedPathEnabled = value;
  }
  public resetPreserveUnmatchedPathEnabled() {
    this._preserveUnmatchedPathEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveUnmatchedPathEnabledInput() {
    return this._preserveUnmatchedPathEnabled;
  }

  // source_pattern - computed: false, optional: false, required: true
  private _sourcePattern?: string; 
  public get sourcePattern() {
    return this.getStringAttribute('source_pattern');
  }
  public set sourcePattern(value: string) {
    this._sourcePattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePatternInput() {
    return this._sourcePattern;
  }
}
export interface CdnFrontdoorRuleActions {
  /**
  * modify_request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#modify_request_header CdnFrontdoorRule#modify_request_header}
  */
  readonly modifyRequestHeader?: CdnFrontdoorRuleActionsModifyRequestHeader[] | cdktn.IResolvable;
  /**
  * modify_response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#modify_response_header CdnFrontdoorRule#modify_response_header}
  */
  readonly modifyResponseHeader?: CdnFrontdoorRuleActionsModifyResponseHeader[] | cdktn.IResolvable;
  /**
  * route_configuration_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#route_configuration_override CdnFrontdoorRule#route_configuration_override}
  */
  readonly routeConfigurationOverride?: CdnFrontdoorRuleActionsRouteConfigurationOverride;
  /**
  * url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#url_redirect CdnFrontdoorRule#url_redirect}
  */
  readonly urlRedirect?: CdnFrontdoorRuleActionsUrlRedirect;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#url_rewrite CdnFrontdoorRule#url_rewrite}
  */
  readonly urlRewrite?: CdnFrontdoorRuleActionsUrlRewrite;
}

export function cdnFrontdoorRuleActionsToTerraform(struct?: CdnFrontdoorRuleActionsOutputReference | CdnFrontdoorRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modify_request_header: cdktn.listMapper(cdnFrontdoorRuleActionsModifyRequestHeaderToTerraform, true)(struct!.modifyRequestHeader),
    modify_response_header: cdktn.listMapper(cdnFrontdoorRuleActionsModifyResponseHeaderToTerraform, true)(struct!.modifyResponseHeader),
    route_configuration_override: cdnFrontdoorRuleActionsRouteConfigurationOverrideToTerraform(struct!.routeConfigurationOverride),
    url_redirect: cdnFrontdoorRuleActionsUrlRedirectToTerraform(struct!.urlRedirect),
    url_rewrite: cdnFrontdoorRuleActionsUrlRewriteToTerraform(struct!.urlRewrite),
  }
}


export function cdnFrontdoorRuleActionsToHclTerraform(struct?: CdnFrontdoorRuleActionsOutputReference | CdnFrontdoorRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modify_request_header: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleActionsModifyRequestHeaderToHclTerraform, true)(struct!.modifyRequestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsModifyRequestHeaderList",
    },
    modify_response_header: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleActionsModifyResponseHeaderToHclTerraform, true)(struct!.modifyResponseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsModifyResponseHeaderList",
    },
    route_configuration_override: {
      value: cdnFrontdoorRuleActionsRouteConfigurationOverrideToHclTerraform(struct!.routeConfigurationOverride),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsRouteConfigurationOverrideList",
    },
    url_redirect: {
      value: cdnFrontdoorRuleActionsUrlRedirectToHclTerraform(struct!.urlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsUrlRedirectList",
    },
    url_rewrite: {
      value: cdnFrontdoorRuleActionsUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleActionsUrlRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modifyRequestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyRequestHeader = this._modifyRequestHeader?.internalValue;
    }
    if (this._modifyResponseHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyResponseHeader = this._modifyResponseHeader?.internalValue;
    }
    if (this._routeConfigurationOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeConfigurationOverride = this._routeConfigurationOverride?.internalValue;
    }
    if (this._urlRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRedirect = this._urlRedirect?.internalValue;
    }
    if (this._urlRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlRewrite = this._urlRewrite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modifyRequestHeader.internalValue = undefined;
      this._modifyResponseHeader.internalValue = undefined;
      this._routeConfigurationOverride.internalValue = undefined;
      this._urlRedirect.internalValue = undefined;
      this._urlRewrite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modifyRequestHeader.internalValue = value.modifyRequestHeader;
      this._modifyResponseHeader.internalValue = value.modifyResponseHeader;
      this._routeConfigurationOverride.internalValue = value.routeConfigurationOverride;
      this._urlRedirect.internalValue = value.urlRedirect;
      this._urlRewrite.internalValue = value.urlRewrite;
    }
  }

  // modify_request_header - computed: false, optional: true, required: false
  private _modifyRequestHeader = new CdnFrontdoorRuleActionsModifyRequestHeaderList(this, "modify_request_header", false);
  public get modifyRequestHeader() {
    return this._modifyRequestHeader;
  }
  public putModifyRequestHeader(value: CdnFrontdoorRuleActionsModifyRequestHeader[] | cdktn.IResolvable) {
    this._modifyRequestHeader.internalValue = value;
  }
  public resetModifyRequestHeader() {
    this._modifyRequestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyRequestHeaderInput() {
    return this._modifyRequestHeader.internalValue;
  }

  // modify_response_header - computed: false, optional: true, required: false
  private _modifyResponseHeader = new CdnFrontdoorRuleActionsModifyResponseHeaderList(this, "modify_response_header", false);
  public get modifyResponseHeader() {
    return this._modifyResponseHeader;
  }
  public putModifyResponseHeader(value: CdnFrontdoorRuleActionsModifyResponseHeader[] | cdktn.IResolvable) {
    this._modifyResponseHeader.internalValue = value;
  }
  public resetModifyResponseHeader() {
    this._modifyResponseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyResponseHeaderInput() {
    return this._modifyResponseHeader.internalValue;
  }

  // route_configuration_override - computed: false, optional: true, required: false
  private _routeConfigurationOverride = new CdnFrontdoorRuleActionsRouteConfigurationOverrideOutputReference(this, "route_configuration_override");
  public get routeConfigurationOverride() {
    return this._routeConfigurationOverride;
  }
  public putRouteConfigurationOverride(value: CdnFrontdoorRuleActionsRouteConfigurationOverride) {
    this._routeConfigurationOverride.internalValue = value;
  }
  public resetRouteConfigurationOverride() {
    this._routeConfigurationOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeConfigurationOverrideInput() {
    return this._routeConfigurationOverride.internalValue;
  }

  // url_redirect - computed: false, optional: true, required: false
  private _urlRedirect = new CdnFrontdoorRuleActionsUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: CdnFrontdoorRuleActionsUrlRedirect) {
    this._urlRedirect.internalValue = value;
  }
  public resetUrlRedirect() {
    this._urlRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRedirectInput() {
    return this._urlRedirect.internalValue;
  }

  // url_rewrite - computed: false, optional: true, required: false
  private _urlRewrite = new CdnFrontdoorRuleActionsUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: CdnFrontdoorRuleActionsUrlRewrite) {
    this._urlRewrite.internalValue = value;
  }
  public resetUrlRewrite() {
    this._urlRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRewriteInput() {
    return this._urlRewrite.internalValue;
  }
}
export interface CdnFrontdoorRuleConditionsClientPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsClientPortToTerraform(struct?: CdnFrontdoorRuleConditionsClientPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsClientPortToHclTerraform(struct?: CdnFrontdoorRuleConditionsClientPort | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsClientPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsClientPort | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsClientPort | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsClientPortList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsClientPort[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsClientPortOutputReference {
    return new CdnFrontdoorRuleConditionsClientPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsDeviceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorRuleConditionsDeviceTypeToTerraform(struct?: CdnFrontdoorRuleConditionsDeviceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsDeviceTypeToHclTerraform(struct?: CdnFrontdoorRuleConditionsDeviceType | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsDeviceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsDeviceType | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsDeviceType | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsDeviceTypeList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsDeviceType[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsDeviceTypeOutputReference {
    return new CdnFrontdoorRuleConditionsDeviceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsHostName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsHostNameToTerraform(struct?: CdnFrontdoorRuleConditionsHostName | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsHostNameToHclTerraform(struct?: CdnFrontdoorRuleConditionsHostName | cdktn.IResolvable): any {
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
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsHostNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsHostName | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsHostName | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsHostNameList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsHostName[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsHostNameOutputReference {
    return new CdnFrontdoorRuleConditionsHostNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsHttpVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorRuleConditionsHttpVersionToTerraform(struct?: CdnFrontdoorRuleConditionsHttpVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsHttpVersionToHclTerraform(struct?: CdnFrontdoorRuleConditionsHttpVersion | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsHttpVersionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsHttpVersion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsHttpVersion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsHttpVersionList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsHttpVersion[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsHttpVersionOutputReference {
    return new CdnFrontdoorRuleConditionsHttpVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsPostArgument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsPostArgumentToTerraform(struct?: CdnFrontdoorRuleConditionsPostArgument | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsPostArgumentToHclTerraform(struct?: CdnFrontdoorRuleConditionsPostArgument | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsPostArgumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsPostArgument | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsPostArgument | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsPostArgumentList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsPostArgument[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsPostArgumentOutputReference {
    return new CdnFrontdoorRuleConditionsPostArgumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsQueryString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsQueryStringToTerraform(struct?: CdnFrontdoorRuleConditionsQueryString | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsQueryStringToHclTerraform(struct?: CdnFrontdoorRuleConditionsQueryString | cdktn.IResolvable): any {
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
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsQueryStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsQueryString | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsQueryString | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsQueryStringList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsQueryString[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsQueryStringOutputReference {
    return new CdnFrontdoorRuleConditionsQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRemoteAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorRuleConditionsRemoteAddressToTerraform(struct?: CdnFrontdoorRuleConditionsRemoteAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRemoteAddressToHclTerraform(struct?: CdnFrontdoorRuleConditionsRemoteAddress | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRemoteAddressOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRemoteAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRemoteAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRemoteAddressList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRemoteAddress[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRemoteAddressOutputReference {
    return new CdnFrontdoorRuleConditionsRemoteAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsRequestBodyToTerraform(struct?: CdnFrontdoorRuleConditionsRequestBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestBodyToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestBody | cdktn.IResolvable): any {
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
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestBodyList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestBody[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestBodyOutputReference {
    return new CdnFrontdoorRuleConditionsRequestBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsRequestCookiesToTerraform(struct?: CdnFrontdoorRuleConditionsRequestCookies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestCookiesToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestCookies | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestCookiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestCookies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestCookies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestCookiesList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestCookies[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestCookiesOutputReference {
    return new CdnFrontdoorRuleConditionsRequestCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestFileExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsRequestFileExtensionToTerraform(struct?: CdnFrontdoorRuleConditionsRequestFileExtension | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestFileExtensionToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestFileExtension | cdktn.IResolvable): any {
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
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestFileExtension | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestFileExtension | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestFileExtensionList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestFileExtension[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference {
    return new CdnFrontdoorRuleConditionsRequestFileExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestFilename {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsRequestFilenameToTerraform(struct?: CdnFrontdoorRuleConditionsRequestFilename | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestFilenameToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestFilename | cdktn.IResolvable): any {
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
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestFilenameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestFilename | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestFilename | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestFilenameList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestFilename[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestFilenameOutputReference {
    return new CdnFrontdoorRuleConditionsRequestFilenameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#name CdnFrontdoorRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsRequestHeaderToTerraform(struct?: CdnFrontdoorRuleConditionsRequestHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestHeaderToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestHeader | cdktn.IResolvable): any {
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
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestHeader | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestHeader | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestHeaderList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestHeader[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestHeaderOutputReference {
    return new CdnFrontdoorRuleConditionsRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorRuleConditionsRequestMethodToTerraform(struct?: CdnFrontdoorRuleConditionsRequestMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestMethodToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestMethod | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestMethod | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestMethod | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestMethodList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestMethod[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestMethodOutputReference {
    return new CdnFrontdoorRuleConditionsRequestMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsRequestPathToTerraform(struct?: CdnFrontdoorRuleConditionsRequestPath | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestPathToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestPath | cdktn.IResolvable): any {
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
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestPath | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestPath | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestPathList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestPath[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestPathOutputReference {
    return new CdnFrontdoorRuleConditionsRequestPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestScheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorRuleConditionsRequestSchemeToTerraform(struct?: CdnFrontdoorRuleConditionsRequestScheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestSchemeToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestScheme | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestSchemeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestScheme | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestScheme | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestSchemeList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestScheme[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestSchemeOutputReference {
    return new CdnFrontdoorRuleConditionsRequestSchemeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsRequestUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#transforms CdnFrontdoorRule#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsRequestUrlToTerraform(struct?: CdnFrontdoorRuleConditionsRequestUrl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    transforms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.transforms),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsRequestUrlToHclTerraform(struct?: CdnFrontdoorRuleConditionsRequestUrl | cdktn.IResolvable): any {
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
    transforms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.transforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsRequestUrlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsRequestUrl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._transforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsRequestUrl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._transforms = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._transforms = value.transforms;
      this._values = value.values;
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

  // transforms - computed: false, optional: true, required: false
  private _transforms?: string[]; 
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }
  public set transforms(value: string[]) {
    this._transforms = value;
  }
  public resetTransforms() {
    this._transforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsRequestUrlList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsRequestUrl[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsRequestUrlOutputReference {
    return new CdnFrontdoorRuleConditionsRequestUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsServerPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorRuleConditionsServerPortToTerraform(struct?: CdnFrontdoorRuleConditionsServerPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsServerPortToHclTerraform(struct?: CdnFrontdoorRuleConditionsServerPort | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsServerPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsServerPort | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsServerPort | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsServerPortList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsServerPort[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsServerPortOutputReference {
    return new CdnFrontdoorRuleConditionsServerPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsSocketAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorRuleConditionsSocketAddressToTerraform(struct?: CdnFrontdoorRuleConditionsSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsSocketAddressToHclTerraform(struct?: CdnFrontdoorRuleConditionsSocketAddress | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsSocketAddressOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsSocketAddress | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsSocketAddress | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsSocketAddressList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsSocketAddress[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsSocketAddressOutputReference {
    return new CdnFrontdoorRuleConditionsSocketAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditionsSslProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#operator CdnFrontdoorRule#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#values CdnFrontdoorRule#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorRuleConditionsSslProtocolToTerraform(struct?: CdnFrontdoorRuleConditionsSslProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorRuleConditionsSslProtocolToHclTerraform(struct?: CdnFrontdoorRuleConditionsSslProtocol | cdktn.IResolvable): any {
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
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsSslProtocolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorRuleConditionsSslProtocol | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditionsSslProtocol | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class CdnFrontdoorRuleConditionsSslProtocolList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorRuleConditionsSslProtocol[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorRuleConditionsSslProtocolOutputReference {
    return new CdnFrontdoorRuleConditionsSslProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorRuleConditions {
  /**
  * client_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#client_port CdnFrontdoorRule#client_port}
  */
  readonly clientPort?: CdnFrontdoorRuleConditionsClientPort[] | cdktn.IResolvable;
  /**
  * device_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#device_type CdnFrontdoorRule#device_type}
  */
  readonly deviceType?: CdnFrontdoorRuleConditionsDeviceType[] | cdktn.IResolvable;
  /**
  * host_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#host_name CdnFrontdoorRule#host_name}
  */
  readonly hostName?: CdnFrontdoorRuleConditionsHostName[] | cdktn.IResolvable;
  /**
  * http_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#http_version CdnFrontdoorRule#http_version}
  */
  readonly httpVersion?: CdnFrontdoorRuleConditionsHttpVersion[] | cdktn.IResolvable;
  /**
  * post_argument block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#post_argument CdnFrontdoorRule#post_argument}
  */
  readonly postArgument?: CdnFrontdoorRuleConditionsPostArgument[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#query_string CdnFrontdoorRule#query_string}
  */
  readonly queryString?: CdnFrontdoorRuleConditionsQueryString[] | cdktn.IResolvable;
  /**
  * remote_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#remote_address CdnFrontdoorRule#remote_address}
  */
  readonly remoteAddress?: CdnFrontdoorRuleConditionsRemoteAddress[] | cdktn.IResolvable;
  /**
  * request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_body CdnFrontdoorRule#request_body}
  */
  readonly requestBody?: CdnFrontdoorRuleConditionsRequestBody[] | cdktn.IResolvable;
  /**
  * request_cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_cookies CdnFrontdoorRule#request_cookies}
  */
  readonly requestCookies?: CdnFrontdoorRuleConditionsRequestCookies[] | cdktn.IResolvable;
  /**
  * request_file_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_file_extension CdnFrontdoorRule#request_file_extension}
  */
  readonly requestFileExtension?: CdnFrontdoorRuleConditionsRequestFileExtension[] | cdktn.IResolvable;
  /**
  * request_filename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_filename CdnFrontdoorRule#request_filename}
  */
  readonly requestFilename?: CdnFrontdoorRuleConditionsRequestFilename[] | cdktn.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_header CdnFrontdoorRule#request_header}
  */
  readonly requestHeader?: CdnFrontdoorRuleConditionsRequestHeader[] | cdktn.IResolvable;
  /**
  * request_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_method CdnFrontdoorRule#request_method}
  */
  readonly requestMethod?: CdnFrontdoorRuleConditionsRequestMethod[] | cdktn.IResolvable;
  /**
  * request_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_path CdnFrontdoorRule#request_path}
  */
  readonly requestPath?: CdnFrontdoorRuleConditionsRequestPath[] | cdktn.IResolvable;
  /**
  * request_scheme block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_scheme CdnFrontdoorRule#request_scheme}
  */
  readonly requestScheme?: CdnFrontdoorRuleConditionsRequestScheme[] | cdktn.IResolvable;
  /**
  * request_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#request_url CdnFrontdoorRule#request_url}
  */
  readonly requestUrl?: CdnFrontdoorRuleConditionsRequestUrl[] | cdktn.IResolvable;
  /**
  * server_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#server_port CdnFrontdoorRule#server_port}
  */
  readonly serverPort?: CdnFrontdoorRuleConditionsServerPort[] | cdktn.IResolvable;
  /**
  * socket_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#socket_address CdnFrontdoorRule#socket_address}
  */
  readonly socketAddress?: CdnFrontdoorRuleConditionsSocketAddress[] | cdktn.IResolvable;
  /**
  * ssl_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#ssl_protocol CdnFrontdoorRule#ssl_protocol}
  */
  readonly sslProtocol?: CdnFrontdoorRuleConditionsSslProtocol[] | cdktn.IResolvable;
}

export function cdnFrontdoorRuleConditionsToTerraform(struct?: CdnFrontdoorRuleConditionsOutputReference | CdnFrontdoorRuleConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_port: cdktn.listMapper(cdnFrontdoorRuleConditionsClientPortToTerraform, true)(struct!.clientPort),
    device_type: cdktn.listMapper(cdnFrontdoorRuleConditionsDeviceTypeToTerraform, true)(struct!.deviceType),
    host_name: cdktn.listMapper(cdnFrontdoorRuleConditionsHostNameToTerraform, true)(struct!.hostName),
    http_version: cdktn.listMapper(cdnFrontdoorRuleConditionsHttpVersionToTerraform, true)(struct!.httpVersion),
    post_argument: cdktn.listMapper(cdnFrontdoorRuleConditionsPostArgumentToTerraform, true)(struct!.postArgument),
    query_string: cdktn.listMapper(cdnFrontdoorRuleConditionsQueryStringToTerraform, true)(struct!.queryString),
    remote_address: cdktn.listMapper(cdnFrontdoorRuleConditionsRemoteAddressToTerraform, true)(struct!.remoteAddress),
    request_body: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestBodyToTerraform, true)(struct!.requestBody),
    request_cookies: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestCookiesToTerraform, true)(struct!.requestCookies),
    request_file_extension: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestFileExtensionToTerraform, true)(struct!.requestFileExtension),
    request_filename: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestFilenameToTerraform, true)(struct!.requestFilename),
    request_header: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestHeaderToTerraform, true)(struct!.requestHeader),
    request_method: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestMethodToTerraform, true)(struct!.requestMethod),
    request_path: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestPathToTerraform, true)(struct!.requestPath),
    request_scheme: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestSchemeToTerraform, true)(struct!.requestScheme),
    request_url: cdktn.listMapper(cdnFrontdoorRuleConditionsRequestUrlToTerraform, true)(struct!.requestUrl),
    server_port: cdktn.listMapper(cdnFrontdoorRuleConditionsServerPortToTerraform, true)(struct!.serverPort),
    socket_address: cdktn.listMapper(cdnFrontdoorRuleConditionsSocketAddressToTerraform, true)(struct!.socketAddress),
    ssl_protocol: cdktn.listMapper(cdnFrontdoorRuleConditionsSslProtocolToTerraform, true)(struct!.sslProtocol),
  }
}


export function cdnFrontdoorRuleConditionsToHclTerraform(struct?: CdnFrontdoorRuleConditionsOutputReference | CdnFrontdoorRuleConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_port: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsClientPortToHclTerraform, true)(struct!.clientPort),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsClientPortList",
    },
    device_type: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsDeviceTypeToHclTerraform, true)(struct!.deviceType),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsDeviceTypeList",
    },
    host_name: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsHostNameToHclTerraform, true)(struct!.hostName),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsHostNameList",
    },
    http_version: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsHttpVersionToHclTerraform, true)(struct!.httpVersion),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsHttpVersionList",
    },
    post_argument: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsPostArgumentToHclTerraform, true)(struct!.postArgument),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsPostArgumentList",
    },
    query_string: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsQueryStringList",
    },
    remote_address: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRemoteAddressToHclTerraform, true)(struct!.remoteAddress),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRemoteAddressList",
    },
    request_body: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestBodyToHclTerraform, true)(struct!.requestBody),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestBodyList",
    },
    request_cookies: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestCookiesToHclTerraform, true)(struct!.requestCookies),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestCookiesList",
    },
    request_file_extension: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestFileExtensionToHclTerraform, true)(struct!.requestFileExtension),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestFileExtensionList",
    },
    request_filename: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestFilenameToHclTerraform, true)(struct!.requestFilename),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestFilenameList",
    },
    request_header: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestHeaderList",
    },
    request_method: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestMethodToHclTerraform, true)(struct!.requestMethod),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestMethodList",
    },
    request_path: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestPathToHclTerraform, true)(struct!.requestPath),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestPathList",
    },
    request_scheme: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestSchemeToHclTerraform, true)(struct!.requestScheme),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestSchemeList",
    },
    request_url: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsRequestUrlToHclTerraform, true)(struct!.requestUrl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsRequestUrlList",
    },
    server_port: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsServerPortToHclTerraform, true)(struct!.serverPort),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsServerPortList",
    },
    socket_address: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsSocketAddressToHclTerraform, true)(struct!.socketAddress),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsSocketAddressList",
    },
    ssl_protocol: {
      value: cdktn.listMapperHcl(cdnFrontdoorRuleConditionsSslProtocolToHclTerraform, true)(struct!.sslProtocol),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorRuleConditionsSslProtocolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorRuleConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPort = this._clientPort?.internalValue;
    }
    if (this._deviceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType?.internalValue;
    }
    if (this._hostName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName?.internalValue;
    }
    if (this._httpVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion?.internalValue;
    }
    if (this._postArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postArgument = this._postArgument?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._remoteAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress?.internalValue;
    }
    if (this._requestBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody?.internalValue;
    }
    if (this._requestCookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookies = this._requestCookies?.internalValue;
    }
    if (this._requestFileExtension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestFileExtension = this._requestFileExtension?.internalValue;
    }
    if (this._requestFilename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestFilename = this._requestFilename?.internalValue;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._requestMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod?.internalValue;
    }
    if (this._requestPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPath = this._requestPath?.internalValue;
    }
    if (this._requestScheme?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestScheme = this._requestScheme?.internalValue;
    }
    if (this._requestUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUrl = this._requestUrl?.internalValue;
    }
    if (this._serverPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort?.internalValue;
    }
    if (this._socketAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketAddress = this._socketAddress?.internalValue;
    }
    if (this._sslProtocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProtocol = this._sslProtocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientPort.internalValue = undefined;
      this._deviceType.internalValue = undefined;
      this._hostName.internalValue = undefined;
      this._httpVersion.internalValue = undefined;
      this._postArgument.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._remoteAddress.internalValue = undefined;
      this._requestBody.internalValue = undefined;
      this._requestCookies.internalValue = undefined;
      this._requestFileExtension.internalValue = undefined;
      this._requestFilename.internalValue = undefined;
      this._requestHeader.internalValue = undefined;
      this._requestMethod.internalValue = undefined;
      this._requestPath.internalValue = undefined;
      this._requestScheme.internalValue = undefined;
      this._requestUrl.internalValue = undefined;
      this._serverPort.internalValue = undefined;
      this._socketAddress.internalValue = undefined;
      this._sslProtocol.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientPort.internalValue = value.clientPort;
      this._deviceType.internalValue = value.deviceType;
      this._hostName.internalValue = value.hostName;
      this._httpVersion.internalValue = value.httpVersion;
      this._postArgument.internalValue = value.postArgument;
      this._queryString.internalValue = value.queryString;
      this._remoteAddress.internalValue = value.remoteAddress;
      this._requestBody.internalValue = value.requestBody;
      this._requestCookies.internalValue = value.requestCookies;
      this._requestFileExtension.internalValue = value.requestFileExtension;
      this._requestFilename.internalValue = value.requestFilename;
      this._requestHeader.internalValue = value.requestHeader;
      this._requestMethod.internalValue = value.requestMethod;
      this._requestPath.internalValue = value.requestPath;
      this._requestScheme.internalValue = value.requestScheme;
      this._requestUrl.internalValue = value.requestUrl;
      this._serverPort.internalValue = value.serverPort;
      this._socketAddress.internalValue = value.socketAddress;
      this._sslProtocol.internalValue = value.sslProtocol;
    }
  }

  // client_port - computed: false, optional: true, required: false
  private _clientPort = new CdnFrontdoorRuleConditionsClientPortList(this, "client_port", false);
  public get clientPort() {
    return this._clientPort;
  }
  public putClientPort(value: CdnFrontdoorRuleConditionsClientPort[] | cdktn.IResolvable) {
    this._clientPort.internalValue = value;
  }
  public resetClientPort() {
    this._clientPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPortInput() {
    return this._clientPort.internalValue;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType = new CdnFrontdoorRuleConditionsDeviceTypeList(this, "device_type", false);
  public get deviceType() {
    return this._deviceType;
  }
  public putDeviceType(value: CdnFrontdoorRuleConditionsDeviceType[] | cdktn.IResolvable) {
    this._deviceType.internalValue = value;
  }
  public resetDeviceType() {
    this._deviceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType.internalValue;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName = new CdnFrontdoorRuleConditionsHostNameList(this, "host_name", false);
  public get hostName() {
    return this._hostName;
  }
  public putHostName(value: CdnFrontdoorRuleConditionsHostName[] | cdktn.IResolvable) {
    this._hostName.internalValue = value;
  }
  public resetHostName() {
    this._hostName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName.internalValue;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion = new CdnFrontdoorRuleConditionsHttpVersionList(this, "http_version", false);
  public get httpVersion() {
    return this._httpVersion;
  }
  public putHttpVersion(value: CdnFrontdoorRuleConditionsHttpVersion[] | cdktn.IResolvable) {
    this._httpVersion.internalValue = value;
  }
  public resetHttpVersion() {
    this._httpVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion.internalValue;
  }

  // post_argument - computed: false, optional: true, required: false
  private _postArgument = new CdnFrontdoorRuleConditionsPostArgumentList(this, "post_argument", false);
  public get postArgument() {
    return this._postArgument;
  }
  public putPostArgument(value: CdnFrontdoorRuleConditionsPostArgument[] | cdktn.IResolvable) {
    this._postArgument.internalValue = value;
  }
  public resetPostArgument() {
    this._postArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postArgumentInput() {
    return this._postArgument.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new CdnFrontdoorRuleConditionsQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: CdnFrontdoorRuleConditionsQueryString[] | cdktn.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress = new CdnFrontdoorRuleConditionsRemoteAddressList(this, "remote_address", false);
  public get remoteAddress() {
    return this._remoteAddress;
  }
  public putRemoteAddress(value: CdnFrontdoorRuleConditionsRemoteAddress[] | cdktn.IResolvable) {
    this._remoteAddress.internalValue = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress.internalValue;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody = new CdnFrontdoorRuleConditionsRequestBodyList(this, "request_body", false);
  public get requestBody() {
    return this._requestBody;
  }
  public putRequestBody(value: CdnFrontdoorRuleConditionsRequestBody[] | cdktn.IResolvable) {
    this._requestBody.internalValue = value;
  }
  public resetRequestBody() {
    this._requestBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody.internalValue;
  }

  // request_cookies - computed: false, optional: true, required: false
  private _requestCookies = new CdnFrontdoorRuleConditionsRequestCookiesList(this, "request_cookies", false);
  public get requestCookies() {
    return this._requestCookies;
  }
  public putRequestCookies(value: CdnFrontdoorRuleConditionsRequestCookies[] | cdktn.IResolvable) {
    this._requestCookies.internalValue = value;
  }
  public resetRequestCookies() {
    this._requestCookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesInput() {
    return this._requestCookies.internalValue;
  }

  // request_file_extension - computed: false, optional: true, required: false
  private _requestFileExtension = new CdnFrontdoorRuleConditionsRequestFileExtensionList(this, "request_file_extension", false);
  public get requestFileExtension() {
    return this._requestFileExtension;
  }
  public putRequestFileExtension(value: CdnFrontdoorRuleConditionsRequestFileExtension[] | cdktn.IResolvable) {
    this._requestFileExtension.internalValue = value;
  }
  public resetRequestFileExtension() {
    this._requestFileExtension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFileExtensionInput() {
    return this._requestFileExtension.internalValue;
  }

  // request_filename - computed: false, optional: true, required: false
  private _requestFilename = new CdnFrontdoorRuleConditionsRequestFilenameList(this, "request_filename", false);
  public get requestFilename() {
    return this._requestFilename;
  }
  public putRequestFilename(value: CdnFrontdoorRuleConditionsRequestFilename[] | cdktn.IResolvable) {
    this._requestFilename.internalValue = value;
  }
  public resetRequestFilename() {
    this._requestFilename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFilenameInput() {
    return this._requestFilename.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new CdnFrontdoorRuleConditionsRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: CdnFrontdoorRuleConditionsRequestHeader[] | cdktn.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod = new CdnFrontdoorRuleConditionsRequestMethodList(this, "request_method", false);
  public get requestMethod() {
    return this._requestMethod;
  }
  public putRequestMethod(value: CdnFrontdoorRuleConditionsRequestMethod[] | cdktn.IResolvable) {
    this._requestMethod.internalValue = value;
  }
  public resetRequestMethod() {
    this._requestMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod.internalValue;
  }

  // request_path - computed: false, optional: true, required: false
  private _requestPath = new CdnFrontdoorRuleConditionsRequestPathList(this, "request_path", false);
  public get requestPath() {
    return this._requestPath;
  }
  public putRequestPath(value: CdnFrontdoorRuleConditionsRequestPath[] | cdktn.IResolvable) {
    this._requestPath.internalValue = value;
  }
  public resetRequestPath() {
    this._requestPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath.internalValue;
  }

  // request_scheme - computed: false, optional: true, required: false
  private _requestScheme = new CdnFrontdoorRuleConditionsRequestSchemeList(this, "request_scheme", false);
  public get requestScheme() {
    return this._requestScheme;
  }
  public putRequestScheme(value: CdnFrontdoorRuleConditionsRequestScheme[] | cdktn.IResolvable) {
    this._requestScheme.internalValue = value;
  }
  public resetRequestScheme() {
    this._requestScheme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSchemeInput() {
    return this._requestScheme.internalValue;
  }

  // request_url - computed: false, optional: true, required: false
  private _requestUrl = new CdnFrontdoorRuleConditionsRequestUrlList(this, "request_url", false);
  public get requestUrl() {
    return this._requestUrl;
  }
  public putRequestUrl(value: CdnFrontdoorRuleConditionsRequestUrl[] | cdktn.IResolvable) {
    this._requestUrl.internalValue = value;
  }
  public resetRequestUrl() {
    this._requestUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUrlInput() {
    return this._requestUrl.internalValue;
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort = new CdnFrontdoorRuleConditionsServerPortList(this, "server_port", false);
  public get serverPort() {
    return this._serverPort;
  }
  public putServerPort(value: CdnFrontdoorRuleConditionsServerPort[] | cdktn.IResolvable) {
    this._serverPort.internalValue = value;
  }
  public resetServerPort() {
    this._serverPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort.internalValue;
  }

  // socket_address - computed: false, optional: true, required: false
  private _socketAddress = new CdnFrontdoorRuleConditionsSocketAddressList(this, "socket_address", false);
  public get socketAddress() {
    return this._socketAddress;
  }
  public putSocketAddress(value: CdnFrontdoorRuleConditionsSocketAddress[] | cdktn.IResolvable) {
    this._socketAddress.internalValue = value;
  }
  public resetSocketAddress() {
    this._socketAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketAddressInput() {
    return this._socketAddress.internalValue;
  }

  // ssl_protocol - computed: false, optional: true, required: false
  private _sslProtocol = new CdnFrontdoorRuleConditionsSslProtocolList(this, "ssl_protocol", false);
  public get sslProtocol() {
    return this._sslProtocol;
  }
  public putSslProtocol(value: CdnFrontdoorRuleConditionsSslProtocol[] | cdktn.IResolvable) {
    this._sslProtocol.internalValue = value;
  }
  public resetSslProtocol() {
    this._sslProtocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol.internalValue;
  }
}
export interface CdnFrontdoorRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#create CdnFrontdoorRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#delete CdnFrontdoorRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#read CdnFrontdoorRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#update CdnFrontdoorRule#update}
  */
  readonly update?: string;
}

export function cdnFrontdoorRuleTimeoutsToTerraform(struct?: CdnFrontdoorRuleTimeouts | cdktn.IResolvable): any {
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


export function cdnFrontdoorRuleTimeoutsToHclTerraform(struct?: CdnFrontdoorRuleTimeouts | cdktn.IResolvable): any {
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

export class CdnFrontdoorRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFrontdoorRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule azurerm_cdn_frontdoor_rule}
*/
export class CdnFrontdoorRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CdnFrontdoorRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFrontdoorRule to import
  * @param importFromId The id of the existing CdnFrontdoorRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFrontdoorRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/cdn_frontdoor_rule azurerm_cdn_frontdoor_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFrontdoorRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFrontdoorRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_rule',
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
    this._behaviourOnMatch = config.behaviourOnMatch;
    this._cdnFrontdoorRuleSetId = config.cdnFrontdoorRuleSetId;
    this._id = config.id;
    this._name = config.name;
    this._order = config.order;
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // behaviour_on_match - computed: false, optional: true, required: false
  private _behaviourOnMatch?: string; 
  public get behaviourOnMatch() {
    return this.getStringAttribute('behaviour_on_match');
  }
  public set behaviourOnMatch(value: string) {
    this._behaviourOnMatch = value;
  }
  public resetBehaviourOnMatch() {
    this._behaviourOnMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviourOnMatchInput() {
    return this._behaviourOnMatch;
  }

  // cdn_frontdoor_rule_set_id - computed: false, optional: false, required: true
  private _cdnFrontdoorRuleSetId?: string; 
  public get cdnFrontdoorRuleSetId() {
    return this.getStringAttribute('cdn_frontdoor_rule_set_id');
  }
  public set cdnFrontdoorRuleSetId(value: string) {
    this._cdnFrontdoorRuleSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorRuleSetIdInput() {
    return this._cdnFrontdoorRuleSetId;
  }

  // cdn_frontdoor_rule_set_name - computed: true, optional: false, required: false
  public get cdnFrontdoorRuleSetName() {
    return this.getStringAttribute('cdn_frontdoor_rule_set_name');
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

  // actions - computed: false, optional: false, required: true
  private _actions = new CdnFrontdoorRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: CdnFrontdoorRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new CdnFrontdoorRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CdnFrontdoorRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFrontdoorRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFrontdoorRuleTimeouts) {
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
      behaviour_on_match: cdktn.stringToTerraform(this._behaviourOnMatch),
      cdn_frontdoor_rule_set_id: cdktn.stringToTerraform(this._cdnFrontdoorRuleSetId),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      order: cdktn.numberToTerraform(this._order),
      actions: cdnFrontdoorRuleActionsToTerraform(this._actions.internalValue),
      conditions: cdnFrontdoorRuleConditionsToTerraform(this._conditions.internalValue),
      timeouts: cdnFrontdoorRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      behaviour_on_match: {
        value: cdktn.stringToHclTerraform(this._behaviourOnMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_frontdoor_rule_set_id: {
        value: cdktn.stringToHclTerraform(this._cdnFrontdoorRuleSetId),
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
      order: {
        value: cdktn.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      actions: {
        value: cdnFrontdoorRuleActionsToHclTerraform(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorRuleActionsList",
      },
      conditions: {
        value: cdnFrontdoorRuleConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorRuleConditionsList",
      },
      timeouts: {
        value: cdnFrontdoorRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFrontdoorRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
