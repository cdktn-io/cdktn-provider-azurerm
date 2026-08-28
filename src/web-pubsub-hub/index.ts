/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WebPubsubHubConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}
  */
  readonly anonymousConnectionsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}
  */
  readonly webPubsubId: string;
  /**
  * event_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#event_handler WebPubsubHub#event_handler}
  */
  readonly eventHandler?: WebPubsubHubEventHandler[] | cdktn.IResolvable;
  /**
  * event_listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#event_listener WebPubsubHub#event_listener}
  */
  readonly eventListener?: WebPubsubHubEventListener[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#timeouts WebPubsubHub#timeouts}
  */
  readonly timeouts?: WebPubsubHubTimeouts;
}
export interface WebPubsubHubEventHandlerAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}
  */
  readonly managedIdentityId: string;
}

export function webPubsubHubEventHandlerAuthToTerraform(struct?: WebPubsubHubEventHandlerAuthOutputReference | WebPubsubHubEventHandlerAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    managed_identity_id: cdktn.stringToTerraform(struct!.managedIdentityId),
  }
}


export function webPubsubHubEventHandlerAuthToHclTerraform(struct?: WebPubsubHubEventHandlerAuthOutputReference | WebPubsubHubEventHandlerAuth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    managed_identity_id: {
      value: cdktn.stringToHclTerraform(struct!.managedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebPubsubHubEventHandlerAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebPubsubHubEventHandlerAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentityId = this._managedIdentityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebPubsubHubEventHandlerAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedIdentityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedIdentityId = value.managedIdentityId;
    }
  }

  // managed_identity_id - computed: false, optional: false, required: true
  private _managedIdentityId?: string; 
  public get managedIdentityId() {
    return this.getStringAttribute('managed_identity_id');
  }
  public set managedIdentityId(value: string) {
    this._managedIdentityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityIdInput() {
    return this._managedIdentityId;
  }
}
export interface WebPubsubHubEventHandler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}
  */
  readonly systemEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}
  */
  readonly urlTemplate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}
  */
  readonly userEventPattern?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#auth WebPubsubHub#auth}
  */
  readonly auth?: WebPubsubHubEventHandlerAuth;
}

export function webPubsubHubEventHandlerToTerraform(struct?: WebPubsubHubEventHandler | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    system_events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.systemEvents),
    url_template: cdktn.stringToTerraform(struct!.urlTemplate),
    user_event_pattern: cdktn.stringToTerraform(struct!.userEventPattern),
    auth: webPubsubHubEventHandlerAuthToTerraform(struct!.auth),
  }
}


