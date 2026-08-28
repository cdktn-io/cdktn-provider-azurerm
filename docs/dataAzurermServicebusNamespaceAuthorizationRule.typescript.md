# `dataAzurermServicebusNamespaceAuthorizationRule` Submodule <a name="`dataAzurermServicebusNamespaceAuthorizationRule` Submodule" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusNamespaceAuthorizationRule <a name="DataAzurermServicebusNamespaceAuthorizationRule" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule azurerm_servicebus_namespace_authorization_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.Initializer"></a>

```typescript
import { dataAzurermServicebusNamespaceAuthorizationRule } from '@cdktn/provider-azurerm'

new dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule(scope: Construct, id: string, config: DataAzurermServicebusNamespaceAuthorizationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig">DataAzurermServicebusNamespaceAuthorizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig">DataAzurermServicebusNamespaceAuthorizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermServicebusNamespaceAuthorizationRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts">DataAzurermServicebusNamespaceAuthorizationRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermServicebusNamespaceAuthorizationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isConstruct"></a>

```typescript
import { dataAzurermServicebusNamespaceAuthorizationRule } from '@cdktn/provider-azurerm'

dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isTerraformElement"></a>

```typescript
import { dataAzurermServicebusNamespaceAuthorizationRule } from '@cdktn/provider-azurerm'

dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isTerraformDataSource"></a>

```typescript
import { dataAzurermServicebusNamespaceAuthorizationRule } from '@cdktn/provider-azurerm'

dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.generateConfigForImport"></a>

```typescript
import { dataAzurermServicebusNamespaceAuthorizationRule } from '@cdktn/provider-azurerm'

dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermServicebusNamespaceAuthorizationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermServicebusNamespaceAuthorizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermServicebusNamespaceAuthorizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusNamespaceAuthorizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts">DataAzurermServicebusNamespaceAuthorizationRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.primaryConnectionStringAlias"></a>

```typescript
public readonly primaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.secondaryConnectionStringAlias"></a>

```typescript
public readonly secondaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference">DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermServicebusNamespaceAuthorizationRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts">DataAzurermServicebusNamespaceAuthorizationRuleTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusNamespaceAuthorizationRuleConfig <a name="DataAzurermServicebusNamespaceAuthorizationRuleConfig" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.Initializer"></a>

```typescript
import { dataAzurermServicebusNamespaceAuthorizationRule } from '@cdktn/provider-azurerm'

const dataAzurermServicebusNamespaceAuthorizationRuleConfig: dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#name DataAzurermServicebusNamespaceAuthorizationRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#namespace_id DataAzurermServicebusNamespaceAuthorizationRule#namespace_id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#id DataAzurermServicebusNamespaceAuthorizationRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts">DataAzurermServicebusNamespaceAuthorizationRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#name DataAzurermServicebusNamespaceAuthorizationRule#name}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#namespace_id DataAzurermServicebusNamespaceAuthorizationRule#namespace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#id DataAzurermServicebusNamespaceAuthorizationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusNamespaceAuthorizationRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts">DataAzurermServicebusNamespaceAuthorizationRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#timeouts DataAzurermServicebusNamespaceAuthorizationRule#timeouts}

---

### DataAzurermServicebusNamespaceAuthorizationRuleTimeouts <a name="DataAzurermServicebusNamespaceAuthorizationRuleTimeouts" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts.Initializer"></a>

```typescript
import { dataAzurermServicebusNamespaceAuthorizationRule } from '@cdktn/provider-azurerm'

const dataAzurermServicebusNamespaceAuthorizationRuleTimeouts: dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#read DataAzurermServicebusNamespaceAuthorizationRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/data-sources/servicebus_namespace_authorization_rule#read DataAzurermServicebusNamespaceAuthorizationRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference <a name="DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermServicebusNamespaceAuthorizationRule } from '@cdktn/provider-azurerm'

new dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts">DataAzurermServicebusNamespaceAuthorizationRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermServicebusNamespaceAuthorizationRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermServicebusNamespaceAuthorizationRule.DataAzurermServicebusNamespaceAuthorizationRuleTimeouts">DataAzurermServicebusNamespaceAuthorizationRuleTimeouts</a>

---



