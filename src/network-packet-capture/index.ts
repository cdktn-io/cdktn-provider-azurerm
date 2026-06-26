/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkPacketCaptureConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#id NetworkPacketCapture#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#maximum_bytes_per_packet NetworkPacketCapture#maximum_bytes_per_packet}
  */
  readonly maximumBytesPerPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#maximum_bytes_per_session NetworkPacketCapture#maximum_bytes_per_session}
  */
  readonly maximumBytesPerSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#maximum_capture_duration NetworkPacketCapture#maximum_capture_duration}
  */
  readonly maximumCaptureDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#name NetworkPacketCapture#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#network_watcher_name NetworkPacketCapture#network_watcher_name}
  */
  readonly networkWatcherName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#resource_group_name NetworkPacketCapture#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#target_resource_id NetworkPacketCapture#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#filter NetworkPacketCapture#filter}
  */
  readonly filter?: NetworkPacketCaptureFilter[] | cdktn.IResolvable;
  /**
  * storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#storage_location NetworkPacketCapture#storage_location}
  */
  readonly storageLocation: NetworkPacketCaptureStorageLocation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#timeouts NetworkPacketCapture#timeouts}
  */
  readonly timeouts?: NetworkPacketCaptureTimeouts;
}
export interface NetworkPacketCaptureFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#local_ip_address NetworkPacketCapture#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#local_port NetworkPacketCapture#local_port}
  */
  readonly localPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#protocol NetworkPacketCapture#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#remote_ip_address NetworkPacketCapture#remote_ip_address}
  */
  readonly remoteIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#remote_port NetworkPacketCapture#remote_port}
  */
  readonly remotePort?: string;
}

export function networkPacketCaptureFilterToTerraform(struct?: NetworkPacketCaptureFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    local_ip_address: cdktn.stringToTerraform(struct!.localIpAddress),
    local_port: cdktn.stringToTerraform(struct!.localPort),
    protocol: cdktn.stringToTerraform(struct!.protocol),
    remote_ip_address: cdktn.stringToTerraform(struct!.remoteIpAddress),
    remote_port: cdktn.stringToTerraform(struct!.remotePort),
  }
}


