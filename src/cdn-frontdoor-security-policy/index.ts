/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CdnFrontdoorSecurityPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_profile_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_profile_id}
  */
  readonly cdnFrontdoorProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#id CdnFrontdoorSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#name CdnFrontdoorSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * security_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#security_policies CdnFrontdoorSecurityPolicy#security_policies}
  */
  readonly securityPolicies: CdnFrontdoorSecurityPolicySecurityPolicies;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#timeouts CdnFrontdoorSecurityPolicy#timeouts}
  */
  readonly timeouts?: CdnFrontdoorSecurityPolicyTimeouts;
}
export interface CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_domain_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_domain_id}
  */
  readonly cdnFrontdoorDomainId: string;
}

export function cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainToTerraform(struct?: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cdn_frontdoor_domain_id: cdktn.stringToTerraform(struct!.cdnFrontdoorDomainId),
  }
}


export function cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainToHclTerraform(struct?: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cdn_frontdoor_domain_id: {
      value: cdktn.stringToHclTerraform(struct!.cdnFrontdoorDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdnFrontdoorDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnFrontdoorDomainId = this._cdnFrontdoorDomainId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdnFrontdoorDomainId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdnFrontdoorDomainId = value.cdnFrontdoorDomainId;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // cdn_frontdoor_domain_id - computed: false, optional: false, required: true
  private _cdnFrontdoorDomainId?: string; 
  public get cdnFrontdoorDomainId() {
    return this.getStringAttribute('cdn_frontdoor_domain_id');
  }
  public set cdnFrontdoorDomainId(value: string) {
    this._cdnFrontdoorDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorDomainIdInput() {
    return this._cdnFrontdoorDomainId;
  }
}

export class CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList extends cdktn.ComplexList {
  public internalValue? : CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain[] | cdktn.IResolvable

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
  public get(index: number): CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference {
    return new CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#patterns_to_match CdnFrontdoorSecurityPolicy#patterns_to_match}
  */
  readonly patternsToMatch: string[];
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#domain CdnFrontdoorSecurityPolicy#domain}
  */
  readonly domain: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain[] | cdktn.IResolvable;
}

export function cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationToTerraform(struct?: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference | CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    patterns_to_match: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.patternsToMatch),
    domain: cdktn.listMapper(cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainToTerraform, true)(struct!.domain),
  }
}


export function cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationToHclTerraform(struct?: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference | CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    patterns_to_match: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.patternsToMatch),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktn.listMapperHcl(cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainToHclTerraform, true)(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patternsToMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternsToMatch = this._patternsToMatch;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patternsToMatch = undefined;
      this._domain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patternsToMatch = value.patternsToMatch;
      this._domain.internalValue = value.domain;
    }
  }

  // patterns_to_match - computed: false, optional: false, required: true
  private _patternsToMatch?: string[]; 
  public get patternsToMatch() {
    return this.getListAttribute('patterns_to_match');
  }
  public set patternsToMatch(value: string[]) {
    this._patternsToMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsToMatchInput() {
    return this._patternsToMatch;
  }

  // domain - computed: false, optional: false, required: true
  private _domain = new CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomainList(this, "domain", false);
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationDomain[] | cdktn.IResolvable) {
    this._domain.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }
}
export interface CdnFrontdoorSecurityPolicySecurityPoliciesFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#cdn_frontdoor_firewall_policy_id CdnFrontdoorSecurityPolicy#cdn_frontdoor_firewall_policy_id}
  */
  readonly cdnFrontdoorFirewallPolicyId: string;
  /**
  * association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#association CdnFrontdoorSecurityPolicy#association}
  */
  readonly association: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation;
}

export function cdnFrontdoorSecurityPolicySecurityPoliciesFirewallToTerraform(struct?: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference | CdnFrontdoorSecurityPolicySecurityPoliciesFirewall): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cdn_frontdoor_firewall_policy_id: cdktn.stringToTerraform(struct!.cdnFrontdoorFirewallPolicyId),
    association: cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationToTerraform(struct!.association),
  }
}


