package com.study_cards.StudyCards.dao.controllers;

import com.study_cards.StudyCards.Services.UserService;
import com.study_cards.StudyCards.dao.entities.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/login")
    public String logIn(
            @RequestParam("email") String email,
            @RequestParam("password") String password
    ) {
        return userService.LogIn(email, password);
    }

    @PostMapping("/signup")
    @ResponseBody
    public String signup(@RequestBody UserEntity user) {
        return userService.create(user.email, user.password);
    }

    @GetMapping("/signup")
    public String index() {
        return "index";
    }

    @GetMapping("/user")
    public String getAll() {
        return userService.getAll();
    }

}
