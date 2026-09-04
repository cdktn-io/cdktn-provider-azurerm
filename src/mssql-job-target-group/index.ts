/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MssqlJobTargetGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#id MssqlJobTargetGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#job_agent_id MssqlJobTargetGroup#job_agent_id}
  */
  readonly jobAgentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#name MssqlJobTargetGroup#name}
  */
  readonly name: string;
  /**
  * job_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#job_target MssqlJobTargetGroup#job_target}
  */
  readonly jobTarget?: MssqlJobTargetGroupJobTarget[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#timeouts MssqlJobTargetGroup#timeouts}
  */
  readonly timeouts?: MssqlJobTargetGroupTimeouts;
}
export interface MssqlJobTargetGroupJobTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#database_name MssqlJobTargetGroup#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#elastic_pool_name MssqlJobTargetGroup#elastic_pool_name}
  */
  readonly elasticPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#job_credential_id MssqlJobTargetGroup#job_credential_id}
  */
  readonly jobCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#membership_type MssqlJobTargetGroup#membership_type}
  */
  readonly membershipType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#server_name MssqlJobTargetGroup#server_name}
  */
  readonly serverName: string;
}

export function mssqlJobTargetGroupJobTargetToTerraform(struct?: MssqlJobTargetGroupJobTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    database_name: cdktn.stringToTerraform(struct!.databaseName),
    elastic_pool_name: cdktn.stringToTerraform(struct!.elasticPoolName),
    job_credential_id: cdktn.stringToTerraform(struct!.jobCredentialId),
    membership_type: cdktn.stringToTerraform(struct!.membershipType),
    server_name: cdktn.stringToTerraform(struct!.serverName),
  }
}


export function mssqlJobTargetGroupJobTargetToHclTerraform(struct?: MssqlJobTargetGroupJobTarget | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    database_name: {
      value: cdktn.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elastic_pool_name: {
      value: cdktn.stringToHclTerraform(struct!.elasticPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_credential_id: {
      value: cdktn.stringToHclTerraform(struct!.jobCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    membership_type: {
      value: cdktn.stringToHclTerraform(struct!.membershipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlJobTargetGroupJobTargetOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MssqlJobTargetGroupJobTarget | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._elasticPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticPoolName = this._elasticPoolName;
    }
    if (this._jobCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCredentialId = this._jobCredentialId;
    }
    if (this._membershipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.membershipType = this._membershipType;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlJobTargetGroupJobTarget | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._elasticPoolName = undefined;
      this._jobCredentialId = undefined;
      this._membershipType = undefined;
      this._serverName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._elasticPoolName = value.elasticPoolName;
      this._jobCredentialId = value.jobCredentialId;
      this._membershipType = value.membershipType;
      this._serverName = value.serverName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // elastic_pool_name - computed: false, optional: true, required: false
  private _elasticPoolName?: string; 
  public get elasticPoolName() {
    return this.getStringAttribute('elastic_pool_name');
  }
  public set elasticPoolName(value: string) {
    this._elasticPoolName = value;
  }
  public resetElasticPoolName() {
    this._elasticPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticPoolNameInput() {
    return this._elasticPoolName;
  }

  // job_credential_id - computed: false, optional: true, required: false
  private _jobCredentialId?: string; 
  public get jobCredentialId() {
    return this.getStringAttribute('job_credential_id');
  }
  public set jobCredentialId(value: string) {
    this._jobCredentialId = value;
  }
  public resetJobCredentialId() {
    this._jobCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCredentialIdInput() {
    return this._jobCredentialId;
  }

  // membership_type - computed: false, optional: true, required: false
  private _membershipType?: string; 
  public get membershipType() {
    return this.getStringAttribute('membership_type');
  }
  public set membershipType(value: string) {
    this._membershipType = value;
  }
  public resetMembershipType() {
    this._membershipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipTypeInput() {
    return this._membershipType;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class MssqlJobTargetGroupJobTargetList extends cdktn.ComplexList {
  public internalValue? : MssqlJobTargetGroupJobTarget[] | cdktn.IResolvable

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
  public get(index: number): MssqlJobTargetGroupJobTargetOutputReference {
    return new MssqlJobTargetGroupJobTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MssqlJobTargetGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#create MssqlJobTargetGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#delete MssqlJobTargetGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#read MssqlJobTargetGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#update MssqlJobTargetGroup#update}
  */
  readonly update?: string;
}

export function mssqlJobTargetGroupTimeoutsToTerraform(struct?: MssqlJobTargetGroupTimeouts | cdktn.IResolvable): any {
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


export function mssqlJobTargetGroupTimeoutsToHclTerraform(struct?: MssqlJobTargetGroupTimeouts | cdktn.IResolvable): any {
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

export class MssqlJobTargetGroupTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlJobTargetGroupTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MssqlJobTargetGroupTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group azurerm_mssql_job_target_group}
*/
export class MssqlJobTargetGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_job_target_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MssqlJobTargetGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlJobTargetGroup to import
  * @param importFromId The id of the existing MssqlJobTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlJobTargetGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_job_target_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/mssql_job_target_group azurerm_mssql_job_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlJobTargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlJobTargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_job_target_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.4.0',
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
    this._id = config.id;
    this._jobAgentId = config.jobAgentId;
    this._name = config.name;
    this._jobTarget.internalValue = config.jobTarget;
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

  // job_agent_id - computed: false, optional: false, required: true
  private _jobAgentId?: string; 
  public get jobAgentId() {
    return this.getStringAttribute('job_agent_id');
  }
  public set jobAgentId(value: string) {
    this._jobAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobAgentIdInput() {
    return this._jobAgentId;
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

  // job_target - computed: false, optional: true, required: false
  private _jobTarget = new MssqlJobTargetGroupJobTargetList(this, "job_target", true);
  public get jobTarget() {
    return this._jobTarget;
  }
  public putJobTarget(value: MssqlJobTargetGroupJobTarget[] | cdktn.IResolvable) {
    this._jobTarget.internalValue = value;
  }
  public resetJobTarget() {
    this._jobTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTargetInput() {
    return this._jobTarget.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlJobTargetGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlJobTargetGroupTimeouts) {
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
      job_agent_id: cdktn.stringToTerraform(this._jobAgentId),
      name: cdktn.stringToTerraform(this._name),
      job_target: cdktn.listMapper(mssqlJobTargetGroupJobTargetToTerraform, true)(this._jobTarget.internalValue),
      timeouts: mssqlJobTargetGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      job_agent_id: {
        value: cdktn.stringToHclTerraform(this._jobAgentId),
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
      job_target: {
        value: cdktn.listMapperHcl(mssqlJobTargetGroupJobTargetToHclTerraform, true)(this._jobTarget.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MssqlJobTargetGroupJobTargetList",
      },
      timeouts: {
        value: mssqlJobTargetGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlJobTargetGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
