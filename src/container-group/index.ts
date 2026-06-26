/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ContainerGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#dns_name_label ContainerGroup#dns_name_label}
  */
  readonly dnsNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#dns_name_label_reuse_policy ContainerGroup#dns_name_label_reuse_policy}
  */
  readonly dnsNameLabelReusePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#exposed_port ContainerGroup#exposed_port}
  */
  readonly exposedPort?: ContainerGroupExposedPort[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#id ContainerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#ip_address_type ContainerGroup#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#key_vault_key_id ContainerGroup#key_vault_key_id}
  */
  readonly keyVaultKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#key_vault_user_assigned_identity_id ContainerGroup#key_vault_user_assigned_identity_id}
  */
  readonly keyVaultUserAssignedIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#location ContainerGroup#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#network_profile_id ContainerGroup#network_profile_id}
  */
  readonly networkProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#os_type ContainerGroup#os_type}
  */
  readonly osType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#priority ContainerGroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#resource_group_name ContainerGroup#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#restart_policy ContainerGroup#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#sku ContainerGroup#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#subnet_ids ContainerGroup#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#tags ContainerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#zones ContainerGroup#zones}
  */
  readonly zones?: string[];
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#container ContainerGroup#container}
  */
  readonly container: ContainerGroupContainer[] | cdktn.IResolvable;
  /**
  * diagnostics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#diagnostics ContainerGroup#diagnostics}
  */
  readonly diagnostics?: ContainerGroupDiagnostics;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#dns_config ContainerGroup#dns_config}
  */
  readonly dnsConfig?: ContainerGroupDnsConfig;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#identity ContainerGroup#identity}
  */
  readonly identity?: ContainerGroupIdentity;
  /**
  * image_registry_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#image_registry_credential ContainerGroup#image_registry_credential}
  */
  readonly imageRegistryCredential?: ContainerGroupImageRegistryCredential[] | cdktn.IResolvable;
  /**
  * init_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#init_container ContainerGroup#init_container}
  */
  readonly initContainer?: ContainerGroupInitContainer[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#timeouts ContainerGroup#timeouts}
  */
  readonly timeouts?: ContainerGroupTimeouts;
}
export interface ContainerGroupExposedPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#protocol ContainerGroup#protocol}
  */
  readonly protocol?: string;
}

export function containerGroupExposedPortToTerraform(struct?: ContainerGroupExposedPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: struct!.port === undefined ? null : cdktn.numberToTerraform(struct!.port),
    protocol: struct!.protocol === undefined ? null : cdktn.stringToTerraform(struct!.protocol),
  }
}


export function containerGroupExposedPortToHclTerraform(struct?: ContainerGroupExposedPort | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: struct!.port === undefined ? null : cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: struct!.protocol === undefined ? null : cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupExposedPortOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupExposedPort | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupExposedPort | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ContainerGroupExposedPortList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupExposedPort[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupExposedPortOutputReference {
    return new ContainerGroupExposedPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#path ContainerGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#scheme ContainerGroup#scheme}
  */
  readonly scheme?: string;
}

export function containerGroupContainerLivenessProbeHttpGetToTerraform(struct?: ContainerGroupContainerLivenessProbeHttpGet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.httpHeaders),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.numberToTerraform(struct!.port),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function containerGroupContainerLivenessProbeHttpGetToHclTerraform(struct?: ContainerGroupContainerLivenessProbeHttpGet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerLivenessProbeHttpGetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupContainerLivenessProbeHttpGet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerLivenessProbeHttpGet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaders = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaders = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // path - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class ContainerGroupContainerLivenessProbeHttpGetList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupContainerLivenessProbeHttpGet[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupContainerLivenessProbeHttpGetOutputReference {
    return new ContainerGroupContainerLivenessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#exec ContainerGroup#exec}
  */
  readonly exec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#http_get ContainerGroup#http_get}
  */
  readonly httpGet?: ContainerGroupContainerLivenessProbeHttpGet[] | cdktn.IResolvable;
}

export function containerGroupContainerLivenessProbeToTerraform(struct?: ContainerGroupContainerLivenessProbeOutputReference | ContainerGroupContainerLivenessProbe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exec: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exec),
    failure_threshold: cdktn.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktn.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktn.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktn.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    http_get: cdktn.listMapper(containerGroupContainerLivenessProbeHttpGetToTerraform, true)(struct!.httpGet),
  }
}


export function containerGroupContainerLivenessProbeToHclTerraform(struct?: ContainerGroupContainerLivenessProbeOutputReference | ContainerGroupContainerLivenessProbe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exec: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exec),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_threshold: {
      value: cdktn.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktn.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktn.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktn.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get: {
      value: cdktn.listMapperHcl(containerGroupContainerLivenessProbeHttpGetToHclTerraform, true)(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupContainerLivenessProbeHttpGetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerLivenessProbeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupContainerLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._httpGet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._httpGet.internalValue = value.httpGet;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string[]; 
  public get exec() {
    return this.getListAttribute('exec');
  }
  public set exec(value: string[]) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new ContainerGroupContainerLivenessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: ContainerGroupContainerLivenessProbeHttpGet[] | cdktn.IResolvable) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }
}
export interface ContainerGroupContainerPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#protocol ContainerGroup#protocol}
  */
  readonly protocol?: string;
}

