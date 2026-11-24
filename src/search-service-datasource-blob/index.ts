/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SearchServiceDatasourceBlobConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo SearchServiceDatasourceBlob#connection_string_wo}
  */
  readonly connectionStringWo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#connection_string_wo_version SearchServiceDatasourceBlob#connection_string_wo_version}
  */
  readonly connectionStringWoVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_name SearchServiceDatasourceBlob#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#container_query SearchServiceDatasourceBlob#container_query}
  */
  readonly containerQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#description SearchServiceDatasourceBlob#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#id SearchServiceDatasourceBlob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#name SearchServiceDatasourceBlob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#search_service_endpoint SearchServiceDatasourceBlob#search_service_endpoint}
  */
  readonly searchServiceEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_column_name SearchServiceDatasourceBlob#soft_delete_column_name}
  */
  readonly softDeleteColumnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#soft_delete_marker_value SearchServiceDatasourceBlob#soft_delete_marker_value}
  */
  readonly softDeleteMarkerValue?: string;
  /**
  * encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#encryption_key SearchServiceDatasourceBlob#encryption_key}
  */
  readonly encryptionKey?: SearchServiceDatasourceBlobEncryptionKey;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#timeouts SearchServiceDatasourceBlob#timeouts}
  */
  readonly timeouts?: SearchServiceDatasourceBlobTimeouts;
}
export interface SearchServiceDatasourceBlobEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_id SearchServiceDatasourceBlob#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#client_secret SearchServiceDatasourceBlob#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#key_vault_key_id SearchServiceDatasourceBlob#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
}

export function searchServiceDatasourceBlobEncryptionKeyToTerraform(struct?: SearchServiceDatasourceBlobEncryptionKeyOutputReference | SearchServiceDatasourceBlobEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    key_vault_key_id: cdktn.stringToTerraform(struct!.keyVaultKeyId),
  }
}


export function searchServiceDatasourceBlobEncryptionKeyToHclTerraform(struct?: SearchServiceDatasourceBlobEncryptionKeyOutputReference | SearchServiceDatasourceBlobEncryptionKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_key_id: {
      value: cdktn.stringToHclTerraform(struct!.keyVaultKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SearchServiceDatasourceBlobEncryptionKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SearchServiceDatasourceBlobEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._keyVaultKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultKeyId = this._keyVaultKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SearchServiceDatasourceBlobEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._keyVaultKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._keyVaultKeyId = value.keyVaultKeyId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId?: string; 
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId;
  }
}
export interface SearchServiceDatasourceBlobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#create SearchServiceDatasourceBlob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#delete SearchServiceDatasourceBlob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#read SearchServiceDatasourceBlob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#update SearchServiceDatasourceBlob#update}
  */
  readonly update?: string;
}

