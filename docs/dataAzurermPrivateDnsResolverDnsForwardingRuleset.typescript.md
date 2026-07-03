# `dataAzurermPrivateDnsResolverDnsForwardingRuleset` Submodule <a name="`dataAzurermPrivateDnsResolverDnsForwardingRuleset` Submodule" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverDnsForwardingRuleset <a name="DataAzurermPrivateDnsResolverDnsForwardingRuleset" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset azurerm_private_dns_resolver_dns_forwarding_ruleset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverDnsForwardingRuleset } from '@cdktn/provider-azurerm'

new dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset(scope: Construct, id: string, config: DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig">DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig">DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAzurermPrivateDnsResolverDnsForwardingRuleset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isConstruct"></a>

```typescript
import { dataAzurermPrivateDnsResolverDnsForwardingRuleset } from '@cdktn/provider-azurerm'

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformElement"></a>

```typescript
import { dataAzurermPrivateDnsResolverDnsForwardingRuleset } from '@cdktn/provider-azurerm'

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformDataSource"></a>

```typescript
import { dataAzurermPrivateDnsResolverDnsForwardingRuleset } from '@cdktn/provider-azurerm'

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport"></a>

```typescript
import { dataAzurermPrivateDnsResolverDnsForwardingRuleset } from '@cdktn/provider-azurerm'

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAzurermPrivateDnsResolverDnsForwardingRuleset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermPrivateDnsResolverDnsForwardingRuleset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermPrivateDnsResolverDnsForwardingRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsResolverDnsForwardingRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds">privateDnsResolverOutboundEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `privateDnsResolverOutboundEndpointIds`<sup>Required</sup> <a name="privateDnsResolverOutboundEndpointIds" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds"></a>

```typescript
public readonly privateDnsResolverOutboundEndpointIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig <a name="DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverDnsForwardingRuleset } from '@cdktn/provider-azurerm'

const dataAzurermPrivateDnsResolverDnsForwardingRulesetConfig: dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#name DataAzurermPrivateDnsResolverDnsForwardingRuleset#name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name DataAzurermPrivateDnsResolverDnsForwardingRuleset#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#id DataAzurermPrivateDnsResolverDnsForwardingRuleset#id}. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#name DataAzurermPrivateDnsResolverDnsForwardingRuleset#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name DataAzurermPrivateDnsResolverDnsForwardingRuleset#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#id DataAzurermPrivateDnsResolverDnsForwardingRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#timeouts DataAzurermPrivateDnsResolverDnsForwardingRuleset#timeouts}

---

### DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts <a name="DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverDnsForwardingRuleset } from '@cdktn/provider-azurerm'

const dataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts: dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#read DataAzurermPrivateDnsResolverDnsForwardingRuleset#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.80.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#read DataAzurermPrivateDnsResolverDnsForwardingRuleset#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermPrivateDnsResolverDnsForwardingRuleset } from '@cdktn/provider-azurerm'

new dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---