export function containerGroupContainerPortsToTerraform(struct?: ContainerGroupContainerPorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    port: cdktn.numberToTerraform(struct!.port),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function containerGroupContainerPortsToHclTerraform(struct?: ContainerGroupContainerPorts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktn.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerPortsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupContainerPorts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerPorts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ContainerGroupContainerPortsList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupContainerPorts[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupContainerPortsOutputReference {
    return new ContainerGroupContainerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#http_headers ContainerGroup#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#path ContainerGroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#port ContainerGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#scheme ContainerGroup#scheme}
  */
  readonly scheme?: string;
}

export function containerGroupContainerReadinessProbeHttpGetToTerraform(struct?: ContainerGroupContainerReadinessProbeHttpGet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.httpHeaders),
    path: cdktn.stringToTerraform(struct!.path),
    port: cdktn.numberToTerraform(struct!.port),
    scheme: cdktn.stringToTerraform(struct!.scheme),
  }
}


export function containerGroupContainerReadinessProbeHttpGetToHclTerraform(struct?: ContainerGroupContainerReadinessProbeHttpGet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    scheme: {
      value: cdktn.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerReadinessProbeHttpGetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupContainerReadinessProbeHttpGet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerReadinessProbeHttpGet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaders = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaders = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // path - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class ContainerGroupContainerReadinessProbeHttpGetList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupContainerReadinessProbeHttpGet[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupContainerReadinessProbeHttpGetOutputReference {
    return new ContainerGroupContainerReadinessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#exec ContainerGroup#exec}
  */
  readonly exec?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#failure_threshold ContainerGroup#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#initial_delay_seconds ContainerGroup#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#period_seconds ContainerGroup#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#success_threshold ContainerGroup#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#timeout_seconds ContainerGroup#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#http_get ContainerGroup#http_get}
  */
  readonly httpGet?: ContainerGroupContainerReadinessProbeHttpGet[] | cdktn.IResolvable;
}

export function containerGroupContainerReadinessProbeToTerraform(struct?: ContainerGroupContainerReadinessProbeOutputReference | ContainerGroupContainerReadinessProbe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exec: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exec),
    failure_threshold: cdktn.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktn.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktn.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktn.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    http_get: cdktn.listMapper(containerGroupContainerReadinessProbeHttpGetToTerraform, true)(struct!.httpGet),
  }
}


export function containerGroupContainerReadinessProbeToHclTerraform(struct?: ContainerGroupContainerReadinessProbeOutputReference | ContainerGroupContainerReadinessProbe): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exec: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exec),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failure_threshold: {
      value: cdktn.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktn.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktn.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktn.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get: {
      value: cdktn.listMapperHcl(containerGroupContainerReadinessProbeHttpGetToHclTerraform, true)(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupContainerReadinessProbeHttpGetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerReadinessProbeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupContainerReadinessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerReadinessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exec = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._httpGet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exec = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._httpGet.internalValue = value.httpGet;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: string[]; 
  public get exec() {
    return this.getListAttribute('exec');
  }
  public set exec(value: string[]) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new ContainerGroupContainerReadinessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: ContainerGroupContainerReadinessProbeHttpGet[] | cdktn.IResolvable) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }
}
export interface ContainerGroupContainerSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}
  */
  readonly privilegeEnabled: boolean | cdktn.IResolvable;
}

export function containerGroupContainerSecurityToTerraform(struct?: ContainerGroupContainerSecurity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    privilege_enabled: cdktn.booleanToTerraform(struct!.privilegeEnabled),
  }
}


export function containerGroupContainerSecurityToHclTerraform(struct?: ContainerGroupContainerSecurity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    privilege_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.privilegeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerSecurityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupContainerSecurity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privilegeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeEnabled = this._privilegeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerSecurity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privilegeEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privilegeEnabled = value.privilegeEnabled;
    }
  }

  // privilege_enabled - computed: false, optional: false, required: true
  private _privilegeEnabled?: boolean | cdktn.IResolvable; 
  public get privilegeEnabled() {
    return this.getBooleanAttribute('privilege_enabled');
  }
  public set privilegeEnabled(value: boolean | cdktn.IResolvable) {
    this._privilegeEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeEnabledInput() {
    return this._privilegeEnabled;
  }
}

export class ContainerGroupContainerSecurityList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupContainerSecurity[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupContainerSecurityOutputReference {
    return new ContainerGroupContainerSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainerVolumeGitRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#directory ContainerGroup#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#revision ContainerGroup#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#url ContainerGroup#url}
  */
  readonly url: string;
}

export function containerGroupContainerVolumeGitRepoToTerraform(struct?: ContainerGroupContainerVolumeGitRepoOutputReference | ContainerGroupContainerVolumeGitRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory: cdktn.stringToTerraform(struct!.directory),
    revision: cdktn.stringToTerraform(struct!.revision),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function containerGroupContainerVolumeGitRepoToHclTerraform(struct?: ContainerGroupContainerVolumeGitRepoOutputReference | ContainerGroupContainerVolumeGitRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory: {
      value: cdktn.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktn.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerVolumeGitRepoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupContainerVolumeGitRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerVolumeGitRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
      this._revision = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
      this._revision = value.revision;
      this._url = value.url;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ContainerGroupContainerVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}
  */
  readonly emptyDir?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#read_only ContainerGroup#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#secret ContainerGroup#secret}
  */
  readonly secret?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#share_name ContainerGroup#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}
  */
  readonly storageAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * git_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}
  */
  readonly gitRepo?: ContainerGroupContainerVolumeGitRepo;
}

export function containerGroupContainerVolumeToTerraform(struct?: ContainerGroupContainerVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    empty_dir: cdktn.booleanToTerraform(struct!.emptyDir),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
    name: cdktn.stringToTerraform(struct!.name),
    read_only: cdktn.booleanToTerraform(struct!.readOnly),
    secret: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.secret),
    share_name: cdktn.stringToTerraform(struct!.shareName),
    storage_account_key: cdktn.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktn.stringToTerraform(struct!.storageAccountName),
    git_repo: containerGroupContainerVolumeGitRepoToTerraform(struct!.gitRepo),
  }
}


