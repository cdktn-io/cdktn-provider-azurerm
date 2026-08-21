# `apiManagementWorkspaceNamedValue` Submodule <a name="`apiManagementWorkspaceNamedValue` Submodule" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspaceNamedValue <a name="ApiManagementWorkspaceNamedValue" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value azurerm_api_management_workspace_named_value}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

new apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue(scope: Construct, id: string, config: ApiManagementWorkspaceNamedValueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig">ApiManagementWorkspaceNamedValueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig">ApiManagementWorkspaceNamedValueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putValueFromKeyVault">putValueFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetValueFromKeyVault">resetValueFromKeyVault</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementWorkspaceNamedValueTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a>

---

##### `putValueFromKeyVault` <a name="putValueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putValueFromKeyVault"></a>

```typescript
public putValueFromKeyVault(value: ApiManagementWorkspaceNamedValueValueFromKeyVault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.putValueFromKeyVault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueFromKeyVault` <a name="resetValueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.resetValueFromKeyVault"></a>

```typescript
public resetValueFromKeyVault(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiManagementWorkspaceNamedValue resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isConstruct"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformElement"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformResource"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiManagementWorkspaceNamedValue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementWorkspaceNamedValue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementWorkspaceNamedValue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspaceNamedValue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference">ApiManagementWorkspaceNamedValueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueFromKeyVault">valueFromKeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference">ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.apiManagementWorkspaceIdInput">apiManagementWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.secretInput">secretInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueFromKeyVaultInput">valueFromKeyVaultInput</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.apiManagementWorkspaceId">apiManagementWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.secret">secret</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementWorkspaceNamedValueTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference">ApiManagementWorkspaceNamedValueTimeoutsOutputReference</a>

---

##### `valueFromKeyVault`<sup>Required</sup> <a name="valueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueFromKeyVault"></a>

```typescript
public readonly valueFromKeyVault: ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference">ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference</a>

---

##### `apiManagementWorkspaceIdInput`<sup>Optional</sup> <a name="apiManagementWorkspaceIdInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.apiManagementWorkspaceIdInput"></a>

```typescript
public readonly apiManagementWorkspaceIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.secretInput"></a>

```typescript
public readonly secretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementWorkspaceNamedValueTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a>

---

##### `valueFromKeyVaultInput`<sup>Optional</sup> <a name="valueFromKeyVaultInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueFromKeyVaultInput"></a>

```typescript
public readonly valueFromKeyVaultInput: ApiManagementWorkspaceNamedValueValueFromKeyVault;
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `apiManagementWorkspaceId`<sup>Required</sup> <a name="apiManagementWorkspaceId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.apiManagementWorkspaceId"></a>

```typescript
public readonly apiManagementWorkspaceId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.secret"></a>

```typescript
public readonly secret: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspaceNamedValueConfig <a name="ApiManagementWorkspaceNamedValueConfig" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.Initializer"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

const apiManagementWorkspaceNamedValueConfig: apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.apiManagementWorkspaceId">apiManagementWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#api_management_workspace_id ApiManagementWorkspaceNamedValue#api_management_workspace_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#display_name ApiManagementWorkspaceNamedValue#display_name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#name ApiManagementWorkspaceNamedValue#name}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#id ApiManagementWorkspaceNamedValue#id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.secret">secret</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#secret ApiManagementWorkspaceNamedValue#secret}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#tags ApiManagementWorkspaceNamedValue#tags}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#value ApiManagementWorkspaceNamedValue#value}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.valueFromKeyVault">valueFromKeyVault</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a></code> | value_from_key_vault block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiManagementWorkspaceId`<sup>Required</sup> <a name="apiManagementWorkspaceId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.apiManagementWorkspaceId"></a>

```typescript
public readonly apiManagementWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#api_management_workspace_id ApiManagementWorkspaceNamedValue#api_management_workspace_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#display_name ApiManagementWorkspaceNamedValue#display_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#name ApiManagementWorkspaceNamedValue#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#id ApiManagementWorkspaceNamedValue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.secret"></a>

```typescript
public readonly secret: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#secret ApiManagementWorkspaceNamedValue#secret}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#tags ApiManagementWorkspaceNamedValue#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementWorkspaceNamedValueTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#timeouts ApiManagementWorkspaceNamedValue#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#value ApiManagementWorkspaceNamedValue#value}.

---

##### `valueFromKeyVault`<sup>Optional</sup> <a name="valueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueConfig.property.valueFromKeyVault"></a>

```typescript
public readonly valueFromKeyVault: ApiManagementWorkspaceNamedValueValueFromKeyVault;
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a>

value_from_key_vault block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#value_from_key_vault ApiManagementWorkspaceNamedValue#value_from_key_vault}

---

### ApiManagementWorkspaceNamedValueTimeouts <a name="ApiManagementWorkspaceNamedValueTimeouts" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.Initializer"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

const apiManagementWorkspaceNamedValueTimeouts: apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#create ApiManagementWorkspaceNamedValue#create}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#delete ApiManagementWorkspaceNamedValue#delete}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#read ApiManagementWorkspaceNamedValue#read}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#update ApiManagementWorkspaceNamedValue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#create ApiManagementWorkspaceNamedValue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#delete ApiManagementWorkspaceNamedValue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#read ApiManagementWorkspaceNamedValue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#update ApiManagementWorkspaceNamedValue#update}.

---

### ApiManagementWorkspaceNamedValueValueFromKeyVault <a name="ApiManagementWorkspaceNamedValueValueFromKeyVault" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.Initializer"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

const apiManagementWorkspaceNamedValueValueFromKeyVault: apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#secret_id ApiManagementWorkspaceNamedValue#secret_id}. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.property.identityClientId">identityClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#identity_client_id ApiManagementWorkspaceNamedValue#identity_client_id}. |

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#secret_id ApiManagementWorkspaceNamedValue#secret_id}.

---

##### `identityClientId`<sup>Optional</sup> <a name="identityClientId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.2.0/docs/resources/api_management_workspace_named_value#identity_client_id ApiManagementWorkspaceNamedValue#identity_client_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspaceNamedValueTimeoutsOutputReference <a name="ApiManagementWorkspaceNamedValueTimeoutsOutputReference" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

new apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementWorkspaceNamedValueTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueTimeouts">ApiManagementWorkspaceNamedValueTimeouts</a>

---


### ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference <a name="ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer"></a>

```typescript
import { apiManagementWorkspaceNamedValue } from '@cdktn/provider-azurerm'

new apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resetIdentityClientId">resetIdentityClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityClientId` <a name="resetIdentityClientId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.resetIdentityClientId"></a>

```typescript
public resetIdentityClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.identityClientIdInput">identityClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.identityClientId">identityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityClientIdInput`<sup>Optional</sup> <a name="identityClientIdInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.identityClientIdInput"></a>

```typescript
public readonly identityClientIdInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `identityClientId`<sup>Required</sup> <a name="identityClientId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.identityClientId"></a>

```typescript
public readonly identityClientId: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiManagementWorkspaceNamedValueValueFromKeyVault;
```

- *Type:* <a href="#@cdktn/provider-azurerm.apiManagementWorkspaceNamedValue.ApiManagementWorkspaceNamedValueValueFromKeyVault">ApiManagementWorkspaceNamedValueValueFromKeyVault</a>

---



