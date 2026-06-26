/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ResourceGroupPolicyAssignmentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#description ResourceGroupPolicyAssignment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#display_name ResourceGroupPolicyAssignment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#enforce ResourceGroupPolicyAssignment#enforce}
  */
  readonly enforce?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#id ResourceGroupPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#location ResourceGroupPolicyAssignment#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#metadata ResourceGroupPolicyAssignment#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#not_scopes ResourceGroupPolicyAssignment#not_scopes}
  */
  readonly notScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#parameters ResourceGroupPolicyAssignment#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#policy_definition_id ResourceGroupPolicyAssignment#policy_definition_id}
  */
  readonly policyDefinitionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#resource_group_id ResourceGroupPolicyAssignment#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#identity ResourceGroupPolicyAssignment#identity}
  */
  readonly identity?: ResourceGroupPolicyAssignmentIdentity;
  /**
  * non_compliance_message block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#non_compliance_message ResourceGroupPolicyAssignment#non_compliance_message}
  */
  readonly nonComplianceMessage?: ResourceGroupPolicyAssignmentNonComplianceMessage[] | cdktn.IResolvable;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#overrides ResourceGroupPolicyAssignment#overrides}
  */
  readonly overrides?: ResourceGroupPolicyAssignmentOverrides[] | cdktn.IResolvable;
  /**
  * resource_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#resource_selectors ResourceGroupPolicyAssignment#resource_selectors}
  */
  readonly resourceSelectors?: ResourceGroupPolicyAssignmentResourceSelectors[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#timeouts ResourceGroupPolicyAssignment#timeouts}
  */
  readonly timeouts?: ResourceGroupPolicyAssignmentTimeouts;
}
export interface ResourceGroupPolicyAssignmentIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#identity_ids ResourceGroupPolicyAssignment#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#type ResourceGroupPolicyAssignment#type}
  */
  readonly type: string;
}

