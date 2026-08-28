# `machineLearningWorkspace` Submodule <a name="`machineLearningWorkspace` Submodule" id="@cdktn/provider-azurerm.machineLearningWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningWorkspace <a name="MachineLearningWorkspace" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace azurerm_machine_learning_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

new machineLearningWorkspace.MachineLearningWorkspace(scope: Construct, id: string, config: MachineLearningWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig">MachineLearningWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig">MachineLearningWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore">putFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork">putManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute">putServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetContainerRegistryId">resetContainerRegistryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFeatureStore">resetFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetHighBusinessImpact">resetHighBusinessImpact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetImageBuildComputeName">resetImageBuildComputeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetManagedNetwork">resetManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPrimaryUserAssignedIdentity">resetPrimaryUserAssignedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServerlessCompute">resetServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServiceSideEncryptionEnabled">resetServiceSideEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetSkuName">resetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetStorageAccountAccessType">resetStorageAccountAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetV1LegacyModeEnabled">resetV1LegacyModeEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption"></a>

```typescript
public putEncryption(value: MachineLearningWorkspaceEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---

##### `putFeatureStore` <a name="putFeatureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore"></a>

```typescript
public putFeatureStore(value: MachineLearningWorkspaceFeatureStore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putFeatureStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity"></a>

```typescript
public putIdentity(value: MachineLearningWorkspaceIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---

##### `putManagedNetwork` <a name="putManagedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork"></a>

```typescript
public putManagedNetwork(value: MachineLearningWorkspaceManagedNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putManagedNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---

##### `putServerlessCompute` <a name="putServerlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute"></a>

```typescript
public putServerlessCompute(value: MachineLearningWorkspaceServerlessCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putServerlessCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts"></a>

```typescript
public putTimeouts(value: MachineLearningWorkspaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a>

---

##### `resetContainerRegistryId` <a name="resetContainerRegistryId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetContainerRegistryId"></a>

```typescript
public resetContainerRegistryId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetFeatureStore` <a name="resetFeatureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFeatureStore"></a>

```typescript
public resetFeatureStore(): void
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetHighBusinessImpact` <a name="resetHighBusinessImpact" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetHighBusinessImpact"></a>

```typescript
public resetHighBusinessImpact(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageBuildComputeName` <a name="resetImageBuildComputeName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetImageBuildComputeName"></a>

```typescript
public resetImageBuildComputeName(): void
```

##### `resetKind` <a name="resetKind" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetManagedNetwork` <a name="resetManagedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetManagedNetwork"></a>

```typescript
public resetManagedNetwork(): void
```

##### `resetPrimaryUserAssignedIdentity` <a name="resetPrimaryUserAssignedIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPrimaryUserAssignedIdentity"></a>

```typescript
public resetPrimaryUserAssignedIdentity(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetServerlessCompute` <a name="resetServerlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServerlessCompute"></a>

```typescript
public resetServerlessCompute(): void
```

##### `resetServiceSideEncryptionEnabled` <a name="resetServiceSideEncryptionEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetServiceSideEncryptionEnabled"></a>

```typescript
public resetServiceSideEncryptionEnabled(): void
```

##### `resetSkuName` <a name="resetSkuName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetSkuName"></a>

```typescript
public resetSkuName(): void
```

##### `resetStorageAccountAccessType` <a name="resetStorageAccountAccessType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetStorageAccountAccessType"></a>

```typescript
public resetStorageAccountAccessType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetV1LegacyModeEnabled` <a name="resetV1LegacyModeEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.resetV1LegacyModeEnabled"></a>

```typescript
public resetV1LegacyModeEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MachineLearningWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

machineLearningWorkspace.MachineLearningWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MachineLearningWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MachineLearningWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MachineLearningWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MachineLearningWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference">MachineLearningWorkspaceEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStore">featureStore</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference">MachineLearningWorkspaceFeatureStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference">MachineLearningWorkspaceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetwork">managedNetwork</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference">MachineLearningWorkspaceManagedNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessCompute">serverlessCompute</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference">MachineLearningWorkspaceServerlessComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference">MachineLearningWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsIdInput">applicationInsightsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryIdInput">containerRegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStoreInput">featureStoreInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpactInput">highBusinessImpactInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeNameInput">imageBuildComputeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetworkInput">managedNetworkInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentityInput">primaryUserAssignedIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessComputeInput">serverlessComputeInput</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabledInput">serviceSideEncryptionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountAccessTypeInput">storageAccountAccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabledInput">v1LegacyModeEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryId">containerRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpact">highBusinessImpact</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeName">imageBuildComputeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentity">primaryUserAssignedIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabled">serviceSideEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountAccessType">storageAccountAccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabled">v1LegacyModeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryption"></a>

```typescript
public readonly encryption: MachineLearningWorkspaceEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference">MachineLearningWorkspaceEncryptionOutputReference</a>

---

##### `featureStore`<sup>Required</sup> <a name="featureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStore"></a>

```typescript
public readonly featureStore: MachineLearningWorkspaceFeatureStoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference">MachineLearningWorkspaceFeatureStoreOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identity"></a>

```typescript
public readonly identity: MachineLearningWorkspaceIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference">MachineLearningWorkspaceIdentityOutputReference</a>

---

##### `managedNetwork`<sup>Required</sup> <a name="managedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetwork"></a>

```typescript
public readonly managedNetwork: MachineLearningWorkspaceManagedNetworkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference">MachineLearningWorkspaceManagedNetworkOutputReference</a>

---

##### `serverlessCompute`<sup>Required</sup> <a name="serverlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessCompute"></a>

```typescript
public readonly serverlessCompute: MachineLearningWorkspaceServerlessComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference">MachineLearningWorkspaceServerlessComputeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningWorkspaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference">MachineLearningWorkspaceTimeoutsOutputReference</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `applicationInsightsIdInput`<sup>Optional</sup> <a name="applicationInsightsIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsIdInput"></a>

```typescript
public readonly applicationInsightsIdInput: string;
```

- *Type:* string

---

##### `containerRegistryIdInput`<sup>Optional</sup> <a name="containerRegistryIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryIdInput"></a>

```typescript
public readonly containerRegistryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: MachineLearningWorkspaceEncryption;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---

##### `featureStoreInput`<sup>Optional</sup> <a name="featureStoreInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.featureStoreInput"></a>

```typescript
public readonly featureStoreInput: MachineLearningWorkspaceFeatureStore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `highBusinessImpactInput`<sup>Optional</sup> <a name="highBusinessImpactInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpactInput"></a>

```typescript
public readonly highBusinessImpactInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.identityInput"></a>

```typescript
public readonly identityInput: MachineLearningWorkspaceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageBuildComputeNameInput`<sup>Optional</sup> <a name="imageBuildComputeNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeNameInput"></a>

```typescript
public readonly imageBuildComputeNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managedNetworkInput`<sup>Optional</sup> <a name="managedNetworkInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.managedNetworkInput"></a>

```typescript
public readonly managedNetworkInput: MachineLearningWorkspaceManagedNetwork;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryUserAssignedIdentityInput`<sup>Optional</sup> <a name="primaryUserAssignedIdentityInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentityInput"></a>

```typescript
public readonly primaryUserAssignedIdentityInput: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serverlessComputeInput`<sup>Optional</sup> <a name="serverlessComputeInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serverlessComputeInput"></a>

```typescript
public readonly serverlessComputeInput: MachineLearningWorkspaceServerlessCompute;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---

##### `serviceSideEncryptionEnabledInput`<sup>Optional</sup> <a name="serviceSideEncryptionEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabledInput"></a>

```typescript
public readonly serviceSideEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `storageAccountAccessTypeInput`<sup>Optional</sup> <a name="storageAccountAccessTypeInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountAccessTypeInput"></a>

```typescript
public readonly storageAccountAccessTypeInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MachineLearningWorkspaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a>

---

##### `v1LegacyModeEnabledInput`<sup>Optional</sup> <a name="v1LegacyModeEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabledInput"></a>

```typescript
public readonly v1LegacyModeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

---

##### `containerRegistryId`<sup>Required</sup> <a name="containerRegistryId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.containerRegistryId"></a>

```typescript
public readonly containerRegistryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `highBusinessImpact`<sup>Required</sup> <a name="highBusinessImpact" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.highBusinessImpact"></a>

```typescript
public readonly highBusinessImpact: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageBuildComputeName`<sup>Required</sup> <a name="imageBuildComputeName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.imageBuildComputeName"></a>

```typescript
public readonly imageBuildComputeName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryUserAssignedIdentity`<sup>Required</sup> <a name="primaryUserAssignedIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.primaryUserAssignedIdentity"></a>

```typescript
public readonly primaryUserAssignedIdentity: string;
```

- *Type:* string

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `serviceSideEncryptionEnabled`<sup>Required</sup> <a name="serviceSideEncryptionEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.serviceSideEncryptionEnabled"></a>

```typescript
public readonly serviceSideEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `storageAccountAccessType`<sup>Required</sup> <a name="storageAccountAccessType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountAccessType"></a>

```typescript
public readonly storageAccountAccessType: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `v1LegacyModeEnabled`<sup>Required</sup> <a name="v1LegacyModeEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.v1LegacyModeEnabled"></a>

```typescript
public readonly v1LegacyModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningWorkspaceConfig <a name="MachineLearningWorkspaceConfig" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

const machineLearningWorkspaceConfig: machineLearningWorkspace.MachineLearningWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.applicationInsightsId">applicationInsightsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#application_insights_id MachineLearningWorkspace#application_insights_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#location MachineLearningWorkspace#location}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#name MachineLearningWorkspace#name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#resource_group_name MachineLearningWorkspace#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#storage_account_id MachineLearningWorkspace#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.containerRegistryId">containerRegistryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#container_registry_id MachineLearningWorkspace#container_registry_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#description MachineLearningWorkspace#description}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | encryption block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.featureStore">featureStore</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | feature_store block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.friendlyName">friendlyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#friendly_name MachineLearningWorkspace#friendly_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.highBusinessImpact">highBusinessImpact</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#high_business_impact MachineLearningWorkspace#high_business_impact}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#id MachineLearningWorkspace#id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.imageBuildComputeName">imageBuildComputeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#image_build_compute_name MachineLearningWorkspace#image_build_compute_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#kind MachineLearningWorkspace#kind}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.managedNetwork">managedNetwork</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | managed_network block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.primaryUserAssignedIdentity">primaryUserAssignedIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#primary_user_assigned_identity MachineLearningWorkspace#primary_user_assigned_identity}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#public_network_access_enabled MachineLearningWorkspace#public_network_access_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serverlessCompute">serverlessCompute</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | serverless_compute block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serviceSideEncryptionEnabled">serviceSideEncryptionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#service_side_encryption_enabled MachineLearningWorkspace#service_side_encryption_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#sku_name MachineLearningWorkspace#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountAccessType">storageAccountAccessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#storage_account_access_type MachineLearningWorkspace#storage_account_access_type}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#tags MachineLearningWorkspace#tags}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.v1LegacyModeEnabled">v1LegacyModeEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#v1_legacy_mode_enabled MachineLearningWorkspace#v1_legacy_mode_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationInsightsId`<sup>Required</sup> <a name="applicationInsightsId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.applicationInsightsId"></a>

```typescript
public readonly applicationInsightsId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#application_insights_id MachineLearningWorkspace#application_insights_id}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.identity"></a>

```typescript
public readonly identity: MachineLearningWorkspaceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#identity MachineLearningWorkspace#identity}

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#location MachineLearningWorkspace#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#name MachineLearningWorkspace#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#resource_group_name MachineLearningWorkspace#resource_group_name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#storage_account_id MachineLearningWorkspace#storage_account_id}.

---

##### `containerRegistryId`<sup>Optional</sup> <a name="containerRegistryId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.containerRegistryId"></a>

```typescript
public readonly containerRegistryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#container_registry_id MachineLearningWorkspace#container_registry_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#description MachineLearningWorkspace#description}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.encryption"></a>

```typescript
public readonly encryption: MachineLearningWorkspaceEncryption;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#encryption MachineLearningWorkspace#encryption}

---

##### `featureStore`<sup>Optional</sup> <a name="featureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.featureStore"></a>

```typescript
public readonly featureStore: MachineLearningWorkspaceFeatureStore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

feature_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#feature_store MachineLearningWorkspace#feature_store}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#friendly_name MachineLearningWorkspace#friendly_name}.

---

##### `highBusinessImpact`<sup>Optional</sup> <a name="highBusinessImpact" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.highBusinessImpact"></a>

```typescript
public readonly highBusinessImpact: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#high_business_impact MachineLearningWorkspace#high_business_impact}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#id MachineLearningWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageBuildComputeName`<sup>Optional</sup> <a name="imageBuildComputeName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.imageBuildComputeName"></a>

```typescript
public readonly imageBuildComputeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#image_build_compute_name MachineLearningWorkspace#image_build_compute_name}.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#kind MachineLearningWorkspace#kind}.

---

##### `managedNetwork`<sup>Optional</sup> <a name="managedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.managedNetwork"></a>

```typescript
public readonly managedNetwork: MachineLearningWorkspaceManagedNetwork;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

managed_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#managed_network MachineLearningWorkspace#managed_network}

---

##### `primaryUserAssignedIdentity`<sup>Optional</sup> <a name="primaryUserAssignedIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.primaryUserAssignedIdentity"></a>

```typescript
public readonly primaryUserAssignedIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#primary_user_assigned_identity MachineLearningWorkspace#primary_user_assigned_identity}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#public_network_access_enabled MachineLearningWorkspace#public_network_access_enabled}.

---

##### `serverlessCompute`<sup>Optional</sup> <a name="serverlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serverlessCompute"></a>

```typescript
public readonly serverlessCompute: MachineLearningWorkspaceServerlessCompute;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

serverless_compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#serverless_compute MachineLearningWorkspace#serverless_compute}

---

##### `serviceSideEncryptionEnabled`<sup>Optional</sup> <a name="serviceSideEncryptionEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.serviceSideEncryptionEnabled"></a>

```typescript
public readonly serviceSideEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#service_side_encryption_enabled MachineLearningWorkspace#service_side_encryption_enabled}.

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#sku_name MachineLearningWorkspace#sku_name}.

---

##### `storageAccountAccessType`<sup>Optional</sup> <a name="storageAccountAccessType" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.storageAccountAccessType"></a>

```typescript
public readonly storageAccountAccessType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#storage_account_access_type MachineLearningWorkspace#storage_account_access_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#tags MachineLearningWorkspace#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MachineLearningWorkspaceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#timeouts MachineLearningWorkspace#timeouts}

---

##### `v1LegacyModeEnabled`<sup>Optional</sup> <a name="v1LegacyModeEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceConfig.property.v1LegacyModeEnabled"></a>

```typescript
public readonly v1LegacyModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#v1_legacy_mode_enabled MachineLearningWorkspace#v1_legacy_mode_enabled}.

---

### MachineLearningWorkspaceEncryption <a name="MachineLearningWorkspaceEncryption" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

const machineLearningWorkspaceEncryption: machineLearningWorkspace.MachineLearningWorkspaceEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#key_id MachineLearningWorkspace#key_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#user_assigned_identity_id MachineLearningWorkspace#user_assigned_identity_id}. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#key_id MachineLearningWorkspace#key_id}.

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#key_vault_id MachineLearningWorkspace#key_vault_id}.

---

##### `userAssignedIdentityId`<sup>Optional</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#user_assigned_identity_id MachineLearningWorkspace#user_assigned_identity_id}.

---

### MachineLearningWorkspaceFeatureStore <a name="MachineLearningWorkspaceFeatureStore" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

const machineLearningWorkspaceFeatureStore: machineLearningWorkspace.MachineLearningWorkspaceFeatureStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.computerSparkRuntimeVersion">computerSparkRuntimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#computer_spark_runtime_version MachineLearningWorkspace#computer_spark_runtime_version}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.offlineConnectionName">offlineConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#offline_connection_name MachineLearningWorkspace#offline_connection_name}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.onlineConnectionName">onlineConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#online_connection_name MachineLearningWorkspace#online_connection_name}. |

---

##### `computerSparkRuntimeVersion`<sup>Optional</sup> <a name="computerSparkRuntimeVersion" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.computerSparkRuntimeVersion"></a>

```typescript
public readonly computerSparkRuntimeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#computer_spark_runtime_version MachineLearningWorkspace#computer_spark_runtime_version}.

---

##### `offlineConnectionName`<sup>Optional</sup> <a name="offlineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.offlineConnectionName"></a>

```typescript
public readonly offlineConnectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#offline_connection_name MachineLearningWorkspace#offline_connection_name}.

---

##### `onlineConnectionName`<sup>Optional</sup> <a name="onlineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore.property.onlineConnectionName"></a>

```typescript
public readonly onlineConnectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#online_connection_name MachineLearningWorkspace#online_connection_name}.

---

### MachineLearningWorkspaceIdentity <a name="MachineLearningWorkspaceIdentity" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

const machineLearningWorkspaceIdentity: machineLearningWorkspace.MachineLearningWorkspaceIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#type MachineLearningWorkspace#type}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#identity_ids MachineLearningWorkspace#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#type MachineLearningWorkspace#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#identity_ids MachineLearningWorkspace#identity_ids}.

---

### MachineLearningWorkspaceManagedNetwork <a name="MachineLearningWorkspaceManagedNetwork" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

const machineLearningWorkspaceManagedNetwork: machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.isolationMode">isolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#isolation_mode MachineLearningWorkspace#isolation_mode}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.provisionOnCreationEnabled">provisionOnCreationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#provision_on_creation_enabled MachineLearningWorkspace#provision_on_creation_enabled}. |

---

##### `isolationMode`<sup>Optional</sup> <a name="isolationMode" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.isolationMode"></a>

```typescript
public readonly isolationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#isolation_mode MachineLearningWorkspace#isolation_mode}.

---

##### `provisionOnCreationEnabled`<sup>Optional</sup> <a name="provisionOnCreationEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork.property.provisionOnCreationEnabled"></a>

```typescript
public readonly provisionOnCreationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#provision_on_creation_enabled MachineLearningWorkspace#provision_on_creation_enabled}.

---

### MachineLearningWorkspaceServerlessCompute <a name="MachineLearningWorkspaceServerlessCompute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

const machineLearningWorkspaceServerlessCompute: machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.publicIpEnabled">publicIpEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#public_ip_enabled MachineLearningWorkspace#public_ip_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#subnet_id MachineLearningWorkspace#subnet_id}. |

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.publicIpEnabled"></a>

```typescript
public readonly publicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#public_ip_enabled MachineLearningWorkspace#public_ip_enabled}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#subnet_id MachineLearningWorkspace#subnet_id}.

---

### MachineLearningWorkspaceTimeouts <a name="MachineLearningWorkspaceTimeouts" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

const machineLearningWorkspaceTimeouts: machineLearningWorkspace.MachineLearningWorkspaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#create MachineLearningWorkspace#create}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#delete MachineLearningWorkspace#delete}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#read MachineLearningWorkspace#read}. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#update MachineLearningWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#create MachineLearningWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#delete MachineLearningWorkspace#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#read MachineLearningWorkspace#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/machine_learning_workspace#update MachineLearningWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningWorkspaceEncryptionOutputReference <a name="MachineLearningWorkspaceEncryptionOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

new machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resetUserAssignedIdentityId">resetUserAssignedIdentityId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserAssignedIdentityId` <a name="resetUserAssignedIdentityId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.resetUserAssignedIdentityId"></a>

```typescript
public resetUserAssignedIdentityId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityIdInput">userAssignedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `userAssignedIdentityIdInput`<sup>Optional</sup> <a name="userAssignedIdentityIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityIdInput"></a>

```typescript
public readonly userAssignedIdentityIdInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningWorkspaceEncryption;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceEncryption">MachineLearningWorkspaceEncryption</a>

---


### MachineLearningWorkspaceFeatureStoreOutputReference <a name="MachineLearningWorkspaceFeatureStoreOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

new machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetComputerSparkRuntimeVersion">resetComputerSparkRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOfflineConnectionName">resetOfflineConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOnlineConnectionName">resetOnlineConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputerSparkRuntimeVersion` <a name="resetComputerSparkRuntimeVersion" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetComputerSparkRuntimeVersion"></a>

```typescript
public resetComputerSparkRuntimeVersion(): void
```

##### `resetOfflineConnectionName` <a name="resetOfflineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOfflineConnectionName"></a>

```typescript
public resetOfflineConnectionName(): void
```

##### `resetOnlineConnectionName` <a name="resetOnlineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.resetOnlineConnectionName"></a>

```typescript
public resetOnlineConnectionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersionInput">computerSparkRuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionNameInput">offlineConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionNameInput">onlineConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersion">computerSparkRuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionName">offlineConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionName">onlineConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computerSparkRuntimeVersionInput`<sup>Optional</sup> <a name="computerSparkRuntimeVersionInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersionInput"></a>

```typescript
public readonly computerSparkRuntimeVersionInput: string;
```

- *Type:* string

---

##### `offlineConnectionNameInput`<sup>Optional</sup> <a name="offlineConnectionNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionNameInput"></a>

```typescript
public readonly offlineConnectionNameInput: string;
```

- *Type:* string

---

##### `onlineConnectionNameInput`<sup>Optional</sup> <a name="onlineConnectionNameInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionNameInput"></a>

```typescript
public readonly onlineConnectionNameInput: string;
```

- *Type:* string

---

##### `computerSparkRuntimeVersion`<sup>Required</sup> <a name="computerSparkRuntimeVersion" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.computerSparkRuntimeVersion"></a>

```typescript
public readonly computerSparkRuntimeVersion: string;
```

- *Type:* string

---

##### `offlineConnectionName`<sup>Required</sup> <a name="offlineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.offlineConnectionName"></a>

```typescript
public readonly offlineConnectionName: string;
```

- *Type:* string

---

##### `onlineConnectionName`<sup>Required</sup> <a name="onlineConnectionName" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.onlineConnectionName"></a>

```typescript
public readonly onlineConnectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningWorkspaceFeatureStore;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceFeatureStore">MachineLearningWorkspaceFeatureStore</a>

---


### MachineLearningWorkspaceIdentityOutputReference <a name="MachineLearningWorkspaceIdentityOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

new machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningWorkspaceIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceIdentity">MachineLearningWorkspaceIdentity</a>

---


### MachineLearningWorkspaceManagedNetworkOutputReference <a name="MachineLearningWorkspaceManagedNetworkOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

new machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetIsolationMode">resetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetProvisionOnCreationEnabled">resetProvisionOnCreationEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsolationMode` <a name="resetIsolationMode" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetIsolationMode"></a>

```typescript
public resetIsolationMode(): void
```

##### `resetProvisionOnCreationEnabled` <a name="resetProvisionOnCreationEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.resetProvisionOnCreationEnabled"></a>

```typescript
public resetProvisionOnCreationEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationModeInput">isolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabledInput">provisionOnCreationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationMode">isolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabled">provisionOnCreationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isolationModeInput`<sup>Optional</sup> <a name="isolationModeInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationModeInput"></a>

```typescript
public readonly isolationModeInput: string;
```

- *Type:* string

---

##### `provisionOnCreationEnabledInput`<sup>Optional</sup> <a name="provisionOnCreationEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabledInput"></a>

```typescript
public readonly provisionOnCreationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isolationMode`<sup>Required</sup> <a name="isolationMode" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.isolationMode"></a>

```typescript
public readonly isolationMode: string;
```

- *Type:* string

---

##### `provisionOnCreationEnabled`<sup>Required</sup> <a name="provisionOnCreationEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.provisionOnCreationEnabled"></a>

```typescript
public readonly provisionOnCreationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningWorkspaceManagedNetwork;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceManagedNetwork">MachineLearningWorkspaceManagedNetwork</a>

---


### MachineLearningWorkspaceServerlessComputeOutputReference <a name="MachineLearningWorkspaceServerlessComputeOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

new machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetPublicIpEnabled">resetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPublicIpEnabled` <a name="resetPublicIpEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetPublicIpEnabled"></a>

```typescript
public resetPublicIpEnabled(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabledInput">publicIpEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabled">publicIpEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicIpEnabledInput`<sup>Optional</sup> <a name="publicIpEnabledInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabledInput"></a>

```typescript
public readonly publicIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `publicIpEnabled`<sup>Required</sup> <a name="publicIpEnabled" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.publicIpEnabled"></a>

```typescript
public readonly publicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MachineLearningWorkspaceServerlessCompute;
```

- *Type:* <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceServerlessCompute">MachineLearningWorkspaceServerlessCompute</a>

---


### MachineLearningWorkspaceTimeoutsOutputReference <a name="MachineLearningWorkspaceTimeoutsOutputReference" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { machineLearningWorkspace } from '@cdktn/provider-azurerm'

new machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MachineLearningWorkspaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.machineLearningWorkspace.MachineLearningWorkspaceTimeouts">MachineLearningWorkspaceTimeouts</a>

---



