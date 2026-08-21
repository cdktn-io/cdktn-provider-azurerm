# `managedDevopsPool` Submodule <a name="`managedDevopsPool` Submodule" id="@cdktn/provider-azurerm.managedDevopsPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDevopsPool <a name="ManagedDevopsPool" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool azurerm_managed_devops_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPool(scope: Construct, id: string, config: ManagedDevopsPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig">ManagedDevopsPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig">ManagedDevopsPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization">putAzureDevopsOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent">putStatefulAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent">putStatelessAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric">putVirtualMachineScaleSetFabric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatefulAgent">resetStatefulAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatelessAgent">resetStatelessAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetWorkFolder">resetWorkFolder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureDevopsOrganization` <a name="putAzureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization"></a>

```typescript
public putAzureDevopsOrganization(value: ManagedDevopsPoolAzureDevopsOrganization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putAzureDevopsOrganization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity"></a>

```typescript
public putIdentity(value: ManagedDevopsPoolIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

---

##### `putStatefulAgent` <a name="putStatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent"></a>

```typescript
public putStatefulAgent(value: ManagedDevopsPoolStatefulAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatefulAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

---

##### `putStatelessAgent` <a name="putStatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent"></a>

```typescript
public putStatelessAgent(value: ManagedDevopsPoolStatelessAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putStatelessAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagedDevopsPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

---

##### `putVirtualMachineScaleSetFabric` <a name="putVirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric"></a>

```typescript
public putVirtualMachineScaleSetFabric(value: ManagedDevopsPoolVirtualMachineScaleSetFabric): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.putVirtualMachineScaleSetFabric.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetStatefulAgent` <a name="resetStatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatefulAgent"></a>

```typescript
public resetStatefulAgent(): void
```

##### `resetStatelessAgent` <a name="resetStatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetStatelessAgent"></a>

```typescript
public resetStatelessAgent(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkFolder` <a name="resetWorkFolder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.resetWorkFolder"></a>

```typescript
public resetWorkFolder(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ManagedDevopsPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

managedDevopsPool.ManagedDevopsPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

managedDevopsPool.ManagedDevopsPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

managedDevopsPool.ManagedDevopsPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

managedDevopsPool.ManagedDevopsPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ManagedDevopsPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDevopsPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDevopsPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ManagedDevopsPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganization">azureDevopsOrganization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference">ManagedDevopsPoolAzureDevopsOrganizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference">ManagedDevopsPoolIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgent">statefulAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference">ManagedDevopsPoolStatefulAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgent">statelessAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference">ManagedDevopsPoolStatelessAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference">ManagedDevopsPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabric">virtualMachineScaleSetFabric</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganizationInput">azureDevopsOrganizationInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectIdInput">devCenterProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrencyInput">maximumConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgentInput">statefulAgentInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgentInput">statelessAgentInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabricInput">virtualMachineScaleSetFabricInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolderInput">workFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectId">devCenterProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrency">maximumConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolder">workFolder</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `azureDevopsOrganization`<sup>Required</sup> <a name="azureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganization"></a>

```typescript
public readonly azureDevopsOrganization: ManagedDevopsPoolAzureDevopsOrganizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference">ManagedDevopsPoolAzureDevopsOrganizationOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identity"></a>

```typescript
public readonly identity: ManagedDevopsPoolIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference">ManagedDevopsPoolIdentityOutputReference</a>

---

##### `statefulAgent`<sup>Required</sup> <a name="statefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgent"></a>

```typescript
public readonly statefulAgent: ManagedDevopsPoolStatefulAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference">ManagedDevopsPoolStatefulAgentOutputReference</a>

---

##### `statelessAgent`<sup>Required</sup> <a name="statelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgent"></a>

```typescript
public readonly statelessAgent: ManagedDevopsPoolStatelessAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference">ManagedDevopsPoolStatelessAgentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedDevopsPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference">ManagedDevopsPoolTimeoutsOutputReference</a>

---

##### `virtualMachineScaleSetFabric`<sup>Required</sup> <a name="virtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabric"></a>

```typescript
public readonly virtualMachineScaleSetFabric: ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference</a>

---

##### `azureDevopsOrganizationInput`<sup>Optional</sup> <a name="azureDevopsOrganizationInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.azureDevopsOrganizationInput"></a>

```typescript
public readonly azureDevopsOrganizationInput: ManagedDevopsPoolAzureDevopsOrganization;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

---

##### `devCenterProjectIdInput`<sup>Optional</sup> <a name="devCenterProjectIdInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectIdInput"></a>

```typescript
public readonly devCenterProjectIdInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.identityInput"></a>

```typescript
public readonly identityInput: ManagedDevopsPoolIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maximumConcurrencyInput`<sup>Optional</sup> <a name="maximumConcurrencyInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrencyInput"></a>

```typescript
public readonly maximumConcurrencyInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `statefulAgentInput`<sup>Optional</sup> <a name="statefulAgentInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statefulAgentInput"></a>

```typescript
public readonly statefulAgentInput: ManagedDevopsPoolStatefulAgent;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

---

##### `statelessAgentInput`<sup>Optional</sup> <a name="statelessAgentInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.statelessAgentInput"></a>

```typescript
public readonly statelessAgentInput: ManagedDevopsPoolStatelessAgent;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagedDevopsPoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

---

##### `virtualMachineScaleSetFabricInput`<sup>Optional</sup> <a name="virtualMachineScaleSetFabricInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.virtualMachineScaleSetFabricInput"></a>

```typescript
public readonly virtualMachineScaleSetFabricInput: ManagedDevopsPoolVirtualMachineScaleSetFabric;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---

##### `workFolderInput`<sup>Optional</sup> <a name="workFolderInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolderInput"></a>

```typescript
public readonly workFolderInput: string;
```

- *Type:* string

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.devCenterProjectId"></a>

```typescript
public readonly devCenterProjectId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maximumConcurrency`<sup>Required</sup> <a name="maximumConcurrency" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.maximumConcurrency"></a>

```typescript
public readonly maximumConcurrency: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workFolder`<sup>Required</sup> <a name="workFolder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.workFolder"></a>

```typescript
public readonly workFolder: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDevopsPoolAzureDevopsOrganization <a name="ManagedDevopsPoolAzureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolAzureDevopsOrganization: managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.organization">organization</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]</code> | organization block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.permission">permission</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | permission block. |

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.organization"></a>

```typescript
public readonly organization: IResolvable | ManagedDevopsPoolAzureDevopsOrganizationOrganization[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]

organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#organization ManagedDevopsPool#organization}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization.property.permission"></a>

```typescript
public readonly permission: ManagedDevopsPoolAzureDevopsOrganizationPermission;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#permission ManagedDevopsPool#permission}

---

### ManagedDevopsPoolAzureDevopsOrganizationOrganization <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolAzureDevopsOrganizationOrganization: managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.parallelism">parallelism</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#parallelism ManagedDevopsPool#parallelism}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#url ManagedDevopsPool#url}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.projects">projects</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#projects ManagedDevopsPool#projects}. |

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#parallelism ManagedDevopsPool#parallelism}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#url ManagedDevopsPool#url}.

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#projects ManagedDevopsPool#projects}.

---

### ManagedDevopsPoolAzureDevopsOrganizationPermission <a name="ManagedDevopsPoolAzureDevopsOrganizationPermission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolAzureDevopsOrganizationPermission: managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#kind ManagedDevopsPool#kind}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.administratorAccount">administratorAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | administrator_account block. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#kind ManagedDevopsPool#kind}.

---

##### `administratorAccount`<sup>Optional</sup> <a name="administratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission.property.administratorAccount"></a>

```typescript
public readonly administratorAccount: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

administrator_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#administrator_account ManagedDevopsPool#administrator_account}

---

### ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount: managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#groups ManagedDevopsPool#groups}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#users ManagedDevopsPool#users}. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#groups ManagedDevopsPool#groups}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#users ManagedDevopsPool#users}.

---

### ManagedDevopsPoolConfig <a name="ManagedDevopsPoolConfig" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolConfig: managedDevopsPool.ManagedDevopsPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.azureDevopsOrganization">azureDevopsOrganization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | azure_devops_organization block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.devCenterProjectId">devCenterProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.maximumConcurrency">maximumConcurrency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.virtualMachineScaleSetFabric">virtualMachineScaleSetFabric</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | virtual_machine_scale_set_fabric block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statefulAgent">statefulAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | stateful_agent block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statelessAgent">statelessAgent</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | stateless_agent block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.workFolder">workFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `azureDevopsOrganization`<sup>Required</sup> <a name="azureDevopsOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.azureDevopsOrganization"></a>

```typescript
public readonly azureDevopsOrganization: ManagedDevopsPoolAzureDevopsOrganization;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

azure_devops_organization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#azure_devops_organization ManagedDevopsPool#azure_devops_organization}

---

##### `devCenterProjectId`<sup>Required</sup> <a name="devCenterProjectId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.devCenterProjectId"></a>

```typescript
public readonly devCenterProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#dev_center_project_id ManagedDevopsPool#dev_center_project_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#location ManagedDevopsPool#location}.

---

##### `maximumConcurrency`<sup>Required</sup> <a name="maximumConcurrency" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.maximumConcurrency"></a>

```typescript
public readonly maximumConcurrency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#maximum_concurrency ManagedDevopsPool#maximum_concurrency}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#name ManagedDevopsPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#resource_group_name ManagedDevopsPool#resource_group_name}.

---

##### `virtualMachineScaleSetFabric`<sup>Required</sup> <a name="virtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.virtualMachineScaleSetFabric"></a>

```typescript
public readonly virtualMachineScaleSetFabric: ManagedDevopsPoolVirtualMachineScaleSetFabric;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

virtual_machine_scale_set_fabric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#virtual_machine_scale_set_fabric ManagedDevopsPool#virtual_machine_scale_set_fabric}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.identity"></a>

```typescript
public readonly identity: ManagedDevopsPoolIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#identity ManagedDevopsPool#identity}

---

##### `statefulAgent`<sup>Optional</sup> <a name="statefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statefulAgent"></a>

```typescript
public readonly statefulAgent: ManagedDevopsPoolStatefulAgent;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

stateful_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#stateful_agent ManagedDevopsPool#stateful_agent}

---

##### `statelessAgent`<sup>Optional</sup> <a name="statelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.statelessAgent"></a>

```typescript
public readonly statelessAgent: ManagedDevopsPoolStatelessAgent;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

stateless_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#stateless_agent ManagedDevopsPool#stateless_agent}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#tags ManagedDevopsPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagedDevopsPoolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#timeouts ManagedDevopsPool#timeouts}

---

##### `workFolder`<sup>Optional</sup> <a name="workFolder" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolConfig.property.workFolder"></a>

```typescript
public readonly workFolder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#work_folder ManagedDevopsPool#work_folder}.

---

### ManagedDevopsPoolIdentity <a name="ManagedDevopsPoolIdentity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolIdentity: managedDevopsPool.ManagedDevopsPoolIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#identity_ids ManagedDevopsPool#identity_ids}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#type ManagedDevopsPool#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#identity_ids ManagedDevopsPool#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#type ManagedDevopsPool#type}.

---

### ManagedDevopsPoolStatefulAgent <a name="ManagedDevopsPoolStatefulAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgent: managedDevopsPool.ManagedDevopsPoolStatefulAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.automaticResourcePrediction">automaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | automatic_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.gracePeriodTimeSpan">gracePeriodTimeSpan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#grace_period_time_span ManagedDevopsPool#grace_period_time_span}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.manualResourcePrediction">manualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | manual_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.maximumAgentLifetime">maximumAgentLifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#maximum_agent_lifetime ManagedDevopsPool#maximum_agent_lifetime}. |

---

##### `automaticResourcePrediction`<sup>Optional</sup> <a name="automaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.automaticResourcePrediction"></a>

```typescript
public readonly automaticResourcePrediction: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

automatic_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}

---

##### `gracePeriodTimeSpan`<sup>Optional</sup> <a name="gracePeriodTimeSpan" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.gracePeriodTimeSpan"></a>

```typescript
public readonly gracePeriodTimeSpan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#grace_period_time_span ManagedDevopsPool#grace_period_time_span}.

---

##### `manualResourcePrediction`<sup>Optional</sup> <a name="manualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.manualResourcePrediction"></a>

```typescript
public readonly manualResourcePrediction: ManagedDevopsPoolStatefulAgentManualResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

manual_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}

---

##### `maximumAgentLifetime`<sup>Optional</sup> <a name="maximumAgentLifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent.property.maximumAgentLifetime"></a>

```typescript
public readonly maximumAgentLifetime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#maximum_agent_lifetime ManagedDevopsPool#maximum_agent_lifetime}.

---

### ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction <a name="ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentAutomaticResourcePrediction: managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.property.predictionPreference">predictionPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}. |

---

##### `predictionPreference`<sup>Optional</sup> <a name="predictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction.property.predictionPreference"></a>

```typescript
public readonly predictionPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePrediction <a name="ManagedDevopsPoolStatefulAgentManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentManualResourcePrediction: managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.allWeekSchedule">allWeekSchedule</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.fridaySchedule">fridaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]</code> | friday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.mondaySchedule">mondaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]</code> | monday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.saturdaySchedule">saturdaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | saturday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.sundaySchedule">sundaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]</code> | sunday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.thursdaySchedule">thursdaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]</code> | thursday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.timeZoneName">timeZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.tuesdaySchedule">tuesdaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | tuesday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.wednesdaySchedule">wednesdaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | wednesday_schedule block. |

---

##### `allWeekSchedule`<sup>Optional</sup> <a name="allWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.allWeekSchedule"></a>

```typescript
public readonly allWeekSchedule: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}.

---

##### `fridaySchedule`<sup>Optional</sup> <a name="fridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.fridaySchedule"></a>

```typescript
public readonly fridaySchedule: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]

friday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}

---

##### `mondaySchedule`<sup>Optional</sup> <a name="mondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.mondaySchedule"></a>

```typescript
public readonly mondaySchedule: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]

