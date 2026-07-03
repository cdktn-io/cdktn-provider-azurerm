/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SpringCloudNewRelicApplicationPerformanceMonitoringConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#agent_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#agent_enabled}
  */
  readonly agentEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_name SpringCloudNewRelicApplicationPerformanceMonitoring#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#app_server_port SpringCloudNewRelicApplicationPerformanceMonitoring#app_server_port}
  */
  readonly appServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#audit_mode_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#audit_mode_enabled}
  */
  readonly auditModeEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_app_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_app_naming_enabled}
  */
  readonly autoAppNamingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#auto_transaction_naming_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#auto_transaction_naming_enabled}
  */
  readonly autoTransactionNamingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#custom_tracing_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#custom_tracing_enabled}
  */
  readonly customTracingEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#globally_enabled SpringCloudNewRelicApplicationPerformanceMonitoring#globally_enabled}
  */
  readonly globallyEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#id SpringCloudNewRelicApplicationPerformanceMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#labels SpringCloudNewRelicApplicationPerformanceMonitoring#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#license_key SpringCloudNewRelicApplicationPerformanceMonitoring#license_key}
  */
  readonly licenseKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#name SpringCloudNewRelicApplicationPerformanceMonitoring#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#spring_cloud_service_id SpringCloudNewRelicApplicationPerformanceMonitoring#spring_cloud_service_id}
  */
  readonly springCloudServiceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#timeouts SpringCloudNewRelicApplicationPerformanceMonitoring#timeouts}
  */
  readonly timeouts?: SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts;
}
export interface SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#create SpringCloudNewRelicApplicationPerformanceMonitoring#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#delete SpringCloudNewRelicApplicationPerformanceMonitoring#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#read SpringCloudNewRelicApplicationPerformanceMonitoring#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#update SpringCloudNewRelicApplicationPerformanceMonitoring#update}
  */
  readonly update?: string;
}

