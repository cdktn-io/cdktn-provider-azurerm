/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DevTestWindowsVirtualMachineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#allow_claim DevTestWindowsVirtualMachine#allow_claim}
  */
  readonly allowClaim?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#disallow_public_ip_address DevTestWindowsVirtualMachine#disallow_public_ip_address}
  */
  readonly disallowPublicIpAddress?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#id DevTestWindowsVirtualMachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#lab_name DevTestWindowsVirtualMachine#lab_name}
  */
  readonly labName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#lab_subnet_name DevTestWindowsVirtualMachine#lab_subnet_name}
  */
  readonly labSubnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#lab_virtual_network_id DevTestWindowsVirtualMachine#lab_virtual_network_id}
  */
  readonly labVirtualNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#location DevTestWindowsVirtualMachine#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#name DevTestWindowsVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#notes DevTestWindowsVirtualMachine#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#password DevTestWindowsVirtualMachine#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#resource_group_name DevTestWindowsVirtualMachine#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#size DevTestWindowsVirtualMachine#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#storage_type DevTestWindowsVirtualMachine#storage_type}
  */
  readonly storageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#tags DevTestWindowsVirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#username DevTestWindowsVirtualMachine#username}
  */
  readonly username: string;
  /**
  * gallery_image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#gallery_image_reference DevTestWindowsVirtualMachine#gallery_image_reference}
  */
  readonly galleryImageReference: DevTestWindowsVirtualMachineGalleryImageReference;
  /**
  * inbound_nat_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#inbound_nat_rule DevTestWindowsVirtualMachine#inbound_nat_rule}
  */
  readonly inboundNatRule?: DevTestWindowsVirtualMachineInboundNatRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#timeouts DevTestWindowsVirtualMachine#timeouts}
  */
  readonly timeouts?: DevTestWindowsVirtualMachineTimeouts;
}
export interface DevTestWindowsVirtualMachineGalleryImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#offer DevTestWindowsVirtualMachine#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#publisher DevTestWindowsVirtualMachine#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#sku DevTestWindowsVirtualMachine#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#version DevTestWindowsVirtualMachine#version}
  */
  readonly version: string;
}