monday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}

---

##### `saturdaySchedule`<sup>Optional</sup> <a name="saturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.saturdaySchedule"></a>

```typescript
public readonly saturdaySchedule: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]

saturday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}

---

##### `sundaySchedule`<sup>Optional</sup> <a name="sundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.sundaySchedule"></a>

```typescript
public readonly sundaySchedule: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]

sunday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}

---

##### `thursdaySchedule`<sup>Optional</sup> <a name="thursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.thursdaySchedule"></a>

```typescript
public readonly thursdaySchedule: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]

thursday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}

---

##### `timeZoneName`<sup>Optional</sup> <a name="timeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.timeZoneName"></a>

```typescript
public readonly timeZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}.

---

##### `tuesdaySchedule`<sup>Optional</sup> <a name="tuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.tuesdaySchedule"></a>

```typescript
public readonly tuesdaySchedule: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]

tuesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}

---

##### `wednesdaySchedule`<sup>Optional</sup> <a name="wednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction.property.wednesdaySchedule"></a>

```typescript
public readonly wednesdaySchedule: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]

wednesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule: managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule: managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule: managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule: managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule: managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule: managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule: managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgent <a name="ManagedDevopsPoolStatelessAgent" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgent: managedDevopsPool.ManagedDevopsPoolStatelessAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.automaticResourcePrediction">automaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | automatic_resource_prediction block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.manualResourcePrediction">manualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | manual_resource_prediction block. |

