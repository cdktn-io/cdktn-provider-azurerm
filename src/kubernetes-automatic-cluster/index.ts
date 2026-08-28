/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KubernetesAutomaticClusterConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * api_server_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#api_server_access KubernetesAutomaticCluster#api_server_access}
  */
  readonly apiServerAccess?: KubernetesAutomaticClusterApiServerAccess;
  /**
  * hosted_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#hosted_system KubernetesAutomaticCluster#hosted_system}
  */
  readonly hostedSystem?: KubernetesAutomaticClusterHostedSystem;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#identity KubernetesAutomaticCluster#identity}
  */
  readonly identity: KubernetesAutomaticClusterIdentity;
  /**
  * private_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#private_cluster KubernetesAutomaticCluster#private_cluster}
  */
  readonly privateCluster?: KubernetesAutomaticClusterPrivateCluster;
  /**
  * service_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#service_mesh KubernetesAutomaticCluster#service_mesh}
  */
  readonly serviceMesh?: KubernetesAutomaticClusterServiceMesh;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#timeouts KubernetesAutomaticCluster#timeouts}
  */
  readonly timeouts?: KubernetesAutomaticClusterTimeouts;
  /**
  * web_app_routing_ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#web_app_routing_ingress KubernetesAutomaticCluster#web_app_routing_ingress}
  */
  readonly webAppRoutingIngress?: KubernetesAutomaticClusterWebAppRoutingIngress;
}
export interface KubernetesAutomaticClusterKubeConfig {
}

export function kubernetesAutomaticClusterKubeConfigToTerraform(struct?: KubernetesAutomaticClusterKubeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function kubernetesAutomaticClusterKubeConfigToHclTerraform(struct?: KubernetesAutomaticClusterKubeConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesAutomaticClusterKubeConfigOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KubernetesAutomaticClusterKubeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAutomaticClusterKubeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class KubernetesAutomaticClusterKubeConfigList extends cdktn.ComplexList {

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
  public get(index: number): KubernetesAutomaticClusterKubeConfigOutputReference {
    return new KubernetesAutomaticClusterKubeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAutomaticClusterApiServerAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#authorized_ip_ranges KubernetesAutomaticCluster#authorized_ip_ranges}
  */
  readonly authorizedIpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#subnet_id KubernetesAutomaticCluster#subnet_id}
  */
  readonly subnetId?: string;
}

export function kubernetesAutomaticClusterApiServerAccessToTerraform(struct?: KubernetesAutomaticClusterApiServerAccessOutputReference | KubernetesAutomaticClusterApiServerAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authorized_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.authorizedIpRanges),
    subnet_id: cdktn.stringToTerraform(struct!.subnetId),
  }
}


export function kubernetesAutomaticClusterApiServerAccessToHclTerraform(struct?: KubernetesAutomaticClusterApiServerAccessOutputReference | KubernetesAutomaticClusterApiServerAccess): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authorized_ip_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.authorizedIpRanges),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAutomaticClusterApiServerAccessOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAutomaticClusterApiServerAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedIpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedIpRanges = this._authorizedIpRanges;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAutomaticClusterApiServerAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizedIpRanges = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizedIpRanges = value.authorizedIpRanges;
      this._subnetId = value.subnetId;
    }
  }

  // authorized_ip_ranges - computed: false, optional: true, required: false
  private _authorizedIpRanges?: string[]; 
  public get authorizedIpRanges() {
    return cdktn.Fn.tolist(this.getListAttribute('authorized_ip_ranges'));
  }
  public set authorizedIpRanges(value: string[]) {
    this._authorizedIpRanges = value;
  }
  public resetAuthorizedIpRanges() {
    this._authorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedIpRangesInput() {
    return this._authorizedIpRanges;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface KubernetesAutomaticClusterHostedSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#node_subnet_id KubernetesAutomaticCluster#node_subnet_id}
  */
  readonly nodeSubnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#system_node_subnet_id KubernetesAutomaticCluster#system_node_subnet_id}
  */
  readonly systemNodeSubnetId: string;
}

export function kubernetesAutomaticClusterHostedSystemToTerraform(struct?: KubernetesAutomaticClusterHostedSystemOutputReference | KubernetesAutomaticClusterHostedSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    node_subnet_id: cdktn.stringToTerraform(struct!.nodeSubnetId),
    system_node_subnet_id: cdktn.stringToTerraform(struct!.systemNodeSubnetId),
  }
}