export function devTestWindowsVirtualMachineGalleryImageReferenceToTerraform(struct?: DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference | DevTestWindowsVirtualMachineGalleryImageReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    offer: cdktn.stringToTerraform(struct!.offer),
    publisher: cdktn.stringToTerraform(struct!.publisher),
    sku: cdktn.stringToTerraform(struct!.sku),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function devTestWindowsVirtualMachineGalleryImageReferenceToHclTerraform(struct?: DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference | DevTestWindowsVirtualMachineGalleryImageReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    offer: {
      value: cdktn.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktn.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktn.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevTestWindowsVirtualMachineGalleryImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevTestWindowsVirtualMachineGalleryImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DevTestWindowsVirtualMachineInboundNatRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#backend_port DevTestWindowsVirtualMachine#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#protocol DevTestWindowsVirtualMachine#protocol}
  */
  readonly protocol: string;
}

export function devTestWindowsVirtualMachineInboundNatRuleToTerraform(struct?: DevTestWindowsVirtualMachineInboundNatRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    backend_port: cdktn.numberToTerraform(struct!.backendPort),
    protocol: cdktn.stringToTerraform(struct!.protocol),
  }
}


export function devTestWindowsVirtualMachineInboundNatRuleToHclTerraform(struct?: DevTestWindowsVirtualMachineInboundNatRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    backend_port: {
      value: cdktn.numberToHclTerraform(struct!.backendPort),
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

export class DevTestWindowsVirtualMachineInboundNatRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DevTestWindowsVirtualMachineInboundNatRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPort = this._backendPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevTestWindowsVirtualMachineInboundNatRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendPort = undefined;
      this._protocol = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendPort = value.backendPort;
      this._protocol = value.protocol;
    }
  }

  // backend_port - computed: false, optional: false, required: true
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // frontend_port - computed: true, optional: false, required: false
  public get frontendPort() {
    return this.getNumberAttribute('frontend_port');
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
}

export class DevTestWindowsVirtualMachineInboundNatRuleList extends cdktn.ComplexList {
  public internalValue? : DevTestWindowsVirtualMachineInboundNatRule[] | cdktn.IResolvable

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
  public get(index: number): DevTestWindowsVirtualMachineInboundNatRuleOutputReference {
    return new DevTestWindowsVirtualMachineInboundNatRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevTestWindowsVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#create DevTestWindowsVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#delete DevTestWindowsVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#read DevTestWindowsVirtualMachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#update DevTestWindowsVirtualMachine#update}
  */
  readonly update?: string;
}

export function devTestWindowsVirtualMachineTimeoutsToTerraform(struct?: DevTestWindowsVirtualMachineTimeouts | cdktn.IResolvable): any {
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


export function devTestWindowsVirtualMachineTimeoutsToHclTerraform(struct?: DevTestWindowsVirtualMachineTimeouts | cdktn.IResolvable): any {
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

export class DevTestWindowsVirtualMachineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevTestWindowsVirtualMachineTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DevTestWindowsVirtualMachineTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine azurerm_dev_test_windows_virtual_machine}
*/
export class DevTestWindowsVirtualMachine extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_dev_test_windows_virtual_machine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DevTestWindowsVirtualMachine resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevTestWindowsVirtualMachine to import
  * @param importFromId The id of the existing DevTestWindowsVirtualMachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevTestWindowsVirtualMachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_dev_test_windows_virtual_machine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/dev_test_windows_virtual_machine azurerm_dev_test_windows_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevTestWindowsVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: DevTestWindowsVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dev_test_windows_virtual_machine',
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
    this._allowClaim = config.allowClaim;
    this._disallowPublicIpAddress = config.disallowPublicIpAddress;
    this._id = config.id;
    this._labName = config.labName;
    this._labSubnetName = config.labSubnetName;
    this._labVirtualNetworkId = config.labVirtualNetworkId;
    this._location = config.location;
    this._name = config.name;
    this._notes = config.notes;
    this._password = config.password;
    this._resourceGroupName = config.resourceGroupName;
    this._size = config.size;
    this._storageType = config.storageType;
    this._tags = config.tags;
    this._username = config.username;
    this._galleryImageReference.internalValue = config.galleryImageReference;
    this._inboundNatRule.internalValue = config.inboundNatRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_claim - computed: false, optional: true, required: false
  private _allowClaim?: boolean | cdktn.IResolvable; 
  public get allowClaim() {
    return this.getBooleanAttribute('allow_claim');
  }
  public set allowClaim(value: boolean | cdktn.IResolvable) {
    this._allowClaim = value;
  }
  public resetAllowClaim() {
    this._allowClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClaimInput() {
    return this._allowClaim;
  }

  // disallow_public_ip_address - computed: false, optional: true, required: false
  private _disallowPublicIpAddress?: boolean | cdktn.IResolvable; 
  public get disallowPublicIpAddress() {
    return this.getBooleanAttribute('disallow_public_ip_address');
  }
  public set disallowPublicIpAddress(value: boolean | cdktn.IResolvable) {
    this._disallowPublicIpAddress = value;
  }
  public resetDisallowPublicIpAddress() {
    this._disallowPublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowPublicIpAddressInput() {
    return this._disallowPublicIpAddress;
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

  // lab_name - computed: false, optional: false, required: true
  private _labName?: string; 
  public get labName() {
    return this.getStringAttribute('lab_name');
  }
  public set labName(value: string) {
    this._labName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labNameInput() {
    return this._labName;
  }

  // lab_subnet_name - computed: false, optional: false, required: true
  private _labSubnetName?: string; 
  public get labSubnetName() {
    return this.getStringAttribute('lab_subnet_name');
  }
  public set labSubnetName(value: string) {
    this._labSubnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labSubnetNameInput() {
    return this._labSubnetName;
  }

  // lab_virtual_network_id - computed: false, optional: false, required: true
  private _labVirtualNetworkId?: string; 
  public get labVirtualNetworkId() {
    return this.getStringAttribute('lab_virtual_network_id');
  }
  public set labVirtualNetworkId(value: string) {
    this._labVirtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labVirtualNetworkIdInput() {
    return this._labVirtualNetworkId;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // unique_identifier - computed: true, optional: false, required: false
  public get uniqueIdentifier() {
    return this.getStringAttribute('unique_identifier');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // gallery_image_reference - computed: false, optional: false, required: true
  private _galleryImageReference = new DevTestWindowsVirtualMachineGalleryImageReferenceOutputReference(this, "gallery_image_reference");
  public get galleryImageReference() {
    return this._galleryImageReference;
  }
  public putGalleryImageReference(value: DevTestWindowsVirtualMachineGalleryImageReference) {
    this._galleryImageReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get galleryImageReferenceInput() {
    return this._galleryImageReference.internalValue;
  }

  // inbound_nat_rule - computed: false, optional: true, required: false
  private _inboundNatRule = new DevTestWindowsVirtualMachineInboundNatRuleList(this, "inbound_nat_rule", true);
  public get inboundNatRule() {
    return this._inboundNatRule;
  }
  public putInboundNatRule(value: DevTestWindowsVirtualMachineInboundNatRule[] | cdktn.IResolvable) {
    this._inboundNatRule.internalValue = value;
  }
  public resetInboundNatRule() {
    this._inboundNatRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundNatRuleInput() {
    return this._inboundNatRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevTestWindowsVirtualMachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevTestWindowsVirtualMachineTimeouts) {
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
      allow_claim: cdktn.booleanToTerraform(this._allowClaim),
      disallow_public_ip_address: cdktn.booleanToTerraform(this._disallowPublicIpAddress),
      id: cdktn.stringToTerraform(this._id),
      lab_name: cdktn.stringToTerraform(this._labName),
      lab_subnet_name: cdktn.stringToTerraform(this._labSubnetName),
      lab_virtual_network_id: cdktn.stringToTerraform(this._labVirtualNetworkId),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      notes: cdktn.stringToTerraform(this._notes),
      password: cdktn.stringToTerraform(this._password),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      size: cdktn.stringToTerraform(this._size),
      storage_type: cdktn.stringToTerraform(this._storageType),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      username: cdktn.stringToTerraform(this._username),
      gallery_image_reference: devTestWindowsVirtualMachineGalleryImageReferenceToTerraform(this._galleryImageReference.internalValue),
      inbound_nat_rule: cdktn.listMapper(devTestWindowsVirtualMachineInboundNatRuleToTerraform, true)(this._inboundNatRule.internalValue),
      timeouts: devTestWindowsVirtualMachineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_claim: {
        value: cdktn.booleanToHclTerraform(this._allowClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disallow_public_ip_address: {
        value: cdktn.booleanToHclTerraform(this._disallowPublicIpAddress),
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
      lab_name: {
        value: cdktn.stringToHclTerraform(this._labName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lab_subnet_name: {
        value: cdktn.stringToHclTerraform(this._labSubnetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lab_virtual_network_id: {
        value: cdktn.stringToHclTerraform(this._labVirtualNetworkId),
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
      notes: {
        value: cdktn.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
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
      size: {
        value: cdktn.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktn.stringToHclTerraform(this._storageType),
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
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gallery_image_reference: {
        value: devTestWindowsVirtualMachineGalleryImageReferenceToHclTerraform(this._galleryImageReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevTestWindowsVirtualMachineGalleryImageReferenceList",
      },
      inbound_nat_rule: {
        value: cdktn.listMapperHcl(devTestWindowsVirtualMachineInboundNatRuleToHclTerraform, true)(this._inboundNatRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DevTestWindowsVirtualMachineInboundNatRuleList",
      },
      timeouts: {
        value: devTestWindowsVirtualMachineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevTestWindowsVirtualMachineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
