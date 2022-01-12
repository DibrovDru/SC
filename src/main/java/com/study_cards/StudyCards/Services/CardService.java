package com.study_cards.StudyCards.Services;

import com.study_cards.StudyCards.dao.entities.CardEntity;
import com.study_cards.StudyCards.dao.repositories.CardEntityRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {

    @Autowired
    CardEntityRep cardEntityRep;

    public String getAll(Long folderId) {
        return cardEntityRep.findAllByFolderId(folderId).toString();
    }

    public String create(Long folderId, String name, String definition) {
        CardEntity cardEntity = CardEntity.builder()
                .folderId(folderId)
                .name(name)
                .definition(definition)
                .build();

        cardEntityRep.save(cardEntity);
        return getAll(folderId);
    }
}