export function springCloudNewRelicApplicationPerformanceMonitoringTimeoutsToTerraform(struct?: SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts | cdktn.IResolvable): any {
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


export function springCloudNewRelicApplicationPerformanceMonitoringTimeoutsToHclTerraform(struct?: SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts | cdktn.IResolvable): any {
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

export class SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring azurerm_spring_cloud_new_relic_application_performance_monitoring}
*/
export class SpringCloudNewRelicApplicationPerformanceMonitoring extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_new_relic_application_performance_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SpringCloudNewRelicApplicationPerformanceMonitoring resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudNewRelicApplicationPerformanceMonitoring to import
  * @param importFromId The id of the existing SpringCloudNewRelicApplicationPerformanceMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudNewRelicApplicationPerformanceMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_new_relic_application_performance_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/spring_cloud_new_relic_application_performance_monitoring azurerm_spring_cloud_new_relic_application_performance_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudNewRelicApplicationPerformanceMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudNewRelicApplicationPerformanceMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_new_relic_application_performance_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.80.0',
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
    this._agentEnabled = config.agentEnabled;
    this._appName = config.appName;
    this._appServerPort = config.appServerPort;
    this._auditModeEnabled = config.auditModeEnabled;
    this._autoAppNamingEnabled = config.autoAppNamingEnabled;
    this._autoTransactionNamingEnabled = config.autoTransactionNamingEnabled;
    this._customTracingEnabled = config.customTracingEnabled;
    this._globallyEnabled = config.globallyEnabled;
    this._id = config.id;
    this._labels = config.labels;
    this._licenseKey = config.licenseKey;
    this._name = config.name;
    this._springCloudServiceId = config.springCloudServiceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_enabled - computed: false, optional: true, required: false
  private _agentEnabled?: boolean | cdktn.IResolvable; 
  public get agentEnabled() {
    return this.getBooleanAttribute('agent_enabled');
  }
  public set agentEnabled(value: boolean | cdktn.IResolvable) {
    this._agentEnabled = value;
  }
  public resetAgentEnabled() {
    this._agentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentEnabledInput() {
    return this._agentEnabled;
  }

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_server_port - computed: false, optional: true, required: false
  private _appServerPort?: number; 
  public get appServerPort() {
    return this.getNumberAttribute('app_server_port');
  }
  public set appServerPort(value: number) {
    this._appServerPort = value;
  }
  public resetAppServerPort() {
    this._appServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServerPortInput() {
    return this._appServerPort;
  }

  // audit_mode_enabled - computed: false, optional: true, required: false
  private _auditModeEnabled?: boolean | cdktn.IResolvable; 
  public get auditModeEnabled() {
    return this.getBooleanAttribute('audit_mode_enabled');
  }
  public set auditModeEnabled(value: boolean | cdktn.IResolvable) {
    this._auditModeEnabled = value;
  }
  public resetAuditModeEnabled() {
    this._auditModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditModeEnabledInput() {
    return this._auditModeEnabled;
  }

  // auto_app_naming_enabled - computed: false, optional: true, required: false
  private _autoAppNamingEnabled?: boolean | cdktn.IResolvable; 
  public get autoAppNamingEnabled() {
    return this.getBooleanAttribute('auto_app_naming_enabled');
  }
  public set autoAppNamingEnabled(value: boolean | cdktn.IResolvable) {
    this._autoAppNamingEnabled = value;
  }
  public resetAutoAppNamingEnabled() {
    this._autoAppNamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAppNamingEnabledInput() {
    return this._autoAppNamingEnabled;
  }

  // auto_transaction_naming_enabled - computed: false, optional: true, required: false
  private _autoTransactionNamingEnabled?: boolean | cdktn.IResolvable; 
  public get autoTransactionNamingEnabled() {
    return this.getBooleanAttribute('auto_transaction_naming_enabled');
  }
  public set autoTransactionNamingEnabled(value: boolean | cdktn.IResolvable) {
    this._autoTransactionNamingEnabled = value;
  }
  public resetAutoTransactionNamingEnabled() {
    this._autoTransactionNamingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTransactionNamingEnabledInput() {
    return this._autoTransactionNamingEnabled;
  }

  // custom_tracing_enabled - computed: false, optional: true, required: false
  private _customTracingEnabled?: boolean | cdktn.IResolvable; 
  public get customTracingEnabled() {
    return this.getBooleanAttribute('custom_tracing_enabled');
  }
  public set customTracingEnabled(value: boolean | cdktn.IResolvable) {
    this._customTracingEnabled = value;
  }
  public resetCustomTracingEnabled() {
    this._customTracingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTracingEnabledInput() {
    return this._customTracingEnabled;
  }

  // globally_enabled - computed: false, optional: true, required: false
  private _globallyEnabled?: boolean | cdktn.IResolvable; 
  public get globallyEnabled() {
    return this.getBooleanAttribute('globally_enabled');
  }
  public set globallyEnabled(value: boolean | cdktn.IResolvable) {
    this._globallyEnabled = value;
  }
  public resetGloballyEnabled() {
    this._globallyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globallyEnabledInput() {
    return this._globallyEnabled;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // license_key - computed: false, optional: false, required: true
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
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

  // spring_cloud_service_id - computed: false, optional: false, required: true
  private _springCloudServiceId?: string; 
  public get springCloudServiceId() {
    return this.getStringAttribute('spring_cloud_service_id');
  }
  public set springCloudServiceId(value: string) {
    this._springCloudServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudServiceIdInput() {
    return this._springCloudServiceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudNewRelicApplicationPerformanceMonitoringTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts) {
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
      agent_enabled: cdktn.booleanToTerraform(this._agentEnabled),
      app_name: cdktn.stringToTerraform(this._appName),
      app_server_port: cdktn.numberToTerraform(this._appServerPort),
      audit_mode_enabled: cdktn.booleanToTerraform(this._auditModeEnabled),
      auto_app_naming_enabled: cdktn.booleanToTerraform(this._autoAppNamingEnabled),
      auto_transaction_naming_enabled: cdktn.booleanToTerraform(this._autoTransactionNamingEnabled),
      custom_tracing_enabled: cdktn.booleanToTerraform(this._customTracingEnabled),
      globally_enabled: cdktn.booleanToTerraform(this._globallyEnabled),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      license_key: cdktn.stringToTerraform(this._licenseKey),
      name: cdktn.stringToTerraform(this._name),
      spring_cloud_service_id: cdktn.stringToTerraform(this._springCloudServiceId),
      timeouts: springCloudNewRelicApplicationPerformanceMonitoringTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_enabled: {
        value: cdktn.booleanToHclTerraform(this._agentEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_name: {
        value: cdktn.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_server_port: {
        value: cdktn.numberToHclTerraform(this._appServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audit_mode_enabled: {
        value: cdktn.booleanToHclTerraform(this._auditModeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_app_naming_enabled: {
        value: cdktn.booleanToHclTerraform(this._autoAppNamingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_transaction_naming_enabled: {
        value: cdktn.booleanToHclTerraform(this._autoTransactionNamingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_tracing_enabled: {
        value: cdktn.booleanToHclTerraform(this._customTracingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      globally_enabled: {
        value: cdktn.booleanToHclTerraform(this._globallyEnabled),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      license_key: {
        value: cdktn.stringToHclTerraform(this._licenseKey),
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
      spring_cloud_service_id: {
        value: cdktn.stringToHclTerraform(this._springCloudServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: springCloudNewRelicApplicationPerformanceMonitoringTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudNewRelicApplicationPerformanceMonitoringTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
