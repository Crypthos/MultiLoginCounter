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

    /**
     * checks if users exists else create user with a random generated auth token
     *
     * @param user
     * @return newly created user with token
     */
    public User register(User user) {

        if (userExistCheck(user) == true) {
            return null;

        }
        user.setToken(generateToken());

        return userRepository.save(user);


    }

    /**
     * @return a random string as a authentication token
     */
    private String generateToken() {

        byte[] token = new byte[24];
        secureRandom.nextBytes(token);
        return base64encoder.encodeToString(token);
    }

    /**
     * check if user exist
     *
     * @param user
     * @return true if user exist else false
     */
    private boolean userExistCheck(User user) {
        User existingUser = userRepository.findById(user.getUsername()).orElse(null);

        if (existingUser == null) {
            return false;
        } else {
            return true;
        }

    }

    /**
     * Returns a know user
     *
     * @param user
     * @return user with token
     */
    public User login(User user) {
        User userExist = userRepository.findById(user.getUsername()).orElse(null);

        if (userExist.getUsername().equals(user.getUsername()) &&
                userExist.getPassword().equals(user.getPassword()) &&
                userExist.getRole().equals(user.getRole())){
//            na de check verwijder wachtwoord van bestaand gebruikers object en geef mee
            userExist.setPassword("");
            return userExist;
        }
            return null;
    }
}
