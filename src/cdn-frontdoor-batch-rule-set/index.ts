/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CdnFrontdoorBatchRuleSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#cdn_frontdoor_profile_id CdnFrontdoorBatchRuleSet#cdn_frontdoor_profile_id}
  */
  readonly cdnFrontdoorProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}
  */
  readonly name: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#rule CdnFrontdoorBatchRuleSet#rule}
  */
  readonly rule: CdnFrontdoorBatchRuleSetRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#timeouts CdnFrontdoorBatchRuleSet#timeouts}
  */
  readonly timeouts?: CdnFrontdoorBatchRuleSetTimeouts;
}
export interface CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_name CdnFrontdoorBatchRuleSet#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_value CdnFrontdoorBatchRuleSet#header_value}
  */
  readonly headerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
}

export function cdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_name CdnFrontdoorBatchRuleSet#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#header_value CdnFrontdoorBatchRuleSet#header_value}
  */
  readonly headerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
}

export function cdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#behaviour CdnFrontdoorBatchRuleSet#behaviour}
  */
  readonly behaviour: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#compression_enabled CdnFrontdoorBatchRuleSet#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#duration CdnFrontdoorBatchRuleSet#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string_behaviour CdnFrontdoorBatchRuleSet#query_string_behaviour}
  */
  readonly queryStringBehaviour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string_parameters CdnFrontdoorBatchRuleSet#query_string_parameters}
  */
  readonly queryStringParameters?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference | CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching): any {
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


export function cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference | CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching): any {
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

export class CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching | undefined) {
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
export interface CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#cdn_frontdoor_origin_group_id CdnFrontdoorBatchRuleSet#cdn_frontdoor_origin_group_id}
  */
  readonly cdnFrontdoorOriginGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#forwarding_protocol CdnFrontdoorBatchRuleSet#forwarding_protocol}
  */
  readonly forwardingProtocol: string;
}

export function cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference | CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cdn_frontdoor_origin_group_id: cdktn.stringToTerraform(struct!.cdnFrontdoorOriginGroupId),
    forwarding_protocol: cdktn.stringToTerraform(struct!.forwardingProtocol),
  }
}


export function cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference | CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup): any {
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

export class CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup | undefined) {
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
export interface CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride {
  /**
  * caching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#caching CdnFrontdoorBatchRuleSet#caching}
  */
  readonly caching: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching;
  /**
  * origin_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#origin_group CdnFrontdoorBatchRuleSet#origin_group}
  */
  readonly originGroup?: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup;
}

export function cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference | CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    caching: cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingToTerraform(struct!.caching),
    origin_group: cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupToTerraform(struct!.originGroup),
  }
}


export function cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference | CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    caching: {
      value: cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingToHclTerraform(struct!.caching),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingList",
    },
    origin_group: {
      value: cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupToHclTerraform(struct!.originGroup),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride | undefined) {
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
  private _caching = new CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCachingOutputReference(this, "caching");
  public get caching() {
    return this._caching;
  }
  public putCaching(value: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideCaching) {
    this._caching.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching.internalValue;
  }

  // origin_group - computed: false, optional: true, required: false
  private _originGroup = new CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroupOutputReference(this, "origin_group");
  public get originGroup() {
    return this._originGroup;
  }
  public putOriginGroup(value: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOriginGroup) {
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
export interface CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_fragment CdnFrontdoorBatchRuleSet#destination_fragment}
  */
  readonly destinationFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_host_name CdnFrontdoorBatchRuleSet#destination_host_name}
  */
  readonly destinationHostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_path CdnFrontdoorBatchRuleSet#destination_path}
  */
  readonly destinationPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string CdnFrontdoorBatchRuleSet#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#redirect_protocol CdnFrontdoorBatchRuleSet#redirect_protocol}
  */
  readonly redirectProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#redirect_type CdnFrontdoorBatchRuleSet#redirect_type}
  */
  readonly redirectType: string;
}

export function cdnFrontdoorBatchRuleSetRuleActionsUrlRedirectToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference | CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect): any {
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


export function cdnFrontdoorBatchRuleSetRuleActionsUrlRedirectToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference | CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect): any {
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

export class CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect | undefined) {
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
export interface CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#destination_path CdnFrontdoorBatchRuleSet#destination_path}
  */
  readonly destinationPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#preserve_unmatched_path_enabled CdnFrontdoorBatchRuleSet#preserve_unmatched_path_enabled}
  */
  readonly preserveUnmatchedPathEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#source_pattern CdnFrontdoorBatchRuleSet#source_pattern}
  */
  readonly sourcePattern: string;
}

