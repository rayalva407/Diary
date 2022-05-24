package com.genspark.backend.Controller;

import com.genspark.backend.Model.User;
import com.genspark.backend.Security.CustomUserDetails;
import com.genspark.backend.Service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @PostMapping("/signup")
    public User registerUser(@RequestBody User user) {
        return this.customUserDetailsService.registerUser(user);
    }
}
