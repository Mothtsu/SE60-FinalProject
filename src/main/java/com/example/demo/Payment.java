package com.example.demo;

    import lombok.Data;

import javax.persistence.*;
    @Data
    @Entity

    public class Payment {

        private @Id
        @GeneratedValue
        Long id;
        private String name;
        private String tracknum;
        private String total;
        private String count;
        
        private String price;
        private String discount;
        private String amount;

        @ManyToOne
        private User User;


        private Payment() {}

        public Payment(String name,User User,String tracknum,String total,String count,String price,String discount,String amount) {
            this.name = name;
            this.tracknum = tracknum;
            this.total =total;
            this.count = count;
            this.price = price;
            this.discount = discount;
            this.amount = amount;
            this.User = User ;

        }
    }