---

##### `automaticResourcePrediction`<sup>Optional</sup> <a name="automaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.automaticResourcePrediction"></a>

```typescript
public readonly automaticResourcePrediction: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

automatic_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#automatic_resource_prediction ManagedDevopsPool#automatic_resource_prediction}

---

##### `manualResourcePrediction`<sup>Optional</sup> <a name="manualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent.property.manualResourcePrediction"></a>

```typescript
public readonly manualResourcePrediction: ManagedDevopsPoolStatelessAgentManualResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

manual_resource_prediction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#manual_resource_prediction ManagedDevopsPool#manual_resource_prediction}

---

### ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction <a name="ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentAutomaticResourcePrediction: managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.property.predictionPreference">predictionPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}. |

---

##### `predictionPreference`<sup>Optional</sup> <a name="predictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction.property.predictionPreference"></a>

```typescript
public readonly predictionPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#prediction_preference ManagedDevopsPool#prediction_preference}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePrediction <a name="ManagedDevopsPoolStatelessAgentManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentManualResourcePrediction: managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.allWeekSchedule">allWeekSchedule</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.fridaySchedule">fridaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]</code> | friday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.mondaySchedule">mondaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]</code> | monday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.saturdaySchedule">saturdaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | saturday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.sundaySchedule">sundaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]</code> | sunday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.thursdaySchedule">thursdaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]</code> | thursday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.timeZoneName">timeZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.tuesdaySchedule">tuesdaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | tuesday_schedule block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.wednesdaySchedule">wednesdaySchedule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | wednesday_schedule block. |

---

##### `allWeekSchedule`<sup>Optional</sup> <a name="allWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.allWeekSchedule"></a>

```typescript
public readonly allWeekSchedule: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#all_week_schedule ManagedDevopsPool#all_week_schedule}.

---

##### `fridaySchedule`<sup>Optional</sup> <a name="fridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.fridaySchedule"></a>

```typescript
public readonly fridaySchedule: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]

friday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#friday_schedule ManagedDevopsPool#friday_schedule}

---

##### `mondaySchedule`<sup>Optional</sup> <a name="mondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.mondaySchedule"></a>

```typescript
public readonly mondaySchedule: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]

monday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#monday_schedule ManagedDevopsPool#monday_schedule}

---

##### `saturdaySchedule`<sup>Optional</sup> <a name="saturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.saturdaySchedule"></a>

```typescript
public readonly saturdaySchedule: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]

saturday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#saturday_schedule ManagedDevopsPool#saturday_schedule}

---

##### `sundaySchedule`<sup>Optional</sup> <a name="sundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.sundaySchedule"></a>

```typescript
public readonly sundaySchedule: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]

sunday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#sunday_schedule ManagedDevopsPool#sunday_schedule}

---

##### `thursdaySchedule`<sup>Optional</sup> <a name="thursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.thursdaySchedule"></a>

```typescript
public readonly thursdaySchedule: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]

thursday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#thursday_schedule ManagedDevopsPool#thursday_schedule}

---

##### `timeZoneName`<sup>Optional</sup> <a name="timeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.timeZoneName"></a>

```typescript
public readonly timeZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time_zone_name ManagedDevopsPool#time_zone_name}.

---

##### `tuesdaySchedule`<sup>Optional</sup> <a name="tuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.tuesdaySchedule"></a>

```typescript
public readonly tuesdaySchedule: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]

tuesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#tuesday_schedule ManagedDevopsPool#tuesday_schedule}

---

##### `wednesdaySchedule`<sup>Optional</sup> <a name="wednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction.property.wednesdaySchedule"></a>

```typescript
public readonly wednesdaySchedule: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]

wednesday_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#wednesday_schedule ManagedDevopsPool#wednesday_schedule}

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule: managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule: managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule: managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule: managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule: managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule: managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule: managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.time">time</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#count ManagedDevopsPool#count}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#time ManagedDevopsPool#time}.

---

### ManagedDevopsPoolTimeouts <a name="ManagedDevopsPoolTimeouts" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolTimeouts: managedDevopsPool.ManagedDevopsPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#create ManagedDevopsPool#create}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#delete ManagedDevopsPool#delete}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#read ManagedDevopsPool#read}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#update ManagedDevopsPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#create ManagedDevopsPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#delete ManagedDevopsPool#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#read ManagedDevopsPool#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#update ManagedDevopsPool#update}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabric <a name="ManagedDevopsPoolVirtualMachineScaleSetFabric" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolVirtualMachineScaleSetFabric: managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.image">image</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]</code> | image block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.skuName">skuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#sku_name ManagedDevopsPool#sku_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.osDiskStorageAccountType">osDiskStorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#os_disk_storage_account_type ManagedDevopsPool#os_disk_storage_account_type}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.security">security</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | security block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#subnet_id ManagedDevopsPool#subnet_id}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.image"></a>

```typescript
public readonly image: IResolvable | ManagedDevopsPoolVirtualMachineScaleSetFabricImage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#image ManagedDevopsPool#image}

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#sku_name ManagedDevopsPool#sku_name}.

---

##### `osDiskStorageAccountType`<sup>Optional</sup> <a name="osDiskStorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.osDiskStorageAccountType"></a>

```typescript
public readonly osDiskStorageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#os_disk_storage_account_type ManagedDevopsPool#os_disk_storage_account_type}.

---

##### `security`<sup>Optional</sup> <a name="security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.security"></a>

```typescript
public readonly security: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#security ManagedDevopsPool#security}

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.storage"></a>

```typescript
public readonly storage: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#storage ManagedDevopsPool#storage}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#subnet_id ManagedDevopsPool#subnet_id}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricImage <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolVirtualMachineScaleSetFabricImage: managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.aliases">aliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#aliases ManagedDevopsPool#aliases}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.buffer">buffer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#buffer ManagedDevopsPool#buffer}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.wellKnownImageName">wellKnownImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#well_known_image_name ManagedDevopsPool#well_known_image_name}. |

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#aliases ManagedDevopsPool#aliases}.

---

##### `buffer`<sup>Optional</sup> <a name="buffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.buffer"></a>

```typescript
public readonly buffer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#buffer ManagedDevopsPool#buffer}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#id ManagedDevopsPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `wellKnownImageName`<sup>Optional</sup> <a name="wellKnownImageName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage.property.wellKnownImageName"></a>

```typescript
public readonly wellKnownImageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#well_known_image_name ManagedDevopsPool#well_known_image_name}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolVirtualMachineScaleSetFabricSecurity: managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.interactiveLogonEnabled">interactiveLogonEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#interactive_logon_enabled ManagedDevopsPool#interactive_logon_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.keyVaultManagement">keyVaultManagement</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | key_vault_management block. |

