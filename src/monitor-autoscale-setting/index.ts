/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MonitorAutoscaleSettingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#enabled MonitorAutoscaleSetting#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#id MonitorAutoscaleSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#location MonitorAutoscaleSetting#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#resource_group_name MonitorAutoscaleSetting#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#tags MonitorAutoscaleSetting#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#target_resource_id MonitorAutoscaleSetting#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#notification MonitorAutoscaleSetting#notification}
  */
  readonly notification?: MonitorAutoscaleSettingNotification;
  /**
  * predictive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#predictive MonitorAutoscaleSetting#predictive}
  */
  readonly predictive?: MonitorAutoscaleSettingPredictive;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#profile MonitorAutoscaleSetting#profile}
  */
  readonly profile: MonitorAutoscaleSettingProfile[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#timeouts MonitorAutoscaleSetting#timeouts}
  */
  readonly timeouts?: MonitorAutoscaleSettingTimeouts;
}
export interface MonitorAutoscaleSettingNotificationEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#custom_emails MonitorAutoscaleSetting#custom_emails}
  */
  readonly customEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#send_to_subscription_administrator MonitorAutoscaleSetting#send_to_subscription_administrator}
  */
  readonly sendToSubscriptionAdministrator?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#send_to_subscription_co_administrator MonitorAutoscaleSetting#send_to_subscription_co_administrator}
  */
  readonly sendToSubscriptionCoAdministrator?: boolean | cdktn.IResolvable;
}

export function monitorAutoscaleSettingNotificationEmailToTerraform(struct?: MonitorAutoscaleSettingNotificationEmailOutputReference | MonitorAutoscaleSettingNotificationEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_emails: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.customEmails),
    send_to_subscription_administrator: cdktn.booleanToTerraform(struct!.sendToSubscriptionAdministrator),
    send_to_subscription_co_administrator: cdktn.booleanToTerraform(struct!.sendToSubscriptionCoAdministrator),
  }
}


