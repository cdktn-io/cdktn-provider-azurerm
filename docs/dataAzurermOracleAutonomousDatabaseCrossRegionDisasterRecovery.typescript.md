# `dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery` Submodule <a name="`dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery` Submodule" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery <a name="DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery azurerm_oracle_autonomous_database_cross_region_disaster_recovery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery } from '@cdktn/provider-azurerm'

new dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery(scope: Construct, id: string, config: DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery } from '@cdktn/provider-azurerm'

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery } from '@cdktn/provider-azurerm'

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformDataSource"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery } from '@cdktn/provider-azurerm'

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery } from '@cdktn/provider-azurerm'

dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.actualUsedDataStorageSizeInTb">actualUsedDataStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.allocatedStorageSizeInTb">allocatedStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingForStorageEnabled">autoScalingForStorageEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.customerContacts">customerContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseVersion">databaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseWorkload">databaseWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInTb">dataStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.failedDataRecoveryInSeconds">failedDataRecoveryInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.inMemoryAreaInGb">inMemoryAreaInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.localAdgAutoFailoverMaximumDataLossLimitInSeconds">localAdgAutoFailoverMaximumDataLossLimitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.localDataGuardEnabled">localDataGuardEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.memoryPerOracleComputeUnitInGb">memoryPerOracleComputeUnitInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.mtlsConnectionRequired">mtlsConnectionRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nationalCharacterSet">nationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nextLongTermBackupTimestampInUtc">nextLongTermBackupTimestampInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.peerDatabaseIds">peerDatabaseIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.preview">preview</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.previewVersionWithServiceTermsAccepted">previewVersionWithServiceTermsAccepted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointUrl">privateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provisionableCpus">provisionableCpus</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDataGuardEnabled">remoteDataGuardEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabled">replicateAutomaticBackupsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.serviceConsoleUrl">serviceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseId">sourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceOcid">sourceOcid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sqlWebDeveloperUrl">sqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeCreatedInUtc">timeCreatedInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeDataGuardRoleChangedInUtc">timeDataGuardRoleChangedInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeDeletionOfFreeAutonomousDatabaseInUtc">timeDeletionOfFreeAutonomousDatabaseInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeLocalDataGuardEnabledInUtc">timeLocalDataGuardEnabledInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeMaintenanceBeginInUtc">timeMaintenanceBeginInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeMaintenanceEndInUtc">timeMaintenanceEndInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastFailoverInUtc">timeOfLastFailoverInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastRefreshInUtc">timeOfLastRefreshInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastRefreshPointInUtc">timeOfLastRefreshPointInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastSwitchoverInUtc">timeOfLastSwitchoverInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeReclamationOfFreeAutonomousDatabaseInUtc">timeReclamationOfFreeAutonomousDatabaseInUtc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.usedDataStorageSizeInGb">usedDataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.usedDataStorageSizeInTb">usedDataStorageSizeInTb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `actualUsedDataStorageSizeInTb`<sup>Required</sup> <a name="actualUsedDataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.actualUsedDataStorageSizeInTb"></a>

```typescript
public readonly actualUsedDataStorageSizeInTb: number;
```

- *Type:* number

---

##### `allocatedStorageSizeInTb`<sup>Required</sup> <a name="allocatedStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.allocatedStorageSizeInTb"></a>

```typescript
public readonly allocatedStorageSizeInTb: number;
```

- *Type:* number

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingEnabled"></a>

```typescript
public readonly autoScalingEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoScalingForStorageEnabled`<sup>Required</sup> <a name="autoScalingForStorageEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.autoScalingForStorageEnabled"></a>

```typescript
public readonly autoScalingForStorageEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.availableUpgradeVersions"></a>

```typescript
public readonly availableUpgradeVersions: string[];
```

- *Type:* string[]

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.customerContacts"></a>

```typescript
public readonly customerContacts: string[];
```

- *Type:* string[]

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `databaseVersion`<sup>Required</sup> <a name="databaseVersion" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseVersion"></a>

```typescript
public readonly databaseVersion: string;
```

- *Type:* string

---

##### `databaseWorkload`<sup>Required</sup> <a name="databaseWorkload" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.databaseWorkload"></a>

```typescript
public readonly databaseWorkload: string;
```

- *Type:* string

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeInTb`<sup>Required</sup> <a name="dataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.dataStorageSizeInTb"></a>

