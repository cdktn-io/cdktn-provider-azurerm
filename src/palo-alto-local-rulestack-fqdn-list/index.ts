/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PaloAltoLocalRulestackFqdnListConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#audit_comment PaloAltoLocalRulestackFqdnList#audit_comment}
  */
  readonly auditComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#description PaloAltoLocalRulestackFqdnList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#fully_qualified_domain_names PaloAltoLocalRulestackFqdnList#fully_qualified_domain_names}
  */
  readonly fullyQualifiedDomainNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#id PaloAltoLocalRulestackFqdnList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#name PaloAltoLocalRulestackFqdnList#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#rulestack_id PaloAltoLocalRulestackFqdnList#rulestack_id}
  */
  readonly rulestackId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#timeouts PaloAltoLocalRulestackFqdnList#timeouts}
  */
  readonly timeouts?: PaloAltoLocalRulestackFqdnListTimeouts;
}
export interface PaloAltoLocalRulestackFqdnListTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#create PaloAltoLocalRulestackFqdnList#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#delete PaloAltoLocalRulestackFqdnList#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#read PaloAltoLocalRulestackFqdnList#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#update PaloAltoLocalRulestackFqdnList#update}
  */
  readonly update?: string;
}

export function paloAltoLocalRulestackFqdnListTimeoutsToTerraform(struct?: PaloAltoLocalRulestackFqdnListTimeouts | cdktn.IResolvable): any {
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


export function paloAltoLocalRulestackFqdnListTimeoutsToHclTerraform(struct?: PaloAltoLocalRulestackFqdnListTimeouts | cdktn.IResolvable): any {
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

export class PaloAltoLocalRulestackFqdnListTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaloAltoLocalRulestackFqdnListTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PaloAltoLocalRulestackFqdnListTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list azurerm_palo_alto_local_rulestack_fqdn_list}
*/
export class PaloAltoLocalRulestackFqdnList extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_palo_alto_local_rulestack_fqdn_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PaloAltoLocalRulestackFqdnList resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaloAltoLocalRulestackFqdnList to import
  * @param importFromId The id of the existing PaloAltoLocalRulestackFqdnList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaloAltoLocalRulestackFqdnList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_palo_alto_local_rulestack_fqdn_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/resources/palo_alto_local_rulestack_fqdn_list azurerm_palo_alto_local_rulestack_fqdn_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaloAltoLocalRulestackFqdnListConfig
  */
  public constructor(scope: Construct, id: string, config: PaloAltoLocalRulestackFqdnListConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_palo_alto_local_rulestack_fqdn_list',
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
    this._auditComment = config.auditComment;
    this._description = config.description;
    this._fullyQualifiedDomainNames = config.fullyQualifiedDomainNames;
    this._id = config.id;
    this._name = config.name;
    this._rulestackId = config.rulestackId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_comment - computed: false, optional: true, required: false
  private _auditComment?: string; 
  public get auditComment() {
    return this.getStringAttribute('audit_comment');
  }
  public set auditComment(value: string) {
    this._auditComment = value;
  }
  public resetAuditComment() {
    this._auditComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCommentInput() {
    return this._auditComment;
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

  // fully_qualified_domain_names - computed: false, optional: false, required: true
  private _fullyQualifiedDomainNames?: string[]; 
  public get fullyQualifiedDomainNames() {
    return this.getListAttribute('fully_qualified_domain_names');
  }
  public set fullyQualifiedDomainNames(value: string[]) {
    this._fullyQualifiedDomainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullyQualifiedDomainNamesInput() {
    return this._fullyQualifiedDomainNames;
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

  // rulestack_id - computed: false, optional: false, required: true
  private _rulestackId?: string; 
  public get rulestackId() {
    return this.getStringAttribute('rulestack_id');
  }
  public set rulestackId(value: string) {
    this._rulestackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulestackIdInput() {
    return this._rulestackId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PaloAltoLocalRulestackFqdnListTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaloAltoLocalRulestackFqdnListTimeouts) {
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
      audit_comment: cdktn.stringToTerraform(this._auditComment),
      description: cdktn.stringToTerraform(this._description),
      fully_qualified_domain_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._fullyQualifiedDomainNames),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      rulestack_id: cdktn.stringToTerraform(this._rulestackId),
      timeouts: paloAltoLocalRulestackFqdnListTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_comment: {
        value: cdktn.stringToHclTerraform(this._auditComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fully_qualified_domain_names: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._fullyQualifiedDomainNames),
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
      rulestack_id: {
        value: cdktn.stringToHclTerraform(this._rulestackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: paloAltoLocalRulestackFqdnListTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaloAltoLocalRulestackFqdnListTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