export function monitorAutoscaleSettingNotificationEmailToHclTerraform(struct?: MonitorAutoscaleSettingNotificationEmailOutputReference | MonitorAutoscaleSettingNotificationEmail): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_emails: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.customEmails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_to_subscription_administrator: {
      value: cdktn.booleanToHclTerraform(struct!.sendToSubscriptionAdministrator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_to_subscription_co_administrator: {
      value: cdktn.booleanToHclTerraform(struct!.sendToSubscriptionCoAdministrator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingNotificationEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAutoscaleSettingNotificationEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEmails = this._customEmails;
    }
    if (this._sendToSubscriptionAdministrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToSubscriptionAdministrator = this._sendToSubscriptionAdministrator;
    }
    if (this._sendToSubscriptionCoAdministrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToSubscriptionCoAdministrator = this._sendToSubscriptionCoAdministrator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingNotificationEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customEmails = undefined;
      this._sendToSubscriptionAdministrator = undefined;
      this._sendToSubscriptionCoAdministrator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customEmails = value.customEmails;
      this._sendToSubscriptionAdministrator = value.sendToSubscriptionAdministrator;
      this._sendToSubscriptionCoAdministrator = value.sendToSubscriptionCoAdministrator;
    }
  }

  // custom_emails - computed: false, optional: true, required: false
  private _customEmails?: string[]; 
  public get customEmails() {
    return this.getListAttribute('custom_emails');
  }
  public set customEmails(value: string[]) {
    this._customEmails = value;
  }
  public resetCustomEmails() {
    this._customEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEmailsInput() {
    return this._customEmails;
  }

  // send_to_subscription_administrator - computed: false, optional: true, required: false
  private _sendToSubscriptionAdministrator?: boolean | cdktn.IResolvable; 
  public get sendToSubscriptionAdministrator() {
    return this.getBooleanAttribute('send_to_subscription_administrator');
  }
  public set sendToSubscriptionAdministrator(value: boolean | cdktn.IResolvable) {
    this._sendToSubscriptionAdministrator = value;
  }
  public resetSendToSubscriptionAdministrator() {
    this._sendToSubscriptionAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToSubscriptionAdministratorInput() {
    return this._sendToSubscriptionAdministrator;
  }

  // send_to_subscription_co_administrator - computed: false, optional: true, required: false
  private _sendToSubscriptionCoAdministrator?: boolean | cdktn.IResolvable; 
  public get sendToSubscriptionCoAdministrator() {
    return this.getBooleanAttribute('send_to_subscription_co_administrator');
  }
  public set sendToSubscriptionCoAdministrator(value: boolean | cdktn.IResolvable) {
    this._sendToSubscriptionCoAdministrator = value;
  }
  public resetSendToSubscriptionCoAdministrator() {
    this._sendToSubscriptionCoAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToSubscriptionCoAdministratorInput() {
    return this._sendToSubscriptionCoAdministrator;
  }
}
export interface MonitorAutoscaleSettingNotificationWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#properties MonitorAutoscaleSetting#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#service_uri MonitorAutoscaleSetting#service_uri}
  */
  readonly serviceUri: string;
}

export function monitorAutoscaleSettingNotificationWebhookToTerraform(struct?: MonitorAutoscaleSettingNotificationWebhook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    properties: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.properties),
    service_uri: cdktn.stringToTerraform(struct!.serviceUri),
  }
}


export function monitorAutoscaleSettingNotificationWebhookToHclTerraform(struct?: MonitorAutoscaleSettingNotificationWebhook | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    properties: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_uri: {
      value: cdktn.stringToHclTerraform(struct!.serviceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingNotificationWebhookOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorAutoscaleSettingNotificationWebhook | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._serviceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUri = this._serviceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingNotificationWebhook | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._properties = undefined;
      this._serviceUri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._properties = value.properties;
      this._serviceUri = value.serviceUri;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // service_uri - computed: false, optional: false, required: true
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri;
  }
}

export class MonitorAutoscaleSettingNotificationWebhookList extends cdktn.ComplexList {
  public internalValue? : MonitorAutoscaleSettingNotificationWebhook[] | cdktn.IResolvable

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
  public get(index: number): MonitorAutoscaleSettingNotificationWebhookOutputReference {
    return new MonitorAutoscaleSettingNotificationWebhookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAutoscaleSettingNotification {
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#email MonitorAutoscaleSetting#email}
  */
  readonly email?: MonitorAutoscaleSettingNotificationEmail;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#webhook MonitorAutoscaleSetting#webhook}
  */
  readonly webhook?: MonitorAutoscaleSettingNotificationWebhook[] | cdktn.IResolvable;
}

export function monitorAutoscaleSettingNotificationToTerraform(struct?: MonitorAutoscaleSettingNotificationOutputReference | MonitorAutoscaleSettingNotification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    email: monitorAutoscaleSettingNotificationEmailToTerraform(struct!.email),
    webhook: cdktn.listMapper(monitorAutoscaleSettingNotificationWebhookToTerraform, true)(struct!.webhook),
  }
}


export function monitorAutoscaleSettingNotificationToHclTerraform(struct?: MonitorAutoscaleSettingNotificationOutputReference | MonitorAutoscaleSettingNotification): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    email: {
      value: monitorAutoscaleSettingNotificationEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingNotificationEmailList",
    },
    webhook: {
      value: cdktn.listMapperHcl(monitorAutoscaleSettingNotificationWebhookToHclTerraform, true)(struct!.webhook),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingNotificationWebhookList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingNotificationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAutoscaleSettingNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email.internalValue = undefined;
      this._webhook.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email.internalValue = value.email;
      this._webhook.internalValue = value.webhook;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email = new MonitorAutoscaleSettingNotificationEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: MonitorAutoscaleSettingNotificationEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new MonitorAutoscaleSettingNotificationWebhookList(this, "webhook", false);
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: MonitorAutoscaleSettingNotificationWebhook[] | cdktn.IResolvable) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface MonitorAutoscaleSettingPredictive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#look_ahead_time MonitorAutoscaleSetting#look_ahead_time}
  */
  readonly lookAheadTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#scale_mode MonitorAutoscaleSetting#scale_mode}
  */
  readonly scaleMode: string;
}

export function monitorAutoscaleSettingPredictiveToTerraform(struct?: MonitorAutoscaleSettingPredictiveOutputReference | MonitorAutoscaleSettingPredictive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    look_ahead_time: cdktn.stringToTerraform(struct!.lookAheadTime),
    scale_mode: cdktn.stringToTerraform(struct!.scaleMode),
  }
}


export function monitorAutoscaleSettingPredictiveToHclTerraform(struct?: MonitorAutoscaleSettingPredictiveOutputReference | MonitorAutoscaleSettingPredictive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    look_ahead_time: {
      value: cdktn.stringToHclTerraform(struct!.lookAheadTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_mode: {
      value: cdktn.stringToHclTerraform(struct!.scaleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingPredictiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAutoscaleSettingPredictive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lookAheadTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookAheadTime = this._lookAheadTime;
    }
    if (this._scaleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleMode = this._scaleMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingPredictive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lookAheadTime = undefined;
      this._scaleMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lookAheadTime = value.lookAheadTime;
      this._scaleMode = value.scaleMode;
    }
  }

  // look_ahead_time - computed: false, optional: true, required: false
  private _lookAheadTime?: string; 
  public get lookAheadTime() {
    return this.getStringAttribute('look_ahead_time');
  }
  public set lookAheadTime(value: string) {
    this._lookAheadTime = value;
  }
  public resetLookAheadTime() {
    this._lookAheadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookAheadTimeInput() {
    return this._lookAheadTime;
  }

  // scale_mode - computed: false, optional: false, required: true
  private _scaleMode?: string; 
  public get scaleMode() {
    return this.getStringAttribute('scale_mode');
  }
  public set scaleMode(value: string) {
    this._scaleMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleModeInput() {
    return this._scaleMode;
  }
}
export interface MonitorAutoscaleSettingProfileCapacity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#default MonitorAutoscaleSetting#default}
  */
  readonly default: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#maximum MonitorAutoscaleSetting#maximum}
  */
  readonly maximum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#minimum MonitorAutoscaleSetting#minimum}
  */
  readonly minimum: number;
}

export function monitorAutoscaleSettingProfileCapacityToTerraform(struct?: MonitorAutoscaleSettingProfileCapacityOutputReference | MonitorAutoscaleSettingProfileCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default: cdktn.numberToTerraform(struct!.default),
    maximum: cdktn.numberToTerraform(struct!.maximum),
    minimum: cdktn.numberToTerraform(struct!.minimum),
  }
}


export function monitorAutoscaleSettingProfileCapacityToHclTerraform(struct?: MonitorAutoscaleSettingProfileCapacityOutputReference | MonitorAutoscaleSettingProfileCapacity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default: {
      value: cdktn.numberToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktn.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktn.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingProfileCapacityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // maximum - computed: false, optional: false, required: true
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: false, required: true
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }
}
export interface MonitorAutoscaleSettingProfileFixedDate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#end MonitorAutoscaleSetting#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#start MonitorAutoscaleSetting#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}
  */
  readonly timezone?: string;
}

export function monitorAutoscaleSettingProfileFixedDateToTerraform(struct?: MonitorAutoscaleSettingProfileFixedDateOutputReference | MonitorAutoscaleSettingProfileFixedDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    end: cdktn.stringToTerraform(struct!.end),
    start: cdktn.stringToTerraform(struct!.start),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function monitorAutoscaleSettingProfileFixedDateToHclTerraform(struct?: MonitorAutoscaleSettingProfileFixedDateOutputReference | MonitorAutoscaleSettingProfileFixedDate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    end: {
      value: cdktn.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktn.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingProfileFixedDateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileFixedDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileFixedDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._start = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._start = value.start;
      this._timezone = value.timezone;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface MonitorAutoscaleSettingProfileRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#days MonitorAutoscaleSetting#days}
  */
  readonly days: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#hours MonitorAutoscaleSetting#hours}
  */
  readonly hours: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#minutes MonitorAutoscaleSetting#minutes}
  */
  readonly minutes: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#timezone MonitorAutoscaleSetting#timezone}
  */
  readonly timezone?: string;
}

export function monitorAutoscaleSettingProfileRecurrenceToTerraform(struct?: MonitorAutoscaleSettingProfileRecurrenceOutputReference | MonitorAutoscaleSettingProfileRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    days: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.days),
    hours: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.hours),
    minutes: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.minutes),
    timezone: cdktn.stringToTerraform(struct!.timezone),
  }
}


