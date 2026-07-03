# `dataFactoryLinkedServiceAzureSearch` Submodule <a name="`dataFactoryLinkedServiceAzureSearch` Submodule" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureSearch <a name="DataFactoryLinkedServiceAzureSearch" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search azurerm_data_factory_linked_service_azure_search}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureSearch } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureSearchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig">DataFactoryLinkedServiceAzureSearchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig">DataFactoryLinkedServiceAzureSearchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryLinkedServiceAzureSearchTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts">DataFactoryLinkedServiceAzureSearchTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetIntegrationRuntimeName"></a>

```typescript
public resetIntegrationRuntimeName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataFactoryLinkedServiceAzureSearch resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isConstruct"></a>

```typescript
import { dataFactoryLinkedServiceAzureSearch } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isTerraformElement"></a>

```typescript
import { dataFactoryLinkedServiceAzureSearch } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isTerraformResource"></a>

```typescript
import { dataFactoryLinkedServiceAzureSearch } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.generateConfigForImport"></a>

```typescript
import { dataFactoryLinkedServiceAzureSearch } from '@cdktn/provider-azurerm'

dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataFactoryLinkedServiceAzureSearch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceAzureSearch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceAzureSearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceAzureSearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.encryptedCredential">encryptedCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference">DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.searchServiceKeyInput">searchServiceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts">DataFactoryLinkedServiceAzureSearchTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.searchServiceKey">searchServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `encryptedCredential`<sup>Required</sup> <a name="encryptedCredential" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.encryptedCredential"></a>

```typescript
public readonly encryptedCredential: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference">DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.integrationRuntimeNameInput"></a>

```typescript
public readonly integrationRuntimeNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `searchServiceKeyInput`<sup>Optional</sup> <a name="searchServiceKeyInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.searchServiceKeyInput"></a>

```typescript
public readonly searchServiceKeyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataFactoryLinkedServiceAzureSearchTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts">DataFactoryLinkedServiceAzureSearchTimeouts</a>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `searchServiceKey`<sup>Required</sup> <a name="searchServiceKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.searchServiceKey"></a>

```typescript
public readonly searchServiceKey: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureSearchConfig <a name="DataFactoryLinkedServiceAzureSearchConfig" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureSearch } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceAzureSearchConfig: dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#data_factory_id DataFactoryLinkedServiceAzureSearch#data_factory_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#name DataFactoryLinkedServiceAzureSearch#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.searchServiceKey">searchServiceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#search_service_key DataFactoryLinkedServiceAzureSearch#search_service_key}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#url DataFactoryLinkedServiceAzureSearch#url}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#additional_properties DataFactoryLinkedServiceAzureSearch#additional_properties}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#annotations DataFactoryLinkedServiceAzureSearch#annotations}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#description DataFactoryLinkedServiceAzureSearch#description}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#id DataFactoryLinkedServiceAzureSearch#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#integration_runtime_name DataFactoryLinkedServiceAzureSearch#integration_runtime_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#parameters DataFactoryLinkedServiceAzureSearch#parameters}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts">DataFactoryLinkedServiceAzureSearchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#data_factory_id DataFactoryLinkedServiceAzureSearch#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#name DataFactoryLinkedServiceAzureSearch#name}.

---

##### `searchServiceKey`<sup>Required</sup> <a name="searchServiceKey" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.searchServiceKey"></a>

```typescript
public readonly searchServiceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#search_service_key DataFactoryLinkedServiceAzureSearch#search_service_key}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#url DataFactoryLinkedServiceAzureSearch#url}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#additional_properties DataFactoryLinkedServiceAzureSearch#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#annotations DataFactoryLinkedServiceAzureSearch#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#description DataFactoryLinkedServiceAzureSearch#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#id DataFactoryLinkedServiceAzureSearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#integration_runtime_name DataFactoryLinkedServiceAzureSearch#integration_runtime_name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#parameters DataFactoryLinkedServiceAzureSearch#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceAzureSearchTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts">DataFactoryLinkedServiceAzureSearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#timeouts DataFactoryLinkedServiceAzureSearch#timeouts}

---

### DataFactoryLinkedServiceAzureSearchTimeouts <a name="DataFactoryLinkedServiceAzureSearchTimeouts" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureSearch } from '@cdktn/provider-azurerm'

const dataFactoryLinkedServiceAzureSearchTimeouts: dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#create DataFactoryLinkedServiceAzureSearch#create}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#delete DataFactoryLinkedServiceAzureSearch#delete}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#read DataFactoryLinkedServiceAzureSearch#read}. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#update DataFactoryLinkedServiceAzureSearch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#create DataFactoryLinkedServiceAzureSearch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#delete DataFactoryLinkedServiceAzureSearch#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#read DataFactoryLinkedServiceAzureSearch#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/resources/data_factory_linked_service_azure_search#update DataFactoryLinkedServiceAzureSearch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureSearch } from '@cdktn/provider-azurerm'

new dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts">DataFactoryLinkedServiceAzureSearchTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataFactoryLinkedServiceAzureSearchTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataFactoryLinkedServiceAzureSearch.DataFactoryLinkedServiceAzureSearchTimeouts">DataFactoryLinkedServiceAzureSearchTimeouts</a>

---



