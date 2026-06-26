/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IothubConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#endpoint Iothub#endpoint}
  */
  readonly endpoint?: IothubEndpoint[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#enrichment Iothub#enrichment}
  */
  readonly enrichment?: IothubEnrichment[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#event_hub_partition_count Iothub#event_hub_partition_count}
  */
  readonly eventHubPartitionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#event_hub_retention_in_days Iothub#event_hub_retention_in_days}
  */
  readonly eventHubRetentionInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#id Iothub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#local_authentication_enabled Iothub#local_authentication_enabled}
  */
  readonly localAuthenticationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#location Iothub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#min_tls_version Iothub#min_tls_version}
  */
  readonly minTlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#name Iothub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#public_network_access_enabled Iothub#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#resource_group_name Iothub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#route Iothub#route}
  */
  readonly route?: IothubRoute[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#tags Iothub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * cloud_to_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#cloud_to_device Iothub#cloud_to_device}
  */
  readonly cloudToDevice?: IothubCloudToDevice;
  /**
  * fallback_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#fallback_route Iothub#fallback_route}
  */
  readonly fallbackRoute?: IothubFallbackRoute;
  /**
  * file_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#file_upload Iothub#file_upload}
  */
  readonly fileUpload?: IothubFileUpload;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#identity Iothub#identity}
  */
  readonly identity?: IothubIdentity;
  /**
  * network_rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#network_rule_set Iothub#network_rule_set}
  */
  readonly networkRuleSet?: IothubNetworkRuleSet[] | cdktn.IResolvable;
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#sku Iothub#sku}
  */
  readonly sku: IothubSku;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#timeouts Iothub#timeouts}
  */
  readonly timeouts?: IothubTimeouts;
}
export interface IothubEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#authentication_type Iothub#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#batch_frequency_in_seconds Iothub#batch_frequency_in_seconds}
  */
  readonly batchFrequencyInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#connection_string Iothub#connection_string}
  */
  readonly connectionString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#container_name Iothub#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#encoding Iothub#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#endpoint_uri Iothub#endpoint_uri}
  */
  readonly endpointUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#entity_path Iothub#entity_path}
  */
  readonly entityPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#file_name_format Iothub#file_name_format}
  */
  readonly fileNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#identity_id Iothub#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#max_chunk_size_in_bytes Iothub#max_chunk_size_in_bytes}
  */
  readonly maxChunkSizeInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#name Iothub#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#resource_group_name Iothub#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#subscription_id Iothub#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#type Iothub#type}
  */
  readonly type?: string;
}

export function iothubEndpointToTerraform(struct?: IothubEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: struct!.authenticationType === undefined ? null : cdktn.stringToTerraform(struct!.authenticationType),
    batch_frequency_in_seconds: struct!.batchFrequencyInSeconds === undefined ? null : cdktn.numberToTerraform(struct!.batchFrequencyInSeconds),
    connection_string: struct!.connectionString === undefined ? null : cdktn.stringToTerraform(struct!.connectionString),
    container_name: struct!.containerName === undefined ? null : cdktn.stringToTerraform(struct!.containerName),
    encoding: struct!.encoding === undefined ? null : cdktn.stringToTerraform(struct!.encoding),
    endpoint_uri: struct!.endpointUri === undefined ? null : cdktn.stringToTerraform(struct!.endpointUri),
    entity_path: struct!.entityPath === undefined ? null : cdktn.stringToTerraform(struct!.entityPath),
    file_name_format: struct!.fileNameFormat === undefined ? null : cdktn.stringToTerraform(struct!.fileNameFormat),
    identity_id: struct!.identityId === undefined ? null : cdktn.stringToTerraform(struct!.identityId),
    max_chunk_size_in_bytes: struct!.maxChunkSizeInBytes === undefined ? null : cdktn.numberToTerraform(struct!.maxChunkSizeInBytes),
    name: struct!.name === undefined ? null : cdktn.stringToTerraform(struct!.name),
    resource_group_name: struct!.resourceGroupName === undefined ? null : cdktn.stringToTerraform(struct!.resourceGroupName),
    subscription_id: cdktn.stringToTerraform(struct!.subscriptionId),
    type: struct!.type === undefined ? null : cdktn.stringToTerraform(struct!.type),
  }
}