---

##### `interactiveLogonEnabled`<sup>Optional</sup> <a name="interactiveLogonEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.interactiveLogonEnabled"></a>

```typescript
public readonly interactiveLogonEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#interactive_logon_enabled ManagedDevopsPool#interactive_logon_enabled}.

---

##### `keyVaultManagement`<sup>Optional</sup> <a name="keyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity.property.keyVaultManagement"></a>

```typescript
public readonly keyVaultManagement: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

key_vault_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#key_vault_management ManagedDevopsPool#key_vault_management}

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement: managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyVaultCertificateIds">keyVaultCertificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#key_vault_certificate_ids ManagedDevopsPool#key_vault_certificate_ids}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreLocation">certificateStoreLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#certificate_store_location ManagedDevopsPool#certificate_store_location}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreName">certificateStoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#certificate_store_name ManagedDevopsPool#certificate_store_name}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyExportEnabled">keyExportEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#key_export_enabled ManagedDevopsPool#key_export_enabled}. |

---

##### `keyVaultCertificateIds`<sup>Required</sup> <a name="keyVaultCertificateIds" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyVaultCertificateIds"></a>

```typescript
public readonly keyVaultCertificateIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#key_vault_certificate_ids ManagedDevopsPool#key_vault_certificate_ids}.

---

##### `certificateStoreLocation`<sup>Optional</sup> <a name="certificateStoreLocation" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreLocation"></a>

```typescript
public readonly certificateStoreLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#certificate_store_location ManagedDevopsPool#certificate_store_location}.

---

##### `certificateStoreName`<sup>Optional</sup> <a name="certificateStoreName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.certificateStoreName"></a>

```typescript
public readonly certificateStoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#certificate_store_name ManagedDevopsPool#certificate_store_name}.

---

##### `keyExportEnabled`<sup>Optional</sup> <a name="keyExportEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement.property.keyExportEnabled"></a>

```typescript
public readonly keyExportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#key_export_enabled ManagedDevopsPool#key_export_enabled}.

---

### ManagedDevopsPoolVirtualMachineScaleSetFabricStorage <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricStorage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

const managedDevopsPoolVirtualMachineScaleSetFabricStorage: managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.diskSizeInGb">diskSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#disk_size_in_gb ManagedDevopsPool#disk_size_in_gb}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.caching">caching</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#caching ManagedDevopsPool#caching}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.driveLetter">driveLetter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#drive_letter ManagedDevopsPool#drive_letter}. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#storage_account_type ManagedDevopsPool#storage_account_type}. |

---

##### `diskSizeInGb`<sup>Required</sup> <a name="diskSizeInGb" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.diskSizeInGb"></a>

```typescript
public readonly diskSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#disk_size_in_gb ManagedDevopsPool#disk_size_in_gb}.

---

##### `caching`<sup>Optional</sup> <a name="caching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#caching ManagedDevopsPool#caching}.

---

##### `driveLetter`<sup>Optional</sup> <a name="driveLetter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.driveLetter"></a>

```typescript
public readonly driveLetter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#drive_letter ManagedDevopsPool#drive_letter}.

---

##### `storageAccountType`<sup>Optional</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/managed_devops_pool#storage_account_type ManagedDevopsPool#storage_account_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDevopsPoolAzureDevopsOrganizationOrganizationList <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganizationList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolAzureDevopsOrganizationOrganization[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]

---


### ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resetProjects">resetProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjects` <a name="resetProjects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.resetProjects"></a>

