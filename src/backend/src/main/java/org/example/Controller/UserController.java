package org.example.controller;

import jakarta.transaction.Transactional;
import org.example.entity.User;
import org.example.service.UserService;
import org.example.utils.request.UserForm.RegisterUserForm;
import org.jetbrains.annotations.NotNull;
import org.springframework.web.bind.annotation.*;

@RestController
@Transactional
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/api/login",method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public User login(@RequestParam("username") String username, @RequestParam("password") String password){
        return userService.login(username, password);
    }

    @RequestMapping(value = "/api/register",method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public boolean register(@RequestBody @NotNull RegisterUserForm registerUserForm){
        return userService.register(registerUserForm);
    }
}