export function cdnFrontdoorBatchRuleSetRuleActionsUrlRewriteToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference | CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite): any {
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


export function cdnFrontdoorBatchRuleSetRuleActionsUrlRewriteToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference | CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite): any {
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

export class CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite | undefined) {
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
export interface CdnFrontdoorBatchRuleSetRuleActions {
  /**
  * modify_request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#modify_request_header CdnFrontdoorBatchRuleSet#modify_request_header}
  */
  readonly modifyRequestHeader?: CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader[] | cdktn.IResolvable;
  /**
  * modify_response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#modify_response_header CdnFrontdoorBatchRuleSet#modify_response_header}
  */
  readonly modifyResponseHeader?: CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader[] | cdktn.IResolvable;
  /**
  * route_configuration_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#route_configuration_override CdnFrontdoorBatchRuleSet#route_configuration_override}
  */
  readonly routeConfigurationOverride?: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride;
  /**
  * url_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#url_redirect CdnFrontdoorBatchRuleSet#url_redirect}
  */
  readonly urlRedirect?: CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect;
  /**
  * url_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#url_rewrite CdnFrontdoorBatchRuleSet#url_rewrite}
  */
  readonly urlRewrite?: CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite;
}

export function cdnFrontdoorBatchRuleSetRuleActionsToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsOutputReference | CdnFrontdoorBatchRuleSetRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modify_request_header: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderToTerraform, true)(struct!.modifyRequestHeader),
    modify_response_header: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderToTerraform, true)(struct!.modifyResponseHeader),
    route_configuration_override: cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideToTerraform(struct!.routeConfigurationOverride),
    url_redirect: cdnFrontdoorBatchRuleSetRuleActionsUrlRedirectToTerraform(struct!.urlRedirect),
    url_rewrite: cdnFrontdoorBatchRuleSetRuleActionsUrlRewriteToTerraform(struct!.urlRewrite),
  }
}


