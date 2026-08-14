/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkSecurityPerimeterAccessRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#address_prefixes NetworkSecurityPerimeterAccessRule#address_prefixes}
  */
  readonly addressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#direction NetworkSecurityPerimeterAccessRule#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#fqdns NetworkSecurityPerimeterAccessRule#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#id NetworkSecurityPerimeterAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#name NetworkSecurityPerimeterAccessRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#network_security_perimeter_profile_id NetworkSecurityPerimeterAccessRule#network_security_perimeter_profile_id}
  */
  readonly networkSecurityPerimeterProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#service_tags NetworkSecurityPerimeterAccessRule#service_tags}
  */
  readonly serviceTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#subscription_ids NetworkSecurityPerimeterAccessRule#subscription_ids}
  */
  readonly subscriptionIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#timeouts NetworkSecurityPerimeterAccessRule#timeouts}
  */
  readonly timeouts?: NetworkSecurityPerimeterAccessRuleTimeouts;
}
export interface NetworkSecurityPerimeterAccessRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#create NetworkSecurityPerimeterAccessRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#delete NetworkSecurityPerimeterAccessRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#read NetworkSecurityPerimeterAccessRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#update NetworkSecurityPerimeterAccessRule#update}
  */
  readonly update?: string;
}

export function networkSecurityPerimeterAccessRuleTimeoutsToTerraform(struct?: NetworkSecurityPerimeterAccessRuleTimeouts | cdktn.IResolvable): any {
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


export function networkSecurityPerimeterAccessRuleTimeoutsToHclTerraform(struct?: NetworkSecurityPerimeterAccessRuleTimeouts | cdktn.IResolvable): any {
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

export class NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityPerimeterAccessRuleTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityPerimeterAccessRuleTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule azurerm_network_security_perimeter_access_rule}
*/
export class NetworkSecurityPerimeterAccessRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_network_security_perimeter_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkSecurityPerimeterAccessRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityPerimeterAccessRule to import
  * @param importFromId The id of the existing NetworkSecurityPerimeterAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityPerimeterAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_network_security_perimeter_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/network_security_perimeter_access_rule azurerm_network_security_perimeter_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityPerimeterAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityPerimeterAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_network_security_perimeter_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.1.0',
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
    this._addressPrefixes = config.addressPrefixes;
    this._direction = config.direction;
    this._fqdns = config.fqdns;
    this._id = config.id;
    this._name = config.name;
    this._networkSecurityPerimeterProfileId = config.networkSecurityPerimeterProfileId;
    this._serviceTags = config.serviceTags;
    this._subscriptionIds = config.subscriptionIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_prefixes - computed: false, optional: true, required: false
  private _addressPrefixes?: string[]; 
  public get addressPrefixes() {
    return this.getListAttribute('address_prefixes');
  }
  public set addressPrefixes(value: string[]) {
    this._addressPrefixes = value;
  }
  public resetAddressPrefixes() {
    this._addressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixesInput() {
    return this._addressPrefixes;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // fqdns - computed: false, optional: true, required: false
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
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

  // network_security_perimeter_profile_id - computed: false, optional: false, required: true
  private _networkSecurityPerimeterProfileId?: string; 
  public get networkSecurityPerimeterProfileId() {
    return this.getStringAttribute('network_security_perimeter_profile_id');
  }
  public set networkSecurityPerimeterProfileId(value: string) {
    this._networkSecurityPerimeterProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityPerimeterProfileIdInput() {
    return this._networkSecurityPerimeterProfileId;
  }

  // service_tags - computed: false, optional: true, required: false
  private _serviceTags?: string[]; 
  public get serviceTags() {
    return this.getListAttribute('service_tags');
  }
  public set serviceTags(value: string[]) {
    this._serviceTags = value;
  }
  public resetServiceTags() {
    this._serviceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagsInput() {
    return this._serviceTags;
  }

  // subscription_ids - computed: false, optional: true, required: false
  private _subscriptionIds?: string[]; 
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }
  public set subscriptionIds(value: string[]) {
    this._subscriptionIds = value;
  }
  public resetSubscriptionIds() {
    this._subscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdsInput() {
    return this._subscriptionIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityPerimeterAccessRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityPerimeterAccessRuleTimeouts) {
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
      address_prefixes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._addressPrefixes),
      direction: cdktn.stringToTerraform(this._direction),
      fqdns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._fqdns),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      network_security_perimeter_profile_id: cdktn.stringToTerraform(this._networkSecurityPerimeterProfileId),
      service_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._serviceTags),
      subscription_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._subscriptionIds),
      timeouts: networkSecurityPerimeterAccessRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_prefixes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._addressPrefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      direction: {
        value: cdktn.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._fqdns),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_security_perimeter_profile_id: {
        value: cdktn.stringToHclTerraform(this._networkSecurityPerimeterProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._serviceTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subscription_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._subscriptionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: networkSecurityPerimeterAccessRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecurityPerimeterAccessRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
