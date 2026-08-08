/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CdnFrontdoorCustomDomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_profile_id CdnFrontdoorCustomDomain#cdn_frontdoor_profile_id}
  */
  readonly cdnFrontdoorProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#dns_zone_id CdnFrontdoorCustomDomain#dns_zone_id}
  */
  readonly dnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#host_name CdnFrontdoorCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#id CdnFrontdoorCustomDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#name CdnFrontdoorCustomDomain#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#timeouts CdnFrontdoorCustomDomain#timeouts}
  */
  readonly timeouts?: CdnFrontdoorCustomDomainTimeouts;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#tls CdnFrontdoorCustomDomain#tls}
  */
  readonly tls: CdnFrontdoorCustomDomainTls;
}
export interface CdnFrontdoorCustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#create CdnFrontdoorCustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#delete CdnFrontdoorCustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#read CdnFrontdoorCustomDomain#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#update CdnFrontdoorCustomDomain#update}
  */
  readonly update?: string;
}

export function cdnFrontdoorCustomDomainTimeoutsToTerraform(struct?: CdnFrontdoorCustomDomainTimeouts | cdktn.IResolvable): any {
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


export function cdnFrontdoorCustomDomainTimeoutsToHclTerraform(struct?: CdnFrontdoorCustomDomainTimeouts | cdktn.IResolvable): any {
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

export class CdnFrontdoorCustomDomainTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdnFrontdoorCustomDomainTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CdnFrontdoorCustomDomainTimeouts | cdktn.IResolvable | undefined) {
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
export interface CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#tls12 CdnFrontdoorCustomDomain#tls12}
  */
  readonly tls12?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#tls13 CdnFrontdoorCustomDomain#tls13}
  */
  readonly tls13?: string[];
}

export function cdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersToTerraform(struct?: CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference | CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tls12: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tls12),
    tls13: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tls13),
  }
}


export function cdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersToHclTerraform(struct?: CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference | CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tls12: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tls12),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tls13: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tls13),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12 = this._tls12;
    }
    if (this._tls13 !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13 = this._tls13;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls12 = undefined;
      this._tls13 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls12 = value.tls12;
      this._tls13 = value.tls13;
    }
  }

  // tls12 - computed: false, optional: true, required: false
  private _tls12?: string[]; 
  public get tls12() {
    return cdktn.Fn.tolist(this.getListAttribute('tls12'));
  }
  public set tls12(value: string[]) {
    this._tls12 = value;
  }
  public resetTls12() {
    this._tls12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12Input() {
    return this._tls12;
  }

  // tls13 - computed: true, optional: true, required: false
  private _tls13?: string[]; 
  public get tls13() {
    return cdktn.Fn.tolist(this.getListAttribute('tls13'));
  }
  public set tls13(value: string[]) {
    this._tls13 = value;
  }
  public resetTls13() {
    this._tls13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13Input() {
    return this._tls13;
  }
}
export interface CdnFrontdoorCustomDomainTlsCipherSuite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#type CdnFrontdoorCustomDomain#type}
  */
  readonly type: string;
  /**
  * custom_ciphers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#custom_ciphers CdnFrontdoorCustomDomain#custom_ciphers}
  */
  readonly customCiphers?: CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers;
}

export function cdnFrontdoorCustomDomainTlsCipherSuiteToTerraform(struct?: CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference | CdnFrontdoorCustomDomainTlsCipherSuite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    custom_ciphers: cdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersToTerraform(struct!.customCiphers),
  }
}


export function cdnFrontdoorCustomDomainTlsCipherSuiteToHclTerraform(struct?: CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference | CdnFrontdoorCustomDomainTlsCipherSuite): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_ciphers: {
      value: cdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersToHclTerraform(struct!.customCiphers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorCustomDomainTlsCipherSuite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._customCiphers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCiphers = this._customCiphers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorCustomDomainTlsCipherSuite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._customCiphers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._customCiphers.internalValue = value.customCiphers;
    }
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

  // custom_ciphers - computed: false, optional: true, required: false
  private _customCiphers = new CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphersOutputReference(this, "custom_ciphers");
  public get customCiphers() {
    return this._customCiphers;
  }
  public putCustomCiphers(value: CdnFrontdoorCustomDomainTlsCipherSuiteCustomCiphers) {
    this._customCiphers.internalValue = value;
  }
  public resetCustomCiphers() {
    this._customCiphers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCiphersInput() {
    return this._customCiphers.internalValue;
  }
}
export interface CdnFrontdoorCustomDomainTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#cdn_frontdoor_secret_id CdnFrontdoorCustomDomain#cdn_frontdoor_secret_id}
  */
  readonly cdnFrontdoorSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#certificate_type CdnFrontdoorCustomDomain#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#minimum_version CdnFrontdoorCustomDomain#minimum_version}
  */
  readonly minimumVersion?: string;
  /**
  * cipher_suite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#cipher_suite CdnFrontdoorCustomDomain#cipher_suite}
  */
  readonly cipherSuite?: CdnFrontdoorCustomDomainTlsCipherSuite;
}

export function cdnFrontdoorCustomDomainTlsToTerraform(struct?: CdnFrontdoorCustomDomainTlsOutputReference | CdnFrontdoorCustomDomainTls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cdn_frontdoor_secret_id: cdktn.stringToTerraform(struct!.cdnFrontdoorSecretId),
    certificate_type: cdktn.stringToTerraform(struct!.certificateType),
    minimum_version: cdktn.stringToTerraform(struct!.minimumVersion),
    cipher_suite: cdnFrontdoorCustomDomainTlsCipherSuiteToTerraform(struct!.cipherSuite),
  }
}