export function cdnFrontdoorSecurityPolicySecurityPoliciesFirewallToHclTerraform(struct?: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference | CdnFrontdoorSecurityPolicySecurityPoliciesFirewall): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cdn_frontdoor_firewall_policy_id: {
      value: cdktn.stringToHclTerraform(struct!.cdnFrontdoorFirewallPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    association: {
      value: cdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationToHclTerraform(struct!.association),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorSecurityPolicySecurityPoliciesFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdnFrontdoorFirewallPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnFrontdoorFirewallPolicyId = this._cdnFrontdoorFirewallPolicyId;
    }
    if (this._association?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.association = this._association?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdnFrontdoorFirewallPolicyId = undefined;
      this._association.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdnFrontdoorFirewallPolicyId = value.cdnFrontdoorFirewallPolicyId;
      this._association.internalValue = value.association;
    }
  }

  // cdn_frontdoor_firewall_policy_id - computed: false, optional: false, required: true
  private _cdnFrontdoorFirewallPolicyId?: string; 
  public get cdnFrontdoorFirewallPolicyId() {
    return this.getStringAttribute('cdn_frontdoor_firewall_policy_id');
  }
  public set cdnFrontdoorFirewallPolicyId(value: string) {
    this._cdnFrontdoorFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorFirewallPolicyIdInput() {
    return this._cdnFrontdoorFirewallPolicyId;
  }

  // association - computed: false, optional: false, required: true
  private _association = new CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociationOutputReference(this, "association");
  public get association() {
    return this._association;
  }
  public putAssociation(value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewallAssociation) {
    this._association.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationInput() {
    return this._association.internalValue;
  }
}
export interface CdnFrontdoorSecurityPolicySecurityPolicies {
  /**
  * firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#firewall CdnFrontdoorSecurityPolicy#firewall}
  */
  readonly firewall: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall;
}

export function cdnFrontdoorSecurityPolicySecurityPoliciesToTerraform(struct?: CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference | CdnFrontdoorSecurityPolicySecurityPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    firewall: cdnFrontdoorSecurityPolicySecurityPoliciesFirewallToTerraform(struct!.firewall),
  }
}


export function cdnFrontdoorSecurityPolicySecurityPoliciesToHclTerraform(struct?: CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference | CdnFrontdoorSecurityPolicySecurityPolicies): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    firewall: {
      value: cdnFrontdoorSecurityPolicySecurityPoliciesFirewallToHclTerraform(struct!.firewall),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorSecurityPolicySecurityPoliciesFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorSecurityPolicySecurityPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewall = this._firewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorSecurityPolicySecurityPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firewall.internalValue = value.firewall;
    }
  }

  // firewall - computed: false, optional: false, required: true
  private _firewall = new CdnFrontdoorSecurityPolicySecurityPoliciesFirewallOutputReference(this, "firewall");
  public get firewall() {
    return this._firewall;
  }
  public putFirewall(value: CdnFrontdoorSecurityPolicySecurityPoliciesFirewall) {
    this._firewall.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall.internalValue;
  }
}
export interface CdnFrontdoorSecurityPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#create CdnFrontdoorSecurityPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#delete CdnFrontdoorSecurityPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#read CdnFrontdoorSecurityPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#update CdnFrontdoorSecurityPolicy#update}
  */
  readonly update?: string;
}

export function cdnFrontdoorSecurityPolicyTimeoutsToTerraform(struct?: CdnFrontdoorSecurityPolicyTimeouts | cdktn.IResolvable): any {
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


export function cdnFrontdoorSecurityPolicyTimeoutsToHclTerraform(struct?: CdnFrontdoorSecurityPolicyTimeouts | cdktn.IResolvable): any {
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

export class CdnFrontdoorSecurityPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFrontdoorSecurityPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorSecurityPolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy azurerm_cdn_frontdoor_security_policy}
*/
export class CdnFrontdoorSecurityPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CdnFrontdoorSecurityPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFrontdoorSecurityPolicy to import
  * @param importFromId The id of the existing CdnFrontdoorSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFrontdoorSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/cdn_frontdoor_security_policy azurerm_cdn_frontdoor_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFrontdoorSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFrontdoorSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_security_policy',
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
    this._cdnFrontdoorProfileId = config.cdnFrontdoorProfileId;
    this._id = config.id;
    this._name = config.name;
    this._securityPolicies.internalValue = config.securityPolicies;
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

  // security_policies - computed: false, optional: false, required: true
  private _securityPolicies = new CdnFrontdoorSecurityPolicySecurityPoliciesOutputReference(this, "security_policies");
  public get securityPolicies() {
    return this._securityPolicies;
  }
  public putSecurityPolicies(value: CdnFrontdoorSecurityPolicySecurityPolicies) {
    this._securityPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPoliciesInput() {
    return this._securityPolicies.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFrontdoorSecurityPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFrontdoorSecurityPolicyTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      security_policies: cdnFrontdoorSecurityPolicySecurityPoliciesToTerraform(this._securityPolicies.internalValue),
      timeouts: cdnFrontdoorSecurityPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      security_policies: {
        value: cdnFrontdoorSecurityPolicySecurityPoliciesToHclTerraform(this._securityPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorSecurityPolicySecurityPoliciesList",
      },
      timeouts: {
        value: cdnFrontdoorSecurityPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFrontdoorSecurityPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
