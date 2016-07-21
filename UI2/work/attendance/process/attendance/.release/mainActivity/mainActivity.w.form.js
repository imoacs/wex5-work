define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/work/attendance/process/attendance/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cJ3Ujiy';
	this._flag_='976f5ebc8cfa1fb4bdc81f41127f9169';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAttendanceClass":{"define":"fAttendanceClass","label":"考勤班制","name":"fAttendanceClass","relation":"fAttendanceClass","type":"String"},"fAttendanceGroupName":{"define":"fAttendanceGroupName","label":"考勤组名称","name":"fAttendanceGroupName","relation":"fAttendanceGroupName","type":"String"},"fAttendancePersonID":{"define":"fAttendancePersonID","label":"参与考勤人员ID","name":"fAttendancePersonID","relation":"fAttendancePersonID","type":"String"},"fAttendancePersonName":{"define":"fAttendancePersonName","label":"参与考勤人员","name":"fAttendancePersonName","relation":"fAttendancePersonName","type":"String"},"fAttendanceTeamManager":{"define":"fAttendanceTeamManager","label":"考勤组负责人","name":"fAttendanceTeamManager","relation":"fAttendanceTeamManager","type":"String"},"fAttendanceTeamManagerID":{"define":"fAttendanceTeamManagerID","label":"考勤组负责人ID","name":"fAttendanceTeamManagerID","relation":"fAttendanceTeamManagerID","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"创建时间","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fDeptID":{"define":"fDeptID","label":"考勤部门ID","name":"fDeptID","relation":"fDeptID","type":"String"},"fDeptName":{"define":"fDeptName","label":"考勤部门名称","name":"fDeptName","relation":"fDeptName","type":"String"},"fEffectiveRange":{"define":"fEffectiveRange","label":"有效范围","name":"fEffectiveRange","relation":"fEffectiveRange","rules":{"integer":true},"type":"Integer"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","rules":{"calculate":"justep.UUID.createUUID()"},"type":"String"},"fOrgID":{"define":"fOrgID","label":"考勤组织ID","name":"fOrgID","relation":"fOrgID","type":"String"},"fOrgName":{"define":"fOrgName","label":"考勤组织名称","name":"fOrgName","relation":"fOrgName","type":"String"},"fPersonID":{"define":"fPersonID","label":"考勤人ID","name":"fPersonID","relation":"fPersonID","type":"String"},"fPersonName":{"define":"fPersonName","label":"考勤人名称","name":"fPersonName","relation":"fPersonName","type":"String"},"fUpdataTime":{"define":"fUpdataTime","label":"修改时间","name":"fUpdataTime","relation":"fUpdataTime","rules":{"datetime":true},"type":"DateTime"},"version":{"define":"version","label":"版本","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"queryAction":"queryOa_attendanceadmin","saveAction":"saveOa_attendanceadmin","tableName":"oa_attendanceadmin","url":"/work/attendance","xid":"mainData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","name":"name","relation":"name","type":"String"},"value":{"define":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"value","initData":"[{\"value\":\"1\",\"name\":\"固定班制(考勤时间固定)\"},{\"value\":\"2\",\"name\":\"排班制(考勤时间都不固定)\"}]","limit":20,"xid":"selectData"});
 new __BaasData__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAttendanceAdminID":{"define":"fAttendanceAdminID","label":"考勤管理ID","name":"fAttendanceAdminID","relation":"fAttendanceAdminID","type":"String"},"fDepart":{"define":"fDepart","label":"班次","name":"fDepart","relation":"fDepart","type":"String"},"fDepartID":{"define":"fDepartID","label":"考勤班次设置ID","name":"fDepartID","relation":"fDepartID","type":"String"},"fDepartTime":{"define":"fDepartTime","label":"班次时间","name":"fDepartTime","relation":"fDepartTime","type":"String"},"fFriday":{"define":"fFriday","label":"每周五","name":"fFriday","relation":"fFriday","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","rules":{"calculate":"justep.UUID.createUUID()"},"type":"String"},"fMonday":{"define":"fMonday","label":"每周一","name":"fMonday","relation":"fMonday","type":"String"},"fSaturday":{"define":"fSaturday","label":"每周六","name":"fSaturday","relation":"fSaturday","type":"String"},"fSunday":{"define":"fSunday","label":"每周日","name":"fSunday","relation":"fSunday","type":"String"},"fThursday":{"define":"fThursday","label":"每周四","name":"fThursday","relation":"fThursday","type":"String"},"fTuesday":{"define":"fTuesday","label":"每周二","name":"fTuesday","relation":"fTuesday","type":"String"},"fWednesday":{"define":"fWednesday","label":"每周三","name":"fWednesday","relation":"fWednesday","type":"String"},"version":{"define":"version","label":"版本","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"queryAction":"queryOa_attendanceweek","saveAction":"saveOa_attendanceweek","tableName":"oa_attendanceweek","url":"/work/attendance","xid":"weekData"});
 new __BaasData__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"fAddressDetail":{"define":"fAddressDetail","label":"地址信息","name":"fAddressDetail","relation":"fAddressDetail","type":"String"},"fAttenAddrName":{"define":"fAttenAddrName","label":"考勤地点名称","name":"fAttenAddrName","relation":"fAttenAddrName","type":"String"},"fAttendanceAdminID":{"define":"fAttendanceAdminID","label":"考勤管理ID","name":"fAttendanceAdminID","relation":"fAttendanceAdminID","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","rules":{"calculate":"justep.UUID.createUUID()"},"type":"String"},"fLatitude":{"define":"fLatitude","label":"纬度","name":"fLatitude","relation":"fLatitude","type":"String"},"fLongitude":{"define":"fLongitude","label":"经度","name":"fLongitude","relation":"fLongitude","type":"String"},"version":{"define":"version","label":"版本","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":true,"events":{},"idColumn":"fID","limit":20,"queryAction":"queryOa_attendancemap","saveAction":"saveOa_attendancemap","tableName":"oa_attendancemap","url":"/work/attendance","xid":"addrData"});
 new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAttendanceClass":{"define":"fAttendanceClass","label":"考勤班制","name":"fAttendanceClass","relation":"fAttendanceClass","type":"String"},"fAttendanceGroupName":{"define":"fAttendanceGroupName","label":"考勤组名称","name":"fAttendanceGroupName","relation":"fAttendanceGroupName","type":"String"},"fAttendancePersonID":{"define":"fAttendancePersonID","label":"参与考勤人员ID","name":"fAttendancePersonID","relation":"fAttendancePersonID","type":"String"},"fAttendancePersonName":{"define":"fAttendancePersonName","label":"参与考勤人员","name":"fAttendancePersonName","relation":"fAttendancePersonName","type":"String"},"fAttendanceTeamManager":{"define":"fAttendanceTeamManager","label":"考勤组负责人","name":"fAttendanceTeamManager","relation":"fAttendanceTeamManager","type":"String"},"fAttendanceTeamManagerID":{"define":"fAttendanceTeamManagerID","label":"考勤组负责人ID","name":"fAttendanceTeamManagerID","relation":"fAttendanceTeamManagerID","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"创建时间","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fDeptID":{"define":"fDeptID","label":"考勤部门ID","name":"fDeptID","relation":"fDeptID","type":"String"},"fDeptName":{"define":"fDeptName","label":"考勤部门名称","name":"fDeptName","relation":"fDeptName","type":"String"},"fEffectiveRange":{"define":"fEffectiveRange","label":"有效范围","name":"fEffectiveRange","relation":"fEffectiveRange","rules":{"integer":true},"type":"Integer"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fOrgID":{"define":"fOrgID","label":"考勤组织ID","name":"fOrgID","relation":"fOrgID","type":"String"},"fOrgName":{"define":"fOrgName","label":"考勤组织名称","name":"fOrgName","relation":"fOrgName","type":"String"},"fPersonID":{"define":"fPersonID","label":"考勤人ID","name":"fPersonID","relation":"fPersonID","type":"String"},"fPersonName":{"define":"fPersonName","label":"考勤人名称","name":"fPersonName","relation":"fPersonName","type":"String"},"fUpdataTime":{"define":"fUpdataTime","label":"修改时间","name":"fUpdataTime","relation":"fUpdataTime","rules":{"datetime":true},"type":"DateTime"},"version":{"define":"version","label":"版本","name":"version","relation":"version","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fID","limit":-1,"queryAction":"queryOa_attendanceadmin","saveAction":"saveOa_attendanceadmin","tableName":"oa_attendanceadmin","url":"/work/attendance","xid":"attenData"});
}}); 
return __result;});