export function cdnFrontdoorCustomDomainTlsToHclTerraform(struct?: CdnFrontdoorCustomDomainTlsOutputReference | CdnFrontdoorCustomDomainTls): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cdn_frontdoor_secret_id: {
      value: cdktn.stringToHclTerraform(struct!.cdnFrontdoorSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_type: {
      value: cdktn.stringToHclTerraform(struct!.certificateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_version: {
      value: cdktn.stringToHclTerraform(struct!.minimumVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_suite: {
      value: cdnFrontdoorCustomDomainTlsCipherSuiteToHclTerraform(struct!.cipherSuite),
      isBlock: true,
      type: "list",
      storageClassType: "CdnFrontdoorCustomDomainTlsCipherSuiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnFrontdoorCustomDomainTlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnFrontdoorCustomDomainTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdnFrontdoorSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnFrontdoorSecretId = this._cdnFrontdoorSecretId;
    }
    if (this._certificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateType = this._certificateType;
    }
    if (this._minimumVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumVersion = this._minimumVersion;
    }
    if (this._cipherSuite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuite = this._cipherSuite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnFrontdoorCustomDomainTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdnFrontdoorSecretId = undefined;
      this._certificateType = undefined;
      this._minimumVersion = undefined;
      this._cipherSuite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdnFrontdoorSecretId = value.cdnFrontdoorSecretId;
      this._certificateType = value.certificateType;
      this._minimumVersion = value.minimumVersion;
      this._cipherSuite.internalValue = value.cipherSuite;
    }
  }

  // cdn_frontdoor_secret_id - computed: true, optional: true, required: false
  private _cdnFrontdoorSecretId?: string; 
  public get cdnFrontdoorSecretId() {
    return this.getStringAttribute('cdn_frontdoor_secret_id');
  }
  public set cdnFrontdoorSecretId(value: string) {
    this._cdnFrontdoorSecretId = value;
  }
  public resetCdnFrontdoorSecretId() {
    this._cdnFrontdoorSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnFrontdoorSecretIdInput() {
    return this._cdnFrontdoorSecretId;
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // minimum_version - computed: false, optional: true, required: false
  private _minimumVersion?: string; 
  public get minimumVersion() {
    return this.getStringAttribute('minimum_version');
  }
  public set minimumVersion(value: string) {
    this._minimumVersion = value;
  }
  public resetMinimumVersion() {
    this._minimumVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumVersionInput() {
    return this._minimumVersion;
  }

  // cipher_suite - computed: false, optional: true, required: false
  private _cipherSuite = new CdnFrontdoorCustomDomainTlsCipherSuiteOutputReference(this, "cipher_suite");
  public get cipherSuite() {
    return this._cipherSuite;
  }
  public putCipherSuite(value: CdnFrontdoorCustomDomainTlsCipherSuite) {
    this._cipherSuite.internalValue = value;
  }
  public resetCipherSuite() {
    this._cipherSuite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain azurerm_cdn_frontdoor_custom_domain}
*/
export class CdnFrontdoorCustomDomain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cdn_frontdoor_custom_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CdnFrontdoorCustomDomain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnFrontdoorCustomDomain to import
  * @param importFromId The id of the existing CdnFrontdoorCustomDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnFrontdoorCustomDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cdn_frontdoor_custom_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/cdn_frontdoor_custom_domain azurerm_cdn_frontdoor_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnFrontdoorCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CdnFrontdoorCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_frontdoor_custom_domain',
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
    this._cdnFrontdoorProfileId = config.cdnFrontdoorProfileId;
    this._dnsZoneId = config.dnsZoneId;
    this._hostName = config.hostName;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
    this._tls.internalValue = config.tls;
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

  // dns_zone_id - computed: false, optional: true, required: false
  private _dnsZoneId?: string; 
  public get dnsZoneId() {
    return this.getStringAttribute('dns_zone_id');
  }
  public set dnsZoneId(value: string) {
    this._dnsZoneId = value;
  }
  public resetDnsZoneId() {
    this._dnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdInput() {
    return this._dnsZoneId;
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // validation_token - computed: true, optional: false, required: false
  public get validationToken() {
    return this.getStringAttribute('validation_token');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdnFrontdoorCustomDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdnFrontdoorCustomDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls - computed: false, optional: false, required: true
  private _tls = new CdnFrontdoorCustomDomainTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: CdnFrontdoorCustomDomainTls) {
    this._tls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdn_frontdoor_profile_id: cdktn.stringToTerraform(this._cdnFrontdoorProfileId),
      dns_zone_id: cdktn.stringToTerraform(this._dnsZoneId),
      host_name: cdktn.stringToTerraform(this._hostName),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      timeouts: cdnFrontdoorCustomDomainTimeoutsToTerraform(this._timeouts.internalValue),
      tls: cdnFrontdoorCustomDomainTlsToTerraform(this._tls.internalValue),
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
      dns_zone_id: {
        value: cdktn.stringToHclTerraform(this._dnsZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktn.stringToHclTerraform(this._hostName),
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
      timeouts: {
        value: cdnFrontdoorCustomDomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdnFrontdoorCustomDomainTimeouts",
      },
      tls: {
        value: cdnFrontdoorCustomDomainTlsToHclTerraform(this._tls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnFrontdoorCustomDomainTlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
