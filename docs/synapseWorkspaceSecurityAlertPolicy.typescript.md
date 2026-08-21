# `synapseWorkspaceSecurityAlertPolicy` Submodule <a name="`synapseWorkspaceSecurityAlertPolicy` Submodule" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseWorkspaceSecurityAlertPolicy <a name="SynapseWorkspaceSecurityAlertPolicy" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy azurerm_synapse_workspace_security_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer"></a>

```typescript
import { synapseWorkspaceSecurityAlertPolicy } from '@cdktn/provider-azurerm'

new synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy(scope: Construct, id: string, config: SynapseWorkspaceSecurityAlertPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig">SynapseWorkspaceSecurityAlertPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig">SynapseWorkspaceSecurityAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAccountAdminsEnabled">resetEmailAccountAdminsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: SynapseWorkspaceSecurityAlertPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>

---

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetDisabledAlerts"></a>

```typescript
public resetDisabledAlerts(): void
```

##### `resetEmailAccountAdminsEnabled` <a name="resetEmailAccountAdminsEnabled" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAccountAdminsEnabled"></a>

```typescript
public resetEmailAccountAdminsEnabled(): void
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetEmailAddresses"></a>

```typescript
public resetEmailAddresses(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageAccountAccessKey"></a>

```typescript
public resetStorageAccountAccessKey(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SynapseWorkspaceSecurityAlertPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct"></a>

```typescript
import { synapseWorkspaceSecurityAlertPolicy } from '@cdktn/provider-azurerm'

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement"></a>

```typescript
import { synapseWorkspaceSecurityAlertPolicy } from '@cdktn/provider-azurerm'

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource"></a>

```typescript
import { synapseWorkspaceSecurityAlertPolicy } from '@cdktn/provider-azurerm'

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport"></a>

```typescript
import { synapseWorkspaceSecurityAlertPolicy } from '@cdktn/provider-azurerm'

synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SynapseWorkspaceSecurityAlertPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseWorkspaceSecurityAlertPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseWorkspaceSecurityAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SynapseWorkspaceSecurityAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference">SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput">emailAccountAdminsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddressesInput">emailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyStateInput">policyStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceIdInput">synapseWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabled">emailAccountAdminsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyState">policyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference">SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference</a>

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlertsInput"></a>

```typescript
public readonly disabledAlertsInput: string[];
```

- *Type:* string[]

---

##### `emailAccountAdminsEnabledInput`<sup>Optional</sup> <a name="emailAccountAdminsEnabledInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabledInput"></a>

```typescript
public readonly emailAccountAdminsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddressesInput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyStateInput`<sup>Optional</sup> <a name="policyStateInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyStateInput"></a>

```typescript
public readonly policyStateInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKeyInput"></a>

```typescript
public readonly storageAccountAccessKeyInput: string;
```

- *Type:* string

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `synapseWorkspaceIdInput`<sup>Optional</sup> <a name="synapseWorkspaceIdInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceIdInput"></a>

```typescript
public readonly synapseWorkspaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SynapseWorkspaceSecurityAlertPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

---

##### `emailAccountAdminsEnabled`<sup>Required</sup> <a name="emailAccountAdminsEnabled" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAccountAdminsEnabled"></a>

```typescript
public readonly emailAccountAdminsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyState`<sup>Required</sup> <a name="policyState" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.policyState"></a>

```typescript
public readonly policyState: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseWorkspaceSecurityAlertPolicyConfig <a name="SynapseWorkspaceSecurityAlertPolicyConfig" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.Initializer"></a>

```typescript
import { synapseWorkspaceSecurityAlertPolicy } from '@cdktn/provider-azurerm'

const synapseWorkspaceSecurityAlertPolicyConfig: synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.policyState">policyState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#policy_state SynapseWorkspaceSecurityAlertPolicy#policy_state}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.synapseWorkspaceId">synapseWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#synapse_workspace_id SynapseWorkspaceSecurityAlertPolicy#synapse_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.disabledAlerts">disabledAlerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#disabled_alerts SynapseWorkspaceSecurityAlertPolicy#disabled_alerts}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled">emailAccountAdminsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#email_account_admins_enabled SynapseWorkspaceSecurityAlertPolicy#email_account_admins_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAddresses">emailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#email_addresses SynapseWorkspaceSecurityAlertPolicy#email_addresses}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#id SynapseWorkspaceSecurityAlertPolicy#id}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#retention_days SynapseWorkspaceSecurityAlertPolicy#retention_days}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#storage_account_access_key SynapseWorkspaceSecurityAlertPolicy#storage_account_access_key}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#storage_endpoint SynapseWorkspaceSecurityAlertPolicy#storage_endpoint}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `policyState`<sup>Required</sup> <a name="policyState" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.policyState"></a>

```typescript
public readonly policyState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#policy_state SynapseWorkspaceSecurityAlertPolicy#policy_state}.

---

##### `synapseWorkspaceId`<sup>Required</sup> <a name="synapseWorkspaceId" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.synapseWorkspaceId"></a>

```typescript
public readonly synapseWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#synapse_workspace_id SynapseWorkspaceSecurityAlertPolicy#synapse_workspace_id}.

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.disabledAlerts"></a>

```typescript
public readonly disabledAlerts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#disabled_alerts SynapseWorkspaceSecurityAlertPolicy#disabled_alerts}.

---

##### `emailAccountAdminsEnabled`<sup>Optional</sup> <a name="emailAccountAdminsEnabled" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAccountAdminsEnabled"></a>

```typescript
public readonly emailAccountAdminsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#email_account_admins_enabled SynapseWorkspaceSecurityAlertPolicy#email_account_admins_enabled}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.emailAddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#email_addresses SynapseWorkspaceSecurityAlertPolicy#email_addresses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#id SynapseWorkspaceSecurityAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#retention_days SynapseWorkspaceSecurityAlertPolicy#retention_days}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageAccountAccessKey"></a>

```typescript
public readonly storageAccountAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#storage_account_access_key SynapseWorkspaceSecurityAlertPolicy#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#storage_endpoint SynapseWorkspaceSecurityAlertPolicy#storage_endpoint}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SynapseWorkspaceSecurityAlertPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#timeouts SynapseWorkspaceSecurityAlertPolicy#timeouts}

---

### SynapseWorkspaceSecurityAlertPolicyTimeouts <a name="SynapseWorkspaceSecurityAlertPolicyTimeouts" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.Initializer"></a>

```typescript
import { synapseWorkspaceSecurityAlertPolicy } from '@cdktn/provider-azurerm'

const synapseWorkspaceSecurityAlertPolicyTimeouts: synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#create SynapseWorkspaceSecurityAlertPolicy#create}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#delete SynapseWorkspaceSecurityAlertPolicy#delete}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#read SynapseWorkspaceSecurityAlertPolicy#read}. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#update SynapseWorkspaceSecurityAlertPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#create SynapseWorkspaceSecurityAlertPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#delete SynapseWorkspaceSecurityAlertPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#read SynapseWorkspaceSecurityAlertPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/synapse_workspace_security_alert_policy#update SynapseWorkspaceSecurityAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference <a name="SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { synapseWorkspaceSecurityAlertPolicy } from '@cdktn/provider-azurerm'

new synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SynapseWorkspaceSecurityAlertPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.synapseWorkspaceSecurityAlertPolicy.SynapseWorkspaceSecurityAlertPolicyTimeouts">SynapseWorkspaceSecurityAlertPolicyTimeouts</a>

---



