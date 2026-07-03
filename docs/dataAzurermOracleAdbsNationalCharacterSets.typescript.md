# `dataAzurermOracleAdbsNationalCharacterSets` Submodule <a name="`dataAzurermOracleAdbsNationalCharacterSets` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAdbsNationalCharacterSets <a name="DataAzurermOracleAdbsNationalCharacterSets" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets azurerm_oracle_adbs_national_character_sets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

new dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets(scope: Construct, id: string, config: DataAzurermOracleAdbsNationalCharacterSetsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig">DataAzurermOracleAdbsNationalCharacterSetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig">DataAzurermOracleAdbsNationalCharacterSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermOracleAdbsNationalCharacterSetsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleAdbsNationalCharacterSets resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermOracleAdbsNationalCharacterSets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAdbsNationalCharacterSets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAdbsNationalCharacterSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAdbsNationalCharacterSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.characterSets">characterSets</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList">DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference">DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.location">location</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `characterSets`<sup>Required</sup> <a name="characterSets" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.characterSets"></a>

```typescript
public readonly characterSets: DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList">DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference">DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermOracleAdbsNationalCharacterSetsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAdbsNationalCharacterSetsCharacterSets <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSets" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets.Initializer"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

const dataAzurermOracleAdbsNationalCharacterSetsCharacterSets: dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets = { ... }
```


### DataAzurermOracleAdbsNationalCharacterSetsConfig <a name="DataAzurermOracleAdbsNationalCharacterSetsConfig" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.Initializer"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

const dataAzurermOracleAdbsNationalCharacterSetsConfig: dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets#location DataAzurermOracleAdbsNationalCharacterSets#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets#id DataAzurermOracleAdbsNationalCharacterSets#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets#location DataAzurermOracleAdbsNationalCharacterSets#location}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets#id DataAzurermOracleAdbsNationalCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleAdbsNationalCharacterSetsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets#timeouts DataAzurermOracleAdbsNationalCharacterSets#timeouts}

---

### DataAzurermOracleAdbsNationalCharacterSetsTimeouts <a name="DataAzurermOracleAdbsNationalCharacterSetsTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.Initializer"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

const dataAzurermOracleAdbsNationalCharacterSetsTimeouts: dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets#read DataAzurermOracleAdbsNationalCharacterSets#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/oracle_adbs_national_character_sets#read DataAzurermOracleAdbsNationalCharacterSets#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

new dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get"></a>

```typescript
public get(index: number): DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference <a name="DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

new dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets">DataAzurermOracleAdbsNationalCharacterSetsCharacterSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermOracleAdbsNationalCharacterSetsCharacterSets;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsCharacterSets">DataAzurermOracleAdbsNationalCharacterSetsCharacterSets</a>

---


### DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference <a name="DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleAdbsNationalCharacterSets } from '@cdktn/provider-azurerm'

new dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermOracleAdbsNationalCharacterSetsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleAdbsNationalCharacterSets.DataAzurermOracleAdbsNationalCharacterSetsTimeouts">DataAzurermOracleAdbsNationalCharacterSetsTimeouts</a>

---



