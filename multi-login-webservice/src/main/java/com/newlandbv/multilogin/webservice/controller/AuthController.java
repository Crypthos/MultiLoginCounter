package com.newlandbv.multilogin.webservice.controller;

import com.newlandbv.multilogin.webservice.models.User;
import com.newlandbv.multilogin.webservice.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("register")
    public String Register(@RequestBody User user) {

//        check if user duplicate result
        String result = authService.register(user);

        return result;
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        String token  = authService.login(user);

        return token;
    }
}
