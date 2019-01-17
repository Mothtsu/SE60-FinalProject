#!/usr/bin/env bats
#B5601905
#GiTinsurance system


@test "trackNumber right" {
json=$(curl -H "Content-Type: application/json" -X POST -d '{"trackNumber" : "exp0123456wy"}' http://localhost:8080/api/giTinsurances )
echo $json | grep "http://localhost:8080/api/giTinsurances"
}
	
	
@test "trackNumber set less than 5 letters " {
json=$(curl -H "Content-Type: application/json" -X POST -d '{"trackNumber" : "test0"}' http://localhost:8080/api/giTinsurances )
echo $json | grep "size must be between 5 and 12"
}
	
	
@test "trackNumber set more than 12 letters " {
json=$(curl -H "Content-Type: application/json" -X POST -d '{"trackNumber" : "LOVE123456789th"}' http://localhost:8080/api/giTinsurances )
echo $json | grep "size must be between 5 and 12"
}
	
@test "trackNumber haven't to Not Null " {
json=$(curl -H "Content-Type: application/json" -X POST -d '{}' http://localhost:8080/api/giTinsurances )
echo $json | grep "may not be null"
}

@test "All trackNumber is Integer " {
json=$(curl -H "Content-Type: application/json" -X POST -d '{"trackNumber" : "1029384756"}' http://localhost:8080/api/giTinsurances )
echo $json | grep "size must be between 5 and 12"
}