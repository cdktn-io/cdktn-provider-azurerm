# `iothubEndpointServicebusTopic` Submodule <a name="`iothubEndpointServicebusTopic` Submodule" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubEndpointServicebusTopic <a name="IothubEndpointServicebusTopic" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic azurerm_iothub_endpoint_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iothub_endpoint_servicebus_topic.IothubEndpointServicebusTopic;

IothubEndpointServicebusTopic.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .iothubId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .authenticationType(java.lang.String)
//  .connectionString(java.lang.String)
//  .endpointUri(java.lang.String)
//  .entityPath(java.lang.String)
//  .id(java.lang.String)
//  .identityId(java.lang.String)
//  .subscriptionId(java.lang.String)
//  .timeouts(IothubEndpointServicebusTopicTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.entityPath">entityPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#subscription_id IothubEndpointServicebusTopic#subscription_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.iothubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}.

---

##### `endpointUri`<sup>Optional</sup> <a name="endpointUri" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.endpointUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}.

---

##### `entityPath`<sup>Optional</sup> <a name="entityPath" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.entityPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.identityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#subscription_id IothubEndpointServicebusTopic#subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#timeouts IothubEndpointServicebusTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEndpointUri">resetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEntityPath">resetEntityPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts"></a>

```java
public void putTimeouts(IothubEndpointServicebusTopicTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetConnectionString"></a>

```java
public void resetConnectionString()
```

##### `resetEndpointUri` <a name="resetEndpointUri" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEndpointUri"></a>

```java
public void resetEndpointUri()
```

##### `resetEntityPath` <a name="resetEntityPath" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetEntityPath"></a>

```java
public void resetEntityPath()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetIdentityId"></a>

```java
public void resetIdentityId()
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetSubscriptionId"></a>

```java
public void resetSubscriptionId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IothubEndpointServicebusTopic resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct"></a>

```java
import io.cdktn.providers.azurerm.iothub_endpoint_servicebus_topic.IothubEndpointServicebusTopic;

IothubEndpointServicebusTopic.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement"></a>

```java
import io.cdktn.providers.azurerm.iothub_endpoint_servicebus_topic.IothubEndpointServicebusTopic;

IothubEndpointServicebusTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource"></a>

```java
import io.cdktn.providers.azurerm.iothub_endpoint_servicebus_topic.IothubEndpointServicebusTopic;

IothubEndpointServicebusTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.generateConfigForImport"></a>

```java
import io.cdktn.providers.azurerm.iothub_endpoint_servicebus_topic.IothubEndpointServicebusTopic;

IothubEndpointServicebusTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IothubEndpointServicebusTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IothubEndpointServicebusTopic resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IothubEndpointServicebusTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IothubEndpointServicebusTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IothubEndpointServicebusTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference">IothubEndpointServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUriInput">endpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPathInput">entityPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityIdInput">identityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubIdInput">iothubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPath">entityPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityId">identityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeouts"></a>

```java
public IothubEndpointServicebusTopicTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference">IothubEndpointServicebusTopicTimeoutsOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUriInput"></a>

```java
public java.lang.String getEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `entityPathInput`<sup>Optional</sup> <a name="entityPathInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPathInput"></a>

```java
public java.lang.String getEntityPathInput();
```

- *Type:* java.lang.String

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityIdInput"></a>

```java
public java.lang.String getIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `iothubIdInput`<sup>Optional</sup> <a name="iothubIdInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubIdInput"></a>

```java
public java.lang.String getIothubIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.timeoutsInput"></a>

```java
public IResolvable|IothubEndpointServicebusTopicTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

---

##### `entityPath`<sup>Required</sup> <a name="entityPath" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.entityPath"></a>

```java
public java.lang.String getEntityPath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IothubEndpointServicebusTopicConfig <a name="IothubEndpointServicebusTopicConfig" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iothub_endpoint_servicebus_topic.IothubEndpointServicebusTopicConfig;

IothubEndpointServicebusTopicConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .iothubId(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .authenticationType(java.lang.String)
//  .connectionString(java.lang.String)
//  .endpointUri(java.lang.String)
//  .entityPath(java.lang.String)
//  .id(java.lang.String)
//  .identityId(java.lang.String)
//  .subscriptionId(java.lang.String)
//  .timeouts(IothubEndpointServicebusTopicTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.iothubId">iothubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.endpointUri">endpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.entityPath">entityPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#subscription_id IothubEndpointServicebusTopic#subscription_id}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iothubId`<sup>Required</sup> <a name="iothubId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.iothubId"></a>

```java
public java.lang.String getIothubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#iothub_id IothubEndpointServicebusTopic#iothub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#name IothubEndpointServicebusTopic#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#resource_group_name IothubEndpointServicebusTopic#resource_group_name}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#authentication_type IothubEndpointServicebusTopic#authentication_type}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#connection_string IothubEndpointServicebusTopic#connection_string}.

---

##### `endpointUri`<sup>Optional</sup> <a name="endpointUri" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.endpointUri"></a>

```java
public java.lang.String getEndpointUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#endpoint_uri IothubEndpointServicebusTopic#endpoint_uri}.

---

##### `entityPath`<sup>Optional</sup> <a name="entityPath" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.entityPath"></a>

```java
public java.lang.String getEntityPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#entity_path IothubEndpointServicebusTopic#entity_path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#id IothubEndpointServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#identity_id IothubEndpointServicebusTopic#identity_id}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#subscription_id IothubEndpointServicebusTopic#subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicConfig.property.timeouts"></a>

```java
public IothubEndpointServicebusTopicTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#timeouts IothubEndpointServicebusTopic#timeouts}

---

### IothubEndpointServicebusTopicTimeouts <a name="IothubEndpointServicebusTopicTimeouts" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iothub_endpoint_servicebus_topic.IothubEndpointServicebusTopicTimeouts;

IothubEndpointServicebusTopicTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#create IothubEndpointServicebusTopic#create}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#delete IothubEndpointServicebusTopic#delete}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#read IothubEndpointServicebusTopic#read}. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#update IothubEndpointServicebusTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#create IothubEndpointServicebusTopic#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#delete IothubEndpointServicebusTopic#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#read IothubEndpointServicebusTopic#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.79.0/docs/resources/iothub_endpoint_servicebus_topic#update IothubEndpointServicebusTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubEndpointServicebusTopicTimeoutsOutputReference <a name="IothubEndpointServicebusTopicTimeoutsOutputReference" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.azurerm.iothub_endpoint_servicebus_topic.IothubEndpointServicebusTopicTimeoutsOutputReference;

new IothubEndpointServicebusTopicTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|IothubEndpointServicebusTopicTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-azurerm.iothubEndpointServicebusTopic.IothubEndpointServicebusTopicTimeouts">IothubEndpointServicebusTopicTimeouts</a>

---



