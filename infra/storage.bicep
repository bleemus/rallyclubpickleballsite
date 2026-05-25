@description('Storage account name. Globally unique, 3-24 chars, lowercase letters and numbers only.')
@minLength(3)
@maxLength(24)
param storageAccountName string = 'rallyclub${uniqueString(resourceGroup().id)}'

@description('Location for the storage account. Defaults to the resource group location.')
param location string = resourceGroup().location

@description('Storage redundancy SKU.')
@allowed([
  'Standard_LRS'
  'Standard_GRS'
  'Standard_ZRS'
])
param skuName string = 'Standard_LRS'

@description('Tables to create in the storage account.')
param tableNames array = [
  'TrainingRequests'
  'RateLimitEvents'
]

resource storage 'Microsoft.Storage/storageAccounts@2023-05-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: skuName
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
    minimumTlsVersion: 'TLS1_2'
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    supportsHttpsTrafficOnly: true
    publicNetworkAccess: 'Enabled'
    networkAcls: {
      defaultAction: 'Allow'
      bypass: 'AzureServices'
    }
  }
  tags: {
    project: 'rallyclubpickleballsite'
    purpose: 'personal-training-requests'
  }
}

resource tableService 'Microsoft.Storage/storageAccounts/tableServices@2023-05-01' = {
  parent: storage
  name: 'default'
}

resource tables 'Microsoft.Storage/storageAccounts/tableServices/tables@2023-05-01' = [for tableName in tableNames: {
  parent: tableService
  name: tableName
}]

output storageAccountName string = storage.name
output storageAccountId string = storage.id
output tableEndpoint string = storage.properties.primaryEndpoints.table
