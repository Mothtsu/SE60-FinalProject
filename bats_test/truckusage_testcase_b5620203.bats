#!/usr/bin/env bats
#b5620203
#Truck usage data system

@test "ใส่ข้อมูลถูกต้อง โปรแกรมคืนค่า JSON ปกติ" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"timeStart": "2018-02-10", "timeEnd": "2018-02-20","truckData":{"truckDatas":[{"truckNo":"BZ0058","truckBrand":"Mercedes Benz"}]},"truckDriver":{"truckDrivers":[{"firstName":"Tomson","lastName":"Cark"}]}}'\
	http://localhost:8080/api/truckUsageDatas | jq .)
	echo $json | grep "2018-02-10" | grep "2018-02-20"
}

@test "ใส่ข้อมูลอื่นครบ แต่ไม่ใส่ timeStart (timeStart ห้ามเป็น Null)" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"timeEnd": "2018-02-20", "truckData":{"truckDatas":[{"truckNo":"BZ0058","truckBrand":"Mercedes Benz"}]},"truckDriver":{"truckDrivers":[{"firstName":"Tomson","lastName":"Cark"}]}}'\
	http://localhost:8080/api/truckUsageDatas | jq .)
	echo $json | grep "propertyPath=timeStart" | grep "may not be null"
}

@test "ใส่ข้อมูลอื่นครบ แต่ไม่ใส่ timeEnd (timeEnd ห้ามเป็น Null)" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"timeStart": "2018-02-20"}\
   "truckData":{"truckDatas":[{"truckNo":"BZ0058","truckBrand":"Mercedes Benz"}]},\
   "truckDriver":{"truckDrivers":[{"firstName":"Tomson","lastName":"Cark"}]}}' \
	http://localhost:8080/api/truckUsageDatas | jq .)
	echo $json | grep "propertyPath=timeEnd" | grep "may not be null"
 }

@test "timeStart, timeEnd field ใส่ข้อมูลเป็นตัวเลข แต่ไม่เป็นตามรูปแบบ" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"timeStart": "20180220", "timeEnd": "20180221"}' http://localhost:8080/api/truckUsageDatas | jq .)
	echo $json | grep "Pattern.message" | grep "propertyPath=timeEnd" | grep "propertyPath=timeStart"
}

@test "timeStart, timeEnd field ไม่รับตัวอักษร" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"timeStart": "Hello", "timeEnd": "World"}' http://localhost:8080/api/truckUsageDatas | jq .)
	echo $json | grep "Pattern.message" | grep "propertyPath=timeEnd" | grep "propertyPath=timeStart"
}

#@test "truckBrand field รับค่าได้ปกติ แต่ truckNo รับค่าน้อยกว่า 6 ตัว" {
#	json=$(curl -s -H "Content-Type: application/json" -X POST \
#	-d '{"truckNo": "AB000", "truckBrand": "Toyota"}' http://localhost:8080/api/truckDatas | jq .)
#	echo $json | grep "Pattern.message"
#}

#@test "truckBrand field รับค่าได้ปกติ แต่ truckNo รับค่ามากกว่า 6 ตัว" {
#	json=$(curl -s -H "Content-Type: application/json" -X POST \
#	-d '{"truckNo": "AB00000", "truckBrand": "Toyota"}' http://localhost:8080/api/truckDatas | jq .)
#	echo $json | grep "Pattern.message"
#}
