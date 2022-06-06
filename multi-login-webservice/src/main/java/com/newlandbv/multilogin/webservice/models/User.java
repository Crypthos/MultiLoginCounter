package com.newlandbv.multilogin.webservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    @Id
    @Column(length = 100,nullable = false, updatable = false)
    private String username;
    private String name;
    private String password;
    private String role;
    private String token;



}