```typescript
public resetProjects(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projectsInput">projectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism">parallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects">projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelismInput"></a>

```typescript
public readonly parallelismInput: number;
```

- *Type:* number

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projectsInput"></a>

```typescript
public readonly projectsInput: string[];
```

- *Type:* string[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.parallelism"></a>

```typescript
public readonly parallelism: number;
```

- *Type:* number

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.projects"></a>

```typescript
public readonly projects: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolAzureDevopsOrganizationOrganization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization">putOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission">putPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOrganization` <a name="putOrganization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization"></a>

```typescript
public putOrganization(value: IResolvable | ManagedDevopsPoolAzureDevopsOrganizationOrganization[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putOrganization.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]

---

##### `putPermission` <a name="putPermission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission"></a>

```typescript
public putPermission(value: ManagedDevopsPoolAzureDevopsOrganizationPermission): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.putPermission.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization">organization</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList">ManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission">permission</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organizationInput">organizationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permissionInput">permissionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organization"></a>

```typescript
public readonly organization: ManagedDevopsPoolAzureDevopsOrganizationOrganizationList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganizationList">ManagedDevopsPoolAzureDevopsOrganizationOrganizationList</a>

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permission"></a>

```typescript
public readonly permission: ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference</a>

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: IResolvable | ManagedDevopsPoolAzureDevopsOrganizationOrganization[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOrganization">ManagedDevopsPoolAzureDevopsOrganizationOrganization</a>[]

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: ManagedDevopsPoolAzureDevopsOrganizationPermission;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolAzureDevopsOrganization;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganization">ManagedDevopsPoolAzureDevopsOrganization</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.resetUsers"></a>

```typescript
public resetUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---


### ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference <a name="ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount">putAdministratorAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resetAdministratorAccount">resetAdministratorAccount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdministratorAccount` <a name="putAdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount"></a>

```typescript
public putAdministratorAccount(value: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.putAdministratorAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---

##### `resetAdministratorAccount` <a name="resetAdministratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.resetAdministratorAccount"></a>

```typescript
public resetAdministratorAccount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount">administratorAccount</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccountInput">administratorAccountInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `administratorAccount`<sup>Required</sup> <a name="administratorAccount" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccount"></a>

```typescript
public readonly administratorAccount: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccountOutputReference</a>

---

##### `administratorAccountInput`<sup>Optional</sup> <a name="administratorAccountInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.administratorAccountInput"></a>

```typescript
public readonly administratorAccountInput: ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount">ManagedDevopsPoolAzureDevopsOrganizationPermissionAdministratorAccount</a>

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermissionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolAzureDevopsOrganizationPermission;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolAzureDevopsOrganizationPermission">ManagedDevopsPoolAzureDevopsOrganizationPermission</a>

---


### ManagedDevopsPoolIdentityOutputReference <a name="ManagedDevopsPoolIdentityOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolIdentity">ManagedDevopsPoolIdentity</a>

---


### ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference <a name="ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference">resetPredictionPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictionPreference` <a name="resetPredictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference"></a>

```typescript
public resetPredictionPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput">predictionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">predictionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predictionPreferenceInput`<sup>Optional</sup> <a name="predictionPreferenceInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput"></a>

```typescript
public readonly predictionPreferenceInput: string;
```

- *Type:* string

---

##### `predictionPreference`<sup>Required</sup> <a name="predictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```typescript
public readonly predictionPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule">putFridaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule">putMondaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule">putSaturdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule">putSundaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule">putThursdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule">putTuesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule">putWednesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetAllWeekSchedule">resetAllWeekSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetFridaySchedule">resetFridaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetMondaySchedule">resetMondaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSaturdaySchedule">resetSaturdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSundaySchedule">resetSundaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetThursdaySchedule">resetThursdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTimeZoneName">resetTimeZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTuesdaySchedule">resetTuesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetWednesdaySchedule">resetWednesdaySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFridaySchedule` <a name="putFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule"></a>

```typescript
public putFridaySchedule(value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putFridaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]

---

##### `putMondaySchedule` <a name="putMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule"></a>

```typescript
public putMondaySchedule(value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putMondaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]

---

##### `putSaturdaySchedule` <a name="putSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule"></a>

```typescript
public putSaturdaySchedule(value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSaturdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]

---

##### `putSundaySchedule` <a name="putSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule"></a>

```typescript
public putSundaySchedule(value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putSundaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]

---

##### `putThursdaySchedule` <a name="putThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule"></a>

```typescript
public putThursdaySchedule(value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putThursdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]

---

##### `putTuesdaySchedule` <a name="putTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule"></a>

```typescript
public putTuesdaySchedule(value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putTuesdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]

---

##### `putWednesdaySchedule` <a name="putWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule"></a>

```typescript
public putWednesdaySchedule(value: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.putWednesdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]

---

##### `resetAllWeekSchedule` <a name="resetAllWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetAllWeekSchedule"></a>

```typescript
public resetAllWeekSchedule(): void
```

##### `resetFridaySchedule` <a name="resetFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetFridaySchedule"></a>

```typescript
public resetFridaySchedule(): void
```

##### `resetMondaySchedule` <a name="resetMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetMondaySchedule"></a>

```typescript
public resetMondaySchedule(): void
```

##### `resetSaturdaySchedule` <a name="resetSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSaturdaySchedule"></a>

```typescript
public resetSaturdaySchedule(): void
```

##### `resetSundaySchedule` <a name="resetSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetSundaySchedule"></a>

```typescript
public resetSundaySchedule(): void
```

##### `resetThursdaySchedule` <a name="resetThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetThursdaySchedule"></a>

```typescript
public resetThursdaySchedule(): void
```

##### `resetTimeZoneName` <a name="resetTimeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTimeZoneName"></a>

```typescript
public resetTimeZoneName(): void
```

##### `resetTuesdaySchedule` <a name="resetTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetTuesdaySchedule"></a>

```typescript
public resetTuesdaySchedule(): void
```

##### `resetWednesdaySchedule` <a name="resetWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.resetWednesdaySchedule"></a>

```typescript
public resetWednesdaySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule">fridaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule">mondaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule">saturdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule">sundaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule">thursdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">tuesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">wednesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput">allWeekScheduleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridayScheduleInput">fridayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondayScheduleInput">mondayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput">saturdayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundayScheduleInput">sundayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput">thursdayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneNameInput">timeZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput">tuesdayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput">wednesdayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule">allWeekSchedule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName">timeZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fridaySchedule`<sup>Required</sup> <a name="fridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```typescript
public readonly fridaySchedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridayScheduleList</a>

---

##### `mondaySchedule`<sup>Required</sup> <a name="mondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```typescript
public readonly mondaySchedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondayScheduleList</a>

---

##### `saturdaySchedule`<sup>Required</sup> <a name="saturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```typescript
public readonly saturdaySchedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `sundaySchedule`<sup>Required</sup> <a name="sundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```typescript
public readonly sundaySchedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList</a>

---

##### `thursdaySchedule`<sup>Required</sup> <a name="thursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```typescript
public readonly thursdaySchedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `tuesdaySchedule`<sup>Required</sup> <a name="tuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```typescript
public readonly tuesdaySchedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `wednesdaySchedule`<sup>Required</sup> <a name="wednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```typescript
public readonly wednesdaySchedule: ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `allWeekScheduleInput`<sup>Optional</sup> <a name="allWeekScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput"></a>

```typescript
public readonly allWeekScheduleInput: number;
```

- *Type:* number

---

##### `fridayScheduleInput`<sup>Optional</sup> <a name="fridayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.fridayScheduleInput"></a>

```typescript
public readonly fridayScheduleInput: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionFridaySchedule</a>[]

---

##### `mondayScheduleInput`<sup>Optional</sup> <a name="mondayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.mondayScheduleInput"></a>

```typescript
public readonly mondayScheduleInput: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionMondaySchedule</a>[]

---

##### `saturdayScheduleInput`<sup>Optional</sup> <a name="saturdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput"></a>

```typescript
public readonly saturdayScheduleInput: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]

---

##### `sundayScheduleInput`<sup>Optional</sup> <a name="sundayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.sundayScheduleInput"></a>

```typescript
public readonly sundayScheduleInput: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]

---

##### `thursdayScheduleInput`<sup>Optional</sup> <a name="thursdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput"></a>

```typescript
public readonly thursdayScheduleInput: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]

---

##### `timeZoneNameInput`<sup>Optional</sup> <a name="timeZoneNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneNameInput"></a>

```typescript
public readonly timeZoneNameInput: string;
```

- *Type:* string

---

##### `tuesdayScheduleInput`<sup>Optional</sup> <a name="tuesdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput"></a>

```typescript
public readonly tuesdayScheduleInput: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]

---

##### `wednesdayScheduleInput`<sup>Optional</sup> <a name="wednesdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput"></a>

```typescript
public readonly wednesdayScheduleInput: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]

---

##### `allWeekSchedule`<sup>Required</sup> <a name="allWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```typescript
public readonly allWeekSchedule: number;
```

- *Type:* number

---

##### `timeZoneName`<sup>Required</sup> <a name="timeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```typescript
public readonly timeZoneName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolStatefulAgentManualResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSaturdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionSundaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionThursdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionTuesdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>[]

---


### ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatefulAgentManualResourcePredictionWednesdaySchedule</a>

---


### ManagedDevopsPoolStatefulAgentOutputReference <a name="ManagedDevopsPoolStatefulAgentOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction">putAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction">putManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetAutomaticResourcePrediction">resetAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetGracePeriodTimeSpan">resetGracePeriodTimeSpan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetManualResourcePrediction">resetManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetMaximumAgentLifetime">resetMaximumAgentLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomaticResourcePrediction` <a name="putAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction"></a>

