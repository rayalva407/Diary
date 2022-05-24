package com.genspark.backend.Service;

import com.genspark.backend.Model.User;

import java.util.List;

public interface CustomUserDetailsService {
    User registerUser(User user);
    List<User> getUsers();
}
