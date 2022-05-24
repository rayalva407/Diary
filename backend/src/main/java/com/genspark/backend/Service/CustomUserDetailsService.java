package com.genspark.backend.Service;

import com.genspark.backend.Model.User;

public interface CustomUserDetailsService {
    User registerUser(User user);
}
