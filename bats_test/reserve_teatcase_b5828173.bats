#!/usr/bin/env bats
#b5828173
#Reserve system

@test "ใส่ข้อมูลครบ คืนค่า JSON ปกติ" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \-d '{"nameCompany": "anyarin","total": "200"}' http://localhost:8080/api/reserves | jq .)
	echo $json | grep "anyarin"
}
@test "nameCompany ต้องไม่ Null" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \-d '{"total": "200"}' http://localhost:8080/api/reserves | jq .)
	echo $json | grep "may not be null"
}

@test "nameCompany  ต้องรับตัวอักษรไม่น้อยกว่า 5 ตัว" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \-d '{"nameCompany": "anya"}' http://localhost:8080/api/reserves | jq .)
	echo $json | grep "size must be between 5 and 50"
}

@test "total ต้องมีตัวเลขไม่น้อยกว่า 3 ตัว" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \-d '{"total": "20"}' http://localhost:8080/api/reserves | jq .)
	echo $json | grep "Pattern.message"
}

@test "total ต้องไม่ Null" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \-d '{"nameCompany": "anyarin"}' http://localhost:8080/api/reserves | jq .)
	echo $json | grep "may not be null"
}
