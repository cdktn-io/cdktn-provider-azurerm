/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SiteRecoveryReplicationRecoveryPlanConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#id SiteRecoveryReplicationRecoveryPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#recovery_vault_id SiteRecoveryReplicationRecoveryPlan#recovery_vault_id}
  */
  readonly recoveryVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#source_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#source_recovery_fabric_id}
  */
  readonly sourceRecoveryFabricId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#target_recovery_fabric_id SiteRecoveryReplicationRecoveryPlan#target_recovery_fabric_id}
  */
  readonly targetRecoveryFabricId: string;
  /**
  * azure_to_azure_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#azure_to_azure_settings SiteRecoveryReplicationRecoveryPlan#azure_to_azure_settings}
  */
  readonly azureToAzureSettings?: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings;
  /**
  * boot_recovery_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#boot_recovery_group SiteRecoveryReplicationRecoveryPlan#boot_recovery_group}
  */
  readonly bootRecoveryGroup: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup[] | cdktn.IResolvable;
  /**
  * failover_recovery_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#failover_recovery_group SiteRecoveryReplicationRecoveryPlan#failover_recovery_group}
  */
  readonly failoverRecoveryGroup: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup;
  /**
  * shutdown_recovery_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#shutdown_recovery_group SiteRecoveryReplicationRecoveryPlan#shutdown_recovery_group}
  */
  readonly shutdownRecoveryGroup: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#timeouts SiteRecoveryReplicationRecoveryPlan#timeouts}
  */
  readonly timeouts?: SiteRecoveryReplicationRecoveryPlanTimeouts;
}
export interface SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#primary_edge_zone SiteRecoveryReplicationRecoveryPlan#primary_edge_zone}
  */
  readonly primaryEdgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#primary_zone SiteRecoveryReplicationRecoveryPlan#primary_zone}
  */
  readonly primaryZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#recovery_edge_zone SiteRecoveryReplicationRecoveryPlan#recovery_edge_zone}
  */
  readonly recoveryEdgeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#recovery_zone SiteRecoveryReplicationRecoveryPlan#recovery_zone}
  */
  readonly recoveryZone?: string;
}

export function siteRecoveryReplicationRecoveryPlanAzureToAzureSettingsToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference | SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    primary_edge_zone: cdktn.stringToTerraform(struct!.primaryEdgeZone),
    primary_zone: cdktn.stringToTerraform(struct!.primaryZone),
    recovery_edge_zone: cdktn.stringToTerraform(struct!.recoveryEdgeZone),
    recovery_zone: cdktn.stringToTerraform(struct!.recoveryZone),
  }
}