export function resourceGroupPolicyAssignmentIdentityToTerraform(struct?: ResourceGroupPolicyAssignmentIdentityOutputReference | ResourceGroupPolicyAssignmentIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function resourceGroupPolicyAssignmentIdentityToHclTerraform(struct?: ResourceGroupPolicyAssignmentIdentityOutputReference | ResourceGroupPolicyAssignmentIdentity): any {
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

export class ResourceGroupPolicyAssignmentIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceGroupPolicyAssignmentIdentity | undefined {
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

  public set internalValue(value: ResourceGroupPolicyAssignmentIdentity | undefined) {
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
export interface ResourceGroupPolicyAssignmentNonComplianceMessage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#content ResourceGroupPolicyAssignment#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#policy_definition_reference_id ResourceGroupPolicyAssignment#policy_definition_reference_id}
  */
  readonly policyDefinitionReferenceId?: string;
}

export function resourceGroupPolicyAssignmentNonComplianceMessageToTerraform(struct?: ResourceGroupPolicyAssignmentNonComplianceMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    policy_definition_reference_id: cdktn.stringToTerraform(struct!.policyDefinitionReferenceId),
  }
}


export function resourceGroupPolicyAssignmentNonComplianceMessageToHclTerraform(struct?: ResourceGroupPolicyAssignmentNonComplianceMessage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_definition_reference_id: {
      value: cdktn.stringToHclTerraform(struct!.policyDefinitionReferenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceGroupPolicyAssignmentNonComplianceMessage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._policyDefinitionReferenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDefinitionReferenceId = this._policyDefinitionReferenceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupPolicyAssignmentNonComplianceMessage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._policyDefinitionReferenceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._policyDefinitionReferenceId = value.policyDefinitionReferenceId;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // policy_definition_reference_id - computed: false, optional: true, required: false
  private _policyDefinitionReferenceId?: string; 
  public get policyDefinitionReferenceId() {
    return this.getStringAttribute('policy_definition_reference_id');
  }
  public set policyDefinitionReferenceId(value: string) {
    this._policyDefinitionReferenceId = value;
  }
  public resetPolicyDefinitionReferenceId() {
    this._policyDefinitionReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionReferenceIdInput() {
    return this._policyDefinitionReferenceId;
  }
}

export class ResourceGroupPolicyAssignmentNonComplianceMessageList extends cdktn.ComplexList {
  public internalValue? : ResourceGroupPolicyAssignmentNonComplianceMessage[] | cdktn.IResolvable

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
  public get(index: number): ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference {
    return new ResourceGroupPolicyAssignmentNonComplianceMessageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupPolicyAssignmentOverridesSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#in ResourceGroupPolicyAssignment#in}
  */
  readonly in?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#kind ResourceGroupPolicyAssignment#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#not_in ResourceGroupPolicyAssignment#not_in}
  */
  readonly notIn?: string[];
}

export function resourceGroupPolicyAssignmentOverridesSelectorsToTerraform(struct?: ResourceGroupPolicyAssignmentOverridesSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    in: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.in),
    kind: cdktn.stringToTerraform(struct!.kind),
    not_in: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notIn),
  }
}


export function resourceGroupPolicyAssignmentOverridesSelectorsToHclTerraform(struct?: ResourceGroupPolicyAssignmentOverridesSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    in: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.in),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_in: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notIn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceGroupPolicyAssignmentOverridesSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._notIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notIn = this._notIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupPolicyAssignmentOverridesSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._in = undefined;
      this._kind = undefined;
      this._notIn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._in = value.in;
      this._kind = value.kind;
      this._notIn = value.notIn;
    }
  }

  // in - computed: false, optional: true, required: false
  private _in?: string[]; 
  public get in() {
    return this.getListAttribute('in');
  }
  public set in(value: string[]) {
    this._in = value;
  }
  public resetIn() {
    this._in = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // not_in - computed: false, optional: true, required: false
  private _notIn?: string[]; 
  public get notIn() {
    return this.getListAttribute('not_in');
  }
  public set notIn(value: string[]) {
    this._notIn = value;
  }
  public resetNotIn() {
    this._notIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInInput() {
    return this._notIn;
  }
}

export class ResourceGroupPolicyAssignmentOverridesSelectorsList extends cdktn.ComplexList {
  public internalValue? : ResourceGroupPolicyAssignmentOverridesSelectors[] | cdktn.IResolvable

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
  public get(index: number): ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference {
    return new ResourceGroupPolicyAssignmentOverridesSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupPolicyAssignmentOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#value ResourceGroupPolicyAssignment#value}
  */
  readonly value: string;
  /**
  * selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#selectors ResourceGroupPolicyAssignment#selectors}
  */
  readonly selectors?: ResourceGroupPolicyAssignmentOverridesSelectors[] | cdktn.IResolvable;
}

export function resourceGroupPolicyAssignmentOverridesToTerraform(struct?: ResourceGroupPolicyAssignmentOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value: cdktn.stringToTerraform(struct!.value),
    selectors: cdktn.listMapper(resourceGroupPolicyAssignmentOverridesSelectorsToTerraform, true)(struct!.selectors),
  }
}


export function resourceGroupPolicyAssignmentOverridesToHclTerraform(struct?: ResourceGroupPolicyAssignmentOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: cdktn.listMapperHcl(resourceGroupPolicyAssignmentOverridesSelectorsToHclTerraform, true)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceGroupPolicyAssignmentOverridesSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupPolicyAssignmentOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceGroupPolicyAssignmentOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupPolicyAssignmentOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._selectors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._selectors.internalValue = value.selectors;
    }
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

  // selectors - computed: false, optional: true, required: false
  private _selectors = new ResourceGroupPolicyAssignmentOverridesSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: ResourceGroupPolicyAssignmentOverridesSelectors[] | cdktn.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}

export class ResourceGroupPolicyAssignmentOverridesList extends cdktn.ComplexList {
  public internalValue? : ResourceGroupPolicyAssignmentOverrides[] | cdktn.IResolvable

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
  public get(index: number): ResourceGroupPolicyAssignmentOverridesOutputReference {
    return new ResourceGroupPolicyAssignmentOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupPolicyAssignmentResourceSelectorsSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#in ResourceGroupPolicyAssignment#in}
  */
  readonly in?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#kind ResourceGroupPolicyAssignment#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#not_in ResourceGroupPolicyAssignment#not_in}
  */
  readonly notIn?: string[];
}

export function resourceGroupPolicyAssignmentResourceSelectorsSelectorsToTerraform(struct?: ResourceGroupPolicyAssignmentResourceSelectorsSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    in: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.in),
    kind: cdktn.stringToTerraform(struct!.kind),
    not_in: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.notIn),
  }
}


