# 2025.1.1

**package.json**
- Version bump to 2025.1.1

**GUI.js**
- DlgFromDict: Only show institution logo if logoUrl not specified
- DlgFromDict: Remove close button and callbacks
- DlgFromDict: More descriptive dropdown (select element) prompt
- DlgFromDict: Add to _setRequiredKeys if input already has a value
- DlgFromDict:Remove cancel button and callbacks
- DlgFromDict:Rename Ok button to Continue
- dialog: Button text: uppercase OK
- _onKeyChange: Use event.target.id so that id can be added before element exists

**PsychoJS.js**
- constructor: Changed defaults: debug = false; collectIP = true
- constructor: Logging levels: ALL / WARN
- constructor: Add octalportal to hosts
- constructor: Version bump and add -sijiazhao
- quit: Change text to a saving data message
- quit: Check completion/cancellation URL are not empty
- _getParticipantIPInfo: Use ip.octalportal.com for IP data for IP data
- _getParticipantIPInfo: Bugfix: incorrect object
- _getParticipantIPInfo: Store IP JSON entire response
- _getParticipantIPInfo: Do not throw error if _getParticipantIPInfo fails

**Window.js**
- constructor: Remove console logging

**build.js.cjs**
- Don't build source maps