```typescript
public putAutomaticResourcePrediction(value: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putAutomaticResourcePrediction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---

##### `putManualResourcePrediction` <a name="putManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction"></a>

```typescript
public putManualResourcePrediction(value: ManagedDevopsPoolStatefulAgentManualResourcePrediction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.putManualResourcePrediction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---

##### `resetAutomaticResourcePrediction` <a name="resetAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetAutomaticResourcePrediction"></a>

```typescript
public resetAutomaticResourcePrediction(): void
```

##### `resetGracePeriodTimeSpan` <a name="resetGracePeriodTimeSpan" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetGracePeriodTimeSpan"></a>

```typescript
public resetGracePeriodTimeSpan(): void
```

##### `resetManualResourcePrediction` <a name="resetManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetManualResourcePrediction"></a>

```typescript
public resetManualResourcePrediction(): void
```

##### `resetMaximumAgentLifetime` <a name="resetMaximumAgentLifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.resetMaximumAgentLifetime"></a>

```typescript
public resetMaximumAgentLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction">automaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction">manualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePredictionInput">automaticResourcePredictionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpanInput">gracePeriodTimeSpanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePredictionInput">manualResourcePredictionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetimeInput">maximumAgentLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan">gracePeriodTimeSpan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime">maximumAgentLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticResourcePrediction`<sup>Required</sup> <a name="automaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePrediction"></a>

```typescript
public readonly automaticResourcePrediction: ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentAutomaticResourcePredictionOutputReference</a>

---

##### `manualResourcePrediction`<sup>Required</sup> <a name="manualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePrediction"></a>

```typescript
public readonly manualResourcePrediction: ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatefulAgentManualResourcePredictionOutputReference</a>

---

##### `automaticResourcePredictionInput`<sup>Optional</sup> <a name="automaticResourcePredictionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.automaticResourcePredictionInput"></a>

```typescript
public readonly automaticResourcePredictionInput: ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction">ManagedDevopsPoolStatefulAgentAutomaticResourcePrediction</a>

---

##### `gracePeriodTimeSpanInput`<sup>Optional</sup> <a name="gracePeriodTimeSpanInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpanInput"></a>

```typescript
public readonly gracePeriodTimeSpanInput: string;
```

- *Type:* string

---

##### `manualResourcePredictionInput`<sup>Optional</sup> <a name="manualResourcePredictionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.manualResourcePredictionInput"></a>

```typescript
public readonly manualResourcePredictionInput: ManagedDevopsPoolStatefulAgentManualResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentManualResourcePrediction">ManagedDevopsPoolStatefulAgentManualResourcePrediction</a>

---

##### `maximumAgentLifetimeInput`<sup>Optional</sup> <a name="maximumAgentLifetimeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetimeInput"></a>

```typescript
public readonly maximumAgentLifetimeInput: string;
```

- *Type:* string

---

##### `gracePeriodTimeSpan`<sup>Required</sup> <a name="gracePeriodTimeSpan" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.gracePeriodTimeSpan"></a>

```typescript
public readonly gracePeriodTimeSpan: string;
```

- *Type:* string

---

##### `maximumAgentLifetime`<sup>Required</sup> <a name="maximumAgentLifetime" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.maximumAgentLifetime"></a>

```typescript
public readonly maximumAgentLifetime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolStatefulAgent;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatefulAgent">ManagedDevopsPoolStatefulAgent</a>

---


### ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference <a name="ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference">resetPredictionPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPredictionPreference` <a name="resetPredictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.resetPredictionPreference"></a>

```typescript
public resetPredictionPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput">predictionPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference">predictionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `predictionPreferenceInput`<sup>Optional</sup> <a name="predictionPreferenceInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreferenceInput"></a>

```typescript
public readonly predictionPreferenceInput: string;
```

- *Type:* string

---

##### `predictionPreference`<sup>Required</sup> <a name="predictionPreference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.predictionPreference"></a>

```typescript
public readonly predictionPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule">putFridaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule">putMondaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule">putSaturdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule">putSundaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule">putThursdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule">putTuesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule">putWednesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetAllWeekSchedule">resetAllWeekSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetFridaySchedule">resetFridaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetMondaySchedule">resetMondaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSaturdaySchedule">resetSaturdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSundaySchedule">resetSundaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetThursdaySchedule">resetThursdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTimeZoneName">resetTimeZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTuesdaySchedule">resetTuesdaySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetWednesdaySchedule">resetWednesdaySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFridaySchedule` <a name="putFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule"></a>

```typescript
public putFridaySchedule(value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putFridaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]

---

##### `putMondaySchedule` <a name="putMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule"></a>

```typescript
public putMondaySchedule(value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putMondaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]

---

##### `putSaturdaySchedule` <a name="putSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule"></a>

```typescript
public putSaturdaySchedule(value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSaturdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]

---

##### `putSundaySchedule` <a name="putSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule"></a>

```typescript
public putSundaySchedule(value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putSundaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]

---

##### `putThursdaySchedule` <a name="putThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule"></a>

```typescript
public putThursdaySchedule(value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putThursdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]

---

##### `putTuesdaySchedule` <a name="putTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule"></a>

```typescript
public putTuesdaySchedule(value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putTuesdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]

---

##### `putWednesdaySchedule` <a name="putWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule"></a>

```typescript
public putWednesdaySchedule(value: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.putWednesdaySchedule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]

---

##### `resetAllWeekSchedule` <a name="resetAllWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetAllWeekSchedule"></a>

```typescript
public resetAllWeekSchedule(): void
```

##### `resetFridaySchedule` <a name="resetFridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetFridaySchedule"></a>

```typescript
public resetFridaySchedule(): void
```

##### `resetMondaySchedule` <a name="resetMondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetMondaySchedule"></a>

```typescript
public resetMondaySchedule(): void
```

##### `resetSaturdaySchedule` <a name="resetSaturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSaturdaySchedule"></a>

```typescript
public resetSaturdaySchedule(): void
```

##### `resetSundaySchedule` <a name="resetSundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetSundaySchedule"></a>

```typescript
public resetSundaySchedule(): void
```

##### `resetThursdaySchedule` <a name="resetThursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetThursdaySchedule"></a>

```typescript
public resetThursdaySchedule(): void
```

##### `resetTimeZoneName` <a name="resetTimeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTimeZoneName"></a>

```typescript
public resetTimeZoneName(): void
```

##### `resetTuesdaySchedule` <a name="resetTuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetTuesdaySchedule"></a>

```typescript
public resetTuesdaySchedule(): void
```

##### `resetWednesdaySchedule` <a name="resetWednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.resetWednesdaySchedule"></a>

```typescript
public resetWednesdaySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule">fridaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule">mondaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule">saturdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule">sundaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule">thursdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule">tuesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule">wednesdaySchedule</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput">allWeekScheduleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridayScheduleInput">fridayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondayScheduleInput">mondayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput">saturdayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundayScheduleInput">sundayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput">thursdayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneNameInput">timeZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput">tuesdayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput">wednesdayScheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule">allWeekSchedule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName">timeZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fridaySchedule`<sup>Required</sup> <a name="fridaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridaySchedule"></a>

```typescript
public readonly fridaySchedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridayScheduleList</a>

---

##### `mondaySchedule`<sup>Required</sup> <a name="mondaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondaySchedule"></a>

```typescript
public readonly mondaySchedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondayScheduleList</a>

---

##### `saturdaySchedule`<sup>Required</sup> <a name="saturdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdaySchedule"></a>

```typescript
public readonly saturdaySchedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList</a>

---

##### `sundaySchedule`<sup>Required</sup> <a name="sundaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundaySchedule"></a>

```typescript
public readonly sundaySchedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList</a>

---

##### `thursdaySchedule`<sup>Required</sup> <a name="thursdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdaySchedule"></a>

```typescript
public readonly thursdaySchedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList</a>

---

##### `tuesdaySchedule`<sup>Required</sup> <a name="tuesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdaySchedule"></a>

```typescript
public readonly tuesdaySchedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList</a>

---

##### `wednesdaySchedule`<sup>Required</sup> <a name="wednesdaySchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdaySchedule"></a>

```typescript
public readonly wednesdaySchedule: ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList</a>

---

##### `allWeekScheduleInput`<sup>Optional</sup> <a name="allWeekScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekScheduleInput"></a>

```typescript
public readonly allWeekScheduleInput: number;
```

- *Type:* number

---

##### `fridayScheduleInput`<sup>Optional</sup> <a name="fridayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.fridayScheduleInput"></a>

```typescript
public readonly fridayScheduleInput: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionFridaySchedule</a>[]

---

##### `mondayScheduleInput`<sup>Optional</sup> <a name="mondayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.mondayScheduleInput"></a>

```typescript
public readonly mondayScheduleInput: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionMondaySchedule</a>[]

---

##### `saturdayScheduleInput`<sup>Optional</sup> <a name="saturdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.saturdayScheduleInput"></a>

```typescript
public readonly saturdayScheduleInput: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]

