/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataAzurermRoleManagementPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy#id DataAzurermRoleManagementPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the Azure Role to which this policy is assigned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy#role_definition_id DataAzurermRoleManagementPolicy#role_definition_id}
  */
  readonly roleDefinitionId: string;
  /**
  * The scope of the role to which this policy will apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy#scope DataAzurermRoleManagementPolicy#scope}
  */
  readonly scope: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy#timeouts DataAzurermRoleManagementPolicy#timeouts}
  */
  readonly timeouts?: DataAzurermRoleManagementPolicyTimeouts;
}
export interface DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover {
}

export function dataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverToTerraform(struct?: DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverToHclTerraform(struct?: DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference {
    return new DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyActivationRulesApprovalStage {
}

export function dataAzurermRoleManagementPolicyActivationRulesApprovalStageToTerraform(struct?: DataAzurermRoleManagementPolicyActivationRulesApprovalStage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyActivationRulesApprovalStageToHclTerraform(struct?: DataAzurermRoleManagementPolicyActivationRulesApprovalStage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyActivationRulesApprovalStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyActivationRulesApprovalStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_approver - computed: true, optional: false, required: false
  private _primaryApprover = new DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(this, "primary_approver", true);
  public get primaryApprover() {
    return this._primaryApprover;
  }
}

export class DataAzurermRoleManagementPolicyActivationRulesApprovalStageList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference {
    return new DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyActivationRules {
}

export function dataAzurermRoleManagementPolicyActivationRulesToTerraform(struct?: DataAzurermRoleManagementPolicyActivationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyActivationRulesToHclTerraform(struct?: DataAzurermRoleManagementPolicyActivationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyActivationRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyActivationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyActivationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approval_stage - computed: true, optional: false, required: false
  private _approvalStage = new DataAzurermRoleManagementPolicyActivationRulesApprovalStageList(this, "approval_stage", false);
  public get approvalStage() {
    return this._approvalStage;
  }

  // maximum_duration - computed: true, optional: false, required: false
  public get maximumDuration() {
    return this.getStringAttribute('maximum_duration');
  }

  // require_approval - computed: true, optional: false, required: false
  public get requireApproval() {
    return this.getBooleanAttribute('require_approval');
  }

  // require_justification - computed: true, optional: false, required: false
  public get requireJustification() {
    return this.getBooleanAttribute('require_justification');
  }

  // require_multifactor_authentication - computed: true, optional: false, required: false
  public get requireMultifactorAuthentication() {
    return this.getBooleanAttribute('require_multifactor_authentication');
  }

  // require_ticket_info - computed: true, optional: false, required: false
  public get requireTicketInfo() {
    return this.getBooleanAttribute('require_ticket_info');
  }

  // required_conditional_access_authentication_context - computed: true, optional: false, required: false
  public get requiredConditionalAccessAuthenticationContext() {
    return this.getStringAttribute('required_conditional_access_authentication_context');
  }
}

export class DataAzurermRoleManagementPolicyActivationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyActivationRulesOutputReference {
    return new DataAzurermRoleManagementPolicyActivationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyActiveAssignmentRules {
}

export function dataAzurermRoleManagementPolicyActiveAssignmentRulesToTerraform(struct?: DataAzurermRoleManagementPolicyActiveAssignmentRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyActiveAssignmentRulesToHclTerraform(struct?: DataAzurermRoleManagementPolicyActiveAssignmentRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyActiveAssignmentRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyActiveAssignmentRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration_required - computed: true, optional: false, required: false
  public get expirationRequired() {
    return this.getBooleanAttribute('expiration_required');
  }

  // expire_after - computed: true, optional: false, required: false
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }

  // require_justification - computed: true, optional: false, required: false
  public get requireJustification() {
    return this.getBooleanAttribute('require_justification');
  }

  // require_multifactor_authentication - computed: true, optional: false, required: false
  public get requireMultifactorAuthentication() {
    return this.getBooleanAttribute('require_multifactor_authentication');
  }

  // require_ticket_info - computed: true, optional: false, required: false
  public get requireTicketInfo() {
    return this.getBooleanAttribute('require_ticket_info');
  }
}

export class DataAzurermRoleManagementPolicyActiveAssignmentRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference {
    return new DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyEligibleAssignmentRules {
}

export function dataAzurermRoleManagementPolicyEligibleAssignmentRulesToTerraform(struct?: DataAzurermRoleManagementPolicyEligibleAssignmentRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyEligibleAssignmentRulesToHclTerraform(struct?: DataAzurermRoleManagementPolicyEligibleAssignmentRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyEligibleAssignmentRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyEligibleAssignmentRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration_required - computed: true, optional: false, required: false
  public get expirationRequired() {
    return this.getBooleanAttribute('expiration_required');
  }

  // expire_after - computed: true, optional: false, required: false
  public get expireAfter() {
    return this.getStringAttribute('expire_after');
  }
}

export class DataAzurermRoleManagementPolicyEligibleAssignmentRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference {
    return new DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments {
}

export function dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_notifications - computed: true, optional: false, required: false
  private _adminNotifications = new DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList(this, "admin_notifications", false);
  public get adminNotifications() {
    return this._adminNotifications;
  }

  // approver_notifications - computed: true, optional: false, required: false
  private _approverNotifications = new DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList(this, "approver_notifications", false);
  public get approverNotifications() {
    return this._approverNotifications;
  }

  // assignee_notifications - computed: true, optional: false, required: false
  private _assigneeNotifications = new DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList(this, "assignee_notifications", false);
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations {
}

export function dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_notifications - computed: true, optional: false, required: false
  private _adminNotifications = new DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList(this, "admin_notifications", false);
  public get adminNotifications() {
    return this._adminNotifications;
  }

  // approver_notifications - computed: true, optional: false, required: false
  private _approverNotifications = new DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList(this, "approver_notifications", false);
  public get approverNotifications() {
    return this._approverNotifications;
  }

  // assignee_notifications - computed: true, optional: false, required: false
  private _assigneeNotifications = new DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList(this, "assignee_notifications", false);
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications {
}

export function dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_recipients - computed: true, optional: false, required: false
  public get additionalRecipients() {
    return cdktn.Fn.tolist(this.getListAttribute('additional_recipients'));
  }

  // default_recipients - computed: true, optional: false, required: false
  public get defaultRecipients() {
    return this.getBooleanAttribute('default_recipients');
  }

  // notification_level - computed: true, optional: false, required: false
  public get notificationLevel() {
    return this.getStringAttribute('notification_level');
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments {
}

export function dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_notifications - computed: true, optional: false, required: false
  private _adminNotifications = new DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList(this, "admin_notifications", false);
  public get adminNotifications() {
    return this._adminNotifications;
  }

  // approver_notifications - computed: true, optional: false, required: false
  private _approverNotifications = new DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList(this, "approver_notifications", false);
  public get approverNotifications() {
    return this._approverNotifications;
  }

  // assignee_notifications - computed: true, optional: false, required: false
  private _assigneeNotifications = new DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList(this, "assignee_notifications", false);
  public get assigneeNotifications() {
    return this._assigneeNotifications;
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyNotificationRules {
}

export function dataAzurermRoleManagementPolicyNotificationRulesToTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataAzurermRoleManagementPolicyNotificationRulesToHclTerraform(struct?: DataAzurermRoleManagementPolicyNotificationRules): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermRoleManagementPolicyNotificationRulesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyNotificationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyNotificationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_assignments - computed: true, optional: false, required: false
  private _activeAssignments = new DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList(this, "active_assignments", false);
  public get activeAssignments() {
    return this._activeAssignments;
  }

  // eligible_activations - computed: true, optional: false, required: false
  private _eligibleActivations = new DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList(this, "eligible_activations", false);
  public get eligibleActivations() {
    return this._eligibleActivations;
  }

  // eligible_assignments - computed: true, optional: false, required: false
  private _eligibleAssignments = new DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList(this, "eligible_assignments", false);
  public get eligibleAssignments() {
    return this._eligibleAssignments;
  }
}

export class DataAzurermRoleManagementPolicyNotificationRulesList extends cdktn.ComplexList {

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
  public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesOutputReference {
    return new DataAzurermRoleManagementPolicyNotificationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermRoleManagementPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy#read DataAzurermRoleManagementPolicy#read}
  */
  readonly read?: string;
}

export function dataAzurermRoleManagementPolicyTimeoutsToTerraform(struct?: DataAzurermRoleManagementPolicyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
  }
}


export function dataAzurermRoleManagementPolicyTimeoutsToHclTerraform(struct?: DataAzurermRoleManagementPolicyTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermRoleManagementPolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermRoleManagementPolicyTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermRoleManagementPolicyTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy azurerm_role_management_policy}
*/
export class DataAzurermRoleManagementPolicy extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_role_management_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataAzurermRoleManagementPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermRoleManagementPolicy to import
  * @param importFromId The id of the existing DataAzurermRoleManagementPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermRoleManagementPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_role_management_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.1.0/docs/data-sources/role_management_policy azurerm_role_management_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermRoleManagementPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermRoleManagementPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_role_management_policy',
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
    this._id = config.id;
    this._roleDefinitionId = config.roleDefinitionId;
    this._scope = config.scope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_rules - computed: true, optional: false, required: false
  private _activationRules = new DataAzurermRoleManagementPolicyActivationRulesList(this, "activation_rules", false);
  public get activationRules() {
    return this._activationRules;
  }

  // active_assignment_rules - computed: true, optional: false, required: false
  private _activeAssignmentRules = new DataAzurermRoleManagementPolicyActiveAssignmentRulesList(this, "active_assignment_rules", false);
  public get activeAssignmentRules() {
    return this._activeAssignmentRules;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // eligible_assignment_rules - computed: true, optional: false, required: false
  private _eligibleAssignmentRules = new DataAzurermRoleManagementPolicyEligibleAssignmentRulesList(this, "eligible_assignment_rules", false);
  public get eligibleAssignmentRules() {
    return this._eligibleAssignmentRules;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_rules - computed: true, optional: false, required: false
  private _notificationRules = new DataAzurermRoleManagementPolicyNotificationRulesList(this, "notification_rules", false);
  public get notificationRules() {
    return this._notificationRules;
  }

  // role_definition_id - computed: false, optional: false, required: true
  private _roleDefinitionId?: string; 
  public get roleDefinitionId() {
    return this.getStringAttribute('role_definition_id');
  }
  public set roleDefinitionId(value: string) {
    this._roleDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleDefinitionIdInput() {
    return this._roleDefinitionId;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermRoleManagementPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermRoleManagementPolicyTimeouts) {
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
      role_definition_id: cdktn.stringToTerraform(this._roleDefinitionId),
      scope: cdktn.stringToTerraform(this._scope),
      timeouts: dataAzurermRoleManagementPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      role_definition_id: {
        value: cdktn.stringToHclTerraform(this._roleDefinitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermRoleManagementPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermRoleManagementPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
