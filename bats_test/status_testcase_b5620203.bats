#!/usr/bin/env bats
#b5620203
#Status notification system

@test "ใส่ข้อมูลถูกต้อง โปรแกรมคืนค่า JSON ปกติ" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"status": "รับเข้าระบบ","trackNumber": {"categories" : [{"category" : "ลงทะเบียน","userone" : "User1","usertwo" : "User2","tracknum" : "NOR1234567TH"}]}}'\
	 http://localhost:8080/api/statusNotifications | jq .)
	echo $json | grep "http://localhost:8080/api/statusNotifications/"
}

@test "ใส่ข้อมูลอื่นครบ แต่ไม่ใส่ status (status ห้ามเป็น Null)" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"trackNumber": {"categories" : [{"category" : "ลงทะเบียน","userone" : "User1","usertwo" : "User2","tracknum" : "EMS1234567TH"}]}}'\
	 http://localhost:8080/api/statusNotifications | jq .)
	echo $json | grep "may not be null" | grep "propertyPath=status"
}

@test "status field รับตัวเลข (status ต้องไม่รับตัวเลข)" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"status": "1234","trackNumber": {"categories" : [{"category" : "ลงทะเบียน","userone" : "User1","usertwo" : "User2","tracknum" : "EMS1234567TH"}]}}'\
	 http://localhost:8080/api/statusNotifications | jq .)
	echo $json | grep "Pattern.message" | grep "propertyPath=status"
}

@test "status field รับความยาวน้อยกว่า 3" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"status": "ก","trackNumber": {"categories" : [{"category" : "ลงทะเบียน","userone" : "User1","usertwo" : "User2","tracknum" : "EMS1234567TH"}]}}'\
	 http://localhost:8080/api/statusNotifications | jq .)
	echo $json | grep "size must be between 3 and 50" | grep "propertyPath=status"
}

@test "status field รับความยาวมากกว่า 50" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"status": "พัสดุนำจ่ายอย่างถูกต้อง พิถีพิถัน เอาใจใส่อย่างดีที่สุด","trackNumber": {"categories" : [{"category" : "ลงทะเบียน","userone" : "User1","usertwo" : "User2","tracknum" : "EMS1234567TH"}]}}'\
	 http://localhost:8080/api/statusNotifications | jq .)
	echo $json | grep "size must be between 3 and 50" | grep "propertyPath=status"
}

#@test "trackNumber field ต้องไม่รับเลขมากกว่า 12 ตัว" {
# 	json=$(curl -s -H "Content-Type: application/json" -X POST \
# 	-d '{"trackNumber": "NOR12345678TH"}' http://localhost:8080/api/statusNotifications | jq .)
# 	echo $json | grep "size must be between 12 and 12"
#}