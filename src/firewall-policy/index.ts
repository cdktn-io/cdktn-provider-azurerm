/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface FirewallPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#auto_learn_private_ranges_enabled FirewallPolicy#auto_learn_private_ranges_enabled}
  */
  readonly autoLearnPrivateRangesEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#base_policy_id FirewallPolicy#base_policy_id}
  */
  readonly basePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#location FirewallPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#private_ip_ranges FirewallPolicy#private_ip_ranges}
  */
  readonly privateIpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#resource_group_name FirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#sku FirewallPolicy#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#sql_redirect_allowed FirewallPolicy#sql_redirect_allowed}
  */
  readonly sqlRedirectAllowed?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#tags FirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}
  */
  readonly threatIntelligenceMode?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#dns FirewallPolicy#dns}
  */
  readonly dns?: FirewallPolicyDns;
  /**
  * explicit_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#explicit_proxy FirewallPolicy#explicit_proxy}
  */
  readonly explicitProxy?: FirewallPolicyExplicitProxy;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#identity FirewallPolicy#identity}
  */
  readonly identity?: FirewallPolicyIdentity;
  /**
  * insights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#insights FirewallPolicy#insights}
  */
  readonly insights?: FirewallPolicyInsights;
  /**
  * intrusion_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#intrusion_detection FirewallPolicy#intrusion_detection}
  */
  readonly intrusionDetection?: FirewallPolicyIntrusionDetection;
  /**
  * threat_intelligence_allowlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#threat_intelligence_allowlist FirewallPolicy#threat_intelligence_allowlist}
  */
  readonly threatIntelligenceAllowlist?: FirewallPolicyThreatIntelligenceAllowlistStruct;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#timeouts FirewallPolicy#timeouts}
  */
  readonly timeouts?: FirewallPolicyTimeouts;
  /**
  * tls_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#tls_certificate FirewallPolicy#tls_certificate}
  */
  readonly tlsCertificate?: FirewallPolicyTlsCertificate;
}
export interface FirewallPolicyDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#proxy_enabled FirewallPolicy#proxy_enabled}
  */
  readonly proxyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#servers FirewallPolicy#servers}
  */
  readonly servers?: string[];
}

export function firewallPolicyDnsToTerraform(struct?: FirewallPolicyDnsOutputReference | FirewallPolicyDns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    proxy_enabled: cdktn.booleanToTerraform(struct!.proxyEnabled),
    servers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.servers),
  }
}


export function firewallPolicyDnsToHclTerraform(struct?: FirewallPolicyDnsOutputReference | FirewallPolicyDns): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    proxy_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.proxyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    servers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyDnsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyEnabled = this._proxyEnabled;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyEnabled = undefined;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyEnabled = value.proxyEnabled;
      this._servers = value.servers;
    }
  }

  // proxy_enabled - computed: false, optional: true, required: false
  private _proxyEnabled?: boolean | cdktn.IResolvable; 
  public get proxyEnabled() {
    return this.getBooleanAttribute('proxy_enabled');
  }
  public set proxyEnabled(value: boolean | cdktn.IResolvable) {
    this._proxyEnabled = value;
  }
  public resetProxyEnabled() {
    this._proxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyEnabledInput() {
    return this._proxyEnabled;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface FirewallPolicyExplicitProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#enable_pac_file FirewallPolicy#enable_pac_file}
  */
  readonly enablePacFile?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#http_port FirewallPolicy#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#https_port FirewallPolicy#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#pac_file FirewallPolicy#pac_file}
  */
  readonly pacFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#pac_file_port FirewallPolicy#pac_file_port}
  */
  readonly pacFilePort?: number;
}

export function firewallPolicyExplicitProxyToTerraform(struct?: FirewallPolicyExplicitProxyOutputReference | FirewallPolicyExplicitProxy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_pac_file: cdktn.booleanToTerraform(struct!.enablePacFile),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    http_port: cdktn.numberToTerraform(struct!.httpPort),
    https_port: cdktn.numberToTerraform(struct!.httpsPort),
    pac_file: cdktn.stringToTerraform(struct!.pacFile),
    pac_file_port: cdktn.numberToTerraform(struct!.pacFilePort),
  }
}