export function networkPacketCaptureFilterToHclTerraform(struct?: NetworkPacketCaptureFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    local_ip_address: {
      value: cdktn.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_port: {
      value: cdktn.stringToHclTerraform(struct!.localPort),
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
    remote_ip_address: {
      value: cdktn.stringToHclTerraform(struct!.remoteIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_port: {
      value: cdktn.stringToHclTerraform(struct!.remotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPacketCaptureFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): NetworkPacketCaptureFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpAddress = this._remoteIpAddress;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPacketCaptureFilter | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localIpAddress = undefined;
      this._localPort = undefined;
      this._protocol = undefined;
      this._remoteIpAddress = undefined;
      this._remotePort = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localIpAddress = value.localIpAddress;
      this._localPort = value.localPort;
      this._protocol = value.protocol;
      this._remoteIpAddress = value.remoteIpAddress;
      this._remotePort = value.remotePort;
    }
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // local_port - computed: false, optional: true, required: false
  private _localPort?: string; 
  public get localPort() {
    return this.getStringAttribute('local_port');
  }
  public set localPort(value: string) {
    this._localPort = value;
  }
  public resetLocalPort() {
    this._localPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
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

  // remote_ip_address - computed: false, optional: true, required: false
  private _remoteIpAddress?: string; 
  public get remoteIpAddress() {
    return this.getStringAttribute('remote_ip_address');
  }
  public set remoteIpAddress(value: string) {
    this._remoteIpAddress = value;
  }
  public resetRemoteIpAddress() {
    this._remoteIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpAddressInput() {
    return this._remoteIpAddress;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: string; 
  public get remotePort() {
    return this.getStringAttribute('remote_port');
  }
  public set remotePort(value: string) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }
}

export class NetworkPacketCaptureFilterList extends cdktn.ComplexList {
  public internalValue? : NetworkPacketCaptureFilter[] | cdktn.IResolvable

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
  public get(index: number): NetworkPacketCaptureFilterOutputReference {
    return new NetworkPacketCaptureFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPacketCaptureStorageLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#file_path NetworkPacketCapture#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#storage_account_id NetworkPacketCapture#storage_account_id}
  */
  readonly storageAccountId?: string;
}

export function networkPacketCaptureStorageLocationToTerraform(struct?: NetworkPacketCaptureStorageLocationOutputReference | NetworkPacketCaptureStorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_path: cdktn.stringToTerraform(struct!.filePath),
    storage_account_id: cdktn.stringToTerraform(struct!.storageAccountId),
  }
}


export function networkPacketCaptureStorageLocationToHclTerraform(struct?: NetworkPacketCaptureStorageLocationOutputReference | NetworkPacketCaptureStorageLocation): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_path: {
      value: cdktn.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_id: {
      value: cdktn.stringToHclTerraform(struct!.storageAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPacketCaptureStorageLocationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPacketCaptureStorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._storageAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountId = this._storageAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPacketCaptureStorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filePath = undefined;
      this._storageAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filePath = value.filePath;
      this._storageAccountId = value.storageAccountId;
    }
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // storage_account_id - computed: false, optional: true, required: false
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // storage_path - computed: true, optional: false, required: false
  public get storagePath() {
    return this.getStringAttribute('storage_path');
  }
}
export interface NetworkPacketCaptureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#create NetworkPacketCapture#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#delete NetworkPacketCapture#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#read NetworkPacketCapture#read}
  */
  readonly read?: string;
}

export function networkPacketCaptureTimeoutsToTerraform(struct?: NetworkPacketCaptureTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function networkPacketCaptureTimeoutsToHclTerraform(struct?: NetworkPacketCaptureTimeouts | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPacketCaptureTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkPacketCaptureTimeouts | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPacketCaptureTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture azurerm_network_packet_capture}
*/
export class NetworkPacketCapture extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_packet_capture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkPacketCapture resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPacketCapture to import
  * @param importFromId The id of the existing NetworkPacketCapture that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPacketCapture to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_packet_capture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/network_packet_capture azurerm_network_packet_capture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPacketCaptureConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPacketCaptureConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_packet_capture',
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
    this._id = config.id;
    this._maximumBytesPerPacket = config.maximumBytesPerPacket;
    this._maximumBytesPerSession = config.maximumBytesPerSession;
    this._maximumCaptureDuration = config.maximumCaptureDuration;
    this._name = config.name;
    this._networkWatcherName = config.networkWatcherName;
    this._resourceGroupName = config.resourceGroupName;
    this._targetResourceId = config.targetResourceId;
    this._filter.internalValue = config.filter;
    this._storageLocation.internalValue = config.storageLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // maximum_bytes_per_packet - computed: false, optional: true, required: false
  private _maximumBytesPerPacket?: number; 
  public get maximumBytesPerPacket() {
    return this.getNumberAttribute('maximum_bytes_per_packet');
  }
  public set maximumBytesPerPacket(value: number) {
    this._maximumBytesPerPacket = value;
  }
  public resetMaximumBytesPerPacket() {
    this._maximumBytesPerPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesPerPacketInput() {
    return this._maximumBytesPerPacket;
  }

  // maximum_bytes_per_session - computed: false, optional: true, required: false
  private _maximumBytesPerSession?: number; 
  public get maximumBytesPerSession() {
    return this.getNumberAttribute('maximum_bytes_per_session');
  }
  public set maximumBytesPerSession(value: number) {
    this._maximumBytesPerSession = value;
  }
  public resetMaximumBytesPerSession() {
    this._maximumBytesPerSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBytesPerSessionInput() {
    return this._maximumBytesPerSession;
  }

  // maximum_capture_duration - computed: false, optional: true, required: false
  private _maximumCaptureDuration?: number; 
  public get maximumCaptureDuration() {
    return this.getNumberAttribute('maximum_capture_duration');
  }
  public set maximumCaptureDuration(value: number) {
    this._maximumCaptureDuration = value;
  }
  public resetMaximumCaptureDuration() {
    this._maximumCaptureDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCaptureDurationInput() {
    return this._maximumCaptureDuration;
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

  // network_watcher_name - computed: false, optional: false, required: true
  private _networkWatcherName?: string; 
  public get networkWatcherName() {
    return this.getStringAttribute('network_watcher_name');
  }
  public set networkWatcherName(value: string) {
    this._networkWatcherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkWatcherNameInput() {
    return this._networkWatcherName;
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

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new NetworkPacketCaptureFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: NetworkPacketCaptureFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation = new NetworkPacketCaptureStorageLocationOutputReference(this, "storage_location");
  public get storageLocation() {
    return this._storageLocation;
  }
  public putStorageLocation(value: NetworkPacketCaptureStorageLocation) {
    this._storageLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkPacketCaptureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkPacketCaptureTimeouts) {
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
      maximum_bytes_per_packet: cdktn.numberToTerraform(this._maximumBytesPerPacket),
      maximum_bytes_per_session: cdktn.numberToTerraform(this._maximumBytesPerSession),
      maximum_capture_duration: cdktn.numberToTerraform(this._maximumCaptureDuration),
      name: cdktn.stringToTerraform(this._name),
      network_watcher_name: cdktn.stringToTerraform(this._networkWatcherName),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      target_resource_id: cdktn.stringToTerraform(this._targetResourceId),
      filter: cdktn.listMapper(networkPacketCaptureFilterToTerraform, true)(this._filter.internalValue),
      storage_location: networkPacketCaptureStorageLocationToTerraform(this._storageLocation.internalValue),
      timeouts: networkPacketCaptureTimeoutsToTerraform(this._timeouts.internalValue),
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
      maximum_bytes_per_packet: {
        value: cdktn.numberToHclTerraform(this._maximumBytesPerPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_bytes_per_session: {
        value: cdktn.numberToHclTerraform(this._maximumBytesPerSession),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_capture_duration: {
        value: cdktn.numberToHclTerraform(this._maximumCaptureDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_watcher_name: {
        value: cdktn.stringToHclTerraform(this._networkWatcherName),
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
      target_resource_id: {
        value: cdktn.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktn.listMapperHcl(networkPacketCaptureFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPacketCaptureFilterList",
      },
      storage_location: {
        value: networkPacketCaptureStorageLocationToHclTerraform(this._storageLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPacketCaptureStorageLocationList",
      },
      timeouts: {
        value: networkPacketCaptureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkPacketCaptureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
