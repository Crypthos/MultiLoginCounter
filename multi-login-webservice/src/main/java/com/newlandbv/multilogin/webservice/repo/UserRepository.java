package com.newlandbv.multilogin.webservice.repo;

import com.newlandbv.multilogin.webservice.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