```typescript
public readonly dataStorageSizeInTb: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `failedDataRecoveryInSeconds`<sup>Required</sup> <a name="failedDataRecoveryInSeconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.failedDataRecoveryInSeconds"></a>

```typescript
public readonly failedDataRecoveryInSeconds: number;
```

- *Type:* number

---

##### `inMemoryAreaInGb`<sup>Required</sup> <a name="inMemoryAreaInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.inMemoryAreaInGb"></a>

```typescript
public readonly inMemoryAreaInGb: number;
```

- *Type:* number

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaximumDataLossLimitInSeconds`<sup>Required</sup> <a name="localAdgAutoFailoverMaximumDataLossLimitInSeconds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.localAdgAutoFailoverMaximumDataLossLimitInSeconds"></a>

```typescript
public readonly localAdgAutoFailoverMaximumDataLossLimitInSeconds: number;
```

- *Type:* number

---

##### `localDataGuardEnabled`<sup>Required</sup> <a name="localDataGuardEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.localDataGuardEnabled"></a>

```typescript
public readonly localDataGuardEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `memoryPerOracleComputeUnitInGb`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.memoryPerOracleComputeUnitInGb"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGb: number;
```

- *Type:* number

---

##### `mtlsConnectionRequired`<sup>Required</sup> <a name="mtlsConnectionRequired" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.mtlsConnectionRequired"></a>

```typescript
public readonly mtlsConnectionRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nationalCharacterSet`<sup>Required</sup> <a name="nationalCharacterSet" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nationalCharacterSet"></a>

```typescript
public readonly nationalCharacterSet: string;
```

- *Type:* string

---

##### `nextLongTermBackupTimestampInUtc`<sup>Required</sup> <a name="nextLongTermBackupTimestampInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nextLongTermBackupTimestampInUtc"></a>

```typescript
public readonly nextLongTermBackupTimestampInUtc: string;
```

- *Type:* string

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `peerDatabaseIds`<sup>Required</sup> <a name="peerDatabaseIds" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.peerDatabaseIds"></a>

```typescript
public readonly peerDatabaseIds: string[];
```

- *Type:* string[]

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.preview"></a>

```typescript
public readonly preview: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `previewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="previewVersionWithServiceTermsAccepted" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.previewVersionWithServiceTermsAccepted"></a>

```typescript
public readonly previewVersionWithServiceTermsAccepted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

---

##### `privateEndpointUrl`<sup>Required</sup> <a name="privateEndpointUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.privateEndpointUrl"></a>

```typescript
public readonly privateEndpointUrl: string;
```

- *Type:* string

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.provisionableCpus"></a>

```typescript
public readonly provisionableCpus: number[];
```

- *Type:* number[]

---

##### `remoteDataGuardEnabled`<sup>Required</sup> <a name="remoteDataGuardEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDataGuardEnabled"></a>

```typescript
public readonly remoteDataGuardEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `remoteDisasterRecoveryType`<sup>Required</sup> <a name="remoteDisasterRecoveryType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.remoteDisasterRecoveryType"></a>

```typescript
public readonly remoteDisasterRecoveryType: string;
```

- *Type:* string

---

##### `replicateAutomaticBackupsEnabled`<sup>Required</sup> <a name="replicateAutomaticBackupsEnabled" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.replicateAutomaticBackupsEnabled"></a>

```typescript
public readonly replicateAutomaticBackupsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serviceConsoleUrl`<sup>Required</sup> <a name="serviceConsoleUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.serviceConsoleUrl"></a>

```typescript
public readonly serviceConsoleUrl: string;
```

- *Type:* string

---

##### `sourceAutonomousDatabaseId`<sup>Required</sup> <a name="sourceAutonomousDatabaseId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceAutonomousDatabaseId"></a>

```typescript
public readonly sourceAutonomousDatabaseId: string;
```

- *Type:* string

---

##### `sourceLocation`<sup>Required</sup> <a name="sourceLocation" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

---

##### `sourceOcid`<sup>Required</sup> <a name="sourceOcid" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceOcid"></a>

