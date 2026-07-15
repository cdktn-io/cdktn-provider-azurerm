/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DashboardGrafanaManagedPrivateEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#grafana_id DashboardGrafanaManagedPrivateEndpoint#grafana_id}
  */
  readonly grafanaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#group_ids DashboardGrafanaManagedPrivateEndpoint#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#id DashboardGrafanaManagedPrivateEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#location DashboardGrafanaManagedPrivateEndpoint#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#name DashboardGrafanaManagedPrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_id DashboardGrafanaManagedPrivateEndpoint#private_link_resource_id}
  */
  readonly privateLinkResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_resource_region DashboardGrafanaManagedPrivateEndpoint#private_link_resource_region}
  */
  readonly privateLinkResourceRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#private_link_service_url DashboardGrafanaManagedPrivateEndpoint#private_link_service_url}
  */
  readonly privateLinkServiceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#request_message DashboardGrafanaManagedPrivateEndpoint#request_message}
  */
  readonly requestMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#tags DashboardGrafanaManagedPrivateEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#timeouts DashboardGrafanaManagedPrivateEndpoint#timeouts}
  */
  readonly timeouts?: DashboardGrafanaManagedPrivateEndpointTimeouts;
}
export interface DashboardGrafanaManagedPrivateEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#create DashboardGrafanaManagedPrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#delete DashboardGrafanaManagedPrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#read DashboardGrafanaManagedPrivateEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#update DashboardGrafanaManagedPrivateEndpoint#update}
  */
  readonly update?: string;
}

export function dashboardGrafanaManagedPrivateEndpointTimeoutsToTerraform(struct?: DashboardGrafanaManagedPrivateEndpointTimeouts | cdktn.IResolvable): any {
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


export function dashboardGrafanaManagedPrivateEndpointTimeoutsToHclTerraform(struct?: DashboardGrafanaManagedPrivateEndpointTimeouts | cdktn.IResolvable): any {
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

export class DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DashboardGrafanaManagedPrivateEndpointTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DashboardGrafanaManagedPrivateEndpointTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint azurerm_dashboard_grafana_managed_private_endpoint}
*/
export class DashboardGrafanaManagedPrivateEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_dashboard_grafana_managed_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DashboardGrafanaManagedPrivateEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardGrafanaManagedPrivateEndpoint to import
  * @param importFromId The id of the existing DashboardGrafanaManagedPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardGrafanaManagedPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_dashboard_grafana_managed_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/dashboard_grafana_managed_private_endpoint azurerm_dashboard_grafana_managed_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardGrafanaManagedPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardGrafanaManagedPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_dashboard_grafana_managed_private_endpoint',
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
    this._grafanaId = config.grafanaId;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._privateLinkResourceId = config.privateLinkResourceId;
    this._privateLinkResourceRegion = config.privateLinkResourceRegion;
    this._privateLinkServiceUrl = config.privateLinkServiceUrl;
    this._requestMessage = config.requestMessage;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grafana_id - computed: false, optional: false, required: true
  private _grafanaId?: string; 
  public get grafanaId() {
    return this.getStringAttribute('grafana_id');
  }
  public set grafanaId(value: string) {
    this._grafanaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaIdInput() {
    return this._grafanaId;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // private_link_resource_id - computed: false, optional: false, required: true
  private _privateLinkResourceId?: string; 
  public get privateLinkResourceId() {
    return this.getStringAttribute('private_link_resource_id');
  }
  public set privateLinkResourceId(value: string) {
    this._privateLinkResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkResourceIdInput() {
    return this._privateLinkResourceId;
  }

  // private_link_resource_region - computed: false, optional: true, required: false
  private _privateLinkResourceRegion?: string; 
  public get privateLinkResourceRegion() {
    return this.getStringAttribute('private_link_resource_region');
  }
  public set privateLinkResourceRegion(value: string) {
    this._privateLinkResourceRegion = value;
  }
  public resetPrivateLinkResourceRegion() {
    this._privateLinkResourceRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkResourceRegionInput() {
    return this._privateLinkResourceRegion;
  }

  // private_link_service_url - computed: false, optional: true, required: false
  private _privateLinkServiceUrl?: string; 
  public get privateLinkServiceUrl() {
    return this.getStringAttribute('private_link_service_url');
  }
  public set privateLinkServiceUrl(value: string) {
    this._privateLinkServiceUrl = value;
  }
  public resetPrivateLinkServiceUrl() {
    this._privateLinkServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkServiceUrlInput() {
    return this._privateLinkServiceUrl;
  }

  // request_message - computed: false, optional: true, required: false
  private _requestMessage?: string; 
  public get requestMessage() {
    return this.getStringAttribute('request_message');
  }
  public set requestMessage(value: string) {
    this._requestMessage = value;
  }
  public resetRequestMessage() {
    this._requestMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMessageInput() {
    return this._requestMessage;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DashboardGrafanaManagedPrivateEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DashboardGrafanaManagedPrivateEndpointTimeouts) {
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
      grafana_id: cdktn.stringToTerraform(this._grafanaId),
      group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._groupIds),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      private_link_resource_id: cdktn.stringToTerraform(this._privateLinkResourceId),
      private_link_resource_region: cdktn.stringToTerraform(this._privateLinkResourceRegion),
      private_link_service_url: cdktn.stringToTerraform(this._privateLinkServiceUrl),
      request_message: cdktn.stringToTerraform(this._requestMessage),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      timeouts: dashboardGrafanaManagedPrivateEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grafana_id: {
        value: cdktn.stringToHclTerraform(this._grafanaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      private_link_resource_id: {
        value: cdktn.stringToHclTerraform(this._privateLinkResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_link_resource_region: {
        value: cdktn.stringToHclTerraform(this._privateLinkResourceRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_link_service_url: {
        value: cdktn.stringToHclTerraform(this._privateLinkServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_message: {
        value: cdktn.stringToHclTerraform(this._requestMessage),
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
      timeouts: {
        value: dashboardGrafanaManagedPrivateEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DashboardGrafanaManagedPrivateEndpointTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
