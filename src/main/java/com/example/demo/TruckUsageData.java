package com.example.demo;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
@Entity
public class TruckUsageData {

    private @Id
    @GeneratedValue
    Long id;

    //@NotNull
    //@Pattern(regexp="^\\d{4}-\\d{2}-\\d{2}$")
    private Date timeStart;


    @ManyToOne
    private TruckData truckData;
    @ManyToOne
    private TruckDriver truckDriver;

    private String location;

    @ManyToOne
    private User createUser;


    private TruckUsageData() {}

    public TruckUsageData(User createUser, Date timeStart, String location, TruckData truckData, TruckDriver truckDriver){
        this.createUser = createUser;
        this.timeStart = timeStart;
        this.location = location;
        this.truckData = truckData;
        this.truckDriver = truckDriver;
    }
}