---

##### `sundayScheduleInput`<sup>Optional</sup> <a name="sundayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.sundayScheduleInput"></a>

```typescript
public readonly sundayScheduleInput: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]

---

##### `thursdayScheduleInput`<sup>Optional</sup> <a name="thursdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.thursdayScheduleInput"></a>

```typescript
public readonly thursdayScheduleInput: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]

---

##### `timeZoneNameInput`<sup>Optional</sup> <a name="timeZoneNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneNameInput"></a>

```typescript
public readonly timeZoneNameInput: string;
```

- *Type:* string

---

##### `tuesdayScheduleInput`<sup>Optional</sup> <a name="tuesdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.tuesdayScheduleInput"></a>

```typescript
public readonly tuesdayScheduleInput: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]

---

##### `wednesdayScheduleInput`<sup>Optional</sup> <a name="wednesdayScheduleInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.wednesdayScheduleInput"></a>

```typescript
public readonly wednesdayScheduleInput: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]

---

##### `allWeekSchedule`<sup>Required</sup> <a name="allWeekSchedule" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.allWeekSchedule"></a>

```typescript
public readonly allWeekSchedule: number;
```

- *Type:* number

---

##### `timeZoneName`<sup>Required</sup> <a name="timeZoneName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.timeZoneName"></a>

```typescript
public readonly timeZoneName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolStatelessAgentManualResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSaturdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionSundaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionThursdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionTuesdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>[]

---


### ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference <a name="ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdayScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule">ManagedDevopsPoolStatelessAgentManualResourcePredictionWednesdaySchedule</a>

---


### ManagedDevopsPoolStatelessAgentOutputReference <a name="ManagedDevopsPoolStatelessAgentOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction">putAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction">putManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetAutomaticResourcePrediction">resetAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetManualResourcePrediction">resetManualResourcePrediction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomaticResourcePrediction` <a name="putAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction"></a>

