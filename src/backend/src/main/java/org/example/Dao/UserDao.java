package org.example.dao;

import org.example.entity.User;
import org.example.repository.UserRepository;
import org.example.utils.request.UserForm.RegisterUserForm;

public interface UserDao {
    String getPasswordByUsername(String username);
    boolean saveUser(RegisterUserForm registerUserForm);

    User getUserByUsername(String username);
}