export function webPubsubHubEventHandlerToHclTerraform(struct?: WebPubsubHubEventHandler | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    system_events: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.systemEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    url_template: {
      value: cdktn.stringToHclTerraform(struct!.urlTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_event_pattern: {
      value: cdktn.stringToHclTerraform(struct!.userEventPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: webPubsubHubEventHandlerAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "WebPubsubHubEventHandlerAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebPubsubHubEventHandlerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WebPubsubHubEventHandler | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemEvents = this._systemEvents;
    }
    if (this._urlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlTemplate = this._urlTemplate;
    }
    if (this._userEventPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEventPattern = this._userEventPattern;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebPubsubHubEventHandler | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._systemEvents = undefined;
      this._urlTemplate = undefined;
      this._userEventPattern = undefined;
      this._auth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._systemEvents = value.systemEvents;
      this._urlTemplate = value.urlTemplate;
      this._userEventPattern = value.userEventPattern;
      this._auth.internalValue = value.auth;
    }
  }

  // system_events - computed: false, optional: true, required: false
  private _systemEvents?: string[]; 
  public get systemEvents() {
    return cdktn.Fn.tolist(this.getListAttribute('system_events'));
  }
  public set systemEvents(value: string[]) {
    this._systemEvents = value;
  }
  public resetSystemEvents() {
    this._systemEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemEventsInput() {
    return this._systemEvents;
  }

  // url_template - computed: false, optional: false, required: true
  private _urlTemplate?: string; 
  public get urlTemplate() {
    return this.getStringAttribute('url_template');
  }
  public set urlTemplate(value: string) {
    this._urlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTemplateInput() {
    return this._urlTemplate;
  }

  // user_event_pattern - computed: false, optional: true, required: false
  private _userEventPattern?: string; 
  public get userEventPattern() {
    return this.getStringAttribute('user_event_pattern');
  }
  public set userEventPattern(value: string) {
    this._userEventPattern = value;
  }
  public resetUserEventPattern() {
    this._userEventPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEventPatternInput() {
    return this._userEventPattern;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new WebPubsubHubEventHandlerAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: WebPubsubHubEventHandlerAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}

export class WebPubsubHubEventHandlerList extends cdktn.ComplexList {
  public internalValue? : WebPubsubHubEventHandler[] | cdktn.IResolvable

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
  public get(index: number): WebPubsubHubEventHandlerOutputReference {
    return new WebPubsubHubEventHandlerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebPubsubHubEventListener {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}
  */
  readonly eventhubName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}
  */
  readonly eventhubNamespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}
  */
  readonly systemEventNameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}
  */
  readonly userEventNameFilter?: string[];
}

export function webPubsubHubEventListenerToTerraform(struct?: WebPubsubHubEventListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    eventhub_name: cdktn.stringToTerraform(struct!.eventhubName),
    eventhub_namespace_name: cdktn.stringToTerraform(struct!.eventhubNamespaceName),
    system_event_name_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.systemEventNameFilter),
    user_event_name_filter: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.userEventNameFilter),
  }
}


export function webPubsubHubEventListenerToHclTerraform(struct?: WebPubsubHubEventListener | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    eventhub_name: {
      value: cdktn.stringToHclTerraform(struct!.eventhubName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eventhub_namespace_name: {
      value: cdktn.stringToHclTerraform(struct!.eventhubNamespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_event_name_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.systemEventNameFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_event_name_filter: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.userEventNameFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebPubsubHubEventListenerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): WebPubsubHubEventListener | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventhubName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventhubName = this._eventhubName;
    }
    if (this._eventhubNamespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventhubNamespaceName = this._eventhubNamespaceName;
    }
    if (this._systemEventNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemEventNameFilter = this._systemEventNameFilter;
    }
    if (this._userEventNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEventNameFilter = this._userEventNameFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebPubsubHubEventListener | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventhubName = undefined;
      this._eventhubNamespaceName = undefined;
      this._systemEventNameFilter = undefined;
      this._userEventNameFilter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventhubName = value.eventhubName;
      this._eventhubNamespaceName = value.eventhubNamespaceName;
      this._systemEventNameFilter = value.systemEventNameFilter;
      this._userEventNameFilter = value.userEventNameFilter;
    }
  }

  // eventhub_name - computed: false, optional: false, required: true
  private _eventhubName?: string; 
  public get eventhubName() {
    return this.getStringAttribute('eventhub_name');
  }
  public set eventhubName(value: string) {
    this._eventhubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNameInput() {
    return this._eventhubName;
  }

  // eventhub_namespace_name - computed: false, optional: false, required: true
  private _eventhubNamespaceName?: string; 
  public get eventhubNamespaceName() {
    return this.getStringAttribute('eventhub_namespace_name');
  }
  public set eventhubNamespaceName(value: string) {
    this._eventhubNamespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNamespaceNameInput() {
    return this._eventhubNamespaceName;
  }

  // system_event_name_filter - computed: false, optional: true, required: false
  private _systemEventNameFilter?: string[]; 
  public get systemEventNameFilter() {
    return this.getListAttribute('system_event_name_filter');
  }
  public set systemEventNameFilter(value: string[]) {
    this._systemEventNameFilter = value;
  }
  public resetSystemEventNameFilter() {
    this._systemEventNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemEventNameFilterInput() {
    return this._systemEventNameFilter;
  }

  // user_event_name_filter - computed: false, optional: true, required: false
  private _userEventNameFilter?: string[]; 
  public get userEventNameFilter() {
    return this.getListAttribute('user_event_name_filter');
  }
  public set userEventNameFilter(value: string[]) {
    this._userEventNameFilter = value;
  }
  public resetUserEventNameFilter() {
    this._userEventNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEventNameFilterInput() {
    return this._userEventNameFilter;
  }
}

export class WebPubsubHubEventListenerList extends cdktn.ComplexList {
  public internalValue? : WebPubsubHubEventListener[] | cdktn.IResolvable

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
  public get(index: number): WebPubsubHubEventListenerOutputReference {
    return new WebPubsubHubEventListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebPubsubHubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}
  */
  readonly update?: string;
}

export function webPubsubHubTimeoutsToTerraform(struct?: WebPubsubHubTimeouts | cdktn.IResolvable): any {
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


export function webPubsubHubTimeoutsToHclTerraform(struct?: WebPubsubHubTimeouts | cdktn.IResolvable): any {
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

export class WebPubsubHubTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WebPubsubHubTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: WebPubsubHubTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub azurerm_web_pubsub_hub}
*/
export class WebPubsubHub extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_web_pubsub_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WebPubsubHub resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebPubsubHub to import
  * @param importFromId The id of the existing WebPubsubHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebPubsubHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_web_pubsub_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/web_pubsub_hub azurerm_web_pubsub_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebPubsubHubConfig
  */
  public constructor(scope: Construct, id: string, config: WebPubsubHubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_web_pubsub_hub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '5.3.0',
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
    this._anonymousConnectionsEnabled = config.anonymousConnectionsEnabled;
    this._id = config.id;
    this._name = config.name;
    this._webPubsubId = config.webPubsubId;
    this._eventHandler.internalValue = config.eventHandler;
    this._eventListener.internalValue = config.eventListener;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymous_connections_enabled - computed: false, optional: true, required: false
  private _anonymousConnectionsEnabled?: boolean | cdktn.IResolvable; 
  public get anonymousConnectionsEnabled() {
    return this.getBooleanAttribute('anonymous_connections_enabled');
  }
  public set anonymousConnectionsEnabled(value: boolean | cdktn.IResolvable) {
    this._anonymousConnectionsEnabled = value;
  }
  public resetAnonymousConnectionsEnabled() {
    this._anonymousConnectionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousConnectionsEnabledInput() {
    return this._anonymousConnectionsEnabled;
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

  // web_pubsub_id - computed: false, optional: false, required: true
  private _webPubsubId?: string; 
  public get webPubsubId() {
    return this.getStringAttribute('web_pubsub_id');
  }
  public set webPubsubId(value: string) {
    this._webPubsubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webPubsubIdInput() {
    return this._webPubsubId;
  }

  // event_handler - computed: false, optional: true, required: false
  private _eventHandler = new WebPubsubHubEventHandlerList(this, "event_handler", false);
  public get eventHandler() {
    return this._eventHandler;
  }
  public putEventHandler(value: WebPubsubHubEventHandler[] | cdktn.IResolvable) {
    this._eventHandler.internalValue = value;
  }
  public resetEventHandler() {
    this._eventHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHandlerInput() {
    return this._eventHandler.internalValue;
  }

  // event_listener - computed: false, optional: true, required: false
  private _eventListener = new WebPubsubHubEventListenerList(this, "event_listener", false);
  public get eventListener() {
    return this._eventListener;
  }
  public putEventListener(value: WebPubsubHubEventListener[] | cdktn.IResolvable) {
    this._eventListener.internalValue = value;
  }
  public resetEventListener() {
    this._eventListener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventListenerInput() {
    return this._eventListener.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WebPubsubHubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WebPubsubHubTimeouts) {
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
      anonymous_connections_enabled: cdktn.booleanToTerraform(this._anonymousConnectionsEnabled),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      web_pubsub_id: cdktn.stringToTerraform(this._webPubsubId),
      event_handler: cdktn.listMapper(webPubsubHubEventHandlerToTerraform, true)(this._eventHandler.internalValue),
      event_listener: cdktn.listMapper(webPubsubHubEventListenerToTerraform, true)(this._eventListener.internalValue),
      timeouts: webPubsubHubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anonymous_connections_enabled: {
        value: cdktn.booleanToHclTerraform(this._anonymousConnectionsEnabled),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_pubsub_id: {
        value: cdktn.stringToHclTerraform(this._webPubsubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_handler: {
        value: cdktn.listMapperHcl(webPubsubHubEventHandlerToHclTerraform, true)(this._eventHandler.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebPubsubHubEventHandlerList",
      },
      event_listener: {
        value: cdktn.listMapperHcl(webPubsubHubEventListenerToHclTerraform, true)(this._eventListener.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebPubsubHubEventListenerList",
      },
      timeouts: {
        value: webPubsubHubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WebPubsubHubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
