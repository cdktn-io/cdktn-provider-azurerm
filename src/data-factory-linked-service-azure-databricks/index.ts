/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataFactoryLinkedServiceAzureDatabricksConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#access_token DataFactoryLinkedServiceAzureDatabricks#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#adb_domain DataFactoryLinkedServiceAzureDatabricks#adb_domain}
  */
  readonly adbDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#additional_properties DataFactoryLinkedServiceAzureDatabricks#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#annotations DataFactoryLinkedServiceAzureDatabricks#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#data_factory_id DataFactoryLinkedServiceAzureDatabricks#data_factory_id}
  */
  readonly dataFactoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#description DataFactoryLinkedServiceAzureDatabricks#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#existing_cluster_id DataFactoryLinkedServiceAzureDatabricks#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#id DataFactoryLinkedServiceAzureDatabricks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#integration_runtime_name DataFactoryLinkedServiceAzureDatabricks#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#msi_workspace_id DataFactoryLinkedServiceAzureDatabricks#msi_workspace_id}
  */
  readonly msiWorkspaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#name DataFactoryLinkedServiceAzureDatabricks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#parameters DataFactoryLinkedServiceAzureDatabricks#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * instance_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#instance_pool DataFactoryLinkedServiceAzureDatabricks#instance_pool}
  */
  readonly instancePool?: DataFactoryLinkedServiceAzureDatabricksInstancePool;
  /**
  * key_vault_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#key_vault_password DataFactoryLinkedServiceAzureDatabricks#key_vault_password}
  */
  readonly keyVaultPassword?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword;
  /**
  * new_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#new_cluster_config DataFactoryLinkedServiceAzureDatabricks#new_cluster_config}
  */
  readonly newClusterConfig?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#timeouts DataFactoryLinkedServiceAzureDatabricks#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceAzureDatabricksTimeouts;
}
export interface DataFactoryLinkedServiceAzureDatabricksInstancePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#instance_pool_id DataFactoryLinkedServiceAzureDatabricks#instance_pool_id}
  */
  readonly instancePoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}
  */
  readonly maxNumberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}
  */
  readonly minNumberOfWorkers?: number;
}

export function dataFactoryLinkedServiceAzureDatabricksInstancePoolToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference | DataFactoryLinkedServiceAzureDatabricksInstancePool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_version: cdktn.stringToTerraform(struct!.clusterVersion),
    instance_pool_id: cdktn.stringToTerraform(struct!.instancePoolId),
    max_number_of_workers: cdktn.numberToTerraform(struct!.maxNumberOfWorkers),
    min_number_of_workers: cdktn.numberToTerraform(struct!.minNumberOfWorkers),
  }
}


