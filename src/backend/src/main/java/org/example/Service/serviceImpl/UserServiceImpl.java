package org.example.service.serviceImpl;

import org.example.dao.UserDao;
import org.example.entity.User;
import org.example.service.UserService;
import org.example.utils.request.UserForm.RegisterUserForm;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserDao userDao;

    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public User login(String username, String password) {
        String passwordByUsername = userDao.getPasswordByUsername(username);
        if(passwordByUsername == null) return null;
        if(passwordByUsername.equals(password)) return userDao.getUserByUsername(username);
        return null;
    }

    @Override
    public boolean register(RegisterUserForm registerUserForm) {
        return userDao.saveUser(registerUserForm);
    }
}
