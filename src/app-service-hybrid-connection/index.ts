/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AppServiceHybridConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#app_service_name AppServiceHybridConnection#app_service_name}
  */
  readonly appServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#hostname AppServiceHybridConnection#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#id AppServiceHybridConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#port AppServiceHybridConnection#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#relay_id AppServiceHybridConnection#relay_id}
  */
  readonly relayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#resource_group_name AppServiceHybridConnection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#send_key_name AppServiceHybridConnection#send_key_name}
  */
  readonly sendKeyName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#timeouts AppServiceHybridConnection#timeouts}
  */
  readonly timeouts?: AppServiceHybridConnectionTimeouts;
}
export interface AppServiceHybridConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#create AppServiceHybridConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#delete AppServiceHybridConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#read AppServiceHybridConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#update AppServiceHybridConnection#update}
  */
  readonly update?: string;
}

export function appServiceHybridConnectionTimeoutsToTerraform(struct?: AppServiceHybridConnectionTimeouts | cdktn.IResolvable): any {
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


export function appServiceHybridConnectionTimeoutsToHclTerraform(struct?: AppServiceHybridConnectionTimeouts | cdktn.IResolvable): any {
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

export class AppServiceHybridConnectionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppServiceHybridConnectionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AppServiceHybridConnectionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection azurerm_app_service_hybrid_connection}
*/
export class AppServiceHybridConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_app_service_hybrid_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AppServiceHybridConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppServiceHybridConnection to import
  * @param importFromId The id of the existing AppServiceHybridConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppServiceHybridConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_app_service_hybrid_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/app_service_hybrid_connection azurerm_app_service_hybrid_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppServiceHybridConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AppServiceHybridConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_app_service_hybrid_connection',
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
    this._appServiceName = config.appServiceName;
    this._hostname = config.hostname;
    this._id = config.id;
    this._port = config.port;
    this._relayId = config.relayId;
    this._resourceGroupName = config.resourceGroupName;
    this._sendKeyName = config.sendKeyName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_name - computed: false, optional: false, required: true
  private _appServiceName?: string; 
  public get appServiceName() {
    return this.getStringAttribute('app_service_name');
  }
  public set appServiceName(value: string) {
    this._appServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceNameInput() {
    return this._appServiceName;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // relay_id - computed: false, optional: false, required: true
  private _relayId?: string; 
  public get relayId() {
    return this.getStringAttribute('relay_id');
  }
  public set relayId(value: string) {
    this._relayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relayIdInput() {
    return this._relayId;
  }

  // relay_name - computed: true, optional: false, required: false
  public get relayName() {
    return this.getStringAttribute('relay_name');
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

  // send_key_name - computed: false, optional: true, required: false
  private _sendKeyName?: string; 
  public get sendKeyName() {
    return this.getStringAttribute('send_key_name');
  }
  public set sendKeyName(value: string) {
    this._sendKeyName = value;
  }
  public resetSendKeyName() {
    this._sendKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendKeyNameInput() {
    return this._sendKeyName;
  }

  // send_key_value - computed: true, optional: false, required: false
  public get sendKeyValue() {
    return this.getStringAttribute('send_key_value');
  }

  // service_bus_namespace - computed: true, optional: false, required: false
  public get serviceBusNamespace() {
    return this.getStringAttribute('service_bus_namespace');
  }

  // service_bus_suffix - computed: true, optional: false, required: false
  public get serviceBusSuffix() {
    return this.getStringAttribute('service_bus_suffix');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AppServiceHybridConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AppServiceHybridConnectionTimeouts) {
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
      app_service_name: cdktn.stringToTerraform(this._appServiceName),
      hostname: cdktn.stringToTerraform(this._hostname),
      id: cdktn.stringToTerraform(this._id),
      port: cdktn.numberToTerraform(this._port),
      relay_id: cdktn.stringToTerraform(this._relayId),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      send_key_name: cdktn.stringToTerraform(this._sendKeyName),
      timeouts: appServiceHybridConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service_name: {
        value: cdktn.stringToHclTerraform(this._appServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktn.stringToHclTerraform(this._hostname),
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
      port: {
        value: cdktn.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      relay_id: {
        value: cdktn.stringToHclTerraform(this._relayId),
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
      send_key_name: {
        value: cdktn.stringToHclTerraform(this._sendKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: appServiceHybridConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppServiceHybridConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