export function dataFactoryLinkedServiceAzureDatabricksInstancePoolToHclTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference | DataFactoryLinkedServiceAzureDatabricksInstancePool): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_version: {
      value: cdktn.stringToHclTerraform(struct!.clusterVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_pool_id: {
      value: cdktn.stringToHclTerraform(struct!.instancePoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_number_of_workers: {
      value: cdktn.numberToHclTerraform(struct!.maxNumberOfWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_number_of_workers: {
      value: cdktn.numberToHclTerraform(struct!.minNumberOfWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureDatabricksInstancePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVersion = this._clusterVersion;
    }
    if (this._instancePoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instancePoolId = this._instancePoolId;
    }
    if (this._maxNumberOfWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfWorkers = this._maxNumberOfWorkers;
    }
    if (this._minNumberOfWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumberOfWorkers = this._minNumberOfWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceAzureDatabricksInstancePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterVersion = undefined;
      this._instancePoolId = undefined;
      this._maxNumberOfWorkers = undefined;
      this._minNumberOfWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterVersion = value.clusterVersion;
      this._instancePoolId = value.instancePoolId;
      this._maxNumberOfWorkers = value.maxNumberOfWorkers;
      this._minNumberOfWorkers = value.minNumberOfWorkers;
    }
  }

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // instance_pool_id - computed: false, optional: false, required: true
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId;
  }

  // max_number_of_workers - computed: false, optional: true, required: false
  private _maxNumberOfWorkers?: number; 
  public get maxNumberOfWorkers() {
    return this.getNumberAttribute('max_number_of_workers');
  }
  public set maxNumberOfWorkers(value: number) {
    this._maxNumberOfWorkers = value;
  }
  public resetMaxNumberOfWorkers() {
    this._maxNumberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfWorkersInput() {
    return this._maxNumberOfWorkers;
  }

  // min_number_of_workers - computed: false, optional: true, required: false
  private _minNumberOfWorkers?: number; 
  public get minNumberOfWorkers() {
    return this.getNumberAttribute('min_number_of_workers');
  }
  public set minNumberOfWorkers(value: number) {
    this._minNumberOfWorkers = value;
  }
  public resetMinNumberOfWorkers() {
    this._minNumberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumberOfWorkersInput() {
    return this._minNumberOfWorkers;
  }
}
export interface DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#linked_service_name DataFactoryLinkedServiceAzureDatabricks#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#secret_name DataFactoryLinkedServiceAzureDatabricks#secret_name}
  */
  readonly secretName: string;
}

export function dataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference | DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    linked_service_name: cdktn.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktn.stringToTerraform(struct!.secretName),
  }
}


export function dataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordToHclTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference | DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    linked_service_name: {
      value: cdktn.stringToHclTerraform(struct!.linkedServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._secretName = value.secretName;
    }
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataFactoryLinkedServiceAzureDatabricksNewClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#custom_tags DataFactoryLinkedServiceAzureDatabricks#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#driver_node_type DataFactoryLinkedServiceAzureDatabricks#driver_node_type}
  */
  readonly driverNodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#init_scripts DataFactoryLinkedServiceAzureDatabricks#init_scripts}
  */
  readonly initScripts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#log_destination DataFactoryLinkedServiceAzureDatabricks#log_destination}
  */
  readonly logDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}
  */
  readonly maxNumberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}
  */
  readonly minNumberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#node_type DataFactoryLinkedServiceAzureDatabricks#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#spark_config DataFactoryLinkedServiceAzureDatabricks#spark_config}
  */
  readonly sparkConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#spark_environment_variables DataFactoryLinkedServiceAzureDatabricks#spark_environment_variables}
  */
  readonly sparkEnvironmentVariables?: { [key: string]: string };
}

export function dataFactoryLinkedServiceAzureDatabricksNewClusterConfigToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference | DataFactoryLinkedServiceAzureDatabricksNewClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cluster_version: cdktn.stringToTerraform(struct!.clusterVersion),
    custom_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.customTags),
    driver_node_type: cdktn.stringToTerraform(struct!.driverNodeType),
    init_scripts: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.initScripts),
    log_destination: cdktn.stringToTerraform(struct!.logDestination),
    max_number_of_workers: cdktn.numberToTerraform(struct!.maxNumberOfWorkers),
    min_number_of_workers: cdktn.numberToTerraform(struct!.minNumberOfWorkers),
    node_type: cdktn.stringToTerraform(struct!.nodeType),
    spark_config: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkConfig),
    spark_environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.sparkEnvironmentVariables),
  }
}