```typescript
public putAutomaticResourcePrediction(value: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putAutomaticResourcePrediction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---

##### `putManualResourcePrediction` <a name="putManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction"></a>

```typescript
public putManualResourcePrediction(value: ManagedDevopsPoolStatelessAgentManualResourcePrediction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.putManualResourcePrediction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---

##### `resetAutomaticResourcePrediction` <a name="resetAutomaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetAutomaticResourcePrediction"></a>

```typescript
public resetAutomaticResourcePrediction(): void
```

##### `resetManualResourcePrediction` <a name="resetManualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.resetManualResourcePrediction"></a>

```typescript
public resetManualResourcePrediction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction">automaticResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction">manualResourcePrediction</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePredictionInput">automaticResourcePredictionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePredictionInput">manualResourcePredictionInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticResourcePrediction`<sup>Required</sup> <a name="automaticResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePrediction"></a>

```typescript
public readonly automaticResourcePrediction: ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentAutomaticResourcePredictionOutputReference</a>

---

##### `manualResourcePrediction`<sup>Required</sup> <a name="manualResourcePrediction" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePrediction"></a>

```typescript
public readonly manualResourcePrediction: ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference">ManagedDevopsPoolStatelessAgentManualResourcePredictionOutputReference</a>

---

##### `automaticResourcePredictionInput`<sup>Optional</sup> <a name="automaticResourcePredictionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.automaticResourcePredictionInput"></a>

```typescript
public readonly automaticResourcePredictionInput: ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction">ManagedDevopsPoolStatelessAgentAutomaticResourcePrediction</a>

---

##### `manualResourcePredictionInput`<sup>Optional</sup> <a name="manualResourcePredictionInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.manualResourcePredictionInput"></a>

```typescript
public readonly manualResourcePredictionInput: ManagedDevopsPoolStatelessAgentManualResourcePrediction;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentManualResourcePrediction">ManagedDevopsPoolStatelessAgentManualResourcePrediction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolStatelessAgent;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolStatelessAgent">ManagedDevopsPoolStatelessAgent</a>

---


### ManagedDevopsPoolTimeoutsOutputReference <a name="ManagedDevopsPoolTimeoutsOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolTimeouts">ManagedDevopsPoolTimeouts</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricImageList <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImageList" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get"></a>

```typescript
public get(index: number): ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolVirtualMachineScaleSetFabricImage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetAliases">resetAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetBuffer">resetBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetWellKnownImageName">resetWellKnownImageName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAliases` <a name="resetAliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetAliases"></a>

```typescript
public resetAliases(): void
```

##### `resetBuffer` <a name="resetBuffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetBuffer"></a>

```typescript
public resetBuffer(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetWellKnownImageName` <a name="resetWellKnownImageName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.resetWellKnownImageName"></a>

```typescript
public resetWellKnownImageName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliasesInput">aliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.bufferInput">bufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageNameInput">wellKnownImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases">aliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer">buffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName">wellKnownImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasesInput`<sup>Optional</sup> <a name="aliasesInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliasesInput"></a>

```typescript
public readonly aliasesInput: string[];
```

- *Type:* string[]

---

##### `bufferInput`<sup>Optional</sup> <a name="bufferInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.bufferInput"></a>

```typescript
public readonly bufferInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `wellKnownImageNameInput`<sup>Optional</sup> <a name="wellKnownImageNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageNameInput"></a>

```typescript
public readonly wellKnownImageNameInput: string;
```

- *Type:* string

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.aliases"></a>

```typescript
public readonly aliases: string[];
```

- *Type:* string[]

---

##### `buffer`<sup>Required</sup> <a name="buffer" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.buffer"></a>

```typescript
public readonly buffer: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `wellKnownImageName`<sup>Required</sup> <a name="wellKnownImageName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.wellKnownImageName"></a>

```typescript
public readonly wellKnownImageName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDevopsPoolVirtualMachineScaleSetFabricImage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity">putSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetOsDiskStorageAccountType">resetOsDiskStorageAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSecurity">resetSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImage` <a name="putImage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage"></a>

```typescript
public putImage(value: IResolvable | ManagedDevopsPoolVirtualMachineScaleSetFabricImage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putImage.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]

---

##### `putSecurity` <a name="putSecurity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity"></a>

```typescript
public putSecurity(value: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage"></a>

```typescript
public putStorage(value: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---

##### `resetOsDiskStorageAccountType` <a name="resetOsDiskStorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetOsDiskStorageAccountType"></a>

```typescript
public resetOsDiskStorageAccountType(): void
```

##### `resetSecurity` <a name="resetSecurity" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSecurity"></a>

```typescript
public resetSecurity(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList">ManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security">security</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.imageInput">imageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountTypeInput">osDiskStorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.securityInput">securityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuNameInput">skuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storageInput">storageInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType">osDiskStorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.image"></a>

```typescript
public readonly image: ManagedDevopsPoolVirtualMachineScaleSetFabricImageList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImageList">ManagedDevopsPoolVirtualMachineScaleSetFabricImageList</a>

---

##### `security`<sup>Required</sup> <a name="security" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.security"></a>

```typescript
public readonly security: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storage"></a>

```typescript
public readonly storage: ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: IResolvable | ManagedDevopsPoolVirtualMachineScaleSetFabricImage[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricImage">ManagedDevopsPoolVirtualMachineScaleSetFabricImage</a>[]

---

##### `osDiskStorageAccountTypeInput`<sup>Optional</sup> <a name="osDiskStorageAccountTypeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountTypeInput"></a>

```typescript
public readonly osDiskStorageAccountTypeInput: string;
```

- *Type:* string

---

##### `securityInput`<sup>Optional</sup> <a name="securityInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.securityInput"></a>

```typescript
public readonly securityInput: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuNameInput"></a>

```typescript
public readonly skuNameInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `osDiskStorageAccountType`<sup>Required</sup> <a name="osDiskStorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.osDiskStorageAccountType"></a>

```typescript
public readonly osDiskStorageAccountType: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolVirtualMachineScaleSetFabric;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabric">ManagedDevopsPoolVirtualMachineScaleSetFabric</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreLocation">resetCertificateStoreLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreName">resetCertificateStoreName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetKeyExportEnabled">resetKeyExportEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateStoreLocation` <a name="resetCertificateStoreLocation" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreLocation"></a>

```typescript
public resetCertificateStoreLocation(): void
```

##### `resetCertificateStoreName` <a name="resetCertificateStoreName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetCertificateStoreName"></a>

```typescript
public resetCertificateStoreName(): void
```

##### `resetKeyExportEnabled` <a name="resetKeyExportEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.resetKeyExportEnabled"></a>

```typescript
public resetKeyExportEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocationInput">certificateStoreLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreNameInput">certificateStoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabledInput">keyExportEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIdsInput">keyVaultCertificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation">certificateStoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName">certificateStoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled">keyExportEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds">keyVaultCertificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateStoreLocationInput`<sup>Optional</sup> <a name="certificateStoreLocationInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocationInput"></a>

```typescript
public readonly certificateStoreLocationInput: string;
```

- *Type:* string

---

##### `certificateStoreNameInput`<sup>Optional</sup> <a name="certificateStoreNameInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreNameInput"></a>

```typescript
public readonly certificateStoreNameInput: string;
```

- *Type:* string

---

##### `keyExportEnabledInput`<sup>Optional</sup> <a name="keyExportEnabledInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabledInput"></a>

```typescript
public readonly keyExportEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyVaultCertificateIdsInput`<sup>Optional</sup> <a name="keyVaultCertificateIdsInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIdsInput"></a>

```typescript
public readonly keyVaultCertificateIdsInput: string[];
```

- *Type:* string[]

---

##### `certificateStoreLocation`<sup>Required</sup> <a name="certificateStoreLocation" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreLocation"></a>

```typescript
public readonly certificateStoreLocation: string;
```

- *Type:* string

---

##### `certificateStoreName`<sup>Required</sup> <a name="certificateStoreName" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.certificateStoreName"></a>

```typescript
public readonly certificateStoreName: string;
```

- *Type:* string

---

##### `keyExportEnabled`<sup>Required</sup> <a name="keyExportEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyExportEnabled"></a>

```typescript
public readonly keyExportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyVaultCertificateIds`<sup>Required</sup> <a name="keyVaultCertificateIds" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.keyVaultCertificateIds"></a>

```typescript
public readonly keyVaultCertificateIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement">putKeyVaultManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetInteractiveLogonEnabled">resetInteractiveLogonEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetKeyVaultManagement">resetKeyVaultManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeyVaultManagement` <a name="putKeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement"></a>

```typescript
public putKeyVaultManagement(value: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.putKeyVaultManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---

##### `resetInteractiveLogonEnabled` <a name="resetInteractiveLogonEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetInteractiveLogonEnabled"></a>

```typescript
public resetInteractiveLogonEnabled(): void
```

##### `resetKeyVaultManagement` <a name="resetKeyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.resetKeyVaultManagement"></a>

```typescript
public resetKeyVaultManagement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement">keyVaultManagement</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabledInput">interactiveLogonEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagementInput">keyVaultManagementInput</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled">interactiveLogonEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyVaultManagement`<sup>Required</sup> <a name="keyVaultManagement" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagement"></a>

```typescript
public readonly keyVaultManagement: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagementOutputReference</a>

---

##### `interactiveLogonEnabledInput`<sup>Optional</sup> <a name="interactiveLogonEnabledInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabledInput"></a>

```typescript
public readonly interactiveLogonEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `keyVaultManagementInput`<sup>Optional</sup> <a name="keyVaultManagementInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.keyVaultManagementInput"></a>

```typescript
public readonly keyVaultManagementInput: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityKeyVaultManagement</a>

---

##### `interactiveLogonEnabled`<sup>Required</sup> <a name="interactiveLogonEnabled" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.interactiveLogonEnabled"></a>

```typescript
public readonly interactiveLogonEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity">ManagedDevopsPoolVirtualMachineScaleSetFabricSecurity</a>

---


### ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference <a name="ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer"></a>

```typescript
import { managedDevopsPool } from '@cdktn/provider-azurerm'

new managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetCaching">resetCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetDriveLetter">resetDriveLetter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetStorageAccountType">resetStorageAccountType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaching` <a name="resetCaching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetCaching"></a>

```typescript
public resetCaching(): void
```

##### `resetDriveLetter` <a name="resetDriveLetter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetDriveLetter"></a>

```typescript
public resetDriveLetter(): void
```

##### `resetStorageAccountType` <a name="resetStorageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.resetStorageAccountType"></a>

```typescript
public resetStorageAccountType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.cachingInput">cachingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGbInput">diskSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetterInput">driveLetterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountTypeInput">storageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching">caching</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb">diskSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter">driveLetter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType">storageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.cachingInput"></a>

```typescript
public readonly cachingInput: string;
```

- *Type:* string

---

##### `diskSizeInGbInput`<sup>Optional</sup> <a name="diskSizeInGbInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGbInput"></a>

```typescript
public readonly diskSizeInGbInput: number;
```

- *Type:* number

---

##### `driveLetterInput`<sup>Optional</sup> <a name="driveLetterInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetterInput"></a>

```typescript
public readonly driveLetterInput: string;
```

- *Type:* string

---

##### `storageAccountTypeInput`<sup>Optional</sup> <a name="storageAccountTypeInput" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountTypeInput"></a>

```typescript
public readonly storageAccountTypeInput: string;
```

- *Type:* string

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.caching"></a>

```typescript
public readonly caching: string;
```

- *Type:* string

---

##### `diskSizeInGb`<sup>Required</sup> <a name="diskSizeInGb" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.diskSizeInGb"></a>

```typescript
public readonly diskSizeInGb: number;
```

- *Type:* number

---

##### `driveLetter`<sup>Required</sup> <a name="driveLetter" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.driveLetter"></a>

```typescript
public readonly driveLetter: string;
```

- *Type:* string

---

##### `storageAccountType`<sup>Required</sup> <a name="storageAccountType" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.storageAccountType"></a>

```typescript
public readonly storageAccountType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDevopsPoolVirtualMachineScaleSetFabricStorage;
```

- *Type:* <a href="#@cdktn/provider-azurerm.managedDevopsPool.ManagedDevopsPoolVirtualMachineScaleSetFabricStorage">ManagedDevopsPoolVirtualMachineScaleSetFabricStorage</a>

---



