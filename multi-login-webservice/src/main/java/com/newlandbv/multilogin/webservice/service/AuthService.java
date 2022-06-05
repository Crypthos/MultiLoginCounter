package com.newlandbv.multilogin.webservice.service;

import com.newlandbv.multilogin.webservice.models.User;
import com.newlandbv.multilogin.webservice.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.security.SecureRandom;
import java.util.Base64;

public class AuthService {

    @Autowired
    private UserRepository userRepository;

    private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64encoder = Base64.getUrlEncoder();

    public String register(User user) {

        if (userExistCheck(user) == true ){
            return "Error while adding user";

        }

        userRepository.save(user);

        return "User registered successful";

    }

    private String generateToken() {

        byte[] token = new byte [24];
        secureRandom.nextBytes(token);
        return base64encoder.encodeToString(token);
    }

    /**
     *
     * @param user
     * @return
     */
    private boolean userExistCheck(User user) {
        User existingUser = userRepository.findById(user.getUsername()).orElse(null);

        if (existingUser == null){
            return false;
        } else {
            return true;
        }

    }

    /**
     * Checks if user exists to get access to te app
     * @param user
     * @return user token
     */
    public String login(User user) {
        User userExist = userRepository.findById(user.getUsername()).orElse(null);

        if (userExist == null){
            return "";
        } else {
            return userExist.getToken();
        }
    }
}
