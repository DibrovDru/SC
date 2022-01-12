package com.study_cards.StudyCards.dao.controllers;

import com.study_cards.StudyCards.Services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController("com.study_cards.StudyCards.controllers.CardController")
public class CardController {
    @Autowired
    CardService cardService;

    @GetMapping("/folders/{folderName}")
    public String getAll(Model model,
                         @RequestParam("id") Long folderId,
                         @PathVariable String folderName
    ) {
        model.addAttribute("folderName", folderName);
        return cardService.getAll(folderId);
    }

    @PostMapping("/folders/{folderName}")
    public String create(
            Model model,
            @RequestParam("id") Long folderId,
            @RequestParam("name") String name,
            @RequestParam("definition") String definition,
            @PathVariable String folderName
    ) {
        model.addAttribute("folderName", folderName);
        return cardService.create(folderId, name, definition);
    }
}