# `vpnGatewayNatRule` Submodule <a name="`vpnGatewayNatRule` Submodule" id="@cdktn/provider-azurerm.vpnGatewayNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayNatRule <a name="VpnGatewayNatRule" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule azurerm_vpn_gateway_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

new vpnGatewayNatRule.VpnGatewayNatRule(scope: Construct, id: string, config: VpnGatewayNatRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig">VpnGatewayNatRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig">VpnGatewayNatRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping">putExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping">putInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalMapping">resetExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalMapping">resetInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetIpConfigurationId">resetIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalMapping` <a name="putExternalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping"></a>

```typescript
public putExternalMapping(value: IResolvable | VpnGatewayNatRuleExternalMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>[]

---

##### `putInternalMapping` <a name="putInternalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping"></a>

```typescript
public putInternalMapping(value: IResolvable | VpnGatewayNatRuleInternalMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnGatewayNatRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

---

##### `resetExternalMapping` <a name="resetExternalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalMapping"></a>

```typescript
public resetExternalMapping(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternalMapping` <a name="resetInternalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalMapping"></a>

```typescript
public resetInternalMapping(): void
```

##### `resetIpConfigurationId` <a name="resetIpConfigurationId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetIpConfigurationId"></a>

```typescript
public resetIpConfigurationId(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpnGatewayNatRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

vpnGatewayNatRule.VpnGatewayNatRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VpnGatewayNatRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnGatewayNatRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnGatewayNatRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpnGatewayNatRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMapping">externalMapping</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList">VpnGatewayNatRuleExternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMapping">internalMapping</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList">VpnGatewayNatRuleInternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference">VpnGatewayNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMappingInput">externalMappingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMappingInput">internalMappingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationIdInput">ipConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationId">ipConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `externalMapping`<sup>Required</sup> <a name="externalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMapping"></a>

```typescript
public readonly externalMapping: VpnGatewayNatRuleExternalMappingList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList">VpnGatewayNatRuleExternalMappingList</a>

---

##### `internalMapping`<sup>Required</sup> <a name="internalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMapping"></a>

```typescript
public readonly internalMapping: VpnGatewayNatRuleInternalMappingList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList">VpnGatewayNatRuleInternalMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeouts"></a>

```typescript
public readonly timeouts: VpnGatewayNatRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference">VpnGatewayNatRuleTimeoutsOutputReference</a>

---

##### `externalMappingInput`<sup>Optional</sup> <a name="externalMappingInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMappingInput"></a>

```typescript
public readonly externalMappingInput: IResolvable | VpnGatewayNatRuleExternalMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalMappingInput`<sup>Optional</sup> <a name="internalMappingInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMappingInput"></a>

```typescript
public readonly internalMappingInput: IResolvable | VpnGatewayNatRuleInternalMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>[]

---

##### `ipConfigurationIdInput`<sup>Optional</sup> <a name="ipConfigurationIdInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationIdInput"></a>

```typescript
public readonly ipConfigurationIdInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpnGatewayNatRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayIdInput"></a>

```typescript
public readonly vpnGatewayIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipConfigurationId`<sup>Required</sup> <a name="ipConfigurationId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationId"></a>

```typescript
public readonly ipConfigurationId: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayNatRuleConfig <a name="VpnGatewayNatRuleConfig" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

const vpnGatewayNatRuleConfig: vpnGatewayNatRule.VpnGatewayNatRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalMapping">externalMapping</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>[]</code> | external_mapping block. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalMapping">internalMapping</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>[]</code> | internal_mapping block. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.ipConfigurationId">ipConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}.

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.vpnGatewayId"></a>

```typescript
public readonly vpnGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}.

---

##### `externalMapping`<sup>Optional</sup> <a name="externalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalMapping"></a>

```typescript
public readonly externalMapping: IResolvable | VpnGatewayNatRuleExternalMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>[]

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#external_mapping VpnGatewayNatRule#external_mapping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalMapping`<sup>Optional</sup> <a name="internalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalMapping"></a>

```typescript
public readonly internalMapping: IResolvable | VpnGatewayNatRuleInternalMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>[]

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#internal_mapping VpnGatewayNatRule#internal_mapping}

---

##### `ipConfigurationId`<sup>Optional</sup> <a name="ipConfigurationId" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.ipConfigurationId"></a>

```typescript
public readonly ipConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpnGatewayNatRuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#timeouts VpnGatewayNatRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}.

---

### VpnGatewayNatRuleExternalMapping <a name="VpnGatewayNatRuleExternalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

const vpnGatewayNatRuleExternalMapping: vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.addressSpace">addressSpace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.portRange">portRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}. |

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.addressSpace"></a>

```typescript
public readonly addressSpace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}.

---

### VpnGatewayNatRuleInternalMapping <a name="VpnGatewayNatRuleInternalMapping" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

const vpnGatewayNatRuleInternalMapping: vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.addressSpace">addressSpace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.portRange">portRange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}. |

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.addressSpace"></a>

```typescript
public readonly addressSpace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}.

---

### VpnGatewayNatRuleTimeouts <a name="VpnGatewayNatRuleTimeouts" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

const vpnGatewayNatRuleTimeouts: vpnGatewayNatRule.VpnGatewayNatRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.81.0/docs/resources/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayNatRuleExternalMappingList <a name="VpnGatewayNatRuleExternalMappingList" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

new vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get"></a>

```typescript
public get(index: number): VpnGatewayNatRuleExternalMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayNatRuleExternalMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>[]

---


### VpnGatewayNatRuleExternalMappingOutputReference <a name="VpnGatewayNatRuleExternalMappingOutputReference" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

new vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortRange` <a name="resetPortRange" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput">addressSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpace">addressSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput"></a>

```typescript
public readonly addressSpaceInput: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpace"></a>

```typescript
public readonly addressSpace: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayNatRuleExternalMapping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>

---


### VpnGatewayNatRuleInternalMappingList <a name="VpnGatewayNatRuleInternalMappingList" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

new vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get"></a>

```typescript
public get(index: number): VpnGatewayNatRuleInternalMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayNatRuleInternalMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>[]

---


### VpnGatewayNatRuleInternalMappingOutputReference <a name="VpnGatewayNatRuleInternalMappingOutputReference" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

new vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortRange` <a name="resetPortRange" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput">addressSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpace">addressSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRange">portRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput"></a>

```typescript
public readonly addressSpaceInput: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: string;
```

- *Type:* string

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpace"></a>

```typescript
public readonly addressSpace: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRange"></a>

```typescript
public readonly portRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayNatRuleInternalMapping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>

---


### VpnGatewayNatRuleTimeoutsOutputReference <a name="VpnGatewayNatRuleTimeoutsOutputReference" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnGatewayNatRule } from '@cdktn/provider-azurerm'

new vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnGatewayNatRuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

---