export function siteRecoveryReplicationRecoveryPlanAzureToAzureSettingsToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference | SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    primary_edge_zone: {
      value: cdktn.stringToHclTerraform(struct!.primaryEdgeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_zone: {
      value: cdktn.stringToHclTerraform(struct!.primaryZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_edge_zone: {
      value: cdktn.stringToHclTerraform(struct!.recoveryEdgeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_zone: {
      value: cdktn.stringToHclTerraform(struct!.recoveryZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryEdgeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryEdgeZone = this._primaryEdgeZone;
    }
    if (this._primaryZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryZone = this._primaryZone;
    }
    if (this._recoveryEdgeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryEdgeZone = this._recoveryEdgeZone;
    }
    if (this._recoveryZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryZone = this._recoveryZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryEdgeZone = undefined;
      this._primaryZone = undefined;
      this._recoveryEdgeZone = undefined;
      this._recoveryZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryEdgeZone = value.primaryEdgeZone;
      this._primaryZone = value.primaryZone;
      this._recoveryEdgeZone = value.recoveryEdgeZone;
      this._recoveryZone = value.recoveryZone;
    }
  }

  // primary_edge_zone - computed: false, optional: true, required: false
  private _primaryEdgeZone?: string; 
  public get primaryEdgeZone() {
    return this.getStringAttribute('primary_edge_zone');
  }
  public set primaryEdgeZone(value: string) {
    this._primaryEdgeZone = value;
  }
  public resetPrimaryEdgeZone() {
    this._primaryEdgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEdgeZoneInput() {
    return this._primaryEdgeZone;
  }

  // primary_zone - computed: false, optional: true, required: false
  private _primaryZone?: string; 
  public get primaryZone() {
    return this.getStringAttribute('primary_zone');
  }
  public set primaryZone(value: string) {
    this._primaryZone = value;
  }
  public resetPrimaryZone() {
    this._primaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryZoneInput() {
    return this._primaryZone;
  }

  // recovery_edge_zone - computed: false, optional: true, required: false
  private _recoveryEdgeZone?: string; 
  public get recoveryEdgeZone() {
    return this.getStringAttribute('recovery_edge_zone');
  }
  public set recoveryEdgeZone(value: string) {
    this._recoveryEdgeZone = value;
  }
  public resetRecoveryEdgeZone() {
    this._recoveryEdgeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryEdgeZoneInput() {
    return this._recoveryEdgeZone;
  }

  // recovery_zone - computed: false, optional: true, required: false
  private _recoveryZone?: string; 
  public get recoveryZone() {
    return this.getStringAttribute('recovery_zone');
  }
  public set recoveryZone(value: string) {
    this._recoveryZone = value;
  }
  public resetRecoveryZone() {
    this._recoveryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryZoneInput() {
    return this._recoveryZone;
  }
}
export interface SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}
  */
  readonly fabricLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}
  */
  readonly failOverDirections: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}
  */
  readonly failOverTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}
  */
  readonly manualActionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
}

export function siteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fabric_location: cdktn.stringToTerraform(struct!.fabricLocation),
    fail_over_directions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverDirections),
    fail_over_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverTypes),
    manual_action_instruction: cdktn.stringToTerraform(struct!.manualActionInstruction),
    name: cdktn.stringToTerraform(struct!.name),
    runbook_id: cdktn.stringToTerraform(struct!.runbookId),
    script_path: cdktn.stringToTerraform(struct!.scriptPath),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function siteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fabric_location: {
      value: cdktn.stringToHclTerraform(struct!.fabricLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over_directions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverDirections),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_over_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    manual_action_instruction: {
      value: cdktn.stringToHclTerraform(struct!.manualActionInstruction),
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
    runbook_id: {
      value: cdktn.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktn.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricLocation = this._fabricLocation;
    }
    if (this._failOverDirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverDirections = this._failOverDirections;
    }
    if (this._failOverTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverTypes = this._failOverTypes;
    }
    if (this._manualActionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualActionInstruction = this._manualActionInstruction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricLocation = undefined;
      this._failOverDirections = undefined;
      this._failOverTypes = undefined;
      this._manualActionInstruction = undefined;
      this._name = undefined;
      this._runbookId = undefined;
      this._scriptPath = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricLocation = value.fabricLocation;
      this._failOverDirections = value.failOverDirections;
      this._failOverTypes = value.failOverTypes;
      this._manualActionInstruction = value.manualActionInstruction;
      this._name = value.name;
      this._runbookId = value.runbookId;
      this._scriptPath = value.scriptPath;
      this._type = value.type;
    }
  }

  // fabric_location - computed: false, optional: true, required: false
  private _fabricLocation?: string; 
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }
  public set fabricLocation(value: string) {
    this._fabricLocation = value;
  }
  public resetFabricLocation() {
    this._fabricLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricLocationInput() {
    return this._fabricLocation;
  }

  // fail_over_directions - computed: false, optional: false, required: true
  private _failOverDirections?: string[]; 
  public get failOverDirections() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }
  public set failOverDirections(value: string[]) {
    this._failOverDirections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverDirectionsInput() {
    return this._failOverDirections;
  }

  // fail_over_types - computed: false, optional: false, required: true
  private _failOverTypes?: string[]; 
  public get failOverTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_types'));
  }
  public set failOverTypes(value: string[]) {
    this._failOverTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverTypesInput() {
    return this._failOverTypes;
  }

  // manual_action_instruction - computed: false, optional: true, required: false
  private _manualActionInstruction?: string; 
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }
  public set manualActionInstruction(value: string) {
    this._manualActionInstruction = value;
  }
  public resetManualActionInstruction() {
    this._manualActionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualActionInstructionInput() {
    return this._manualActionInstruction;
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

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}
  */
  readonly fabricLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}
  */
  readonly failOverDirections: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}
  */
  readonly failOverTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}
  */
  readonly manualActionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
}

