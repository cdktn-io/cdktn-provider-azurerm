/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RedisEnterpriseDatabaseConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}
  */
  readonly clientProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}
  */
  readonly clusteringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}
  */
  readonly linkedDatabaseGroupNickname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}
  */
  readonly linkedDatabaseId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}
  */
  readonly port?: number;
  /**
  * module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#module RedisEnterpriseDatabase#module}
  */
  readonly module?: RedisEnterpriseDatabaseModule[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#timeouts RedisEnterpriseDatabase#timeouts}
  */
  readonly timeouts?: RedisEnterpriseDatabaseTimeouts;
}
export interface RedisEnterpriseDatabaseModule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#args RedisEnterpriseDatabase#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}
  */
  readonly name: string;
}

export function redisEnterpriseDatabaseModuleToTerraform(struct?: RedisEnterpriseDatabaseModule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    args: cdktn.stringToTerraform(struct!.args),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function redisEnterpriseDatabaseModuleToHclTerraform(struct?: RedisEnterpriseDatabaseModule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    args: {
      value: cdktn.stringToHclTerraform(struct!.args),
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

export class RedisEnterpriseDatabaseModuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): RedisEnterpriseDatabaseModule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisEnterpriseDatabaseModule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._name = value.name;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string; 
  public get args() {
    return this.getStringAttribute('args');
  }
  public set args(value: string) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class RedisEnterpriseDatabaseModuleList extends cdktn.ComplexList {
  public internalValue? : RedisEnterpriseDatabaseModule[] | cdktn.IResolvable

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
  public get(index: number): RedisEnterpriseDatabaseModuleOutputReference {
    return new RedisEnterpriseDatabaseModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisEnterpriseDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#create RedisEnterpriseDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#read RedisEnterpriseDatabase#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#update RedisEnterpriseDatabase#update}
  */
  readonly update?: string;
}

export function redisEnterpriseDatabaseTimeoutsToTerraform(struct?: RedisEnterpriseDatabaseTimeouts | cdktn.IResolvable): any {
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


export function redisEnterpriseDatabaseTimeoutsToHclTerraform(struct?: RedisEnterpriseDatabaseTimeouts | cdktn.IResolvable): any {
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

export class RedisEnterpriseDatabaseTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisEnterpriseDatabaseTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: RedisEnterpriseDatabaseTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database azurerm_redis_enterprise_database}
*/
export class RedisEnterpriseDatabase extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_redis_enterprise_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RedisEnterpriseDatabase resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisEnterpriseDatabase to import
  * @param importFromId The id of the existing RedisEnterpriseDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisEnterpriseDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_redis_enterprise_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/redis_enterprise_database azurerm_redis_enterprise_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisEnterpriseDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: RedisEnterpriseDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_enterprise_database',
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
    this._clientProtocol = config.clientProtocol;
    this._clusterId = config.clusterId;
    this._clusteringPolicy = config.clusteringPolicy;
    this._evictionPolicy = config.evictionPolicy;
    this._id = config.id;
    this._linkedDatabaseGroupNickname = config.linkedDatabaseGroupNickname;
    this._linkedDatabaseId = config.linkedDatabaseId;
    this._name = config.name;
    this._port = config.port;
    this._module.internalValue = config.module;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_protocol - computed: false, optional: true, required: false
  private _clientProtocol?: string; 
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }
  public set clientProtocol(value: string) {
    this._clientProtocol = value;
  }
  public resetClientProtocol() {
    this._clientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProtocolInput() {
    return this._clientProtocol;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // clustering_policy - computed: false, optional: true, required: false
  private _clusteringPolicy?: string; 
  public get clusteringPolicy() {
    return this.getStringAttribute('clustering_policy');
  }
  public set clusteringPolicy(value: string) {
    this._clusteringPolicy = value;
  }
  public resetClusteringPolicy() {
    this._clusteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringPolicyInput() {
    return this._clusteringPolicy;
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
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

  // linked_database_group_nickname - computed: false, optional: true, required: false
  private _linkedDatabaseGroupNickname?: string; 
  public get linkedDatabaseGroupNickname() {
    return this.getStringAttribute('linked_database_group_nickname');
  }
  public set linkedDatabaseGroupNickname(value: string) {
    this._linkedDatabaseGroupNickname = value;
  }
  public resetLinkedDatabaseGroupNickname() {
    this._linkedDatabaseGroupNickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedDatabaseGroupNicknameInput() {
    return this._linkedDatabaseGroupNickname;
  }

  // linked_database_id - computed: false, optional: true, required: false
  private _linkedDatabaseId?: string[]; 
  public get linkedDatabaseId() {
    return cdktn.Fn.tolist(this.getListAttribute('linked_database_id'));
  }
  public set linkedDatabaseId(value: string[]) {
    this._linkedDatabaseId = value;
  }
  public resetLinkedDatabaseId() {
    this._linkedDatabaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedDatabaseIdInput() {
    return this._linkedDatabaseId;
  }

  // name - computed: false, optional: true, required: false
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // module - computed: false, optional: true, required: false
  private _module = new RedisEnterpriseDatabaseModuleList(this, "module", false);
  public get module() {
    return this._module;
  }
  public putModule(value: RedisEnterpriseDatabaseModule[] | cdktn.IResolvable) {
    this._module.internalValue = value;
  }
  public resetModule() {
    this._module.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisEnterpriseDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisEnterpriseDatabaseTimeouts) {
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
      client_protocol: cdktn.stringToTerraform(this._clientProtocol),
      cluster_id: cdktn.stringToTerraform(this._clusterId),
      clustering_policy: cdktn.stringToTerraform(this._clusteringPolicy),
      eviction_policy: cdktn.stringToTerraform(this._evictionPolicy),
      id: cdktn.stringToTerraform(this._id),
      linked_database_group_nickname: cdktn.stringToTerraform(this._linkedDatabaseGroupNickname),
      linked_database_id: cdktn.listMapper(cdktn.stringToTerraform, false)(this._linkedDatabaseId),
      name: cdktn.stringToTerraform(this._name),
      port: cdktn.numberToTerraform(this._port),
      module: cdktn.listMapper(redisEnterpriseDatabaseModuleToTerraform, true)(this._module.internalValue),
      timeouts: redisEnterpriseDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_protocol: {
        value: cdktn.stringToHclTerraform(this._clientProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktn.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clustering_policy: {
        value: cdktn.stringToHclTerraform(this._clusteringPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eviction_policy: {
        value: cdktn.stringToHclTerraform(this._evictionPolicy),
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
      linked_database_group_nickname: {
        value: cdktn.stringToHclTerraform(this._linkedDatabaseGroupNickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_database_id: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._linkedDatabaseId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      module: {
        value: cdktn.listMapperHcl(redisEnterpriseDatabaseModuleToHclTerraform, true)(this._module.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisEnterpriseDatabaseModuleList",
      },
      timeouts: {
        value: redisEnterpriseDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisEnterpriseDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
