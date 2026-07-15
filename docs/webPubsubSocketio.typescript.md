# `webPubsubSocketio` Submodule <a name="`webPubsubSocketio` Submodule" id="@cdktn/provider-azurerm.webPubsubSocketio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubSocketio <a name="WebPubsubSocketio" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio azurerm_web_pubsub_socketio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

new webPubsubSocketio.WebPubsubSocketio(scope: Construct, id: string, config: WebPubsubSocketioConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig">WebPubsubSocketioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig">WebPubsubSocketioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku">putSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetAadAuthEnabled">resetAadAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceConnectivityLogsEnabled">resetLiveTraceConnectivityLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceEnabled">resetLiveTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceHttpRequestLogsEnabled">resetLiveTraceHttpRequestLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceMessagingLogsEnabled">resetLiveTraceMessagingLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLocalAuthEnabled">resetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetPublicNetworkAccess">resetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetServiceMode">resetServiceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTlsClientCertEnabled">resetTlsClientCertEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity"></a>

```typescript
public putIdentity(value: WebPubsubSocketioIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---

##### `putSku` <a name="putSku" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku"></a>

```typescript
public putSku(value: WebPubsubSocketioSku): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts"></a>

```typescript
public putTimeouts(value: WebPubsubSocketioTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

---

##### `resetAadAuthEnabled` <a name="resetAadAuthEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetAadAuthEnabled"></a>

```typescript
public resetAadAuthEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetLiveTraceConnectivityLogsEnabled` <a name="resetLiveTraceConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceConnectivityLogsEnabled"></a>

```typescript
public resetLiveTraceConnectivityLogsEnabled(): void
```

##### `resetLiveTraceEnabled` <a name="resetLiveTraceEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceEnabled"></a>

```typescript
public resetLiveTraceEnabled(): void
```

##### `resetLiveTraceHttpRequestLogsEnabled` <a name="resetLiveTraceHttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceHttpRequestLogsEnabled"></a>

```typescript
public resetLiveTraceHttpRequestLogsEnabled(): void
```

##### `resetLiveTraceMessagingLogsEnabled` <a name="resetLiveTraceMessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLiveTraceMessagingLogsEnabled"></a>

```typescript
public resetLiveTraceMessagingLogsEnabled(): void
```

##### `resetLocalAuthEnabled` <a name="resetLocalAuthEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetLocalAuthEnabled"></a>

```typescript
public resetLocalAuthEnabled(): void
```

##### `resetPublicNetworkAccess` <a name="resetPublicNetworkAccess" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetPublicNetworkAccess"></a>

```typescript
public resetPublicNetworkAccess(): void
```

##### `resetServiceMode` <a name="resetServiceMode" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetServiceMode"></a>

```typescript
public resetServiceMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTlsClientCertEnabled` <a name="resetTlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.resetTlsClientCertEnabled"></a>

```typescript
public resetTlsClientCertEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WebPubsubSocketio resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

webPubsubSocketio.WebPubsubSocketio.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

webPubsubSocketio.WebPubsubSocketio.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

webPubsubSocketio.WebPubsubSocketio.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

webPubsubSocketio.WebPubsubSocketio.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WebPubsubSocketio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebPubsubSocketio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebPubsubSocketio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WebPubsubSocketio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.externalIp">externalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference">WebPubsubSocketioIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicPort">publicPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serverPort">serverPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.sku">sku</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference">WebPubsubSocketioSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference">WebPubsubSocketioTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabledInput">aadAuthEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabledInput">liveTraceConnectivityLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabledInput">liveTraceEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabledInput">liveTraceHttpRequestLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabledInput">liveTraceMessagingLogsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabledInput">localAuthEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccessInput">publicNetworkAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceModeInput">serviceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.skuInput">skuInput</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabledInput">tlsClientCertEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabled">aadAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabled">liveTraceConnectivityLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabled">liveTraceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabled">liveTraceHttpRequestLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabled">liveTraceMessagingLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceMode">serviceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.externalIp"></a>

```typescript
public readonly externalIp: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identity"></a>

```typescript
public readonly identity: WebPubsubSocketioIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference">WebPubsubSocketioIdentityOutputReference</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `publicPort`<sup>Required</sup> <a name="publicPort" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicPort"></a>

```typescript
public readonly publicPort: number;
```

- *Type:* number

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serverPort"></a>

```typescript
public readonly serverPort: number;
```

- *Type:* number

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.sku"></a>

```typescript
public readonly sku: WebPubsubSocketioSkuOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference">WebPubsubSocketioSkuOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubSocketioTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference">WebPubsubSocketioTimeoutsOutputReference</a>

---

##### `aadAuthEnabledInput`<sup>Optional</sup> <a name="aadAuthEnabledInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabledInput"></a>

```typescript
public readonly aadAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.identityInput"></a>

```typescript
public readonly identityInput: WebPubsubSocketioIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `liveTraceConnectivityLogsEnabledInput`<sup>Optional</sup> <a name="liveTraceConnectivityLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabledInput"></a>

```typescript
public readonly liveTraceConnectivityLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `liveTraceEnabledInput`<sup>Optional</sup> <a name="liveTraceEnabledInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabledInput"></a>

```typescript
public readonly liveTraceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `liveTraceHttpRequestLogsEnabledInput`<sup>Optional</sup> <a name="liveTraceHttpRequestLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabledInput"></a>

```typescript
public readonly liveTraceHttpRequestLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `liveTraceMessagingLogsEnabledInput`<sup>Optional</sup> <a name="liveTraceMessagingLogsEnabledInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabledInput"></a>

```typescript
public readonly liveTraceMessagingLogsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `localAuthEnabledInput`<sup>Optional</sup> <a name="localAuthEnabledInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabledInput"></a>

```typescript
public readonly localAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessInput`<sup>Optional</sup> <a name="publicNetworkAccessInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccessInput"></a>

```typescript
public readonly publicNetworkAccessInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceModeInput`<sup>Optional</sup> <a name="serviceModeInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceModeInput"></a>

```typescript
public readonly serviceModeInput: string;
```

- *Type:* string

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.skuInput"></a>

```typescript
public readonly skuInput: WebPubsubSocketioSku;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WebPubsubSocketioTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

---

##### `tlsClientCertEnabledInput`<sup>Optional</sup> <a name="tlsClientCertEnabledInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabledInput"></a>

```typescript
public readonly tlsClientCertEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `aadAuthEnabled`<sup>Required</sup> <a name="aadAuthEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.aadAuthEnabled"></a>

```typescript
public readonly aadAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `liveTraceConnectivityLogsEnabled`<sup>Required</sup> <a name="liveTraceConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceConnectivityLogsEnabled"></a>

```typescript
public readonly liveTraceConnectivityLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `liveTraceEnabled`<sup>Required</sup> <a name="liveTraceEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceEnabled"></a>

```typescript
public readonly liveTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `liveTraceHttpRequestLogsEnabled`<sup>Required</sup> <a name="liveTraceHttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceHttpRequestLogsEnabled"></a>

```typescript
public readonly liveTraceHttpRequestLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `liveTraceMessagingLogsEnabled`<sup>Required</sup> <a name="liveTraceMessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.liveTraceMessagingLogsEnabled"></a>

```typescript
public readonly liveTraceMessagingLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `localAuthEnabled`<sup>Required</sup> <a name="localAuthEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicNetworkAccess`<sup>Required</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.publicNetworkAccess"></a>

```typescript
public readonly publicNetworkAccess: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceMode`<sup>Required</sup> <a name="serviceMode" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.serviceMode"></a>

```typescript
public readonly serviceMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tlsClientCertEnabled`<sup>Required</sup> <a name="tlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tlsClientCertEnabled"></a>

```typescript
public readonly tlsClientCertEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketio.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubSocketioConfig <a name="WebPubsubSocketioConfig" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.Initializer"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

const webPubsubSocketioConfig: webPubsubSocketio.WebPubsubSocketioConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.sku">sku</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | sku block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.aadAuthEnabled">aadAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceConnectivityLogsEnabled">liveTraceConnectivityLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceEnabled">liveTraceEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceHttpRequestLogsEnabled">liveTraceHttpRequestLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceMessagingLogsEnabled">liveTraceMessagingLogsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.localAuthEnabled">localAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.serviceMode">serviceMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tlsClientCertEnabled">tlsClientCertEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#location WebPubsubSocketio#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#resource_group_name WebPubsubSocketio#resource_group_name}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.sku"></a>

```typescript
public readonly sku: WebPubsubSocketioSku;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#sku WebPubsubSocketio#sku}

---

##### `aadAuthEnabled`<sup>Optional</sup> <a name="aadAuthEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.aadAuthEnabled"></a>

```typescript
public readonly aadAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#aad_auth_enabled WebPubsubSocketio#aad_auth_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#id WebPubsubSocketio#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.identity"></a>

```typescript
public readonly identity: WebPubsubSocketioIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#identity WebPubsubSocketio#identity}

---

##### `liveTraceConnectivityLogsEnabled`<sup>Optional</sup> <a name="liveTraceConnectivityLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceConnectivityLogsEnabled"></a>

```typescript
public readonly liveTraceConnectivityLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#live_trace_connectivity_logs_enabled WebPubsubSocketio#live_trace_connectivity_logs_enabled}.

---

##### `liveTraceEnabled`<sup>Optional</sup> <a name="liveTraceEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceEnabled"></a>

```typescript
public readonly liveTraceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#live_trace_enabled WebPubsubSocketio#live_trace_enabled}.

---

##### `liveTraceHttpRequestLogsEnabled`<sup>Optional</sup> <a name="liveTraceHttpRequestLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceHttpRequestLogsEnabled"></a>

```typescript
public readonly liveTraceHttpRequestLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#live_trace_http_request_logs_enabled WebPubsubSocketio#live_trace_http_request_logs_enabled}.

---

##### `liveTraceMessagingLogsEnabled`<sup>Optional</sup> <a name="liveTraceMessagingLogsEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.liveTraceMessagingLogsEnabled"></a>

```typescript
public readonly liveTraceMessagingLogsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#live_trace_messaging_logs_enabled WebPubsubSocketio#live_trace_messaging_logs_enabled}.

---

##### `localAuthEnabled`<sup>Optional</sup> <a name="localAuthEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.localAuthEnabled"></a>

```typescript
public readonly localAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#local_auth_enabled WebPubsubSocketio#local_auth_enabled}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.publicNetworkAccess"></a>

```typescript
public readonly publicNetworkAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#public_network_access WebPubsubSocketio#public_network_access}.

---

##### `serviceMode`<sup>Optional</sup> <a name="serviceMode" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.serviceMode"></a>

```typescript
public readonly serviceMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#service_mode WebPubsubSocketio#service_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#tags WebPubsubSocketio#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubSocketioTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#timeouts WebPubsubSocketio#timeouts}

---

##### `tlsClientCertEnabled`<sup>Optional</sup> <a name="tlsClientCertEnabled" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioConfig.property.tlsClientCertEnabled"></a>

```typescript
public readonly tlsClientCertEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#tls_client_cert_enabled WebPubsubSocketio#tls_client_cert_enabled}.

---

### WebPubsubSocketioIdentity <a name="WebPubsubSocketioIdentity" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.Initializer"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

const webPubsubSocketioIdentity: webPubsubSocketio.WebPubsubSocketioIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#type WebPubsubSocketio#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#identity_ids WebPubsubSocketio#identity_ids}.

---

### WebPubsubSocketioSku <a name="WebPubsubSocketioSku" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.Initializer"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

const webPubsubSocketioSku: webPubsubSocketio.WebPubsubSocketioSku = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#name WebPubsubSocketio#name}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#capacity WebPubsubSocketio#capacity}.

---

### WebPubsubSocketioTimeouts <a name="WebPubsubSocketioTimeouts" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.Initializer"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

const webPubsubSocketioTimeouts: webPubsubSocketio.WebPubsubSocketioTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#create WebPubsubSocketio#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#delete WebPubsubSocketio#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#read WebPubsubSocketio#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/web_pubsub_socketio#update WebPubsubSocketio#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubSocketioIdentityOutputReference <a name="WebPubsubSocketioIdentityOutputReference" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

new webPubsubSocketio.WebPubsubSocketioIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WebPubsubSocketioIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioIdentity">WebPubsubSocketioIdentity</a>

---


### WebPubsubSocketioSkuOutputReference <a name="WebPubsubSocketioSkuOutputReference" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

new webPubsubSocketio.WebPubsubSocketioSkuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCapacity` <a name="resetCapacity" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.resetCapacity"></a>

```typescript
public resetCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSkuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WebPubsubSocketioSku;
```

- *Type:* <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioSku">WebPubsubSocketioSku</a>

---


### WebPubsubSocketioTimeoutsOutputReference <a name="WebPubsubSocketioTimeoutsOutputReference" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer"></a>

```typescript
import { webPubsubSocketio } from '@cdktn/provider-azurerm'

new webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WebPubsubSocketioTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.webPubsubSocketio.WebPubsubSocketioTimeouts">WebPubsubSocketioTimeouts</a>

---