export function cdnFrontdoorBatchRuleSetRuleActionsToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleActionsOutputReference | CdnFrontdoorBatchRuleSetRuleActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modify_request_header: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderToHclTerraform, true)(struct!.modifyRequestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList",
    },
    modify_response_header: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderToHclTerraform, true)(struct!.modifyResponseHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList",
    },
    route_configuration_override: {
      value: cdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideToHclTerraform(struct!.routeConfigurationOverride),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideList",
    },
    url_redirect: {
      value: cdnFrontdoorBatchRuleSetRuleActionsUrlRedirectToHclTerraform(struct!.urlRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectList",
    },
    url_rewrite: {
      value: cdnFrontdoorBatchRuleSetRuleActionsUrlRewriteToHclTerraform(struct!.urlRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorBatchRuleSetRuleActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleActions | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleActions | undefined) {
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
  private _modifyRequestHeader = new CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeaderList(this, "modify_request_header", false);
  public get modifyRequestHeader() {
    return this._modifyRequestHeader;
  }
  public putModifyRequestHeader(value: CdnFrontdoorBatchRuleSetRuleActionsModifyRequestHeader[] | cdktn.IResolvable) {
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
  private _modifyResponseHeader = new CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeaderList(this, "modify_response_header", false);
  public get modifyResponseHeader() {
    return this._modifyResponseHeader;
  }
  public putModifyResponseHeader(value: CdnFrontdoorBatchRuleSetRuleActionsModifyResponseHeader[] | cdktn.IResolvable) {
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
  private _routeConfigurationOverride = new CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverrideOutputReference(this, "route_configuration_override");
  public get routeConfigurationOverride() {
    return this._routeConfigurationOverride;
  }
  public putRouteConfigurationOverride(value: CdnFrontdoorBatchRuleSetRuleActionsRouteConfigurationOverride) {
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
  private _urlRedirect = new CdnFrontdoorBatchRuleSetRuleActionsUrlRedirectOutputReference(this, "url_redirect");
  public get urlRedirect() {
    return this._urlRedirect;
  }
  public putUrlRedirect(value: CdnFrontdoorBatchRuleSetRuleActionsUrlRedirect) {
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
  private _urlRewrite = new CdnFrontdoorBatchRuleSetRuleActionsUrlRewriteOutputReference(this, "url_rewrite");
  public get urlRewrite() {
    return this._urlRewrite;
  }
  public putUrlRewrite(value: CdnFrontdoorBatchRuleSetRuleActionsUrlRewrite) {
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
export interface CdnFrontdoorBatchRuleSetRuleConditionsClientPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsClientPortToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsClientPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsClientPortToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsClientPort | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsClientPort | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsClientPort | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsClientPortList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsClientPort[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsClientPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsDeviceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsDeviceType | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsDeviceType | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsDeviceType | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsDeviceType | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsDeviceType[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsHostName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsHostNameToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsHostName | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsHostNameToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsHostName | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsHostName | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsHostName | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsHostNameList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsHostName[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsHostNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsHttpVersionToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsHttpVersionToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsPostArgument {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsPostArgumentToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsPostArgument | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsPostArgumentToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsPostArgument | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsPostArgument | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsPostArgument | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsPostArgument[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsQueryString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsQueryStringToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsQueryString | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsQueryStringToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsQueryString | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsQueryString | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsQueryString | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsQueryString[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestBody {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestBodyToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestBody | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestBodyToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestBody | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestBody | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestBody | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestBody[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestMethodToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestMethodToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestPathToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestPath | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestPathToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestPath | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestPath | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestPath | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestPath[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#transforms CdnFrontdoorBatchRuleSet#transforms}
  */
  readonly transforms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsRequestUrlToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetRuleConditionsRequestUrlToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsServerPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values?: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsServerPortToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsServerPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsServerPortToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsServerPort | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsServerPort | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsServerPort | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsServerPortList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsServerPort[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsServerPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsSocketAddressToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsSocketAddressToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#operator CdnFrontdoorBatchRuleSet#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#values CdnFrontdoorBatchRuleSet#values}
  */
  readonly values: string[];
}

export function cdnFrontdoorBatchRuleSetRuleConditionsSslProtocolToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsSslProtocolToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol | cdktn.IResolvable | undefined) {
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

export class CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetRuleConditions {
  /**
  * client_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#client_port CdnFrontdoorBatchRuleSet#client_port}
  */
  readonly clientPort?: CdnFrontdoorBatchRuleSetRuleConditionsClientPort[] | cdktn.IResolvable;
  /**
  * device_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#device_type CdnFrontdoorBatchRuleSet#device_type}
  */
  readonly deviceType?: CdnFrontdoorBatchRuleSetRuleConditionsDeviceType[] | cdktn.IResolvable;
  /**
  * host_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#host_name CdnFrontdoorBatchRuleSet#host_name}
  */
  readonly hostName?: CdnFrontdoorBatchRuleSetRuleConditionsHostName[] | cdktn.IResolvable;
  /**
  * http_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#http_version CdnFrontdoorBatchRuleSet#http_version}
  */
  readonly httpVersion?: CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion[] | cdktn.IResolvable;
  /**
  * post_argument block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#post_argument CdnFrontdoorBatchRuleSet#post_argument}
  */
  readonly postArgument?: CdnFrontdoorBatchRuleSetRuleConditionsPostArgument[] | cdktn.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#query_string CdnFrontdoorBatchRuleSet#query_string}
  */
  readonly queryString?: CdnFrontdoorBatchRuleSetRuleConditionsQueryString[] | cdktn.IResolvable;
  /**
  * remote_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#remote_address CdnFrontdoorBatchRuleSet#remote_address}
  */
  readonly remoteAddress?: CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress[] | cdktn.IResolvable;
  /**
  * request_body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_body CdnFrontdoorBatchRuleSet#request_body}
  */
  readonly requestBody?: CdnFrontdoorBatchRuleSetRuleConditionsRequestBody[] | cdktn.IResolvable;
  /**
  * request_cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_cookies CdnFrontdoorBatchRuleSet#request_cookies}
  */
  readonly requestCookies?: CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies[] | cdktn.IResolvable;
  /**
  * request_file_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_file_extension CdnFrontdoorBatchRuleSet#request_file_extension}
  */
  readonly requestFileExtension?: CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension[] | cdktn.IResolvable;
  /**
  * request_filename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_filename CdnFrontdoorBatchRuleSet#request_filename}
  */
  readonly requestFilename?: CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename[] | cdktn.IResolvable;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_header CdnFrontdoorBatchRuleSet#request_header}
  */
  readonly requestHeader?: CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader[] | cdktn.IResolvable;
  /**
  * request_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_method CdnFrontdoorBatchRuleSet#request_method}
  */
  readonly requestMethod?: CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod[] | cdktn.IResolvable;
  /**
  * request_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_path CdnFrontdoorBatchRuleSet#request_path}
  */
  readonly requestPath?: CdnFrontdoorBatchRuleSetRuleConditionsRequestPath[] | cdktn.IResolvable;
  /**
  * request_scheme block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_scheme CdnFrontdoorBatchRuleSet#request_scheme}
  */
  readonly requestScheme?: CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme[] | cdktn.IResolvable;
  /**
  * request_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#request_url CdnFrontdoorBatchRuleSet#request_url}
  */
  readonly requestUrl?: CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl[] | cdktn.IResolvable;
  /**
  * server_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#server_port CdnFrontdoorBatchRuleSet#server_port}
  */
  readonly serverPort?: CdnFrontdoorBatchRuleSetRuleConditionsServerPort[] | cdktn.IResolvable;
  /**
  * socket_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#socket_address CdnFrontdoorBatchRuleSet#socket_address}
  */
  readonly socketAddress?: CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress[] | cdktn.IResolvable;
  /**
  * ssl_protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#ssl_protocol CdnFrontdoorBatchRuleSet#ssl_protocol}
  */
  readonly sslProtocol?: CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol[] | cdktn.IResolvable;
}

export function cdnFrontdoorBatchRuleSetRuleConditionsToTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsOutputReference | CdnFrontdoorBatchRuleSetRuleConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_port: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsClientPortToTerraform, true)(struct!.clientPort),
    device_type: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeToTerraform, true)(struct!.deviceType),
    host_name: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsHostNameToTerraform, true)(struct!.hostName),
    http_version: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsHttpVersionToTerraform, true)(struct!.httpVersion),
    post_argument: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsPostArgumentToTerraform, true)(struct!.postArgument),
    query_string: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsQueryStringToTerraform, true)(struct!.queryString),
    remote_address: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressToTerraform, true)(struct!.remoteAddress),
    request_body: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestBodyToTerraform, true)(struct!.requestBody),
    request_cookies: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesToTerraform, true)(struct!.requestCookies),
    request_file_extension: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionToTerraform, true)(struct!.requestFileExtension),
    request_filename: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameToTerraform, true)(struct!.requestFilename),
    request_header: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderToTerraform, true)(struct!.requestHeader),
    request_method: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestMethodToTerraform, true)(struct!.requestMethod),
    request_path: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestPathToTerraform, true)(struct!.requestPath),
    request_scheme: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeToTerraform, true)(struct!.requestScheme),
    request_url: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsRequestUrlToTerraform, true)(struct!.requestUrl),
    server_port: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsServerPortToTerraform, true)(struct!.serverPort),
    socket_address: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsSocketAddressToTerraform, true)(struct!.socketAddress),
    ssl_protocol: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleConditionsSslProtocolToTerraform, true)(struct!.sslProtocol),
  }
}