export function siteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fabric_location: cdktn.stringToTerraform(struct!.fabricLocation),
    fail_over_directions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverDirections),
    fail_over_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverTypes),
    manual_action_instruction: cdktn.stringToTerraform(struct!.manualActionInstruction),
    name: cdktn.stringToTerraform(struct!.name),
    runbook_id: cdktn.stringToTerraform(struct!.runbookId),
    script_path: cdktn.stringToTerraform(struct!.scriptPath),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function siteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fabric_location: {
      value: cdktn.stringToHclTerraform(struct!.fabricLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over_directions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverDirections),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_over_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    manual_action_instruction: {
      value: cdktn.stringToHclTerraform(struct!.manualActionInstruction),
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
    runbook_id: {
      value: cdktn.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktn.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricLocation = this._fabricLocation;
    }
    if (this._failOverDirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverDirections = this._failOverDirections;
    }
    if (this._failOverTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverTypes = this._failOverTypes;
    }
    if (this._manualActionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualActionInstruction = this._manualActionInstruction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricLocation = undefined;
      this._failOverDirections = undefined;
      this._failOverTypes = undefined;
      this._manualActionInstruction = undefined;
      this._name = undefined;
      this._runbookId = undefined;
      this._scriptPath = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricLocation = value.fabricLocation;
      this._failOverDirections = value.failOverDirections;
      this._failOverTypes = value.failOverTypes;
      this._manualActionInstruction = value.manualActionInstruction;
      this._name = value.name;
      this._runbookId = value.runbookId;
      this._scriptPath = value.scriptPath;
      this._type = value.type;
    }
  }

  // fabric_location - computed: false, optional: true, required: false
  private _fabricLocation?: string; 
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }
  public set fabricLocation(value: string) {
    this._fabricLocation = value;
  }
  public resetFabricLocation() {
    this._fabricLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricLocationInput() {
    return this._fabricLocation;
  }

  // fail_over_directions - computed: false, optional: false, required: true
  private _failOverDirections?: string[]; 
  public get failOverDirections() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }
  public set failOverDirections(value: string[]) {
    this._failOverDirections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverDirectionsInput() {
    return this._failOverDirections;
  }

  // fail_over_types - computed: false, optional: false, required: true
  private _failOverTypes?: string[]; 
  public get failOverTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_types'));
  }
  public set failOverTypes(value: string[]) {
    this._failOverTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverTypesInput() {
    return this._failOverTypes;
  }

  // manual_action_instruction - computed: false, optional: true, required: false
  private _manualActionInstruction?: string; 
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }
  public set manualActionInstruction(value: string) {
    this._manualActionInstruction = value;
  }
  public resetManualActionInstruction() {
    this._manualActionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualActionInstructionInput() {
    return this._manualActionInstruction;
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

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#replicated_protected_items SiteRecoveryReplicationRecoveryPlan#replicated_protected_items}
  */
  readonly replicatedProtectedItems?: string[];
  /**
  * post_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}
  */
  readonly postAction?: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction[] | cdktn.IResolvable;
  /**
  * pre_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}
  */
  readonly preAction?: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction[] | cdktn.IResolvable;
}

export function siteRecoveryReplicationRecoveryPlanBootRecoveryGroupToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replicated_protected_items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replicatedProtectedItems),
    post_action: cdktn.listMapper(siteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionToTerraform, true)(struct!.postAction),
    pre_action: cdktn.listMapper(siteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionToTerraform, true)(struct!.preAction),
  }
}


export function siteRecoveryReplicationRecoveryPlanBootRecoveryGroupToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replicated_protected_items: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replicatedProtectedItems),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    post_action: {
      value: cdktn.listMapperHcl(siteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionToHclTerraform, true)(struct!.postAction),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList",
    },
    pre_action: {
      value: cdktn.listMapperHcl(siteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionToHclTerraform, true)(struct!.preAction),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicatedProtectedItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicatedProtectedItems = this._replicatedProtectedItems;
    }
    if (this._postAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAction = this._postAction?.internalValue;
    }
    if (this._preAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAction = this._preAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicatedProtectedItems = undefined;
      this._postAction.internalValue = undefined;
      this._preAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicatedProtectedItems = value.replicatedProtectedItems;
      this._postAction.internalValue = value.postAction;
      this._preAction.internalValue = value.preAction;
    }
  }

  // replicated_protected_items - computed: false, optional: true, required: false
  private _replicatedProtectedItems?: string[]; 
  public get replicatedProtectedItems() {
    return this.getListAttribute('replicated_protected_items');
  }
  public set replicatedProtectedItems(value: string[]) {
    this._replicatedProtectedItems = value;
  }
  public resetReplicatedProtectedItems() {
    this._replicatedProtectedItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicatedProtectedItemsInput() {
    return this._replicatedProtectedItems;
  }

  // post_action - computed: false, optional: true, required: false
  private _postAction = new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostActionList(this, "post_action", false);
  public get postAction() {
    return this._postAction;
  }
  public putPostAction(value: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPostAction[] | cdktn.IResolvable) {
    this._postAction.internalValue = value;
  }
  public resetPostAction() {
    this._postAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postActionInput() {
    return this._postAction.internalValue;
  }

  // pre_action - computed: false, optional: true, required: false
  private _preAction = new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreActionList(this, "pre_action", false);
  public get preAction() {
    return this._preAction;
  }
  public putPreAction(value: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupPreAction[] | cdktn.IResolvable) {
    this._preAction.internalValue = value;
  }
  public resetPreAction() {
    this._preAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preActionInput() {
    return this._preAction.internalValue;
  }
}

export class SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}
  */
  readonly fabricLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}
  */
  readonly failOverDirections: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}
  */
  readonly failOverTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}
  */
  readonly manualActionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
}

