# `dataAzurermOracleDatabaseSystemVersions` Submodule <a name="`dataAzurermOracleDatabaseSystemVersions` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleDatabaseSystemVersions <a name="DataAzurermOracleDatabaseSystemVersions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions azurerm_oracle_database_system_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

new dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions(scope: Construct, id: string, config: DataAzurermOracleDatabaseSystemVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig">DataAzurermOracleDatabaseSystemVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig">DataAzurermOracleDatabaseSystemVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSoftwareImageSupported">resetDatabaseSoftwareImageSupported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSystemShape">resetDatabaseSystemShape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetShapeFamily">resetShapeFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetStorageManagement">resetStorageManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetUpgradeSupported">resetUpgradeSupported</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermOracleDatabaseSystemVersionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---

##### `resetDatabaseSoftwareImageSupported` <a name="resetDatabaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSoftwareImageSupported"></a>

```typescript
public resetDatabaseSoftwareImageSupported(): void
```

##### `resetDatabaseSystemShape` <a name="resetDatabaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetDatabaseSystemShape"></a>

```typescript
public resetDatabaseSystemShape(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetShapeFamily` <a name="resetShapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetShapeFamily"></a>

```typescript
public resetShapeFamily(): void
```

##### `resetStorageManagement` <a name="resetStorageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetStorageManagement"></a>

```typescript
public resetStorageManagement(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpgradeSupported` <a name="resetUpgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.resetUpgradeSupported"></a>

```typescript
public resetUpgradeSupported(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermOracleDatabaseSystemVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleDatabaseSystemVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleDatabaseSystemVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleDatabaseSystemVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference">DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList">DataAzurermOracleDatabaseSystemVersionsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupportedInput">databaseSoftwareImageSupportedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShapeInput">databaseSystemShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamilyInput">shapeFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagementInput">storageManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupportedInput">upgradeSupportedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupported">databaseSoftwareImageSupported</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShape">databaseSystemShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamily">shapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagement">storageManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupported">upgradeSupported</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference">DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference</a>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.versions"></a>

```typescript
public readonly versions: DataAzurermOracleDatabaseSystemVersionsVersionsList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList">DataAzurermOracleDatabaseSystemVersionsVersionsList</a>

---

##### `databaseSoftwareImageSupportedInput`<sup>Optional</sup> <a name="databaseSoftwareImageSupportedInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupportedInput"></a>

```typescript
public readonly databaseSoftwareImageSupportedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseSystemShapeInput`<sup>Optional</sup> <a name="databaseSystemShapeInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShapeInput"></a>

```typescript
public readonly databaseSystemShapeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `shapeFamilyInput`<sup>Optional</sup> <a name="shapeFamilyInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamilyInput"></a>

```typescript
public readonly shapeFamilyInput: string;
```

- *Type:* string

---

##### `storageManagementInput`<sup>Optional</sup> <a name="storageManagementInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagementInput"></a>

```typescript
public readonly storageManagementInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermOracleDatabaseSystemVersionsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---

##### `upgradeSupportedInput`<sup>Optional</sup> <a name="upgradeSupportedInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupportedInput"></a>

```typescript
public readonly upgradeSupportedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseSoftwareImageSupported`<sup>Required</sup> <a name="databaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSoftwareImageSupported"></a>

```typescript
public readonly databaseSoftwareImageSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseSystemShape`<sup>Required</sup> <a name="databaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.databaseSystemShape"></a>

```typescript
public readonly databaseSystemShape: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `shapeFamily`<sup>Required</sup> <a name="shapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.shapeFamily"></a>

```typescript
public readonly shapeFamily: string;
```

- *Type:* string

---

##### `storageManagement`<sup>Required</sup> <a name="storageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.storageManagement"></a>

```typescript
public readonly storageManagement: string;
```

- *Type:* string

---

##### `upgradeSupported`<sup>Required</sup> <a name="upgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.upgradeSupported"></a>

```typescript
public readonly upgradeSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleDatabaseSystemVersionsConfig <a name="DataAzurermOracleDatabaseSystemVersionsConfig" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.Initializer"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

const dataAzurermOracleDatabaseSystemVersionsConfig: dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSoftwareImageSupported">databaseSoftwareImageSupported</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSystemShape">databaseSystemShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.shapeFamily">shapeFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.storageManagement">storageManagement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.upgradeSupported">upgradeSupported</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#location DataAzurermOracleDatabaseSystemVersions#location}.

---

##### `databaseSoftwareImageSupported`<sup>Optional</sup> <a name="databaseSoftwareImageSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSoftwareImageSupported"></a>

```typescript
public readonly databaseSoftwareImageSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#database_software_image_supported DataAzurermOracleDatabaseSystemVersions#database_software_image_supported}.

---

##### `databaseSystemShape`<sup>Optional</sup> <a name="databaseSystemShape" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.databaseSystemShape"></a>

```typescript
public readonly databaseSystemShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#database_system_shape DataAzurermOracleDatabaseSystemVersions#database_system_shape}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#id DataAzurermOracleDatabaseSystemVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shapeFamily`<sup>Optional</sup> <a name="shapeFamily" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.shapeFamily"></a>

```typescript
public readonly shapeFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#shape_family DataAzurermOracleDatabaseSystemVersions#shape_family}.

---

##### `storageManagement`<sup>Optional</sup> <a name="storageManagement" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.storageManagement"></a>

```typescript
public readonly storageManagement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#storage_management DataAzurermOracleDatabaseSystemVersions#storage_management}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleDatabaseSystemVersionsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#timeouts DataAzurermOracleDatabaseSystemVersions#timeouts}

---

##### `upgradeSupported`<sup>Optional</sup> <a name="upgradeSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsConfig.property.upgradeSupported"></a>

```typescript
public readonly upgradeSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#upgrade_supported DataAzurermOracleDatabaseSystemVersions#upgrade_supported}.

---

### DataAzurermOracleDatabaseSystemVersionsTimeouts <a name="DataAzurermOracleDatabaseSystemVersionsTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.Initializer"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

const dataAzurermOracleDatabaseSystemVersionsTimeouts: dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.77.0/docs/data-sources/oracle_database_system_versions#read DataAzurermOracleDatabaseSystemVersions#read}.

---

### DataAzurermOracleDatabaseSystemVersionsVersions <a name="DataAzurermOracleDatabaseSystemVersionsVersions" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions.Initializer"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

const dataAzurermOracleDatabaseSystemVersionsVersions: dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference <a name="DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

new dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermOracleDatabaseSystemVersionsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsTimeouts">DataAzurermOracleDatabaseSystemVersionsTimeouts</a>

---


### DataAzurermOracleDatabaseSystemVersionsVersionsList <a name="DataAzurermOracleDatabaseSystemVersionsVersionsList" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

new dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get"></a>

```typescript
public get(index: number): DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference <a name="DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleDatabaseSystemVersions } from '@cdktn/provider-azurerm'

new dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.latestVersion">latestVersion</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.pluggableDatabaseSupported">pluggableDatabaseSupported</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions">DataAzurermOracleDatabaseSystemVersionsVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.latestVersion"></a>

```typescript
public readonly latestVersion: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pluggableDatabaseSupported`<sup>Required</sup> <a name="pluggableDatabaseSupported" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.pluggableDatabaseSupported"></a>

```typescript
public readonly pluggableDatabaseSupported: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermOracleDatabaseSystemVersionsVersions;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleDatabaseSystemVersions.DataAzurermOracleDatabaseSystemVersionsVersions">DataAzurermOracleDatabaseSystemVersionsVersions</a>

---



