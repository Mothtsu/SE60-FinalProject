#!/usr/bin/env bats
#B5815050
#Noreceive System


@test "tracknum ถูกต้อง" {
json=$(curl -H "Content-Type: application/json" -X POST -d '{"tracknum" : "arm1234567th"}' http://localhost:8080/api/noreceives )
echo $json | grep "http://localhost:8080/api/noreceives"
}
	
	
@test "tracknum รับข้อมูลน้อยกว่า 5 ตัว " {
json=$(curl -H "Content-Type: application/json" -X POST -d '{"tracknum" : "arm"}' http://localhost:8080/api/noreceives )
echo $json | grep "size must be between 5 and 12"
}
	
	
@test "tracknum รับข้อมูลมากกว่า12 ตัว " {
json=$(curl -H "Content-Type: application/json" -X POST -d '{"tracknum" : "armz123456789th"}' http://localhost:8080/api/noreceives )
echo $json | grep "size must be between 5 and 12"
}
	
@test "tracknum ห้ามเป็น Not Null " {
json=$(curl -H "Content-Type: application/json" -X POST -d '{}' http://localhost:8080/api/noreceives )
echo $json | grep "may not be null"
}

@test "tracknum ใส่เป็นตัวเลขทั้งหมด " {
json=$(curl -H "Content-Type: application/json" -X POST -d '{"tracknum" : "456812345678989"}' http://localhost:8080/api/noreceives )
echo $json | grep "size must be between 5 and 12"
}