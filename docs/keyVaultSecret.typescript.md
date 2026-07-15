# `keyVaultSecret` Submodule <a name="`keyVaultSecret` Submodule" id="@cdktn/provider-azurerm.keyVaultSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultSecret <a name="KeyVaultSecret" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret azurerm_key_vault_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.Initializer"></a>

```typescript
import { keyVaultSecret } from '@cdktn/provider-azurerm'

new keyVaultSecret.KeyVaultSecret(scope: Construct, id: string, config: KeyVaultSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig">KeyVaultSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig">KeyVaultSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetExpirationDate">resetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetNotBeforeDate">resetNotBeforeDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetValueWo">resetValueWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetValueWoVersion">resetValueWoVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.putTimeouts"></a>

```typescript
public putTimeouts(value: KeyVaultSecretTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts">KeyVaultSecretTimeouts</a>

---

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetExpirationDate` <a name="resetExpirationDate" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetExpirationDate"></a>

```typescript
public resetExpirationDate(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotBeforeDate` <a name="resetNotBeforeDate" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetNotBeforeDate"></a>

```typescript
public resetNotBeforeDate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueWo` <a name="resetValueWo" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetValueWo"></a>

```typescript
public resetValueWo(): void
```

##### `resetValueWoVersion` <a name="resetValueWoVersion" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.resetValueWoVersion"></a>

```typescript
public resetValueWoVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KeyVaultSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isConstruct"></a>

```typescript
import { keyVaultSecret } from '@cdktn/provider-azurerm'

keyVaultSecret.KeyVaultSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isTerraformElement"></a>

```typescript
import { keyVaultSecret } from '@cdktn/provider-azurerm'

keyVaultSecret.KeyVaultSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isTerraformResource"></a>

```typescript
import { keyVaultSecret } from '@cdktn/provider-azurerm'

keyVaultSecret.KeyVaultSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.generateConfigForImport"></a>

```typescript
import { keyVaultSecret } from '@cdktn/provider-azurerm'

keyVaultSecret.KeyVaultSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KeyVaultSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KeyVaultSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.resourceVersionlessId">resourceVersionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference">KeyVaultSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.versionlessId">versionlessId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.expirationDateInput">expirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.notBeforeDateInput">notBeforeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts">KeyVaultSecretTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueWoInput">valueWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueWoVersionInput">valueWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.expirationDate">expirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.notBeforeDate">notBeforeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueWo">valueWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueWoVersion">valueWoVersion</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceVersionlessId`<sup>Required</sup> <a name="resourceVersionlessId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.resourceVersionlessId"></a>

```typescript
public readonly resourceVersionlessId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultSecretTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference">KeyVaultSecretTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `versionlessId`<sup>Required</sup> <a name="versionlessId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.versionlessId"></a>

```typescript
public readonly versionlessId: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `expirationDateInput`<sup>Optional</sup> <a name="expirationDateInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.expirationDateInput"></a>

```typescript
public readonly expirationDateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notBeforeDateInput`<sup>Optional</sup> <a name="notBeforeDateInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.notBeforeDateInput"></a>

```typescript
public readonly notBeforeDateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KeyVaultSecretTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts">KeyVaultSecretTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `valueWoInput`<sup>Optional</sup> <a name="valueWoInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueWoInput"></a>

```typescript
public readonly valueWoInput: string;
```

- *Type:* string

---

##### `valueWoVersionInput`<sup>Optional</sup> <a name="valueWoVersionInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueWoVersionInput"></a>

```typescript
public readonly valueWoVersionInput: number;
```

- *Type:* number

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `expirationDate`<sup>Required</sup> <a name="expirationDate" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notBeforeDate`<sup>Required</sup> <a name="notBeforeDate" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.notBeforeDate"></a>

```typescript
public readonly notBeforeDate: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `valueWo`<sup>Required</sup> <a name="valueWo" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueWo"></a>

```typescript
public readonly valueWo: string;
```

- *Type:* string

---

##### `valueWoVersion`<sup>Required</sup> <a name="valueWoVersion" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.valueWoVersion"></a>

```typescript
public readonly valueWoVersion: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultSecretConfig <a name="KeyVaultSecretConfig" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.Initializer"></a>

```typescript
import { keyVaultSecret } from '@cdktn/provider-azurerm'

const keyVaultSecretConfig: keyVaultSecret.KeyVaultSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#key_vault_id KeyVaultSecret#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#name KeyVaultSecret#name}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#content_type KeyVaultSecret#content_type}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.expirationDate">expirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#expiration_date KeyVaultSecret#expiration_date}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#id KeyVaultSecret#id}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.notBeforeDate">notBeforeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#not_before_date KeyVaultSecret#not_before_date}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#tags KeyVaultSecret#tags}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts">KeyVaultSecretTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#value KeyVaultSecret#value}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.valueWo">valueWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#value_wo KeyVaultSecret#value_wo}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.valueWoVersion">valueWoVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#value_wo_version KeyVaultSecret#value_wo_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#key_vault_id KeyVaultSecret#key_vault_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#name KeyVaultSecret#name}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#content_type KeyVaultSecret#content_type}.

---

##### `expirationDate`<sup>Optional</sup> <a name="expirationDate" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.expirationDate"></a>

```typescript
public readonly expirationDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#expiration_date KeyVaultSecret#expiration_date}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#id KeyVaultSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notBeforeDate`<sup>Optional</sup> <a name="notBeforeDate" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.notBeforeDate"></a>

```typescript
public readonly notBeforeDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#not_before_date KeyVaultSecret#not_before_date}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#tags KeyVaultSecret#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KeyVaultSecretTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts">KeyVaultSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#timeouts KeyVaultSecret#timeouts}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#value KeyVaultSecret#value}.

---

##### `valueWo`<sup>Optional</sup> <a name="valueWo" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.valueWo"></a>

```typescript
public readonly valueWo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#value_wo KeyVaultSecret#value_wo}.

---

##### `valueWoVersion`<sup>Optional</sup> <a name="valueWoVersion" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretConfig.property.valueWoVersion"></a>

```typescript
public readonly valueWoVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#value_wo_version KeyVaultSecret#value_wo_version}.

---

### KeyVaultSecretTimeouts <a name="KeyVaultSecretTimeouts" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.Initializer"></a>

```typescript
import { keyVaultSecret } from '@cdktn/provider-azurerm'

const keyVaultSecretTimeouts: keyVaultSecret.KeyVaultSecretTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#create KeyVaultSecret#create}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#delete KeyVaultSecret#delete}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#read KeyVaultSecret#read}. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#update KeyVaultSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#create KeyVaultSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#delete KeyVaultSecret#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#read KeyVaultSecret#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/key_vault_secret#update KeyVaultSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultSecretTimeoutsOutputReference <a name="KeyVaultSecretTimeoutsOutputReference" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.Initializer"></a>

```typescript
import { keyVaultSecret } from '@cdktn/provider-azurerm'

new keyVaultSecret.KeyVaultSecretTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts">KeyVaultSecretTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KeyVaultSecretTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.keyVaultSecret.KeyVaultSecretTimeouts">KeyVaultSecretTimeouts</a>

---