```typescript
public readonly sourceOcid: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `sqlWebDeveloperUrl`<sup>Required</sup> <a name="sqlWebDeveloperUrl" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.sqlWebDeveloperUrl"></a>

```typescript
public readonly sqlWebDeveloperUrl: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeCreatedInUtc`<sup>Required</sup> <a name="timeCreatedInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeCreatedInUtc"></a>

```typescript
public readonly timeCreatedInUtc: string;
```

- *Type:* string

---

##### `timeDataGuardRoleChangedInUtc`<sup>Required</sup> <a name="timeDataGuardRoleChangedInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeDataGuardRoleChangedInUtc"></a>

```typescript
public readonly timeDataGuardRoleChangedInUtc: string;
```

- *Type:* string

---

##### `timeDeletionOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="timeDeletionOfFreeAutonomousDatabaseInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeDeletionOfFreeAutonomousDatabaseInUtc"></a>

```typescript
public readonly timeDeletionOfFreeAutonomousDatabaseInUtc: string;
```

- *Type:* string

---

##### `timeLocalDataGuardEnabledInUtc`<sup>Required</sup> <a name="timeLocalDataGuardEnabledInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeLocalDataGuardEnabledInUtc"></a>

```typescript
public readonly timeLocalDataGuardEnabledInUtc: string;
```

- *Type:* string

---

##### `timeMaintenanceBeginInUtc`<sup>Required</sup> <a name="timeMaintenanceBeginInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeMaintenanceBeginInUtc"></a>

```typescript
public readonly timeMaintenanceBeginInUtc: string;
```

- *Type:* string

---

##### `timeMaintenanceEndInUtc`<sup>Required</sup> <a name="timeMaintenanceEndInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeMaintenanceEndInUtc"></a>

```typescript
public readonly timeMaintenanceEndInUtc: string;
```

- *Type:* string

---

##### `timeOfLastFailoverInUtc`<sup>Required</sup> <a name="timeOfLastFailoverInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastFailoverInUtc"></a>

```typescript
public readonly timeOfLastFailoverInUtc: string;
```

- *Type:* string

---

##### `timeOfLastRefreshInUtc`<sup>Required</sup> <a name="timeOfLastRefreshInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastRefreshInUtc"></a>

```typescript
public readonly timeOfLastRefreshInUtc: string;
```

- *Type:* string

---

##### `timeOfLastRefreshPointInUtc`<sup>Required</sup> <a name="timeOfLastRefreshPointInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastRefreshPointInUtc"></a>

```typescript
public readonly timeOfLastRefreshPointInUtc: string;
```

- *Type:* string

---

##### `timeOfLastSwitchoverInUtc`<sup>Required</sup> <a name="timeOfLastSwitchoverInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeOfLastSwitchoverInUtc"></a>

```typescript
public readonly timeOfLastSwitchoverInUtc: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference</a>

---

##### `timeReclamationOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="timeReclamationOfFreeAutonomousDatabaseInUtc" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeReclamationOfFreeAutonomousDatabaseInUtc"></a>

```typescript
public readonly timeReclamationOfFreeAutonomousDatabaseInUtc: string;
```

- *Type:* string

---

##### `usedDataStorageSizeInGb`<sup>Required</sup> <a name="usedDataStorageSizeInGb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.usedDataStorageSizeInGb"></a>

```typescript
public readonly usedDataStorageSizeInGb: number;
```

- *Type:* number

---

##### `usedDataStorageSizeInTb`<sup>Required</sup> <a name="usedDataStorageSizeInTb" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.usedDataStorageSizeInTb"></a>

```typescript
public readonly usedDataStorageSizeInTb: number;
```

- *Type:* number

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig <a name="DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery } from '@cdktn/provider-azurerm'

const dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig: dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#id DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#resource_group_name DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#id DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#timeouts DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#timeouts}

---

### DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts <a name="DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery } from '@cdktn/provider-azurerm'

const dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts: dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#read DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.9.0/docs/data-sources/oracle_autonomous_database_cross_region_disaster_recovery#read DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery } from '@cdktn/provider-azurerm'

new dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecovery.DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts">DataAzurermOracleAutonomousDatabaseCrossRegionDisasterRecoveryTimeouts</a>

---