export function kubernetesAutomaticClusterHostedSystemToHclTerraform(struct?: KubernetesAutomaticClusterHostedSystemOutputReference | KubernetesAutomaticClusterHostedSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    node_subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.nodeSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_node_subnet_id: {
      value: cdktn.stringToHclTerraform(struct!.systemNodeSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAutomaticClusterHostedSystemOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAutomaticClusterHostedSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSubnetId = this._nodeSubnetId;
    }
    if (this._systemNodeSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemNodeSubnetId = this._systemNodeSubnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAutomaticClusterHostedSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSubnetId = undefined;
      this._systemNodeSubnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSubnetId = value.nodeSubnetId;
      this._systemNodeSubnetId = value.systemNodeSubnetId;
    }
  }

  // node_subnet_id - computed: false, optional: false, required: true
  private _nodeSubnetId?: string; 
  public get nodeSubnetId() {
    return this.getStringAttribute('node_subnet_id');
  }
  public set nodeSubnetId(value: string) {
    this._nodeSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSubnetIdInput() {
    return this._nodeSubnetId;
  }

  // system_node_subnet_id - computed: false, optional: false, required: true
  private _systemNodeSubnetId?: string; 
  public get systemNodeSubnetId() {
    return this.getStringAttribute('system_node_subnet_id');
  }
  public set systemNodeSubnetId(value: string) {
    this._systemNodeSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNodeSubnetIdInput() {
    return this._systemNodeSubnetId;
  }
}
export interface KubernetesAutomaticClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#identity_ids KubernetesAutomaticCluster#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#type KubernetesAutomaticCluster#type}
  */
  readonly type: string;
}

export function kubernetesAutomaticClusterIdentityToTerraform(struct?: KubernetesAutomaticClusterIdentityOutputReference | KubernetesAutomaticClusterIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function kubernetesAutomaticClusterIdentityToHclTerraform(struct?: KubernetesAutomaticClusterIdentityOutputReference | KubernetesAutomaticClusterIdentity): any {
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

export class KubernetesAutomaticClusterIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAutomaticClusterIdentity | undefined {
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

  public set internalValue(value: KubernetesAutomaticClusterIdentity | undefined) {
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
export interface KubernetesAutomaticClusterPrivateCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#private_dns_zone_id KubernetesAutomaticCluster#private_dns_zone_id}
  */
  readonly privateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#public_fully_qualified_domain_name_enabled KubernetesAutomaticCluster#public_fully_qualified_domain_name_enabled}
  */
  readonly publicFullyQualifiedDomainNameEnabled?: boolean | cdktn.IResolvable;
}

export function kubernetesAutomaticClusterPrivateClusterToTerraform(struct?: KubernetesAutomaticClusterPrivateClusterOutputReference | KubernetesAutomaticClusterPrivateCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_dns_zone_id: cdktn.stringToTerraform(struct!.privateDnsZoneId),
    public_fully_qualified_domain_name_enabled: cdktn.booleanToTerraform(struct!.publicFullyQualifiedDomainNameEnabled),
  }
}


export function kubernetesAutomaticClusterPrivateClusterToHclTerraform(struct?: KubernetesAutomaticClusterPrivateClusterOutputReference | KubernetesAutomaticClusterPrivateCluster): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_dns_zone_id: {
      value: cdktn.stringToHclTerraform(struct!.privateDnsZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_fully_qualified_domain_name_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.publicFullyQualifiedDomainNameEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAutomaticClusterPrivateClusterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAutomaticClusterPrivateCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateDnsZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateDnsZoneId = this._privateDnsZoneId;
    }
    if (this._publicFullyQualifiedDomainNameEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicFullyQualifiedDomainNameEnabled = this._publicFullyQualifiedDomainNameEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAutomaticClusterPrivateCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateDnsZoneId = undefined;
      this._publicFullyQualifiedDomainNameEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateDnsZoneId = value.privateDnsZoneId;
      this._publicFullyQualifiedDomainNameEnabled = value.publicFullyQualifiedDomainNameEnabled;
    }
  }

  // private_dns_zone_id - computed: false, optional: true, required: false
  private _privateDnsZoneId?: string; 
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }
  public set privateDnsZoneId(value: string) {
    this._privateDnsZoneId = value;
  }
  public resetPrivateDnsZoneId() {
    this._privateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdInput() {
    return this._privateDnsZoneId;
  }

  // public_fully_qualified_domain_name_enabled - computed: false, optional: true, required: false
  private _publicFullyQualifiedDomainNameEnabled?: boolean | cdktn.IResolvable; 
  public get publicFullyQualifiedDomainNameEnabled() {
    return this.getBooleanAttribute('public_fully_qualified_domain_name_enabled');
  }
  public set publicFullyQualifiedDomainNameEnabled(value: boolean | cdktn.IResolvable) {
    this._publicFullyQualifiedDomainNameEnabled = value;
  }
  public resetPublicFullyQualifiedDomainNameEnabled() {
    this._publicFullyQualifiedDomainNameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicFullyQualifiedDomainNameEnabledInput() {
    return this._publicFullyQualifiedDomainNameEnabled;
  }
}
export interface KubernetesAutomaticClusterServiceMeshCertificateAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#certificate_chain_object_name KubernetesAutomaticCluster#certificate_chain_object_name}
  */
  readonly certificateChainObjectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#certificate_object_name KubernetesAutomaticCluster#certificate_object_name}
  */
  readonly certificateObjectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#key_object_name KubernetesAutomaticCluster#key_object_name}
  */
  readonly keyObjectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#key_vault_id KubernetesAutomaticCluster#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#root_certificate_object_name KubernetesAutomaticCluster#root_certificate_object_name}
  */
  readonly rootCertificateObjectName: string;
}

export function kubernetesAutomaticClusterServiceMeshCertificateAuthorityToTerraform(struct?: KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference | KubernetesAutomaticClusterServiceMeshCertificateAuthority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    certificate_chain_object_name: cdktn.stringToTerraform(struct!.certificateChainObjectName),
    certificate_object_name: cdktn.stringToTerraform(struct!.certificateObjectName),
    key_object_name: cdktn.stringToTerraform(struct!.keyObjectName),
    key_vault_id: cdktn.stringToTerraform(struct!.keyVaultId),
    root_certificate_object_name: cdktn.stringToTerraform(struct!.rootCertificateObjectName),
  }
}


export function kubernetesAutomaticClusterServiceMeshCertificateAuthorityToHclTerraform(struct?: KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference | KubernetesAutomaticClusterServiceMeshCertificateAuthority): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    certificate_chain_object_name: {
      value: cdktn.stringToHclTerraform(struct!.certificateChainObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_object_name: {
      value: cdktn.stringToHclTerraform(struct!.certificateObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_object_name: {
      value: cdktn.stringToHclTerraform(struct!.keyObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktn.stringToHclTerraform(struct!.keyVaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_certificate_object_name: {
      value: cdktn.stringToHclTerraform(struct!.rootCertificateObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAutomaticClusterServiceMeshCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateChainObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChainObjectName = this._certificateChainObjectName;
    }
    if (this._certificateObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateObjectName = this._certificateObjectName;
    }
    if (this._keyObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyObjectName = this._keyObjectName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._rootCertificateObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCertificateObjectName = this._rootCertificateObjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAutomaticClusterServiceMeshCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateChainObjectName = undefined;
      this._certificateObjectName = undefined;
      this._keyObjectName = undefined;
      this._keyVaultId = undefined;
      this._rootCertificateObjectName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateChainObjectName = value.certificateChainObjectName;
      this._certificateObjectName = value.certificateObjectName;
      this._keyObjectName = value.keyObjectName;
      this._keyVaultId = value.keyVaultId;
      this._rootCertificateObjectName = value.rootCertificateObjectName;
    }
  }

  // certificate_chain_object_name - computed: false, optional: false, required: true
  private _certificateChainObjectName?: string; 
  public get certificateChainObjectName() {
    return this.getStringAttribute('certificate_chain_object_name');
  }
  public set certificateChainObjectName(value: string) {
    this._certificateChainObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainObjectNameInput() {
    return this._certificateChainObjectName;
  }

  // certificate_object_name - computed: false, optional: false, required: true
  private _certificateObjectName?: string; 
  public get certificateObjectName() {
    return this.getStringAttribute('certificate_object_name');
  }
  public set certificateObjectName(value: string) {
    this._certificateObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateObjectNameInput() {
    return this._certificateObjectName;
  }

  // key_object_name - computed: false, optional: false, required: true
  private _keyObjectName?: string; 
  public get keyObjectName() {
    return this.getStringAttribute('key_object_name');
  }
  public set keyObjectName(value: string) {
    this._keyObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyObjectNameInput() {
    return this._keyObjectName;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // root_certificate_object_name - computed: false, optional: false, required: true
  private _rootCertificateObjectName?: string; 
  public get rootCertificateObjectName() {
    return this.getStringAttribute('root_certificate_object_name');
  }
  public set rootCertificateObjectName(value: string) {
    this._rootCertificateObjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCertificateObjectNameInput() {
    return this._rootCertificateObjectName;
  }
}
export interface KubernetesAutomaticClusterServiceMesh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#external_ingress_gateway_enabled KubernetesAutomaticCluster#external_ingress_gateway_enabled}
  */
  readonly externalIngressGatewayEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#internal_ingress_gateway_enabled KubernetesAutomaticCluster#internal_ingress_gateway_enabled}
  */
  readonly internalIngressGatewayEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#proxy_redirect_mechanism KubernetesAutomaticCluster#proxy_redirect_mechanism}
  */
  readonly proxyRedirectMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#revisions KubernetesAutomaticCluster#revisions}
  */
  readonly revisions: string[];
  /**
  * certificate_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#certificate_authority KubernetesAutomaticCluster#certificate_authority}
  */
  readonly certificateAuthority?: KubernetesAutomaticClusterServiceMeshCertificateAuthority;
}

export function kubernetesAutomaticClusterServiceMeshToTerraform(struct?: KubernetesAutomaticClusterServiceMeshOutputReference | KubernetesAutomaticClusterServiceMesh): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    external_ingress_gateway_enabled: cdktn.booleanToTerraform(struct!.externalIngressGatewayEnabled),
    internal_ingress_gateway_enabled: cdktn.booleanToTerraform(struct!.internalIngressGatewayEnabled),
    proxy_redirect_mechanism: cdktn.stringToTerraform(struct!.proxyRedirectMechanism),
    revisions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.revisions),
    certificate_authority: kubernetesAutomaticClusterServiceMeshCertificateAuthorityToTerraform(struct!.certificateAuthority),
  }
}


export function kubernetesAutomaticClusterServiceMeshToHclTerraform(struct?: KubernetesAutomaticClusterServiceMeshOutputReference | KubernetesAutomaticClusterServiceMesh): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    external_ingress_gateway_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.externalIngressGatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_ingress_gateway_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.internalIngressGatewayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_redirect_mechanism: {
      value: cdktn.stringToHclTerraform(struct!.proxyRedirectMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revisions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.revisions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    certificate_authority: {
      value: kubernetesAutomaticClusterServiceMeshCertificateAuthorityToHclTerraform(struct!.certificateAuthority),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesAutomaticClusterServiceMeshCertificateAuthorityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAutomaticClusterServiceMeshOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAutomaticClusterServiceMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIngressGatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIngressGatewayEnabled = this._externalIngressGatewayEnabled;
    }
    if (this._internalIngressGatewayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIngressGatewayEnabled = this._internalIngressGatewayEnabled;
    }
    if (this._proxyRedirectMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyRedirectMechanism = this._proxyRedirectMechanism;
    }
    if (this._revisions !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisions = this._revisions;
    }
    if (this._certificateAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthority = this._certificateAuthority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAutomaticClusterServiceMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalIngressGatewayEnabled = undefined;
      this._internalIngressGatewayEnabled = undefined;
      this._proxyRedirectMechanism = undefined;
      this._revisions = undefined;
      this._certificateAuthority.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalIngressGatewayEnabled = value.externalIngressGatewayEnabled;
      this._internalIngressGatewayEnabled = value.internalIngressGatewayEnabled;
      this._proxyRedirectMechanism = value.proxyRedirectMechanism;
      this._revisions = value.revisions;
      this._certificateAuthority.internalValue = value.certificateAuthority;
    }
  }

  // external_ingress_gateway_enabled - computed: false, optional: true, required: false
  private _externalIngressGatewayEnabled?: boolean | cdktn.IResolvable; 
  public get externalIngressGatewayEnabled() {
    return this.getBooleanAttribute('external_ingress_gateway_enabled');
  }
  public set externalIngressGatewayEnabled(value: boolean | cdktn.IResolvable) {
    this._externalIngressGatewayEnabled = value;
  }
  public resetExternalIngressGatewayEnabled() {
    this._externalIngressGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIngressGatewayEnabledInput() {
    return this._externalIngressGatewayEnabled;
  }

  // internal_ingress_gateway_enabled - computed: false, optional: true, required: false
  private _internalIngressGatewayEnabled?: boolean | cdktn.IResolvable; 
  public get internalIngressGatewayEnabled() {
    return this.getBooleanAttribute('internal_ingress_gateway_enabled');
  }
  public set internalIngressGatewayEnabled(value: boolean | cdktn.IResolvable) {
    this._internalIngressGatewayEnabled = value;
  }
  public resetInternalIngressGatewayEnabled() {
    this._internalIngressGatewayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIngressGatewayEnabledInput() {
    return this._internalIngressGatewayEnabled;
  }

  // proxy_redirect_mechanism - computed: false, optional: true, required: false
  private _proxyRedirectMechanism?: string; 
  public get proxyRedirectMechanism() {
    return this.getStringAttribute('proxy_redirect_mechanism');
  }
  public set proxyRedirectMechanism(value: string) {
    this._proxyRedirectMechanism = value;
  }
  public resetProxyRedirectMechanism() {
    this._proxyRedirectMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyRedirectMechanismInput() {
    return this._proxyRedirectMechanism;
  }

  // revisions - computed: false, optional: false, required: true
  private _revisions?: string[]; 
  public get revisions() {
    return this.getListAttribute('revisions');
  }
  public set revisions(value: string[]) {
    this._revisions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionsInput() {
    return this._revisions;
  }

  // certificate_authority - computed: false, optional: true, required: false
  private _certificateAuthority = new KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference(this, "certificate_authority");
  public get certificateAuthority() {
    return this._certificateAuthority;
  }
  public putCertificateAuthority(value: KubernetesAutomaticClusterServiceMeshCertificateAuthority) {
    this._certificateAuthority.internalValue = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority.internalValue;
  }
}
export interface KubernetesAutomaticClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#create KubernetesAutomaticCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#delete KubernetesAutomaticCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#read KubernetesAutomaticCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#update KubernetesAutomaticCluster#update}
  */
  readonly update?: string;
}

export function kubernetesAutomaticClusterTimeoutsToTerraform(struct?: KubernetesAutomaticClusterTimeouts | cdktn.IResolvable): any {
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


export function kubernetesAutomaticClusterTimeoutsToHclTerraform(struct?: KubernetesAutomaticClusterTimeouts | cdktn.IResolvable): any {
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

export class KubernetesAutomaticClusterTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesAutomaticClusterTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: KubernetesAutomaticClusterTimeouts | cdktn.IResolvable | undefined) {
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
export interface KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity {
}

export function kubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityToTerraform(struct?: KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function kubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityToHclTerraform(struct?: KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // user_assigned_identity_id - computed: true, optional: false, required: false
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
}

export class KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList extends cdktn.ComplexList {

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
  public get(index: number): KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference {
    return new KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesAutomaticClusterWebAppRoutingIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#default_nginx_controller KubernetesAutomaticCluster#default_nginx_controller}
  */
  readonly defaultNginxController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#dns_zone_ids KubernetesAutomaticCluster#dns_zone_ids}
  */
  readonly dnsZoneIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#istio_enabled KubernetesAutomaticCluster#istio_enabled}
  */
  readonly istioEnabled?: boolean | cdktn.IResolvable;
}

export function kubernetesAutomaticClusterWebAppRoutingIngressToTerraform(struct?: KubernetesAutomaticClusterWebAppRoutingIngressOutputReference | KubernetesAutomaticClusterWebAppRoutingIngress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_nginx_controller: cdktn.stringToTerraform(struct!.defaultNginxController),
    dns_zone_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dnsZoneIds),
    istio_enabled: cdktn.booleanToTerraform(struct!.istioEnabled),
  }
}


export function kubernetesAutomaticClusterWebAppRoutingIngressToHclTerraform(struct?: KubernetesAutomaticClusterWebAppRoutingIngressOutputReference | KubernetesAutomaticClusterWebAppRoutingIngress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_nginx_controller: {
      value: cdktn.stringToHclTerraform(struct!.defaultNginxController),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_zone_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dnsZoneIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    istio_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.istioEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesAutomaticClusterWebAppRoutingIngressOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesAutomaticClusterWebAppRoutingIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultNginxController !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNginxController = this._defaultNginxController;
    }
    if (this._dnsZoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneIds = this._dnsZoneIds;
    }
    if (this._istioEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.istioEnabled = this._istioEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesAutomaticClusterWebAppRoutingIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultNginxController = undefined;
      this._dnsZoneIds = undefined;
      this._istioEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultNginxController = value.defaultNginxController;
      this._dnsZoneIds = value.dnsZoneIds;
      this._istioEnabled = value.istioEnabled;
    }
  }

  // default_nginx_controller - computed: false, optional: true, required: false
  private _defaultNginxController?: string; 
  public get defaultNginxController() {
    return this.getStringAttribute('default_nginx_controller');
  }
  public set defaultNginxController(value: string) {
    this._defaultNginxController = value;
  }
  public resetDefaultNginxController() {
    this._defaultNginxController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNginxControllerInput() {
    return this._defaultNginxController;
  }

  // dns_zone_ids - computed: false, optional: true, required: false
  private _dnsZoneIds?: string[]; 
  public get dnsZoneIds() {
    return this.getListAttribute('dns_zone_ids');
  }
  public set dnsZoneIds(value: string[]) {
    this._dnsZoneIds = value;
  }
  public resetDnsZoneIds() {
    this._dnsZoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneIdsInput() {
    return this._dnsZoneIds;
  }

  // istio_enabled - computed: false, optional: true, required: false
  private _istioEnabled?: boolean | cdktn.IResolvable; 
  public get istioEnabled() {
    return this.getBooleanAttribute('istio_enabled');
  }
  public set istioEnabled(value: boolean | cdktn.IResolvable) {
    this._istioEnabled = value;
  }
  public resetIstioEnabled() {
    this._istioEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioEnabledInput() {
    return this._istioEnabled;
  }

  // web_app_routing_identity - computed: true, optional: false, required: false
  private _webAppRoutingIdentity = new KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList(this, "web_app_routing_identity", false);
  public get webAppRoutingIdentity() {
    return this._webAppRoutingIdentity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster azurerm_kubernetes_automatic_cluster}
*/
export class KubernetesAutomaticCluster extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kubernetes_automatic_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesAutomaticCluster to import
  * @param importFromId The id of the existing KubernetesAutomaticCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesAutomaticCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kubernetes_automatic_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster azurerm_kubernetes_automatic_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesAutomaticClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesAutomaticClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_automatic_cluster',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._apiServerAccess.internalValue = config.apiServerAccess;
    this._hostedSystem.internalValue = config.hostedSystem;
    this._identity.internalValue = config.identity;
    this._privateCluster.internalValue = config.privateCluster;
    this._serviceMesh.internalValue = config.serviceMesh;
    this._timeouts.internalValue = config.timeouts;
    this._webAppRoutingIngress.internalValue = config.webAppRoutingIngress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_kubernetes_version - computed: true, optional: false, required: false
  public get currentKubernetesVersion() {
    return this.getStringAttribute('current_kubernetes_version');
  }

  // fully_qualified_domain_name - computed: true, optional: false, required: false
  public get fullyQualifiedDomainName() {
    return this.getStringAttribute('fully_qualified_domain_name');
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

  // kube_config - computed: true, optional: false, required: false
  private _kubeConfig = new KubernetesAutomaticClusterKubeConfigList(this, "kube_config", false);
  public get kubeConfig() {
    return this._kubeConfig;
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
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

  // node_resource_group_id - computed: true, optional: false, required: false
  public get nodeResourceGroupId() {
    return this.getStringAttribute('node_resource_group_id');
  }

  // oidc_issuer_url - computed: true, optional: false, required: false
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }

  // portal_fully_qualified_domain_name - computed: true, optional: false, required: false
  public get portalFullyQualifiedDomainName() {
    return this.getStringAttribute('portal_fully_qualified_domain_name');
  }

  // private_fully_qualified_domain_name - computed: true, optional: false, required: false
  public get privateFullyQualifiedDomainName() {
    return this.getStringAttribute('private_fully_qualified_domain_name');
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

  // api_server_access - computed: false, optional: true, required: false
  private _apiServerAccess = new KubernetesAutomaticClusterApiServerAccessOutputReference(this, "api_server_access");
  public get apiServerAccess() {
    return this._apiServerAccess;
  }
  public putApiServerAccess(value: KubernetesAutomaticClusterApiServerAccess) {
    this._apiServerAccess.internalValue = value;
  }
  public resetApiServerAccess() {
    this._apiServerAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAccessInput() {
    return this._apiServerAccess.internalValue;
  }

  // hosted_system - computed: false, optional: true, required: false
  private _hostedSystem = new KubernetesAutomaticClusterHostedSystemOutputReference(this, "hosted_system");
  public get hostedSystem() {
    return this._hostedSystem;
  }
  public putHostedSystem(value: KubernetesAutomaticClusterHostedSystem) {
    this._hostedSystem.internalValue = value;
  }
  public resetHostedSystem() {
    this._hostedSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedSystemInput() {
    return this._hostedSystem.internalValue;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new KubernetesAutomaticClusterIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: KubernetesAutomaticClusterIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // private_cluster - computed: false, optional: true, required: false
  private _privateCluster = new KubernetesAutomaticClusterPrivateClusterOutputReference(this, "private_cluster");
  public get privateCluster() {
    return this._privateCluster;
  }
  public putPrivateCluster(value: KubernetesAutomaticClusterPrivateCluster) {
    this._privateCluster.internalValue = value;
  }
  public resetPrivateCluster() {
    this._privateCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterInput() {
    return this._privateCluster.internalValue;
  }

  // service_mesh - computed: false, optional: true, required: false
  private _serviceMesh = new KubernetesAutomaticClusterServiceMeshOutputReference(this, "service_mesh");
  public get serviceMesh() {
    return this._serviceMesh;
  }
  public putServiceMesh(value: KubernetesAutomaticClusterServiceMesh) {
    this._serviceMesh.internalValue = value;
  }
  public resetServiceMesh() {
    this._serviceMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMeshInput() {
    return this._serviceMesh.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesAutomaticClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesAutomaticClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // web_app_routing_ingress - computed: false, optional: true, required: false
  private _webAppRoutingIngress = new KubernetesAutomaticClusterWebAppRoutingIngressOutputReference(this, "web_app_routing_ingress");
  public get webAppRoutingIngress() {
    return this._webAppRoutingIngress;
  }
  public putWebAppRoutingIngress(value: KubernetesAutomaticClusterWebAppRoutingIngress) {
    this._webAppRoutingIngress.internalValue = value;
  }
  public resetWebAppRoutingIngress() {
    this._webAppRoutingIngress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppRoutingIngressInput() {
    return this._webAppRoutingIngress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      api_server_access: kubernetesAutomaticClusterApiServerAccessToTerraform(this._apiServerAccess.internalValue),
      hosted_system: kubernetesAutomaticClusterHostedSystemToTerraform(this._hostedSystem.internalValue),
      identity: kubernetesAutomaticClusterIdentityToTerraform(this._identity.internalValue),
      private_cluster: kubernetesAutomaticClusterPrivateClusterToTerraform(this._privateCluster.internalValue),
      service_mesh: kubernetesAutomaticClusterServiceMeshToTerraform(this._serviceMesh.internalValue),
      timeouts: kubernetesAutomaticClusterTimeoutsToTerraform(this._timeouts.internalValue),
      web_app_routing_ingress: kubernetesAutomaticClusterWebAppRoutingIngressToTerraform(this._webAppRoutingIngress.internalValue),
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
      api_server_access: {
        value: kubernetesAutomaticClusterApiServerAccessToHclTerraform(this._apiServerAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAutomaticClusterApiServerAccessList",
      },
      hosted_system: {
        value: kubernetesAutomaticClusterHostedSystemToHclTerraform(this._hostedSystem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAutomaticClusterHostedSystemList",
      },
      identity: {
        value: kubernetesAutomaticClusterIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAutomaticClusterIdentityList",
      },
      private_cluster: {
        value: kubernetesAutomaticClusterPrivateClusterToHclTerraform(this._privateCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAutomaticClusterPrivateClusterList",
      },
      service_mesh: {
        value: kubernetesAutomaticClusterServiceMeshToHclTerraform(this._serviceMesh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAutomaticClusterServiceMeshList",
      },
      timeouts: {
        value: kubernetesAutomaticClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesAutomaticClusterTimeouts",
      },
      web_app_routing_ingress: {
        value: kubernetesAutomaticClusterWebAppRoutingIngressToHclTerraform(this._webAppRoutingIngress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesAutomaticClusterWebAppRoutingIngressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