export function iothubEndpointToHclTerraform(struct?: IothubEndpoint | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: struct!.authenticationType === undefined ? null : cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_frequency_in_seconds: {
      value: struct!.batchFrequencyInSeconds === undefined ? null : cdktn.numberToHclTerraform(struct!.batchFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_string: {
      value: struct!.connectionString === undefined ? null : cdktn.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: struct!.containerName === undefined ? null : cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoding: {
      value: struct!.encoding === undefined ? null : cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_uri: {
      value: struct!.endpointUri === undefined ? null : cdktn.stringToHclTerraform(struct!.endpointUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_path: {
      value: struct!.entityPath === undefined ? null : cdktn.stringToHclTerraform(struct!.entityPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name_format: {
      value: struct!.fileNameFormat === undefined ? null : cdktn.stringToHclTerraform(struct!.fileNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_id: {
      value: struct!.identityId === undefined ? null : cdktn.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_chunk_size_in_bytes: {
      value: struct!.maxChunkSizeInBytes === undefined ? null : cdktn.numberToHclTerraform(struct!.maxChunkSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: struct!.name === undefined ? null : cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: struct!.resourceGroupName === undefined ? null : cdktn.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktn.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: struct!.type === undefined ? null : cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubEndpointOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IothubEndpoint | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._batchFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchFrequencyInSeconds = this._batchFrequencyInSeconds;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._endpointUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUri = this._endpointUri;
    }
    if (this._entityPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityPath = this._entityPath;
    }
    if (this._fileNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNameFormat = this._fileNameFormat;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._maxChunkSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxChunkSizeInBytes = this._maxChunkSizeInBytes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubEndpoint | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._batchFrequencyInSeconds = undefined;
      this._connectionString = undefined;
      this._containerName = undefined;
      this._encoding = undefined;
      this._endpointUri = undefined;
      this._entityPath = undefined;
      this._fileNameFormat = undefined;
      this._identityId = undefined;
      this._maxChunkSizeInBytes = undefined;
      this._name = undefined;
      this._resourceGroupName = undefined;
      this._subscriptionId = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._batchFrequencyInSeconds = value.batchFrequencyInSeconds;
      this._connectionString = value.connectionString;
      this._containerName = value.containerName;
      this._encoding = value.encoding;
      this._endpointUri = value.endpointUri;
      this._entityPath = value.entityPath;
      this._fileNameFormat = value.fileNameFormat;
      this._identityId = value.identityId;
      this._maxChunkSizeInBytes = value.maxChunkSizeInBytes;
      this._name = value.name;
      this._resourceGroupName = value.resourceGroupName;
      this._subscriptionId = value.subscriptionId;
      this._type = value.type;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // batch_frequency_in_seconds - computed: true, optional: true, required: false
  private _batchFrequencyInSeconds?: number; 
  public get batchFrequencyInSeconds() {
    return this.getNumberAttribute('batch_frequency_in_seconds');
  }
  public set batchFrequencyInSeconds(value: number) {
    this._batchFrequencyInSeconds = value;
  }
  public resetBatchFrequencyInSeconds() {
    this._batchFrequencyInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchFrequencyInSecondsInput() {
    return this._batchFrequencyInSeconds;
  }

  // connection_string - computed: true, optional: true, required: false
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  public resetConnectionString() {
    this._connectionString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // container_name - computed: true, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // encoding - computed: true, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // endpoint_uri - computed: true, optional: true, required: false
  private _endpointUri?: string; 
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }
  public set endpointUri(value: string) {
    this._endpointUri = value;
  }
  public resetEndpointUri() {
    this._endpointUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUriInput() {
    return this._endpointUri;
  }

  // entity_path - computed: true, optional: true, required: false
  private _entityPath?: string; 
  public get entityPath() {
    return this.getStringAttribute('entity_path');
  }
  public set entityPath(value: string) {
    this._entityPath = value;
  }
  public resetEntityPath() {
    this._entityPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityPathInput() {
    return this._entityPath;
  }

  // file_name_format - computed: true, optional: true, required: false
  private _fileNameFormat?: string; 
  public get fileNameFormat() {
    return this.getStringAttribute('file_name_format');
  }
  public set fileNameFormat(value: string) {
    this._fileNameFormat = value;
  }
  public resetFileNameFormat() {
    this._fileNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameFormatInput() {
    return this._fileNameFormat;
  }

  // identity_id - computed: true, optional: true, required: false
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

  // max_chunk_size_in_bytes - computed: true, optional: true, required: false
  private _maxChunkSizeInBytes?: number; 
  public get maxChunkSizeInBytes() {
    return this.getNumberAttribute('max_chunk_size_in_bytes');
  }
  public set maxChunkSizeInBytes(value: number) {
    this._maxChunkSizeInBytes = value;
  }
  public resetMaxChunkSizeInBytes() {
    this._maxChunkSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxChunkSizeInBytesInput() {
    return this._maxChunkSizeInBytes;
  }

  // name - computed: true, optional: true, required: false
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

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class IothubEndpointList extends cdktn.ComplexList {
  public internalValue? : IothubEndpoint[] | cdktn.IResolvable

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
  public get(index: number): IothubEndpointOutputReference {
    return new IothubEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IothubEnrichment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}
  */
  readonly endpointNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#key Iothub#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#value Iothub#value}
  */
  readonly value?: string;
}

export function iothubEnrichmentToTerraform(struct?: IothubEnrichment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_names: struct!.endpointNames === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointNames),
    key: struct!.key === undefined ? null : cdktn.stringToTerraform(struct!.key),
    value: struct!.value === undefined ? null : cdktn.stringToTerraform(struct!.value),
  }
}


export function iothubEnrichmentToHclTerraform(struct?: IothubEnrichment | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_names: {
      value: struct!.endpointNames === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpointNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key: {
      value: struct!.key === undefined ? null : cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: struct!.value === undefined ? null : cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubEnrichmentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IothubEnrichment | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointNames = this._endpointNames;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubEnrichment | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointNames = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointNames = value.endpointNames;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // endpoint_names - computed: true, optional: true, required: false
  private _endpointNames?: string[]; 
  public get endpointNames() {
    return this.getListAttribute('endpoint_names');
  }
  public set endpointNames(value: string[]) {
    this._endpointNames = value;
  }
  public resetEndpointNames() {
    this._endpointNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNamesInput() {
    return this._endpointNames;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
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

export class IothubEnrichmentList extends cdktn.ComplexList {
  public internalValue? : IothubEnrichment[] | cdktn.IResolvable

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
  public get(index: number): IothubEnrichmentOutputReference {
    return new IothubEnrichmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IothubRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#condition Iothub#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#enabled Iothub#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}
  */
  readonly endpointNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#name Iothub#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#source Iothub#source}
  */
  readonly source?: string;
}

export function iothubRouteToTerraform(struct?: IothubRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: struct!.condition === undefined ? null : cdktn.stringToTerraform(struct!.condition),
    enabled: struct!.enabled === undefined ? null : cdktn.booleanToTerraform(struct!.enabled),
    endpoint_names: struct!.endpointNames === undefined ? null : cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointNames),
    name: struct!.name === undefined ? null : cdktn.stringToTerraform(struct!.name),
    source: struct!.source === undefined ? null : cdktn.stringToTerraform(struct!.source),
  }
}


export function iothubRouteToHclTerraform(struct?: IothubRoute | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: struct!.condition === undefined ? null : cdktn.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: struct!.enabled === undefined ? null : cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_names: {
      value: struct!.endpointNames === undefined ? null : cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpointNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: struct!.name === undefined ? null : cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: struct!.source === undefined ? null : cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubRouteOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IothubRoute | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpointNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointNames = this._endpointNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubRoute | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._enabled = undefined;
      this._endpointNames = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._enabled = value.enabled;
      this._endpointNames = value.endpointNames;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // enabled - computed: true, optional: true, required: false
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

  // endpoint_names - computed: true, optional: true, required: false
  private _endpointNames?: string[]; 
  public get endpointNames() {
    return this.getListAttribute('endpoint_names');
  }
  public set endpointNames(value: string[]) {
    this._endpointNames = value;
  }
  public resetEndpointNames() {
    this._endpointNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNamesInput() {
    return this._endpointNames;
  }

  // name - computed: true, optional: true, required: false
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

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class IothubRouteList extends cdktn.ComplexList {
  public internalValue? : IothubRoute[] | cdktn.IResolvable

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
  public get(index: number): IothubRouteOutputReference {
    return new IothubRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IothubSharedAccessPolicy {
}

export function iothubSharedAccessPolicyToTerraform(struct?: IothubSharedAccessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function iothubSharedAccessPolicyToHclTerraform(struct?: IothubSharedAccessPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IothubSharedAccessPolicyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IothubSharedAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubSharedAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }
}

export class IothubSharedAccessPolicyList extends cdktn.ComplexList {

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
  public get(index: number): IothubSharedAccessPolicyOutputReference {
    return new IothubSharedAccessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IothubCloudToDeviceFeedback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#lock_duration Iothub#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#time_to_live Iothub#time_to_live}
  */
  readonly timeToLive?: string;
}

export function iothubCloudToDeviceFeedbackToTerraform(struct?: IothubCloudToDeviceFeedback | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    lock_duration: cdktn.stringToTerraform(struct!.lockDuration),
    max_delivery_count: cdktn.numberToTerraform(struct!.maxDeliveryCount),
    time_to_live: cdktn.stringToTerraform(struct!.timeToLive),
  }
}


export function iothubCloudToDeviceFeedbackToHclTerraform(struct?: IothubCloudToDeviceFeedback | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    lock_duration: {
      value: cdktn.stringToHclTerraform(struct!.lockDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_delivery_count: {
      value: cdktn.numberToHclTerraform(struct!.maxDeliveryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_to_live: {
      value: cdktn.stringToHclTerraform(struct!.timeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubCloudToDeviceFeedbackOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IothubCloudToDeviceFeedback | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockDuration = this._lockDuration;
    }
    if (this._maxDeliveryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryCount = this._maxDeliveryCount;
    }
    if (this._timeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubCloudToDeviceFeedback | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockDuration = undefined;
      this._maxDeliveryCount = undefined;
      this._timeToLive = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockDuration = value.lockDuration;
      this._maxDeliveryCount = value.maxDeliveryCount;
      this._timeToLive = value.timeToLive;
    }
  }

  // lock_duration - computed: false, optional: true, required: false
  private _lockDuration?: string; 
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string) {
    this._lockDuration = value;
  }
  public resetLockDuration() {
    this._lockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDurationInput() {
    return this._lockDuration;
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number; 
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive?: string; 
  public get timeToLive() {
    return this.getStringAttribute('time_to_live');
  }
  public set timeToLive(value: string) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }
}

export class IothubCloudToDeviceFeedbackList extends cdktn.ComplexList {
  public internalValue? : IothubCloudToDeviceFeedback[] | cdktn.IResolvable

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
  public get(index: number): IothubCloudToDeviceFeedbackOutputReference {
    return new IothubCloudToDeviceFeedbackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IothubCloudToDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#default_ttl Iothub#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * feedback block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#feedback Iothub#feedback}
  */
  readonly feedback?: IothubCloudToDeviceFeedback[] | cdktn.IResolvable;
}

export function iothubCloudToDeviceToTerraform(struct?: IothubCloudToDeviceOutputReference | IothubCloudToDevice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_ttl: cdktn.stringToTerraform(struct!.defaultTtl),
    max_delivery_count: cdktn.numberToTerraform(struct!.maxDeliveryCount),
    feedback: cdktn.listMapper(iothubCloudToDeviceFeedbackToTerraform, true)(struct!.feedback),
  }
}


export function iothubCloudToDeviceToHclTerraform(struct?: IothubCloudToDeviceOutputReference | IothubCloudToDevice): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_ttl: {
      value: cdktn.stringToHclTerraform(struct!.defaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_delivery_count: {
      value: cdktn.numberToHclTerraform(struct!.maxDeliveryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    feedback: {
      value: cdktn.listMapperHcl(iothubCloudToDeviceFeedbackToHclTerraform, true)(struct!.feedback),
      isBlock: true,
      type: "list",
      storageClassType: "IothubCloudToDeviceFeedbackList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubCloudToDeviceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IothubCloudToDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._maxDeliveryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryCount = this._maxDeliveryCount;
    }
    if (this._feedback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedback = this._feedback?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubCloudToDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTtl = undefined;
      this._maxDeliveryCount = undefined;
      this._feedback.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTtl = value.defaultTtl;
      this._maxDeliveryCount = value.maxDeliveryCount;
      this._feedback.internalValue = value.feedback;
    }
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number; 
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount;
  }

  // feedback - computed: false, optional: true, required: false
  private _feedback = new IothubCloudToDeviceFeedbackList(this, "feedback", false);
  public get feedback() {
    return this._feedback;
  }
  public putFeedback(value: IothubCloudToDeviceFeedback[] | cdktn.IResolvable) {
    this._feedback.internalValue = value;
  }
  public resetFeedback() {
    this._feedback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedbackInput() {
    return this._feedback.internalValue;
  }
}
export interface IothubFallbackRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#condition Iothub#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#enabled Iothub#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#endpoint_names Iothub#endpoint_names}
  */
  readonly endpointNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#source Iothub#source}
  */
  readonly source?: string;
}

export function iothubFallbackRouteToTerraform(struct?: IothubFallbackRouteOutputReference | IothubFallbackRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    condition: cdktn.stringToTerraform(struct!.condition),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    endpoint_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.endpointNames),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function iothubFallbackRouteToHclTerraform(struct?: IothubFallbackRouteOutputReference | IothubFallbackRoute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    condition: {
      value: cdktn.stringToHclTerraform(struct!.condition),
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
    endpoint_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.endpointNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubFallbackRouteOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IothubFallbackRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._endpointNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointNames = this._endpointNames;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubFallbackRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._enabled = undefined;
      this._endpointNames = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._enabled = value.enabled;
      this._endpointNames = value.endpointNames;
      this._source = value.source;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // endpoint_names - computed: true, optional: true, required: false
  private _endpointNames?: string[]; 
  public get endpointNames() {
    return this.getListAttribute('endpoint_names');
  }
  public set endpointNames(value: string[]) {
    this._endpointNames = value;
  }
  public resetEndpointNames() {
    this._endpointNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNamesInput() {
    return this._endpointNames;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface IothubFileUpload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#authentication_type Iothub#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#connection_string Iothub#connection_string}
  */
  readonly connectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#container_name Iothub#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#default_ttl Iothub#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#identity_id Iothub#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#lock_duration Iothub#lock_duration}
  */
  readonly lockDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#max_delivery_count Iothub#max_delivery_count}
  */
  readonly maxDeliveryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#notifications Iothub#notifications}
  */
  readonly notifications?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#sas_ttl Iothub#sas_ttl}
  */
  readonly sasTtl?: string;
}

export function iothubFileUploadToTerraform(struct?: IothubFileUploadOutputReference | IothubFileUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    authentication_type: cdktn.stringToTerraform(struct!.authenticationType),
    connection_string: cdktn.stringToTerraform(struct!.connectionString),
    container_name: cdktn.stringToTerraform(struct!.containerName),
    default_ttl: cdktn.stringToTerraform(struct!.defaultTtl),
    identity_id: cdktn.stringToTerraform(struct!.identityId),
    lock_duration: cdktn.stringToTerraform(struct!.lockDuration),
    max_delivery_count: cdktn.numberToTerraform(struct!.maxDeliveryCount),
    notifications: cdktn.booleanToTerraform(struct!.notifications),
    sas_ttl: cdktn.stringToTerraform(struct!.sasTtl),
  }
}


export function iothubFileUploadToHclTerraform(struct?: IothubFileUploadOutputReference | IothubFileUpload): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    authentication_type: {
      value: cdktn.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktn.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_ttl: {
      value: cdktn.stringToHclTerraform(struct!.defaultTtl),
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
    lock_duration: {
      value: cdktn.stringToHclTerraform(struct!.lockDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_delivery_count: {
      value: cdktn.numberToHclTerraform(struct!.maxDeliveryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notifications: {
      value: cdktn.booleanToHclTerraform(struct!.notifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sas_ttl: {
      value: cdktn.stringToHclTerraform(struct!.sasTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubFileUploadOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IothubFileUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._lockDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockDuration = this._lockDuration;
    }
    if (this._maxDeliveryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryCount = this._maxDeliveryCount;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._sasTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasTtl = this._sasTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubFileUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._connectionString = undefined;
      this._containerName = undefined;
      this._defaultTtl = undefined;
      this._identityId = undefined;
      this._lockDuration = undefined;
      this._maxDeliveryCount = undefined;
      this._notifications = undefined;
      this._sasTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._connectionString = value.connectionString;
      this._containerName = value.containerName;
      this._defaultTtl = value.defaultTtl;
      this._identityId = value.identityId;
      this._lockDuration = value.lockDuration;
      this._maxDeliveryCount = value.maxDeliveryCount;
      this._notifications = value.notifications;
      this._sasTtl = value.sasTtl;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
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

  // lock_duration - computed: false, optional: true, required: false
  private _lockDuration?: string; 
  public get lockDuration() {
    return this.getStringAttribute('lock_duration');
  }
  public set lockDuration(value: string) {
    this._lockDuration = value;
  }
  public resetLockDuration() {
    this._lockDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockDurationInput() {
    return this._lockDuration;
  }

  // max_delivery_count - computed: false, optional: true, required: false
  private _maxDeliveryCount?: number; 
  public get maxDeliveryCount() {
    return this.getNumberAttribute('max_delivery_count');
  }
  public set maxDeliveryCount(value: number) {
    this._maxDeliveryCount = value;
  }
  public resetMaxDeliveryCount() {
    this._maxDeliveryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryCountInput() {
    return this._maxDeliveryCount;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: boolean | cdktn.IResolvable; 
  public get notifications() {
    return this.getBooleanAttribute('notifications');
  }
  public set notifications(value: boolean | cdktn.IResolvable) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // sas_ttl - computed: false, optional: true, required: false
  private _sasTtl?: string; 
  public get sasTtl() {
    return this.getStringAttribute('sas_ttl');
  }
  public set sasTtl(value: string) {
    this._sasTtl = value;
  }
  public resetSasTtl() {
    this._sasTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTtlInput() {
    return this._sasTtl;
  }
}
export interface IothubIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#identity_ids Iothub#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#type Iothub#type}
  */
  readonly type: string;
}

export function iothubIdentityToTerraform(struct?: IothubIdentityOutputReference | IothubIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    identity_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.identityIds),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function iothubIdentityToHclTerraform(struct?: IothubIdentityOutputReference | IothubIdentity): any {
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

export class IothubIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IothubIdentity | undefined {
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

  public set internalValue(value: IothubIdentity | undefined) {
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
export interface IothubNetworkRuleSetIpRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#action Iothub#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#ip_mask Iothub#ip_mask}
  */
  readonly ipMask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#name Iothub#name}
  */
  readonly name: string;
}

export function iothubNetworkRuleSetIpRuleToTerraform(struct?: IothubNetworkRuleSetIpRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    ip_mask: cdktn.stringToTerraform(struct!.ipMask),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iothubNetworkRuleSetIpRuleToHclTerraform(struct?: IothubNetworkRuleSetIpRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mask: {
      value: cdktn.stringToHclTerraform(struct!.ipMask),
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

export class IothubNetworkRuleSetIpRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IothubNetworkRuleSetIpRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ipMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMask = this._ipMask;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubNetworkRuleSetIpRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ipMask = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ipMask = value.ipMask;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ip_mask - computed: false, optional: false, required: true
  private _ipMask?: string; 
  public get ipMask() {
    return this.getStringAttribute('ip_mask');
  }
  public set ipMask(value: string) {
    this._ipMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskInput() {
    return this._ipMask;
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

export class IothubNetworkRuleSetIpRuleList extends cdktn.ComplexList {
  public internalValue? : IothubNetworkRuleSetIpRule[] | cdktn.IResolvable

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
  public get(index: number): IothubNetworkRuleSetIpRuleOutputReference {
    return new IothubNetworkRuleSetIpRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IothubNetworkRuleSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#apply_to_builtin_eventhub_endpoint Iothub#apply_to_builtin_eventhub_endpoint}
  */
  readonly applyToBuiltinEventhubEndpoint?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#default_action Iothub#default_action}
  */
  readonly defaultAction?: string;
  /**
  * ip_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#ip_rule Iothub#ip_rule}
  */
  readonly ipRule?: IothubNetworkRuleSetIpRule[] | cdktn.IResolvable;
}

export function iothubNetworkRuleSetToTerraform(struct?: IothubNetworkRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apply_to_builtin_eventhub_endpoint: cdktn.booleanToTerraform(struct!.applyToBuiltinEventhubEndpoint),
    default_action: cdktn.stringToTerraform(struct!.defaultAction),
    ip_rule: cdktn.listMapper(iothubNetworkRuleSetIpRuleToTerraform, true)(struct!.ipRule),
  }
}


export function iothubNetworkRuleSetToHclTerraform(struct?: IothubNetworkRuleSet | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apply_to_builtin_eventhub_endpoint: {
      value: cdktn.booleanToHclTerraform(struct!.applyToBuiltinEventhubEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action: {
      value: cdktn.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_rule: {
      value: cdktn.listMapperHcl(iothubNetworkRuleSetIpRuleToHclTerraform, true)(struct!.ipRule),
      isBlock: true,
      type: "list",
      storageClassType: "IothubNetworkRuleSetIpRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubNetworkRuleSetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IothubNetworkRuleSet | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyToBuiltinEventhubEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyToBuiltinEventhubEndpoint = this._applyToBuiltinEventhubEndpoint;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._ipRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRule = this._ipRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubNetworkRuleSet | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyToBuiltinEventhubEndpoint = undefined;
      this._defaultAction = undefined;
      this._ipRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyToBuiltinEventhubEndpoint = value.applyToBuiltinEventhubEndpoint;
      this._defaultAction = value.defaultAction;
      this._ipRule.internalValue = value.ipRule;
    }
  }

  // apply_to_builtin_eventhub_endpoint - computed: false, optional: true, required: false
  private _applyToBuiltinEventhubEndpoint?: boolean | cdktn.IResolvable; 
  public get applyToBuiltinEventhubEndpoint() {
    return this.getBooleanAttribute('apply_to_builtin_eventhub_endpoint');
  }
  public set applyToBuiltinEventhubEndpoint(value: boolean | cdktn.IResolvable) {
    this._applyToBuiltinEventhubEndpoint = value;
  }
  public resetApplyToBuiltinEventhubEndpoint() {
    this._applyToBuiltinEventhubEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToBuiltinEventhubEndpointInput() {
    return this._applyToBuiltinEventhubEndpoint;
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // ip_rule - computed: false, optional: true, required: false
  private _ipRule = new IothubNetworkRuleSetIpRuleList(this, "ip_rule", false);
  public get ipRule() {
    return this._ipRule;
  }
  public putIpRule(value: IothubNetworkRuleSetIpRule[] | cdktn.IResolvable) {
    this._ipRule.internalValue = value;
  }
  public resetIpRule() {
    this._ipRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRuleInput() {
    return this._ipRule.internalValue;
  }
}

export class IothubNetworkRuleSetList extends cdktn.ComplexList {
  public internalValue? : IothubNetworkRuleSet[] | cdktn.IResolvable

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
  public get(index: number): IothubNetworkRuleSetOutputReference {
    return new IothubNetworkRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IothubSku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#capacity Iothub#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#name Iothub#name}
  */
  readonly name: string;
}

export function iothubSkuToTerraform(struct?: IothubSkuOutputReference | IothubSku): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    capacity: cdktn.numberToTerraform(struct!.capacity),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function iothubSkuToHclTerraform(struct?: IothubSkuOutputReference | IothubSku): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    capacity: {
      value: cdktn.numberToHclTerraform(struct!.capacity),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IothubSkuOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IothubSku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IothubSku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity = value.capacity;
      this._name = value.name;
    }
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
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
export interface IothubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#create Iothub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#delete Iothub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#read Iothub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#update Iothub#update}
  */
  readonly update?: string;
}

export function iothubTimeoutsToTerraform(struct?: IothubTimeouts | cdktn.IResolvable): any {
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


export function iothubTimeoutsToHclTerraform(struct?: IothubTimeouts | cdktn.IResolvable): any {
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

export class IothubTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IothubTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: IothubTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub azurerm_iothub}
*/
export class Iothub extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_iothub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Iothub resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Iothub to import
  * @param importFromId The id of the existing Iothub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Iothub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_iothub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub azurerm_iothub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IothubConfig
  */
  public constructor(scope: Construct, id: string, config: IothubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_iothub',
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
    this._endpoint.internalValue = config.endpoint;
    this._enrichment.internalValue = config.enrichment;
    this._eventHubPartitionCount = config.eventHubPartitionCount;
    this._eventHubRetentionInDays = config.eventHubRetentionInDays;
    this._id = config.id;
    this._localAuthenticationEnabled = config.localAuthenticationEnabled;
    this._location = config.location;
    this._minTlsVersion = config.minTlsVersion;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._route.internalValue = config.route;
    this._tags = config.tags;
    this._cloudToDevice.internalValue = config.cloudToDevice;
    this._fallbackRoute.internalValue = config.fallbackRoute;
    this._fileUpload.internalValue = config.fileUpload;
    this._identity.internalValue = config.identity;
    this._networkRuleSet.internalValue = config.networkRuleSet;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: true, required: false
  private _endpoint = new IothubEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: IothubEndpoint[] | cdktn.IResolvable) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // enrichment - computed: true, optional: true, required: false
  private _enrichment = new IothubEnrichmentList(this, "enrichment", false);
  public get enrichment() {
    return this._enrichment;
  }
  public putEnrichment(value: IothubEnrichment[] | cdktn.IResolvable) {
    this._enrichment.internalValue = value;
  }
  public resetEnrichment() {
    this._enrichment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentInput() {
    return this._enrichment.internalValue;
  }

  // event_hub_events_endpoint - computed: true, optional: false, required: false
  public get eventHubEventsEndpoint() {
    return this.getStringAttribute('event_hub_events_endpoint');
  }

  // event_hub_events_namespace - computed: true, optional: false, required: false
  public get eventHubEventsNamespace() {
    return this.getStringAttribute('event_hub_events_namespace');
  }

  // event_hub_events_path - computed: true, optional: false, required: false
  public get eventHubEventsPath() {
    return this.getStringAttribute('event_hub_events_path');
  }

  // event_hub_operations_endpoint - computed: true, optional: false, required: false
  public get eventHubOperationsEndpoint() {
    return this.getStringAttribute('event_hub_operations_endpoint');
  }

  // event_hub_operations_path - computed: true, optional: false, required: false
  public get eventHubOperationsPath() {
    return this.getStringAttribute('event_hub_operations_path');
  }

  // event_hub_partition_count - computed: false, optional: true, required: false
  private _eventHubPartitionCount?: number; 
  public get eventHubPartitionCount() {
    return this.getNumberAttribute('event_hub_partition_count');
  }
  public set eventHubPartitionCount(value: number) {
    this._eventHubPartitionCount = value;
  }
  public resetEventHubPartitionCount() {
    this._eventHubPartitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubPartitionCountInput() {
    return this._eventHubPartitionCount;
  }

  // event_hub_retention_in_days - computed: false, optional: true, required: false
  private _eventHubRetentionInDays?: number; 
  public get eventHubRetentionInDays() {
    return this.getNumberAttribute('event_hub_retention_in_days');
  }
  public set eventHubRetentionInDays(value: number) {
    this._eventHubRetentionInDays = value;
  }
  public resetEventHubRetentionInDays() {
    this._eventHubRetentionInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubRetentionInDaysInput() {
    return this._eventHubRetentionInDays;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // local_authentication_enabled - computed: false, optional: true, required: false
  private _localAuthenticationEnabled?: boolean | cdktn.IResolvable; 
  public get localAuthenticationEnabled() {
    return this.getBooleanAttribute('local_authentication_enabled');
  }
  public set localAuthenticationEnabled(value: boolean | cdktn.IResolvable) {
    this._localAuthenticationEnabled = value;
  }
  public resetLocalAuthenticationEnabled() {
    this._localAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAuthenticationEnabledInput() {
    return this._localAuthenticationEnabled;
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

  // min_tls_version - computed: false, optional: true, required: false
  private _minTlsVersion?: string; 
  public get minTlsVersion() {
    return this.getStringAttribute('min_tls_version');
  }
  public set minTlsVersion(value: string) {
    this._minTlsVersion = value;
  }
  public resetMinTlsVersion() {
    this._minTlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTlsVersionInput() {
    return this._minTlsVersion;
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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktn.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktn.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
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

  // route - computed: true, optional: true, required: false
  private _route = new IothubRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: IothubRoute[] | cdktn.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // shared_access_policy - computed: true, optional: false, required: false
  private _sharedAccessPolicy = new IothubSharedAccessPolicyList(this, "shared_access_policy", false);
  public get sharedAccessPolicy() {
    return this._sharedAccessPolicy;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // cloud_to_device - computed: false, optional: true, required: false
  private _cloudToDevice = new IothubCloudToDeviceOutputReference(this, "cloud_to_device");
  public get cloudToDevice() {
    return this._cloudToDevice;
  }
  public putCloudToDevice(value: IothubCloudToDevice) {
    this._cloudToDevice.internalValue = value;
  }
  public resetCloudToDevice() {
    this._cloudToDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudToDeviceInput() {
    return this._cloudToDevice.internalValue;
  }

  // fallback_route - computed: false, optional: true, required: false
  private _fallbackRoute = new IothubFallbackRouteOutputReference(this, "fallback_route");
  public get fallbackRoute() {
    return this._fallbackRoute;
  }
  public putFallbackRoute(value: IothubFallbackRoute) {
    this._fallbackRoute.internalValue = value;
  }
  public resetFallbackRoute() {
    this._fallbackRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRouteInput() {
    return this._fallbackRoute.internalValue;
  }

  // file_upload - computed: false, optional: true, required: false
  private _fileUpload = new IothubFileUploadOutputReference(this, "file_upload");
  public get fileUpload() {
    return this._fileUpload;
  }
  public putFileUpload(value: IothubFileUpload) {
    this._fileUpload.internalValue = value;
  }
  public resetFileUpload() {
    this._fileUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUploadInput() {
    return this._fileUpload.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new IothubIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: IothubIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_rule_set - computed: false, optional: true, required: false
  private _networkRuleSet = new IothubNetworkRuleSetList(this, "network_rule_set", false);
  public get networkRuleSet() {
    return this._networkRuleSet;
  }
  public putNetworkRuleSet(value: IothubNetworkRuleSet[] | cdktn.IResolvable) {
    this._networkRuleSet.internalValue = value;
  }
  public resetNetworkRuleSet() {
    this._networkRuleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRuleSetInput() {
    return this._networkRuleSet.internalValue;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new IothubSkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: IothubSku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IothubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IothubTimeouts) {
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
      endpoint: cdktn.listMapper(iothubEndpointToTerraform, false)(this._endpoint.internalValue),
      enrichment: cdktn.listMapper(iothubEnrichmentToTerraform, false)(this._enrichment.internalValue),
      event_hub_partition_count: cdktn.numberToTerraform(this._eventHubPartitionCount),
      event_hub_retention_in_days: cdktn.numberToTerraform(this._eventHubRetentionInDays),
      id: cdktn.stringToTerraform(this._id),
      local_authentication_enabled: cdktn.booleanToTerraform(this._localAuthenticationEnabled),
      location: cdktn.stringToTerraform(this._location),
      min_tls_version: cdktn.stringToTerraform(this._minTlsVersion),
      name: cdktn.stringToTerraform(this._name),
      public_network_access_enabled: cdktn.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      route: cdktn.listMapper(iothubRouteToTerraform, false)(this._route.internalValue),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      cloud_to_device: iothubCloudToDeviceToTerraform(this._cloudToDevice.internalValue),
      fallback_route: iothubFallbackRouteToTerraform(this._fallbackRoute.internalValue),
      file_upload: iothubFileUploadToTerraform(this._fileUpload.internalValue),
      identity: iothubIdentityToTerraform(this._identity.internalValue),
      network_rule_set: cdktn.listMapper(iothubNetworkRuleSetToTerraform, true)(this._networkRuleSet.internalValue),
      sku: iothubSkuToTerraform(this._sku.internalValue),
      timeouts: iothubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktn.listMapperHcl(iothubEndpointToHclTerraform, false)(this._endpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubEndpointList",
      },
      enrichment: {
        value: cdktn.listMapperHcl(iothubEnrichmentToHclTerraform, false)(this._enrichment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubEnrichmentList",
      },
      event_hub_partition_count: {
        value: cdktn.numberToHclTerraform(this._eventHubPartitionCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_hub_retention_in_days: {
        value: cdktn.numberToHclTerraform(this._eventHubRetentionInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_authentication_enabled: {
        value: cdktn.booleanToHclTerraform(this._localAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_tls_version: {
        value: cdktn.stringToHclTerraform(this._minTlsVersion),
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
      public_network_access_enabled: {
        value: cdktn.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route: {
        value: cdktn.listMapperHcl(iothubRouteToHclTerraform, false)(this._route.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubRouteList",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cloud_to_device: {
        value: iothubCloudToDeviceToHclTerraform(this._cloudToDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubCloudToDeviceList",
      },
      fallback_route: {
        value: iothubFallbackRouteToHclTerraform(this._fallbackRoute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubFallbackRouteList",
      },
      file_upload: {
        value: iothubFileUploadToHclTerraform(this._fileUpload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubFileUploadList",
      },
      identity: {
        value: iothubIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubIdentityList",
      },
      network_rule_set: {
        value: cdktn.listMapperHcl(iothubNetworkRuleSetToHclTerraform, true)(this._networkRuleSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubNetworkRuleSetList",
      },
      sku: {
        value: iothubSkuToHclTerraform(this._sku.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IothubSkuList",
      },
      timeouts: {
        value: iothubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IothubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
