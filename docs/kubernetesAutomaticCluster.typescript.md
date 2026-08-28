# `kubernetesAutomaticCluster` Submodule <a name="`kubernetesAutomaticCluster` Submodule" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAutomaticCluster <a name="KubernetesAutomaticCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster azurerm_kubernetes_automatic_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticCluster(scope: Construct, id: string, config: KubernetesAutomaticClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig">KubernetesAutomaticClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig">KubernetesAutomaticClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess">putApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem">putHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster">putPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh">putServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress">putWebAppRoutingIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetApiServerAccess">resetApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetHostedSystem">resetHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetPrivateCluster">resetPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetServiceMesh">resetServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetWebAppRoutingIngress">resetWebAppRoutingIngress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiServerAccess` <a name="putApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess"></a>

```typescript
public putApiServerAccess(value: KubernetesAutomaticClusterApiServerAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putApiServerAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---

##### `putHostedSystem` <a name="putHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem"></a>

```typescript
public putHostedSystem(value: KubernetesAutomaticClusterHostedSystem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putHostedSystem.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity"></a>

```typescript
public putIdentity(value: KubernetesAutomaticClusterIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---

##### `putPrivateCluster` <a name="putPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster"></a>

```typescript
public putPrivateCluster(value: KubernetesAutomaticClusterPrivateCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putPrivateCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---

##### `putServiceMesh` <a name="putServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh"></a>

```typescript
public putServiceMesh(value: KubernetesAutomaticClusterServiceMesh): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putServiceMesh.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: KubernetesAutomaticClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

---

##### `putWebAppRoutingIngress` <a name="putWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress"></a>

```typescript
public putWebAppRoutingIngress(value: KubernetesAutomaticClusterWebAppRoutingIngress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.putWebAppRoutingIngress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---

##### `resetApiServerAccess` <a name="resetApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetApiServerAccess"></a>

```typescript
public resetApiServerAccess(): void
```

##### `resetHostedSystem` <a name="resetHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetHostedSystem"></a>

```typescript
public resetHostedSystem(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateCluster` <a name="resetPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetPrivateCluster"></a>

```typescript
public resetPrivateCluster(): void
```

##### `resetServiceMesh` <a name="resetServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetServiceMesh"></a>

```typescript
public resetServiceMesh(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWebAppRoutingIngress` <a name="resetWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.resetWebAppRoutingIngress"></a>

```typescript
public resetWebAppRoutingIngress(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KubernetesAutomaticCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesAutomaticCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesAutomaticCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesAutomaticCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccess">apiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference">KubernetesAutomaticClusterApiServerAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.currentKubernetesVersion">currentKubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fullyQualifiedDomainName">fullyQualifiedDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystem">hostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference">KubernetesAutomaticClusterHostedSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference">KubernetesAutomaticClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfig">kubeConfig</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList">KubernetesAutomaticClusterKubeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfigRaw">kubeConfigRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nodeResourceGroupId">nodeResourceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.oidcIssuerUrl">oidcIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.portalFullyQualifiedDomainName">portalFullyQualifiedDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateCluster">privateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference">KubernetesAutomaticClusterPrivateClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateFullyQualifiedDomainName">privateFullyQualifiedDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMesh">serviceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference">KubernetesAutomaticClusterServiceMeshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference">KubernetesAutomaticClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngress">webAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference">KubernetesAutomaticClusterWebAppRoutingIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccessInput">apiServerAccessInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystemInput">hostedSystemInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identityInput">identityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateClusterInput">privateClusterInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMeshInput">serviceMeshInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngressInput">webAppRoutingIngressInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiServerAccess`<sup>Required</sup> <a name="apiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccess"></a>

```typescript
public readonly apiServerAccess: KubernetesAutomaticClusterApiServerAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference">KubernetesAutomaticClusterApiServerAccessOutputReference</a>

---

##### `currentKubernetesVersion`<sup>Required</sup> <a name="currentKubernetesVersion" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.currentKubernetesVersion"></a>

```typescript
public readonly currentKubernetesVersion: string;
```

- *Type:* string

---

##### `fullyQualifiedDomainName`<sup>Required</sup> <a name="fullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.fullyQualifiedDomainName"></a>

```typescript
public readonly fullyQualifiedDomainName: string;
```

- *Type:* string

---

##### `hostedSystem`<sup>Required</sup> <a name="hostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystem"></a>

```typescript
public readonly hostedSystem: KubernetesAutomaticClusterHostedSystemOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference">KubernetesAutomaticClusterHostedSystemOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identity"></a>

```typescript
public readonly identity: KubernetesAutomaticClusterIdentityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference">KubernetesAutomaticClusterIdentityOutputReference</a>

---

##### `kubeConfig`<sup>Required</sup> <a name="kubeConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfig"></a>

```typescript
public readonly kubeConfig: KubernetesAutomaticClusterKubeConfigList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList">KubernetesAutomaticClusterKubeConfigList</a>

---

##### `kubeConfigRaw`<sup>Required</sup> <a name="kubeConfigRaw" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.kubeConfigRaw"></a>

```typescript
public readonly kubeConfigRaw: string;
```

- *Type:* string

---

##### `nodeResourceGroupId`<sup>Required</sup> <a name="nodeResourceGroupId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nodeResourceGroupId"></a>

```typescript
public readonly nodeResourceGroupId: string;
```

- *Type:* string

---

##### `oidcIssuerUrl`<sup>Required</sup> <a name="oidcIssuerUrl" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.oidcIssuerUrl"></a>

```typescript
public readonly oidcIssuerUrl: string;
```

- *Type:* string

---

##### `portalFullyQualifiedDomainName`<sup>Required</sup> <a name="portalFullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.portalFullyQualifiedDomainName"></a>

```typescript
public readonly portalFullyQualifiedDomainName: string;
```

- *Type:* string

---

##### `privateCluster`<sup>Required</sup> <a name="privateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateCluster"></a>

```typescript
public readonly privateCluster: KubernetesAutomaticClusterPrivateClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference">KubernetesAutomaticClusterPrivateClusterOutputReference</a>

---

##### `privateFullyQualifiedDomainName`<sup>Required</sup> <a name="privateFullyQualifiedDomainName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateFullyQualifiedDomainName"></a>

```typescript
public readonly privateFullyQualifiedDomainName: string;
```

- *Type:* string

---

##### `serviceMesh`<sup>Required</sup> <a name="serviceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMesh"></a>

```typescript
public readonly serviceMesh: KubernetesAutomaticClusterServiceMeshOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference">KubernetesAutomaticClusterServiceMeshOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesAutomaticClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference">KubernetesAutomaticClusterTimeoutsOutputReference</a>

---

##### `webAppRoutingIngress`<sup>Required</sup> <a name="webAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngress"></a>

```typescript
public readonly webAppRoutingIngress: KubernetesAutomaticClusterWebAppRoutingIngressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference">KubernetesAutomaticClusterWebAppRoutingIngressOutputReference</a>

---

##### `apiServerAccessInput`<sup>Optional</sup> <a name="apiServerAccessInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.apiServerAccessInput"></a>

```typescript
public readonly apiServerAccessInput: KubernetesAutomaticClusterApiServerAccess;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---

##### `hostedSystemInput`<sup>Optional</sup> <a name="hostedSystemInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.hostedSystemInput"></a>

```typescript
public readonly hostedSystemInput: KubernetesAutomaticClusterHostedSystem;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.identityInput"></a>

```typescript
public readonly identityInput: KubernetesAutomaticClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateClusterInput`<sup>Optional</sup> <a name="privateClusterInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.privateClusterInput"></a>

```typescript
public readonly privateClusterInput: KubernetesAutomaticClusterPrivateCluster;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `serviceMeshInput`<sup>Optional</sup> <a name="serviceMeshInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.serviceMeshInput"></a>

```typescript
public readonly serviceMeshInput: KubernetesAutomaticClusterServiceMesh;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | KubernetesAutomaticClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

---

##### `webAppRoutingIngressInput`<sup>Optional</sup> <a name="webAppRoutingIngressInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.webAppRoutingIngressInput"></a>

```typescript
public readonly webAppRoutingIngressInput: KubernetesAutomaticClusterWebAppRoutingIngress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAutomaticClusterApiServerAccess <a name="KubernetesAutomaticClusterApiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterApiServerAccess: kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.authorizedIpRanges">authorizedIpRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#authorized_ip_ranges KubernetesAutomaticCluster#authorized_ip_ranges}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#subnet_id KubernetesAutomaticCluster#subnet_id}. |

---

##### `authorizedIpRanges`<sup>Optional</sup> <a name="authorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.authorizedIpRanges"></a>

```typescript
public readonly authorizedIpRanges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#authorized_ip_ranges KubernetesAutomaticCluster#authorized_ip_ranges}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#subnet_id KubernetesAutomaticCluster#subnet_id}.

---

### KubernetesAutomaticClusterConfig <a name="KubernetesAutomaticClusterConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterConfig: kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.apiServerAccess">apiServerAccess</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | api_server_access block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.hostedSystem">hostedSystem</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | hosted_system block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.privateCluster">privateCluster</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | private_cluster block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.serviceMesh">serviceMesh</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | service_mesh block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.webAppRoutingIngress">webAppRoutingIngress</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | web_app_routing_ingress block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.identity"></a>

```typescript
public readonly identity: KubernetesAutomaticClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#identity KubernetesAutomaticCluster#identity}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#location KubernetesAutomaticCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#name KubernetesAutomaticCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#resource_group_name KubernetesAutomaticCluster#resource_group_name}.

---

##### `apiServerAccess`<sup>Optional</sup> <a name="apiServerAccess" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.apiServerAccess"></a>

```typescript
public readonly apiServerAccess: KubernetesAutomaticClusterApiServerAccess;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

api_server_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#api_server_access KubernetesAutomaticCluster#api_server_access}

---

##### `hostedSystem`<sup>Optional</sup> <a name="hostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.hostedSystem"></a>

```typescript
public readonly hostedSystem: KubernetesAutomaticClusterHostedSystem;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

hosted_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#hosted_system KubernetesAutomaticCluster#hosted_system}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#id KubernetesAutomaticCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateCluster`<sup>Optional</sup> <a name="privateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.privateCluster"></a>

```typescript
public readonly privateCluster: KubernetesAutomaticClusterPrivateCluster;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

private_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#private_cluster KubernetesAutomaticCluster#private_cluster}

---

##### `serviceMesh`<sup>Optional</sup> <a name="serviceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.serviceMesh"></a>

```typescript
public readonly serviceMesh: KubernetesAutomaticClusterServiceMesh;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

service_mesh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#service_mesh KubernetesAutomaticCluster#service_mesh}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#tags KubernetesAutomaticCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: KubernetesAutomaticClusterTimeouts;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#timeouts KubernetesAutomaticCluster#timeouts}

---

##### `webAppRoutingIngress`<sup>Optional</sup> <a name="webAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterConfig.property.webAppRoutingIngress"></a>

```typescript
public readonly webAppRoutingIngress: KubernetesAutomaticClusterWebAppRoutingIngress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

web_app_routing_ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#web_app_routing_ingress KubernetesAutomaticCluster#web_app_routing_ingress}

---

### KubernetesAutomaticClusterHostedSystem <a name="KubernetesAutomaticClusterHostedSystem" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterHostedSystem: kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.nodeSubnetId">nodeSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#node_subnet_id KubernetesAutomaticCluster#node_subnet_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.systemNodeSubnetId">systemNodeSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#system_node_subnet_id KubernetesAutomaticCluster#system_node_subnet_id}. |

---

##### `nodeSubnetId`<sup>Required</sup> <a name="nodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.nodeSubnetId"></a>

```typescript
public readonly nodeSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#node_subnet_id KubernetesAutomaticCluster#node_subnet_id}.

---

##### `systemNodeSubnetId`<sup>Required</sup> <a name="systemNodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem.property.systemNodeSubnetId"></a>

```typescript
public readonly systemNodeSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#system_node_subnet_id KubernetesAutomaticCluster#system_node_subnet_id}.

---

### KubernetesAutomaticClusterIdentity <a name="KubernetesAutomaticClusterIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterIdentity: kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#type KubernetesAutomaticCluster#type}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#identity_ids KubernetesAutomaticCluster#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#type KubernetesAutomaticCluster#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#identity_ids KubernetesAutomaticCluster#identity_ids}.

---

### KubernetesAutomaticClusterKubeConfig <a name="KubernetesAutomaticClusterKubeConfig" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterKubeConfig: kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig = { ... }
```


### KubernetesAutomaticClusterPrivateCluster <a name="KubernetesAutomaticClusterPrivateCluster" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterPrivateCluster: kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#private_dns_zone_id KubernetesAutomaticCluster#private_dns_zone_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.publicFullyQualifiedDomainNameEnabled">publicFullyQualifiedDomainNameEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#public_fully_qualified_domain_name_enabled KubernetesAutomaticCluster#public_fully_qualified_domain_name_enabled}. |

---

##### `privateDnsZoneId`<sup>Optional</sup> <a name="privateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.privateDnsZoneId"></a>

```typescript
public readonly privateDnsZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#private_dns_zone_id KubernetesAutomaticCluster#private_dns_zone_id}.

---

##### `publicFullyQualifiedDomainNameEnabled`<sup>Optional</sup> <a name="publicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster.property.publicFullyQualifiedDomainNameEnabled"></a>

```typescript
public readonly publicFullyQualifiedDomainNameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#public_fully_qualified_domain_name_enabled KubernetesAutomaticCluster#public_fully_qualified_domain_name_enabled}.

---

### KubernetesAutomaticClusterServiceMesh <a name="KubernetesAutomaticClusterServiceMesh" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterServiceMesh: kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.revisions">revisions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#revisions KubernetesAutomaticCluster#revisions}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | certificate_authority block. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.externalIngressGatewayEnabled">externalIngressGatewayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#external_ingress_gateway_enabled KubernetesAutomaticCluster#external_ingress_gateway_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.internalIngressGatewayEnabled">internalIngressGatewayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#internal_ingress_gateway_enabled KubernetesAutomaticCluster#internal_ingress_gateway_enabled}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.proxyRedirectMechanism">proxyRedirectMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#proxy_redirect_mechanism KubernetesAutomaticCluster#proxy_redirect_mechanism}. |

---

##### `revisions`<sup>Required</sup> <a name="revisions" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.revisions"></a>

```typescript
public readonly revisions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#revisions KubernetesAutomaticCluster#revisions}.

---

##### `certificateAuthority`<sup>Optional</sup> <a name="certificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: KubernetesAutomaticClusterServiceMeshCertificateAuthority;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

certificate_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#certificate_authority KubernetesAutomaticCluster#certificate_authority}

---

##### `externalIngressGatewayEnabled`<sup>Optional</sup> <a name="externalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.externalIngressGatewayEnabled"></a>

```typescript
public readonly externalIngressGatewayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#external_ingress_gateway_enabled KubernetesAutomaticCluster#external_ingress_gateway_enabled}.

---

##### `internalIngressGatewayEnabled`<sup>Optional</sup> <a name="internalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.internalIngressGatewayEnabled"></a>

```typescript
public readonly internalIngressGatewayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#internal_ingress_gateway_enabled KubernetesAutomaticCluster#internal_ingress_gateway_enabled}.

---

##### `proxyRedirectMechanism`<sup>Optional</sup> <a name="proxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh.property.proxyRedirectMechanism"></a>

```typescript
public readonly proxyRedirectMechanism: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#proxy_redirect_mechanism KubernetesAutomaticCluster#proxy_redirect_mechanism}.

---

### KubernetesAutomaticClusterServiceMeshCertificateAuthority <a name="KubernetesAutomaticClusterServiceMeshCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterServiceMeshCertificateAuthority: kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateChainObjectName">certificateChainObjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#certificate_chain_object_name KubernetesAutomaticCluster#certificate_chain_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateObjectName">certificateObjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#certificate_object_name KubernetesAutomaticCluster#certificate_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyObjectName">keyObjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#key_object_name KubernetesAutomaticCluster#key_object_name}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#key_vault_id KubernetesAutomaticCluster#key_vault_id}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.rootCertificateObjectName">rootCertificateObjectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#root_certificate_object_name KubernetesAutomaticCluster#root_certificate_object_name}. |

---

##### `certificateChainObjectName`<sup>Required</sup> <a name="certificateChainObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateChainObjectName"></a>

```typescript
public readonly certificateChainObjectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#certificate_chain_object_name KubernetesAutomaticCluster#certificate_chain_object_name}.

---

##### `certificateObjectName`<sup>Required</sup> <a name="certificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.certificateObjectName"></a>

```typescript
public readonly certificateObjectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#certificate_object_name KubernetesAutomaticCluster#certificate_object_name}.

---

##### `keyObjectName`<sup>Required</sup> <a name="keyObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyObjectName"></a>

```typescript
public readonly keyObjectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#key_object_name KubernetesAutomaticCluster#key_object_name}.

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#key_vault_id KubernetesAutomaticCluster#key_vault_id}.

---

##### `rootCertificateObjectName`<sup>Required</sup> <a name="rootCertificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority.property.rootCertificateObjectName"></a>

```typescript
public readonly rootCertificateObjectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#root_certificate_object_name KubernetesAutomaticCluster#root_certificate_object_name}.

---

### KubernetesAutomaticClusterTimeouts <a name="KubernetesAutomaticClusterTimeouts" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterTimeouts: kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#create KubernetesAutomaticCluster#create}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#delete KubernetesAutomaticCluster#delete}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#read KubernetesAutomaticCluster#read}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#update KubernetesAutomaticCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#create KubernetesAutomaticCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#delete KubernetesAutomaticCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#read KubernetesAutomaticCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#update KubernetesAutomaticCluster#update}.

---

### KubernetesAutomaticClusterWebAppRoutingIngress <a name="KubernetesAutomaticClusterWebAppRoutingIngress" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterWebAppRoutingIngress: kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.defaultNginxController">defaultNginxController</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#default_nginx_controller KubernetesAutomaticCluster#default_nginx_controller}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.dnsZoneIds">dnsZoneIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#dns_zone_ids KubernetesAutomaticCluster#dns_zone_ids}. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.istioEnabled">istioEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#istio_enabled KubernetesAutomaticCluster#istio_enabled}. |

---

##### `defaultNginxController`<sup>Optional</sup> <a name="defaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.defaultNginxController"></a>

```typescript
public readonly defaultNginxController: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#default_nginx_controller KubernetesAutomaticCluster#default_nginx_controller}.

---

##### `dnsZoneIds`<sup>Optional</sup> <a name="dnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.dnsZoneIds"></a>

```typescript
public readonly dnsZoneIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#dns_zone_ids KubernetesAutomaticCluster#dns_zone_ids}.

---

##### `istioEnabled`<sup>Optional</sup> <a name="istioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress.property.istioEnabled"></a>

```typescript
public readonly istioEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/5.3.0/docs/resources/kubernetes_automatic_cluster#istio_enabled KubernetesAutomaticCluster#istio_enabled}.

---

### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

const kubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity: kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### KubernetesAutomaticClusterApiServerAccessOutputReference <a name="KubernetesAutomaticClusterApiServerAccessOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetAuthorizedIpRanges">resetAuthorizedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizedIpRanges` <a name="resetAuthorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetAuthorizedIpRanges"></a>

```typescript
public resetAuthorizedIpRanges(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRangesInput">authorizedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges">authorizedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizedIpRangesInput`<sup>Optional</sup> <a name="authorizedIpRangesInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRangesInput"></a>

```typescript
public readonly authorizedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `authorizedIpRanges`<sup>Required</sup> <a name="authorizedIpRanges" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.authorizedIpRanges"></a>

```typescript
public readonly authorizedIpRanges: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterApiServerAccess;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterApiServerAccess">KubernetesAutomaticClusterApiServerAccess</a>

---


### KubernetesAutomaticClusterHostedSystemOutputReference <a name="KubernetesAutomaticClusterHostedSystemOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetIdInput">nodeSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetIdInput">systemNodeSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId">nodeSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId">systemNodeSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeSubnetIdInput`<sup>Optional</sup> <a name="nodeSubnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetIdInput"></a>

```typescript
public readonly nodeSubnetIdInput: string;
```

- *Type:* string

---

##### `systemNodeSubnetIdInput`<sup>Optional</sup> <a name="systemNodeSubnetIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetIdInput"></a>

```typescript
public readonly systemNodeSubnetIdInput: string;
```

- *Type:* string

---

##### `nodeSubnetId`<sup>Required</sup> <a name="nodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.nodeSubnetId"></a>

```typescript
public readonly nodeSubnetId: string;
```

- *Type:* string

---

##### `systemNodeSubnetId`<sup>Required</sup> <a name="systemNodeSubnetId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.systemNodeSubnetId"></a>

```typescript
public readonly systemNodeSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterHostedSystem;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterHostedSystem">KubernetesAutomaticClusterHostedSystem</a>

---


### KubernetesAutomaticClusterIdentityOutputReference <a name="KubernetesAutomaticClusterIdentityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterIdentity">KubernetesAutomaticClusterIdentity</a>

---


### KubernetesAutomaticClusterKubeConfigList <a name="KubernetesAutomaticClusterKubeConfigList" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get"></a>

```typescript
public get(index: number): KubernetesAutomaticClusterKubeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KubernetesAutomaticClusterKubeConfigOutputReference <a name="KubernetesAutomaticClusterKubeConfigOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig">KubernetesAutomaticClusterKubeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `clusterCaCertificate`<sup>Required</sup> <a name="clusterCaCertificate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterKubeConfig;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterKubeConfig">KubernetesAutomaticClusterKubeConfig</a>

---


### KubernetesAutomaticClusterPrivateClusterOutputReference <a name="KubernetesAutomaticClusterPrivateClusterOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPrivateDnsZoneId">resetPrivateDnsZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPublicFullyQualifiedDomainNameEnabled">resetPublicFullyQualifiedDomainNameEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateDnsZoneId` <a name="resetPrivateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPrivateDnsZoneId"></a>

```typescript
public resetPrivateDnsZoneId(): void
```

##### `resetPublicFullyQualifiedDomainNameEnabled` <a name="resetPublicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.resetPublicFullyQualifiedDomainNameEnabled"></a>

```typescript
public resetPublicFullyQualifiedDomainNameEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneIdInput">privateDnsZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabledInput">publicFullyQualifiedDomainNameEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId">privateDnsZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled">publicFullyQualifiedDomainNameEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateDnsZoneIdInput`<sup>Optional</sup> <a name="privateDnsZoneIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneIdInput"></a>

```typescript
public readonly privateDnsZoneIdInput: string;
```

- *Type:* string

---

##### `publicFullyQualifiedDomainNameEnabledInput`<sup>Optional</sup> <a name="publicFullyQualifiedDomainNameEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabledInput"></a>

```typescript
public readonly publicFullyQualifiedDomainNameEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privateDnsZoneId`<sup>Required</sup> <a name="privateDnsZoneId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.privateDnsZoneId"></a>

```typescript
public readonly privateDnsZoneId: string;
```

- *Type:* string

---

##### `publicFullyQualifiedDomainNameEnabled`<sup>Required</sup> <a name="publicFullyQualifiedDomainNameEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.publicFullyQualifiedDomainNameEnabled"></a>

```typescript
public readonly publicFullyQualifiedDomainNameEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterPrivateCluster;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterPrivateCluster">KubernetesAutomaticClusterPrivateCluster</a>

---


### KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference <a name="KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectNameInput">certificateChainObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectNameInput">certificateObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectNameInput">keyObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultIdInput">keyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectNameInput">rootCertificateObjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName">certificateChainObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName">certificateObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName">keyObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId">keyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName">rootCertificateObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateChainObjectNameInput`<sup>Optional</sup> <a name="certificateChainObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectNameInput"></a>

```typescript
public readonly certificateChainObjectNameInput: string;
```

- *Type:* string

---

##### `certificateObjectNameInput`<sup>Optional</sup> <a name="certificateObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectNameInput"></a>

```typescript
public readonly certificateObjectNameInput: string;
```

- *Type:* string

---

##### `keyObjectNameInput`<sup>Optional</sup> <a name="keyObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectNameInput"></a>

```typescript
public readonly keyObjectNameInput: string;
```

- *Type:* string

---

##### `keyVaultIdInput`<sup>Optional</sup> <a name="keyVaultIdInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultIdInput"></a>

```typescript
public readonly keyVaultIdInput: string;
```

- *Type:* string

---

##### `rootCertificateObjectNameInput`<sup>Optional</sup> <a name="rootCertificateObjectNameInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectNameInput"></a>

```typescript
public readonly rootCertificateObjectNameInput: string;
```

- *Type:* string

---

##### `certificateChainObjectName`<sup>Required</sup> <a name="certificateChainObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateChainObjectName"></a>

```typescript
public readonly certificateChainObjectName: string;
```

- *Type:* string

---

##### `certificateObjectName`<sup>Required</sup> <a name="certificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.certificateObjectName"></a>

```typescript
public readonly certificateObjectName: string;
```

- *Type:* string

---

##### `keyObjectName`<sup>Required</sup> <a name="keyObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyObjectName"></a>

```typescript
public readonly keyObjectName: string;
```

- *Type:* string

---

##### `keyVaultId`<sup>Required</sup> <a name="keyVaultId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.keyVaultId"></a>

```typescript
public readonly keyVaultId: string;
```

- *Type:* string

---

##### `rootCertificateObjectName`<sup>Required</sup> <a name="rootCertificateObjectName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.rootCertificateObjectName"></a>

```typescript
public readonly rootCertificateObjectName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterServiceMeshCertificateAuthority;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---


### KubernetesAutomaticClusterServiceMeshOutputReference <a name="KubernetesAutomaticClusterServiceMeshOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority">putCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetCertificateAuthority">resetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetExternalIngressGatewayEnabled">resetExternalIngressGatewayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetInternalIngressGatewayEnabled">resetInternalIngressGatewayEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetProxyRedirectMechanism">resetProxyRedirectMechanism</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateAuthority` <a name="putCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority"></a>

```typescript
public putCertificateAuthority(value: KubernetesAutomaticClusterServiceMeshCertificateAuthority): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.putCertificateAuthority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---

##### `resetCertificateAuthority` <a name="resetCertificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetCertificateAuthority"></a>

```typescript
public resetCertificateAuthority(): void
```

##### `resetExternalIngressGatewayEnabled` <a name="resetExternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetExternalIngressGatewayEnabled"></a>

```typescript
public resetExternalIngressGatewayEnabled(): void
```

##### `resetInternalIngressGatewayEnabled` <a name="resetInternalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetInternalIngressGatewayEnabled"></a>

```typescript
public resetInternalIngressGatewayEnabled(): void
```

##### `resetProxyRedirectMechanism` <a name="resetProxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.resetProxyRedirectMechanism"></a>

```typescript
public resetProxyRedirectMechanism(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference">KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabledInput">externalIngressGatewayEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabledInput">internalIngressGatewayEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanismInput">proxyRedirectMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisionsInput">revisionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled">externalIngressGatewayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled">internalIngressGatewayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism">proxyRedirectMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisions">revisions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference">KubernetesAutomaticClusterServiceMeshCertificateAuthorityOutputReference</a>

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.certificateAuthorityInput"></a>

```typescript
public readonly certificateAuthorityInput: KubernetesAutomaticClusterServiceMeshCertificateAuthority;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshCertificateAuthority">KubernetesAutomaticClusterServiceMeshCertificateAuthority</a>

---

##### `externalIngressGatewayEnabledInput`<sup>Optional</sup> <a name="externalIngressGatewayEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabledInput"></a>

```typescript
public readonly externalIngressGatewayEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalIngressGatewayEnabledInput`<sup>Optional</sup> <a name="internalIngressGatewayEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabledInput"></a>

```typescript
public readonly internalIngressGatewayEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyRedirectMechanismInput`<sup>Optional</sup> <a name="proxyRedirectMechanismInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanismInput"></a>

```typescript
public readonly proxyRedirectMechanismInput: string;
```

- *Type:* string

---

##### `revisionsInput`<sup>Optional</sup> <a name="revisionsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisionsInput"></a>

```typescript
public readonly revisionsInput: string[];
```

- *Type:* string[]

---

##### `externalIngressGatewayEnabled`<sup>Required</sup> <a name="externalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.externalIngressGatewayEnabled"></a>

```typescript
public readonly externalIngressGatewayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalIngressGatewayEnabled`<sup>Required</sup> <a name="internalIngressGatewayEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalIngressGatewayEnabled"></a>

```typescript
public readonly internalIngressGatewayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proxyRedirectMechanism`<sup>Required</sup> <a name="proxyRedirectMechanism" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.proxyRedirectMechanism"></a>

```typescript
public readonly proxyRedirectMechanism: string;
```

- *Type:* string

---

##### `revisions`<sup>Required</sup> <a name="revisions" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.revisions"></a>

```typescript
public readonly revisions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMeshOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterServiceMesh;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterServiceMesh">KubernetesAutomaticClusterServiceMesh</a>

---


### KubernetesAutomaticClusterTimeoutsOutputReference <a name="KubernetesAutomaticClusterTimeoutsOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KubernetesAutomaticClusterTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterTimeouts">KubernetesAutomaticClusterTimeouts</a>

---


### KubernetesAutomaticClusterWebAppRoutingIngressOutputReference <a name="KubernetesAutomaticClusterWebAppRoutingIngressOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDefaultNginxController">resetDefaultNginxController</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDnsZoneIds">resetDnsZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetIstioEnabled">resetIstioEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultNginxController` <a name="resetDefaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDefaultNginxController"></a>

```typescript
public resetDefaultNginxController(): void
```

##### `resetDnsZoneIds` <a name="resetDnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetDnsZoneIds"></a>

```typescript
public resetDnsZoneIds(): void
```

##### `resetIstioEnabled` <a name="resetIstioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.resetIstioEnabled"></a>

```typescript
public resetIstioEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity">webAppRoutingIdentity</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxControllerInput">defaultNginxControllerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIdsInput">dnsZoneIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabledInput">istioEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController">defaultNginxController</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds">dnsZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled">istioEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `webAppRoutingIdentity`<sup>Required</sup> <a name="webAppRoutingIdentity" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.webAppRoutingIdentity"></a>

```typescript
public readonly webAppRoutingIdentity: KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList</a>

---

##### `defaultNginxControllerInput`<sup>Optional</sup> <a name="defaultNginxControllerInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxControllerInput"></a>

```typescript
public readonly defaultNginxControllerInput: string;
```

- *Type:* string

---

##### `dnsZoneIdsInput`<sup>Optional</sup> <a name="dnsZoneIdsInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIdsInput"></a>

```typescript
public readonly dnsZoneIdsInput: string[];
```

- *Type:* string[]

---

##### `istioEnabledInput`<sup>Optional</sup> <a name="istioEnabledInput" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabledInput"></a>

```typescript
public readonly istioEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultNginxController`<sup>Required</sup> <a name="defaultNginxController" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.defaultNginxController"></a>

```typescript
public readonly defaultNginxController: string;
```

- *Type:* string

---

##### `dnsZoneIds`<sup>Required</sup> <a name="dnsZoneIds" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.dnsZoneIds"></a>

```typescript
public readonly dnsZoneIds: string[];
```

- *Type:* string[]

---

##### `istioEnabled`<sup>Required</sup> <a name="istioEnabled" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.istioEnabled"></a>

```typescript
public readonly istioEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterWebAppRoutingIngress;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngress">KubernetesAutomaticClusterWebAppRoutingIngress</a>

---


### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get"></a>

```typescript
public get(index: number): KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference <a name="KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer"></a>

```typescript
import { kubernetesAutomaticCluster } from '@cdktn/provider-azurerm'

new kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId">userAssignedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `userAssignedIdentityId`<sup>Required</sup> <a name="userAssignedIdentityId" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.userAssignedIdentityId"></a>

```typescript
public readonly userAssignedIdentityId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity;
```

- *Type:* <a href="#@cdktn/provider-azurerm.kubernetesAutomaticCluster.KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity">KubernetesAutomaticClusterWebAppRoutingIngressWebAppRoutingIdentity</a>

---