export function siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fabric_location: cdktn.stringToTerraform(struct!.fabricLocation),
    fail_over_directions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverDirections),
    fail_over_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverTypes),
    manual_action_instruction: cdktn.stringToTerraform(struct!.manualActionInstruction),
    name: cdktn.stringToTerraform(struct!.name),
    runbook_id: cdktn.stringToTerraform(struct!.runbookId),
    script_path: cdktn.stringToTerraform(struct!.scriptPath),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fabric_location: {
      value: cdktn.stringToHclTerraform(struct!.fabricLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over_directions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverDirections),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_over_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    manual_action_instruction: {
      value: cdktn.stringToHclTerraform(struct!.manualActionInstruction),
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
    runbook_id: {
      value: cdktn.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktn.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricLocation = this._fabricLocation;
    }
    if (this._failOverDirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverDirections = this._failOverDirections;
    }
    if (this._failOverTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverTypes = this._failOverTypes;
    }
    if (this._manualActionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualActionInstruction = this._manualActionInstruction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricLocation = undefined;
      this._failOverDirections = undefined;
      this._failOverTypes = undefined;
      this._manualActionInstruction = undefined;
      this._name = undefined;
      this._runbookId = undefined;
      this._scriptPath = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricLocation = value.fabricLocation;
      this._failOverDirections = value.failOverDirections;
      this._failOverTypes = value.failOverTypes;
      this._manualActionInstruction = value.manualActionInstruction;
      this._name = value.name;
      this._runbookId = value.runbookId;
      this._scriptPath = value.scriptPath;
      this._type = value.type;
    }
  }

  // fabric_location - computed: false, optional: true, required: false
  private _fabricLocation?: string; 
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }
  public set fabricLocation(value: string) {
    this._fabricLocation = value;
  }
  public resetFabricLocation() {
    this._fabricLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricLocationInput() {
    return this._fabricLocation;
  }

  // fail_over_directions - computed: false, optional: false, required: true
  private _failOverDirections?: string[]; 
  public get failOverDirections() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }
  public set failOverDirections(value: string[]) {
    this._failOverDirections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverDirectionsInput() {
    return this._failOverDirections;
  }

  // fail_over_types - computed: false, optional: false, required: true
  private _failOverTypes?: string[]; 
  public get failOverTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_types'));
  }
  public set failOverTypes(value: string[]) {
    this._failOverTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverTypesInput() {
    return this._failOverTypes;
  }

  // manual_action_instruction - computed: false, optional: true, required: false
  private _manualActionInstruction?: string; 
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }
  public set manualActionInstruction(value: string) {
    this._manualActionInstruction = value;
  }
  public resetManualActionInstruction() {
    this._manualActionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualActionInstructionInput() {
    return this._manualActionInstruction;
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

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}
  */
  readonly fabricLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}
  */
  readonly failOverDirections: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}
  */
  readonly failOverTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}
  */
  readonly manualActionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
}

export function siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fabric_location: cdktn.stringToTerraform(struct!.fabricLocation),
    fail_over_directions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverDirections),
    fail_over_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverTypes),
    manual_action_instruction: cdktn.stringToTerraform(struct!.manualActionInstruction),
    name: cdktn.stringToTerraform(struct!.name),
    runbook_id: cdktn.stringToTerraform(struct!.runbookId),
    script_path: cdktn.stringToTerraform(struct!.scriptPath),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fabric_location: {
      value: cdktn.stringToHclTerraform(struct!.fabricLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over_directions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverDirections),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_over_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    manual_action_instruction: {
      value: cdktn.stringToHclTerraform(struct!.manualActionInstruction),
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
    runbook_id: {
      value: cdktn.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktn.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricLocation = this._fabricLocation;
    }
    if (this._failOverDirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverDirections = this._failOverDirections;
    }
    if (this._failOverTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverTypes = this._failOverTypes;
    }
    if (this._manualActionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualActionInstruction = this._manualActionInstruction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricLocation = undefined;
      this._failOverDirections = undefined;
      this._failOverTypes = undefined;
      this._manualActionInstruction = undefined;
      this._name = undefined;
      this._runbookId = undefined;
      this._scriptPath = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricLocation = value.fabricLocation;
      this._failOverDirections = value.failOverDirections;
      this._failOverTypes = value.failOverTypes;
      this._manualActionInstruction = value.manualActionInstruction;
      this._name = value.name;
      this._runbookId = value.runbookId;
      this._scriptPath = value.scriptPath;
      this._type = value.type;
    }
  }

  // fabric_location - computed: false, optional: true, required: false
  private _fabricLocation?: string; 
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }
  public set fabricLocation(value: string) {
    this._fabricLocation = value;
  }
  public resetFabricLocation() {
    this._fabricLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricLocationInput() {
    return this._fabricLocation;
  }

  // fail_over_directions - computed: false, optional: false, required: true
  private _failOverDirections?: string[]; 
  public get failOverDirections() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }
  public set failOverDirections(value: string[]) {
    this._failOverDirections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverDirectionsInput() {
    return this._failOverDirections;
  }

  // fail_over_types - computed: false, optional: false, required: true
  private _failOverTypes?: string[]; 
  public get failOverTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_types'));
  }
  public set failOverTypes(value: string[]) {
    this._failOverTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverTypesInput() {
    return this._failOverTypes;
  }

  // manual_action_instruction - computed: false, optional: true, required: false
  private _manualActionInstruction?: string; 
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }
  public set manualActionInstruction(value: string) {
    this._manualActionInstruction = value;
  }
  public resetManualActionInstruction() {
    this._manualActionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualActionInstructionInput() {
    return this._manualActionInstruction;
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

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup {
  /**
  * post_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}
  */
  readonly postAction?: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction[] | cdktn.IResolvable;
  /**
  * pre_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}
  */
  readonly preAction?: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction[] | cdktn.IResolvable;
}

export function siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference | SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    post_action: cdktn.listMapper(siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionToTerraform, true)(struct!.postAction),
    pre_action: cdktn.listMapper(siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionToTerraform, true)(struct!.preAction),
  }
}