export function firewallPolicyExplicitProxyToHclTerraform(struct?: FirewallPolicyExplicitProxyOutputReference | FirewallPolicyExplicitProxy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_pac_file: {
      value: cdktn.booleanToHclTerraform(struct!.enablePacFile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_port: {
      value: cdktn.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_port: {
      value: cdktn.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pac_file: {
      value: cdktn.stringToHclTerraform(struct!.pacFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pac_file_port: {
      value: cdktn.numberToHclTerraform(struct!.pacFilePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyExplicitProxyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyExplicitProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePacFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePacFile = this._enablePacFile;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._pacFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacFile = this._pacFile;
    }
    if (this._pacFilePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacFilePort = this._pacFilePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyExplicitProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePacFile = undefined;
      this._enabled = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._pacFile = undefined;
      this._pacFilePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePacFile = value.enablePacFile;
      this._enabled = value.enabled;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._pacFile = value.pacFile;
      this._pacFilePort = value.pacFilePort;
    }
  }

  // enable_pac_file - computed: false, optional: true, required: false
  private _enablePacFile?: boolean | cdktn.IResolvable; 
  public get enablePacFile() {
    return this.getBooleanAttribute('enable_pac_file');
  }
  public set enablePacFile(value: boolean | cdktn.IResolvable) {
    this._enablePacFile = value;
  }
  public resetEnablePacFile() {
    this._enablePacFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePacFileInput() {
    return this._enablePacFile;
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

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // pac_file - computed: false, optional: true, required: false
  private _pacFile?: string; 
  public get pacFile() {
    return this.getStringAttribute('pac_file');
  }
  public set pacFile(value: string) {
    this._pacFile = value;
  }
  public resetPacFile() {
    this._pacFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFileInput() {
    return this._pacFile;
  }

  // pac_file_port - computed: false, optional: true, required: false
  private _pacFilePort?: number; 
  public get pacFilePort() {
    return this.getNumberAttribute('pac_file_port');
  }
  public set pacFilePort(value: number) {
    this._pacFilePort = value;
  }
  public resetPacFilePort() {
    this._pacFilePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacFilePortInput() {
    return this._pacFilePort;
  }
}
export interface FirewallPolicyIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#identity_ids FirewallPolicy#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#type FirewallPolicy#type}
  */
  readonly type: string;
}

export function firewallPolicyIdentityToTerraform(struct?: FirewallPolicyIdentityOutputReference | FirewallPolicyIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function firewallPolicyIdentityToHclTerraform(struct?: FirewallPolicyIdentityOutputReference | FirewallPolicyIdentity): any {
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

export class FirewallPolicyIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyIdentity | undefined {
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

  public set internalValue(value: FirewallPolicyIdentity | undefined) {
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
export interface FirewallPolicyInsightsLogAnalyticsWorkspace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#firewall_location FirewallPolicy#firewall_location}
  */
  readonly firewallLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function firewallPolicyInsightsLogAnalyticsWorkspaceToTerraform(struct?: FirewallPolicyInsightsLogAnalyticsWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    firewall_location: cdktn.stringToTerraform(struct!.firewallLocation),
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function firewallPolicyInsightsLogAnalyticsWorkspaceToHclTerraform(struct?: FirewallPolicyInsightsLogAnalyticsWorkspace | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    firewall_location: {
      value: cdktn.stringToHclTerraform(struct!.firewallLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirewallPolicyInsightsLogAnalyticsWorkspace | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallLocation = this._firewallLocation;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInsightsLogAnalyticsWorkspace | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firewallLocation = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firewallLocation = value.firewallLocation;
      this._id = value.id;
    }
  }

  // firewall_location - computed: false, optional: false, required: true
  private _firewallLocation?: string; 
  public get firewallLocation() {
    return this.getStringAttribute('firewall_location');
  }
  public set firewallLocation(value: string) {
    this._firewallLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallLocationInput() {
    return this._firewallLocation;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class FirewallPolicyInsightsLogAnalyticsWorkspaceList extends cdktn.ComplexList {
  public internalValue? : FirewallPolicyInsightsLogAnalyticsWorkspace[] | cdktn.IResolvable

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
  public get(index: number): FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference {
    return new FirewallPolicyInsightsLogAnalyticsWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyInsights {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#default_log_analytics_workspace_id FirewallPolicy#default_log_analytics_workspace_id}
  */
  readonly defaultLogAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#enabled FirewallPolicy#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#retention_in_days FirewallPolicy#retention_in_days}
  */
  readonly retentionInDays?: number;
  /**
  * log_analytics_workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#log_analytics_workspace FirewallPolicy#log_analytics_workspace}
  */
  readonly logAnalyticsWorkspace?: FirewallPolicyInsightsLogAnalyticsWorkspace[] | cdktn.IResolvable;
}

export function firewallPolicyInsightsToTerraform(struct?: FirewallPolicyInsightsOutputReference | FirewallPolicyInsights): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_log_analytics_workspace_id: cdktn.stringToTerraform(struct!.defaultLogAnalyticsWorkspaceId),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    retention_in_days: cdktn.numberToTerraform(struct!.retentionInDays),
    log_analytics_workspace: cdktn.listMapper(firewallPolicyInsightsLogAnalyticsWorkspaceToTerraform, true)(struct!.logAnalyticsWorkspace),
  }
}


export function firewallPolicyInsightsToHclTerraform(struct?: FirewallPolicyInsightsOutputReference | FirewallPolicyInsights): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_log_analytics_workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.defaultLogAnalyticsWorkspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_in_days: {
      value: cdktn.numberToHclTerraform(struct!.retentionInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_analytics_workspace: {
      value: cdktn.listMapperHcl(firewallPolicyInsightsLogAnalyticsWorkspaceToHclTerraform, true)(struct!.logAnalyticsWorkspace),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallPolicyInsightsLogAnalyticsWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyInsightsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLogAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLogAnalyticsWorkspaceId = this._defaultLogAnalyticsWorkspaceId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._retentionInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInDays = this._retentionInDays;
    }
    if (this._logAnalyticsWorkspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspace = this._logAnalyticsWorkspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyInsights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLogAnalyticsWorkspaceId = undefined;
      this._enabled = undefined;
      this._retentionInDays = undefined;
      this._logAnalyticsWorkspace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLogAnalyticsWorkspaceId = value.defaultLogAnalyticsWorkspaceId;
      this._enabled = value.enabled;
      this._retentionInDays = value.retentionInDays;
      this._logAnalyticsWorkspace.internalValue = value.logAnalyticsWorkspace;
    }
  }

  // default_log_analytics_workspace_id - computed: false, optional: false, required: true
  private _defaultLogAnalyticsWorkspaceId?: string; 
  public get defaultLogAnalyticsWorkspaceId() {
    return this.getStringAttribute('default_log_analytics_workspace_id');
  }
  public set defaultLogAnalyticsWorkspaceId(value: string) {
    this._defaultLogAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLogAnalyticsWorkspaceIdInput() {
    return this._defaultLogAnalyticsWorkspaceId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // retention_in_days - computed: false, optional: true, required: false
  private _retentionInDays?: number; 
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }
  public set retentionInDays(value: number) {
    this._retentionInDays = value;
  }
  public resetRetentionInDays() {
    this._retentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInDaysInput() {
    return this._retentionInDays;
  }

  // log_analytics_workspace - computed: false, optional: true, required: false
  private _logAnalyticsWorkspace = new FirewallPolicyInsightsLogAnalyticsWorkspaceList(this, "log_analytics_workspace", false);
  public get logAnalyticsWorkspace() {
    return this._logAnalyticsWorkspace;
  }
  public putLogAnalyticsWorkspace(value: FirewallPolicyInsightsLogAnalyticsWorkspace[] | cdktn.IResolvable) {
    this._logAnalyticsWorkspace.internalValue = value;
  }
  public resetLogAnalyticsWorkspace() {
    this._logAnalyticsWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceInput() {
    return this._logAnalyticsWorkspace.internalValue;
  }
}
export interface FirewallPolicyIntrusionDetectionSignatureOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#id FirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#state FirewallPolicy#state}
  */
  readonly state?: string;
}

export function firewallPolicyIntrusionDetectionSignatureOverridesToTerraform(struct?: FirewallPolicyIntrusionDetectionSignatureOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    state: cdktn.stringToTerraform(struct!.state),
  }
}


export function firewallPolicyIntrusionDetectionSignatureOverridesToHclTerraform(struct?: FirewallPolicyIntrusionDetectionSignatureOverrides | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktn.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirewallPolicyIntrusionDetectionSignatureOverrides | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyIntrusionDetectionSignatureOverrides | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._state = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._state = value.state;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class FirewallPolicyIntrusionDetectionSignatureOverridesList extends cdktn.ComplexList {
  public internalValue? : FirewallPolicyIntrusionDetectionSignatureOverrides[] | cdktn.IResolvable

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
  public get(index: number): FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference {
    return new FirewallPolicyIntrusionDetectionSignatureOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyIntrusionDetectionTrafficBypass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#description FirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#destination_addresses FirewallPolicy#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#destination_ip_groups FirewallPolicy#destination_ip_groups}
  */
  readonly destinationIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#destination_ports FirewallPolicy#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#protocol FirewallPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#source_addresses FirewallPolicy#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#source_ip_groups FirewallPolicy#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
}

export function firewallPolicyIntrusionDetectionTrafficBypassToTerraform(struct?: FirewallPolicyIntrusionDetectionTrafficBypass | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    destination_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationAddresses),
    destination_ip_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationIpGroups),
    destination_ports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.destinationPorts),
    name: cdktn.stringToTerraform(struct!.name),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    source_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceAddresses),
    source_ip_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sourceIpGroups),
  }
}


export function firewallPolicyIntrusionDetectionTrafficBypassToHclTerraform(struct?: FirewallPolicyIntrusionDetectionTrafficBypass | cdktn.IResolvable): any {
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
    destination_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_ip_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationIpGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_ip_groups: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sourceIpGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyIntrusionDetectionTrafficBypassOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): FirewallPolicyIntrusionDetectionTrafficBypass | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationIpGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpGroups = this._destinationIpGroups;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourceIpGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpGroups = this._sourceIpGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyIntrusionDetectionTrafficBypass | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destinationAddresses = undefined;
      this._destinationIpGroups = undefined;
      this._destinationPorts = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._sourceAddresses = undefined;
      this._sourceIpGroups = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationIpGroups = value.destinationIpGroups;
      this._destinationPorts = value.destinationPorts;
      this._name = value.name;
      this._protocol = value.protocol;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceIpGroups = value.sourceIpGroups;
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

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('destination_addresses'));
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_ip_groups - computed: false, optional: true, required: false
  private _destinationIpGroups?: string[]; 
  public get destinationIpGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('destination_ip_groups'));
  }
  public set destinationIpGroups(value: string[]) {
    this._destinationIpGroups = value;
  }
  public resetDestinationIpGroups() {
    this._destinationIpGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpGroupsInput() {
    return this._destinationIpGroups;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return cdktn.Fn.tolist(this.getListAttribute('destination_ports'));
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('source_addresses'));
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_ip_groups - computed: false, optional: true, required: false
  private _sourceIpGroups?: string[]; 
  public get sourceIpGroups() {
    return cdktn.Fn.tolist(this.getListAttribute('source_ip_groups'));
  }
  public set sourceIpGroups(value: string[]) {
    this._sourceIpGroups = value;
  }
  public resetSourceIpGroups() {
    this._sourceIpGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpGroupsInput() {
    return this._sourceIpGroups;
  }
}

export class FirewallPolicyIntrusionDetectionTrafficBypassList extends cdktn.ComplexList {
  public internalValue? : FirewallPolicyIntrusionDetectionTrafficBypass[] | cdktn.IResolvable

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
  public get(index: number): FirewallPolicyIntrusionDetectionTrafficBypassOutputReference {
    return new FirewallPolicyIntrusionDetectionTrafficBypassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallPolicyIntrusionDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#mode FirewallPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#private_ranges FirewallPolicy#private_ranges}
  */
  readonly privateRanges?: string[];
  /**
  * signature_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#signature_overrides FirewallPolicy#signature_overrides}
  */
  readonly signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureOverrides[] | cdktn.IResolvable;
  /**
  * traffic_bypass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#traffic_bypass FirewallPolicy#traffic_bypass}
  */
  readonly trafficBypass?: FirewallPolicyIntrusionDetectionTrafficBypass[] | cdktn.IResolvable;
}

export function firewallPolicyIntrusionDetectionToTerraform(struct?: FirewallPolicyIntrusionDetectionOutputReference | FirewallPolicyIntrusionDetection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
    private_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.privateRanges),
    signature_overrides: cdktn.listMapper(firewallPolicyIntrusionDetectionSignatureOverridesToTerraform, true)(struct!.signatureOverrides),
    traffic_bypass: cdktn.listMapper(firewallPolicyIntrusionDetectionTrafficBypassToTerraform, true)(struct!.trafficBypass),
  }
}


export function firewallPolicyIntrusionDetectionToHclTerraform(struct?: FirewallPolicyIntrusionDetectionOutputReference | FirewallPolicyIntrusionDetection): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ranges: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.privateRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    signature_overrides: {
      value: cdktn.listMapperHcl(firewallPolicyIntrusionDetectionSignatureOverridesToHclTerraform, true)(struct!.signatureOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallPolicyIntrusionDetectionSignatureOverridesList",
    },
    traffic_bypass: {
      value: cdktn.listMapperHcl(firewallPolicyIntrusionDetectionTrafficBypassToHclTerraform, true)(struct!.trafficBypass),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallPolicyIntrusionDetectionTrafficBypassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyIntrusionDetectionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyIntrusionDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._privateRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRanges = this._privateRanges;
    }
    if (this._signatureOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureOverrides = this._signatureOverrides?.internalValue;
    }
    if (this._trafficBypass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficBypass = this._trafficBypass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyIntrusionDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._privateRanges = undefined;
      this._signatureOverrides.internalValue = undefined;
      this._trafficBypass.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._privateRanges = value.privateRanges;
      this._signatureOverrides.internalValue = value.signatureOverrides;
      this._trafficBypass.internalValue = value.trafficBypass;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // private_ranges - computed: false, optional: true, required: false
  private _privateRanges?: string[]; 
  public get privateRanges() {
    return this.getListAttribute('private_ranges');
  }
  public set privateRanges(value: string[]) {
    this._privateRanges = value;
  }
  public resetPrivateRanges() {
    this._privateRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRangesInput() {
    return this._privateRanges;
  }

  // signature_overrides - computed: false, optional: true, required: false
  private _signatureOverrides = new FirewallPolicyIntrusionDetectionSignatureOverridesList(this, "signature_overrides", false);
  public get signatureOverrides() {
    return this._signatureOverrides;
  }
  public putSignatureOverrides(value: FirewallPolicyIntrusionDetectionSignatureOverrides[] | cdktn.IResolvable) {
    this._signatureOverrides.internalValue = value;
  }
  public resetSignatureOverrides() {
    this._signatureOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureOverridesInput() {
    return this._signatureOverrides.internalValue;
  }

  // traffic_bypass - computed: false, optional: true, required: false
  private _trafficBypass = new FirewallPolicyIntrusionDetectionTrafficBypassList(this, "traffic_bypass", false);
  public get trafficBypass() {
    return this._trafficBypass;
  }
  public putTrafficBypass(value: FirewallPolicyIntrusionDetectionTrafficBypass[] | cdktn.IResolvable) {
    this._trafficBypass.internalValue = value;
  }
  public resetTrafficBypass() {
    this._trafficBypass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficBypassInput() {
    return this._trafficBypass.internalValue;
  }
}
export interface FirewallPolicyThreatIntelligenceAllowlistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#fqdns FirewallPolicy#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#ip_addresses FirewallPolicy#ip_addresses}
  */
  readonly ipAddresses?: string[];
}

export function firewallPolicyThreatIntelligenceAllowlistStructToTerraform(struct?: FirewallPolicyThreatIntelligenceAllowlistStructOutputReference | FirewallPolicyThreatIntelligenceAllowlistStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fqdns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fqdns),
    ip_addresses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function firewallPolicyThreatIntelligenceAllowlistStructToHclTerraform(struct?: FirewallPolicyThreatIntelligenceAllowlistStructOutputReference | FirewallPolicyThreatIntelligenceAllowlistStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fqdns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_addresses: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyThreatIntelligenceAllowlistStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyThreatIntelligenceAllowlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyThreatIntelligenceAllowlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fqdns = undefined;
      this._ipAddresses = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fqdns = value.fqdns;
      this._ipAddresses = value.ipAddresses;
    }
  }

  // fqdns - computed: false, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return cdktn.Fn.tolist(this.getListAttribute('fqdns'));
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  public resetFqdns() {
    this._fqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktn.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }
}
export interface FirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#create FirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#delete FirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#read FirewallPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#update FirewallPolicy#update}
  */
  readonly update?: string;
}

export function firewallPolicyTimeoutsToTerraform(struct?: FirewallPolicyTimeouts | cdktn.IResolvable): any {
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


export function firewallPolicyTimeoutsToHclTerraform(struct?: FirewallPolicyTimeouts | cdktn.IResolvable): any {
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

export class FirewallPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallPolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: FirewallPolicyTimeouts | cdktn.IResolvable | undefined) {
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
export interface FirewallPolicyTlsCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#key_vault_secret_id FirewallPolicy#key_vault_secret_id}
  */
  readonly keyVaultSecretId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#name FirewallPolicy#name}
  */
  readonly name: string;
}

export function firewallPolicyTlsCertificateToTerraform(struct?: FirewallPolicyTlsCertificateOutputReference | FirewallPolicyTlsCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_vault_secret_id: cdktn.stringToTerraform(struct!.keyVaultSecretId),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function firewallPolicyTlsCertificateToHclTerraform(struct?: FirewallPolicyTlsCertificateOutputReference | FirewallPolicyTlsCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicyTlsCertificateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FirewallPolicyTlsCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyVaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultSecretId = this._keyVaultSecretId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicyTlsCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyVaultSecretId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyVaultSecretId = value.keyVaultSecretId;
      this._name = value.name;
    }
  }

  // key_vault_secret_id - computed: false, optional: false, required: true
  private _keyVaultSecretId?: string; 
  public get keyVaultSecretId() {
    return this.getStringAttribute('key_vault_secret_id');
  }
  public set keyVaultSecretId(value: string) {
    this._keyVaultSecretId = value;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy azurerm_firewall_policy}
*/
export class FirewallPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a FirewallPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallPolicy to import
  * @param importFromId The id of the existing FirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/firewall_policy azurerm_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_policy',
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
    this._autoLearnPrivateRangesEnabled = config.autoLearnPrivateRangesEnabled;
    this._basePolicyId = config.basePolicyId;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._privateIpRanges = config.privateIpRanges;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._sqlRedirectAllowed = config.sqlRedirectAllowed;
    this._tags = config.tags;
    this._threatIntelligenceMode = config.threatIntelligenceMode;
    this._dns.internalValue = config.dns;
    this._explicitProxy.internalValue = config.explicitProxy;
    this._identity.internalValue = config.identity;
    this._insights.internalValue = config.insights;
    this._intrusionDetection.internalValue = config.intrusionDetection;
    this._threatIntelligenceAllowlist.internalValue = config.threatIntelligenceAllowlist;
    this._timeouts.internalValue = config.timeouts;
    this._tlsCertificate.internalValue = config.tlsCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_learn_private_ranges_enabled - computed: false, optional: true, required: false
  private _autoLearnPrivateRangesEnabled?: boolean | cdktn.IResolvable; 
  public get autoLearnPrivateRangesEnabled() {
    return this.getBooleanAttribute('auto_learn_private_ranges_enabled');
  }
  public set autoLearnPrivateRangesEnabled(value: boolean | cdktn.IResolvable) {
    this._autoLearnPrivateRangesEnabled = value;
  }
  public resetAutoLearnPrivateRangesEnabled() {
    this._autoLearnPrivateRangesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLearnPrivateRangesEnabledInput() {
    return this._autoLearnPrivateRangesEnabled;
  }

  // base_policy_id - computed: false, optional: true, required: false
  private _basePolicyId?: string; 
  public get basePolicyId() {
    return this.getStringAttribute('base_policy_id');
  }
  public set basePolicyId(value: string) {
    this._basePolicyId = value;
  }
  public resetBasePolicyId() {
    this._basePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePolicyIdInput() {
    return this._basePolicyId;
  }

  // child_policies - computed: true, optional: false, required: false
  public get childPolicies() {
    return this.getListAttribute('child_policies');
  }

  // firewalls - computed: true, optional: false, required: false
  public get firewalls() {
    return this.getListAttribute('firewalls');
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

  // private_ip_ranges - computed: false, optional: true, required: false
  private _privateIpRanges?: string[]; 
  public get privateIpRanges() {
    return this.getListAttribute('private_ip_ranges');
  }
  public set privateIpRanges(value: string[]) {
    this._privateIpRanges = value;
  }
  public resetPrivateIpRanges() {
    this._privateIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpRangesInput() {
    return this._privateIpRanges;
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

  // rule_collection_groups - computed: true, optional: false, required: false
  public get ruleCollectionGroups() {
    return this.getListAttribute('rule_collection_groups');
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // sql_redirect_allowed - computed: false, optional: true, required: false
  private _sqlRedirectAllowed?: boolean | cdktn.IResolvable; 
  public get sqlRedirectAllowed() {
    return this.getBooleanAttribute('sql_redirect_allowed');
  }
  public set sqlRedirectAllowed(value: boolean | cdktn.IResolvable) {
    this._sqlRedirectAllowed = value;
  }
  public resetSqlRedirectAllowed() {
    this._sqlRedirectAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlRedirectAllowedInput() {
    return this._sqlRedirectAllowed;
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

  // threat_intelligence_mode - computed: false, optional: true, required: false
  private _threatIntelligenceMode?: string; 
  public get threatIntelligenceMode() {
    return this.getStringAttribute('threat_intelligence_mode');
  }
  public set threatIntelligenceMode(value: string) {
    this._threatIntelligenceMode = value;
  }
  public resetThreatIntelligenceMode() {
    this._threatIntelligenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceModeInput() {
    return this._threatIntelligenceMode;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new FirewallPolicyDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: FirewallPolicyDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // explicit_proxy - computed: false, optional: true, required: false
  private _explicitProxy = new FirewallPolicyExplicitProxyOutputReference(this, "explicit_proxy");
  public get explicitProxy() {
    return this._explicitProxy;
  }
  public putExplicitProxy(value: FirewallPolicyExplicitProxy) {
    this._explicitProxy.internalValue = value;
  }
  public resetExplicitProxy() {
    this._explicitProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitProxyInput() {
    return this._explicitProxy.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new FirewallPolicyIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: FirewallPolicyIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // insights - computed: false, optional: true, required: false
  private _insights = new FirewallPolicyInsightsOutputReference(this, "insights");
  public get insights() {
    return this._insights;
  }
  public putInsights(value: FirewallPolicyInsights) {
    this._insights.internalValue = value;
  }
  public resetInsights() {
    this._insights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsInput() {
    return this._insights.internalValue;
  }

  // intrusion_detection - computed: false, optional: true, required: false
  private _intrusionDetection = new FirewallPolicyIntrusionDetectionOutputReference(this, "intrusion_detection");
  public get intrusionDetection() {
    return this._intrusionDetection;
  }
  public putIntrusionDetection(value: FirewallPolicyIntrusionDetection) {
    this._intrusionDetection.internalValue = value;
  }
  public resetIntrusionDetection() {
    this._intrusionDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionDetectionInput() {
    return this._intrusionDetection.internalValue;
  }

  // threat_intelligence_allowlist - computed: false, optional: true, required: false
  private _threatIntelligenceAllowlist = new FirewallPolicyThreatIntelligenceAllowlistStructOutputReference(this, "threat_intelligence_allowlist");
  public get threatIntelligenceAllowlist() {
    return this._threatIntelligenceAllowlist;
  }
  public putThreatIntelligenceAllowlist(value: FirewallPolicyThreatIntelligenceAllowlistStruct) {
    this._threatIntelligenceAllowlist.internalValue = value;
  }
  public resetThreatIntelligenceAllowlist() {
    this._threatIntelligenceAllowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceAllowlistInput() {
    return this._threatIntelligenceAllowlist.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FirewallPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FirewallPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_certificate - computed: false, optional: true, required: false
  private _tlsCertificate = new FirewallPolicyTlsCertificateOutputReference(this, "tls_certificate");
  public get tlsCertificate() {
    return this._tlsCertificate;
  }
  public putTlsCertificate(value: FirewallPolicyTlsCertificate) {
    this._tlsCertificate.internalValue = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_learn_private_ranges_enabled: cdktn.booleanToTerraform(this._autoLearnPrivateRangesEnabled),
      base_policy_id: cdktn.stringToTerraform(this._basePolicyId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      private_ip_ranges: cdktn.listMapper(cdktn.stringToTerraform, false)(this._privateIpRanges),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      sku: cdktn.stringToTerraform(this._sku),
      sql_redirect_allowed: cdktn.booleanToTerraform(this._sqlRedirectAllowed),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      threat_intelligence_mode: cdktn.stringToTerraform(this._threatIntelligenceMode),
      dns: firewallPolicyDnsToTerraform(this._dns.internalValue),
      explicit_proxy: firewallPolicyExplicitProxyToTerraform(this._explicitProxy.internalValue),
      identity: firewallPolicyIdentityToTerraform(this._identity.internalValue),
      insights: firewallPolicyInsightsToTerraform(this._insights.internalValue),
      intrusion_detection: firewallPolicyIntrusionDetectionToTerraform(this._intrusionDetection.internalValue),
      threat_intelligence_allowlist: firewallPolicyThreatIntelligenceAllowlistStructToTerraform(this._threatIntelligenceAllowlist.internalValue),
      timeouts: firewallPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      tls_certificate: firewallPolicyTlsCertificateToTerraform(this._tlsCertificate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_learn_private_ranges_enabled: {
        value: cdktn.booleanToHclTerraform(this._autoLearnPrivateRangesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_policy_id: {
        value: cdktn.stringToHclTerraform(this._basePolicyId),
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
      private_ip_ranges: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._privateIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku: {
        value: cdktn.stringToHclTerraform(this._sku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_redirect_allowed: {
        value: cdktn.booleanToHclTerraform(this._sqlRedirectAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      threat_intelligence_mode: {
        value: cdktn.stringToHclTerraform(this._threatIntelligenceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: firewallPolicyDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyDnsList",
      },
      explicit_proxy: {
        value: firewallPolicyExplicitProxyToHclTerraform(this._explicitProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyExplicitProxyList",
      },
      identity: {
        value: firewallPolicyIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyIdentityList",
      },
      insights: {
        value: firewallPolicyInsightsToHclTerraform(this._insights.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyInsightsList",
      },
      intrusion_detection: {
        value: firewallPolicyIntrusionDetectionToHclTerraform(this._intrusionDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyIntrusionDetectionList",
      },
      threat_intelligence_allowlist: {
        value: firewallPolicyThreatIntelligenceAllowlistStructToHclTerraform(this._threatIntelligenceAllowlist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyThreatIntelligenceAllowlistStructList",
      },
      timeouts: {
        value: firewallPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallPolicyTimeouts",
      },
      tls_certificate: {
        value: firewallPolicyTlsCertificateToHclTerraform(this._tlsCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallPolicyTlsCertificateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