export function containerGroupContainerVolumeToHclTerraform(struct?: ContainerGroupContainerVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    empty_dir: {
      value: cdktn.booleanToHclTerraform(struct!.emptyDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
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
    read_only: {
      value: cdktn.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.secret),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    share_name: {
      value: cdktn.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_key: {
      value: cdktn.stringToHclTerraform(struct!.storageAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktn.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_repo: {
      value: containerGroupContainerVolumeGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupContainerVolumeGitRepoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerVolumeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupContainerVolume | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emptyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._storageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountKey = this._storageAccountKey;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainerVolume | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emptyDir = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._secret = undefined;
      this._shareName = undefined;
      this._storageAccountKey = undefined;
      this._storageAccountName = undefined;
      this._gitRepo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emptyDir = value.emptyDir;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._secret = value.secret;
      this._shareName = value.shareName;
      this._storageAccountKey = value.storageAccountKey;
      this._storageAccountName = value.storageAccountName;
      this._gitRepo.internalValue = value.gitRepo;
    }
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir?: boolean | cdktn.IResolvable; 
  public get emptyDir() {
    return this.getBooleanAttribute('empty_dir');
  }
  public set emptyDir(value: boolean | cdktn.IResolvable) {
    this._emptyDir = value;
  }
  public resetEmptyDir() {
    this._emptyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: { [key: string]: string }; 
  public get secret() {
    return this.getStringMapAttribute('secret');
  }
  public set secret(value: { [key: string]: string }) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // storage_account_key - computed: false, optional: true, required: false
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  public resetStorageAccountKey() {
    this._storageAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new ContainerGroupContainerVolumeGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: ContainerGroupContainerVolumeGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }
}

export class ContainerGroupContainerVolumeList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupContainerVolume[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupContainerVolumeOutputReference {
    return new ContainerGroupContainerVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#commands ContainerGroup#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#cpu ContainerGroup#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#cpu_limit ContainerGroup#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#image ContainerGroup#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#memory ContainerGroup#memory}
  */
  readonly memory: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#memory_limit ContainerGroup#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}
  */
  readonly secureEnvironmentVariables?: { [key: string]: string };
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#liveness_probe ContainerGroup#liveness_probe}
  */
  readonly livenessProbe?: ContainerGroupContainerLivenessProbe;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#ports ContainerGroup#ports}
  */
  readonly ports?: ContainerGroupContainerPorts[] | cdktn.IResolvable;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#readiness_probe ContainerGroup#readiness_probe}
  */
  readonly readinessProbe?: ContainerGroupContainerReadinessProbe;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#security ContainerGroup#security}
  */
  readonly security?: ContainerGroupContainerSecurity[] | cdktn.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#volume ContainerGroup#volume}
  */
  readonly volume?: ContainerGroupContainerVolume[] | cdktn.IResolvable;
}

export function containerGroupContainerToTerraform(struct?: ContainerGroupContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    cpu: cdktn.numberToTerraform(struct!.cpu),
    cpu_limit: cdktn.numberToTerraform(struct!.cpuLimit),
    environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
    image: cdktn.stringToTerraform(struct!.image),
    memory: cdktn.numberToTerraform(struct!.memory),
    memory_limit: cdktn.numberToTerraform(struct!.memoryLimit),
    name: cdktn.stringToTerraform(struct!.name),
    secure_environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.secureEnvironmentVariables),
    liveness_probe: containerGroupContainerLivenessProbeToTerraform(struct!.livenessProbe),
    ports: cdktn.listMapper(containerGroupContainerPortsToTerraform, true)(struct!.ports),
    readiness_probe: containerGroupContainerReadinessProbeToTerraform(struct!.readinessProbe),
    security: cdktn.listMapper(containerGroupContainerSecurityToTerraform, true)(struct!.security),
    volume: cdktn.listMapper(containerGroupContainerVolumeToTerraform, true)(struct!.volume),
  }
}


export function containerGroupContainerToHclTerraform(struct?: ContainerGroupContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
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
    cpu_limit: {
      value: cdktn.numberToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktn.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit: {
      value: cdktn.numberToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.secureEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    liveness_probe: {
      value: containerGroupContainerLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupContainerLivenessProbeList",
    },
    ports: {
      value: cdktn.listMapperHcl(containerGroupContainerPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerGroupContainerPortsList",
    },
    readiness_probe: {
      value: containerGroupContainerReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupContainerReadinessProbeList",
    },
    security: {
      value: cdktn.listMapperHcl(containerGroupContainerSecurityToHclTerraform, true)(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupContainerSecurityList",
    },
    volume: {
      value: cdktn.listMapperHcl(containerGroupContainerVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupContainerVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupContainerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secureEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureEnvironmentVariables = this._secureEnvironmentVariables;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._cpu = undefined;
      this._cpuLimit = undefined;
      this._environmentVariables = undefined;
      this._image = undefined;
      this._memory = undefined;
      this._memoryLimit = undefined;
      this._name = undefined;
      this._secureEnvironmentVariables = undefined;
      this._livenessProbe.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._security.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._cpu = value.cpu;
      this._cpuLimit = value.cpuLimit;
      this._environmentVariables = value.environmentVariables;
      this._image = value.image;
      this._memory = value.memory;
      this._memoryLimit = value.memoryLimit;
      this._name = value.name;
      this._secureEnvironmentVariables = value.secureEnvironmentVariables;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._ports.internalValue = value.ports;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._security.internalValue = value.security;
      this._volume.internalValue = value.volume;
    }
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
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

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
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
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
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

  // secure_environment_variables - computed: false, optional: true, required: false
  private _secureEnvironmentVariables?: { [key: string]: string }; 
  public get secureEnvironmentVariables() {
    return this.getStringMapAttribute('secure_environment_variables');
  }
  public set secureEnvironmentVariables(value: { [key: string]: string }) {
    this._secureEnvironmentVariables = value;
  }
  public resetSecureEnvironmentVariables() {
    this._secureEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureEnvironmentVariablesInput() {
    return this._secureEnvironmentVariables;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new ContainerGroupContainerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: ContainerGroupContainerLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new ContainerGroupContainerPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: ContainerGroupContainerPorts[] | cdktn.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new ContainerGroupContainerReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: ContainerGroupContainerReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ContainerGroupContainerSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }
  public putSecurity(value: ContainerGroupContainerSecurity[] | cdktn.IResolvable) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new ContainerGroupContainerVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ContainerGroupContainerVolume[] | cdktn.IResolvable) {
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

export class ContainerGroupContainerList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupContainer[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupContainerOutputReference {
    return new ContainerGroupContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupDiagnosticsLogAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#log_type ContainerGroup#log_type}
  */
  readonly logType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#metadata ContainerGroup#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#workspace_id ContainerGroup#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#workspace_key ContainerGroup#workspace_key}
  */
  readonly workspaceKey: string;
}

export function containerGroupDiagnosticsLogAnalyticsToTerraform(struct?: ContainerGroupDiagnosticsLogAnalyticsOutputReference | ContainerGroupDiagnosticsLogAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_type: cdktn.stringToTerraform(struct!.logType),
    metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.metadata),
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
    workspace_key: cdktn.stringToTerraform(struct!.workspaceKey),
  }
}


export function containerGroupDiagnosticsLogAnalyticsToHclTerraform(struct?: ContainerGroupDiagnosticsLogAnalyticsOutputReference | ContainerGroupDiagnosticsLogAnalytics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
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
    workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_key: {
      value: cdktn.stringToHclTerraform(struct!.workspaceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupDiagnosticsLogAnalyticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupDiagnosticsLogAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    if (this._workspaceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceKey = this._workspaceKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupDiagnosticsLogAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logType = undefined;
      this._metadata = undefined;
      this._workspaceId = undefined;
      this._workspaceKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logType = value.logType;
      this._metadata = value.metadata;
      this._workspaceId = value.workspaceId;
      this._workspaceKey = value.workspaceKey;
    }
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // workspace_key - computed: false, optional: false, required: true
  private _workspaceKey?: string; 
  public get workspaceKey() {
    return this.getStringAttribute('workspace_key');
  }
  public set workspaceKey(value: string) {
    this._workspaceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceKeyInput() {
    return this._workspaceKey;
  }
}
export interface ContainerGroupDiagnostics {
  /**
  * log_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#log_analytics ContainerGroup#log_analytics}
  */
  readonly logAnalytics: ContainerGroupDiagnosticsLogAnalytics;
}

export function containerGroupDiagnosticsToTerraform(struct?: ContainerGroupDiagnosticsOutputReference | ContainerGroupDiagnostics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    log_analytics: containerGroupDiagnosticsLogAnalyticsToTerraform(struct!.logAnalytics),
  }
}


export function containerGroupDiagnosticsToHclTerraform(struct?: ContainerGroupDiagnosticsOutputReference | ContainerGroupDiagnostics): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    log_analytics: {
      value: containerGroupDiagnosticsLogAnalyticsToHclTerraform(struct!.logAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupDiagnosticsLogAnalyticsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupDiagnosticsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupDiagnostics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalytics = this._logAnalytics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupDiagnostics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalytics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalytics.internalValue = value.logAnalytics;
    }
  }

  // log_analytics - computed: false, optional: false, required: true
  private _logAnalytics = new ContainerGroupDiagnosticsLogAnalyticsOutputReference(this, "log_analytics");
  public get logAnalytics() {
    return this._logAnalytics;
  }
  public putLogAnalytics(value: ContainerGroupDiagnosticsLogAnalytics) {
    this._logAnalytics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInput() {
    return this._logAnalytics.internalValue;
  }
}
export interface ContainerGroupDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#nameservers ContainerGroup#nameservers}
  */
  readonly nameservers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#options ContainerGroup#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#search_domains ContainerGroup#search_domains}
  */
  readonly searchDomains?: string[];
}

export function containerGroupDnsConfigToTerraform(struct?: ContainerGroupDnsConfigOutputReference | ContainerGroupDnsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    nameservers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.nameservers),
    options: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.options),
    search_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.searchDomains),
  }
}


export function containerGroupDnsConfigToHclTerraform(struct?: ContainerGroupDnsConfigOutputReference | ContainerGroupDnsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    nameservers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    search_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.searchDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupDnsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._searchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomains = this._searchDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameservers = undefined;
      this._options = undefined;
      this._searchDomains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameservers = value.nameservers;
      this._options = value.options;
      this._searchDomains = value.searchDomains;
    }
  }

  // nameservers - computed: false, optional: false, required: true
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktn.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // search_domains - computed: false, optional: true, required: false
  private _searchDomains?: string[]; 
  public get searchDomains() {
    return cdktn.Fn.tolist(this.getListAttribute('search_domains'));
  }
  public set searchDomains(value: string[]) {
    this._searchDomains = value;
  }
  public resetSearchDomains() {
    this._searchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains;
  }
}
export interface ContainerGroupIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#identity_ids ContainerGroup#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#type ContainerGroup#type}
  */
  readonly type: string;
}

export function containerGroupIdentityToTerraform(struct?: ContainerGroupIdentityOutputReference | ContainerGroupIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function containerGroupIdentityToHclTerraform(struct?: ContainerGroupIdentityOutputReference | ContainerGroupIdentity): any {
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

export class ContainerGroupIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupIdentity | undefined {
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

  public set internalValue(value: ContainerGroupIdentity | undefined) {
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
export interface ContainerGroupImageRegistryCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#password ContainerGroup#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#server ContainerGroup#server}
  */
  readonly server: string;
  /**
  * The User Assigned Identity to use for Container Registry access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#user_assigned_identity_id ContainerGroup#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#username ContainerGroup#username}
  */
  readonly username?: string;
}

export function containerGroupImageRegistryCredentialToTerraform(struct?: ContainerGroupImageRegistryCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password: cdktn.stringToTerraform(struct!.password),
    server: cdktn.stringToTerraform(struct!.server),
    user_assigned_identity_id: cdktn.stringToTerraform(struct!.userAssignedIdentityId),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function containerGroupImageRegistryCredentialToHclTerraform(struct?: ContainerGroupImageRegistryCredential | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
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
    user_assigned_identity_id: {
      value: cdktn.stringToHclTerraform(struct!.userAssignedIdentityId),
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

export class ContainerGroupImageRegistryCredentialOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupImageRegistryCredential | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupImageRegistryCredential | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._server = undefined;
      this._userAssignedIdentityId = undefined;
      this._username = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._server = value.server;
      this._userAssignedIdentityId = value.userAssignedIdentityId;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
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

export class ContainerGroupImageRegistryCredentialList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupImageRegistryCredential[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupImageRegistryCredentialOutputReference {
    return new ContainerGroupImageRegistryCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupInitContainerSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#privilege_enabled ContainerGroup#privilege_enabled}
  */
  readonly privilegeEnabled: boolean | cdktn.IResolvable;
}

export function containerGroupInitContainerSecurityToTerraform(struct?: ContainerGroupInitContainerSecurity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    privilege_enabled: cdktn.booleanToTerraform(struct!.privilegeEnabled),
  }
}


export function containerGroupInitContainerSecurityToHclTerraform(struct?: ContainerGroupInitContainerSecurity | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    privilege_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.privilegeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupInitContainerSecurityOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupInitContainerSecurity | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privilegeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeEnabled = this._privilegeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupInitContainerSecurity | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privilegeEnabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privilegeEnabled = value.privilegeEnabled;
    }
  }

  // privilege_enabled - computed: false, optional: false, required: true
  private _privilegeEnabled?: boolean | cdktn.IResolvable; 
  public get privilegeEnabled() {
    return this.getBooleanAttribute('privilege_enabled');
  }
  public set privilegeEnabled(value: boolean | cdktn.IResolvable) {
    this._privilegeEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeEnabledInput() {
    return this._privilegeEnabled;
  }
}

export class ContainerGroupInitContainerSecurityList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupInitContainerSecurity[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupInitContainerSecurityOutputReference {
    return new ContainerGroupInitContainerSecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupInitContainerVolumeGitRepo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#directory ContainerGroup#directory}
  */
  readonly directory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#revision ContainerGroup#revision}
  */
  readonly revision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#url ContainerGroup#url}
  */
  readonly url: string;
}

export function containerGroupInitContainerVolumeGitRepoToTerraform(struct?: ContainerGroupInitContainerVolumeGitRepoOutputReference | ContainerGroupInitContainerVolumeGitRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory: cdktn.stringToTerraform(struct!.directory),
    revision: cdktn.stringToTerraform(struct!.revision),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function containerGroupInitContainerVolumeGitRepoToHclTerraform(struct?: ContainerGroupInitContainerVolumeGitRepoOutputReference | ContainerGroupInitContainerVolumeGitRepo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory: {
      value: cdktn.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktn.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupInitContainerVolumeGitRepoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerGroupInitContainerVolumeGitRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupInitContainerVolumeGitRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directory = undefined;
      this._revision = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directory = value.directory;
      this._revision = value.revision;
      this._url = value.url;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ContainerGroupInitContainerVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#empty_dir ContainerGroup#empty_dir}
  */
  readonly emptyDir?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#mount_path ContainerGroup#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#read_only ContainerGroup#read_only}
  */
  readonly readOnly?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#secret ContainerGroup#secret}
  */
  readonly secret?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#share_name ContainerGroup#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#storage_account_key ContainerGroup#storage_account_key}
  */
  readonly storageAccountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#storage_account_name ContainerGroup#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * git_repo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#git_repo ContainerGroup#git_repo}
  */
  readonly gitRepo?: ContainerGroupInitContainerVolumeGitRepo;
}

export function containerGroupInitContainerVolumeToTerraform(struct?: ContainerGroupInitContainerVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    empty_dir: cdktn.booleanToTerraform(struct!.emptyDir),
    mount_path: cdktn.stringToTerraform(struct!.mountPath),
    name: cdktn.stringToTerraform(struct!.name),
    read_only: cdktn.booleanToTerraform(struct!.readOnly),
    secret: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.secret),
    share_name: cdktn.stringToTerraform(struct!.shareName),
    storage_account_key: cdktn.stringToTerraform(struct!.storageAccountKey),
    storage_account_name: cdktn.stringToTerraform(struct!.storageAccountName),
    git_repo: containerGroupInitContainerVolumeGitRepoToTerraform(struct!.gitRepo),
  }
}


export function containerGroupInitContainerVolumeToHclTerraform(struct?: ContainerGroupInitContainerVolume | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    empty_dir: {
      value: cdktn.booleanToHclTerraform(struct!.emptyDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktn.stringToHclTerraform(struct!.mountPath),
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
    read_only: {
      value: cdktn.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.secret),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    share_name: {
      value: cdktn.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_key: {
      value: cdktn.stringToHclTerraform(struct!.storageAccountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktn.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_repo: {
      value: containerGroupInitContainerVolumeGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupInitContainerVolumeGitRepoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupInitContainerVolumeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupInitContainerVolume | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emptyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._storageAccountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountKey = this._storageAccountKey;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupInitContainerVolume | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emptyDir = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._secret = undefined;
      this._shareName = undefined;
      this._storageAccountKey = undefined;
      this._storageAccountName = undefined;
      this._gitRepo.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emptyDir = value.emptyDir;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._secret = value.secret;
      this._shareName = value.shareName;
      this._storageAccountKey = value.storageAccountKey;
      this._storageAccountName = value.storageAccountName;
      this._gitRepo.internalValue = value.gitRepo;
    }
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir?: boolean | cdktn.IResolvable; 
  public get emptyDir() {
    return this.getBooleanAttribute('empty_dir');
  }
  public set emptyDir(value: boolean | cdktn.IResolvable) {
    this._emptyDir = value;
  }
  public resetEmptyDir() {
    this._emptyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir;
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktn.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktn.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: { [key: string]: string }; 
  public get secret() {
    return this.getStringMapAttribute('secret');
  }
  public set secret(value: { [key: string]: string }) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // storage_account_key - computed: false, optional: true, required: false
  private _storageAccountKey?: string; 
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  public resetStorageAccountKey() {
    this._storageAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new ContainerGroupInitContainerVolumeGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: ContainerGroupInitContainerVolumeGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }
}

export class ContainerGroupInitContainerVolumeList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupInitContainerVolume[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupInitContainerVolumeOutputReference {
    return new ContainerGroupInitContainerVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupInitContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#commands ContainerGroup#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#environment_variables ContainerGroup#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#image ContainerGroup#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#name ContainerGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#secure_environment_variables ContainerGroup#secure_environment_variables}
  */
  readonly secureEnvironmentVariables?: { [key: string]: string };
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#security ContainerGroup#security}
  */
  readonly security?: ContainerGroupInitContainerSecurity[] | cdktn.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#volume ContainerGroup#volume}
  */
  readonly volume?: ContainerGroupInitContainerVolume[] | cdktn.IResolvable;
}

export function containerGroupInitContainerToTerraform(struct?: ContainerGroupInitContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    commands: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.commands),
    environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
    image: cdktn.stringToTerraform(struct!.image),
    name: cdktn.stringToTerraform(struct!.name),
    secure_environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.secureEnvironmentVariables),
    security: cdktn.listMapper(containerGroupInitContainerSecurityToTerraform, true)(struct!.security),
    volume: cdktn.listMapper(containerGroupInitContainerVolumeToTerraform, true)(struct!.volume),
  }
}


export function containerGroupInitContainerToHclTerraform(struct?: ContainerGroupInitContainer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    commands: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktn.stringToHclTerraform(struct!.image),
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
    secure_environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.secureEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    security: {
      value: cdktn.listMapperHcl(containerGroupInitContainerSecurityToHclTerraform, true)(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupInitContainerSecurityList",
    },
    volume: {
      value: cdktn.listMapperHcl(containerGroupInitContainerVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerGroupInitContainerVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerGroupInitContainerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ContainerGroupInitContainer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secureEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureEnvironmentVariables = this._secureEnvironmentVariables;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerGroupInitContainer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._environmentVariables = undefined;
      this._image = undefined;
      this._name = undefined;
      this._secureEnvironmentVariables = undefined;
      this._security.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._environmentVariables = value.environmentVariables;
      this._image = value.image;
      this._name = value.name;
      this._secureEnvironmentVariables = value.secureEnvironmentVariables;
      this._security.internalValue = value.security;
      this._volume.internalValue = value.volume;
    }
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
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

  // secure_environment_variables - computed: false, optional: true, required: false
  private _secureEnvironmentVariables?: { [key: string]: string }; 
  public get secureEnvironmentVariables() {
    return this.getStringMapAttribute('secure_environment_variables');
  }
  public set secureEnvironmentVariables(value: { [key: string]: string }) {
    this._secureEnvironmentVariables = value;
  }
  public resetSecureEnvironmentVariables() {
    this._secureEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureEnvironmentVariablesInput() {
    return this._secureEnvironmentVariables;
  }

  // security - computed: false, optional: true, required: false
  private _security = new ContainerGroupInitContainerSecurityList(this, "security", false);
  public get security() {
    return this._security;
  }
  public putSecurity(value: ContainerGroupInitContainerSecurity[] | cdktn.IResolvable) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new ContainerGroupInitContainerVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ContainerGroupInitContainerVolume[] | cdktn.IResolvable) {
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

export class ContainerGroupInitContainerList extends cdktn.ComplexList {
  public internalValue? : ContainerGroupInitContainer[] | cdktn.IResolvable

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
  public get(index: number): ContainerGroupInitContainerOutputReference {
    return new ContainerGroupInitContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#create ContainerGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#delete ContainerGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#read ContainerGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#update ContainerGroup#update}
  */
  readonly update?: string;
}

export function containerGroupTimeoutsToTerraform(struct?: ContainerGroupTimeouts | cdktn.IResolvable): any {
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


export function containerGroupTimeoutsToHclTerraform(struct?: ContainerGroupTimeouts | cdktn.IResolvable): any {
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

export class ContainerGroupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerGroupTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ContainerGroupTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group azurerm_container_group}
*/
export class ContainerGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ContainerGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerGroup to import
  * @param importFromId The id of the existing ContainerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_container_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/container_group azurerm_container_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_group',
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
    this._dnsNameLabel = config.dnsNameLabel;
    this._dnsNameLabelReusePolicy = config.dnsNameLabelReusePolicy;
    this._exposedPort.internalValue = config.exposedPort;
    this._id = config.id;
    this._ipAddressType = config.ipAddressType;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._keyVaultUserAssignedIdentityId = config.keyVaultUserAssignedIdentityId;
    this._location = config.location;
    this._name = config.name;
    this._networkProfileId = config.networkProfileId;
    this._osType = config.osType;
    this._priority = config.priority;
    this._resourceGroupName = config.resourceGroupName;
    this._restartPolicy = config.restartPolicy;
    this._sku = config.sku;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._zones = config.zones;
    this._container.internalValue = config.container;
    this._diagnostics.internalValue = config.diagnostics;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._identity.internalValue = config.identity;
    this._imageRegistryCredential.internalValue = config.imageRegistryCredential;
    this._initContainer.internalValue = config.initContainer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name_label - computed: false, optional: true, required: false
  private _dnsNameLabel?: string; 
  public get dnsNameLabel() {
    return this.getStringAttribute('dns_name_label');
  }
  public set dnsNameLabel(value: string) {
    this._dnsNameLabel = value;
  }
  public resetDnsNameLabel() {
    this._dnsNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameLabelInput() {
    return this._dnsNameLabel;
  }

  // dns_name_label_reuse_policy - computed: false, optional: true, required: false
  private _dnsNameLabelReusePolicy?: string; 
  public get dnsNameLabelReusePolicy() {
    return this.getStringAttribute('dns_name_label_reuse_policy');
  }
  public set dnsNameLabelReusePolicy(value: string) {
    this._dnsNameLabelReusePolicy = value;
  }
  public resetDnsNameLabelReusePolicy() {
    this._dnsNameLabelReusePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameLabelReusePolicyInput() {
    return this._dnsNameLabelReusePolicy;
  }

  // exposed_port - computed: true, optional: true, required: false
  private _exposedPort = new ContainerGroupExposedPortList(this, "exposed_port", true);
  public get exposedPort() {
    return this._exposedPort;
  }
  public putExposedPort(value: ContainerGroupExposedPort[] | cdktn.IResolvable) {
    this._exposedPort.internalValue = value;
  }
  public resetExposedPort() {
    this._exposedPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedPortInput() {
    return this._exposedPort.internalValue;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }

  // key_vault_user_assigned_identity_id - computed: false, optional: true, required: false
  private _keyVaultUserAssignedIdentityId?: string; 
  public get keyVaultUserAssignedIdentityId() {
    return this.getStringAttribute('key_vault_user_assigned_identity_id');
  }
  public set keyVaultUserAssignedIdentityId(value: string) {
    this._keyVaultUserAssignedIdentityId = value;
  }
  public resetKeyVaultUserAssignedIdentityId() {
    this._keyVaultUserAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultUserAssignedIdentityIdInput() {
    return this._keyVaultUserAssignedIdentityId;
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

  // network_profile_id - computed: true, optional: true, required: false
  private _networkProfileId?: string; 
  public get networkProfileId() {
    return this.getStringAttribute('network_profile_id');
  }
  public set networkProfileId(value: string) {
    this._networkProfileId = value;
  }
  public resetNetworkProfileId() {
    this._networkProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileIdInput() {
    return this._networkProfileId;
  }

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
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

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktn.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return cdktn.Fn.tolist(this.getListAttribute('zones'));
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // container - computed: false, optional: false, required: true
  private _container = new ContainerGroupContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: ContainerGroupContainer[] | cdktn.IResolvable) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // diagnostics - computed: false, optional: true, required: false
  private _diagnostics = new ContainerGroupDiagnosticsOutputReference(this, "diagnostics");
  public get diagnostics() {
    return this._diagnostics;
  }
  public putDiagnostics(value: ContainerGroupDiagnostics) {
    this._diagnostics.internalValue = value;
  }
  public resetDiagnostics() {
    this._diagnostics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsInput() {
    return this._diagnostics.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new ContainerGroupDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: ContainerGroupDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new ContainerGroupIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ContainerGroupIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // image_registry_credential - computed: false, optional: true, required: false
  private _imageRegistryCredential = new ContainerGroupImageRegistryCredentialList(this, "image_registry_credential", false);
  public get imageRegistryCredential() {
    return this._imageRegistryCredential;
  }
  public putImageRegistryCredential(value: ContainerGroupImageRegistryCredential[] | cdktn.IResolvable) {
    this._imageRegistryCredential.internalValue = value;
  }
  public resetImageRegistryCredential() {
    this._imageRegistryCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialInput() {
    return this._imageRegistryCredential.internalValue;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer = new ContainerGroupInitContainerList(this, "init_container", false);
  public get initContainer() {
    return this._initContainer;
  }
  public putInitContainer(value: ContainerGroupInitContainer[] | cdktn.IResolvable) {
    this._initContainer.internalValue = value;
  }
  public resetInitContainer() {
    this._initContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerGroupTimeouts) {
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
      dns_name_label: cdktn.stringToTerraform(this._dnsNameLabel),
      dns_name_label_reuse_policy: cdktn.stringToTerraform(this._dnsNameLabelReusePolicy),
      exposed_port: cdktn.listMapper(containerGroupExposedPortToTerraform, false)(this._exposedPort.internalValue),
      id: cdktn.stringToTerraform(this._id),
      ip_address_type: cdktn.stringToTerraform(this._ipAddressType),
      key_vault_key_id: cdktn.stringToTerraform(this._keyVaultKeyId),
      key_vault_user_assigned_identity_id: cdktn.stringToTerraform(this._keyVaultUserAssignedIdentityId),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      network_profile_id: cdktn.stringToTerraform(this._networkProfileId),
      os_type: cdktn.stringToTerraform(this._osType),
      priority: cdktn.stringToTerraform(this._priority),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      restart_policy: cdktn.stringToTerraform(this._restartPolicy),
      sku: cdktn.stringToTerraform(this._sku),
      subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subnetIds),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._zones),
      container: cdktn.listMapper(containerGroupContainerToTerraform, true)(this._container.internalValue),
      diagnostics: containerGroupDiagnosticsToTerraform(this._diagnostics.internalValue),
      dns_config: containerGroupDnsConfigToTerraform(this._dnsConfig.internalValue),
      identity: containerGroupIdentityToTerraform(this._identity.internalValue),
      image_registry_credential: cdktn.listMapper(containerGroupImageRegistryCredentialToTerraform, true)(this._imageRegistryCredential.internalValue),
      init_container: cdktn.listMapper(containerGroupInitContainerToTerraform, true)(this._initContainer.internalValue),
      timeouts: containerGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name_label: {
        value: cdktn.stringToHclTerraform(this._dnsNameLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_name_label_reuse_policy: {
        value: cdktn.stringToHclTerraform(this._dnsNameLabelReusePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exposed_port: {
        value: cdktn.listMapperHcl(containerGroupExposedPortToHclTerraform, false)(this._exposedPort.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ContainerGroupExposedPortList",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_type: {
        value: cdktn.stringToHclTerraform(this._ipAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault_key_id: {
        value: cdktn.stringToHclTerraform(this._keyVaultKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault_user_assigned_identity_id: {
        value: cdktn.stringToHclTerraform(this._keyVaultUserAssignedIdentityId),
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
      network_profile_id: {
        value: cdktn.stringToHclTerraform(this._networkProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktn.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktn.stringToHclTerraform(this._priority),
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
      restart_policy: {
        value: cdktn.stringToHclTerraform(this._restartPolicy),
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
      subnet_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zones: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      container: {
        value: cdktn.listMapperHcl(containerGroupContainerToHclTerraform, true)(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerGroupContainerList",
      },
      diagnostics: {
        value: containerGroupDiagnosticsToHclTerraform(this._diagnostics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerGroupDiagnosticsList",
      },
      dns_config: {
        value: containerGroupDnsConfigToHclTerraform(this._dnsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerGroupDnsConfigList",
      },
      identity: {
        value: containerGroupIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerGroupIdentityList",
      },
      image_registry_credential: {
        value: cdktn.listMapperHcl(containerGroupImageRegistryCredentialToHclTerraform, true)(this._imageRegistryCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerGroupImageRegistryCredentialList",
      },
      init_container: {
        value: cdktn.listMapperHcl(containerGroupInitContainerToHclTerraform, true)(this._initContainer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerGroupInitContainerList",
      },
      timeouts: {
        value: containerGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
