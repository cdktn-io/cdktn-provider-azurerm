/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAzurermCdnFrontdoorBatchRuleSetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set#id DataAzurermCdnFrontdoorBatchRuleSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set#name DataAzurermCdnFrontdoorBatchRuleSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set#profile_name DataAzurermCdnFrontdoorBatchRuleSet#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set#resource_group_name DataAzurermCdnFrontdoorBatchRuleSet#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set#timeouts DataAzurermCdnFrontdoorBatchRuleSet#timeouts}
  */
  readonly timeouts?: DataAzurermCdnFrontdoorBatchRuleSetTimeouts;
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeader {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeaderToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeaderToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }

  // header_value - computed: true, optional: false, required: false
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeaderList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeaderOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeader {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeaderToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeaderToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_name - computed: true, optional: false, required: false
  public get headerName() {
    return this.getStringAttribute('header_name');
  }

  // header_value - computed: true, optional: false, required: false
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeaderList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeaderOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCaching {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCachingToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCaching): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCachingToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCaching): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCachingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCaching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCaching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // behaviour - computed: true, optional: false, required: false
  public get behaviour() {
    return this.getStringAttribute('behaviour');
  }

  // compression_enabled - computed: true, optional: false, required: false
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // query_string_behaviour - computed: true, optional: false, required: false
  public get queryStringBehaviour() {
    return this.getStringAttribute('query_string_behaviour');
  }

  // query_string_parameters - computed: true, optional: false, required: false
  public get queryStringParameters() {
    return this.getListAttribute('query_string_parameters');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCachingList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCachingOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCachingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroup {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroupToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroupToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cdn_frontdoor_origin_group_id - computed: true, optional: false, required: false
  public get cdnFrontdoorOriginGroupId() {
    return this.getStringAttribute('cdn_frontdoor_origin_group_id');
  }

  // forwarding_protocol - computed: true, optional: false, required: false
  public get forwardingProtocol() {
    return this.getStringAttribute('forwarding_protocol');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroupList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroupOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverride {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverride): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // caching - computed: true, optional: false, required: false
  private _caching = new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideCachingList(this, "caching", false);
  public get caching() {
    return this._caching;
  }

  // origin_group - computed: true, optional: false, required: false
  private _originGroup = new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOriginGroupList(this, "origin_group", false);
  public get originGroup() {
    return this._originGroup;
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirect {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirectToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirectToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirect): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirectOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_fragment - computed: true, optional: false, required: false
  public get destinationFragment() {
    return this.getStringAttribute('destination_fragment');
  }

  // destination_host_name - computed: true, optional: false, required: false
  public get destinationHostName() {
    return this.getStringAttribute('destination_host_name');
  }

  // destination_path - computed: true, optional: false, required: false
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }

  // query_string - computed: true, optional: false, required: false
  public get queryString() {
    return this.getStringAttribute('query_string');
  }

  // redirect_protocol - computed: true, optional: false, required: false
  public get redirectProtocol() {
    return this.getStringAttribute('redirect_protocol');
  }

  // redirect_type - computed: true, optional: false, required: false
  public get redirectType() {
    return this.getStringAttribute('redirect_type');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirectList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirectOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewrite {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewriteToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewriteToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewrite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewriteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_path - computed: true, optional: false, required: false
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }

  // preserve_unmatched_path_enabled - computed: true, optional: false, required: false
  public get preserveUnmatchedPathEnabled() {
    return this.getBooleanAttribute('preserve_unmatched_path_enabled');
  }

  // source_pattern - computed: true, optional: false, required: false
  public get sourcePattern() {
    return this.getStringAttribute('source_pattern');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewriteList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewriteOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesActions {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesActionsToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesActions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // modify_request_header - computed: true, optional: false, required: false
  private _modifyRequestHeader = new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyRequestHeaderList(this, "modify_request_header", false);
  public get modifyRequestHeader() {
    return this._modifyRequestHeader;
  }

  // modify_response_header - computed: true, optional: false, required: false
  private _modifyResponseHeader = new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsModifyResponseHeaderList(this, "modify_response_header", false);
  public get modifyResponseHeader() {
    return this._modifyResponseHeader;
  }

  // route_configuration_override - computed: true, optional: false, required: false
  private _routeConfigurationOverride = new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsRouteConfigurationOverrideList(this, "route_configuration_override", false);
  public get routeConfigurationOverride() {
    return this._routeConfigurationOverride;
  }

  // url_redirect - computed: true, optional: false, required: false
  private _urlRedirect = new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRedirectList(this, "url_redirect", false);
  public get urlRedirect() {
    return this._urlRedirect;
  }

  // url_rewrite - computed: true, optional: false, required: false
  private _urlRewrite = new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsUrlRewriteList(this, "url_rewrite", false);
  public get urlRewrite() {
    return this._urlRewrite;
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesActionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesActionsOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPort {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPortToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPortToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPortList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPortOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceType {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceTypeToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceTypeToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceType): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceTypeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceTypeList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceTypeOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostName {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostNameToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostNameToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostNameList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostNameOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersion {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersionToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersionToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersionList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersionOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgument {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgumentToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgumentToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgument): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgumentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgumentList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgumentOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgumentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryString {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryStringToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryString): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryStringToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryString): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryStringOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryStringList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryStringOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddress {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddressToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddressToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddressList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddressOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBody {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBodyToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBody): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBodyToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBody): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBodyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBodyList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBodyOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookies {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookiesToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookiesToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookiesList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookiesOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtension {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtensionToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtensionToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtension): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtensionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtensionList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtensionOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilename {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilenameToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilename): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilenameToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilename): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilenameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilename | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilenameList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilenameOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilenameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeader {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeaderToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeaderToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeader): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeaderList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeaderOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethod {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethodToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethodToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethodOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethodList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethodOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPath {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPathToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPathToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPathList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPathOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestScheme {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestSchemeToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestScheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestSchemeToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestScheme): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestSchemeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestScheme | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestScheme | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestSchemeList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestSchemeOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestSchemeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrl {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrlToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrlToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrl): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // transforms - computed: true, optional: false, required: false
  public get transforms() {
    return cdktn.Fn.tolist(this.getListAttribute('transforms'));
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrlList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrlOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPort {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPortToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPortToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPortList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPortOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddress {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddressToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddressToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddressList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddressOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocol {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocolToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocol): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocolToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocol): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktn.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocolList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocolOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRulesConditions {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesConditionsToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRulesConditions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRulesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_port - computed: true, optional: false, required: false
  private _clientPort = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsClientPortList(this, "client_port", false);
  public get clientPort() {
    return this._clientPort;
  }

  // device_type - computed: true, optional: false, required: false
  private _deviceType = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsDeviceTypeList(this, "device_type", false);
  public get deviceType() {
    return this._deviceType;
  }

  // host_name - computed: true, optional: false, required: false
  private _hostName = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHostNameList(this, "host_name", false);
  public get hostName() {
    return this._hostName;
  }

  // http_version - computed: true, optional: false, required: false
  private _httpVersion = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsHttpVersionList(this, "http_version", false);
  public get httpVersion() {
    return this._httpVersion;
  }

  // post_argument - computed: true, optional: false, required: false
  private _postArgument = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsPostArgumentList(this, "post_argument", false);
  public get postArgument() {
    return this._postArgument;
  }

  // query_string - computed: true, optional: false, required: false
  private _queryString = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsQueryStringList(this, "query_string", false);
  public get queryString() {
    return this._queryString;
  }

  // remote_address - computed: true, optional: false, required: false
  private _remoteAddress = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRemoteAddressList(this, "remote_address", false);
  public get remoteAddress() {
    return this._remoteAddress;
  }

  // request_body - computed: true, optional: false, required: false
  private _requestBody = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestBodyList(this, "request_body", false);
  public get requestBody() {
    return this._requestBody;
  }

  // request_cookies - computed: true, optional: false, required: false
  private _requestCookies = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestCookiesList(this, "request_cookies", false);
  public get requestCookies() {
    return this._requestCookies;
  }

  // request_file_extension - computed: true, optional: false, required: false
  private _requestFileExtension = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFileExtensionList(this, "request_file_extension", false);
  public get requestFileExtension() {
    return this._requestFileExtension;
  }

  // request_filename - computed: true, optional: false, required: false
  private _requestFilename = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestFilenameList(this, "request_filename", false);
  public get requestFilename() {
    return this._requestFilename;
  }

  // request_header - computed: true, optional: false, required: false
  private _requestHeader = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestHeaderList(this, "request_header", false);
  public get requestHeader() {
    return this._requestHeader;
  }

  // request_method - computed: true, optional: false, required: false
  private _requestMethod = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestMethodList(this, "request_method", false);
  public get requestMethod() {
    return this._requestMethod;
  }

  // request_path - computed: true, optional: false, required: false
  private _requestPath = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestPathList(this, "request_path", false);
  public get requestPath() {
    return this._requestPath;
  }

  // request_scheme - computed: true, optional: false, required: false
  private _requestScheme = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestSchemeList(this, "request_scheme", false);
  public get requestScheme() {
    return this._requestScheme;
  }

  // request_url - computed: true, optional: false, required: false
  private _requestUrl = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsRequestUrlList(this, "request_url", false);
  public get requestUrl() {
    return this._requestUrl;
  }

  // server_port - computed: true, optional: false, required: false
  private _serverPort = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsServerPortList(this, "server_port", false);
  public get serverPort() {
    return this._serverPort;
  }

  // socket_address - computed: true, optional: false, required: false
  private _socketAddress = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSocketAddressList(this, "socket_address", false);
  public get socketAddress() {
    return this._socketAddress;
  }

  // ssl_protocol - computed: true, optional: false, required: false
  private _sslProtocol = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsSslProtocolList(this, "ssl_protocol", false);
  public get sslProtocol() {
    return this._sslProtocol;
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetRules {
}

export function dataAzurermCdnFrontdoorBatchRuleSetRulesToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetRulesToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAzurermCdnFrontdoorBatchRuleSetRulesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // behaviour_on_match - computed: true, optional: false, required: false
  public get behaviourOnMatch() {
    return this.getStringAttribute('behaviour_on_match');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataAzurermCdnFrontdoorBatchRuleSetRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }
}

export class DataAzurermCdnFrontdoorBatchRuleSetRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermCdnFrontdoorBatchRuleSetRulesOutputReference {
    return new DataAzurermCdnFrontdoorBatchRuleSetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermCdnFrontdoorBatchRuleSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set#read DataAzurermCdnFrontdoorBatchRuleSet#read}
  */
  readonly read?: string;
}

export function dataAzurermCdnFrontdoorBatchRuleSetTimeoutsToTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataAzurermCdnFrontdoorBatchRuleSetTimeoutsToHclTerraform(struct?: DataAzurermCdnFrontdoorBatchRuleSetTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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

export class DataAzurermCdnFrontdoorBatchRuleSetTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermCdnFrontdoorBatchRuleSetTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermCdnFrontdoorBatchRuleSetTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set azurerm_cdn_frontdoor_batch_rule_set}
*/
export class DataAzurermCdnFrontdoorBatchRuleSet extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_batch_rule_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAzurermCdnFrontdoorBatchRuleSet resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermCdnFrontdoorBatchRuleSet to import
  * @param importFromId The id of the existing DataAzurermCdnFrontdoorBatchRuleSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermCdnFrontdoorBatchRuleSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_batch_rule_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/data-sources/cdn_frontdoor_batch_rule_set azurerm_cdn_frontdoor_batch_rule_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermCdnFrontdoorBatchRuleSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermCdnFrontdoorBatchRuleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_batch_rule_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.0.1',
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
    this._name = config.name;
    this._profileName = config.profileName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_frontdoor_profile_id - computed: true, optional: false, required: false
  public get cdnFrontdoorProfileId() {
    return this.getStringAttribute('cdn_frontdoor_profile_id');
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

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
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

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAzurermCdnFrontdoorBatchRuleSetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermCdnFrontdoorBatchRuleSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermCdnFrontdoorBatchRuleSetTimeouts) {
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
      name: cdktn.stringToTerraform(this._name),
      profile_name: cdktn.stringToTerraform(this._profileName),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermCdnFrontdoorBatchRuleSetTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktn.stringToHclTerraform(this._profileName),
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
      timeouts: {
        value: dataAzurermCdnFrontdoorBatchRuleSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermCdnFrontdoorBatchRuleSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
