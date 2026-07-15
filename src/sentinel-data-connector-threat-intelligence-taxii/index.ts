/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SentinelDataConnectorThreatIntelligenceTaxiiConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#api_root_url SentinelDataConnectorThreatIntelligenceTaxii#api_root_url}
  */
  readonly apiRootUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#collection_id SentinelDataConnectorThreatIntelligenceTaxii#collection_id}
  */
  readonly collectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#display_name SentinelDataConnectorThreatIntelligenceTaxii#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#id SentinelDataConnectorThreatIntelligenceTaxii#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#log_analytics_workspace_id SentinelDataConnectorThreatIntelligenceTaxii#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#lookback_date SentinelDataConnectorThreatIntelligenceTaxii#lookback_date}
  */
  readonly lookbackDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#name SentinelDataConnectorThreatIntelligenceTaxii#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#password SentinelDataConnectorThreatIntelligenceTaxii#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#polling_frequency SentinelDataConnectorThreatIntelligenceTaxii#polling_frequency}
  */
  readonly pollingFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#tenant_id SentinelDataConnectorThreatIntelligenceTaxii#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#user_name SentinelDataConnectorThreatIntelligenceTaxii#user_name}
  */
  readonly userName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#timeouts SentinelDataConnectorThreatIntelligenceTaxii#timeouts}
  */
  readonly timeouts?: SentinelDataConnectorThreatIntelligenceTaxiiTimeouts;
}
export interface SentinelDataConnectorThreatIntelligenceTaxiiTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#create SentinelDataConnectorThreatIntelligenceTaxii#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#delete SentinelDataConnectorThreatIntelligenceTaxii#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#read SentinelDataConnectorThreatIntelligenceTaxii#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#update SentinelDataConnectorThreatIntelligenceTaxii#update}
  */
  readonly update?: string;
}

export function sentinelDataConnectorThreatIntelligenceTaxiiTimeoutsToTerraform(struct?: SentinelDataConnectorThreatIntelligenceTaxiiTimeouts | cdktn.IResolvable): any {
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


export function sentinelDataConnectorThreatIntelligenceTaxiiTimeoutsToHclTerraform(struct?: SentinelDataConnectorThreatIntelligenceTaxiiTimeouts | cdktn.IResolvable): any {
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

export class SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelDataConnectorThreatIntelligenceTaxiiTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SentinelDataConnectorThreatIntelligenceTaxiiTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii azurerm_sentinel_data_connector_threat_intelligence_taxii}
*/
export class SentinelDataConnectorThreatIntelligenceTaxii extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_data_connector_threat_intelligence_taxii";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SentinelDataConnectorThreatIntelligenceTaxii resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelDataConnectorThreatIntelligenceTaxii to import
  * @param importFromId The id of the existing SentinelDataConnectorThreatIntelligenceTaxii that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelDataConnectorThreatIntelligenceTaxii to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_sentinel_data_connector_threat_intelligence_taxii", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/sentinel_data_connector_threat_intelligence_taxii azurerm_sentinel_data_connector_threat_intelligence_taxii} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelDataConnectorThreatIntelligenceTaxiiConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelDataConnectorThreatIntelligenceTaxiiConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_threat_intelligence_taxii',
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
    this._apiRootUrl = config.apiRootUrl;
    this._collectionId = config.collectionId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._lookbackDate = config.lookbackDate;
    this._name = config.name;
    this._password = config.password;
    this._pollingFrequency = config.pollingFrequency;
    this._tenantId = config.tenantId;
    this._userName = config.userName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_root_url - computed: false, optional: false, required: true
  private _apiRootUrl?: string; 
  public get apiRootUrl() {
    return this.getStringAttribute('api_root_url');
  }
  public set apiRootUrl(value: string) {
    this._apiRootUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRootUrlInput() {
    return this._apiRootUrl;
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
  }

  // lookback_date - computed: false, optional: true, required: false
  private _lookbackDate?: string; 
  public get lookbackDate() {
    return this.getStringAttribute('lookback_date');
  }
  public set lookbackDate(value: string) {
    this._lookbackDate = value;
  }
  public resetLookbackDate() {
    this._lookbackDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackDateInput() {
    return this._lookbackDate;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // polling_frequency - computed: false, optional: true, required: false
  private _pollingFrequency?: string; 
  public get pollingFrequency() {
    return this.getStringAttribute('polling_frequency');
  }
  public set pollingFrequency(value: string) {
    this._pollingFrequency = value;
  }
  public resetPollingFrequency() {
    this._pollingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingFrequencyInput() {
    return this._pollingFrequency;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelDataConnectorThreatIntelligenceTaxiiTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelDataConnectorThreatIntelligenceTaxiiTimeouts) {
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
      api_root_url: cdktn.stringToTerraform(this._apiRootUrl),
      collection_id: cdktn.stringToTerraform(this._collectionId),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      log_analytics_workspace_id: cdktn.stringToTerraform(this._logAnalyticsWorkspaceId),
      lookback_date: cdktn.stringToTerraform(this._lookbackDate),
      name: cdktn.stringToTerraform(this._name),
      password: cdktn.stringToTerraform(this._password),
      polling_frequency: cdktn.stringToTerraform(this._pollingFrequency),
      tenant_id: cdktn.stringToTerraform(this._tenantId),
      user_name: cdktn.stringToTerraform(this._userName),
      timeouts: sentinelDataConnectorThreatIntelligenceTaxiiTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_root_url: {
        value: cdktn.stringToHclTerraform(this._apiRootUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_id: {
        value: cdktn.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
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
      log_analytics_workspace_id: {
        value: cdktn.stringToHclTerraform(this._logAnalyticsWorkspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookback_date: {
        value: cdktn.stringToHclTerraform(this._lookbackDate),
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
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_frequency: {
        value: cdktn.stringToHclTerraform(this._pollingFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktn.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktn.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sentinelDataConnectorThreatIntelligenceTaxiiTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SentinelDataConnectorThreatIntelligenceTaxiiTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
