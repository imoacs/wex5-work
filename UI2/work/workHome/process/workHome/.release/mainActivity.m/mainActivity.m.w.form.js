define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/chat/wex5/funcsDialog/funcsDialog');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/work/workHome/process/workHome/mainActivity.m'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNZbUju';
	this._flag_='e2bb72a0f306c608feadecb41541e29e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fActivity":{"define":"fActivity","label":"环节","name":"fActivity","relation":"fActivity","type":"String"},"fColor":{"define":"fColor","label":"颜色","name":"fColor","relation":"fColor","type":"String"},"fDevice":{"define":"fDevice","label":"设备","name":"fDevice","relation":"fDevice","type":"String"},"fID":{"define":"fID","label":"id","name":"fID","relation":"fID","type":"String"},"fIcon":{"define":"fIcon","label":"图片样式","name":"fIcon","relation":"fIcon","type":"String"},"fLabel":{"define":"fLabel","label":"标签","name":"fLabel","relation":"fLabel","type":"String"},"fUrl":{"define":"fUrl","label":"路径","name":"fUrl","relation":"fUrl","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[{\"fID\":\"1\",\"fLabel\":\"工作日志\",\"fDevice\":\"m\",\"fIcon\":\"icon-document-text\",\"fColor\":\"#00B987\",\"fUrl\":\"$UI/work/workLog/process/logDetail/logDetail.m.w\",\"fActivity\":\"mainActivity\"},{\"fID\":\"2\",\"fLabel\":\"工作任务\",\"fDevice\":\"m\",\"fIcon\":\"icon-calendar\",\"fColor\":\"#FC3FA8\",\"fUrl\":\"$UI/work/workTask/process/workTask/workTaskListActivity.w\",\"fActivity\":\"workTaskListActivity\"},{\"fID\":\"3\",\"fLabel\":\"签到\",\"fDevice\":\"m\",\"fIcon\":\"icon-android-location\",\"fColor\":\"#00FFFF\",\"fUrl\":\"$UI/work/sign/process/sign/mainActivity.m.w\",\"fActivity\":\"mainActivity\"},{\"fID\":\"4\",\"fLabel\":\"考勤打卡\",\"fDevice\":\"m\",\"fIcon\":\"icon-compose\",\"fColor\":\"#3F9EFC\",\"fUrl\":\"$UI/work/attendance/process/attendance/attendanceActivity.m.w\",\"fActivity\":\"attendanceActivity\"}]","limit":20,"xid":"regularData"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"fActitvty":{"define":"fActitvty","label":"环节","name":"fActitvty","relation":"fActitvty","type":"String"},"fColor":{"define":"fColor","label":"图标颜色","name":"fColor","relation":"fColor","type":"String"},"fDevicesType":{"define":"fDevicesType","label":"设备类型","name":"fDevicesType","relation":"fDevicesType","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fIcon":{"define":"fIcon","label":"图标","name":"fIcon","relation":"fIcon","type":"String"},"fLabel":{"define":"fLabel","label":"名称","name":"fLabel","relation":"fLabel","type":"String"},"fPresonID":{"define":"fPresonID","label":"人员ID","name":"fPresonID","relation":"fPresonID","type":"String"},"fProcess":{"define":"fProcess","label":"流程","name":"fProcess","relation":"fProcess","type":"String"},"fUrl":{"define":"fUrl","label":"地址","name":"fUrl","relation":"fUrl","type":"String"},"version":{"define":"version","label":"版本","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":true,"events":{"onBeforeRefresh":"applyBizDataBeforeRefresh"},"idColumn":"fID","limit":20,"orderBys":[{"relation":"fLabel","type":1}],"queryAction":"queryOa_workfavorite","saveAction":"saveOa_workfavorite","tableName":"oa_workfavorite","url":"/work/workHome","xid":"applyBizData"});
}}); 
return __result;});