export function dataFactoryLinkedServiceAzureDatabricksNewClusterConfigToHclTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference | DataFactoryLinkedServiceAzureDatabricksNewClusterConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cluster_version: {
      value: cdktn.stringToHclTerraform(struct!.clusterVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_tags: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    driver_node_type: {
      value: cdktn.stringToHclTerraform(struct!.driverNodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_scripts: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.initScripts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_destination: {
      value: cdktn.stringToHclTerraform(struct!.logDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_number_of_workers: {
      value: cdktn.numberToHclTerraform(struct!.maxNumberOfWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_number_of_workers: {
      value: cdktn.numberToHclTerraform(struct!.minNumberOfWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type: {
      value: cdktn.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_config: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spark_environment_variables: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.sparkEnvironmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureDatabricksNewClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVersion = this._clusterVersion;
    }
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._driverNodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverNodeType = this._driverNodeType;
    }
    if (this._initScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.initScripts = this._initScripts;
    }
    if (this._logDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDestination = this._logDestination;
    }
    if (this._maxNumberOfWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNumberOfWorkers = this._maxNumberOfWorkers;
    }
    if (this._minNumberOfWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumberOfWorkers = this._minNumberOfWorkers;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._sparkConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkConfig = this._sparkConfig;
    }
    if (this._sparkEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkEnvironmentVariables = this._sparkEnvironmentVariables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterVersion = undefined;
      this._customTags = undefined;
      this._driverNodeType = undefined;
      this._initScripts = undefined;
      this._logDestination = undefined;
      this._maxNumberOfWorkers = undefined;
      this._minNumberOfWorkers = undefined;
      this._nodeType = undefined;
      this._sparkConfig = undefined;
      this._sparkEnvironmentVariables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterVersion = value.clusterVersion;
      this._customTags = value.customTags;
      this._driverNodeType = value.driverNodeType;
      this._initScripts = value.initScripts;
      this._logDestination = value.logDestination;
      this._maxNumberOfWorkers = value.maxNumberOfWorkers;
      this._minNumberOfWorkers = value.minNumberOfWorkers;
      this._nodeType = value.nodeType;
      this._sparkConfig = value.sparkConfig;
      this._sparkEnvironmentVariables = value.sparkEnvironmentVariables;
    }
  }

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // driver_node_type - computed: false, optional: true, required: false
  private _driverNodeType?: string; 
  public get driverNodeType() {
    return this.getStringAttribute('driver_node_type');
  }
  public set driverNodeType(value: string) {
    this._driverNodeType = value;
  }
  public resetDriverNodeType() {
    this._driverNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeInput() {
    return this._driverNodeType;
  }

  // init_scripts - computed: false, optional: true, required: false
  private _initScripts?: string[]; 
  public get initScripts() {
    return this.getListAttribute('init_scripts');
  }
  public set initScripts(value: string[]) {
    this._initScripts = value;
  }
  public resetInitScripts() {
    this._initScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts;
  }

  // log_destination - computed: false, optional: true, required: false
  private _logDestination?: string; 
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string) {
    this._logDestination = value;
  }
  public resetLogDestination() {
    this._logDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination;
  }

  // max_number_of_workers - computed: false, optional: true, required: false
  private _maxNumberOfWorkers?: number; 
  public get maxNumberOfWorkers() {
    return this.getNumberAttribute('max_number_of_workers');
  }
  public set maxNumberOfWorkers(value: number) {
    this._maxNumberOfWorkers = value;
  }
  public resetMaxNumberOfWorkers() {
    this._maxNumberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfWorkersInput() {
    return this._maxNumberOfWorkers;
  }

  // min_number_of_workers - computed: false, optional: true, required: false
  private _minNumberOfWorkers?: number; 
  public get minNumberOfWorkers() {
    return this.getNumberAttribute('min_number_of_workers');
  }
  public set minNumberOfWorkers(value: number) {
    this._minNumberOfWorkers = value;
  }
  public resetMinNumberOfWorkers() {
    this._minNumberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumberOfWorkersInput() {
    return this._minNumberOfWorkers;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // spark_config - computed: false, optional: true, required: false
  private _sparkConfig?: { [key: string]: string }; 
  public get sparkConfig() {
    return this.getStringMapAttribute('spark_config');
  }
  public set sparkConfig(value: { [key: string]: string }) {
    this._sparkConfig = value;
  }
  public resetSparkConfig() {
    this._sparkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfigInput() {
    return this._sparkConfig;
  }

  // spark_environment_variables - computed: false, optional: true, required: false
  private _sparkEnvironmentVariables?: { [key: string]: string }; 
  public get sparkEnvironmentVariables() {
    return this.getStringMapAttribute('spark_environment_variables');
  }
  public set sparkEnvironmentVariables(value: { [key: string]: string }) {
    this._sparkEnvironmentVariables = value;
  }
  public resetSparkEnvironmentVariables() {
    this._sparkEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvironmentVariablesInput() {
    return this._sparkEnvironmentVariables;
  }
}
export interface DataFactoryLinkedServiceAzureDatabricksTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#create DataFactoryLinkedServiceAzureDatabricks#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#delete DataFactoryLinkedServiceAzureDatabricks#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#read DataFactoryLinkedServiceAzureDatabricks#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#update DataFactoryLinkedServiceAzureDatabricks#update}
  */
  readonly update?: string;
}

export function dataFactoryLinkedServiceAzureDatabricksTimeoutsToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksTimeouts | cdktn.IResolvable): any {
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


export function dataFactoryLinkedServiceAzureDatabricksTimeoutsToHclTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksTimeouts | cdktn.IResolvable): any {
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

export class DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFactoryLinkedServiceAzureDatabricksTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataFactoryLinkedServiceAzureDatabricksTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks azurerm_data_factory_linked_service_azure_databricks}
*/
export class DataFactoryLinkedServiceAzureDatabricks extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_data_factory_linked_service_azure_databricks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataFactoryLinkedServiceAzureDatabricks resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFactoryLinkedServiceAzureDatabricks to import
  * @param importFromId The id of the existing DataFactoryLinkedServiceAzureDatabricks that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFactoryLinkedServiceAzureDatabricks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_data_factory_linked_service_azure_databricks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/resources/data_factory_linked_service_azure_databricks azurerm_data_factory_linked_service_azure_databricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceAzureDatabricksConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureDatabricksConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_azure_databricks',
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
    this._accessToken = config.accessToken;
    this._adbDomain = config.adbDomain;
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._dataFactoryId = config.dataFactoryId;
    this._description = config.description;
    this._existingClusterId = config.existingClusterId;
    this._id = config.id;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._msiWorkspaceId = config.msiWorkspaceId;
    this._name = config.name;
    this._parameters = config.parameters;
    this._instancePool.internalValue = config.instancePool;
    this._keyVaultPassword.internalValue = config.keyVaultPassword;
    this._newClusterConfig.internalValue = config.newClusterConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // adb_domain - computed: false, optional: false, required: true
  private _adbDomain?: string; 
  public get adbDomain() {
    return this.getStringAttribute('adb_domain');
  }
  public set adbDomain(value: string) {
    this._adbDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adbDomainInput() {
    return this._adbDomain;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[]; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[]) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // data_factory_id - computed: false, optional: false, required: true
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId;
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

  // existing_cluster_id - computed: false, optional: true, required: false
  private _existingClusterId?: string; 
  public get existingClusterId() {
    return this.getStringAttribute('existing_cluster_id');
  }
  public set existingClusterId(value: string) {
    this._existingClusterId = value;
  }
  public resetExistingClusterId() {
    this._existingClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingClusterIdInput() {
    return this._existingClusterId;
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

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string; 
  public get integrationRuntimeName() {
    return this.getStringAttribute('integration_runtime_name');
  }
  public set integrationRuntimeName(value: string) {
    this._integrationRuntimeName = value;
  }
  public resetIntegrationRuntimeName() {
    this._integrationRuntimeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRuntimeNameInput() {
    return this._integrationRuntimeName;
  }

  // msi_workspace_id - computed: false, optional: true, required: false
  private _msiWorkspaceId?: string; 
  public get msiWorkspaceId() {
    return this.getStringAttribute('msi_workspace_id');
  }
  public set msiWorkspaceId(value: string) {
    this._msiWorkspaceId = value;
  }
  public resetMsiWorkspaceId() {
    this._msiWorkspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiWorkspaceIdInput() {
    return this._msiWorkspaceId;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // instance_pool - computed: false, optional: true, required: false
  private _instancePool = new DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference(this, "instance_pool");
  public get instancePool() {
    return this._instancePool;
  }
  public putInstancePool(value: DataFactoryLinkedServiceAzureDatabricksInstancePool) {
    this._instancePool.internalValue = value;
  }
  public resetInstancePool() {
    this._instancePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolInput() {
    return this._instancePool.internalValue;
  }

  // key_vault_password - computed: false, optional: true, required: false
  private _keyVaultPassword = new DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference(this, "key_vault_password");
  public get keyVaultPassword() {
    return this._keyVaultPassword;
  }
  public putKeyVaultPassword(value: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword) {
    this._keyVaultPassword.internalValue = value;
  }
  public resetKeyVaultPassword() {
    this._keyVaultPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPasswordInput() {
    return this._keyVaultPassword.internalValue;
  }

  // new_cluster_config - computed: false, optional: true, required: false
  private _newClusterConfig = new DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference(this, "new_cluster_config");
  public get newClusterConfig() {
    return this._newClusterConfig;
  }
  public putNewClusterConfig(value: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig) {
    this._newClusterConfig.internalValue = value;
  }
  public resetNewClusterConfig() {
    this._newClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newClusterConfigInput() {
    return this._newClusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryLinkedServiceAzureDatabricksTimeouts) {
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
      access_token: cdktn.stringToTerraform(this._accessToken),
      adb_domain: cdktn.stringToTerraform(this._adbDomain),
      additional_properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._additionalProperties),
      annotations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._annotations),
      data_factory_id: cdktn.stringToTerraform(this._dataFactoryId),
      description: cdktn.stringToTerraform(this._description),
      existing_cluster_id: cdktn.stringToTerraform(this._existingClusterId),
      id: cdktn.stringToTerraform(this._id),
      integration_runtime_name: cdktn.stringToTerraform(this._integrationRuntimeName),
      msi_workspace_id: cdktn.stringToTerraform(this._msiWorkspaceId),
      name: cdktn.stringToTerraform(this._name),
      parameters: cdktn.hashMapper(cdktn.stringToTerraform)(this._parameters),
      instance_pool: dataFactoryLinkedServiceAzureDatabricksInstancePoolToTerraform(this._instancePool.internalValue),
      key_vault_password: dataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordToTerraform(this._keyVaultPassword.internalValue),
      new_cluster_config: dataFactoryLinkedServiceAzureDatabricksNewClusterConfigToTerraform(this._newClusterConfig.internalValue),
      timeouts: dataFactoryLinkedServiceAzureDatabricksTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktn.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adb_domain: {
        value: cdktn.stringToHclTerraform(this._adbDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._additionalProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      annotations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._annotations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_factory_id: {
        value: cdktn.stringToHclTerraform(this._dataFactoryId),
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
      existing_cluster_id: {
        value: cdktn.stringToHclTerraform(this._existingClusterId),
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
      integration_runtime_name: {
        value: cdktn.stringToHclTerraform(this._integrationRuntimeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msi_workspace_id: {
        value: cdktn.stringToHclTerraform(this._msiWorkspaceId),
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
      parameters: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._parameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      instance_pool: {
        value: dataFactoryLinkedServiceAzureDatabricksInstancePoolToHclTerraform(this._instancePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryLinkedServiceAzureDatabricksInstancePoolList",
      },
      key_vault_password: {
        value: dataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordToHclTerraform(this._keyVaultPassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordList",
      },
      new_cluster_config: {
        value: dataFactoryLinkedServiceAzureDatabricksNewClusterConfigToHclTerraform(this._newClusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFactoryLinkedServiceAzureDatabricksNewClusterConfigList",
      },
      timeouts: {
        value: dataFactoryLinkedServiceAzureDatabricksTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFactoryLinkedServiceAzureDatabricksTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