export function cdnFrontdoorBatchRuleSetRuleConditionsToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRuleConditionsOutputReference | CdnFrontdoorBatchRuleSetRuleConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_port: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsClientPortToHclTerraform, true)(struct!.clientPort),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsClientPortList",
    },
    device_type: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeToHclTerraform, true)(struct!.deviceType),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList",
    },
    host_name: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsHostNameToHclTerraform, true)(struct!.hostName),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsHostNameList",
    },
    http_version: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsHttpVersionToHclTerraform, true)(struct!.httpVersion),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList",
    },
    post_argument: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsPostArgumentToHclTerraform, true)(struct!.postArgument),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList",
    },
    query_string: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList",
    },
    remote_address: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressToHclTerraform, true)(struct!.remoteAddress),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList",
    },
    request_body: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestBodyToHclTerraform, true)(struct!.requestBody),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList",
    },
    request_cookies: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesToHclTerraform, true)(struct!.requestCookies),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList",
    },
    request_file_extension: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionToHclTerraform, true)(struct!.requestFileExtension),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList",
    },
    request_filename: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameToHclTerraform, true)(struct!.requestFilename),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList",
    },
    request_header: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderToHclTerraform, true)(struct!.requestHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList",
    },
    request_method: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestMethodToHclTerraform, true)(struct!.requestMethod),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList",
    },
    request_path: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestPathToHclTerraform, true)(struct!.requestPath),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList",
    },
    request_scheme: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeToHclTerraform, true)(struct!.requestScheme),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList",
    },
    request_url: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsRequestUrlToHclTerraform, true)(struct!.requestUrl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList",
    },
    server_port: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsServerPortToHclTerraform, true)(struct!.serverPort),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsServerPortList",
    },
    socket_address: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsSocketAddressToHclTerraform, true)(struct!.socketAddress),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList",
    },
    ssl_protocol: {
      value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleConditionsSslProtocolToHclTerraform, true)(struct!.sslProtocol),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorBatchRuleSetRuleConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorBatchRuleSetRuleConditions | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetRuleConditions | undefined) {
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
  private _clientPort = new CdnFrontdoorBatchRuleSetRuleConditionsClientPortList(this, "client_port", false);
  public get clientPort() {
    return this._clientPort;
  }
  public putClientPort(value: CdnFrontdoorBatchRuleSetRuleConditionsClientPort[] | cdktn.IResolvable) {
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
  private _deviceType = new CdnFrontdoorBatchRuleSetRuleConditionsDeviceTypeList(this, "device_type", false);
  public get deviceType() {
    return this._deviceType;
  }
  public putDeviceType(value: CdnFrontdoorBatchRuleSetRuleConditionsDeviceType[] | cdktn.IResolvable) {
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
  private _hostName = new CdnFrontdoorBatchRuleSetRuleConditionsHostNameList(this, "host_name", false);
  public get hostName() {
    return this._hostName;
  }
  public putHostName(value: CdnFrontdoorBatchRuleSetRuleConditionsHostName[] | cdktn.IResolvable) {
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
  private _httpVersion = new CdnFrontdoorBatchRuleSetRuleConditionsHttpVersionList(this, "http_version", false);
  public get httpVersion() {
    return this._httpVersion;
  }
  public putHttpVersion(value: CdnFrontdoorBatchRuleSetRuleConditionsHttpVersion[] | cdktn.IResolvable) {
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
  private _postArgument = new CdnFrontdoorBatchRuleSetRuleConditionsPostArgumentList(this, "post_argument", false);
  public get postArgument() {
    return this._postArgument;
  }
  public putPostArgument(value: CdnFrontdoorBatchRuleSetRuleConditionsPostArgument[] | cdktn.IResolvable) {
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
  private _queryString = new CdnFrontdoorBatchRuleSetRuleConditionsQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: CdnFrontdoorBatchRuleSetRuleConditionsQueryString[] | cdktn.IResolvable) {
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
  private _remoteAddress = new CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddressList(this, "remote_address", false);
  public get remoteAddress() {
    return this._remoteAddress;
  }
  public putRemoteAddress(value: CdnFrontdoorBatchRuleSetRuleConditionsRemoteAddress[] | cdktn.IResolvable) {
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
  private _requestBody = new CdnFrontdoorBatchRuleSetRuleConditionsRequestBodyList(this, "request_body", false);
  public get requestBody() {
    return this._requestBody;
  }
  public putRequestBody(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestBody[] | cdktn.IResolvable) {
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
  private _requestCookies = new CdnFrontdoorBatchRuleSetRuleConditionsRequestCookiesList(this, "request_cookies", false);
  public get requestCookies() {
    return this._requestCookies;
  }
  public putRequestCookies(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestCookies[] | cdktn.IResolvable) {
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
  private _requestFileExtension = new CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtensionList(this, "request_file_extension", false);
  public get requestFileExtension() {
    return this._requestFileExtension;
  }
  public putRequestFileExtension(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestFileExtension[] | cdktn.IResolvable) {
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
  private _requestFilename = new CdnFrontdoorBatchRuleSetRuleConditionsRequestFilenameList(this, "request_filename", false);
  public get requestFilename() {
    return this._requestFilename;
  }
  public putRequestFilename(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestFilename[] | cdktn.IResolvable) {
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
  private _requestHeader = new CdnFrontdoorBatchRuleSetRuleConditionsRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestHeader[] | cdktn.IResolvable) {
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
  private _requestMethod = new CdnFrontdoorBatchRuleSetRuleConditionsRequestMethodList(this, "request_method", false);
  public get requestMethod() {
    return this._requestMethod;
  }
  public putRequestMethod(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestMethod[] | cdktn.IResolvable) {
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
  private _requestPath = new CdnFrontdoorBatchRuleSetRuleConditionsRequestPathList(this, "request_path", false);
  public get requestPath() {
    return this._requestPath;
  }
  public putRequestPath(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestPath[] | cdktn.IResolvable) {
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
  private _requestScheme = new CdnFrontdoorBatchRuleSetRuleConditionsRequestSchemeList(this, "request_scheme", false);
  public get requestScheme() {
    return this._requestScheme;
  }
  public putRequestScheme(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestScheme[] | cdktn.IResolvable) {
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
  private _requestUrl = new CdnFrontdoorBatchRuleSetRuleConditionsRequestUrlList(this, "request_url", false);
  public get requestUrl() {
    return this._requestUrl;
  }
  public putRequestUrl(value: CdnFrontdoorBatchRuleSetRuleConditionsRequestUrl[] | cdktn.IResolvable) {
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
  private _serverPort = new CdnFrontdoorBatchRuleSetRuleConditionsServerPortList(this, "server_port", false);
  public get serverPort() {
    return this._serverPort;
  }
  public putServerPort(value: CdnFrontdoorBatchRuleSetRuleConditionsServerPort[] | cdktn.IResolvable) {
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
  private _socketAddress = new CdnFrontdoorBatchRuleSetRuleConditionsSocketAddressList(this, "socket_address", false);
  public get socketAddress() {
    return this._socketAddress;
  }
  public putSocketAddress(value: CdnFrontdoorBatchRuleSetRuleConditionsSocketAddress[] | cdktn.IResolvable) {
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
  private _sslProtocol = new CdnFrontdoorBatchRuleSetRuleConditionsSslProtocolList(this, "ssl_protocol", false);
  public get sslProtocol() {
    return this._sslProtocol;
  }
  public putSslProtocol(value: CdnFrontdoorBatchRuleSetRuleConditionsSslProtocol[] | cdktn.IResolvable) {
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
export interface CdnFrontdoorBatchRuleSetRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#behaviour_on_match CdnFrontdoorBatchRuleSet#behaviour_on_match}
  */
  readonly behaviourOnMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#name CdnFrontdoorBatchRuleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#order CdnFrontdoorBatchRuleSet#order}
  */
  readonly order: number;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#actions CdnFrontdoorBatchRuleSet#actions}
  */
  readonly actions: CdnFrontdoorBatchRuleSetRuleActions;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#conditions CdnFrontdoorBatchRuleSet#conditions}
  */
  readonly conditions?: CdnFrontdoorBatchRuleSetRuleConditions;
}

export function cdnFrontdoorBatchRuleSetRuleToTerraform(struct?: CdnFrontdoorBatchRuleSetRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    behaviour_on_match: cdktn.stringToTerraform(struct!.behaviourOnMatch),
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.numberToTerraform(struct!.order),
    actions: cdnFrontdoorBatchRuleSetRuleActionsToTerraform(struct!.actions),
    conditions: cdnFrontdoorBatchRuleSetRuleConditionsToTerraform(struct!.conditions),
  }
}


export function cdnFrontdoorBatchRuleSetRuleToHclTerraform(struct?: CdnFrontdoorBatchRuleSetRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    behaviour_on_match: {
      value: cdktn.stringToHclTerraform(struct!.behaviourOnMatch),
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
    order: {
      value: cdktn.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    actions: {
      value: cdnFrontdoorBatchRuleSetRuleActionsToHclTerraform(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleActionsList",
    },
    conditions: {
      value: cdnFrontdoorBatchRuleSetRuleConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorBatchRuleSetRuleConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorBatchRuleSetRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorBatchRuleSetRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behaviourOnMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.behaviourOnMatch = this._behaviourOnMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorBatchRuleSetRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behaviourOnMatch = undefined;
      this._name = undefined;
      this._order = undefined;
      this._actions.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behaviourOnMatch = value.behaviourOnMatch;
      this._name = value.name;
      this._order = value.order;
      this._actions.internalValue = value.actions;
      this._conditions.internalValue = value.conditions;
    }
  }

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
  private _actions = new CdnFrontdoorBatchRuleSetRuleActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }
  public putActions(value: CdnFrontdoorBatchRuleSetRuleActions) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new CdnFrontdoorBatchRuleSetRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CdnFrontdoorBatchRuleSetRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class CdnFrontdoorBatchRuleSetRuleList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorBatchRuleSetRule[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorBatchRuleSetRuleOutputReference {
    return new CdnFrontdoorBatchRuleSetRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorBatchRuleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#create CdnFrontdoorBatchRuleSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#delete CdnFrontdoorBatchRuleSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#read CdnFrontdoorBatchRuleSet#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#update CdnFrontdoorBatchRuleSet#update}
  */
  readonly update?: string;
}

export function cdnFrontdoorBatchRuleSetTimeoutsToTerraform(struct?: CdnFrontdoorBatchRuleSetTimeouts | cdktn.IResolvable): any {
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


export function cdnFrontdoorBatchRuleSetTimeoutsToHclTerraform(struct?: CdnFrontdoorBatchRuleSetTimeouts | cdktn.IResolvable): any {
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

export class CdnFrontdoorBatchRuleSetTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFrontdoorBatchRuleSetTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorBatchRuleSetTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set azurerm_cdn_frontdoor_batch_rule_set}
*/
export class CdnFrontdoorBatchRuleSet extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_batch_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CdnFrontdoorBatchRuleSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFrontdoorBatchRuleSet to import
  * @param importFromId The id of the existing CdnFrontdoorBatchRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFrontdoorBatchRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_batch_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/cdn_frontdoor_batch_rule_set azurerm_cdn_frontdoor_batch_rule_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFrontdoorBatchRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFrontdoorBatchRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_batch_rule_set',
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
    this._cdnFrontdoorProfileId = config.cdnFrontdoorProfileId;
    this._name = config.name;
    this._rule.internalValue = config.rule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_frontdoor_profile_id - computed: false, optional: false, required: true
  private _cdnFrontdoorProfileId?: string; 
  public get cdnFrontdoorProfileId() {
    return this.getStringAttribute('cdn_frontdoor_profile_id');
  }
  public set cdnFrontdoorProfileId(value: string) {
    this._cdnFrontdoorProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorProfileIdInput() {
    return this._cdnFrontdoorProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rule - computed: false, optional: false, required: true
  private _rule = new CdnFrontdoorBatchRuleSetRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CdnFrontdoorBatchRuleSetRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFrontdoorBatchRuleSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFrontdoorBatchRuleSetTimeouts) {
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
      cdn_frontdoor_profile_id: cdktn.stringToTerraform(this._cdnFrontdoorProfileId),
      name: cdktn.stringToTerraform(this._name),
      rule: cdktn.listMapper(cdnFrontdoorBatchRuleSetRuleToTerraform, true)(this._rule.internalValue),
      timeouts: cdnFrontdoorBatchRuleSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdn_frontdoor_profile_id: {
        value: cdktn.stringToHclTerraform(this._cdnFrontdoorProfileId),
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
      rule: {
        value: cdktn.listMapperHcl(cdnFrontdoorBatchRuleSetRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorBatchRuleSetRuleList",
      },
      timeouts: {
        value: cdnFrontdoorBatchRuleSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFrontdoorBatchRuleSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