export function monitorAutoscaleSettingProfileRecurrenceToHclTerraform(struct?: MonitorAutoscaleSettingProfileRecurrenceOutputReference | MonitorAutoscaleSettingProfileRecurrence): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    days: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hours: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.hours),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    minutes: {
      value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.minutes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingProfileRecurrenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._timezone = value.timezone;
    }
  }

  // days - computed: false, optional: false, required: true
  private _days?: string[]; 
  public get days() {
    return this.getListAttribute('days');
  }
  public set days(value: string[]) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number[]; 
  public get hours() {
    return this.getNumberListAttribute('hours');
  }
  public set hours(value: number[]) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number[]; 
  public get minutes() {
    return this.getNumberListAttribute('minutes');
  }
  public set minutes(value: number[]) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#values MonitorAutoscaleSetting#values}
  */
  readonly values: string[];
}

export function monitorAutoscaleSettingProfileRuleMetricTriggerDimensionsToTerraform(struct?: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    operator: cdktn.stringToTerraform(struct!.operator),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function monitorAutoscaleSettingProfileRuleMetricTriggerDimensionsToHclTerraform(struct?: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._values = value.values;
    }
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList extends cdktn.ComplexList {
  public internalValue? : MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[] | cdktn.IResolvable

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
  public get(index: number): MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference {
    return new MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAutoscaleSettingProfileRuleMetricTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#divide_by_instance_count MonitorAutoscaleSetting#divide_by_instance_count}
  */
  readonly divideByInstanceCount?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#metric_name MonitorAutoscaleSetting#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#metric_namespace MonitorAutoscaleSetting#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#metric_resource_id MonitorAutoscaleSetting#metric_resource_id}
  */
  readonly metricResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#operator MonitorAutoscaleSetting#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#statistic MonitorAutoscaleSetting#statistic}
  */
  readonly statistic: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#threshold MonitorAutoscaleSetting#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#time_aggregation MonitorAutoscaleSetting#time_aggregation}
  */
  readonly timeAggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#time_grain MonitorAutoscaleSetting#time_grain}
  */
  readonly timeGrain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#time_window MonitorAutoscaleSetting#time_window}
  */
  readonly timeWindow: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#dimensions MonitorAutoscaleSetting#dimensions}
  */
  readonly dimensions?: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[] | cdktn.IResolvable;
}

export function monitorAutoscaleSettingProfileRuleMetricTriggerToTerraform(struct?: MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference | MonitorAutoscaleSettingProfileRuleMetricTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    divide_by_instance_count: cdktn.booleanToTerraform(struct!.divideByInstanceCount),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
    metric_resource_id: cdktn.stringToTerraform(struct!.metricResourceId),
    operator: cdktn.stringToTerraform(struct!.operator),
    statistic: cdktn.stringToTerraform(struct!.statistic),
    threshold: cdktn.numberToTerraform(struct!.threshold),
    time_aggregation: cdktn.stringToTerraform(struct!.timeAggregation),
    time_grain: cdktn.stringToTerraform(struct!.timeGrain),
    time_window: cdktn.stringToTerraform(struct!.timeWindow),
    dimensions: cdktn.listMapper(monitorAutoscaleSettingProfileRuleMetricTriggerDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function monitorAutoscaleSettingProfileRuleMetricTriggerToHclTerraform(struct?: MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference | MonitorAutoscaleSettingProfileRuleMetricTrigger): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    divide_by_instance_count: {
      value: cdktn.booleanToHclTerraform(struct!.divideByInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktn.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_resource_id: {
      value: cdktn.stringToHclTerraform(struct!.metricResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic: {
      value: cdktn.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_aggregation: {
      value: cdktn.stringToHclTerraform(struct!.timeAggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_grain: {
      value: cdktn.stringToHclTerraform(struct!.timeGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_window: {
      value: cdktn.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktn.listMapperHcl(monitorAutoscaleSettingProfileRuleMetricTriggerDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileRuleMetricTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._divideByInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.divideByInstanceCount = this._divideByInstanceCount;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._metricResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricResourceId = this._metricResourceId;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAggregation = this._timeAggregation;
    }
    if (this._timeGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeGrain = this._timeGrain;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileRuleMetricTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._divideByInstanceCount = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._metricResourceId = undefined;
      this._operator = undefined;
      this._statistic = undefined;
      this._threshold = undefined;
      this._timeAggregation = undefined;
      this._timeGrain = undefined;
      this._timeWindow = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._divideByInstanceCount = value.divideByInstanceCount;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._metricResourceId = value.metricResourceId;
      this._operator = value.operator;
      this._statistic = value.statistic;
      this._threshold = value.threshold;
      this._timeAggregation = value.timeAggregation;
      this._timeGrain = value.timeGrain;
      this._timeWindow = value.timeWindow;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // divide_by_instance_count - computed: false, optional: true, required: false
  private _divideByInstanceCount?: boolean | cdktn.IResolvable; 
  public get divideByInstanceCount() {
    return this.getBooleanAttribute('divide_by_instance_count');
  }
  public set divideByInstanceCount(value: boolean | cdktn.IResolvable) {
    this._divideByInstanceCount = value;
  }
  public resetDivideByInstanceCount() {
    this._divideByInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divideByInstanceCountInput() {
    return this._divideByInstanceCount;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // metric_resource_id - computed: false, optional: false, required: true
  private _metricResourceId?: string; 
  public get metricResourceId() {
    return this.getStringAttribute('metric_resource_id');
  }
  public set metricResourceId(value: string) {
    this._metricResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricResourceIdInput() {
    return this._metricResourceId;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // statistic - computed: false, optional: false, required: true
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // time_aggregation - computed: false, optional: false, required: true
  private _timeAggregation?: string; 
  public get timeAggregation() {
    return this.getStringAttribute('time_aggregation');
  }
  public set timeAggregation(value: string) {
    this._timeAggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAggregationInput() {
    return this._timeAggregation;
  }

  // time_grain - computed: false, optional: false, required: true
  private _timeGrain?: string; 
  public get timeGrain() {
    return this.getStringAttribute('time_grain');
  }
  public set timeGrain(value: string) {
    this._timeGrain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeGrainInput() {
    return this._timeGrain;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new MonitorAutoscaleSettingProfileRuleMetricTriggerDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: MonitorAutoscaleSettingProfileRuleMetricTriggerDimensions[] | cdktn.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface MonitorAutoscaleSettingProfileRuleScaleAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#cooldown MonitorAutoscaleSetting#cooldown}
  */
  readonly cooldown: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#direction MonitorAutoscaleSetting#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#type MonitorAutoscaleSetting#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#value MonitorAutoscaleSetting#value}
  */
  readonly value: number;
}

export function monitorAutoscaleSettingProfileRuleScaleActionToTerraform(struct?: MonitorAutoscaleSettingProfileRuleScaleActionOutputReference | MonitorAutoscaleSettingProfileRuleScaleAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cooldown: cdktn.stringToTerraform(struct!.cooldown),
    direction: cdktn.stringToTerraform(struct!.direction),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function monitorAutoscaleSettingProfileRuleScaleActionToHclTerraform(struct?: MonitorAutoscaleSettingProfileRuleScaleActionOutputReference | MonitorAutoscaleSettingProfileRuleScaleAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cooldown: {
      value: cdktn.stringToHclTerraform(struct!.cooldown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
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
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingProfileRuleScaleActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorAutoscaleSettingProfileRuleScaleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldown = this._cooldown;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileRuleScaleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cooldown = undefined;
      this._direction = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cooldown = value.cooldown;
      this._direction = value.direction;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // cooldown - computed: false, optional: false, required: true
  private _cooldown?: string; 
  public get cooldown() {
    return this.getStringAttribute('cooldown');
  }
  public set cooldown(value: string) {
    this._cooldown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownInput() {
    return this._cooldown;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MonitorAutoscaleSettingProfileRule {
  /**
  * metric_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#metric_trigger MonitorAutoscaleSetting#metric_trigger}
  */
  readonly metricTrigger: MonitorAutoscaleSettingProfileRuleMetricTrigger;
  /**
  * scale_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#scale_action MonitorAutoscaleSetting#scale_action}
  */
  readonly scaleAction: MonitorAutoscaleSettingProfileRuleScaleAction;
}

export function monitorAutoscaleSettingProfileRuleToTerraform(struct?: MonitorAutoscaleSettingProfileRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric_trigger: monitorAutoscaleSettingProfileRuleMetricTriggerToTerraform(struct!.metricTrigger),
    scale_action: monitorAutoscaleSettingProfileRuleScaleActionToTerraform(struct!.scaleAction),
  }
}


export function monitorAutoscaleSettingProfileRuleToHclTerraform(struct?: MonitorAutoscaleSettingProfileRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric_trigger: {
      value: monitorAutoscaleSettingProfileRuleMetricTriggerToHclTerraform(struct!.metricTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingProfileRuleMetricTriggerList",
    },
    scale_action: {
      value: monitorAutoscaleSettingProfileRuleScaleActionToHclTerraform(struct!.scaleAction),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingProfileRuleScaleActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingProfileRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorAutoscaleSettingProfileRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTrigger = this._metricTrigger?.internalValue;
    }
    if (this._scaleAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleAction = this._scaleAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfileRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricTrigger.internalValue = undefined;
      this._scaleAction.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricTrigger.internalValue = value.metricTrigger;
      this._scaleAction.internalValue = value.scaleAction;
    }
  }

  // metric_trigger - computed: false, optional: false, required: true
  private _metricTrigger = new MonitorAutoscaleSettingProfileRuleMetricTriggerOutputReference(this, "metric_trigger");
  public get metricTrigger() {
    return this._metricTrigger;
  }
  public putMetricTrigger(value: MonitorAutoscaleSettingProfileRuleMetricTrigger) {
    this._metricTrigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTriggerInput() {
    return this._metricTrigger.internalValue;
  }

  // scale_action - computed: false, optional: false, required: true
  private _scaleAction = new MonitorAutoscaleSettingProfileRuleScaleActionOutputReference(this, "scale_action");
  public get scaleAction() {
    return this._scaleAction;
  }
  public putScaleAction(value: MonitorAutoscaleSettingProfileRuleScaleAction) {
    this._scaleAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleActionInput() {
    return this._scaleAction.internalValue;
  }
}

export class MonitorAutoscaleSettingProfileRuleList extends cdktn.ComplexList {
  public internalValue? : MonitorAutoscaleSettingProfileRule[] | cdktn.IResolvable

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
  public get(index: number): MonitorAutoscaleSettingProfileRuleOutputReference {
    return new MonitorAutoscaleSettingProfileRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAutoscaleSettingProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#name MonitorAutoscaleSetting#name}
  */
  readonly name: string;
  /**
  * capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#capacity MonitorAutoscaleSetting#capacity}
  */
  readonly capacity: MonitorAutoscaleSettingProfileCapacity;
  /**
  * fixed_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#fixed_date MonitorAutoscaleSetting#fixed_date}
  */
  readonly fixedDate?: MonitorAutoscaleSettingProfileFixedDate;
  /**
  * recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#recurrence MonitorAutoscaleSetting#recurrence}
  */
  readonly recurrence?: MonitorAutoscaleSettingProfileRecurrence;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#rule MonitorAutoscaleSetting#rule}
  */
  readonly rule?: MonitorAutoscaleSettingProfileRule[] | cdktn.IResolvable;
}

export function monitorAutoscaleSettingProfileToTerraform(struct?: MonitorAutoscaleSettingProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    capacity: monitorAutoscaleSettingProfileCapacityToTerraform(struct!.capacity),
    fixed_date: monitorAutoscaleSettingProfileFixedDateToTerraform(struct!.fixedDate),
    recurrence: monitorAutoscaleSettingProfileRecurrenceToTerraform(struct!.recurrence),
    rule: cdktn.listMapper(monitorAutoscaleSettingProfileRuleToTerraform, true)(struct!.rule),
  }
}


export function monitorAutoscaleSettingProfileToHclTerraform(struct?: MonitorAutoscaleSettingProfile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity: {
      value: monitorAutoscaleSettingProfileCapacityToHclTerraform(struct!.capacity),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingProfileCapacityList",
    },
    fixed_date: {
      value: monitorAutoscaleSettingProfileFixedDateToHclTerraform(struct!.fixedDate),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingProfileFixedDateList",
    },
    recurrence: {
      value: monitorAutoscaleSettingProfileRecurrenceToHclTerraform(struct!.recurrence),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingProfileRecurrenceList",
    },
    rule: {
      value: cdktn.listMapperHcl(monitorAutoscaleSettingProfileRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorAutoscaleSettingProfileRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorAutoscaleSettingProfileOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MonitorAutoscaleSettingProfile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._capacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity?.internalValue;
    }
    if (this._fixedDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedDate = this._fixedDate?.internalValue;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorAutoscaleSettingProfile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._capacity.internalValue = undefined;
      this._fixedDate.internalValue = undefined;
      this._recurrence.internalValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._capacity.internalValue = value.capacity;
      this._fixedDate.internalValue = value.fixedDate;
      this._recurrence.internalValue = value.recurrence;
      this._rule.internalValue = value.rule;
    }
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

  // capacity - computed: false, optional: false, required: true
  private _capacity = new MonitorAutoscaleSettingProfileCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: MonitorAutoscaleSettingProfileCapacity) {
    this._capacity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // fixed_date - computed: false, optional: true, required: false
  private _fixedDate = new MonitorAutoscaleSettingProfileFixedDateOutputReference(this, "fixed_date");
  public get fixedDate() {
    return this._fixedDate;
  }
  public putFixedDate(value: MonitorAutoscaleSettingProfileFixedDate) {
    this._fixedDate.internalValue = value;
  }
  public resetFixedDate() {
    this._fixedDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedDateInput() {
    return this._fixedDate.internalValue;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new MonitorAutoscaleSettingProfileRecurrenceOutputReference(this, "recurrence");
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: MonitorAutoscaleSettingProfileRecurrence) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new MonitorAutoscaleSettingProfileRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: MonitorAutoscaleSettingProfileRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class MonitorAutoscaleSettingProfileList extends cdktn.ComplexList {
  public internalValue? : MonitorAutoscaleSettingProfile[] | cdktn.IResolvable

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
  public get(index: number): MonitorAutoscaleSettingProfileOutputReference {
    return new MonitorAutoscaleSettingProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorAutoscaleSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#create MonitorAutoscaleSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#delete MonitorAutoscaleSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#read MonitorAutoscaleSetting#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#update MonitorAutoscaleSetting#update}
  */
  readonly update?: string;
}

export function monitorAutoscaleSettingTimeoutsToTerraform(struct?: MonitorAutoscaleSettingTimeouts | cdktn.IResolvable): any {
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


export function monitorAutoscaleSettingTimeoutsToHclTerraform(struct?: MonitorAutoscaleSettingTimeouts | cdktn.IResolvable): any {
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

export class MonitorAutoscaleSettingTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorAutoscaleSettingTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: MonitorAutoscaleSettingTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting azurerm_monitor_autoscale_setting}
*/
export class MonitorAutoscaleSetting extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_autoscale_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MonitorAutoscaleSetting resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorAutoscaleSetting to import
  * @param importFromId The id of the existing MonitorAutoscaleSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorAutoscaleSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_monitor_autoscale_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.4.0/docs/resources/monitor_autoscale_setting azurerm_monitor_autoscale_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorAutoscaleSettingConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorAutoscaleSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_autoscale_setting',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._targetResourceId = config.targetResourceId;
    this._notification.internalValue = config.notification;
    this._predictive.internalValue = config.predictive;
    this._profile.internalValue = config.profile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new MonitorAutoscaleSettingNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: MonitorAutoscaleSettingNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // predictive - computed: false, optional: true, required: false
  private _predictive = new MonitorAutoscaleSettingPredictiveOutputReference(this, "predictive");
  public get predictive() {
    return this._predictive;
  }
  public putPredictive(value: MonitorAutoscaleSettingPredictive) {
    this._predictive.internalValue = value;
  }
  public resetPredictive() {
    this._predictive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveInput() {
    return this._predictive.internalValue;
  }

  // profile - computed: false, optional: false, required: true
  private _profile = new MonitorAutoscaleSettingProfileList(this, "profile", false);
  public get profile() {
    return this._profile;
  }
  public putProfile(value: MonitorAutoscaleSettingProfile[] | cdktn.IResolvable) {
    this._profile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorAutoscaleSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorAutoscaleSettingTimeouts) {
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
      enabled: cdktn.booleanToTerraform(this._enabled),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
      tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
      target_resource_id: cdktn.stringToTerraform(this._targetResourceId),
      notification: monitorAutoscaleSettingNotificationToTerraform(this._notification.internalValue),
      predictive: monitorAutoscaleSettingPredictiveToTerraform(this._predictive.internalValue),
      profile: cdktn.listMapper(monitorAutoscaleSettingProfileToTerraform, true)(this._profile.internalValue),
      timeouts: monitorAutoscaleSettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
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
      location: {
        value: cdktn.stringToHclTerraform(this._location),
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
      resource_group_name: {
        value: cdktn.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      target_resource_id: {
        value: cdktn.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification: {
        value: monitorAutoscaleSettingNotificationToHclTerraform(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAutoscaleSettingNotificationList",
      },
      predictive: {
        value: monitorAutoscaleSettingPredictiveToHclTerraform(this._predictive.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAutoscaleSettingPredictiveList",
      },
      profile: {
        value: cdktn.listMapperHcl(monitorAutoscaleSettingProfileToHclTerraform, true)(this._profile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorAutoscaleSettingProfileList",
      },
      timeouts: {
        value: monitorAutoscaleSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorAutoscaleSettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
