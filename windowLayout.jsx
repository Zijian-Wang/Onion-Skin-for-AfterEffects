var panelGlobal = thisObj;

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":5,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"ToolWindow","windowType":"Dialog","creationProps":{"su1PanelCoordinates":true,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"Onion Skin Tool","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"newLayerBttn","text":"新增图层 New Layer","justify":"center","preferredSize":[150,0],"alignment":"center","helpTip":null}},"item-2":{"id":2,"type":"Checkbox","parentId":0,"style":{"enabled":true,"varName":null,"text":"Onion Skin","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":false},"hidden":true},"item-3":{"id":3,"type":"EditText","parentId":5,"style":{"enabled":true,"varName":"OpacityInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"10","justify":"left","preferredSize":[30,25],"alignment":"center","helpTip":"填写 1 到 100 的数值"}},"item-4":{"id":4,"type":"StaticText","parentId":5,"style":{"enabled":true,"varName":"STextAmpercent","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"%","justify":"left","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-5":{"id":5,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"opacityPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":true},"text":"Onion Skin Opacity 透明度","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"center"}},"item-6":{"id":6,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"durationPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":true},"text":"Layer Duration 图层时间","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"center"}},"item-7":{"id":7,"type":"StaticText","parentId":6,"style":{"enabled":true,"varName":"STextDuration","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Frame 帧数: ","justify":"left","preferredSize":[0,0],"alignment":"center","helpTip":null}},"item-8":{"id":8,"type":"EditText","parentId":6,"style":{"enabled":true,"varName":"durationInput","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"4","justify":"center","preferredSize":[50,0],"alignment":"center","helpTip":null}},"item-9":{"id":9,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"onionSkinBttn","text":"开始 Onion Skin !!!","justify":"center","preferredSize":[150,0],"alignment":"center","helpTip":null}},"item-10":{"id":10,"type":"Button","parentId":12,"style":{"enabled":true,"varName":"previousLayerBttn","text":"上一图层","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Button","parentId":12,"style":{"enabled":true,"varName":"nextLayerBttn","text":"下一图层","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"layerSelectPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":true},"text":"图层选择","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":"center"}}},"order":[0,5,3,4,6,7,8,12,10,11,2,1,9],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"none"}}
*/ 

// TOOLWINDOW
// ==========
var ToolWindow = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {su1PanelCoordinates: true, resizeable: true}); 
    if ( !(panelGlobal instanceof Panel) ) ToolWindow.text = "Onion Skin Tool"; 
    ToolWindow.orientation = "column"; 
    ToolWindow.alignChildren = ["center","top"]; 
    ToolWindow.spacing = 10; 
    ToolWindow.margins = 16; 

// OPACITYPANEL
// ============
var opacityPanel = ToolWindow.add("panel", undefined, undefined, {name: "opacityPanel", su1PanelCoordinates: true}); 
    opacityPanel.text = "Onion Skin Opacity 透明度"; 
    opacityPanel.orientation = "row"; 
    opacityPanel.alignChildren = ["center","center"]; 
    opacityPanel.spacing = 10; 
    opacityPanel.margins = 10; 
    opacityPanel.alignment = ["center","top"]; 

var OpacityInput = opacityPanel.add('edittext {properties: {name: "OpacityInput"}}'); 
    OpacityInput.helpTip = "填写 1 到 100 的数值"; 
    OpacityInput.text = "10"; 
    OpacityInput.preferredSize.width = 30; 
    OpacityInput.preferredSize.height = 25; 
    OpacityInput.alignment = ["center","center"]; 

var STextAmpercent = opacityPanel.add("statictext", undefined, undefined, {name: "STextAmpercent"}); 
    STextAmpercent.text = "%"; 
    STextAmpercent.alignment = ["center","center"]; 

// DURATIONPANEL
// =============
var durationPanel = ToolWindow.add("panel", undefined, undefined, {name: "durationPanel", su1PanelCoordinates: true}); 
    durationPanel.text = "Layer Duration 图层时间"; 
    durationPanel.orientation = "row"; 
    durationPanel.alignChildren = ["center","center"]; 
    durationPanel.spacing = 10; 
    durationPanel.margins = 10; 
    durationPanel.alignment = ["center","top"]; 

var STextDuration = durationPanel.add("statictext", undefined, undefined, {name: "STextDuration"}); 
    STextDuration.text = "Frame 帧数: "; 
    STextDuration.alignment = ["center","center"]; 

var durationInput = durationPanel.add('edittext {justify: "center", properties: {name: "durationInput"}}'); 
    durationInput.text = "4"; 
    durationInput.preferredSize.width = 50; 
    durationInput.alignment = ["center","center"]; 

// LAYERSELECTPANEL
// ================
var layerSelectPanel = ToolWindow.add("panel", undefined, undefined, {name: "layerSelectPanel", su1PanelCoordinates: true}); 
    layerSelectPanel.text = "图层选择"; 
    layerSelectPanel.orientation = "row"; 
    layerSelectPanel.alignChildren = ["center","center"]; 
    layerSelectPanel.spacing = 10; 
    layerSelectPanel.margins = 10; 
    layerSelectPanel.alignment = ["center","top"]; 

var previousLayerBttn = layerSelectPanel.add("button", undefined, undefined, {name: "previousLayerBttn"}); 
    previousLayerBttn.text = "上一图层"; 

var nextLayerBttn = layerSelectPanel.add("button", undefined, undefined, {name: "nextLayerBttn"}); 
    nextLayerBttn.text = "下一图层"; 

// TOOLWINDOW
// ==========
// var checkbox1 = ToolWindow.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
    // checkbox1.text = "Onion Skin"; 

var newLayerBttn = ToolWindow.add("button", undefined, undefined, {name: "newLayerBttn"}); 
    newLayerBttn.text = "新增图层 New Layer"; 
    newLayerBttn.preferredSize.width = 150; 
    newLayerBttn.alignment = ["center","top"]; 

var onionSkinBttn = ToolWindow.add("button", undefined, undefined, {name: "onionSkinBttn"}); 
    onionSkinBttn.text = "开始 Onion Skin !!!"; 
    onionSkinBttn.preferredSize.width = 150; 
    onionSkinBttn.alignment = ["center","top"]; 

ToolWindow.layout.layout(true);
ToolWindow.layout.resize();
ToolWindow.onResizing = ToolWindow.onResize = function () { this.layout.resize(); }

if ( ToolWindow instanceof Window ) ToolWindow.show();

