# `dataAzurermManagementGroupTemplateDeployment` Submodule <a name="`dataAzurermManagementGroupTemplateDeployment` Submodule" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermManagementGroupTemplateDeployment <a name="DataAzurermManagementGroupTemplateDeployment" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment azurerm_management_group_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer"></a>

```typescript
import { dataAzurermManagementGroupTemplateDeployment } from '@cdktn/provider-azurerm'

new dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment(scope: Construct, id: string, config: DataAzurermManagementGroupTemplateDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig">DataAzurermManagementGroupTemplateDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig">DataAzurermManagementGroupTemplateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermManagementGroupTemplateDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermManagementGroupTemplateDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct"></a>

```typescript
import { dataAzurermManagementGroupTemplateDeployment } from '@cdktn/provider-azurerm'

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement"></a>

```typescript
import { dataAzurermManagementGroupTemplateDeployment } from '@cdktn/provider-azurerm'

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource"></a>

```typescript
import { dataAzurermManagementGroupTemplateDeployment } from '@cdktn/provider-azurerm'

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.generateConfigForImport"></a>

```typescript
import { dataAzurermManagementGroupTemplateDeployment } from '@cdktn/provider-azurerm'

dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermManagementGroupTemplateDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermManagementGroupTemplateDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermManagementGroupTemplateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermManagementGroupTemplateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.outputContent">outputContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference">DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupIdInput">managementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `outputContent`<sup>Required</sup> <a name="outputContent" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.outputContent"></a>

```typescript
public readonly outputContent: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference">DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managementGroupIdInput`<sup>Optional</sup> <a name="managementGroupIdInput" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupIdInput"></a>

```typescript
public readonly managementGroupIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermManagementGroupTemplateDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermManagementGroupTemplateDeploymentConfig <a name="DataAzurermManagementGroupTemplateDeploymentConfig" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.Initializer"></a>

```typescript
import { dataAzurermManagementGroupTemplateDeployment } from '@cdktn/provider-azurerm'

const dataAzurermManagementGroupTemplateDeploymentConfig: dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.managementGroupId">managementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `managementGroupId`<sup>Required</sup> <a name="managementGroupId" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.managementGroupId"></a>

```typescript
public readonly managementGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#management_group_id DataAzurermManagementGroupTemplateDeployment#management_group_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#name DataAzurermManagementGroupTemplateDeployment#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#id DataAzurermManagementGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermManagementGroupTemplateDeploymentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#timeouts DataAzurermManagementGroupTemplateDeployment#timeouts}

---

### DataAzurermManagementGroupTemplateDeploymentTimeouts <a name="DataAzurermManagementGroupTemplateDeploymentTimeouts" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.Initializer"></a>

```typescript
import { dataAzurermManagementGroupTemplateDeployment } from '@cdktn/provider-azurerm'

const dataAzurermManagementGroupTemplateDeploymentTimeouts: dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#read DataAzurermManagementGroupTemplateDeployment#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.78.0/docs/data-sources/management_group_template_deployment#read DataAzurermManagementGroupTemplateDeployment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference <a name="DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermManagementGroupTemplateDeployment } from '@cdktn/provider-azurerm'

new dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermManagementGroupTemplateDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermManagementGroupTemplateDeployment.DataAzurermManagementGroupTemplateDeploymentTimeouts">DataAzurermManagementGroupTemplateDeploymentTimeouts</a>

---



