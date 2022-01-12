package com.study_cards.StudyCards.dao.controllers;

import com.study_cards.StudyCards.Services.FoldersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController("com.study_cards.StudyCards.controllers.FolderController")
public class FolderController {
    @Autowired
    FoldersService foldersService;

    @GetMapping("/folders")
    public String getAll(
            @RequestParam("id") Long id
    ) {
        return foldersService.getAll(id);
    }

    @PostMapping("/folders")
    public String create(
            @RequestParam("id") Long id,
            @RequestParam("password") String name
    ) {
        return foldersService.create(id, name);
    }
}
