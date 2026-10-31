# `dataAzurermStorageAccountStaticWebsite` Submodule <a name="`dataAzurermStorageAccountStaticWebsite` Submodule" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccountStaticWebsite <a name="DataAzurermStorageAccountStaticWebsite" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website azurerm_storage_account_static_website}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer"></a>

```typescript
import { dataAzurermStorageAccountStaticWebsite } from '@cdktn/provider-azurerm'

new dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite(scope: Construct, id: string, config: DataAzurermStorageAccountStaticWebsiteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig">DataAzurermStorageAccountStaticWebsiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig">DataAzurermStorageAccountStaticWebsiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermStorageAccountStaticWebsiteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermStorageAccountStaticWebsite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isConstruct"></a>

```typescript
import { dataAzurermStorageAccountStaticWebsite } from '@cdktn/provider-azurerm'

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformElement"></a>

```typescript
import { dataAzurermStorageAccountStaticWebsite } from '@cdktn/provider-azurerm'

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformDataSource"></a>

```typescript
import { dataAzurermStorageAccountStaticWebsite } from '@cdktn/provider-azurerm'

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport"></a>

```typescript
import { dataAzurermStorageAccountStaticWebsite } from '@cdktn/provider-azurerm'

dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermStorageAccountStaticWebsite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermStorageAccountStaticWebsite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermStorageAccountStaticWebsite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageAccountStaticWebsite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.error404Document">error404Document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.indexDocument">indexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference">DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `error404Document`<sup>Required</sup> <a name="error404Document" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.error404Document"></a>

```typescript
public readonly error404Document: string;
```

- *Type:* string

---

##### `indexDocument`<sup>Required</sup> <a name="indexDocument" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.indexDocument"></a>

```typescript
public readonly indexDocument: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference">DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermStorageAccountStaticWebsiteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsite.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountStaticWebsiteConfig <a name="DataAzurermStorageAccountStaticWebsiteConfig" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.Initializer"></a>

```typescript
import { dataAzurermStorageAccountStaticWebsite } from '@cdktn/provider-azurerm'

const dataAzurermStorageAccountStaticWebsiteConfig: dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#storage_account_id DataAzurermStorageAccountStaticWebsite#storage_account_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#id DataAzurermStorageAccountStaticWebsite#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#storage_account_id DataAzurermStorageAccountStaticWebsite#storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#id DataAzurermStorageAccountStaticWebsite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStorageAccountStaticWebsiteTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#timeouts DataAzurermStorageAccountStaticWebsite#timeouts}

---

### DataAzurermStorageAccountStaticWebsiteTimeouts <a name="DataAzurermStorageAccountStaticWebsiteTimeouts" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts.Initializer"></a>

```typescript
import { dataAzurermStorageAccountStaticWebsite } from '@cdktn/provider-azurerm'

const dataAzurermStorageAccountStaticWebsiteTimeouts: dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#read DataAzurermStorageAccountStaticWebsite#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.12.0/docs/data-sources/storage_account_static_website#read DataAzurermStorageAccountStaticWebsite#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference <a name="DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermStorageAccountStaticWebsite } from '@cdktn/provider-azurerm'

new dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermStorageAccountStaticWebsiteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermStorageAccountStaticWebsite.DataAzurermStorageAccountStaticWebsiteTimeouts">DataAzurermStorageAccountStaticWebsiteTimeouts</a>

---