export function siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference | SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    post_action: {
      value: cdktn.listMapperHcl(siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionToHclTerraform, true)(struct!.postAction),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList",
    },
    pre_action: {
      value: cdktn.listMapperHcl(siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionToHclTerraform, true)(struct!.preAction),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAction = this._postAction?.internalValue;
    }
    if (this._preAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAction = this._preAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postAction.internalValue = undefined;
      this._preAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postAction.internalValue = value.postAction;
      this._preAction.internalValue = value.preAction;
    }
  }

  // post_action - computed: false, optional: true, required: false
  private _postAction = new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostActionList(this, "post_action", false);
  public get postAction() {
    return this._postAction;
  }
  public putPostAction(value: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPostAction[] | cdktn.IResolvable) {
    this._postAction.internalValue = value;
  }
  public resetPostAction() {
    this._postAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postActionInput() {
    return this._postAction.internalValue;
  }

  // pre_action - computed: false, optional: true, required: false
  private _preAction = new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreActionList(this, "pre_action", false);
  public get preAction() {
    return this._preAction;
  }
  public putPreAction(value: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupPreAction[] | cdktn.IResolvable) {
    this._preAction.internalValue = value;
  }
  public resetPreAction() {
    this._preAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preActionInput() {
    return this._preAction.internalValue;
  }
}
export interface SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}
  */
  readonly fabricLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}
  */
  readonly failOverDirections: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}
  */
  readonly failOverTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}
  */
  readonly manualActionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
}

