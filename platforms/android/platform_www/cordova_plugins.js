cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-tts.tts",
    "file": "plugins/cordova-plugin-tts/www/tts.js",
    "pluginId": "cordova-plugin-tts",
    "clobbers": [
      "TTS"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-printer.Printer",
    "file": "plugins/cordova-plugin-printer/www/printer.js",
    "pluginId": "cordova-plugin-printer",
    "clobbers": [
      "plugin.printer",
      "cordova.plugins.printer"
    ]
  },
  {
    "id": "com-badrit-printplugin.PrintPlugin",
    "file": "plugins/com-badrit-printplugin/www/PrintPlugin.js",
    "pluginId": "com-badrit-printplugin",
    "clobbers": [
      "window.PrintPlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-tts": "0.2.3",
  "cordova-plugin-vibration": "3.0.1",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-inappbrowser": "2.0.2",
  "cordova-plugin-printer": "0.7.3",
  "com-badrit-printplugin": "0.2.0"
};
// BOTTOM OF METADATA
});