export function resourceGroupPolicyAssignmentResourceSelectorsSelectorsToHclTerraform(struct?: ResourceGroupPolicyAssignmentResourceSelectorsSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    in: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.in),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktn.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_in: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.notIn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceGroupPolicyAssignmentResourceSelectorsSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._notIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notIn = this._notIn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupPolicyAssignmentResourceSelectorsSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._in = undefined;
      this._kind = undefined;
      this._notIn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._in = value.in;
      this._kind = value.kind;
      this._notIn = value.notIn;
    }
  }

  // in - computed: false, optional: true, required: false
  private _in?: string[]; 
  public get in() {
    return this.getListAttribute('in');
  }
  public set in(value: string[]) {
    this._in = value;
  }
  public resetIn() {
    this._in = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // not_in - computed: false, optional: true, required: false
  private _notIn?: string[]; 
  public get notIn() {
    return this.getListAttribute('not_in');
  }
  public set notIn(value: string[]) {
    this._notIn = value;
  }
  public resetNotIn() {
    this._notIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInInput() {
    return this._notIn;
  }
}

export class ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList extends cdktn.ComplexList {
  public internalValue? : ResourceGroupPolicyAssignmentResourceSelectorsSelectors[] | cdktn.IResolvable

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
  public get(index: number): ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference {
    return new ResourceGroupPolicyAssignmentResourceSelectorsSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupPolicyAssignmentResourceSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#name ResourceGroupPolicyAssignment#name}
  */
  readonly name?: string;
  /**
  * selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#selectors ResourceGroupPolicyAssignment#selectors}
  */
  readonly selectors: ResourceGroupPolicyAssignmentResourceSelectorsSelectors[] | cdktn.IResolvable;
}

export function resourceGroupPolicyAssignmentResourceSelectorsToTerraform(struct?: ResourceGroupPolicyAssignmentResourceSelectors | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    selectors: cdktn.listMapper(resourceGroupPolicyAssignmentResourceSelectorsSelectorsToTerraform, true)(struct!.selectors),
  }
}


export function resourceGroupPolicyAssignmentResourceSelectorsToHclTerraform(struct?: ResourceGroupPolicyAssignmentResourceSelectors | cdktn.IResolvable): any {
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
    selectors: {
      value: cdktn.listMapperHcl(resourceGroupPolicyAssignmentResourceSelectorsSelectorsToHclTerraform, true)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceGroupPolicyAssignmentResourceSelectorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ResourceGroupPolicyAssignmentResourceSelectors | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceGroupPolicyAssignmentResourceSelectors | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._selectors.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._selectors.internalValue = value.selectors;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // selectors - computed: false, optional: false, required: true
  private _selectors = new ResourceGroupPolicyAssignmentResourceSelectorsSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: ResourceGroupPolicyAssignmentResourceSelectorsSelectors[] | cdktn.IResolvable) {
    this._selectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}

export class ResourceGroupPolicyAssignmentResourceSelectorsList extends cdktn.ComplexList {
  public internalValue? : ResourceGroupPolicyAssignmentResourceSelectors[] | cdktn.IResolvable

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
  public get(index: number): ResourceGroupPolicyAssignmentResourceSelectorsOutputReference {
    return new ResourceGroupPolicyAssignmentResourceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceGroupPolicyAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#create ResourceGroupPolicyAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#delete ResourceGroupPolicyAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#read ResourceGroupPolicyAssignment#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#update ResourceGroupPolicyAssignment#update}
  */
  readonly update?: string;
}

export function resourceGroupPolicyAssignmentTimeoutsToTerraform(struct?: ResourceGroupPolicyAssignmentTimeouts | cdktn.IResolvable): any {
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


export function resourceGroupPolicyAssignmentTimeoutsToHclTerraform(struct?: ResourceGroupPolicyAssignmentTimeouts | cdktn.IResolvable): any {
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

export class ResourceGroupPolicyAssignmentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceGroupPolicyAssignmentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ResourceGroupPolicyAssignmentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment azurerm_resource_group_policy_assignment}
*/
export class ResourceGroupPolicyAssignment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_resource_group_policy_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ResourceGroupPolicyAssignment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceGroupPolicyAssignment to import
  * @param importFromId The id of the existing ResourceGroupPolicyAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceGroupPolicyAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_resource_group_policy_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/resource_group_policy_assignment azurerm_resource_group_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_resource_group_policy_assignment',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.79.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._enforce = config.enforce;
    this._id = config.id;
    this._location = config.location;
    this._metadata = config.metadata;
    this._name = config.name;
    this._notScopes = config.notScopes;
    this._parameters = config.parameters;
    this._policyDefinitionId = config.policyDefinitionId;
    this._resourceGroupId = config.resourceGroupId;
    this._identity.internalValue = config.identity;
    this._nonComplianceMessage.internalValue = config.nonComplianceMessage;
    this._overrides.internalValue = config.overrides;
    this._resourceSelectors.internalValue = config.resourceSelectors;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktn.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktn.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
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

  // not_scopes - computed: false, optional: true, required: false
  private _notScopes?: string[]; 
  public get notScopes() {
    return this.getListAttribute('not_scopes');
  }
  public set notScopes(value: string[]) {
    this._notScopes = value;
  }
  public resetNotScopes() {
    this._notScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notScopesInput() {
    return this._notScopes;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // policy_definition_id - computed: false, optional: false, required: true
  private _policyDefinitionId?: string; 
  public get policyDefinitionId() {
    return this.getStringAttribute('policy_definition_id');
  }
  public set policyDefinitionId(value: string) {
    this._policyDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDefinitionIdInput() {
    return this._policyDefinitionId;
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ResourceGroupPolicyAssignmentIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ResourceGroupPolicyAssignmentIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // non_compliance_message - computed: false, optional: true, required: false
  private _nonComplianceMessage = new ResourceGroupPolicyAssignmentNonComplianceMessageList(this, "non_compliance_message", false);
  public get nonComplianceMessage() {
    return this._nonComplianceMessage;
  }
  public putNonComplianceMessage(value: ResourceGroupPolicyAssignmentNonComplianceMessage[] | cdktn.IResolvable) {
    this._nonComplianceMessage.internalValue = value;
  }
  public resetNonComplianceMessage() {
    this._nonComplianceMessage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonComplianceMessageInput() {
    return this._nonComplianceMessage.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new ResourceGroupPolicyAssignmentOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: ResourceGroupPolicyAssignmentOverrides[] | cdktn.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // resource_selectors - computed: false, optional: true, required: false
  private _resourceSelectors = new ResourceGroupPolicyAssignmentResourceSelectorsList(this, "resource_selectors", false);
  public get resourceSelectors() {
    return this._resourceSelectors;
  }
  public putResourceSelectors(value: ResourceGroupPolicyAssignmentResourceSelectors[] | cdktn.IResolvable) {
    this._resourceSelectors.internalValue = value;
  }
  public resetResourceSelectors() {
    this._resourceSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorsInput() {
    return this._resourceSelectors.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceGroupPolicyAssignmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceGroupPolicyAssignmentTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      enforce: cdktn.booleanToTerraform(this._enforce),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      metadata: cdktn.stringToTerraform(this._metadata),
      name: cdktn.stringToTerraform(this._name),
      not_scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notScopes),
      parameters: cdktn.stringToTerraform(this._parameters),
      policy_definition_id: cdktn.stringToTerraform(this._policyDefinitionId),
      resource_group_id: cdktn.stringToTerraform(this._resourceGroupId),
      identity: resourceGroupPolicyAssignmentIdentityToTerraform(this._identity.internalValue),
      non_compliance_message: cdktn.listMapper(resourceGroupPolicyAssignmentNonComplianceMessageToTerraform, true)(this._nonComplianceMessage.internalValue),
      overrides: cdktn.listMapper(resourceGroupPolicyAssignmentOverridesToTerraform, true)(this._overrides.internalValue),
      resource_selectors: cdktn.listMapper(resourceGroupPolicyAssignmentResourceSelectorsToTerraform, true)(this._resourceSelectors.internalValue),
      timeouts: resourceGroupPolicyAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      enforce: {
        value: cdktn.booleanToHclTerraform(this._enforce),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktn.stringToHclTerraform(this._metadata),
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
      not_scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parameters: {
        value: cdktn.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_definition_id: {
        value: cdktn.stringToHclTerraform(this._policyDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktn.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: resourceGroupPolicyAssignmentIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceGroupPolicyAssignmentIdentityList",
      },
      non_compliance_message: {
        value: cdktn.listMapperHcl(resourceGroupPolicyAssignmentNonComplianceMessageToHclTerraform, true)(this._nonComplianceMessage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceGroupPolicyAssignmentNonComplianceMessageList",
      },
      overrides: {
        value: cdktn.listMapperHcl(resourceGroupPolicyAssignmentOverridesToHclTerraform, true)(this._overrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceGroupPolicyAssignmentOverridesList",
      },
      resource_selectors: {
        value: cdktn.listMapperHcl(resourceGroupPolicyAssignmentResourceSelectorsToHclTerraform, true)(this._resourceSelectors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceGroupPolicyAssignmentResourceSelectorsList",
      },
      timeouts: {
        value: resourceGroupPolicyAssignmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceGroupPolicyAssignmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
