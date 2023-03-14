package com.groupfive.assignment.controller;


import com.groupfive.assignment.dto.LoginRequest;
import com.groupfive.assignment.model.User;
import com.groupfive.assignment.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

   @GetMapping("/user")
    public List<User> getAllUser(){
       return  userService.getAllUser();
   }

    @PostMapping("/user")
    public ResponseEntity<User> save(@RequestBody  User user) {
        User savedUser = userService.addUser(user);
        return ResponseEntity.created(URI.create("/user/" + savedUser.getId()))
                .body(savedUser);
    }
  @DeleteMapping("/user/{id}")
  public ResponseEntity<Void> deleteCustomerById(@PathVariable Long id) {
      userService.deleteUserById(id);
      return ResponseEntity.noContent().build();
  }

    @PostMapping("/log-in")
    public ResponseEntity<Void> login(@RequestBody LoginRequest loginRequest) {
        if (userService.authenticate(loginRequest)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
}
