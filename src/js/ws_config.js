var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'XWallet';
config.appDescription = 'Aeon Classic Wallet';
config.appSlogan = 'Privacy oriented with a mobile focus.';
config.appId = 'aeonclassic.xwallet';
config.appGitRepo = 'https://github.com/Biolith/xwallet-electron/';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 10002;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wallet';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'AC-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.0.1";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://explorer.aeonclassic.org/transaction.html?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'hashblaster.com';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/Biolith/public-nodes-json/master/public-nodes.json';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    'hashblaster.com:10002',
    'explorer.aeonclassic.org:10002',
    'xmlc.ml:10002',
];

// your currency name
config.assetName = 'Aeon Classic';
// your currency ticker
config.assetTicker =  'XMLC';
// your currency address prefix, for address validation
config.addressPrefix =  'X';
// standard wallet address length, for address validation
config.addressLength = 97;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 185;

// minimum fee for sending transaction
config.minimumFee = 0.00000100;
// minimum amount for sending transaction
config.mininumSend = 0.00000001;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100000000;
// to represent human readable value
config.decimalPlaces = 8;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
];

module.exports = config;
