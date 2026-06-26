/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EventgridPartnerNamespaceConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#id EventgridPartnerNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#local_authentication_enabled EventgridPartnerNamespace#local_authentication_enabled}
  */
  readonly localAuthenticationEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#location EventgridPartnerNamespace#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#name EventgridPartnerNamespace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#partner_registration_id EventgridPartnerNamespace#partner_registration_id}
  */
  readonly partnerRegistrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#partner_topic_routing_mode EventgridPartnerNamespace#partner_topic_routing_mode}
  */
  readonly partnerTopicRoutingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#public_network_access EventgridPartnerNamespace#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#resource_group_name EventgridPartnerNamespace#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#tags EventgridPartnerNamespace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * inbound_ip_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#inbound_ip_rule EventgridPartnerNamespace#inbound_ip_rule}
  */
  readonly inboundIpRule?: EventgridPartnerNamespaceInboundIpRule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#timeouts EventgridPartnerNamespace#timeouts}
  */
  readonly timeouts?: EventgridPartnerNamespaceTimeouts;
}
export interface EventgridPartnerNamespaceInboundIpRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#action EventgridPartnerNamespace#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#ip_mask EventgridPartnerNamespace#ip_mask}
  */
  readonly ipMask: string;
}

export function eventgridPartnerNamespaceInboundIpRuleToTerraform(struct?: EventgridPartnerNamespaceInboundIpRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    ip_mask: cdktn.stringToTerraform(struct!.ipMask),
  }
}


export function eventgridPartnerNamespaceInboundIpRuleToHclTerraform(struct?: EventgridPartnerNamespaceInboundIpRule | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventgridPartnerNamespaceInboundIpRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): EventgridPartnerNamespaceInboundIpRule | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventgridPartnerNamespaceInboundIpRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ipMask = undefined;
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
}

export class EventgridPartnerNamespaceInboundIpRuleList extends cdktn.ComplexList {
  public internalValue? : EventgridPartnerNamespaceInboundIpRule[] | cdktn.IResolvable

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
  public get(index: number): EventgridPartnerNamespaceInboundIpRuleOutputReference {
    return new EventgridPartnerNamespaceInboundIpRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventgridPartnerNamespaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#create EventgridPartnerNamespace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#delete EventgridPartnerNamespace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#read EventgridPartnerNamespace#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#update EventgridPartnerNamespace#update}
  */
  readonly update?: string;
}

export function eventgridPartnerNamespaceTimeoutsToTerraform(struct?: EventgridPartnerNamespaceTimeouts | cdktn.IResolvable): any {
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


export function eventgridPartnerNamespaceTimeoutsToHclTerraform(struct?: EventgridPartnerNamespaceTimeouts | cdktn.IResolvable): any {
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

export class EventgridPartnerNamespaceTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventgridPartnerNamespaceTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: EventgridPartnerNamespaceTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace azurerm_eventgrid_partner_namespace}
*/
export class EventgridPartnerNamespace extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_eventgrid_partner_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a EventgridPartnerNamespace resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventgridPartnerNamespace to import
  * @param importFromId The id of the existing EventgridPartnerNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventgridPartnerNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_eventgrid_partner_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/eventgrid_partner_namespace azurerm_eventgrid_partner_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridPartnerNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridPartnerNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_partner_namespace',
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
    this._localAuthenticationEnabled = config.localAuthenticationEnabled;
    this._location = config.location;
    this._name = config.name;
    this._partnerRegistrationId = config.partnerRegistrationId;
    this._partnerTopicRoutingMode = config.partnerTopicRoutingMode;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._inboundIpRule.internalValue = config.inboundIpRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // partner_registration_id - computed: false, optional: false, required: true
  private _partnerRegistrationId?: string; 
  public get partnerRegistrationId() {
    return this.getStringAttribute('partner_registration_id');
  }
  public set partnerRegistrationId(value: string) {
    this._partnerRegistrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerRegistrationIdInput() {
    return this._partnerRegistrationId;
  }

  // partner_topic_routing_mode - computed: false, optional: true, required: false
  private _partnerTopicRoutingMode?: string; 
  public get partnerTopicRoutingMode() {
    return this.getStringAttribute('partner_topic_routing_mode');
  }
  public set partnerTopicRoutingMode(value: string) {
    this._partnerTopicRoutingMode = value;
  }
  public resetPartnerTopicRoutingMode() {
    this._partnerTopicRoutingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerTopicRoutingModeInput() {
    return this._partnerTopicRoutingMode;
  }

  // public_network_access - computed: false, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
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

  // inbound_ip_rule - computed: false, optional: true, required: false
  private _inboundIpRule = new EventgridPartnerNamespaceInboundIpRuleList(this, "inbound_ip_rule", false);
  public get inboundIpRule() {
    return this._inboundIpRule;
  }
  public putInboundIpRule(value: EventgridPartnerNamespaceInboundIpRule[] | cdktn.IResolvable) {
    this._inboundIpRule.internalValue = value;
  }
  public resetInboundIpRule() {
    this._inboundIpRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpRuleInput() {
    return this._inboundIpRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventgridPartnerNamespaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventgridPartnerNamespaceTimeouts) {
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
      local_authentication_enabled: cdktn.booleanToTerraform(this._localAuthenticationEnabled),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      partner_registration_id: cdktn.stringToTerraform(this._partnerRegistrationId),
      partner_topic_routing_mode: cdktn.stringToTerraform(this._partnerTopicRoutingMode),
      public_network_access: cdktn.stringToTerraform(this._publicNetworkAccess),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      inbound_ip_rule: cdktn.listMapper(eventgridPartnerNamespaceInboundIpRuleToTerraform, true)(this._inboundIpRule.internalValue),
      timeouts: eventgridPartnerNamespaceTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_registration_id: {
        value: cdktn.stringToHclTerraform(this._partnerRegistrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_topic_routing_mode: {
        value: cdktn.stringToHclTerraform(this._partnerTopicRoutingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_access: {
        value: cdktn.stringToHclTerraform(this._publicNetworkAccess),
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
      inbound_ip_rule: {
        value: cdktn.listMapperHcl(eventgridPartnerNamespaceInboundIpRuleToHclTerraform, true)(this._inboundIpRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventgridPartnerNamespaceInboundIpRuleList",
      },
      timeouts: {
        value: eventgridPartnerNamespaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventgridPartnerNamespaceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