export function searchServiceDatasourceBlobTimeoutsToTerraform(struct?: SearchServiceDatasourceBlobTimeouts | cdktn.IResolvable): any {
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


export function searchServiceDatasourceBlobTimeoutsToHclTerraform(struct?: SearchServiceDatasourceBlobTimeouts | cdktn.IResolvable): any {
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

export class SearchServiceDatasourceBlobTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SearchServiceDatasourceBlobTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SearchServiceDatasourceBlobTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob azurerm_search_service_datasource_blob}
*/
export class SearchServiceDatasourceBlob extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_search_service_datasource_blob";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SearchServiceDatasourceBlob resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchServiceDatasourceBlob to import
  * @param importFromId The id of the existing SearchServiceDatasourceBlob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchServiceDatasourceBlob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_search_service_datasource_blob", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.15.0/docs/resources/search_service_datasource_blob azurerm_search_service_datasource_blob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchServiceDatasourceBlobConfig
  */
  public constructor(scope: Construct, id: string, config: SearchServiceDatasourceBlobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_search_service_datasource_blob',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.15.0',
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
    this._connectionStringWo = config.connectionStringWo;
    this._connectionStringWoVersion = config.connectionStringWoVersion;
    this._containerName = config.containerName;
    this._containerQuery = config.containerQuery;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._searchServiceEndpoint = config.searchServiceEndpoint;
    this._softDeleteColumnName = config.softDeleteColumnName;
    this._softDeleteMarkerValue = config.softDeleteMarkerValue;
    this._encryptionKey.internalValue = config.encryptionKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string_wo - computed: false, optional: false, required: true
  private _connectionStringWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get connectionStringWo() {
    return this.getStringAttribute('connection_string_wo');
  }
  public set connectionStringWo(value: string) {
    this._connectionStringWo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringWoInput() {
    return this._connectionStringWo;
  }

  // connection_string_wo_version - computed: false, optional: false, required: true
  private _connectionStringWoVersion?: number; 
  public get connectionStringWoVersion() {
    return this.getNumberAttribute('connection_string_wo_version');
  }
  public set connectionStringWoVersion(value: number) {
    this._connectionStringWoVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringWoVersionInput() {
    return this._connectionStringWoVersion;
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

  // container_query - computed: false, optional: true, required: false
  private _containerQuery?: string; 
  public get containerQuery() {
    return this.getStringAttribute('container_query');
  }
  public set containerQuery(value: string) {
    this._containerQuery = value;
  }
  public resetContainerQuery() {
    this._containerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerQueryInput() {
    return this._containerQuery;
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

  // search_service_endpoint - computed: false, optional: false, required: true
  private _searchServiceEndpoint?: string; 
  public get searchServiceEndpoint() {
    return this.getStringAttribute('search_service_endpoint');
  }
  public set searchServiceEndpoint(value: string) {
    this._searchServiceEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchServiceEndpointInput() {
    return this._searchServiceEndpoint;
  }

  // soft_delete_column_name - computed: false, optional: true, required: false
  private _softDeleteColumnName?: string; 
  public get softDeleteColumnName() {
    return this.getStringAttribute('soft_delete_column_name');
  }
  public set softDeleteColumnName(value: string) {
    this._softDeleteColumnName = value;
  }
  public resetSoftDeleteColumnName() {
    this._softDeleteColumnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteColumnNameInput() {
    return this._softDeleteColumnName;
  }

  // soft_delete_marker_value - computed: false, optional: true, required: false
  private _softDeleteMarkerValue?: string; 
  public get softDeleteMarkerValue() {
    return this.getStringAttribute('soft_delete_marker_value');
  }
  public set softDeleteMarkerValue(value: string) {
    this._softDeleteMarkerValue = value;
  }
  public resetSoftDeleteMarkerValue() {
    this._softDeleteMarkerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteMarkerValueInput() {
    return this._softDeleteMarkerValue;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new SearchServiceDatasourceBlobEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: SearchServiceDatasourceBlobEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SearchServiceDatasourceBlobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SearchServiceDatasourceBlobTimeouts) {
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
      connection_string_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._connectionStringWo)),
      connection_string_wo_version: cdktn.numberToTerraform(this._connectionStringWoVersion),
      container_name: cdktn.stringToTerraform(this._containerName),
      container_query: cdktn.stringToTerraform(this._containerQuery),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      search_service_endpoint: cdktn.stringToTerraform(this._searchServiceEndpoint),
      soft_delete_column_name: cdktn.stringToTerraform(this._softDeleteColumnName),
      soft_delete_marker_value: cdktn.stringToTerraform(this._softDeleteMarkerValue),
      encryption_key: searchServiceDatasourceBlobEncryptionKeyToTerraform(this._encryptionKey.internalValue),
      timeouts: searchServiceDatasourceBlobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_string_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._connectionStringWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_string_wo_version: {
        value: cdktn.numberToHclTerraform(this._connectionStringWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container_name: {
        value: cdktn.stringToHclTerraform(this._containerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_query: {
        value: cdktn.stringToHclTerraform(this._containerQuery),
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
      search_service_endpoint: {
        value: cdktn.stringToHclTerraform(this._searchServiceEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_delete_column_name: {
        value: cdktn.stringToHclTerraform(this._softDeleteColumnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_delete_marker_value: {
        value: cdktn.stringToHclTerraform(this._softDeleteMarkerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: searchServiceDatasourceBlobEncryptionKeyToHclTerraform(this._encryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SearchServiceDatasourceBlobEncryptionKeyList",
      },
      timeouts: {
        value: searchServiceDatasourceBlobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SearchServiceDatasourceBlobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