export function siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fabric_location: cdktn.stringToTerraform(struct!.fabricLocation),
    fail_over_directions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverDirections),
    fail_over_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverTypes),
    manual_action_instruction: cdktn.stringToTerraform(struct!.manualActionInstruction),
    name: cdktn.stringToTerraform(struct!.name),
    runbook_id: cdktn.stringToTerraform(struct!.runbookId),
    script_path: cdktn.stringToTerraform(struct!.scriptPath),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fabric_location: {
      value: cdktn.stringToHclTerraform(struct!.fabricLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over_directions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverDirections),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_over_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    manual_action_instruction: {
      value: cdktn.stringToHclTerraform(struct!.manualActionInstruction),
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
    runbook_id: {
      value: cdktn.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktn.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricLocation = this._fabricLocation;
    }
    if (this._failOverDirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverDirections = this._failOverDirections;
    }
    if (this._failOverTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverTypes = this._failOverTypes;
    }
    if (this._manualActionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualActionInstruction = this._manualActionInstruction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricLocation = undefined;
      this._failOverDirections = undefined;
      this._failOverTypes = undefined;
      this._manualActionInstruction = undefined;
      this._name = undefined;
      this._runbookId = undefined;
      this._scriptPath = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricLocation = value.fabricLocation;
      this._failOverDirections = value.failOverDirections;
      this._failOverTypes = value.failOverTypes;
      this._manualActionInstruction = value.manualActionInstruction;
      this._name = value.name;
      this._runbookId = value.runbookId;
      this._scriptPath = value.scriptPath;
      this._type = value.type;
    }
  }

  // fabric_location - computed: false, optional: true, required: false
  private _fabricLocation?: string; 
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }
  public set fabricLocation(value: string) {
    this._fabricLocation = value;
  }
  public resetFabricLocation() {
    this._fabricLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricLocationInput() {
    return this._fabricLocation;
  }

  // fail_over_directions - computed: false, optional: false, required: true
  private _failOverDirections?: string[]; 
  public get failOverDirections() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }
  public set failOverDirections(value: string[]) {
    this._failOverDirections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverDirectionsInput() {
    return this._failOverDirections;
  }

  // fail_over_types - computed: false, optional: false, required: true
  private _failOverTypes?: string[]; 
  public get failOverTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_types'));
  }
  public set failOverTypes(value: string[]) {
    this._failOverTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverTypesInput() {
    return this._failOverTypes;
  }

  // manual_action_instruction - computed: false, optional: true, required: false
  private _manualActionInstruction?: string; 
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }
  public set manualActionInstruction(value: string) {
    this._manualActionInstruction = value;
  }
  public resetManualActionInstruction() {
    this._manualActionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualActionInstructionInput() {
    return this._manualActionInstruction;
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

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fabric_location SiteRecoveryReplicationRecoveryPlan#fabric_location}
  */
  readonly fabricLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_directions SiteRecoveryReplicationRecoveryPlan#fail_over_directions}
  */
  readonly failOverDirections: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#fail_over_types SiteRecoveryReplicationRecoveryPlan#fail_over_types}
  */
  readonly failOverTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#manual_action_instruction SiteRecoveryReplicationRecoveryPlan#manual_action_instruction}
  */
  readonly manualActionInstruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#name SiteRecoveryReplicationRecoveryPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#runbook_id SiteRecoveryReplicationRecoveryPlan#runbook_id}
  */
  readonly runbookId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#script_path SiteRecoveryReplicationRecoveryPlan#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#type SiteRecoveryReplicationRecoveryPlan#type}
  */
  readonly type: string;
}

export function siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fabric_location: cdktn.stringToTerraform(struct!.fabricLocation),
    fail_over_directions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverDirections),
    fail_over_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.failOverTypes),
    manual_action_instruction: cdktn.stringToTerraform(struct!.manualActionInstruction),
    name: cdktn.stringToTerraform(struct!.name),
    runbook_id: cdktn.stringToTerraform(struct!.runbookId),
    script_path: cdktn.stringToTerraform(struct!.scriptPath),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fabric_location: {
      value: cdktn.stringToHclTerraform(struct!.fabricLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_over_directions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverDirections),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fail_over_types: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.failOverTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    manual_action_instruction: {
      value: cdktn.stringToHclTerraform(struct!.manualActionInstruction),
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
    runbook_id: {
      value: cdktn.stringToHclTerraform(struct!.runbookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktn.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricLocation = this._fabricLocation;
    }
    if (this._failOverDirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverDirections = this._failOverDirections;
    }
    if (this._failOverTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOverTypes = this._failOverTypes;
    }
    if (this._manualActionInstruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualActionInstruction = this._manualActionInstruction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runbookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookId = this._runbookId;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricLocation = undefined;
      this._failOverDirections = undefined;
      this._failOverTypes = undefined;
      this._manualActionInstruction = undefined;
      this._name = undefined;
      this._runbookId = undefined;
      this._scriptPath = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricLocation = value.fabricLocation;
      this._failOverDirections = value.failOverDirections;
      this._failOverTypes = value.failOverTypes;
      this._manualActionInstruction = value.manualActionInstruction;
      this._name = value.name;
      this._runbookId = value.runbookId;
      this._scriptPath = value.scriptPath;
      this._type = value.type;
    }
  }

  // fabric_location - computed: false, optional: true, required: false
  private _fabricLocation?: string; 
  public get fabricLocation() {
    return this.getStringAttribute('fabric_location');
  }
  public set fabricLocation(value: string) {
    this._fabricLocation = value;
  }
  public resetFabricLocation() {
    this._fabricLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricLocationInput() {
    return this._fabricLocation;
  }

  // fail_over_directions - computed: false, optional: false, required: true
  private _failOverDirections?: string[]; 
  public get failOverDirections() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_directions'));
  }
  public set failOverDirections(value: string[]) {
    this._failOverDirections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverDirectionsInput() {
    return this._failOverDirections;
  }

  // fail_over_types - computed: false, optional: false, required: true
  private _failOverTypes?: string[]; 
  public get failOverTypes() {
    return cdktn.Fn.tolist(this.getListAttribute('fail_over_types'));
  }
  public set failOverTypes(value: string[]) {
    this._failOverTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverTypesInput() {
    return this._failOverTypes;
  }

  // manual_action_instruction - computed: false, optional: true, required: false
  private _manualActionInstruction?: string; 
  public get manualActionInstruction() {
    return this.getStringAttribute('manual_action_instruction');
  }
  public set manualActionInstruction(value: string) {
    this._manualActionInstruction = value;
  }
  public resetManualActionInstruction() {
    this._manualActionInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualActionInstructionInput() {
    return this._manualActionInstruction;
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

  // runbook_id - computed: false, optional: true, required: false
  private _runbookId?: string; 
  public get runbookId() {
    return this.getStringAttribute('runbook_id');
  }
  public set runbookId(value: string) {
    this._runbookId = value;
  }
  public resetRunbookId() {
    this._runbookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdInput() {
    return this._runbookId;
  }

  // script_path - computed: false, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList extends cdktn.ComplexList {
  public internalValue? : SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction[] | cdktn.IResolvable

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
  public get(index: number): SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference {
    return new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup {
  /**
  * post_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#post_action SiteRecoveryReplicationRecoveryPlan#post_action}
  */
  readonly postAction?: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction[] | cdktn.IResolvable;
  /**
  * pre_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#pre_action SiteRecoveryReplicationRecoveryPlan#pre_action}
  */
  readonly preAction?: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction[] | cdktn.IResolvable;
}

export function siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference | SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    post_action: cdktn.listMapper(siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionToTerraform, true)(struct!.postAction),
    pre_action: cdktn.listMapper(siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionToTerraform, true)(struct!.preAction),
  }
}


export function siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference | SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    post_action: {
      value: cdktn.listMapperHcl(siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionToHclTerraform, true)(struct!.postAction),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList",
    },
    pre_action: {
      value: cdktn.listMapperHcl(siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionToHclTerraform, true)(struct!.preAction),
      isBlock: true,
      type: "list",
      storageClassType: "SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAction = this._postAction?.internalValue;
    }
    if (this._preAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preAction = this._preAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._postAction.internalValue = undefined;
      this._preAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._postAction.internalValue = value.postAction;
      this._preAction.internalValue = value.preAction;
    }
  }

  // post_action - computed: false, optional: true, required: false
  private _postAction = new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostActionList(this, "post_action", false);
  public get postAction() {
    return this._postAction;
  }
  public putPostAction(value: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPostAction[] | cdktn.IResolvable) {
    this._postAction.internalValue = value;
  }
  public resetPostAction() {
    this._postAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postActionInput() {
    return this._postAction.internalValue;
  }

  // pre_action - computed: false, optional: true, required: false
  private _preAction = new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreActionList(this, "pre_action", false);
  public get preAction() {
    return this._preAction;
  }
  public putPreAction(value: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupPreAction[] | cdktn.IResolvable) {
    this._preAction.internalValue = value;
  }
  public resetPreAction() {
    this._preAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preActionInput() {
    return this._preAction.internalValue;
  }
}
export interface SiteRecoveryReplicationRecoveryPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#create SiteRecoveryReplicationRecoveryPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#delete SiteRecoveryReplicationRecoveryPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#read SiteRecoveryReplicationRecoveryPlan#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#update SiteRecoveryReplicationRecoveryPlan#update}
  */
  readonly update?: string;
}

export function siteRecoveryReplicationRecoveryPlanTimeoutsToTerraform(struct?: SiteRecoveryReplicationRecoveryPlanTimeouts | cdktn.IResolvable): any {
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


export function siteRecoveryReplicationRecoveryPlanTimeoutsToHclTerraform(struct?: SiteRecoveryReplicationRecoveryPlanTimeouts | cdktn.IResolvable): any {
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

export class SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteRecoveryReplicationRecoveryPlanTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SiteRecoveryReplicationRecoveryPlanTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan}
*/
export class SiteRecoveryReplicationRecoveryPlan extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_site_recovery_replication_recovery_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SiteRecoveryReplicationRecoveryPlan resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteRecoveryReplicationRecoveryPlan to import
  * @param importFromId The id of the existing SiteRecoveryReplicationRecoveryPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteRecoveryReplicationRecoveryPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_site_recovery_replication_recovery_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.0.1/docs/resources/site_recovery_replication_recovery_plan azurerm_site_recovery_replication_recovery_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryReplicationRecoveryPlanConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryReplicationRecoveryPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_replication_recovery_plan',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.0.1',
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
    this._name = config.name;
    this._recoveryVaultId = config.recoveryVaultId;
    this._sourceRecoveryFabricId = config.sourceRecoveryFabricId;
    this._targetRecoveryFabricId = config.targetRecoveryFabricId;
    this._azureToAzureSettings.internalValue = config.azureToAzureSettings;
    this._bootRecoveryGroup.internalValue = config.bootRecoveryGroup;
    this._failoverRecoveryGroup.internalValue = config.failoverRecoveryGroup;
    this._shutdownRecoveryGroup.internalValue = config.shutdownRecoveryGroup;
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

  // recovery_vault_id - computed: false, optional: false, required: true
  private _recoveryVaultId?: string; 
  public get recoveryVaultId() {
    return this.getStringAttribute('recovery_vault_id');
  }
  public set recoveryVaultId(value: string) {
    this._recoveryVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultIdInput() {
    return this._recoveryVaultId;
  }

  // source_recovery_fabric_id - computed: false, optional: false, required: true
  private _sourceRecoveryFabricId?: string; 
  public get sourceRecoveryFabricId() {
    return this.getStringAttribute('source_recovery_fabric_id');
  }
  public set sourceRecoveryFabricId(value: string) {
    this._sourceRecoveryFabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryFabricIdInput() {
    return this._sourceRecoveryFabricId;
  }

  // target_recovery_fabric_id - computed: false, optional: false, required: true
  private _targetRecoveryFabricId?: string; 
  public get targetRecoveryFabricId() {
    return this.getStringAttribute('target_recovery_fabric_id');
  }
  public set targetRecoveryFabricId(value: string) {
    this._targetRecoveryFabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryFabricIdInput() {
    return this._targetRecoveryFabricId;
  }

  // azure_to_azure_settings - computed: false, optional: true, required: false
  private _azureToAzureSettings = new SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsOutputReference(this, "azure_to_azure_settings");
  public get azureToAzureSettings() {
    return this._azureToAzureSettings;
  }
  public putAzureToAzureSettings(value: SiteRecoveryReplicationRecoveryPlanAzureToAzureSettings) {
    this._azureToAzureSettings.internalValue = value;
  }
  public resetAzureToAzureSettings() {
    this._azureToAzureSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureToAzureSettingsInput() {
    return this._azureToAzureSettings.internalValue;
  }

  // boot_recovery_group - computed: false, optional: false, required: true
  private _bootRecoveryGroup = new SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList(this, "boot_recovery_group", false);
  public get bootRecoveryGroup() {
    return this._bootRecoveryGroup;
  }
  public putBootRecoveryGroup(value: SiteRecoveryReplicationRecoveryPlanBootRecoveryGroup[] | cdktn.IResolvable) {
    this._bootRecoveryGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootRecoveryGroupInput() {
    return this._bootRecoveryGroup.internalValue;
  }

  // failover_recovery_group - computed: false, optional: false, required: true
  private _failoverRecoveryGroup = new SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupOutputReference(this, "failover_recovery_group");
  public get failoverRecoveryGroup() {
    return this._failoverRecoveryGroup;
  }
  public putFailoverRecoveryGroup(value: SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroup) {
    this._failoverRecoveryGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRecoveryGroupInput() {
    return this._failoverRecoveryGroup.internalValue;
  }

  // shutdown_recovery_group - computed: false, optional: false, required: true
  private _shutdownRecoveryGroup = new SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupOutputReference(this, "shutdown_recovery_group");
  public get shutdownRecoveryGroup() {
    return this._shutdownRecoveryGroup;
  }
  public putShutdownRecoveryGroup(value: SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroup) {
    this._shutdownRecoveryGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownRecoveryGroupInput() {
    return this._shutdownRecoveryGroup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SiteRecoveryReplicationRecoveryPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SiteRecoveryReplicationRecoveryPlanTimeouts) {
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
      name: cdktn.stringToTerraform(this._name),
      recovery_vault_id: cdktn.stringToTerraform(this._recoveryVaultId),
      source_recovery_fabric_id: cdktn.stringToTerraform(this._sourceRecoveryFabricId),
      target_recovery_fabric_id: cdktn.stringToTerraform(this._targetRecoveryFabricId),
      azure_to_azure_settings: siteRecoveryReplicationRecoveryPlanAzureToAzureSettingsToTerraform(this._azureToAzureSettings.internalValue),
      boot_recovery_group: cdktn.listMapper(siteRecoveryReplicationRecoveryPlanBootRecoveryGroupToTerraform, true)(this._bootRecoveryGroup.internalValue),
      failover_recovery_group: siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupToTerraform(this._failoverRecoveryGroup.internalValue),
      shutdown_recovery_group: siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupToTerraform(this._shutdownRecoveryGroup.internalValue),
      timeouts: siteRecoveryReplicationRecoveryPlanTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_vault_id: {
        value: cdktn.stringToHclTerraform(this._recoveryVaultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_recovery_fabric_id: {
        value: cdktn.stringToHclTerraform(this._sourceRecoveryFabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_recovery_fabric_id: {
        value: cdktn.stringToHclTerraform(this._targetRecoveryFabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_to_azure_settings: {
        value: siteRecoveryReplicationRecoveryPlanAzureToAzureSettingsToHclTerraform(this._azureToAzureSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteRecoveryReplicationRecoveryPlanAzureToAzureSettingsList",
      },
      boot_recovery_group: {
        value: cdktn.listMapperHcl(siteRecoveryReplicationRecoveryPlanBootRecoveryGroupToHclTerraform, true)(this._bootRecoveryGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteRecoveryReplicationRecoveryPlanBootRecoveryGroupList",
      },
      failover_recovery_group: {
        value: siteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupToHclTerraform(this._failoverRecoveryGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteRecoveryReplicationRecoveryPlanFailoverRecoveryGroupList",
      },
      shutdown_recovery_group: {
        value: siteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupToHclTerraform(this._shutdownRecoveryGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteRecoveryReplicationRecoveryPlanShutdownRecoveryGroupList",
      },
      timeouts: {
        value: siteRecoveryReplicationRecoveryPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteRecoveryReplicationRecoveryPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
